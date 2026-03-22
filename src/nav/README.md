---
date: 2026-03-20
home: true
icon: link
title: 快捷导航
heroText: false
heroFullScreen: false
pageLayout: home
sidebar: false
navbar: true
# 快捷导航配置
# 在此配置导航卡片内容，修改后页面会自动更新
#
# 配置说明：
# - categories: 导航分类配置
#   - id: 分类唯一标识（对应底部按钮）
#   - name: 分类显示名称
#   - icon: 按钮图标路径（相对于 public 目录）
#   - items: 该分类下的导航卡片列表
#     - name: 卡片名称
#     - url: 链接地址
#     - icon: 图标（URL、/开头的路径、或iconfont类名）
#     - external: 是否外部链接（true/false）
# - wallpapers: 壁纸配置
#   - id: 壁纸唯一标识（default 为默认主题）
#   - name: 壁纸显示名称
#   - file: 壁纸文件名（位于 /assets/bg/ 目录下）

categories:
  - id: dev-tools
    name: 开发工具
    icon: /assets/icon/icon_develop.png
    items:
      - name: GitHub
        url: https://github.com
        icon: https://github.com/favicon.ico
        external: true
      - name: GitLab
        url: https://gitlab.com
        icon: https://gitlab.com/favicon.ico
        external: true
      - name: Gitee
        url: https://gitee.com
        icon: https://gitee.com/favicon.ico
        external: true
      - name: VS Code
        url: https://code.visualstudio.com
        icon: https://code.visualstudio.com/favicon.ico
        external: true
      - name: JetBrains
        url: https://www.jetbrains.com
        icon: https://www.jetbrains.com/favicon.ico
        external: true
      - name: Vue.js
        url: https://vuejs.org
        icon: https://vuejs.org/logo.svg
        external: true
      - name: React
        url: https://react.dev
        icon: https://react.dev/favicon.ico
        external: true
      - name: Node.js
        url: https://nodejs.org
        icon: https://nodejs.org/static/images/favicons/favicon.png
        external: true
      - name: Vite
        url: https://vitejs.dev
        icon: https://vitejs.dev/logo.svg
        external: true
      - name: Docker
        url: https://www.docker.com
        icon: https://www.docker.com/favicon.ico
        external: true
      - name: NPM
        url: https://www.npmjs.com
        icon: https://static.npmjs.com/favicon.ico
        external: true
      - name: pnpm
        url: https://pnpm.io
        icon: https://pnpm.io/favicon.ico
        external: true
      - name: Postman
        url: https://www.postman.com
        icon: https://www.postman.com/favicon.ico
        external: true
      - name: Vercel
        url: https://vercel.com
        icon: https://assets.vercel.com/image/upload/favicon.ico
        external: true
      - name: Redis
        url: https://redis.io
        icon: https://redis.io/favicon.ico
        external: true
      - name: MongoDB
        url: https://www.mongodb.com
        icon: https://www.mongodb.com/favicon.ico
        external: true
      - name: MySQL
        url: https://www.mysql.com
        icon: https://labs.mysql.com/common/themes/sakila/favicon.ico
        external: true
      - name: Figma
        url: https://www.figma.com
        icon: https://static.figma.com/app/icon/1/favicon.png
        external: true
      - name: CodePen
        url: https://codepen.io
        icon: icon-code
        external: true
      - name: Regex101
        url: https://regex101.com
        icon: icon-regex
        external: true

  - id: learning
    name: 学习资源
    icon: /assets/icon/icon_resource.png
    items:
      - name: MDN
        url: https://developer.mozilla.org/zh-CN/
        icon: https://developer.mozilla.org/favicon-48x48.png
        external: true
      - name: VuePress
        url: https://vuejs.press/zh/
        icon: https://vuejs.press/images/hero.png
        external: true
      - name: Theme Hope
        url: https://theme-hope.vuejs.press/zh/
        icon: https://theme-hope-assets.vuejs.press/logo.svg
        external: true
      - name: TypeScript
        url: https://www.typescriptlang.org/zh/
        icon: https://www.typescriptlang.org/favicon-32x32.png
        external: true
      - name: React
        url: https://react.dev
        icon: https://react.dev/favicon.ico
        external: true
      - name: Node.js
        url: https://nodejs.org
        icon: https://nodejs.org/static/images/favicons/favicon.png
        external: true
      - name: Webpack
        url: https://webpack.js.org
        icon: https://webpack.js.org/favicon.a326ef8cfc2a3f1d.ico
        external: true

  - id: common
    name: 常用网站
    icon: /assets/icon/icon_website.png
    items:
      - name: 掘金
        url: https://juejin.cn
        icon: https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png
        external: true
      - name: 知乎
        url: https://www.zhihu.com
        icon: https://static.zhihu.com/heifetz/favicon.ico
        external: true
      - name: 哔哩哔哩
        url: https://www.bilibili.com
        icon: https://www.bilibili.com/favicon.ico
        external: true
      - name: Stack Overflow
        url: https://stackoverflow.com
        icon: https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico
        external: true
      - name: GitHub Trending
        url: https://github.com/trending
        icon: https://github.com/favicon.ico
        external: true

  - id: personal
    name: 个人收藏
    icon: /assets/icon/icon_favorite.png
    items:
      - name: 个人主页
        url: /
        icon: /logo.svg
        external: false
      - name: 项目展示
        url: /project/
        icon: icon-project
        external: false
      - name: 笔记归档
        url: /note/
        icon: icon-note
        external: false
      - name: 关于我
        url: /about/
        icon: icon-about
        external: false

