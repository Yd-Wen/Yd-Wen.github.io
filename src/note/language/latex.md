---
title: Latex
icon: latex
date: 2025-07-06
category: 编程语言
tag: Latex
---

## 1 简介

LaTeX 是一种高质量的排版系统，主要用于科学、工程、数学等领域的文档制作。它基于 Donald Knuth 开发的排版语言 TeX，由 Leslie Lamport 在此基础上增加了许多高级特性。LaTeX 提供了一套宏命令，使得用户无需深入学习底层的 TeX 命令就能制作出美观、专业的文档。

**优点**：

- 使用户专注于文档内容，无需或很少关心文档版面设计

- 专业排版能力

- 强大的数学公式排版能力

- 容易生成复杂的专业排版元素，如交叉引用、参考文献、目录等

- 强大的可扩展性

- 文档结构良好

- 相关软件跨平台、免费、开源

**缺点**：

- 不易排查错误

- 不易定制样式

- 相比“所见即所得”的模式有些不便，为了查看生成文档的效果，用户总要不停地编译

:::tip
- 不容易排除错误。在文档编译时，往往由于各种宏包之间可能存在的冲突或者宏包使用不正确导致编译出错。

- 不容易定制样式。LaTex 使得普通的用户可以更加关注内容而非样式，即给定一个模板，只需要将自己的内容进行填充即可。但对于需要自定义样式的用户而言，需要学习和使用某些宏包命令。对于不熟悉 LaTeX 命令语言的用户来说，这可能显得非常难以操作。虽然 LaTex 提供了一些默认的样式以满足大多数学术出版物的要求，但偏离这些默认值将会使得定制非常复杂。

- 不容易更新内容。相比“所见即所得”的模式，为了查看生成文档的效果，用户总要不停地编译。
:::

## 2 基础

一个简单的LaTeX程序如下:

```latex
% 导言区
\documentclass{article}

% 正文区
\begin{document}
	Hello  World 
\end{document}
```
### 2.1 导言区

#### 2.1.1 文档类型与全局设置

导言区指定文档类型的一般格式如下：
```latex
\documentclass[⟨options⟩]{⟨class-name⟩}
```

其中`class-name`规定了文档类型。常用的文档类型有：

- 英文可选`book`、`article`、`beamer` 

- 中文可选`ctexbook`、`ctexart`、`ctexbeamer` （自带对中文的支持），使用ctex文档类后无需使用ctex宏包

其中`option`为可选的全局设置。常见可选设置如下：

| 设置                     | 含义                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| 10/11/12pt             | 指定文档的基本字号，缺省为10pt                                                                          |
| a4paper, letterpaper   | 指定纸张大小， 默认美式letterpaper                                                                    |
| fleqn                  | 行间公式左对齐，缺省为居中                                                                              |
| leqno                  | 公式编号居左边，缺省为右边                                                                              |
| titlepage, notitlepage | 指定标题命令`\maketitle` 是否生成单独的标题页；article 缺省为notitlepage，report 和book 缺省为titlepage             |
| onecolumn, twocolumn   | 单栏/双栏排版                                                                                    |
| oneside, twoside       | 单/双面排版；双面排版时，奇偶页的页眉页脚、页边距不同；article和report 缺省为单面，book 缺省为双面                                |
| landscape              | 横向排版，缺省为纵向                                                                                 |
| openright, openany     | 指定新的一章`\chapter`是在奇数页（右侧）开头，还是直接紧跟着上一页开头；report 缺省为openany，book 缺省为openright。（对article 无效） |

通常设置默认字体大小为11pt，纸张大小为A4，单面打印。代码如下：

```latex
\documentclass[11pt, a4paper, oneside]{article}
```

#### 2.1.2 宏包导入

导言区可以导入各种宏包，从而使用相应的功能。语法如下：

```latex
\usepackage{宏包1, 宏包2}
```

常见宏包如下：

- `ctex`：中文支持
- `amsmath`：LaTex数学公式支持
- `graphicx`：插入图片
- `algorithm` 和 `algorithmic`：算法排版
- `listings`：插入代码块

### 2.2 正文区

#### 2.2.1 标题作者日期

