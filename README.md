# MVT (My Vue Template)

[**English**](./README.md) | [中文](./README_zh.md)

A practical starter template for Vue projects based on:

*   Vite 7
*   Vue 3 + TypeScript
*   Vue Router 4
*   Pinia
*   Axios
*   Vue I18n
*   TailwindCSS 4

## Quick Start

```
npm install
npm run dev
```

Build and preview:

```
npm run build
npm run preview
```

## Scripts

*   `npm run dev`: Start Vite dev server
*   `npm run type-check`: Run TypeScript type checks (`vue-tsc --noEmit`)
*   `npm run build`: Type-check then build production bundle
*   `npm run preview`: Preview the production bundle locally

## Project Structure

```
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

```
VITE_API_PROXY_TARGET=http://127.0.0.1:6688
```

Used by Vite dev proxy for `/api` requests.