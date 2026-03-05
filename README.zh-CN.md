# MVT Vue 模板

一个注重结构规范和可扩展性的 Vue 3 起步模板。

## 技术栈

*   Vite 7
*   Vue 3 + TypeScript
*   Vue Router 4
*   Pinia
*   Axios
*   Vue I18n
*   TailwindCSS 4

## 快速开始

```
npm install
npm run dev
```

## 脚本命令

*   `npm run dev`：启动本地开发服务器
*   `npm run type-check`：执行 TypeScript 类型检查
*   `npm run build`：类型检查并构建生产包
*   `npm run preview`：本地预览生产包

## 目录结构

```
src/
  api/            # API 模块
  components/     # 复用组件
  layouts/        # 布局组件（导航栏/侧边栏）
  locales/        # 国际化资源
  router/         # 路由定义与守卫
  stores/         # Pinia 状态管理
  styles/         # 全局样式
  types/          # 共享类型声明
  utils/          # 工具模块
  views/          # 路由页面
  App.vue
  main.ts
```

## 规范约定

*   路由页面统一使用 `*View.vue` 命名。
*   非组件文件使用 `kebab-case` 或语义化短名。
*   import 不带 `.ts` 扩展名。
*   i18n key 使用命名空间（例如：`common.login`、`home.title`）。

## 环境变量

可按需创建 `.env.local`：

```
VITE_API_PROXY_TARGET=http://127.0.0.1:6688
```

Vite 开发环境会将 `/api` 请求代理到该地址。