---
date: 2024-12-29
title: 6 Softmax 回归
icon: softmax_regression
category:
  - 深度学习
tag:
  - Softmax
  - 分类
  - 多分类
---

## 6.1 简介

回归：

- 单连续数值输出

- 跟真实值的区别作损失

分类：

- 通常多个输出

- 输出第 i 类的置信度

校验比例：

- 输出匹配概率（非负，和为1）

$$
\begin{align} 
\hat y &= softmax(o) \\
\hat{y_i} &=\frac{exp(o_i)}{\sum_K exp(o_k)}
\end{align}
$$

- 概率 $y$ 和 $\hat y$ 的区别作为损失

- 使用交叉熵来衡量预测与真实的区别

## 6.2 Softmax 回归 vs 线性回归

1. **本质区别**

- 线性回归拟合输入与连续目标值之间的线性关系：
  $$
  y = w^T x + b
  $$

- Softmax 回归是线性回归在多分类上的扩展，先算线性得分，再用 softmax 映射成概率：
  $$
  z_i = w_i^T x + b_i,\quad \hat{y}_i = \frac{e^{z_i}}{\sum_j e^{z_j}}
  $$

2. **输出形式**
- 线性回归：输出一个连续值（如房价、温度）。
- Softmax 回归：输出k 个概率值（k=类别数），且 $\sum \hat{y}_i = 1$。

3. **任务类型**
- 线性回归：回归任务
- Softmax 回归：多分类任务

4. **损失函数**
- 线性回归：均方误差 MSE
- Softmax 回归：交叉熵损失 Cross-Entropy Loss

5. **激活函数**
- 线性回归：无激活函数（直接输出线性结果）
- Softmax 回归：使用 softmax 激活，把分数转成概率

::: tip 
- 线性回归：做**连续值预测（回归任务）**，预测多少、多大、多高，输出一个实数。
- Softmax 回归：做**多分类任务**，预测属于哪一类，输出每个类别的概率，**总和为 1**。
:::

## 6.3 实现案例

以 PyTorch 实现手写数字识别为例，展示 Softmax 回归的完整流程。

实现步骤：

1. 准备数据

2. 模型构建

3. 模型训练

4. 模型保存

5. 模型评估

### 6.3.1 三个关键 API

1. `torchvision.transforms.ToTensor`

该 API 将 shape 为 `(H, W, C)` 的 `numpy.ndarray` 转化成 shape 为 `(C, H, W)`，取值范围为 `[0, 1]` 的 `torch.FloatTensor`。

::: tip
`(H, W, C)`的含义为高、宽和通道数。黑白图片的通道数为1，彩色图片由RGB三个通道。
:::

```python
from torchvision import transforms
img_tensor = transforms.ToTensor()(img)
```

2. `torchvision.transforms.Normalize(mean, std)`

该 API 可以进行标准化。计算均值和方差后，作为参数传入该 API 即可。

::: tip
`mean` 和 `std` 的 `shape` 与通道数相同，即彩色图片需要传入大小为3的 `mean` 列表和 `std` 的列表。
:::

```python
norm_img = transforms.Normalize((10, 10, 10),(1, 1, 1))
```
3. `torchvision.transforms.Compose(transforms)`

该 API 可以将多个 `transform` 组合起来使用。

```python
transforms.Compose([
	torchvision.transforms.ToTensor(),
	torchvision.transforms.Normalize(mean, std)				
])
```

::: info
- 多个 `transform` 按顺序执行
- 最后一个 `transform` 通常是 `ToTensor`，将图片转换为张量
:::

### 6.3.2 数据集准备

::: note
- 数据集：MNIST 手写数字数据集
- 批量大小：64
- 标准化参数：`mean=(0.1307,)`, `std=(0.3081,)`
:::

```python
# 1. 准备数据集  
def get_dataloader(train=True):  
    transform = transforms.Compose([  
        transforms.ToTensor(),  
        transforms.Normalize((0.1307,), (0.3081,))  
    ])  
    dataset_mnist = MNIST(root='./data/', train=train, download=False, transform=transform)  
    # 数据加载器  
    dataloader = DataLoader(dataset=dataset_mnist, batch_size=BATCH_SIZE, shuffle=True)  
    return dataloader
```

### 6.3.3 模型构建

假设构建一个三层神经网络，包括两个全连接层，一个输出层。

:::warning
1. 激活函数如何使用
2. 每一层数据的形状
3. 模型的损失函数
:::

1. 激活函数

常用的激活函数为 `Relu`，由 `torch.nn.functional` 提供。

```python
import torch.nn.functional as F

x = F.relu(x)
```

2. 数据形状

- 原始数据形状为 `(batch_size, c, h, w)`，即 `(batch_size, 1, 28, 28)`。

- 改变形状：`(batch_size, 1*28*28)`，全连接层进行矩阵乘法操作，即从 `input_features` 到 `out_features` 的映射。

- 第一个全连接层输出形状：`(batch_size, 28)`，其中 28 可以自定义。

- 激活函数不会修改数据形状。

- 第二个全连接层的输出形状：`(batch_size, 10)`，因为手写数字有 10 个类别。

