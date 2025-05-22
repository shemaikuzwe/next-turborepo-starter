FROM node:22-alpine AS base

# -----------------------------------
FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

COPY . .
RUN pnpm install --frozen-lockfile

# Prune for the client app 
RUN pnpm turbo prune client --docker

# -----------------------------------
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

COPY --from=builder /app/out/json/ .
RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
RUN pnpm turbo run build

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
