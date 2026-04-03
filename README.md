# 个人博客 / Personal Blog

使用 [VuePress2](https://vuejs.press/zh/) 与 [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/) 搭建的个人博客

A personal blog using [VuePress2](https://vuejs.press/) and [VuePress Theme Hope](https://theme-hope.vuejs.press/)

## [博客地址](https://yindongwen.top) | [Blog link](https://yindongwen.top)

- 演示地址：[https://yindongwen.top](https://yindongwen.top)

- 仓库地址：
  
  - [https://gitee.com/yindong-wen/yindong-wen](https://gitee.com/yindong-wen/yindong-wen)

  - [https://github.com/Yd-Wen/Yd-Wen.github.io](https://github.com/Yd-Wen/Yd-Wen.github.io)

- 项目截图

  - 主页

  ![项目主页](/src/.vuepress/public/assets/img/homepage.jpg)

  - 导航页

  ![项目导航页](/src/.vuepress/public/assets/img/navpage.jpg)

## 技术栈 / Tech Stack

| 技术 | 版本 | 说明 |
|------|------|------|
| [VuePress](https://vuejs.press/zh/) | v2.x | 静态网站生成器 |
| [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/) | v2.x | VuePress 主题 |
| [Vue.js](https://vuejs.org/) | v3.x | 前端框架 |
| [TypeScript](https://www.typescriptlang.org/) | - | 类型安全的 JavaScript |
| [Sass/SCSS](https://sass-lang.com/) | - | CSS 预处理器 |
| [pnpm](https://pnpm.io/) | - | 包管理器 |

---

## 项目结构 / Project Structure

```
.
├── src/                        # 源代码目录
│   ├── .vuepress/              # VuePress 配置
│   │   ├── components/         # 自定义 Vue 组件
│   │   │   └── NavPage.vue     # 快捷导航页面组件
│   │   ├── sidebar/            # 侧边栏配置
│   │   ├── styles/             # 全局样式文件
│   │   │   ├── config.scss     # 主题色配置
│   │   │   ├── palette.scss    # SCSS 变量定义
│   │   │   └── index.scss      # 全局样式覆盖
│   │   ├── client.ts           # 客户端配置
│   │   ├── config.ts           # VuePress 主配置
│   │   ├── navbar.ts           # 导航栏配置
│   │   └── theme.ts            # 主题配置
│   ├── nav/                    # 快捷导航页面
│   │   ├── README.md           # 导航页面
│   │   └── config.md           # 导航配置
│   ├── note/                   # 笔记内容
│   ├── piece/                  # 随笔
│   ├── project/                # 项目展示
│   ├── tutorial/               # 教程
│   ├── about/                  # 关于页面
│   ├── NOTE.md                 # 笔记入口
│   └── README.md               # 网站首页
├── dist/                       # 构建输出目录
├── package.json                # 项目依赖
└── pnpm-lock.yaml              # pnpm 锁定文件
```

---

## 功能特性 / Features

### 核心功能
- 🏠 **首页 Hero 区域** - 全屏背景、个人 Logo、标语、快速操作按钮
- 🧭 **快捷导航** - 自定义导航页面，支持搜索、分类浏览
- 📝 **博客系统** - 文章分类、标签、归档
- 📚 **笔记管理** - 多分类笔记系统（编程语言、前端、后端、大数据、机器学习等）
- 🎨 **主题切换** - 支持亮色/暗色模式
- 📱 **响应式设计** - 适配各种屏幕尺寸

### 快捷导航功能
- 🔍 **多搜索引擎** - 支持必应、谷歌搜索切换
- ⌨️ **快捷键支持** - Alt+1/Alt+2 快速切换搜索引擎
- 🕐 **实时时钟** - 页面顶部显示当前时间
- 📂 **分类导航** - 开发工具、学习资源、常用网站、个人收藏

### 主题定制
- 自定义主题色（橙色 #f28e16）
- 透明导航栏效果
- 自定义字体样式
- 背景图片设置

---

## 脚本命令 / Scripts

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产环境
pnpm build

# 预览构建结果
pnpm preview
```

---

## 更新日志 / Changelog

### 2026-04-03
- 🎨 **优化**: 首页布局调整为博客布局

### 2026-04-02
- ✨ **新增**: 导航页新增 GitHub 贡献图展示

### 2026-03-31
- 🐛 **修复**: 修复搜素功能失效的问题

### 2026-03-25
- 🐛 **修复**: 修复客户端水合不匹配的问题

### 2026-03-22
- ✨ **新增**: 导航页底部按钮添加悬停提示文字
- 🎨 **优化**: 调整导航页壁纸配置
- 🎨 **优化**: 调整壁纸切换功能
- 🎨 **优化**: 调整搜索框样式
- ✨ **新增**: 新增导航页导航卡片配置

### 2026-03-20
- 🐛 **修复**: 修复快捷导航页面样式污染主页的问题
  - 问题：快捷导航页面的全局 CSS 导致主页 Hero 区域和按钮消失
  - 解决：在客户端配置中根据路由动态添加/移除 body 类名 `nav-page-active`
  - 修改文件：
    - `src/.vuepress/client.ts` - 添加路由监听，动态切换 body 类名
    - `src/nav/README.md` - 使用 `body.nav-page-active` 限定样式作用域

### 2026-03-19
- ✨ **新增**: 初始化快捷导航页面
  - 创建 `NavPage.vue` 组件
  - 添加搜索引擎切换功能
  - 添加分类导航卡片
  - 添加实时时钟显示

### 2026-02-24
- 🎉 **项目初始化**
  - 使用 VuePress 2 和 Theme Hope 搭建博客
  - 配置导航栏和侧边栏
  - 设置主题颜色和样式
  - 添加首页 Hero 区域和项目展示

---

## 许可证 / License

本项目基于 [MIT License](./LICENSE) 开源。

Copyright (C) 2026 - present by Yd Wen

---

## 作者 / Author

**Yd Wen** - [yindongwen.top](https://yindongwen.top)
