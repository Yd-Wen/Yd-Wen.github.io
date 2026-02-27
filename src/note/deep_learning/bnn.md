---
date: 2025-04-17
title: 13 二值神经网络
icon: bnn
category:
  - 深度学习
tag:
  - PyTorch
  - 二值神经网络
---

## 13.1 简介

二值化神经网络的 idea 最初源于 2016 年深度学习三巨头之一 Yoshua Bengio 的论文《BinaryNet: Training Deep Neural Networks with Weights and Activations Constrained to +1 or -1.》。

在全精度的卷积神经网络中，其操作可以描述为：
$$
z = \sigma (w\otimes a)
$$

其中，$w$ 为权重，$a$ 为激活（输入），$\otimes$ 表示卷积操作，$\sigma$ 为非线性函数。

## 13.2 基本原理

### 13.2.2 前向传播

前向传播过程中，卷积操作包含大量浮点运算操作，包括浮点乘法运算和浮点加法运算，这是神经网络中的绝大多数运算。

二值化的目标是将32位浮点权重和激活用1位二进制表示。可描述为：
$$
\begin{align}
Q_w(w_r)&=\alpha w_b \\
Q_a(a_r)&=\beta a_b
\end{align}
$$

其中 $Q_w$ 和 $Q_a$ 为二值化函数，$w_r$ 和 $a_r$ 为真实的/全精度的权重和激活，$w_b$ 和 $a_b$ 为二值化的权重和激活。

常用的二值化函数是 $sign$ 函数：
$$
sign(x) = \begin{cases} &+1,&~if~x\geq 0 \\ &-1, &~otherwise \end{cases} 
$$

::: tip
BNN中，激活函数就是 $sign$ 函数。
:::

二值化的卷积神经网络中，权重和激活二值化后，其操作可以描述为：
$$
z = \sigma (w_r\otimes a_r) = \sigma (\alpha\beta(w_b\odot a_b))
$$

其中， $\odot$ 为同或和位计数操作。

::: tip
位计数操作：二进制编码（0/1）中，统计比特位为 1 的个数；统计结果 `*` 2 - 所有比特位总数 = 实值计算结果，即 A ⋅ B = 2 × Bitcount(A XNOR B) − N。
:::

![异或操作.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202507041620641.png)

![BNN 卷积过程.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202507031618722.png)

### 13.2.2 反向传播

同全精度网络一样，反向传播时使用BP算法更新参数。但是，**sign 函数在0处不可导，其他地方导数为0，无法有效进行梯度传递**，因此不能直接使用基本 B P的梯度下降法更新参数。

解决办法是使用**直通估计器（straight-through estimator, STE）**。当梯度传递遇到 $sign$ 函数时，直接跳过该函数，即 $sign$ 函数梯度默认为1，描述为：
$$
\frac{\partial L}{\partial W_R} = \frac{\partial L}{\partial W_B}
$$

STE的可视化如下：

![STE.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202507031533567.png)

同时考虑到这个 $w_r$ 是没有设置边界的，这样它就有可能会一直累加到特别大的值，从而与 $w_b$ 之间的量化误差越来越大，积重难返，所以Yoshua Bengio 对 $w_r$ 还单独加了一个截断函数 $clip(x,-1,1)$，将其限制在 -1 和 +1 之间，这样使得 $w_r$ 和 $w_b$ 的距离更近。
$$
clip(x, -1, 1) = max(-1, min(1, x))
$$

激活的更新和权重类似，同样遵循 STE 原理。不同的是，Yoshua Bengio 在实验中发现，当 $a_r$ 的绝对值大于1时，会传递较大的梯度导致震荡，此时将梯度置 0，效果更好。描述为：
$$
\frac{\partial L}{\partial a_R} = \begin{cases} \frac{\partial L}{\partial a_B} * 1, &|a_R|\leq1 \\ 0, &otherwise\end{cases}
$$

::: important
**总结：**
- 前向传播时，使用二值化函数（如 $sign$ ）二值化权重和激活，将浮点乘法、加法运算替换成更简单的同或、位计数运算。
- 反向传播时，遵循 STE 原理，跳过 $sign$ 函数，权重更新后，进行裁剪以减小量化误差；激活更新时，若激活的实值绝对值大于 1，则将梯度置 0，避免训练时的震荡。
:::

## 13.3 分类

- 原生类：如 BinaryConnect 直接二值化

- 优化类：在原生BNN基础上进一步优化，包括：

	- 最小化量化误差（如 XNOR-Net 用缩放因子逼近）；

	- 改进损失函数（如引入额外损失项）；

	- 减少梯度误差（如设计近似函数）等。

## 13.4 训练技巧

- 梯度估计优化：采用直通估计器（STE）近似 sign 函数导数，如使用 Identity 函数替代 clip 函数，避免梯度消失。

- 缩放因子引入：通过为二值参数添加可学习的缩放因子（如 XNOR-Net），缓解信息损失问题。

- 正则化策略：添加额外损失项约束二值化过程，如最小化全精度与二值参数的差异。

- 知识蒸馏：利用全精度模型的软标签指导 BNN 训练，提升性能。

- 网络结构优化：设计适合二值化的网络架构，如增加网络宽度补偿精度损失。
