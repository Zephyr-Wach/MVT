# MVT (My Vue Template)

[English](./README.md) | [简体中文](./README_zh.md)

![Vue](https://img.shields.io/badge/Vue-3.5.18-42b883)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

一个结构清晰、可直接复用的 Vue 项目模板。

## 目录

- [特性](#特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [脚本命令](#脚本命令)
- [项目结构](#项目结构)
- [环境变量](#环境变量)
- [规范约定](#规范约定)

## 特性

- 开箱可用的 Vue 3 + TypeScript 组合
- 集成 Router、Pinia、Axios、i18n
- TailwindCSS 4 + Vite 插件配置完成
- 支持 `vue-tsc` 严格类型检查
- 目录职责明确，适合作为模板仓库

## 技术栈

| 模块 | 版本 |
| --- | --- |
| Vue | `3.5.18` |
| Vue Router | `4.5.1` |
| Pinia | `^3.0.3` |
| Axios | `1.12.1` |
| Vue I18n | `11.1.12` |
| Vite | `7.1.2` |
| TypeScript | `5.8.3` |
| TailwindCSS | `^4.1.13` |

## 快速开始

```bash
npm install
npm run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

## 脚本命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动 Vite 开发服务器 |
| `npm run type-check` | 执行 TypeScript 类型检查（`vue-tsc --noEmit`） |
| `npm run build` | 先类型检查，再构建生产包 |
| `npm run preview` | 本地预览生产构建结果 |

## 项目结构

```text
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

```bash
VITE_API_PROXY_TARGET=http://127.0.0.1:6688
```

该变量用于 Vite 开发环境下 `/api` 的代理目标地址。

## 规范约定

- 新代码优先从 `@/stores/*` 导入状态仓库。
- `src/store/*` 为兼容旧路径的 re-export 层。
- 路由页面统一放在 `src/views`。
