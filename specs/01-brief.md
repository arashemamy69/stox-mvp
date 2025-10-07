# Stox MVP — Brief

## Goal
Build a minimal investment portfolio monitoring & analysis web app that:
- Ingests CSV transaction statements from brokerages (RBC, CIBC, IBKR).
- Shows consolidated holdings, book cost, realized/unrealized P&L.
- Tracks dividend income and supports a DRIP toggle.
- Exports portfolio CSV and simple PDF report.

## Core pages
1. Dashboard (portfolio value, day P/L, YTD P/L, income last 12 months)
2. Portfolio (table of positions; click for details)
3. Transactions (upload CSV, view ingest status)
4. Income (dividend timeline & totals)
5. Settings (DRIP toggle, account mapping)

## Success metrics
- CSV ingest to positions works reliably on first 3 sample CSVs.
- P/L calculations agree with a manual spreadsheet for sample data.
- Preview deployment on Vercel for every PR.

## MVP scope (Must-have)
- Supabase (Postgres) backend, basic Auth (email link)
- Import CSV → normalized transactions table
- Cost-basis (ACB or FIFO), realized/unrealized P&L
- DRIP toggle (affects positions vs cash)
- Next.js frontend with search/filter + export
