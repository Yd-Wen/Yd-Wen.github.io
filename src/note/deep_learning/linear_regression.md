---
date: 2024-12-25
title: 5 线性回归
icon: linear_regression
category:
  - 深度学习
tag:
  - 线性回归
---

## 5.1 简介

参考：[机器学习：线性回归模型](../machine_learning/linear_regression.md)

## 5.2 实现步骤

基础模型：$y=wx+b$

实现步骤：

1. 准备数据：假设使用$y=3x+0.8$构造数据$x$

2. 计算预测值

3. 计算损失，把参数梯度置为0，进行反向传播

4. 更新参数

## 5.3 实现案例

### 5.3.1 实现一

参考：

- [手动实现线性回归](https://www.bilibili.com/video/BV159ScY8EZE)

```python
import torch  
import numpy as np  
from matplotlib import pyplot as plt  
  
# 1. 准备数据  
x = torch.rand([500, 1])  
y = x * 3 + 0.8  
  
# 初始化参数  
lr = 0.01  
w = torch.rand(1, requires_grad=True)  
b = torch.rand(1, requires_grad=True)  
  
# 损失函数  
def loss_fn(y_true, y_prediction):  
    ls = (y_true - y_prediction).pow(2).mean()  
    for item in [w, b]:  
        # 每次反向传播前将梯度置为0  
        if item.grad is not None:  
            item.grad.data.zero_()  
    ls.backward()  
    return ls.data  
  
# 优化器：更新参数  
def optimizer(learning_rate):  
    w.data -= learning_rate * w.grad.data  
    b.data -= learning_rate * b.grad.data  
  
# 训练  
for i in range(300):  
    # 2. 计算预测值  
    y_predict = torch.multiply(x, w) + b  
  
    # 3. 计算损失  
    loss = loss_fn(y, y_predict)  
  
    # 4. 更新参数  
    optimizer(lr)  
  
    if (i+1) % 100 == 0:  
        print(i+1, loss.item())  
        print(w.item(), b.item())  
  
# 预测和画图  
y_pred = torch.multiply(x, w) + b  
plt.scatter(x.numpy(), y.numpy())  
plt.plot(x.numpy(), y_pred.detach().numpy(), 'r-', lw=5)  
plt.show()
```

其中，`loss.backward()`根据损失函数，对参数（`requires_grad=True`）计算梯度并且把它累加到x.grad()，此时还未更新梯度。**因此每次反向传播之前需要将梯度置为0**。

::: note
`tensor.numpy()`在`requires_grad=True`时不能直接转换，需要使用`tensor.detach().numpy()`。
:::

为了防止跟踪历史记录（和使用内存），可以将代码包装在`with torch.no_grad():`中，在**评估模型时特别有用**，因为该模型可能具有`requires_grad=True`的可训练参数，但是我们不需要在评估过程中对他们进行梯度计算和参数更新。

```python
with torch.no_grad():
	c = (a*a).sum() # 此时c没有grad_fn
```

### 5.3.2 实现二

参考：

- [08 线性回归 + 基础优化算法【动手学深度学习v2】](https://www.bilibili.com/video/BV1PX4y1g7KC)

1. 生成数据集

```python
def synthetic_data(w, b, n_samples):  
    """生成y=wx+b+噪声"""  
    X = torch.normal(0, 1, (n_samples, len(w)))  
    y = torch.matmul(X, w) + b  
    # 添加噪声  
    y += torch.normal(0, 0.01, y.shape)  
    # 转换成列向量  
    return X, y.reshape((-1, 1))

true_w = torch.tensor([2,-3.4]) 
true_b = 4.2 
features, labels = synthetic_data(true_w, true_b, 1000)
```

2. 读取数据集

```python
def data_iter(batch_size, features, labels):  
    # 样本总数  
    num_examples = len(features)  
    # 随机打乱样本  
    indices = list(range(num_examples))  
    random.shuffle(indices)  
    # 每次迭代返回batch_size个样本  
    for i in range(0, num_examples, batch_size):  
        batch_indices = torch.tensor(  
            indices[i: min(i + batch_size, num_examples)])  
        yield features[batch_indices], labels[batch_indices]
```
::: note
- `yield`：它可以被用于循环或者其他需要迭代器的地方。
- 使用`yield`可以让函数返回一个值，并且保持该函数的状态，以便下次调用时从上次离开的地方继续执行。
:::

3. 初始化模型参数

```python
w = torch.normal(0, 0.01, size=(2, 1), requires_grad=True)  
b = torch.zeros(1, requires_grad=True)
```

4. 定义模型

```python
def linreg(X, w, b):  
	"""线性回归模型""" 
	return torch.matmul(X, w) + b
```

5. 定义损失函数

```python
def squared_loss(y_true, y_pred):  
    """均方损失"""  
    return (y_true - y_pred.reshape(y_true.shape)) ** 2 / 2
```

6. 定义优化算法

```python
def sgd(params, lr, batch_size):  
    """小批量随机梯度下降"""  
    with torch.no_grad():  
        for param in params:  
	        # 更新参数
            param -= lr * param.grad / batch_size  
            # 不记录梯度
            param.grad.zero_()
```

7. 训练模型

```python
lr = 0.03  
batch_size = 10  
net = linreg  
l = squared_loss  
num_epochs = 3  
  
for epoch in range(num_epochs):  
    for X, y in data_iter(batch_size, features, labels):  
        # 小批量损失  
        loss = l(net(X, w, b), y)  
        # 向量求和后反向传播  
        loss.sum().backward()  
        # 使用参数的梯度更新参数  
        sgd([w, b], lr, batch_size)  
    with torch.no_grad():  
        train_loss = l(net(features, w, b), labels)  
        print(f'epoch {epoch + 1}, loss {float(train_loss.mean()):f}')

print(f'w的估计误差: {true_w- w.reshape(true_w.shape)}')  
print(f'b的估计误差: {true_b- b}')
```

### 5.3.3 实现三

参考

- [线性回归的简洁实现](https://www.bilibili.com/video/BV1PX4y1g7KC)

1. 读取数据集

```python
def load_array(data_arrays, batch_size, is_train=True): 
	"""构造一个PyTorch数据迭代器""" 
	dataset = data.TensorDataset(*data_arrays) 
	return data.DataLoader(dataset, batch_size, shuffle=is_train)
```

2. 定义模型和初始化参数

```python
from torch import nn
# 线性回归模型  
net = nn.Sequential(nn.Linear(2, 1))
# 初始化模型参数  
net[0].weight.data.normal_(0, 0.01)  
net[0].bias.data.fill_(0)
```

3. 定义损失函数和优化算法

```python
# 定义损失函数  
ls = nn.MSELoss()  
# 定义优化算法  
trainer = torch.optim.SGD(net.parameters(), lr=0.03)
```

4. 训练模型

```python
# 训练模型  
num_epochs = 3  
for epoch in range(num_epochs):  
    for X, y in data_iter:  
        # 小批量损失  
        loss = ls(net(X), y)  
        # 反向传播前梯度清零  
        trainer.zero_grad()  
        # 反向传播  
        loss.backward()  
        # 更新参数  
        trainer.step()  
    train_loss = ls(net(features), labels)  
    print(f'epoch {epoch + 1}, loss {float(train_loss):f}') 
  
w = net[0].weight.data  
b = net[0].bias.data  
print(f'w的估计误差: {true_w- w.reshape(true_w.shape)}')  
print(f'b的估计误差: {true_b- b}')
```
