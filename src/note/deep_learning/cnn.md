---
date: 2025-02-06
title: 10 卷积神经网络
icon: cnn
category:
  - 深度学习
tag:
  - PyTorch
  - 卷积神经网络
---

## 10.1 从全连接到卷积
 
 原则：

 - 平移不变性（平移后取相同权重/卷积核）
 
 - 局部性（卷积核不能太大）

对全连接层使用平移不变性和局部性得到卷积层。

卷积层（特殊的全连接层）：

- 卷积层将输入和核矩阵进行交叉相关运算，加上偏置后得到输出

- 核矩阵和偏置都是可学习的参数

- 核矩阵大小是**超参数**

- 卷积核的尺寸是**超参数**

::: note
卷积网络的应用：

- 一维卷积：文本/语言/时序序列

- 二维卷积：图像

- 三维卷积：视频/医学图像/气象地图
:::

## 10.2 基本原理

### 10.2.1 填充和步长   

- 填充

在应用多层卷积时，常常丢失边缘像素。由于通常使用小卷积核，因此对于任何单个卷积，可能只会丢失几个像素。但随着应用许多连续卷积层，累积丢失的像素数就多了。

解决问题的简单方法即为**填充**（padding）：在输入图像的边界填充元素（通常填充元素是0）

通常，如果添加 $p_h$ 行填充和 $p_w$ 列填充，则输出形状将为 
$$
(n_h-k_h+p_h+1)\times(n_w-k_w+p_w+1) 
$$ 

在许多情况下，我们需要设置 $p_h=k_h−1$ 和 $p_w=k_w−1$，使输入和输出具有相同的高度和宽度。这样可以在构建网络时更容易地预测每个图层的输出形状。

::: tip
注意：这里的 $p_h$ 和 $p_w$ 是两测的总填充数，一般情况下卷积核的尺寸是奇数
:::

- 步长

有时候为了高效计算或是缩减采样次数，卷积窗口可以跳过中间位置，每次滑动多个元素。 我们将每次滑动元素的数量称为**步幅**（stride）。

通常，当垂直步幅为 $s_h$、水平步幅为 $s_w$ 时，输出形状为
$$
\lfloor(n_h-k_h+p_h+s_h)/s_h\rfloor \times \lfloor(n_w-k_w+p_w+s_w)/s_w\rfloor
$$

当 $p_h=k_h−1$ 和 $p_w=k_w−1$，输出形状简化为
$$
\lfloor(n_h+s_h-1)/s_h\rfloor \times \lfloor(n_w+s_w-1)/s_w\rfloor
$$

更进一步，如果输入的高度宽度能被垂直水平步长整除，输出形状为
$$
(n_h/s_h)\times(n_w/s_w)
$$

::: tip
- 填充和步长都是卷积层超参数
- 填充可以控制输出形状
- 步长可以成倍减小输出形状
:::

### 10.2.2 多输入输出通道

- 多输入通道

当输入包含多个通道时，需要构造一个与输入数据具有相同输入通道数的卷积核，以便与输入数据进行互相关运算。假设输入的通道数为 $c_i$，那么卷积核的输入通道数也需要为 $c_i$。

由于输入和卷积核都有 $c_i$ 个通道，我们可以**对每个通道输入的二维张量和对应的卷积核的二维张量进行互相关运算，再对通道求和**（将 $c_i$ 的结果相加）得到二维张量。**不同的通道的卷积核是独立的**。

- 输入 $X$：$c_i\times n_h\times n_w$
- 核 $W$：$c_i\times k_h\times k_w$
- 偏置B：$c_i$
- 输出 $Y$：$m_h\times m_w$
- 公式：
$$
Y = \sum_{i=0}^{c_i}X_{i,:,:}*W_{i,:,:}+B
$$ 

![两个输入通道的互相关计算.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_12_3_01.png)

- 多输出通道

在最流行的神经网络架构中，随着神经网络层数的加深，常会增加输 出通道的维数，通过减少空间分辨率以获得更大的通道深度。

直观地说，可以将每个通道看作对不同特征的响应。而现实可能更为复杂一些，因为每个通道不是独立学习的，而是为了共同使用而优化的。因此，多输出通道并不仅是学习多个单通道的检测器。

