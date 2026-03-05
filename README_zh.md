# MVT (My Vue Template)

[**English**](./README.md) | [中文](./README_zh.md)

一个实用的 Vue 起步模板，基于：

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

构建与预览：

```
npm run build
npm run preview
```

## 脚本说明

*   `npm run dev`：启动 Vite 开发服务
*   `npm run type-check`：执行 TypeScript 类型检查（`vue-tsc --noEmit`）
*   `npm run build`：先类型检查，再构建生产包
*   `npm run preview`：本地预览生产包

## 目录结构

```
src/
  api/          # API 模块
  components/   # 可复用组件
  layouts/      # 布局组件
  locales/      # 国际化语言包
  router/       # 路由定义与守卫
  store/        # 兼容层（re-export）
  stores/       # Pinia 状态仓库（实际实现）
  styles/       # 全局样式入口
  types/        # 共享类型定义
  utils/        # 工具模块
  views/        # 路由页面
```

## 环境变量

如有需要，将 `.env.example` 复制为 `.env.local`：

```
VITE_API_PROXY_TARGET=http://127.0.0.1:6688
```

该变量用于 Vite 开发环境下 `/api` 的代理目标地址。