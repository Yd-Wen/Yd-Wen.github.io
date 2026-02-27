---
date: 2025-02-12
title: 11 循环神经网络
icon: rnn
category:
  - 深度学习
tag:
  - PyTorch
  - 循环神经网络
---

## 11.1 分词

### 11.1.1 概念和工具

`tokenization` 是通常所说的**分词**，分割出的每个词语称为 `token`。

常见分词工具：

- `jieba`：[链接](https://github.com/fxsjy/jieba)

- 清华大学分词工具`THULAC`：[链接](https://github.com/thunlp/THULAC-Python)

### 11.1.2 分词方法

- 转换成词语：`[我,爱,深度学习]`

- 转换成字：`[我,爱,深,度,学,习]`

## 11.2 N-gram表示方法

- 有时候可以用2、3或者多个词表示。

- `N-gram`：一组一组的词语，其中N表示能被一起使用的词语数量。

```python
text = "我爱深度学习"
cuted = jieba.lcut(text)
# cuted=[['我爱','深度'], ['深度','学习']]
```

## 11.3 向量化

文本转换成词向量方法：

- 独热编码：`one-hot`

- 词嵌入：`word embedding`

### 11.3.1 one-hot

该编码方式将每一个 `token` 用长度为N的向量表示，N代表词典的个数。

| token | one-hot encoding |
| ----- | ---------------- |
| 深     | 1000             |
| 度     | 0100             |
| 学     | 0010             |
| 习     | 0001             |

### 11.3.2 word embedding

该方法使用浮点型的稠密矩阵表示文本。

若文本有20000个词语，使用 `one-hot` 得到 $20000\times20000$ 的矩阵，其中大部分为0；使用 `word embedding` 只需要 $20000\times{N}$ 的矩阵，如 $20000\times300$。

| token | num | vector            |
| ----- | --- | ----------------- |
| 词1    | 0   | `w11,w12,...,w1N` |
| 词2    | 1   | `w21,w22,...,w2N` |
| ...   | ... | ...               |
| 词M    | M-1 | `wM1,wM2,...,wMN` |

一般情况下，**先把 token 转换成数字，再把数字转换成向量**，即 `token->num->vector`。

`torch`提供了上述操作的API：`torch.nn.Embedding(num_embeddings, embedding_dim)`。

其中：

- `num_embeddings`：表示词典的大小M

- `embedding_dim`：表示嵌入的维度（向量的长度），如300

## 11.4 RNN

循环神经网络(Recurrent Neural Networ, RNN)是一类具有短期记忆能力的神经网络。网络中的神经元不仅可以接收其他神经元的信息，还可以接收自身的信息，形成环路。即神经元的输出可以在下一个时间步直接作用到自身（作为输入）。

网络结构如下：

![网络结构.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4_01.png)

RNN中的循环表示在下一个时间步(Time Step)上会返回作为输入的一部分。时间步展开图如下：

![时间步展开图.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4_02.png)

### 11.4.1 RNN 类型

RNN的 不同表示和功能如图：

![RNN 类型.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4.1.png)

- `one-to-one`：固定长度的输入和输出，`e.g.`图像分类

- `one-to-many`：序列输出，`e.g.`图像转文字

- `many-to-one`：数列输入，`e.g.`文本分类

- `many-to-many`异步：`e.g.`文本翻译

- `many-to-many`同步：`e.g.`视频分类（根据每一帧对视频分类）

### 11.4.2 LSTM

长短期记忆网络(Long Short-Term Memory, LSTM)是一种特殊类型的RNN，可以学习长期依赖。

一个 LSTM 单元如图所示：

![LSTM 单元.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4.2_01.png)

LSTM 的核心在于单元（细胞）的状态，即下图中黑线部分：

![细胞状态.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4.2_02.png)
LSTM通过**门**实现记忆的增加或删除。**门**通过 `sigmoid` 和点乘(pointwise multiplication)实现。

LSTM的三种门：

1. 遗忘门

通过 `sigmoid` 函数决定哪些信息被遗忘。$h^{t-1}$与$x^t$ 合并(`concat`)之后，乘上权重，加上偏置，通过 `sigmoid` 函数输出 `[0,1]` 间的值，最后和前一步的细胞状态（记忆）$C^{t-1}$ 点乘，从而决定保留还是遗忘。公式为：
$$
f_t=\sigma(W_f\cdot[h^{t-1},x^t]+b_f)
$$

![遗忘门.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4.2_03.png)



2. 输入门：决定哪些信息保留并更新信息。

首先决定保留信息的过程包括：

- `sigmoid` 层决定多少信息会被更新；

- `tanh` 层创造一个新的候选向量 $\tilde C$，后续可能会被添加到细胞状态，决定了信息更新的大小和方向。

公式为：
$$
\begin{align}
i_t&=\sigma(W_i\cdot[h^{t-1},x^t]+b_i)\\
\tilde C_t&=tanh(W_C\cdot[h^{t-1},x^t]+b_C)
\end{align}
$$

![输入门.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4.2_04.png)

接下来更新细胞状态 $C_{t-1}$为$C_t$：

- 旧的细胞状态和遗忘门相乘；

- 然后加上输出门和 `tanh` 相乘的结果。

公式为：
$$
C_t=f_t\times C_{t-1}+i_t\times\tilde C_t
$$

![细胞状态更新.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4.2_05.png)

3. 输出门：决定输出什么信息，经过变换后通过 `sigmoid` 决定哪些细胞状态会被输出。流程如下：

- 前一次输出和当前时间步的输入合并，通过 `sigmoid` 函数得到 $o_t$；

- 更新后的细胞状态 $C_t$ 经过 `tanh` 处理，转换到 `[-1,1]` 之间；

- `tanh` 处理结果与 $o_t$ 相乘，结果输出到下一个单元。  

公式为：
$$
\begin{align}
o_t&=\sigma(W_o\cdot[h^{t-1},x^t]+b_o)\\
h_t&=o_t\times tanh(C_t)
\end{align}
$$

![输出门.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4.2_06.png)

### 11.4.3 GRU

`GRU(Gated Recurrent Unit)` 是一种 `LSTM` 的变体，将遗忘门和输入门组合成更新门，合并了单元状态和隐藏状态，由于比 `LSTM` 简单，所以越来越受欢迎。

公式：
$$
\begin{align}
z_t&=\sigma(W_z\cdot[h^{t-1},x^t])\\
r_t&=\sigma(W_r\cdot[h^{t-1},x^t])\\
\tilde h_t&=tanh(W\cdot[r_t\times h_{t-1},x_t])\\
h_t&=(1-z_t)\times h_{t-1}+z_t\times\tilde h_t
\end{align}
$$

![GRU 单元.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_10.4.3.png)

### 11.4.4 双向LSTM/GRU

- 有时候预测的词语和后面的内容也相关；

- 输出既有正向记忆也有反向记忆。

### 11.4.5 LSTM API

`LSTM`和`GRU`都是由`torch.nn`提供。

以`torch.nn.LSTM(input_size, hidden_size, num_layers, batch_first, dropout, bidirectional)`为例，参数包括：

- `input_size`：输入数据形状，即 `embedding_dim`

- `hidden_size`：隐藏层数量，即每一层有多少个LSTM单元

- `num_layer`：RNN中LSTM单元层数

- `batch_first`：默认值 `false`，输入数据需要 `(seq_len,batch,feature)`，如果为 `true`，则为 `(batch，seq_len,feature)`

- `dropout`：默认值0，即训练过程中让参数随机丢失，能够提高训练速度解决过拟合问题，这里是在LSTM最后一层对每个输出进行 `dropout`

- `bidirectional`：是否双向，默认 `false`

实例化LSTM对象后，不仅需要传入数据，还需要前一次隐藏状态$h_0$和前一次的细胞状态（记忆）$c_0$，即：`lstm(input, (h0, c0))`。

LSTM的默认输出为：`output, (hn, cn)`。

- `output`：`(seq_len, batch, num_directions*hidden_size)`

- `hn`：`(num_layers*num_directions, batch, hidden_size)`

- `cn`：`(num_layers*num_directions, batch, hidden_size)`

使用示例：

```python
import torch  
  
batch_size = 10  # 批次大小
seq_len = 20  # 句子长度
embedding_size = 30  # 嵌入向量的大小
vocab_size = 100  # 字典大小
hidden_size = 18  # 隐藏层大小
num_layers = 2  # 隐藏层数
  
# 准备输入数据  
intput = torch.randint(0, vocab_size, size=(batch_size, seq_len))  
# 准备embedding  
embedding = torch.nn.Embedding(vocab_size, embedding_size)  
lstm = torch.nn.LSTM(embedding_size, hidden_size, num_layers)  
  
# 进行embed操作：(batch_size, seq_len, embedding_size)  
embed = embedding(intput)  
  
# 转换数据为batch_first=False：(seq_len, batch_size, embedding_size)  
embed = (embed.permute(1, 0, 2))  
  
# 初始化状态，若不初始化torch默认为0  
h_0 = torch.rand(num_layers, batch_size, hidden_size)  
c_0 = torch.rand(num_layers, batch_size, hidden_size)  
output, (h_1, c_1) = lstm(embed, (h_0, c_0))  
  
print(output.shape)  
print(h_1.shape)  
print(c_1.shape)

# 获取最后一个时间步的输出  
last_output = output[:, -1, :]  
# 获取最后一次的hidden_state  
last_hidden_state = h_n[-1, :, :]  
print(last_output.shape)  
print(last_hidden_state.shape)
```

::: note
- `output: torch.Size([20, 10, 18])`
- `h_1: torch.Size([2, 10, 18])`
- `c_1: torch.Size([2, 10, 18])`
:::
