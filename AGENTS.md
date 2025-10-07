# AGENTS.md

## Purpose
This file instructs agents (Codex/Claude) how to behave in this repo.

## Rules / Guardrails
1. All changes must open a PR. Do NOT merge without a passing CI and human approval.
2. Any migration that modifies or drops data must be marked `--requires-approval` and must not run automatically.
3. Do not add new production env variables without listing them here and receiving human approval.
4. Unit tests and Playwright E2E tests must pass in CI for any PR to be merged.
5. Use `main` as protected branch. Feature work goes in `feature/*` branches.
6. For sensitive operations (db migrations, secrets changes, deleting tables), create a GitHub issue and tag `ops-approval`.
7. Commit messages: `<area>: <short description>` (e.g., `ingest: add RBC CSV adapter`).

## Contacts
- Owner: arash (you)
