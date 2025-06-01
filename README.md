# Next-Turbo Starter

A modern Next.js monorepo starter template built with Turborepo.

## Technologies
- Next js 15
- React 19
- Tailwind css v4
- Turbo Repo
- Prisma
- Docker 

## Features

- **Monorepo Structure**: Built with Turborepo for efficient workspace management
- **Apps**: 
  - Client app
  - Admin app
  - Database
- **Database Integration**: PostgreSQL with Prisma ORM
- **Docker Support**: Containerization with multi-stage builds
- **CI/CD Pipeline**: GitHub Actions workflow for testing and image building
- **TypeScript**: Full TypeScript support throughout the monorepo

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.0.0+

### Installation

```bash
# Clone the repository
git clone [repo-url]
cd next-app

# Install dependencies
pnpm install
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Run specific apps
pnpm dev:client  # Run client app on port 3001
pnpm dev:admin   # Run admin app on port 3000

# Database commands
pnpm db:push     # Push schema changes
pnpm db:generate # Generate Prisma client
pnpm db:studio   # Open Prisma Studio
```

### Building

```bash
# Build all apps
pnpm build

# Linting
pnpm lint
```
### Tailwind v4
```json
// add this for vscode settings.json
"tailwindCSS.experimental.configFile": "./packages/ui/src/styles/globals.css"
```
This solves Tailwind css intellisense issue in vscode

### Deployment

The project is configured for deployment with Docker:
- Client app exposed on port 3001
- Admin app exposed on port 3000
- **Database** dockerised using `export const dynamic="force-dynamic"` on **page.tsx** or **layout.tsx** to disable prerender on dynamic pages
- Environment variables passed through Docker for configuration

## Project Structure

```
.
├── apps/
│   ├── admin/         # Admin Next.js application
│   └── client/        # Client Next.js application
├── packages/
│   ├── db/            # Database package with Prisma
│   ├── eslint-config/ # Shared ESLint configurations
│   ├── typescript-config/ # Shared TypeScript configurations
│   └── ui/            # Shared UI component library
├── .github/           # GitHub Actions workflows
├── docker-stack.yaml  # Docker Compose configuration
└── turbo.json         # Turborepo configuration
```

## Environment Variables

Create a `.env` file in the root directory with:

```
DATABASE_URL=postgresql://postgres:1234@db:5432/dbname
```
