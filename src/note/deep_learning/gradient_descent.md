---
date: 2024-12-22
title: 5 梯度下降与反向传播
icon: gradient_descent
category:
  - 深度学习
tag:
  - 梯度
  - 反向传播
---

## 5.1 简介

求导是几乎所有深度学习优化算法的关键步骤。

虽然求导的计算很简单，只需要一些基本的微积分。但对于复杂的模型，手工进行更新是一件很痛苦的事情（而且经常容易出错）。 深度学习框架通过自动计算导数，即**自动微分**（automatic differentiation）来加快求导。

实际情况下，根据设计好的模型，系统会构建一个**计算图**（computational graph），来跟踪计算是哪些数据通过哪些操作组合起来产生输出。自动微分使系统能够随后反向传播梯度。这里，**反向传播**（backpropagate）意味着跟踪整个计算图，填充关于每个参数的偏导数。

## 5.2 梯度

什么是梯度：

- 向量
- 导数+变化最快的方向（参数更新的方向）

模型评估：

- 收集数据 $x$，构建机器学习模型 $f$，得到 $f(x,w)=Y_{predict}$ 
- 回归任务：均方误差（MSE）
$$
MSE=\frac{1}{n}\sum_{i=1}^n(Y_{predict}^{(i)}-Y^{(i)})^2
$$
- 分类任务：交叉熵
$$
CE=-\frac{1}{n}\sum_{i=1}^nY^{(i)}\log(Y_{predict}^{(i)})+(1-Y^{(i)})\log(1-Y_{predict}^{(i)})
$$

## 5.3 梯度下降

1. 计算梯度

$$
\nabla w=\frac{f(w+0.00001)-f(w-0.00001)}{2\times0.00001}
$$

2. 更新参数

$$
w=w-\alpha\nabla w
$$

::: tip
- $\alpha$：学习率，控制参数更新的步长
- $\nabla w$ < 0，w将增大
- $\nabla w$ > 0，w将减小
:::

## 5.3 反向传播

反向传播从后往前，计算每一层的梯度。即跟踪整个计算图，填充关于每个参数的偏导数。

- 示例

在计算 y 关于 x 的梯度之前，需要一个地方来存储梯度。重要的是，我们不会在每次对一个参数求导时都分配新的内存。因为我们经常会成千上万次地更新相同的参数，每次都分配新的内存可能很快就会将内存耗尽。

::: info
一个标量函数关于向量x的梯度是向量，并且与x具有相同的形状。
:::

```python
import torch

# 初始化
x = torch.arange(4)

# 存储梯度
x.requires_grad_(True)
# 等价于
x = torch.arange(4, requires_grad=True)
x.grad # 默认值是None

# 计算
y = 2 * torch.dot(x, x)

# 调用反向传播函数来自动计算y关于x每个分量的梯度
y.backward()
x.grad
x.grad == 4 * x
```

::: tip
当设置 `requires_grad=True` 后，之后的每次计算都会修改其 `grad_fn` 属性，用来记录历史操作。
:::

现在，计算x的另一个函数：

```python
# 默认情况下，pytorch会累积梯度，因此需要清除之前的梯度
x.grad.zero_()
y = x.sum()
y.backward()
x.grad
```

::: tip
调用 `backward` 函数后，会计算 `y` 关于 `x` 的梯度，并将结果存储在 `x.grad` 中。
:::

虽然这些更奇特的对象确实出现在高级机器学习中（包括深度学习中），但当调用**向量的反向计算**时， 我们通常会试图计算一批训练样本中每个组成部分的损失函数的导数。这里，我们的目的不是计算微分矩阵， 而是单独计算批量中每个样本的偏导数之和。

```python
# 对非标量调用backward需要传入一个gradient参数，该参数指定微分函数关于self的梯度。 
# 本例只想求偏导数的和，所以传递一个1的梯度是合适的 
x.grad.zero_() 
y = x * x 
# 等价于y.backward(torch.ones(len(x))) 
y.sum().backward() 
x.grad
```
