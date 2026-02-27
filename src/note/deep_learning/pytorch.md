---
date: 2024-12-19
title: 3 PyTorch 基础
icon: pytorch
category:
  - 深度学习
tag:
  - PyTorch
  - 基础
---

## 3.1 简介

PyTorch 是一个基于 Python 的科学计算库，主要用于深度学习。它由 Facebook 的 AI 研究团队开发，是一个开源项目，提供了丰富的工具和库，用于构建和训练神经网络模型。

PyTorch 的设计目标是提供一个灵活的、动态计算图的框架，使得开发者可以方便地进行模型的定义、训练和推理。它专注于提供高效的数值计算能力，尤其是在矩阵操作和自动求导方面表现出色。它的动态计算图使得模型的构建和调试更加直观和方便，同时也支持 GPU 加速计算，提高了模型的训练效率。

PyTorch 提供了丰富的神经网络层、损失函数、优化器等组件，同时也支持自定义层和模型。它的生态系统也非常完善，有许多第三方库和工具与 PyTorch 集成，方便开发者进行模型的部署和应用。

::: note
Torch 最早的版本大约在 2002 年就已经出现，但直到 2010 年，Torch 版本才开始受到深度学习研究社区的广泛关注。
:::

PyTorch 安装参考：
- [PyTorch官网](https://pytorch.org/)

## 3.2 Tensor

张量（Tensor）是一个统称，包含多种类型：
- 0阶张量：标量
- 1阶张量：向量
- 2阶张量：矩阵
- 3阶张量：立方体
- N阶张量：N维数组

### 3.2.1 创建方法

- 使用python中的列表创建

```python
t1 = torch.Tensor([1, 2, 3])
t1 = torch.tensor([1, 2, 3])
```

- 使用numpy中的数组创建

```python
import numpy as np

t2 = torch.Tensor(np.arange(12).reshape(3, 4))
t2 = torch.tensor(np.arange(12).reshape(3, 4))
```

- 使用torch的API创建

```python
# 创建3行4列的Tensor，使用无用数据填充
t3 = torch.empty(3, 4)
# 创建3行4列全为1的Tensor
t4 = torch.ones(3, 4)
# 创建3行4列全为0的Tensor
t5 = torch.zeros(3, 4)
# 创建3行4列区间为[0, 1)的随机值的Tensor
t6 = torch.rand(3, 4)
# 创建3行4列区间为[low, high)的随机整数的Tensor
t7 = torch.randint(low=0, high=10, size=(3, 4))
# 创建3行4列均值为0方差为1的随机值的Tensor
t8 = torch.randn(3, 4)
```

::: tip
Tensor()和tensor()的区别：
- Tensor()是FloatTensor()的简称，是底层的实现，创建张量时元素类型默认为float；
- tensor()是更高层的函数，创建张量时可以指定元素类型，未指定则会自动判断元素类型。
:::

### 3.2.2 属性方法

- `item()`：获取**只有一个可用元素的张量**的元素

```python
a = torch.Tensor([[[1]]])  
print(a.item())
```

- `numpy()`：转换为numpy数组

```python
print(a.numpy())
```

- `size(n)`：获取第n个维度（从0计）的形状

```python
print(a.size(1))
```

-  `view()`：类似numpy中的reshape，浅拷贝，仅改变形状，原来的张量不变形状和取值不变

```python
b = torch.tensor(np.arange(12).reshape(3, 4))  
print(b)  
print(b.view(4, 3))
print(b.view(-1)) # 展成一维向量
```

- `dim()`：获取维数/阶数

```python
print(b.dim())
```

- `max()`/`min()`/`std()`：获取最大值/最小值/标准差

```python
print(b.max())
print(b.min())
print(b.std())
```

-  `t()`/`transpose()`/`permute()`：转置，当阶数大于2时，使用`transpose()`并指定需要交换的两个维度

```python
print(b.t())
print(b.transpose(0, 1))
print(b.permute(1, 0, 2))
```

::: tip
- 在深度学习中，卷积神经网络（CNN）通常期望输入的图像格式为 `(batch_size, channels, height, width)`。
- 然而，有时候图像数据是以 `(batch_size, height, width, channels)` 的形式提供的。
- 这时可以使用 `permute()` 来调整维度顺序以匹配 CNN 的要求。
:::

- 取值和切片

```python
print(b.data) # 获取数据
print(b[1,3]) # 取第1行第3列的值
print(b[:,1]) # 取第1列所有数据
```

### 3.2.3 数据类型

- 获取数据类型：`tensor.dtype`

```python
print(b.dtype)
```

- 创建时指定数据类型

```python
c = torch.ones([2, 3], dtype=torch.float32) 
```

- 修改数据类型：`tensor.type()`/`tensor.double()/float()/int()...`

```python
c.type(torch.int)
c.double()
```

### 3.2.4 常用操作

- 加法

```python
x+y
x.add(y)
x.add_(y) # 对x进行就地修改
```

::: tip
1. 后面有下划线的方法表示就地执行操作，会改变原值，如`add_()`,`transpose_()`等
2. 即使形状不同，仍然可以通过广播机制（broad mechanism）执行按元素操作：x(3,1)+y(1,2)=z(3,2)。因此，尽量保证按元素操作的向量形状相同，避免形状错误和广播机制导致错误的结果。
:::

- 求和

```python
# 任意形状求和
x = torch.arange(4, dtype=torch.float32)
sum = x.sum(keepdim=True)
x = x.reshape(2,2)
sum = x.sum(keepdim=True)

# 指定轴/维度求和
a = torch.rand(3,4)
b = torch.sum(input=a, dim=1, keepdim=True)
b.shape # (3,1)
```

::: tip
keepdim=True，使得求和后维度数不变，变化后的维度取值为1。
:::

- 连接

```python
# 第一维（行）连接，（3，4）（3，4）-》（6，4）
torch.cat((x, y), dim=0)

# 第二维（列）连接，（3，4）（3，4）-》（3，8）
torch.cat((x, y), dim=1)
```

::: tip
- 第一维（行）连接，（3，4）（3，4）->（6，4）
- 第二维（列）连接，（3，4）（3，4）->（3，8）
:::

-  使用GPU：`tensor.to()`/创建时指定device

```python
device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu')  
  
d = torch.randn([3, 4], device=device)  
print(d.to(device))  
print(d)
```

::: tip
- `tensor.to()`：将张量移动到指定的设备上，如GPU。
- 创建时指定device：在创建张量时，通过`device`参数指定张量所在的设备，如`device=torch.device('cuda:0')`。
:::

## 3.3 在GPU上训练
当模型太大或参数太多时，为了加快训练速度，经常使用GPU进行训练。

操作步骤如下：

1. 判断GPU是否可用

```python
torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
# device(type="cuda", index=0)
# device(type="cpu")
```

::: tip
- `torch.device("cuda:0" if torch.cuda.is_available() else "cpu")`：判断GPU是否可用，若可用则返回`cuda:0`，否则返回`cpu`。
:::

2. 将模型和数据转化成cuda支持的类型

```python
model.to(device)
x_true.to(device)
y_true.to(device)
```

::: tip
- `model.to(device)`：将模型移动到指定的设备上，如GPU。
- `x_true.to(device)`：将输入数据移动到指定的设备上，如GPU。
- `y_true.to(device)`：将标签数据移动到指定的设备上，如GPU。
:::

3. 在GPU上计算结果也为`cuda`类型，进行额外操作时，需要转化成cpu支持类型

```python
predict = model(x_true)
predict = predict.cpu().detach().numpy()
```

::: tip
- `predict = predict.cpu().detach().numpy()`：将模型输出的`cuda`类型张量转换为`numpy`数组，方便后续的计算和可视化。
:::

## 3.4 数据加载
在深度学习中，数据加载是一个重要的环节。PyTorch 提供了 `torch.utils.data` 模块，用于加载和处理数据集。

### 3.4.1 数据集基类

`torch`中提供了数据集的基类`torch.utils.data.Dataset`，继承这个基类，能够快速实现对数据的加载。

自定义数据集类在继承基类时，需要实现两个方法：

- `__getitem__()`：传入索引获取数据
- `__len__()`：获取元素个数

之后对自定义数据集实例化，可以迭代获取数据：

```python
d = CifarDataset()
for i in range(len(d))
	print(i, d[i])
```

### 3.4.2 数据加载器

使用上述的方法可以进行数据读取，但其中还有很多内容没有实现：

- 批处理数据`(Batch)`
- 打乱数据`(Shuffle)`
- 使用多线程并行加载数据

在`PyTorch`中`torch.utils.data.DataLoader`提供了上述方法。

```python
from torch.utils.data import DataLoader

dataset = CifarDataset()
data_loader = DataLoader(dataset=dataset, batch_size=10, shuffle=True, drop_last=True, num_workers=2)

# 遍历，获取每个batch的结果
for index, (label, context) in enumerate(data_loader):
	print(index, label, context)
```

::: tip
- `DataLoader(dataset=dataset, batch_size=10, shuffle=True, drop_last=True, num_workers=2)`：创建数据加载器，参数说明如下：
  - `dataset`：数据集对象，如`CifarDataset()`。
  - `batch_size`：每个batch的样本数，如`10`。
  - `shuffle`：是否打乱数据，如`True`。
  - `drop_last`：是否舍弃最后一个batch（$len/batch\_size$不能整除时），如`True`。
  - `num_workers`：使用多线程并行加载数据的线程数，如`2`。
- `enumerate()`可以遍历一个可迭代对象，返回索引和内容。
:::
