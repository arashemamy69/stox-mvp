# PR Draft — feature/bootstrap

Use this content when opening the PR from branch `feature/bootstrap` into `main`.

---

## Summary

- [ ] Next.js + Tailwind + shadcn scaffolding in `/app`
- [ ] Placeholder pages for Dashboard, Portfolio, Transactions, Income, Settings
- [ ] Supabase client helpers reading `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Vitest unit tests and Playwright smoke tests
- [ ] CI workflow running lint, unit, and E2E tests with Playwright traces on failure
- [ ] Milestone 1 issue drafts committed under `docs/`

## Testing

- [ ] `npm run lint`
- [ ] `npm run test`
- [ ] `npm run test:e2e`

## Notes

- Remember to set Supabase env vars in the PR environment (Vercel/GitHub Actions).
- Playwright traces will upload automatically on CI failure for debugging.
