# MVT (My Vue Template)

[English](./README.md) | [简体中文](./README_zh.md)

![Vue](https://img.shields.io/badge/Vue-3.5.18-42b883)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A clean and practical starter template for Vue projects.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Conventions](#conventions)

## Features

- Ready-to-use Vue 3 + TypeScript setup
- Router + Pinia + Axios + i18n integrated
- TailwindCSS 4 configured with Vite plugin
- Strict type checking via `vue-tsc`
- Clean folder organization for template reuse

## Tech Stack

| Module | Version |
| --- | --- |
| Vue | `3.5.18` |
| Vue Router | `4.5.1` |
| Pinia | `^3.0.3` |
| Axios | `1.12.1` |
| Vue I18n | `11.1.12` |
| Vite | `7.1.2` |
| TypeScript | `5.8.3` |
| TailwindCSS | `^4.1.13` |

## Quick Start

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run type-check` | Run TypeScript checks (`vue-tsc --noEmit`) |
| `npm run build` | Type-check then build production bundle |
| `npm run preview` | Preview production bundle locally |

## Project Structure

```text
src/
  api/          # API modules
  components/   # Reusable components
  layouts/      # Layout components
  locales/      # i18n locale files
  router/       # Route definitions and guards
  store/        # Compatibility re-export layer
  stores/       # Pinia stores (actual implementation)
  styles/       # Global style entry
  types/        # Shared type definitions
  utils/        # Utility modules
  views/        # Route pages
```

## Environment Variables

Copy `.env.example` to `.env.local` if needed:

```bash
VITE_API_PROXY_TARGET=http://127.0.0.1:6688
```

This is used by Vite dev proxy for `/api` requests.

## Conventions

- Prefer importing stores from `@/stores/*`.
- `src/store/*` remains for backward-compatible re-exports.
- Keep route pages inside `src/views`.
