# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 提供本代码仓库的工作指南。

## 项目概述

基于 [VuePress 2](https://vuejs.press/zh/) 和 [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/) 构建的个人博客。使用 npm 作为包管理器。

## 常用命令

```bash
# 开发（Vite - 推荐）
npm dev:vite
npm dev:vite-clean    # 清除缓存并启动开发

# 生产构建
npm build:vite

# 代码检查和格式化
npm lint              # 运行 prettier --check --write
npm lint:md           # 运行 markdownlint

# 开发（Webpack - 备选）
npm dev:webpack
npm build:webpack
```

## 项目架构

### 配置结构

配置分散在 `src/.vuepress/` 目录下的多个文件中：

- **config.ts** - VuePress 核心配置（dest、base、lang、head、plugins）
- **theme.ts** - Theme Hope 主题配置（navbar、sidebar、footer、plugins、markdown 选项）
- **client.ts** - 客户端增强（Vue 组件注册、DOM 操作、路由监听）
- **navbar.ts** - 顶部导航栏项目
- **sidebar/index.ts** - 侧边栏配置，映射路径到侧边栏模块
- **sidebar/*.ts** - `/note`、`/project`、`/piece`、`/tutorial` 的独立侧边栏定义

### 样式

`src/.vuepress/styles/` 中的样式：
- **palette.scss** - SCSS 变量（主题颜色）
- **config.scss** - Theme Hope 配置变量
- **index.scss** - 全局 CSS 覆盖

### 自定义组件

`src/.vuepress/components/` 中的组件：
- 通过 `client.ts` 中的 `app.component()` 注册
- 当前组件：`NavPage.vue`（导航页）、`RunningTime.vue`（页脚运行时间显示）

### 内容组织

`src/` 下的内容目录：
- `/` - 首页（README.md，frontmatter 中包含 Hero 配置）
- `/nav/` - 自定义导航页
- `/note/` - 按类别整理的笔记（language/、frontend/、backend/、big_data/、machine_learning/、deep_learning/、ai/、other/）
- `/project/` - 项目展示
- `/piece/` - 随笔/短文
- `/tutorial/` - 教程
- `/about/` - 关于页面

## 关键实现模式

### 基于路由的 Body 类名

在 `client.ts` 中，路由监听器为页面特定样式添加/移除 body 类名：

```typescript
watch(() => route.path, (path) => {
  if (path === "/nav/") {
    document.body.classList.add("nav-page-active");
  }
})
```

Markdown 中的样式应使用 `body.nav-page-active` 前缀，以避免影响其他页面。

### 组件注入

Vue 组件不能直接在主题配置字符串中使用。使用 `client.ts` 中的 DOM 操作，结合 Vue 的 `h()` 和 `render()` 在页面加载后注入组件。

### 侧边栏结构

侧边栏使用 Theme Hope 的 `sidebar()` 辅助函数定义，并从单独的文件导入以便于维护。每个内容区域（`/note`、`/project` 等）都有自己的侧边栏配置。

### 缓存问题

如果开发过程中更改未生效，使用 `npm dev:vite-clean` 清除 VuePress 缓存。

## 重要说明

- 包管理器：**pnpm**（在 packageManager 字段中指定）
- 构建输出：`dist/` 目录
- 源文件目录：`src/`
- DocSearch 已配置（Algolia）
- PWA 已配置，自定义图标位于 `/assets/icon/`
