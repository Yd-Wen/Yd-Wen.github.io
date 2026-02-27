---
date: 2025-01-31
title: 9 深度学习计算
icon: computation
category:
  - 深度学习
tag:
  - 深度学习计算
  - PyTorch
  - Dropout
  - BatchNorm
  - 模型评估
  - 优化器
  - 损失函数
  - 文件操作
---

## 9.1 模块

### 9.1.1 模型结构

1. `nn.Module`

`nn.Module` 是 `torch.nn` 提供的一个类，是 PyTorch 中自定义网络的基类。

当我们自定义网络时，需要实现两个方法：

- `__init__()`: 需要调用 `super()` 方法，继承父类的属性和方法

- `farward()`: 必须实现，用来定义网络前向计算过程

以线性回归 $y=wx+b$ 为例：

```python
from torch import nn
class Lr(nn.Module):
	def __init__(self):
		super(Lr, self).__init__() # 继承父类的属性和方法
		self.linear = nn.Linear(1, 1)
	def forward(self, x):
		out = self.linear(x)
		return out

# 实例化模型
model = Lr()
# 传入数据，计算结果
predict = model(x)
```

:::tip
- `nn.Linear` 是 `torch`预定义的线性模型，也被称为**全连接层**，传入参数为 `(in_features, out_features)`，不算 `batch_size` 的列数。

- `nn.Module` 定义了 `__call__()` 方法，其实现就是调用 `forward()` 方法；即 `Lr` 的实例，能够直接被传入参数调用，实际上调用的是 `forward()` 方法。
:::

2. `nn.Sequential`

一个有序的容器，其中传入的是构造器类（用来处理 `input` 的类），最终 `input` 会被 `Sequential` 中的构造器类依次执行。

```python
input_dim = 3  
hidden_dim_1 = 4  
hidden_dim_2 = 5  
output_dim = 6  
  
layer = nn.Sequential(  
    nn.Linear(input_dim, hidden_dim_1),  
    nn.ReLU(inplace=True),  
    nn.Linear(hidden_dim_1, hidden_dim_2),  
    nn.ReLU(inplace=True),  
    nn.Linear(hidden_dim_2, output_dim)  
)
```

:::tip
直接调用 `layer(x)` 即可得到输出。其执行顺序就是 `Sequential` 中定义的顺序：

1. 执行隐层1，形状为 `(batch_size, hidden_dim_1)`

2. 执行 `ReLU`，形状不变

3. 执行隐层2，形状为 `(batch_size, hidden_dim_2)`

4. 执行 `ReLU`，形状不变

5. 执行输出层，形状为 `(batch_size, output_dim)` 
:::

3. `Batch Normalization`

**批归一化**，即在每个batch训练过程中，对输入进行归一化处理，从而达到加快训练的目的。

以 `sigmoid` 函数为例，反向传播过程中，值为 0 或 1 时梯度接近 0，参数更新幅度很小，训练速度慢。但是对数据归一化后，将数据缩放到 `(0,1)` 范围，使得参数更新幅度更大，提高训练速度。

```python
layer = nn.Sequential(  
    nn.Linear(input_dim, hidden_dim_1),  
    nn.ReLU(inplace=True),  
    nn.BatchNorm1d(hidden_dim_1),
    
    nn.Linear(hidden_dim_1, hidden_dim_2),  
    nn.ReLU(inplace=True),  
    nn.BatchNorm1d(hidden_dim_2),
    
    nn.Linear(hidden_dim_2, output_dim)  
)
```

4. `Dropout`

`nn.Dropout` 使输入随机失活，作用包括：

- 增加模型稳健性/鲁棒性；

- 解决过拟合问题/增强泛化能力；

- 训练后的模型是多个模型组合之后的结果，类似随机森林。

