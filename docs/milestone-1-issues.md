# Milestone 1 — Issue Drafts

Use these when opening issues on GitHub. Each ticket should be labeled `M1` and the `area/*` label noted below. Tag `ops-approval` if the implementation touches sensitive infrastructure.

---

## 1. DB schema & migrations

- **Title:** `M1: Define portfolio schema and bootstrap migrations`
- **Labels:** `M1`, `area/db`
- **Summary:** Design normalized tables for accounts, positions, transactions, dividends, and daily balances. Provide initial SQL migrations (marked `--requires-approval` if data-affecting) and ERD.
- **Acceptance criteria:**
  - ERD covers portfolio, transaction, income, and settings domains.
  - Migration scripts scaffolded with appropriate guards.
  - Documentation covers rollback strategy and seeding approach.

## 2. Supabase wiring

- **Title:** `M1: Wire Supabase auth and storage for ingest`
- **Labels:** `M1`, `area/backend`
- **Summary:** Configure Supabase Auth (email magic links), RLS policies, and storage buckets for CSV uploads. Provide client helpers for the Next.js app and test edge cases.
- **Acceptance criteria:**
  - Auth rules allow only owner access to portfolio data.
  - Storage bucket for ingestion locked down to authenticated users.
  - README updates describe required env vars and setup steps.

## 3. CSV ingestion adapters

- **Title:** `M1: Build broker CSV ingestion adapters (RBC, CIBC, IBKR)`
- **Labels:** `M1`, `area/ingest`
- **Summary:** Implement parsing pipeline that transforms source CSVs into the normalized transactions schema with validation. Include fixtures for each brokerage and automated tests.
- **Acceptance criteria:**
  - Sample CSV files parsed without manual intervention.
  - Normalized outputs validated against schema contracts.
  - Error handling documented for unsupported records.

## 4. Calculators & analytics

- **Title:** `M1: Implement portfolio calculators (ACB, P/L, TWR/MWR, DRIP)`
- **Labels:** `M1`, `area/analytics`
- **Summary:** Create calculation services for adjusted cost base, realized/unrealized P&L, time- and money-weighted returns, and DRIP logic. Provide unit tests covering edge cases.
- **Acceptance criteria:**
  - Calculators align with reference spreadsheet outputs.
  - DRIP toggle flows through holdings vs. cash balances.
  - Results exposed via typed interface for the frontend.

## 5. UI wiring & tests

- **Title:** `M1: Wire frontend UI flows and automated tests`
- **Labels:** `M1`, `area/frontend`
- **Summary:** Connect Next.js views to Supabase data, add loading/error states, and expand Playwright coverage for critical flows. Include component/unit testing where valuable.
- **Acceptance criteria:**
  - Dashboard, Portfolio, Transactions, Income, and Settings display live data.
  - E2E tests cover ingest → analytics → reporting flows.
  - Storybook or visual coverage plan documented if needed.