导言区使用以下命令分别设置标题作者日期：

```latex
\begin{document} 
	\title{飞鸟集} 
	\author{泰戈尔} 
	\date{\today}
	\maketitle 
	正文内容 
\end{document}
```

::: note
**注意**：

设置了上述三个属性后，必须在**正文区第一行**且只能在第一行写上`\maketitle`，否则以上三个属性不生效。
:::

#### 2.2.2 章节

如果需要的话，将文档分为章（Chatpers）、节（Sections）和小节（Subsections）。下列分节命令适用于 article 类型的文档：

```latex
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
\subparagraph{...}
```

花括号内的文本表示章节的标题。对于 report 和 book 类型的文档我们还支持`\chapter{...}` 的命令。

#### 2.2.3 标签

可以对任意章节命令创建标签，这样他们可以在文档的其他部分被引用。使用 `\label{labelname}` 对章节创建标签。

然后输入 `\ref{labelname}` 或者 `\pageref{labelname}` 来引用对应的章节。

在 `\subsection{Stage 1}` 下面另起一行，输入 `\label{sec1}`。

在 Results 章节输入 Referring to section `\ref{sec1}` on page `\pageref{sec1}`。

#### 2.2.4 目录和页码

使用分节命令，可以容易地生成一个目录。

使用 \tableofcontents 在文档中创建目录。通常我们会在标题的后面建立目录。

更改页码为罗马数字（i,ii,iii），这会确保文档的正文从第 1 页开始。页码可以使用 `\pagenumbering{...}` 在阿拉伯数字和罗马数字见切换。

`\newpage` 命令会另起一个页面，这样我们就可以看到 `\pagenumbering` 命令带来的影响了。

```latex
\pagenumbering{roman}
\tableofcontents 
\newpage
\pagenumbering{arabic}
```

#### 2.2.5 字体

在纯英文的编辑中一般不会涉及到字体设置的问题，一般直接在模板中编辑内容就好。其实在写论文的时候这也满足大部分需求了。

很少有纯中文编辑的需求，中间难免有出现英文单词的时候。但是如果不单独设置的话英文单词的字体似乎会和中文字体保持一致，而我们一般是希望两种字体不同，比如中文为宋体，英文为 Times New Roman。

全中文的文档，尽量用 ctex 文档类。也就是 ctexart，ctexrep，ctexbook，ctexbeamer。

- 字体族设置

字体命令：

`\textrm{Roman Family}` 在花括号内的字体都是Roman Family 字体。

字体声明：

`\rmfamily Roman Family` 该命令下面的字体都是是Roman Family字体，直到新的声明出现覆盖该声明。

```latex
% 导言区
\documentclass{article}
\usepackage{ctex}
 
% 正文区
\begin{document}
	% 字体族的设置：罗马字体, 无衬线字体 打字机字体 中文（黑体，宋体，仿宋，楷书）
	
	% 字体命令
	\textrm{Roman Family 罗马字体 }
	
	\textsf{Sans Serif Family 无衬线字体}
	
	\texttt{Typewriter Family 打字机字体 }
	
	% 字体
	{\songti 宋体}
	
	{\heiti 黑体}
	
	{\fangsong 仿宋}
	
	{\kaishu 楷书}
	
	% 字体声明
	\rmfamily  Roman Family 罗马字体
	
	罗马字体
	
	\sffamily Sans Serif Family 无衬线字体
	
	\ttfamily Typewriter Family 打字机字体
	
	
\end{document}
```

- 字体系列设置

```latex
% 导言区
\documentclass{article}
\usepackage{ctex}
 
% 正文区
\begin{document}
	% 字体系列的设置（粗细，宽度）
	
	% 字体命令
	\textmd{Medium Series}
	
	\textbf{Boldface Series}
	
	%字系列
	\textbf{粗体}
	
	\textit{斜体}
	
	
	% 字体声明
	\mdseries{Medium Series}
	
	\bfseries{Boldface Series}
	
	
\end{document}
```
::: note
设置加粗不生效时，可能没有对应的粗体，使用AutoFakeBold来获取伪粗体，即`\documentclass[UTF8, AutoFakeBold]{ctexart}`。
:::

