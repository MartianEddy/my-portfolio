# ADR 0003: Harden Sentinel before expanding its capabilities

- **Status:** Accepted
- **Date:** 2026-11-18
- **Decision owner:** Edwin Wakibari

## Context

Sentinel is an early agent-security MVP with heuristic prompt-injection indicators, default-deny tool authorization, a bounded calculator, a local mock lookup and a hash-chained JSONL audit log. These controls are useful foundations, but they do not establish that an agent is safe or that the service is production-ready.

## Decision

Prioritize hardening and evidence before adding model integration, autonomous execution or public exposure. The next security work should focus on:

1. explicit authorization context and strict default-deny behavior;
2. input and argument validation at API boundaries;
3. audit-log integrity semantics, including modification, truncation and concurrency limitations;
4. adversarial and benign evaluation corpora with reproducible metrics;
5. a written threat model and security architecture;
6. clear documentation of assumptions, residual risks and what the MVP does not protect against.

Keep Sentinel local-first in this phase. Do not connect it to real external tools or expose an unauthenticated endpoint publicly.

## Consequences

- Security limitations remain visible rather than hidden behind broad safety claims.
- New capabilities are gated by tests and threat-model review.
- Heuristic detection is treated as a signal, not a reliable prevention boundary.
- Remote authentication, durable audit storage and external anchoring remain future decisions, not implied features.