```python
layer = nn.Sequential(  
    nn.Linear(input_dim, hidden_dim_1),  
    nn.BatchNorm1d(hidden_dim_1),
    nn.ReLU(inplace=True),  
    nn.Dropout(0.3), # dropout的比例，默认0.5
    
    nn.Linear(hidden_dim_1, hidden_dim_2),  
    nn.BatchNorm1d(hidden_dim_2),
    nn.ReLU(inplace=True),  
    nn.Dropout(0.3), # dropout的比例，默认0.5
    
    nn.Linear(hidden_dim_2, output_dim)  
)
```

:::tip
一般顺序：linear/conv -> batchnorm -> relu -> dropout
:::

### 9.1.2 优化器

**优化器**(`optimizer`)，可以理解为`torch`封装的参数更新方法，如常见的随机梯度下降(`stochastic gradient descent, SGD`)。

优化器类都是由`torch.optim`提供的，如：

- `torch.optim.SGD(parameters, lr)`

- `torch.optim.Adam(parameters, lr)`

参数可以使用`model.parameters()`来获取，获取模型中所有`requires_grad=True`的参数。

**优化器的使用方法**：

- 实例化

- 所有参数的梯度置为0

- 反向传播计算梯度

- 更新参数

```python
# 实例化优化器
optimizer = optim.SGD(model.parameters(), lr=1e-3)
# 梯度置0
optimizer.zero_grad()
# 反向传播
loss.backward()
# 更新参数
optimizer.step()
```

### 9.1.3 损失函数

**损失函数**(`loss function`)，为模型预测值与真实值之间的误差。

`torch`定义了很多损失函数，常见的有：

- `nn.MSELoss()`：均方误差，常用于分类问题；    

- `nn.CrossEntropyLoss()`：交叉熵损失，常用于逻辑回归。

使用方法：

```python
# 实例化模型
model = Lr()
# 实例化损失函数
criterion = nn.MSELoss()
# 实例化优化器
optimizer = optim.SGD(model.parameters(), lr=1e-3)

for i in range(1000):
	# 前向计算预测值
	y_predict = model(x_true)
	# 计算损失
	loss = criterion(y_predict, y_true)
	# 梯度置0
	optimizer.zero_grad()
	# 反向传播
	loss.backward()
	# 更新参数
	optimizer.step()
	# 打印训练过程
	if epoch % 100 == 0:
		params = list(model.parameters())
		print(loss.item(), params[0].item(), params[1].item())
```

### 9.1.4 模型评估

`model.training` 属性默认为 `True`，可以使用 `model.train(model=False)` 手动设置，也可以使用 `model.eval()`。

- 设置模型为评估模式，即预测模式：`model.eval()`

- 设置模型为训练模式：`model.train(model=True)`

在线性回归中，上述并无区别。

但在其他一些模型中，**训练的参数和预测的参数不同**（如`Dropout`，`BatchNorm`等），这是需要设置模型为评估或训练模式。

## 9.2 层和块

**块**(`block`)，是`torch`中的一个基本组件，用于构建模型。`torch.nn.Module`是所有神经网络模块的基类，自定义的块需要继承该类。

- 自定义块

```python
class MLP(nn.Module): 
	# 用模型参数声明层。这里，我们声明两个全连接的层 
	def __init__(self): 
	# 调用MLP的父类Module的构造函数来执行必要的初始化。 
	# 这样，在类实例化时也可以指定其他函数参数，例如模型参数params（稍后将介绍） 
		super().__init__() 
		self.hidden = nn.Linear(20, 256) # 隐藏层 
		self.out = nn.Linear(256, 10) # 输出层 
	
	# 定义模型的前向传播，即如何根据输入X返回所需的模型输出 
	def forward(self, X): # 注意，这里我们使用ReLU的函数版本，其在nn.functional模块中定义。 
		return self.out(F.relu(self.hidden(X)))
```

- 顺序块

```python
class MySequential(nn.Module): 
	def __init__(self, *args): 
		super().__init__() 
		for idx, module in enumerate(args): 
		# 这里，module是Module子类的一个实例。我们把它保存在'Module'类的成员 
		# 变量_modules中。_module的类型是OrderedDict 
		self._modules[str(idx)] = module 
	def forward(self, X): 
	# OrderedDict保证了按照成员添加的顺序遍历它们
		for block in self._modules.values(): 
			X = block(X) 
		return X

net = MySequential(nn.Linear(20, 256), nn.ReLU(), nn.Linear(256, 10)) net(X)
```

