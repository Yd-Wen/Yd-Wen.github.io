---
date: 2026-03-03
title: 字体图标
icon: iconfont
category: 
  - 笔记
  - 前端开发
tag: 
  - icon
---

## 字体图标

字体图标展示的是图标，本质是文字。

作用：在网页中添加简单的、颜色单一的小图标，可以提升网页的可读性和用户体验。

优点：

- 灵活性：图标大小和颜色可以通过 CSS 控制，非常灵活。

- 轻量级：体积小，渲染块。

- 矢量图：图标是矢量图，不会因为缩放而失真。

- 可扩展性：可以很容易地添加新的图标，而不需要重新加载页面。

- 兼容性：字体图标可以在所有现代浏览器中使用，包括 IE8+。

## 下载字体图标

1. 打开 iconfont 图标库：[https://www.iconfont.cn/](https://www.iconfont.cn/)

2. 下载字体图标：

    1. 登录 iconfont 图标库

    2. 点击“图标库”，在搜索框中输入图标名称
    
    3. 选择需要的图标，点击“加入购物车”

    4. 点击“购物车”图标，在弹出的窗口中点击导入项目

    5. 点击“确定”，在弹出的窗口中点击“下载至本地”。

::: tip 提示
- 下载的字体图标包含字体文件（.ttf、.woff、.woff2）和 CSS 文件（.css）。

- 字体文件需要引入到项目中，CSS 文件需要引入到 HTML 文件中。
:::

## 引入字体图标

1. 引入字体样式表（iconfont.css）

```html
/* 引入字体样式表 */
<link rel="stylesheet" href="./iconfont/iconfont.css">
```

2. 使用字体图标

    1. iconfont：字体图标基本样式（字体名、字体大小等）

    2. icon-xxx：字体图标类名

    3. 在 HTML 中使用字体图标：

    ```html
    <!-- 使用字体图标 -->
    <span class="iconfont icon-xxx"></span>
    ```

::: tip 
`icon-xxx` 是字体图标对应的类名，需要根据下载的 CSS 文件中的类名来填写。 
::: 

3. 调整字体图标

    1. 字体图标大小：通过 CSS 控制字体大小，例如 `font-size: 24px;`。

    2. 字体图标颜色：通过 CSS 控制字体颜色，例如 `color: red;`。

    3. 字体图标垂直对齐：通过 CSS 控制字体图标垂直对齐，例如 `vertical-align: middle;`。

    ```html
    <!-- 调整字体图标 -->
    <style>
    .iconfont {
        font-size: 24px;
        color: red;
        vertical-align: middle;
    }
    </style>
    ```

::: warning
调整字体图标大小时，注意选择器的优先级不低于 iconfont 类，确保样式生效。
:::

## 上传矢量图

作用：项目特有的图标上传到 iconfont 图标库，生成字体，方便在项目中使用。

1. 打开 iconfont 图标库：[https://www.iconfont.cn/](https://www.iconfont.cn/)

2. 上传矢量图：

    1. 登录 iconfont 图标库

    2. 点击右上角“上传”图标进入上传页

    3. 将图标 SVG 格式上传到上传页（拖拽或点击上传按钮）

    4. 点击“去除颜色提交”按钮

    5. 下载和使用字体图标