# 壁纸配置
# id: default 为默认主题背景（恢复到主题默认背景）
# id: 001-008 为自定义壁纸（对应 /assets/bg/ 目录下的图片文件）
wallpapers:
  - id: default
    name: 默认主题
    file: default.jpg
  - id: '001'
    name: 风景 001
    file: 001.jpg
  - id: '002'
    name: 风景 002
    file: 002.jpg
  - id: '003'
    name: 风景 003
    file: 003.jpg
  - id: '004'
    name: 风景 004
    file: 004.jpg
  - id: '005'
    name: 风景 005
    file: 005.jpg
  - id: '006'
    name: 风景 006
    file: 006.jpg
  - id: '007'
    name: 风景 007
    file: 007.jpg
  - id: '008'
    file: 008.jpg
  - id: '009'
    name: 风景 009
    file: 009.jpg
  - id: '010'
    name: 风景 009
    file: 010.jpg
---

<NavPage />

<style>
/* 只在快捷导航页面隐藏 hero 信息区域
   利用 body 上的 .nav-page-active 类来限定作用域 */
body.nav-page-active .vp-hero-info-wrapper,
body.nav-page-active .vp-hero-info {
  display: none !important;
}

/* 设置 main-content 背景图片 */
body.nav-page-active .theme-container {
  background-image: url('http://oss.yindongwen.top/homepage/bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
}

/* 确保页面背景透明 */
body.nav-page-active .page,
body.nav-page-active .vp-page,
body.nav-page-active .theme-hope-content,
body.nav-page-active .vp-page-content,
body.nav-page-active .vp-main {
  background: transparent !important;
}

/* 覆盖内容区域的背景 */
body.nav-page-active .vp-content {
  background: transparent !important;
}

/* 导航页布局调整 - 100vh 不可滚动 */
body.nav-page-active .theme-container {
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
}

body.nav-page-active .vp-main {
  min-height: 100vh !important;
  height: 100vh;
  overflow: hidden;
}

body.nav-page-active .vp-page {
  min-height: 100vh !important;
  height: 100vh;
  overflow: hidden;
}

body.nav-page-active .theme-hope-content {
  min-height: 100vh !important;
  height: 100vh;
  overflow: hidden;
  padding: 0 !important;
  margin: 0 !important;
}

/* 隐藏页面默认的padding和margin */
body.nav-page-active .vp-content {
  padding: 0 !important;
  margin: 0 !important;
}

/* 显示footer，调整整体布局 */
body.nav-page-active .vp-footer-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: transparent !important;
  border: none !important;
}

body.nav-page-active .vp-footer-wrapper .vp-footer {
  background: transparent !important;
  border: none !important;
}

/* 导航页组件容器 - 减去footer高度 */
body.nav-page-active .nav-page {
  height: calc(100vh - 80px) !important;
  padding-bottom: 10px;
}
</style>