用 $c_i$ 和 $c_o$ 分别表示输入和输出通道的数目，并让 $k_h$ 和 $k_w$ 为卷积核的高度和宽度。为了获得多个通道的输出，可以为每个输出通道创建一个形状为 $c_i×k_h×k_w$ 的卷积核张量，这样卷积核的形状是 $c_o×c_i×k_h×k_w$。在 互相关运算中，每个输出通道先获取所有输入通道，再以对应该输出通道的卷积核计算出结果。

- 输入 $X$：$c_i\times n_h\times n_w$
- 核 $W$：$c_0\times c_i\times k_h\times k_w$
- 偏置B：$c_0\times c_i$
- 输出 $Y$：$c_o\times m_h\times m_w$
- 公式：
$$
Y = X*W+B
$$

图中互相关计算使用了具有3个输入通道和2个输出通道的1×1卷积核：

![互相关计算.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/dl_12_3_02.png)

::: tip
- 输出通道是卷积层的超参数
- 每个输入通道有独立的二维卷积核，所有通道结果相加得到一个输出通道结果
- 每个输出通道有独立的三维卷积核
:::

### 10.2.3 池化层 

- 最大池化：返回滑动窗口的最大值

- 平均池化：返回滑动窗口的平均值

- 填充、步长、多通道

	- 池化层核卷积层类似，都有填充和步长

	- 没有可学习参数

	- **每个输入通道单独应用池化层以获得相应的输出通道**

	- **输出通道数 = 输入通道数**

	- **多输入通道的融合由卷积层完成，而不是池化层**

## 10.3 分组卷积

分组卷积（Grouped Convolution）是一种特殊的卷积操作，它将输入通道和输出通道分成多个组，每组独立进行卷积计算，最后将结果拼接在一起。这种方法最早在AlexNet中被提出，用于减少计算量和参数数量，同时提高模型的特征提取能力。

### 10.3.1 核心思想

传统卷积中，每个输出通道都依赖于所有输入通道的信息。而在分组卷积中：

- **通道分组**：将输入通道数`C_in`和输出通道数`C_out`分别分成`G`个组（每组大小为`C_in/G`和`C_out/G`）。

- **独立计算**：每个输出组的特征图仅由对应的输入组计算得到，即第`i`个输出组只关注第`i`个输入组的信息。

- **拼接结果**：将所有输出组的特征图按通道维度拼接，形成最终输出。

### 10.3.2 数学公式

设输入特征图为 $X ∈ R^{H×W×C_{in}}$，分组数为`G`，则分组卷积可表示为：
$$
\text{GroupConv}(X) = \text{Concat}([\text{Conv}(X_{g}) \text{ for } g = 1, 2, ..., G])
$$

其中：

- $X_g ∈ R^{H×W×(C_{in}/G)}$ 是输入 `X` 的第 `g` 组。

- `Conv` 是标准卷积操作，卷积核大小为 `K×K`，输出通道数为 $C_{out}/G$。

### 10.3.3 代码实现

下面是使用 PyTorch 实现分组卷积的代码：

```python
import torch
import torch.nn as nn

# 定义分组卷积模型
class GroupedConvModel(nn.Module):
    def __init__(self, in_channels, out_channels, kernel_size, groups, stride=1, padding=0):
        super(GroupedConvModel, self).__init__()
        # 使用nn.Conv2d并设置groups参数
        self.conv = nn.Conv2d(
            in_channels=in_channels,
            out_channels=out_channels,
            kernel_size=kernel_size,
            stride=stride,
            padding=padding,
            groups=groups  # 设置分组数
        )
        
    def forward(self, x):
        return self.conv(x)
```

::: warning
- $input\_channels \% G = 0$
- $output\_channels \% G = 0$
:::

### 10.3.4 关键要点

1. **参数限制**：分组数 `G` 必须同时满足：

   - `in_channels % G == 0`

   - `out_channels % G == 0`

2. **计算效率**：分组卷积的计算量约为标准卷积的 `1/G`，参数量也相应减少。

3. **应用场景**：

   - 深度可分离卷积（Depthwise Separable Convolution）是分组卷积的特例（`G = C_in`）。

   - ResNeXt、ShuffleNet 等现代架构中广泛使用分组卷积来提高模型效率。

4. **通道混洗（Channel Shuffle）**：当分组数较大时，需添加通道混洗操作以增强不同组间的信息流通。通过分组卷积，模型可以在减少计算资源消耗的同时，学习到更具多样性的特征表示。

