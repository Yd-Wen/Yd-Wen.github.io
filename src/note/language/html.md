---
date: 2026-02-23
title: HTML
icon: html
category: 
    - 编程语言
    - 前端开发
tag: 
    - html
---

## 1 HTML简介

超文本标记语言（HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。

### 1.1 基本骨架

![基本骨架](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260302102939148.png)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
 
<h1>我的第一个标题</h1>
 
<p>我的第一个段落。</p>
 
</body>
</html>
```

HTML 的基本骨架是网页模板。

- `html`： **整个网页**根元素，所有其他元素都必须嵌套在 `<html>` 元素中。

- `head`： **网页头部**，包含文档的元（meta）数据，`<meta charset="utf-8">` 定义网页编码格式为 utf-8；`<title>` 元素描述**网页标题**。

- `body`： **网页主体**，包含可见页面内容，如标题、段落、图像、表格等。

::: warning 注意
- HTML 文档必须以 `<!DOCTYPE html>` 声明为 HTML5 文档。

- HTML 文档的扩展名为 `.html` 或 `.htm`。
:::

::: tip 快速生成 HTML 骨架
VS Code 中输入 `!` 然后按 `Tab` 键即可生成 HTML 骨架。
:::

### 1.2 标签语法

- 标签成对出现，中间包裹内容

- `<>` 里面是标签名

- `<>` 是开始标签，`</>` 是结束标签

::: tip 拓展
- 双标签：

    - 有开始标签和结束标签

    - 如：`<p> 段落 </p>`

- 单标签：

    - 没有结束标签

    - 如：`<br>` 换行标签，`<hr>` 水平线标签
:::

::: warning 明确标签的关系
明确标签关系以明确书写位置：

- 嵌套关系：一个标签可以包含另一个标签。

- 并列关系：多个标签可以并列出现。
:::

::: tip 参考
[HTML 标签列表(字母排序) | 菜鸟教程 (runoob.com)](https://www.runoob.com/tags/html-reference.html)。
:::

### 1.3 属性

- 一般位于**开始标签**

- 以name/value对的形式出现，如*href="http://www.runoob.com"*

### 1.4 编辑器

VSCode、Sublime Text、Notepad++ 等。

## 2 基本标签

### 2.1 标题和段落

```html
<h1>这是标题 1</h1>
<h2>这是标题 2</h2>
<h3>这是标题 3</h3>
<h4>这是标题 4</h4>
<h5>这是标题 5</h5>
<h6>这是标题 6</h6>
```

- HTML 标题 标签只用于标题

- 标题应该以 `<h1>` 开始，依次递减为 `<h6>`

::: warning
- `h1` 一个页面只能有一个，用来表示页面的标题或 logo。

- 不要仅仅是为了生成粗体或大号的文本而使用标题。
:::

```html
<p>这是一个段落。</p>
<p>这是另外一个段落。</p>
```

- `<p>` 段落标签（双标签），用于定义段落。

### 2.2 换行和水平线

```html
<p>这是一个段落<br>换行后内容。</p>
<hr>
<p>这是一个段落。</p>
```

- `<br>` 换行标签（**单标签**），用于在文本中创建换行。

- `<hr>` 水平线标签（**单标签**），用于在文本中创建水平线。

::: warning 注意
浏览器不识别代码中的 Enter 键换行。
:::

### 2.3 注释

```html
<!-- 这是一个注释 -->
```

### 2.4 文本

为文本添加特殊格式，以**突出重点**或**强调内容**。

常见文本格式：

- 加粗：`strong` 或 `<b>` 标签

- 斜体：`em` 或 `<i>` 标签

- 下划线：`ins` 或 `u` 标签

- 删除线：`del` 或 `s` 标签

```html
<b>加粗文本</b><br><br>
<i>斜体文本</i><br><br>
<u>下划线文本</u><br><br>
<s>删除线文本</s><br><br>
<code>电脑自动输出</code><br><br>
这是 <sub> 下标</sub> 和 <sup> 上标</sup>
```

::: tip 现代 Web 开发建议
在现代 Web 开发中， 语义化标签 （如 `<strong>` 、 `<em>` 、 `<ins>` 、 `<del>` ）更受欢迎，因为它们：

1. 提供了清晰的语义结构

2. 有利于搜索引擎优化（SEO）

3. 改善了无障碍访问性（屏幕阅读器可以更好地理解内容）

4. 使代码更具可读性和可维护性

而纯视觉标签（如 `<b>` 、 `<i>` 、 `<u>` 、 `<s>` ）仅用于纯粹的视觉效果，没有语义含义，在需要强调语义时应避免使用。
:::

### 2.5 图像

图像标签用于在网页中插入图片。

```html
<img src="image.jpg" alt="图片描述">
```

- `<img>` 图像标签（**单标签**），用于在网页中插入图片。

  - `src` 属性指定图片的 URL 或路径。

  - `alt` 属性指定图片的替代文本，当图片无法显示时会显示替代文本。

::: important URL 路径分类
- 相对路径：相对于当前文档的路径。从当前文档所在目录开始查找目标文件。

- 绝对路径：完整的 URL 路径。从盘符出发查找目标文件。
:::

::: important 路径符号
- `.` 表示当前目录

- `..` 表示上一级目录

- `/` 表示进入目录（默认从盘符出发）
:::

### 2.6 超链接

```html
<p>
<a href="./index.html">该链接</a> 是一个指向本网站中的一个页面的链接。</p>
<p>
<a href="http://www.microsoft.com/">该链接</a> 是一个指向万维网上的页面的链接。
</p>
<p>
<a href="#">空链接</a></p>
<p>
```

- `<a>` 超链接标签（双标签），用于创建指向其他网页或资源的链接。

  - `href` 属性指定链接的目标 URL 或路径。

  - `target` 属性指定链接在何处打开。

    - `_self` 在当前窗口或标签页中打开链接（默认值）。

    - `_blank` 在新窗口或标签页中打开链接。

    - `_parent` 在父框架中打开链接。

    - `_top` 在顶部框架中打开链接。

  - 包裹的文本是链接的可见文本。

::: tip 设置空连接
- 可以使用 `href="#"` 来设置一个空连接，点击后不会跳转。
:::

### 2.7 音频

```html
<audio src="audio.mp3" controls></audio>
```

- `<audio>` 音频标签（双标签），用于在网页中插入音频。

  - `src` 属性指定音频文件的 URL 或路径。

  - `controls` 属性显示音频播放控件（播放、暂停、音量等）。

  - `autoplay` 属性设置自动播放音频。

  - `loop` 属性设置循环播放音频。

::: tip HTML5 省略属性值
HTML 5中属性名和属性值相同时可以省略属性值。即 `controls="controls"` 省略为 `controls`。
:::

::: tip 禁用自动播放
为了提升用户体验，浏览器一般会禁用自动播放音频。
:::

### 2.8 视频

```html
<video src="video.mp4" controls></video>
```

- `<video>` 视频标签（双标签），用于在网页中插入视频。

  - `src` 属性指定视频文件的 URL 或路径。

  - `controls` 属性显示视频播放控件（播放、暂停、音量等）。

  - `autoplay` 属性设置自动播放视频。无 `muted` 属性时，浏览器会禁用自动播放。

  - `loop` 属性设置循环播放视频。

  - `muted` 属性设置视频默认静音。配合 `autoplay` 属性可以实现静音状态自动播放视频。

::: tip 静音状态自动播放视频
为了提升用户体验，浏览器仅支持在静音状态自动播放视频。
::: 

## 3 排版标签

### 3.1 列表

列表标签用于布局内容排列整齐的区域。列表分类：

- 有序列表：`<ol>` 标签，包裹 `<li>` 标签。

- 无序列表：`<ul>` 标签，包裹 `<li>` 标签。

- 自定义列表：`<dl>` 标签，包裹 `<dt>` 标签（定义项）和 `<dd>` 标签（定义描述）。

```html
<ol>
  <li>有序列表项1</li>
  <li>有序列表项2</li>
