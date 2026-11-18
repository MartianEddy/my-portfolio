# ADR 0001: Use a lightweight monorepo

- **Status:** Accepted
- **Date:** 2026-11-18
- **Decision owner:** Edwin Wakibari

## Context

The portfolio web application and Sentinel security service are distinct deployable components but belong to one engineering portfolio. Keeping them in one repository makes cross-project documentation, review and quality conventions easier to discover. A heavyweight monorepo orchestrator would add maintenance overhead before the repository has enough packages to justify it.

## Decision

Use a lightweight monorepo with clearly separated top-level directories:

- `apps/web/` for the portfolio frontend;
- `services/sentinel-api/` for the Sentinel API;
- `docs/` for architecture, threat models, decisions and engineering notes.

Use native npm and Python tooling initially. Run the frontend and backend as separate local processes. Introduce workspace orchestration only when demonstrated coordination needs justify it.

## Consequences

- Clear ownership and boundaries between frontend and service code.
- Shared documentation and repository-level conventions.
- Independent dependency management and quality checks.
- Some duplicated configuration may exist; avoid premature abstraction.
- Changes should remain scoped and reviewable.