- 字体形状设置

```latex
% 导言区
\documentclass{article}
\usepackage{ctex}
 
% 正文区
\begin{document}
	% 字体形状设置(直立，斜体，伪斜体 ，小型大写)
	
	% 字体命令
	\textup{Upright Shape 直立}
	
	\textit{Italic Shape 斜体}
	
	\textsl{Slanted Shape 伪斜体}
	
	\textsc{Small Caps Shape 小型大写}
	
	% 字体声明
	\upshape{Upright Shape}
	
	\itshape{Slanted Shape}
	
	\slshape{Slanted Shape}
	
	\scshape{Small Caps Shape}
	
\end{document}
```

- 字体大小设置

```latex
% 导言区 10pt, 11pt, 12pt
\documentclass[12pt]{article}
\usepackage{ctex}
 
% 正文区
\begin{document}
    % 字体大小
 
    % 字体的大小
    {\tiny  Hello}\\
    {\scriptsize Hello}\\
    {\footnotesize Hello}\\
    {\small Hello}\\
    {\normalsize Hello}\\
    {\large Hello}\\
    {\Large Hello}\\
    {\LARGE Hello}\\
    {\huge Hello}\\
    {\Huge Hello}\\
    
    % 中文的字号
    \zihao{0} 你好\\
    \zihao{-0} 你好\\
    \zihao{1} 你好\\
    \zihao{-1} 你好\\
    \zihao{2} 你好\\
    \zihao{-2} 你好\\
    \zihao{3} 你好\\
    \zihao{-3} 你好\\
    \zihao{4} 你好\\
    \zihao{-4} 你好\\
    \zihao{5} 你好\\
    \zihao{-5} 你好\\
    \zihao{6} 你好\\
    \zihao{-6} 你好\\
    \zihao{7} 你好\\
    \zihao{8} 你好\\
\end{document}
```

标准字体大小如下图所示：

![字体大小.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/LaTex_2.2.5.png)

#### 2.2.6 列表

LaTeX 支持两种类型的列表：有序列表（enumerate）和无序列表（itemize）。列表中的元素定义为 `\item`。列表可以有子列表。

输入下面的内容来生成一个有序列表套无序列表：

```latex
\begin{enumerate} 
	\item First thing 
	\item Second thing 
	\begin{itemize} 
		\item A sub-thing 
		\item Another sub-thing 
	\end{itemize} 
	\item Third thing 
\end{enumerate}
```

可以使用方括号参数来修改无序列表头的标志。例如，`\item[-]` 会使用一个杠作为标志，你甚至可以使用一个单词，比如 `\item[One]`。

```latex
\begin{itemize} 
	\item[-] First thing 
	\item[+] Second thing 
	\begin{itemize} 
		\item[Fish] A sub-thing 
		\item[Plants] Another sub-thing 
	\end{itemize} 
	\item[Q] Third thing 
\end{itemize}
```

#### 2.2.7 表格

表格（tabular）命令用于排版表格。LaTeX 默认表格是没有横向和竖向的分割线的——如果你需要，你得手动设定。LaTeX 会根据内容自动设置表格的宽度。

下面的代码可以创一个表格：

```latex
\begin{tabular}{...}
```
省略号会由定义表格的列的代码替换：

- `l` 表示一个左对齐的列；
- `r` 表示一个右对齐的列；
- `c` 表示一个向中对齐的列；
- `|` 表示一个列的竖线；

例如，`{lll}` 会生成一个三列的表格，并且保存向左对齐，没有显式的竖线；`{|l|l|r|}` 会生成一个三列表格，前两列左对齐，最后一列右对齐，并且相邻两列之间有显式的竖线。

表格的数据在 `\begin{tabular}` 后输入：

- `&` 用于分割列；
- `\\` 用于换行；
- `\hline` 表示插入一个贯穿所有列的横着的分割线；
- `\cline{1-2}` 会在第一列和第二列插入一个横着的分割线。

最后使用 `\end{tabular}` 结束表格。举一些例子：

