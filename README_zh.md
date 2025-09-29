# My Vue Template

一个基于 **Vite + Vue 3 + TypeScript + TailwindCSS 4 ** 的前端项目模板，适合作为新项目的起点。  
依赖版本已经固定，保证环境一致性。

## 特性

- ⚡ 使用 [Vite 7](https://vitejs.dev/) 作为构建工具
- 🖖 [Vue 3.5](https://vuejs.org/) + [Vue Router 4](https://router.vuejs.org/)
- 🌍 [Vue I18n](https://vue-i18n.intlify.dev/) 国际化支持
- 🎨 [TailwindCSS 4](https://tailwindcss.com/) 快速样式开发
- 🔒 锁定依赖版本，保证模板稳定复现
- 📝 TypeScript 支持（基于 `vue-tsc`）

## 使用方法

### 使用 `degit`（推荐）

```bash
npx degit git@github.com:Zephyr-Wach/MVT.git my-app
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
MVT/
├─ src/
│  ├─ api/          # 请求封装 & 接口定义
│  ├─ assets/       # 静态资源
│  ├─ components/   # 公共组件
│  ├─ layouts/      # 布局组件
│  ├─ pages/        # 页面
│  ├─ router/       # 路由
│  ├─ store/        # pinia 全局状态
│  ├─ utils/        # 工具函数
│  ├─ styles/       # 全局样式 (tailwind / scss)
│  ├─ App.vue
│  └─ main.ts
├─ .eslintrc.js     # 代码规范
├─ vite.config.ts   # vite 配置
├─ tsconfig.json
├─ package.json
```

### 依赖版本

#### 生产依赖
- `axios 1.12.1`
- `vue 3.5.18`
- `vue-i18n 11.1.12`
- `vue-router 4.5.1`

#### 开发依赖
- `vite 7.1.2`
- `typescript 5.8.3`
- `vue-tsc 3.0.5`
- `tailwindcss 4.1.13`
- `@vitejs/plugin-vue 6.0.1`
- `@vue/tsconfig 0.7.0`
- `@types/node 24.3.3`