- 自定义层

```python
# 无参数层
class CenteredLayer(nn.Module): 
	def __init__(self): 
		super().__init__() 
	def forward(self, X): 
		return X- X.mean()

# 有参数层
class MyLinear(nn.Module): 
	def __init__(self, in_units, units): 
		super().__init__() 
		self.weight = nn.Parameter(torch.randn(in_units, units)) 
		self.bias = nn.Parameter(torch.randn(units,)) 
	def forward(self, X): 
		linear = torch.matmul(X, self.weight.data) + self.bias.data 
		return F.relu(linear)
```

## 9.3 参数管理

- 访问参数：用于调试、可视化等

```python
print(net[2].state_dict())

print(type(net[2].bias)) 
print(net[2].bias) 
print(net[2].bias.data)

# 从嵌套块访问参数
rgnet[0][1][0].bias.data
```

- 初始化参数

```python
def init_xavier(m): 
	if type(m) == nn.Linear: 
		nn.init.xavier_uniform_(m.weight) 
def init_42(m): 
	if type(m) == nn.Linear: 
		nn.init.constant_(m.weight, 42) 
# 自定义初始化方法
def my_init(m): 
	if type(m) == nn.Linear: 
		print("Init", *[(name, param.shape) 
			for name, param in m.named_parameters()][0]) 
		nn.init.uniform_(m.weight,-10, 10) 
		m.weight.data *= m.weight.data.abs() >= 5	
		
net[0].apply(init_xavier) 
net[2].apply(init_42) 
print(net[0].weight.data[0]) 
print(net[2].weight.data)
```

:::tip
apply会嵌套调用参数初始化方法，以初始化模块内的参数。
:::

- 共享参数：在不同组件间共享参数

```python
# 我们需要给共享层一个名称，以便可以引用它的参数 
shared = nn.Linear(8, 8) 
net = nn.Sequential(
		nn.Linear(4, 8), nn.ReLU(), 
		shared, nn.ReLU(), 
		shared, nn.ReLU(), 
		nn.Linear(8, 1)) 
net(X) 
# 检查参数是否相同 
print(net[2].weight.data[0] == net[4].weight.data[0]) net[2].weight.data[0, 0] = 100 
# 确保它们实际上是同一个对象，而不只是有相同的值 
print(net[2].weight.data[0] == net[4].weight.data[0])
```

## 9.4 文件读写

```python
# 模型加载  
if os.path.exists('./model/MNISTNet/model.pt') and 
	os.path.exists('./model/MNISTNet/optimizer.pt'):  
	mnist_net.load_state_dict(torch.load('./model/MNISTNet/model.pt', weights_only=True))  
    optimizer.load_state_dict(torch.load('./model/MNISTNet/optimizer.pt', weights_only=True))

# 模型保存  
torch.save(mnist_net.state_dict(), './model/MNISTNet/model.pt')  
torch.save(optimizer.state_dict(), './model/MNISTNet/optimizer.pt')
```

## 9.5 使用GPU

- 获取GPU

深度学习框架 PyTorch 默认在CPU执行，需要指定GPU执行。

```python
torch.device('cpu')
torch.device('cuda') # cuda:0和cuda等价
torch.device('cuda:1')

# 获取GPU数量
torch.cuda.device_count()

def try_gpu(i=0):
	"""如果存在，则返回gpu(i)，否则返回cpu()""" 
	if torch.cuda.device_count() >= i + 1: 
		return torch.device(f'cuda:{i}') 
	return torch.device('cpu') 

def try_all_gpus(): 
	"""返回所有可用的GPU，如果没有GPU，则返回[cpu(),]"""
	devices = [torch.device(f'cuda:{i}') 
		for i in range(torch.cuda.device_count())] 
	return devices if devices else [torch.device('cpu')]
	
try_gpu(), try_gpu(10), try_all_gpus()
```

