FROM node:22-alpine AS base

# -----------------------------------
FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN mkdir -p /pnpm && pnpm config set global-bin-dir /pnpm
COPY . .
RUN pnpm add turbo --global 
# Prune for the admin app
RUN pnpm turbo prune admin --docker

# -----------------------------------
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/full/ .
# COPY --from=builder /app/apps/admin/.env ./
RUN pnpm install --frozen-lockfile
RUN pnpm prisma generate --schema=./packages/db/prisma/schema.prisma

# Build the admin app
RUN pnpm turbo run build


# -----------------------------------
FROM base AS runner
WORKDIR /app

# Accept DATABASE_URL in runtime stage too (if needed)
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
RUN apk add --no-cache npm && \
    npm install -g prisma

# Create user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

USER nextjs

# Copy build artifacts
COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/public ./apps/admin/public

# Copy Prisma schema and node_modules for runtime database operations
COPY --from=installer --chown=nextjs:nodejs /app/packages/db/prisma ./packages/db/prisma
COPY --from=installer --chown=nextjs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=installer --chown=nextjs:nodejs /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=installer --chown=nextjs:nodejs /app/node_modules/prisma ./node_modules/prisma

# Copy environment file for database connection
# COPY --from=installer --chown=nextjs:nodejs /app/.env ./.env

# Expose port
EXPOSE 3000
CMD ["sh", "-c", "prisma db push --skip-generate --schema=./packages/db/prisma/schema.prisma && node apps/admin/server.js"]