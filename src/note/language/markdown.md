---
title: Markdown
icon: markdown
date: 2024-01-03
category: 编程语言
tag: Markdown
---

Markdown 语法详解。

<!-- more -->

## 1 标题

```markdown
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

::: tip
"#"后面紧跟一个空格
:::

## 2 字体

### 2.1 加粗

- 示例：
    ```markdown
    **文字内容**
    ```
- 效果：
    **文字内容**

### 2.2 斜体

- 示例：
    ```markdown
    *文字内容*
    ```
- 效果：
    *文字内容*

### 2.3 加粗斜体

- 示例：
    ```markdown
    ***文字内容***
    ```
- 效果：
    ***文字内容***

### 2.4 删除线

- 示例：
    ```markdown
    ~~文字内容~~
    ```
- 效果：
    ~~文字内容~~

## 3 引用

- 示例：
    ```markdown
    > 文字内容
    ```
- 效果：
    > 文字内容

## 4 分割线

- 示例：
    ```markdown
    ---
    ```

- 效果：

    ---

## 5. 图片

- 示例：
    ```markdown
    ![图片](http://oss.yindongwen.top/homepage/bg.jpg "本站背景")
    ```
- 效果：
    ![图片](http://oss.yindongwen.top/homepage/bg.jpg "本站背景")

## 6. 超链接

- 示例：
    ```markdown
    [链接](https://www.baidu.com "百度")
    ```
- 效果：
    [链接](https://www.baidu.com "百度")

## 7. 列表

- 示例：
    ```markdown
    1. 文字内容
    2. 文字内容
    ```
- 效果：
    1. 文字内容
    2. 文字内容

## 8. 表格

- 示例：
    ```markdown
    | 表头1 | 表头2 |
    | --- | --- |
    | 文字内容 | 文字内容 |
    ```
- 效果：
    | 表头1 | 表头2 |
    | --- | --- |
    | 文字内容 | 文字内容 |

## 9. 代码

- 示例：
    ```markdown
    ```javascript
    文字内容
    ```
- 效果：
    ```javascript
    文字内容
    ```

## 10. 流程图

- 示例：
    ```markdown
    ```flow
    st=>start: 开始
    op=>operation: 文字内容
    e=>end
    st->op->e
    ```
- 效果：
    ```flow
    st=>start: 开始
    op=>operation: 文字内容
    e=>end
    st->op->e
    ```
