---
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
/* 隐藏 hero 信息区域 */
.vp-hero-info-wrapper,
.vp-hero-info {
  display: none !important;
}

/* 设置 main-content 背景图片 */
.theme-container {
  background-image: url('http://oss.yindongwen.top/homepage/bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
}

/* 确保页面背景透明 */
.page,
.vp-page,
.theme-hope-content,
.vp-page-content,
.vp-main {
  background: transparent !important;
}

/* 覆盖内容区域的背景 */
.vp-content {
  background: transparent !important;
}
</style>
