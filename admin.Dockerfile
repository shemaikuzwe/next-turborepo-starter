FROM node:22-alpine AS base

# DEBUG: Check if .env file was copied
RUN echo "=== Checking for .env file in Docker ===" && \
    ls -la .env || echo ".env file not found in Docker context" && \
    echo "=== Checking DATABASE_URL ===" && \
    printenv | grep DATABASE_URL || echo "DATABASE_URL not found in environment"

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
RUN pnpm install --frozen-lockfile
RUN pnpm prisma generate --schema=./packages/db/prisma/schema.prisma

# Build the admin app
RUN pnpm turbo run build

# Push changes to database (consider moving this to runtime)
RUN pnpm prisma db push --skip-generate --schema=./packages/db/prisma/schema.prisma

# -----------------------------------
FROM base AS runner
WORKDIR /app

# Accept DATABASE_URL in runtime stage too (if needed)
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Create user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

USER nextjs

# Copy build artifacts
COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/public ./apps/admin/public

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "apps/admin/server.js"]