## 10.4 深度可分离卷积

深度可分离卷积（Depthwise Separable Convolution）是一种优化的卷积操作，通过将标准卷积分解为深度卷积（Depthwise Convolution）和逐点卷积（Pointwise Convolution）两部分，大幅减少计算量和参数数量，同时保持模型性能。这种方法在轻量级神经网络（如MobileNet、Xception）中被广泛应用。

### 10.4.1 标准卷积 vs 深度可分离卷积

**标准卷积**

- **计算方式**：每个输出通道由所有输入通道通过卷积核计算得到。

- **参数数量**：对于输入通道数为 $( C_{\text{in}} )$、输出通道数为 $( C_{\text{out}} )$、卷积核大小为 $( K \times K )$ 的卷积层，参数数量为：
$$
C_{\text{out}} \times C_{\text{in}} \times K \times K
$$

- **计算量**：与参数数量成正比，计算复杂度高。

**深度可分离卷积**：将标准卷积分解为两步：

1. **深度卷积（Depthwise Convolution）**：对每个输入通道单独应用一个卷积核，生成同样数量的输出通道。
   
   - **参数量**：$( C_{\text{in}} \times K \times K )$
   
   - **特点**：仅考虑空间信息，不融合通道间信息。

2. **逐点卷积（Pointwise Convolution）**：使用 $( 1 \times 1 )$ 卷积核融合深度卷积的输出，生成目标数量的输出通道。
   
   - **参数量**：$( C_{\text{in}} \times C_{\text{out}} )$
   
   - **特点**：高效融合通道间信息。

::: note
**总参数数量**：$C_{\text{in}} \times K \times K + C_{\text{in}} \times C_{\text{out}}$
:::

### 10.4.2 优势

1. **计算效率高**：相比标准卷积，深度可分离卷积的计算量通常减少为原来的 **1/3 至 1/8**（取决于 $C_{out}$和$K$）。

2. **参数更少**：参数量显著降低，适合移动端和嵌入式设备部署。

3. **防止过拟合**：参数量减少带来的正则化效果，有助于提高模型泛化能力。

### 10.4.3 数学表达

设输入特征图为 $( X \in \mathbb{R}^{H \times W \times C_{\text{in}}} )$，深度可分离卷积的输出为：

1. **深度卷积**：  
   $$
   Y_{\text{depthwise}} = \text{DepthwiseConv}(X)
   $$
   其中每个输出通道 $( Y_{\text{depthwise}}[:, :, i] )$ 仅由输入通道 $( X[:, :, i] )$ 计算得到。

2. **逐点卷积**：  
   $$
   Y = \text{PointwiseConv}(Y_{\text{depthwise}})
   $$
   通过 $( 1 \times 1 )$ 卷积将 $( Y_{\text{depthwise}} )$ 的通道信息融合为 $( C_{\text{out}} )$ 个输出通道。


### 10.4.4 代码实现

```python
import torch
import torch.nn as nn

class DepthwiseSeparableConv(nn.Module):
    def __init__(self, in_channels, out_channels, kernel_size, stride=1, padding=0):
        super(DepthwiseSeparableConv, self).__init__()
        # 深度卷积：每个输入通道对应一个卷积核
        self.depthwise = nn.Conv2d(
            in_channels=in_channels,
            out_channels=in_channels,
            kernel_size=kernel_size,
            stride=stride,
            padding=padding,
            groups=in_channels  # 关键参数：groups=in_channels
        )
        # 逐点卷积：1x1卷积融合通道信息
        self.pointwise = nn.Conv2d(
            in_channels=in_channels,
            out_channels=out_channels,
            kernel_size=1
        )
        
    def forward(self, x):
        x = self.depthwise(x)
        x = self.pointwise(x)
        return x
```

### 10.4.5 应用场景

- **轻量级模型**：如MobileNet、ShuffleNet、Xception等专为移动设备设计的架构。

- **资源受限环境**：嵌入式系统、实时视频处理、边缘计算等场景。

### 10.4.6 注意事项

- **精度权衡**：深度可分离卷积在减少计算量的同时可能略微降低精度，需通过模型设计（如增加网络深度）补偿。

- **通道混洗**：在分组数较大时（如ShuffleNet），需添加通道混洗操作增强信息流通。
