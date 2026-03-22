---
date: 2026-03-03
title: Emmet 写法
icon: emmet
category: 
  - 笔记
  - 前端开发
---

Emmet 写法是代码的简写方式，输入缩写 VS Code 会自动生成对应代码。

- HTML：

| 说明     | 标签结构                                      | Emmet        |
| ------ | ----------------------------------------- | ------------ |
| 类选择器   | `<div class="box"></div>`                 | 标签名.类名       |
| id 选择器  | `<p id="box"></p>`                        | 标签名#id名      |
| 同级标签   | `<div></div><p></p>`                      | div+p        |
| 父子标签   | `<div><p></p></div>`                      | div>p        |
| 多个相同标签 | `<span></span><span></span><span></span>` | span * 3     |
| 有内容的标签 | `<div>content</div>`                      | div{content} |

- CSS：大多数简写方式为属性单词首字母。
