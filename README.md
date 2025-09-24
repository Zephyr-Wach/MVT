# My Vue Template

一个基于 **Vite + Vue 3 + TypeScript + TailwindCSS** 的前端项目模板，适合作为新项目的起点。  
依赖版本已经固定，保证环境一致性。

## 特性

- ⚡ 使用 [Vite 7](https://vitejs.dev/) 作为构建工具  
- 🖖 [Vue 3.5](https://vuejs.org/) + [Vue Router 4](https://router.vuejs.org/)  
- 🌍 [Vue I18n](https://vue-i18n.intlify.dev/) 国际化支持  
- 🎨 [TailwindCSS 3.4](https://tailwindcss.com/) 快速样式开发  
- 🔒 锁定依赖版本，保证模板稳定复现  
- 📝 TypeScript 支持（基于 `vue-tsc`）

## 使用方法

### 方式一：使用 `degit`（推荐）

```bash
npx degit github:Zephyr-Wach/my-vue-template my-app
cd my-app
npm install
npm run dev
```

### 方式二：GitHub 手动克隆

```bash
git clone https://github.com/zephyr/my-vue-template.git my-app
cd my-app
npm install
npm run dev
```

### 脚本命令
- `npm run dev` —— 启动开发服务器
- `npm run build` —— 构建生产环境代码
- `npm run preview` —— 本地预览生产构建

### 目录结构
```pgsql
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
├── src/
└── .gitignore
```

### 依赖版本
#### 生产依赖
- `axios 1.12.1`
- `vue 3.5.18`
- `vue-i18n 11.1.12`
- `vue-router 4.5.1`

#### 开发依赖
- `vite 7.1.2`
- `typescript 5.8.3`（可根据需要调整为稳定版）
- `vue-tsc 3.0.5`
- `tailwindcss 3.4.14`
- `autoprefixer 10.4.21`
- `postcss 8.5.6`
- `@vitejs/plugin-vue 6.0.1`
- `@vue/tsconfig 0.7.0`
- `@types/node 24.3.3`


