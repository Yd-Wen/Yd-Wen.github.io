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