- 张量与GPU

无论何时我们要对多个项进行操作，它们都必须在同一个设备上。例如，如果我们对两个张量求和，我们需要确保两个张量都位于同一个设备上，否则框架将不知道在哪里存储结果，甚至不知道在哪里执行计算。

```python
# 查询张量所在设备
x = torch.tensor([1, 2, 3]) 
x.device
# 张量存储在GPU
X = torch.ones(2, 3, device=try_gpu())
# 复制：将cuda:0的X复制到cuda:1，然后与cuda:1上的Y做运算
Z = X.cuda(1)
```

- 神经网络与GPU

类似地，神经网络模型可以指定设备。当输入为GPU上的张量时，模型将在同一GPU上计算结果，输出存储在同一个GPU。

```python
net = nn.Sequential(nn.Linear(3, 1)) 
net = net.to(device=try_gpu())
```

## 9.6 GPU并行计算

1. 单机多卡并行

- 一台机器可以安装多个GPU（1-16）

- 训练和预测时，将一个小批量计算切分到多个GPU上来达到加速目的

- 常用切分方案：

	- 数据并行

	- 模型并行
    
	- 通道并行（数据+模型并行）

2. 数据并行VS模型并行

- 数据并行：将小批量分成N块，每个GPU拿到完整参数计算一块数据的梯度

	- 通常性能更好

	- 过程

		- 模型复制：在训练开始时，主进程（CPU或某个主GPU）会将模型的副本分发到每个GPU上，每个GPU都会拥有一个完整的模型副本；

		- 数据分割：输入数据会被分割成多个子批次（mini-batches），每个子批次分配给不同的GPU；

		- 前向传播：每个GPU使用其分配到的子批次数据，独立地进行前向传播计算，计算出对应的损失值；

		- 反向传播：每个GPU基于其子批次的损失值，独立地计算梯度；

		- 梯度同步：在反向传播完成后，所有GPU通过All-Reduce或其他通信机制同步梯度，同步的结果是每个GPU都获得全局梯度的平均值（或总和）；

		- 参数更新：每个GPU使用同步后的全局梯度，独立地更新自己的模型参数，由于所有GPU的梯度已经同步，因此它们的模型参数会保持一致。

- 模型并行：将模型分成N块，每个GPU拿到一块模型计算它的前向和后向结果

	- 通常用于模型大到单GPU无法装下

::: tip
- 当一个模型能用单卡计算时，通常使用数据并行拓展到多卡上
- 模型并行则用于超大模型
:::

3. 实现：参考[12.6. 多GPU的简洁实现 — 动手学深度学习 2.0.0 documentation](https://zh-v2.d2l.ai/chapter_computational-performance/multiple-gpus-concise.html)

```python
def train(net, num_gpus, batch_size, lr):
    train_iter, test_iter = d2l.load_data_fashion_mnist(batch_size)
    devices = [d2l.try_gpu(i) for i in range(num_gpus)]
    def init_weights(m):
        if type(m) in [nn.Linear, nn.Conv2d]:
            nn.init.normal_(m.weight, std=0.01)
    net.apply(init_weights)
    # 在多个GPU上设置模型
    net = nn.DataParallel(net, device_ids=devices)
    trainer = torch.optim.SGD(net.parameters(), lr)
    loss = nn.CrossEntropyLoss()
    timer, num_epochs = d2l.Timer(), 10
    animator = d2l.Animator('epoch', 'test acc', xlim=[1, num_epochs])
    for epoch in range(num_epochs):
        net.train()
        timer.start()
        for X, y in train_iter:
            trainer.zero_grad()
            X, y = X.to(devices[0]), y.to(devices[0])
            l = loss(net(X), y)
            l.backward()
            trainer.step()
        timer.stop()
        animator.add(epoch + 1, (d2l.evaluate_accuracy_gpu(net, test_iter),))
    print(f'测试精度：{animator.Y[0][-1]:.2f}，{timer.avg():.1f}秒/轮，'
          f'在{str(devices)}')
```
