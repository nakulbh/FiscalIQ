<!-- intent-skills:start -->
## Skill Loading

Before substantial work:
- Skill check: run `npx @tanstack/intent@latest list`, or use skills already listed in context.
- Skill guidance: if one local skill clearly matches the task, run `npx @tanstack/intent@latest load <package>#<skill>` and follow the returned `SKILL.md`.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

# TaxCalculator

## Commands

```bash
npm run dev          # Vite dev server on port 3000
npm run build        # Production build
npm run test         # Vitest (single run)
npm run deploy       # Build + wrangler deploy to Cloudflare
```

### Prisma (requires .env.local with DATABASE_URL)

All Prisma commands use `dotenv -e .env.local` automatically:
```bash
npm run db:generate  # Generate Prisma client to src/generated/prisma
npm run db:push      # Push schema changes to DB
npm run db:migrate   # Run migrations
npm run db:seed      # Seed database (tsx prisma/seed.ts)
```

### Convex

```bash
npx convex dev       # Start Convex dev server (needs VITE_CONVEX_URL + CONVEX_DEPLOYMENT in .env.local)
```

### Shadcn

```bash
pnpm dlx shadcn@latest add <component>
```

## Architecture

- **Framework**: TanStack Start (SSR on Cloudflare Workers)
- **Routing**: TanStack Router with file-based routing in `src/routes/`. Auto-generates `src/routeTree.gen.ts` — do not edit manually.
- **UI**: Shadcn (new-york style, zinc base) + Tailwind CSS v4. Components at `#/components/ui/*` (aliased to `src/components/ui`).
- **AI**: TanStack AI SDK with multi-provider support (Anthropic, OpenAI, Gemini, Ollama).
- **Auth**: Clerk — provider wraps app in `src/integrations/clerk/provider.tsx`
- **Backend**: Convex (schema in `convex/schema.ts`) + Prisma/PostgreSQL (schema in `prisma/schema.prisma`). Two separate data layers.
- **Prisma client**: Generated to `src/generated/prisma/`. Import via `src/db.ts` (singleton with hot-reload guard). Uses `@prisma/adapter-pg`.
- **Path aliases**: `#/*` and `@/*` both map to `./src/*`

## Env vars (.env.local)

Required: `DATABASE_URL`, `VITE_CONVEX_URL`, `CONVEX_DEPLOYMENT`, `VITE_CLERK_PUBLISHABLE_KEY`, `ANTHROPIC_API_KEY`

## Workflow

- Always commit and push after completing a task.

## Conventions

- TypeScript strict mode with `noUnusedLocals`, `noUnusedParameters`
- Convex schemas: use `v.id("tableName")` for foreign keys, `v.optional()` for nullable fields, do not define `_id` or `_creationTime` (auto-generated)
- Tailwind CSS is loaded via Vite plugin (`@tailwindcss/vite`), not PostCSS config