```python
# 2. 模型构建  
class MNISTNet(nn.Module):  
    def __init__(self):  
        super(MNISTNet, self).__init__()  
        self.fc1 = nn.Linear(1*28*28, 28)  
        self.fc2 = nn.Linear(28, 10)  
  
    def forward(self, x):  
        # 更改数据形状  
        x = x.view(-1, 1*28*28)  
        # 前向传播  
        x = self.fc1(x)  
        x = f.relu(x)  
        x = self.fc2(x)  
        return x
```

3. 损失函数

二分类问题计算损失：`sigmoid` 函数。

- 正类概率 $P(x)=\frac{1}{1+e^{-x}}=\frac{e^x}{1+e^x}$，那么负类概率为 $1-P(x)$

- 计算对数似然损失 $J=-\sum{ylogP(x)}$ 得到最终损失

多分类问题计算损失：**交叉熵损失**。

- 使用 `softmax` 函数计算损失

- `softmax` 函数会计算每个类别的概率（`sigmoid` 只计算一次）

- 概率求解公式如下：
$$
\sigma(z)_j=\frac{e^{z_j}}{\sum\limits_{k=1}^K{e^{z_k}}}, j=1,2,\dots,K
$$

- 和二分类一样，只需要对概率进行对数似然即可：
$$
J=-\sum{YlogP},其中P=\frac{e^{z_j}}{\sum\limits_{k=1}^K{e^{z_k}}},Y表示真实值
$$

- 最后求所有样本损失的均值

- 将 `softmax` 概率传入对数似然损失得到的损失函数称为**交叉熵损失**

`PyTorch` 中有两种方法实现交叉熵损失：

```python
# 1. 预定义
criterion = nn.CrossEntropyLoss()
loss = criterion(input, target)

# 2. 自定义
output = F.log_softmax(x, dim=-1)
loss = F.nll_loss(output, target)
```

::: note
带权损失定义为：$l_n=-\sum{w_ix_i}$，其实就是把 $logP$ 作为 $x$ ，把真实值 $Y$ 作为权重。
:::

### 6.3.4 模型训练

::: note   
模型训练过程：
1. 初始化模型参数
2. 遍历训练数据集
3. 前向传播：计算模型输出
4. 计算损失：使用损失函数计算模型输出与真实值的差异
5. 反向传播：计算损失对模型参数的梯度
6. 更新参数：使用优化器更新模型参数
7. 重复步骤2-6，直到达到预设的训练轮数
:::

```python
def train(num_epoch=NUM_EPOCH):  
    # 训练模式  
    mnist_net.train(mode=True)  
    # 获取训练数据加载器，计算数据集大小和批次数  
    dataloader = get_dataloader()  
    dataset_size = len(dataloader.dataset)  
    num_batches = len(dataloader)  
    # 训练循环  
    for epoch in range(num_epoch):  
        # 获取数据  
        for batch_idx, (data, target) in enumerate(dataloader):  
            # 前向传播  
            output = mnist_net(data)  
            # 计算损失  
            loss = loss_fn(output, target)  
            # 梯度置零  
            optimizer.zero_grad()  
            # 反向传播  
            loss.backward()  
            # 更新参数  
            optimizer.step()  
            if batch_idx % 100 == 0 or batch_idx == num_batches - 1:  
                print('Train Epoch: {} [{}/{} ({:.0f}%)]\tLoss: {:.6f}'.format(  
                    epoch + 1, batch_idx * len(data), dataset_size, 100. * batch_idx / num_batches, loss.item()))  
    # 3.3 模型保存  
    torch.save(mnist_net.state_dict(), './model/MNISTNet/model.pt')  
    torch.save(optimizer.state_dict(), './model/MNISTNet/optimizer.pt')
```

### 6.3.5 模型保存与加载

- 保存：保存模型参数、优化器参数
```python
# 模型保存
torch.save(mnist_net.state_dict(), '/model/mnist_net/model.pth')  
torch.save(optimizer.state_dict(), '/model/mnist_net/optimizer.pth')
```
- 加载：加载模型、优化器
```python
# 模型加载  
mnist_net.load_state_dict(torch.load('/model/mnist_net/model.pth'))  
optimizer.load_state_dict(torch.load('/model/mnist_net/optimizer.pth'))
```

### 6.3.6 模型评估

::: note
模型评估过程：
1. 切换到评估模式
2. 加载测试数据集
3. 前向传播：计算模型输出
4. 计算损失：使用损失函数计算模型输出与真实值的差异
5. 计算准确率：统计预测正确的样本数占总样本数的比例
:::


```python
def test():  
    # 评估模式  
    mnist_net.eval()  
    # 获取测试数据集  
    test_dataloader = get_dataloader(train=False, batch_size=TEST_BATCH_SIZE)  
    # 计算数据集大小  
    dataset_size = len(test_dataloader.dataset)  
    print('Test dataset size:', dataset_size)  
    loss = 0  
    acc = 0  
    with torch.no_grad():  
        for data, target in test_dataloader:  
            # 计算预测值  
            output = mnist_net(data)  
            # 计算损失  
            loss += loss_fn(output, target)  
            # 计算准确率  
            acc += output.argmax(dim=1).eq(target).sum().item()  
    print('Test result: Average loss: {:.4f}, \tAccuracy: {:.2f}%'.format(  
        loss / dataset_size, 100. * acc / dataset_size))
```