</ol>

<ul>
  <li>无序列表项1</li>
  <li>无序列表项2</li>
</ul>

<dl>
  <dt>服务中心</dt>
  <dd>申请售后</dd>
  <dd>售后政策</dd>
  <dt>关于我们</dt>
  <dd>官方微信</dd>
  <dd>联系我们</dd>
</dl>
```

::: tip
- `ol` 和 `ul` 标签只能包裹 `<li>` 标签。

- `li` 标签可以包裹任何内容。

- `dl` 标签只能包裹 `<dt>` 标签和 `<dd>` 标签。

- `dd` 和 `dt` 标签可以包裹任何内容。

- `dl` 标签一般用于网页底部的服务中心、关于我们等。
:::

### 3.2 表格

表格标签用于在网页中插入表格，展示结构化数据。`table` 嵌套 `tr`，`tr` 嵌套 `th` 和 `td`。

- `<table>` 表格标签（双标签），用于在网页中插入表格。

  - `border` 属性指定表格边框的宽度。

  - `tr` 标签表示表格的行，包裹 `<th>` 标签（表头）和 `<td>` 标签（表格数据）。

  - `th` 标签表示表格的表头单元格，包裹的文本会加粗居中显示。

  - `td` 标签表示表格的数据单元格，包裹的文本会左对齐显示。

```html
<table border="1">
  <tr>
    <th>姓名</th>
    <th>年龄</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>20</td>
  </tr>
