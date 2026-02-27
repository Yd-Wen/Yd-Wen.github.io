---
date: 2025-03-21
title: 12 注意力机制
icon: attention
category:
  - 深度学习
tag:
  - PyTorch
  - 注意力机制
---

## 12.1 简介

普通的 `RNN` 中，`Encoder` 需要把一个句子转换成一个向量，然后在 `Decoder` 中使用，这就需要将句子中所有信息都包含进去，这样会产生瓶颈。

为此，Bahdanau等人在2015年提出 `Attention` 机制，即**注意力机制**。就像一幅画，我们能很快说出画的主要内容而忽略背景。

深度学习中的注意力机制（Attention Mechanism）是一种模仿人类视觉和认知系统的方法，它允许神经网络在处理输入数据时集中注意力于相关的部分。通过引入注意力机制，神经网络能够自动地学习并选择性地关注输入中的重要信息，提高模型的性能和泛化能力。

深度学习中，注意力机制通常应用于序列数据（如文本、语音或图像序列）的处理。其中，最典型的注意力机制包括：

- **自注意力机制**

- **空间注意力机制**

- **时间注意力机制**

这些注意力机制允许模型对输入序列的不同位置分配不同的权重，以便在处理每个序列元素时专注于最相关的部分。

## 12.2 基本原理

起初的注意力机制将注意力汇聚的输出计算成为值的加权和。

通过Query与Key的注意力汇聚（即，给定一个 Query，计算Query与 Key的相关性，然后根据Query与Key的相关性去和对应的Value进行相乘）实现对Value的注意力权重分配，生成最终的输出结果。

其过程包括三个基本步骤：

1. 注意力分数：计算 Query 和 Key 的相关性

2. 注意力权重：归一化注意力分数

3. 加权求和：根据注意力权重对 Value 进行加权求和，得到带注意力权重的 Value

### 12.2.1 注意力分数

假设 query $\mathbf q\in \mathbb{R}^q$，m 对 key-value $(\mathbf k_1, \mathbf v_1), \dots$，这里 $\mathbf k_i \in \mathbb R^k, \mathbf v_i \in \mathbb R^v$。计算Q和K的相关性，公式一般描述为：
$$
\alpha(\mathbf q,\mathbf k_i)
$$

相关性有很多变体（这也是很多论文一个小创新点）如：

- 加性注意力：Q和K分别乘以对应的可学习矩阵，然后相加，类似一个单隐藏层的MLP
$$
\alpha(\mathbf q, \mathbf k_i) = w^T_vtanh(W_qq+W_kk)
$$

其中，$W_q \in \mathbb R^{h\times q}$，$W_k \in \mathbb R^{h\times k}$，$W_v \in \mathbb R^h$ 分别是 Q、K、V 对应可学习参数。

- 缩放点积注意力：直接将Q和K相乘，然后乘以一个缩放因子
$$
\alpha(\mathbf q, \mathbf k_i) = \frac{\langle \mathbf q, \mathbf k_i\rangle}{\sqrt d}
$$

其中 $\mathbf q, \mathbf k_i \in \mathbb R^d$。

其矩阵形式为：$\mathbf Q \in \mathbb R^{n\times d}$，$\mathbf K\in \mathbb R^{m\times d}$，长度一样都为 d，则
$$
\alpha(\mathbf Q,\mathbf K)=\frac{\mathbf Q\mathbf K^T}{\sqrt d} \in \mathbb R^{n\times m}
$$

### 12.2.2 注意力权重

注意力权重是将第一步得到的注意力分数进行归一化，通常是softmax归一化，使用 softmax 函数是为了使得所有的注意力分数在 `[0,1]` 之间，并且和为 1。公式为：
$$
score(\mathbf q, \mathbf k_i) = softmax(\alpha(\mathbf q, \mathbf k_i)) = \frac{\exp(\alpha(\mathbf q, \mathbf k_i))}{\sum^m_{j=1} \exp \alpha(\mathbf q, \mathbf k_j)}
$$

使用第二步得到的注意力权重，对 V 进行加权求和。公式为：
$$
output = score(\mathbf Q,\mathbf K) \mathbf V
$$

## 12.3 自注意力机制

自注意力机制的基本思想是，在处理序列数据时，每个元素都可以与序列中的其他元素建立关联，而不仅仅是依赖于相邻位置的元素。它通过计算元素之间的相对重要性来自适应地捕捉元素之间的长程依赖关系。

具体而言，对于序列中的每个元素，自注意力机制计算其与其他元素之间的相似度，并将这些相似度归一化为注意力权重。然后，通过将每个元素与对应的注意力权重进行加权求和，可以得到自注意力机制的输出。

自注意力机制是注意力机制的一种特殊形式，其核心限制是：**Q、K、V来自同一组输入数据**。此时，$\mathbf Q, \mathbf K \in \mathbb R^{n\times d}, \mathbf V\in \mathbb R^{n\times v}$。

示例代码：
```python
import torch
import torch.nn as nn

class SelfAttention(nn.Module):
    dim_in: int
    dim_k: int
    dim_v: int

    def __init__(self, dim_in, dim_k, dim_v):
        super(SelfAttention, self).__init__()
        self.dim_in = dim_in
        self.dim_k = dim_k
        self.dim_v = dim_v
        self.linear_q = nn.Linear(dim_in, dim_k, bias=False)
        self.linear_k = nn.Linear(dim_in, dim_k, bias=False)
        self.linear_v = nn.Linear(dim_in, dim_v, bias=False)
        self._norm_fact = 1 / sqrt(dim_k)

    def forward(self, x):
        # x: batch, n, dim_in
        batch, n, dim_in = x.shape
        assert dim_in == self.dim_in

        q = self.linear_q(x)  # batch, n, dim_k
        k = self.linear_k(x)  # batch, n, dim_k
        v = self.linear_v(x)  # batch, n, dim_v

        dist = torch.bmm(q, k.transpose(1, 2)) * self._norm_fact  # batch, n, n
        dist = torch.softmax(dist, dim=-1)  # batch, n, n

        att = torch.bmm(dist, v)
        return att
```

::: tip
`torch.bmm` 是 PyTorch 中的一个函数，用于执行两个批次的矩阵乘法。其英文全称为 **Batch Matrix-Matrix Multiplication**。
:::
