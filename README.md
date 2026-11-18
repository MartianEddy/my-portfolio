# EDBOT Engineering

**AI Security & Agent Systems Engineer**  
Building secure, reliable and verifiable autonomous AI systems.

This repository is the source of truth for Edwin Wakibari's engineering portfolio and selected security-engineering work. It is intended to make the engineering concrete: documented problem statements, architecture, implementation evidence, tests, security boundaries and known limitations.

## Repository layout

```text
apps/
  web/                 Next.js portfolio application (introduced in a later phase)
services/
  sentinel-api/        Sentinel security evaluation API (introduced in a later phase)
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

## Planned technology

| Area | Direction |
|---|---|
| Portfolio | Next.js App Router, React, TypeScript and Tailwind CSS |
| Security service | Python, FastAPI, Pydantic and pytest |
| Quality gates | ESLint, TypeScript checks, pytest and GitHub Actions |
| Development model | Local-first; web application and Sentinel API run as separate processes |

Technology choices are recorded in [Architecture Decision Records](docs/decisions/). This foundation does not yet include the application implementation, deployment configuration or a public Sentinel API.

## Local development

The application and service directories are intentionally placeholders at this stage. Their setup instructions will be added with their respective implementation changes. Do not assume that the repository is runnable as an application yet.

## Security and responsible disclosure

Do not commit credentials, API keys, personal data, production logs or runtime audit records. If you identify a security issue in this repository, avoid publishing exploit details that could affect real systems; contact the repository owner privately.

## Project status

The repository foundation is being established incrementally. Project descriptions and case studies will be limited to work supported by source code, tests, demonstrations or clearly identified research documentation.

## License

This repository is distributed under the MIT License. See [LICENSE](LICENSE).
