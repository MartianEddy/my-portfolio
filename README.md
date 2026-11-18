# EDBOT Engineering

**AI Security & Agent Systems Engineer**  
Building secure, reliable and verifiable autonomous AI systems.

This repository is the source of truth for Edwin Wakibari's engineering portfolio and selected security-engineering work. It is intended to make the engineering concrete: documented problem statements, architecture, implementation evidence, tests, security boundaries and known limitations.

## Repository layout

```text
apps/
  web/                 Next.js portfolio application
services/
  sentinel-api/        Sentinel security evaluation API (planned for a later phase)
docs/
  architecture/        System architecture and boundaries
  decisions/           Architecture Decision Records (ADRs)
```

## Engineering principles

- **Evidence over claims:** distinguish implemented, tested, demonstrated and proposed work.
- **Security by design:** document trust boundaries, threat assumptions, least privilege and failure modes.
- **Verifiability:** prefer reproducible tests, explicit evaluation criteria and traceable decisions.
- **Incremental delivery:** keep changes reviewable and preserve a clear history.
- **Honest limitations:** communicate what a control does not guarantee.

## Technology

| Area | Implementation |
|---|---|
| Portfolio | Next.js App Router, React, TypeScript and Tailwind CSS |
| Security service | Python, FastAPI, Pydantic and pytest (planned; separate phase) |
| Quality gates | ESLint, TypeScript checks, pytest and GitHub Actions (CI introduced in a later phase) |
| Development model | Local-first; web application and Sentinel API run as separate processes |

Technology choices are recorded in [Architecture Decision Records](docs/decisions/).

## Local development

```bash
cd apps/web
npm ci
npm run dev
```

Run the web quality checks from `apps/web`:

```bash
npm run lint
npm run typecheck
npm run build
```

The portfolio routes are `/`, `/engineering`, `/research`, `/security-lab`, `/engineering-notes` and `/about`. The Sentinel API is not yet integrated into the website or exposed as a public service.

## Content integrity

Project descriptions distinguish implemented prototypes, MVPs under hardening, project prototypes and work whose implementation evidence still needs review. Case studies should identify personal contribution separately from team work and include verification evidence and known limitations.

## Security and responsible disclosure

Do not commit credentials, API keys, personal data, production logs or runtime audit records. If you identify a security issue in this repository, avoid publishing exploit details that could affect real systems; contact the repository owner privately.

## License

This repository is distributed under the MIT License. See [LICENSE](LICENSE).
