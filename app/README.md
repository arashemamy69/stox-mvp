# Stox MVP Frontend

Bootstrap Next.js application for the Stox portfolio analytics MVP.

## Getting started

```bash
npm install
npm run dev
```

Environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="anon-key"
```

These must match the Supabase project configured for the MVP. See `lib/supabase/client.ts` for how the app reads them at runtime.

## Available scripts

- `npm run dev` – start Next.js locally
- `npm run lint` – run ESLint (Next.js defaults)
- `npm run test` – execute unit tests with Vitest
- `npm run test:e2e` – run Playwright E2E tests (requires `npm run dev` or uses the Playwright web server config)

Playwright assets are stored in `playwright-report/` and `test-results/` locally. CI uploads trace viewer artifacts on failure.
