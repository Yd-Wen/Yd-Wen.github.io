---
date: 2026-03-03
title: CSS 精灵
icon: css
category: 
    - 前端开发
---

## CSS 精灵

CSS 精灵（CSS Sprite）是一种网页图片处理方式。把网页中一些背景图片整合到一张图片文件中，通过 CSS 背景定位（background-position）技术，实现只加载一张图片，而显示出多张图片的效果。

优点：减少服务器请求次数，减轻服务器压力，提高页面加载速度。

## 实现步骤

1. 创建盒子：盒子尺寸为小图片尺寸

2. 设置背景图片：背景图片为整合后的图片文件

3. 设置背景定位：根据小图片在整合后的图片中的位置，设置背景定位。

    3.1 使用 PxCook 工具，测量小图片在整合后的图片中的位置（左上角坐标）。
    
    3.2 取坐标负数为 background-position 属性值。（背景图片左上移动到小图片的位置）。

示例：

```css
div {
    /* 小图片尺寸 */
    width: 100px;
    height: 100px;
    background-image: url(./images/sprite.png);
    /* 小图片位置（150px, 150px） */
    background-position: -150px -150px;
}
```