# My Vue Template

A front-end project template based on **Vite + Vue 3 + TypeScript + TailwindCSS 4**, ideal as a starting point for new projects.  
Dependencies are pinned to ensure consistent environments.

## Features

- ⚡ Powered by [Vite 7](https://vitejs.dev/) as the build tool
- 🖖 [Vue 3.5](https://vuejs.org/) + [Vue Router 4](https://router.vuejs.org/)
- 🌍 [Vue I18n](https://vue-i18n.intlify.dev/) for internationalization support
- 🎨 [TailwindCSS 4](https://tailwindcss.com/) for rapid styling
- 🔒 Locked dependency versions for reproducible builds
- 📝 TypeScript support (based on `vue-tsc`)

## Usage

### Using `degit` (Recommended)

```bash
npx degit git@github.com:Zephyr-Wach/MVT.git my-app
cd my-app
npm install
npm run dev
```

### Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Locally preview the production build

### Directory Structure

```
MVT/
├─ src/
│  ├─ api/          # API requests & interface definitions
│  ├─ assets/       # Static assets
│  ├─ components/   # Shared components
│  ├─ layouts/      # Layout components
│  ├─ pages/        # Pages
│  ├─ router/       # Routing
│  ├─ store/        # Pinia global state
│  ├─ utils/        # Utility functions
│  ├─ styles/       # Global styles (Tailwind / SCSS)
│  ├─ App.vue
│  └─ main.ts
├─ .eslintrc.js     # Code linting configuration
├─ vite.config.ts   # Vite configuration
├─ tsconfig.json
├─ package.json
```

### Dependency Versions

#### Production Dependencies

- `axios 1.12.1`
- `vue 3.5.18`
- `vue-i18n 11.1.12`
- `vue-router 4.5.1`

#### Development Dependencies

- `vite 7.1.2`
- `typescript 5.8.3`
- `vue-tsc 3.0.5`
- `tailwindcss 4.1.13`
- `@vitejs/plugin-vue 6.0.1`
- `@vue/tsconfig 0.7.0`
- `@types/node 24.3.3`
