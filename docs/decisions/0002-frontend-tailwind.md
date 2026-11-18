# ADR 0002: Use Tailwind CSS for the portfolio frontend

- **Status:** Accepted
- **Date:** 2026-11-18
- **Decision owner:** Edwin Wakibari

## Context

The portfolio needs a consistent, responsive visual system that can be iterated on quickly without introducing a large component framework. The existing starter uses custom CSS; the agreed direction is to use Tailwind CSS for utility-driven styling and keep components deliberately small.

## Decision

Use Tailwind CSS with the Next.js App Router, React and TypeScript in `apps/web/`. Keep content and site configuration separate from presentation where practical. Use semantic HTML and accessible interaction patterns; utility classes do not replace accessibility review.

## Consequences

- Consistent spacing, typography and responsive behavior through shared design tokens/configuration.
- Styling remains close to component markup.
- Avoid unnecessary UI libraries until a concrete requirement exists.
- Validate keyboard access, contrast, reduced-motion behavior and narrow-screen layouts during implementation.
- The Tailwind version and dependencies will be pinned in the frontend package manifest and lockfile when the app is introduced.
