# InformedCOOKIE Agent Guide

## Project Purpose

InformedCOOKIE is a demonstration repository for presentations showing how OpenCode works. It is a Software-as-a-Service-style government website from Informed Solutions, themed around baking and incrementing cookies for the civil service.

Optimise all work for fast, visible iteration during a live presentation. Prefer the smallest clear implementation that satisfies the prompt over production-grade architecture, extensive abstraction, or speculative features.

Gameplay mechanics are intentionally undefined. Do not introduce a default set of mechanics or expand the game beyond the current prompt; presentation participants should be able to suggest and iterate on the mechanics themselves.

## Technology And Structure

- Use React, TypeScript, Vite, and npm.
- Keep the frontend application at the repository root.
- Keep gameplay and application state in the browser. Use browser storage only when persistence is requested or clearly needed by the current feature.
- Do not add a backend, database, workspace layout, or frontend/backend directory split unless a prompt explicitly requests one.
- Keep dependencies few and choose simple, established packages when a dependency is necessary.

## GOV.UK Frontend

- Use the `govuk-frontend` npm package for GOV.UK assets and styles; do not vendor copies of the upstream project.
- Follow GOV.UK Frontend conventions for typography, spacing, components, responsive behaviour, and accessible markup.
- Apply InformedCOOKIE and Informed Solutions branding without presenting the demonstration as an official GOV.UK service.
- Prefer existing GOV.UK components and utility classes over recreating equivalent UI from scratch.
- Preserve keyboard operation, visible focus states, semantic HTML, useful labels, and sufficient colour contrast.

## Coding Standards

- Use strict TypeScript and functional React components.
- Keep components and state flows direct. Extract helpers or components only when they improve readability or are reused.
- Avoid `any`, unnecessary type assertions, premature abstractions, and speculative compatibility code.
- Match existing code conventions and limit changes to the requested feature.
- Add comments only where intent would otherwise be difficult to understand.
- Keep the interface usable on both desktop and mobile.

## Fast Iteration Rules

- Focused unit tests and assertions are allowed when they demonstrate or verify the requested behaviour.
- Prefer small unit-test examples over integration, end-to-end, snapshot, or broad automated test suites.
- Add a testing framework, fixtures, test scripts, or test configuration only when they are needed for the requested unit-testing demonstration.
- Perform minimal validation after changes: run the existing TypeScript type-check command and any relevant unit tests when available.
- Do not run builds, linters, formatters, or broad validation commands unless the prompt explicitly requests them.
- Do not refactor unrelated code or add production infrastructure, authentication, analytics, deployment configuration, or other hardening unless explicitly requested.
- If a detail is unspecified, choose the simplest reversible implementation that leaves room for the next presentation prompt.
