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

# Prune for the client app 
RUN pnpm turbo prune client --docker

# -----------------------------------
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate


COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/full/ .
RUN pnpm install --frozen-lockfile
RUN pnpm prisma generate --schema=./packages/db/prisma/schema.prisma


#Build the client app
RUN pnpm turbo run build
#Push changes to database
RUN pnpm prisma db push --skip-generate --schema=./packages/db/prisma/schema.prisma

# -----------------------------------
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/public ./apps/client/public

EXPOSE 3000

CMD ["node", "apps/client/server.js"]