</table>
```

::: tip 
网页中表格默认没有边框线。
:::

#### 3.2.1 表格结构标签

用表格结构标签把内容划分区域，让表格结构更清晰，语义更明确。

表格结构标签：

- `thead` 表格头标签（双标签），包裹表格的表头行（`<tr>` 标签）。

- `tbody` 表格体标签（双标签），包裹表格的主体行（`<tr>` 标签）。

- `tfoot` 表格尾标签（双标签），包裹表格的表尾行（`<tr>` 标签）。

#### 3.2.2 合并单元格

使用 `rowspan` 和 `colspan` 属性可以将多个单元格合并成一个单元格，以合并同类信息。

- `rowspan` 属性指定单元格垂直方向合并的行数。

- `colspan` 属性指定单元格水平方向合并的列数。

- 操作步骤：
  1. 找到要合并的单元格。

  2. 保留最左最上的单元格，添加属性。

    - 跨行合并，保留最上的单元格，添加属性 `rowspan`。

    - 跨列合并，保留最左的单元格，添加属性 `colspan`。

  3. 删除其他单元格。

- 示例：

```html
<table border="1">
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>性别</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>20</td>
    <td rowspan="2">男</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>21</td>
  </tr>
</table>
```

::: warning
合并单元格时，不能跨结构（`thead` 、`tbody` 、`tfoot` ）合并。
:::

### 3.3 表单

表单标签可以收集用户输入的信息，常用于登录、注册、提交订单等场景。

#### 3.3.1 input 标签

`input` 标签用于用户输入文本信息。

- `type` 属性指定输入框的类型，可取值有：

  - `text` 普通文本输入框。

  - `password` 密码输入框，输入的文本会被隐藏。

  - `radio` 单选框，用户只能选择一个选项。

  - `checkbox` 复选框，用户可以选择多个选项。

  - `submit` 提交按钮，点击后会将表单数据提交到服务器。

  - `reset` 重置按钮，点击后会将表单数据重置为默认值。

  - `file` 文件上传按钮，用户可以选择本地文件上传。

- `name` 属性指定输入框的名称，用于在 JavaScript 中引用输入框。

- `value` 属性指定输入框的默认值。

- `placeholder` 属性指定输入框的占位符，当输入框为空时显示。常用于文本框、密码框等。

**radio 单选框**

- `radio` 单选框，用户只能选择一个选项。

  - `name` 属性指定单选框的名称，用于在 JavaScript 中引用单选框。

  - `value` 属性指定单选框的值，用于在提交表单时标识选中的选项。

  - `checked` 属性指定单选框是否默认选中。

- `radio` 单选框示例：

  ```html
  <form>
    <label>
      <input type="radio" name="gender" value="male" checked> 男
    </label>
    <label>
      <input type="radio" name="gender" value="female"> 女
    </label>
  </form>
  ```

**checkbox 复选框**

- `checkbox` 复选框，用户可以选择多个选项。

  - `name` 属性指定复选框的名称，用于在 JavaScript 中引用复选框。

  - `value` 属性指定复选框的值，用于在提交表单时标识选中的选项。

  - `checked` 属性指定复选框是否默认选中。

- `checkbox` 复选框示例：

  ```html
  <form>
    <label>
      <input type="checkbox" name="hobby" value="reading" checked> 阅读
    </label>
    <label>
      <input type="checkbox" name="hobby" value="sports"> 运动
    </label>
  </form>
  ```

**file 上传文件**

- `file` 上传文件，用户可以选择本地文件上传。

  - `name` 属性指定上传按钮的名称，用于在 JavaScript 中引用上传按钮。

  - `type` 属性指定上传按钮的类型，取值为 `file`。

  - `multiple` 属性指定上传按钮是否支持多选文件。

- `file` 上传文件示例：

  ```html
  <form>
    <label>
      <input type="file" name="file" multiple> 选择文件
    </label>
  </form>
  ```

**select 下拉选择框**

- `select` 下拉选择框整体，用户可以从多个选项中选择一个。

  - `name` 属性指定下拉选择框的名称，用于在 JavaScript 中引用下拉选择框。

  - `multiple` 属性指定下拉选择框是否支持多选。

  - `size` 属性指定下拉选择框显示的选项行数。

  - `option` 选项标签，定义下拉选择框的选项。

    - `value` 属性指定选项的值，用于在提交表单时标识选中的选项。

    - `selected` 属性指定选项是否默认选中。

- `select` 下拉选择框示例：

  ```html
  <form>
    <label>
      <select name="city" size="2">
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="guangzhou" selected>广州</option>
      </select>
    </label>
  </form>
  ```

#### 3.3.2 textarea 文本域

`textarea` 文本域标签可以让用户输入多行文本信息。

- `name` 属性指定文本域的名称，用于在 JavaScript 中引用文本域。

- `rows` 属性指定文本域的行数。

- `cols` 属性指定文本域的列数。

- `placeholder` 属性指定文本域的占位符，当文本域为空时显示。

`textarea` 文本域示例：

```html
<form>
  <label>
    <textarea name="message" rows="4" cols="20" placeholder="请输入您的留言" style="resize: none;"></textarea>
  </label>