```latex
\begin{tabular}{|l|l|} 
	Apples & Green \\ 
	Strawberries & Red \\ 
	Orange & Orange \\ 
\end{tabular} 

\begin{tabular}{rc} 
	Apples & Green \\ 
	\hline 
	Strawberries & Red \\ 
	\cline{1-1} Oranges & Orange \\ 
\end{tabular} 

\begin{tabular}{|r|l|} 
	\hline 
	8 & here's \\ 
	\cline{2-2} 86 & stuff \\ 
	\hline 
	\hline 
	2008 & now \\ 
	\hline 
\end{tabular}
```

拓展：
- 合并多行：导入包，`\usepackage{multirow}` ，`\multirow{6}{*}{text}`
- 合并多列：导入包，`\usepackage{multirow}` ，`\multicolumn{4}{c}{text}`
- 表格/图片标题格式：在table语境下设置表格整体居中、添加标题
- 引用标签：在table语境下设置表格整体居中、添加标签
- 整体大小：使用`\resizebox{width}{height}{table}`命令来控制表格的整体高度和宽度
- 内容折行：clr不折行，设置宽度时自动折行
- 内容居中：`m{2cm}<{\centering}`设置表格宽度并使文本居中
- 字体修改：见[[#2.2.5 字体]]

```latex
\begin{table}[htbp]
    \centering
    \caption{“与你同行”APP基础功能表}
    \label{tab:3-1}
    \resizebox{0.9\textwidth}{!}{
        \begin{tabular}{m{2cm}<{\centering}m{3cm}<{\centering}m{10cm}}
            \hline
            \textbf{模块}           & \textbf{功能项} & \textbf{功能描述}                 \\
            \hline
            \multirow{6}{*}{用户管理} & 账号与安全        & 账号的注册、登录、注销和重置密码。             \\
                                  & 个人信息         & 查看和修改昵称、性别、定位、个人介绍等个人基本信息。    \\
                                  & 身份认证         & 提交和修改个人认证信息，可以认证残疾人、志愿者或用人单位。 \\
                                  & 应用设置         & 设置偏好或隐私选项。                    \\
            \hline
        \end{tabular}
    } 
\end{table}
```

::: warning
合并多行或多列时，不要忘记使用 `\\` 以换行。
:::

#### 2.2.8 图片

需要引入 **graphicx** 包。图片应当是 PDF，PNG，JPEG 或者 GIF 文件。下面的代码会插入一个名为 myimage 的图片：

```latex
\begin{figure}[h] 
	\centering 
	\includegraphics[width=1\textwidth]{myimage}
	\caption{Here is my image} 
	\label{image-myimage} 
\end{figure}
```

- `[h]` 是位置参数，**h** 表示把图表近似地放置在这里（如果能放得下）。有其他的选项：**t** 表示放在在页面顶端；**b** 表示放在在页面的底端；**p** 表示另起一页放置图表。你也可以添加一个 **!** 参数来强制放在参数指定的位置（尽管这样排版的效果可能不太好）。

- `\centering` 将图片放置在页面的中央。如果没有该命令会默认左对齐。使用它的效果是很好的，因为图表的标题也是居中对齐的。

- `\includegraphics{...}` 命令可以自动将图放置到你的文档中，图片文件应当与 TeX 文件放在同一目录下。

- `[width=1\textwidth]` 是一个可选的参数，它指定图片的宽度——与文本的宽度相同。宽度也可以以厘米为单位。你也可以使用 `[scale=0.5]` 将图片按比例缩小（示例相当于缩小一半）。

- `\caption{...}` 定义了图表的标题。如果使用了它，LaTeX 会给你的图表添加「Figure」开头的序号。你可以使用 `\listoffigures` 来生成一个图表的目录。

- `\label{...}` 创建了一个可以供你引用的标签。

#### 2.2.9 参考文献

LaTeX 可以轻松插入参考文献以及目录。本文会介绍如何使用另一个 BibTeX 文件来存储参考文献

- **BibTeX 文件类型**

BibTeX 文件包含了所有你想要在你文档中引用的文献。它的文件后缀名为 `.bib`。它的名字应设置为你的 TeX 文档的名字。`.bib` 文件是文本文件。你需要将你的参考文献按照下列格式输入：

```latex
@article{ Birdetal2001, Author = {Bird, R. B. and Smith, E. A. and Bird, D. W.}, Title = {The hunting handicap: costly signaling in human foraging strategies}, Journal = {Behavioral Ecology and Sociobiology}, Volume = {50}, Pages = {9-19}, Year = {2001} }
```

每一个参考文献先声名它的文献类型（reference type）。示例中使用的是 @article，其他的类型包括 @book，@incollection 用于引用一本书的中的章节，@inproceedings 用于引用会议论文。可以 [在此](http://en.wikibooks.org/wiki/LaTeX/Bibliography_Management) 查看更多支持的类型。

接下来的花括号内首先要列出一个引用键值（citation key）。必须保证你引用的文献的引用键值是不同的。你可以自定义键值串，不过使用第一作者名字加上年分会是一个表义清晰的选择。

接下来的若干行包括文献的若干信息，格式如下：

```latex
Field name = {field contents},
```

可以使用 LaTeX 命令来生成特殊的文字效果。比如意大利斜体可以使用 `\emph{Rattus norvegicus}`。

对于需要大写的字母，请用花括号包裹起来。BibTeX 会自动把标题中除第一个字母外所有大写字母替换为小写。

- **插入文献列表**

使用下列命令在文档当前位置插入文献列表，参考文献写在 `references.bib` 里。

```latex
\bibliographystyle{plain} 
\bibliography{references}
```

- **参考文献标注**

使用 `\cite{citationkey}` 来在你想要引用文献的地方插入一个标注。如果你不希望在正文中插入一个引用标注，但仍想要在文献列表中显示这次引用，使用 `\nocite{citationkey}` 命令。

想要在引用中插入页码信息，使用方括号：`\cite[p. 215]{citationkay}`。

要引用多个文献，使用逗号分隔：`\cite{citation01,citation02,citation03}`。

- **引用格式**

LaTeX 包含了多种行内数字标号引用的格式：

**Plain** 方括号包裹数字的形式。文献列表按照第一作者的字母表顺序排列。每一个作者的名字是全称。

**Abbrv** 与 **plain** 是相同的，但作者的名字是缩写。

**Unsrt** 与 **plain** 是相同的，但文献列表的排序按照在文中引用的先后顺序排列。

**Alpha** 与 **plain** 一样，但引用的标注是作者的名字与年份组合在一起，不是数字。

更多引用格式参考[LaTeX 入门 - OI Wiki (oi-wiki.org)](https://oi-wiki.org/tools/latex/#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE)。

::: note
**拓展**：
    
- 引用参考文献后显示`?`：先用`xelatex -> bibtex -> xelatex*2`编译链后再用`pdflatex -> bibtex -> pdflatex*2`编译。
    
- 修改角标为上角标：

```latex
% 法一
% 平 齐 时 用 命 令
\cite{...}
% 上 标 时用
\textsuperscript{\textsuperscript{\cite{...}}}
% 法二
% 定义新命令
\newcommand{\upcite}[1]{\textsuperscript{\textsuperscript{\cite{#1}}}}
```

- 修改角标颜色：`\hypersetup{citecolor=black}`。

- 将参考文献添加到目录：

```latex
% 将参考文献加入目录中

\addcontentsline{toc}{section}{参考文献}

% 最后采用的是外面导入bib文件形式

\bibliographystyle{unsrt}

\bibliography{references}
```

- 合并多个参考文献：解决方法见[latex 参考文献引用之多个引用合并-CSDN博客](https://blog.csdn.net/l_xiaox/article/details/130984003)。

:::

#### 2.2.10 特殊字符

下列字符在 LaTeX 中属于特殊字符：
```plaintext
# $ % ^ & _ { } ~ \
```

为了使用这些字符，我们需要在他们前面添加反斜杠进行转义：
```plaintext
\# \$ \% \^{} \& \_ \{ \} \~{}
```

::: warning
**注意**：

- 使用 `^` 和 `~` 字符的时侯需要在后面紧跟一对闭合的花括号，否则他们就会被解释为字母的上标。

- 反斜杠不能通过反斜杠转义（不然就变成了换行了），使用 `\textbackslash` 命令代替。
:::

输入空格：`\hspace{ 长度 }`，例如 `\hspace{1cm}`，其中的长度单位 cm 可以换成 mm, em, in, pt 等。

#### 2.2.11 公式

参考[LaTex数学公式](https://blog.csdn.net/ViatorSun/article/details/82826664?)。

1. 公式编号

```latex
$$ ... \tag1$$
$$ ... \tag{1.1}$$	# 多位序号记得用{}扩起来
```

2. 常用字母：

```latex
% 小写希腊字母
\alpha % α
\beta % β
\gamma % γ
\delta % δ
\epsilon % ϵ
\zeta % ζ
\eta % η
\theta % θ
\iota % ι
\kappa % κ
\lambda % λ
\mu % μ
\nu % ν
\xi % ξ
\pi % π
\rho % ρ
\sigma % σ
\tau % τ
\upsilon % υ
\phi % φ
\chi % χ
\psi % ψ
\omega % ω

% 大写希腊字母
\Gamma % Γ
\Delta % Δ
\Theta % Θ
\Lambda % Λ
\Xi % Ξ
\Pi % Π
\Sigma % Σ
\Upsilon % Υ
\Phi % Φ
\Psi % Ψ
\Omega % Ω
```

3. 运算符和特殊符号：

```latex
% 运算符
\times % 叉乘
\cdot % 点乘
\otimes % 圆圈内叉乘
\odot % 圆圈内点乘

% 数学符号
\sqrt{} % 开方/根号
\frac{}{} % 分数
\tilde{} % 顶部波浪线
\overline{} % 顶部横线
\hat{} % 顶部^符号
\langle % 左尖括号
\rangle % 右尖括号
\triangle % 上三角形
\triangledown % 下三角形
\approx % 约等于
\pm % 正负号
\leq % 小等于
\geq % 大等于
~ % 空格
\lfloor \rfloor % 下取整
\lceil \rceil % 上取整
\begin{cases} \end{cases} % 分段函数大括号，中间用\\换行
\partial % 偏导
```

4. 集合操作

```latex
% 集合操作
\in, \notin % 属于，不属于
\emptyset, \varnothing % 空集（后者用于区别希腊字母\phi）
\cup, \cap, \setminus % 并集，交集，差集
\subset, \subseteq % 子集，真子集
\times % 笛卡尔积
```

## 3 文件组织
当编写较大规模的LATEX 源代码，如书籍、毕业论文等，需要将源代码分成若干个文件而不是写到一堆，比如每章写一个文件，那就要用到下面的命令：

```latex
\include{⟨filename⟩}
```

如果和要编译的主文件不在一个目录中，则要加上相对或绝对路径，`filename` 可以不带扩展名，此时默认为 `.tex`，其它文件必须带扩展名。

值得注意的是`\include` 在读入`filename`之前会另起一页。有的时候我们并不需要这样，而是用 `\input`命令，它纯粹是把文件里的内容插入：

```latex
\input{⟨filename⟩}
```

另外 LaTex 提供了一个 \includeonly 命令来组织文件，用于导言区，指定只载入某些文件：

```latex
\includeonly{⟨filename1 ⟩,⟨filename2 ⟩,...}
```

## 4 hyperref 宏包

hyperref包允许创建可点击的超链接，包括对文档内部的交叉引用。

其使用包含以下几个步骤。

1. 加载hyperref包。通过代码`\usepackage{hyperref}`完成加载。
2. 配置超链接样式。在导言区使用`\hypersetup`命令设置样式，如颜色。
3. 创建标签。在指定位置，如某个section使用`\label{labelname}`创建标签。
4. 引用标签。在需要引用的位置使用`\autoref{labelname}`创建引用。

配置方式如下：

```latex
\usepackage{hyperref}
\hypersetup{
	colorlinks=true,
	linkcolor=cyan,
	filecolor=blue,      
	urlcolor=red,
	citecolor=green,
}
```

::: info
- colorlinks：超链接是否带颜色
- linkcolor：目录，公式，图表等内部链接的颜色
- filecolor就是文件型链接的颜色  
- urlcolor就是网页链接的颜色
- citecolor就是参考文献连接的颜色
:::