</form>
```

::: tip
- `textarea` 文本域的尺寸一般通过 CSS 样式设置，而不是 `rows` 和 `cols` 属性。

- `textarea` 文本域一般禁用 `resize` 属性，防止用户调整文本域大小。
:::

#### 3.3.3 label 标签

`label` 标签用于为表单元素添加描述性文本。

- `for` 属性指定标签关联的表单元素的 `id` 属性值。

`label` 标签示例：

```html
<form>
  <label for="username">用户名：</label>
  <input type="text" id="username" name="username">
</form>
```

::: tip
label 标签支持的控件有：

- 文本框（text）

- 密码框（password）

- 单选框（radio）

- 复选框（checkbox）

- 文件上传（file）

- 下拉选择框（select）

- 文本域（textarea）等
:::

::: important 经验
用 label 标签绑定文字和表单控件的关系，增大表单控件的可点击区域，提升用户体验。
:::

::: important 简单写法
label 标签包裹表单控件，不需要 `for` 属性：
```html
<form>
  <label>用户名：
    <input type="text" id="username" name="username">
  </label>
</form>
```
:::

#### 3.3.4 按钮

`button` 按钮标签用于创建点击按钮。

- `type` 属性指定按钮的类型，取值为 `submit`、`reset` 或 `button`。

  - `submit` 按钮点击后会提交表单数据。

  - `reset` 按钮点击后会重置表单数据。

  - `button` 按钮点击后不会触发任何操作，需要通过 JavaScript 绑定事件处理函数。

- `name` 属性指定按钮的名称，用于在 JavaScript 中引用按钮。

- `value` 属性指定按钮的值，用于在提交表单时标识按钮。

`button` 按钮示例：

```html
<form>
  <button type="submit" name="submit" value="submit">提交</button>
  <button type="reset" name="reset" value="reset">重置</button>
  <button type="button" name="button" value="button">普通按钮</button>
</form>
```

## 4 布局标签

无语义的布局标签，用于划分网页的不同区域。

- `div` 标签：定义文档中的 divisions（分区或节）。

- `span` 标签：定义文档中的行内元素。

示例：

```html
<div>
  <p>这是一个段落。</p>
  <span>这是一个行内元素。</span>
  <span>这是另一个行内元素。</span>
</div>
```

::: tip
- `div` ：独占一行（大盒子）。

- `span` ：行内元素，不独占一行（小盒子）。
:::

## 5 字符实体

字符实体用于在网页中显示不同的预留字符。

- `&nbsp;` ：空格（ ）

- `&lt;` ：小于号（<）

- `&gt;` ：大于号（>）

- `&amp;` ：与号（&）

- `&quot;` ：双引号（"）

- `&apos;` ：单引号（'）

::: warning
- 无论代码中写多少个空格，浏览器只识别一个空格，多个空格会被合并为一个。

- 使用多个 `&nbsp;` 才能在网页中显示多个空格。
:::

## 拓展：Emmet 语法

参考：[Emmet 语法](../language/css.md#拓展-emmet-写法)
