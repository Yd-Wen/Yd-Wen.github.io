---
title: Python
icon: python
date: 2024-07-02
category: 编程语言
tag: Python
---

## 简介

在Python中，数据结构可变性、有序性和元素重复性的特点如下：

1. **列表 (List)**:
    
- **可变性**: 列表是**可变的**，意味着你可以在列表创建后添加、修改或删除其中的元素。 


- **有序性**: 列表是**有序的**，每个元素都有一个明确的位置和顺序。

- **元素重复性**: 列表允许**元素重复**。

2. **元组 (Tuple)**:
    
- **可变性**: 元组是**不可变的**，一旦创建，你就不能更改元组中的元素。不过，如果元组中包含可变类型的元素（如列表），那个元素本身是可以改变的。

- **有序性**: 元组是**有序的**，它的元素也有确定的位置和顺序。

- **元素重复性**: 元组同样**允许元素重复**。

3. **集合 (Set)**:
    
- **可变性**: 集合是**可变的**，你可以向集合中添加或移除元素，但这种操作不涉及特定索引，因为集合是无序的。

- **有序性**: 集合是**无序的**，没有索引，也不保证元素的插入顺序会被保留。

- **元素重复性**: 集合中**不允许元素重复**，自动去除重复项。

4. **字典 (Dictionary)**:
    
- **可变性**: 字典是**可变的**，你可以添加新的键值对、修改已有键对应的值或删除键值对。

- **有序性**: 在Python 3.7及以后版本中，字典是**有序的**，这意味着它们会保持元素插入的顺序。但在早期版本中，字典是无序的。

- **元素重复性**: 字典的**键**是唯一的，不允许重复，但**值**可以重复。

::: tip
总结来说，列表和字典是可变且有序的，元组是不可变且有序的，集合是可变但无序且元素唯一（不允许重复）的。

- **元组不可变**

- **集合无序不重复**
:::

## 2 Numpy数值计算基础

### 2.1 Numpy数组对象ndarray

#### 2.1.1 数组属性

ndarray是存储单一类型数据的多维数组。

属性及其说明如下

| 属性       | 说明                              |
| -------- | ------------------------------- |
| ndim     | 返回int，表示数组维数                    |
| shape    | 返回tuple，表示数组尺寸，对于行列矩阵，形状为（n, m） |
| size     | 返回int，表示数组元素个数，等于数组形状的乘积        |
| dtype    | 返回data-type，表示数组元素的类型           |
| itemsize | 返回int，表示数组元素的大小                 |
|          |                                 |

#### 2.1.2 数组创建

```python
'''
object接收一个数据序列对象，可以是列表、元组及其组合等
'''
np.array(object, dtype=None)
'''
开始，结束（不包括），步长
'''
np.arange([start,] stop[, step,] dtype=None)
''' 
生成一个在指定区间内均匀间隔的数字序列 
开始，结束，生成元素个数，是否包含结束
'''
np.linspace(start, stop, num=50, endpoint=True, dtype=None)
'''
生成的是对数等间距的数字序列
开始，结束，生成元素个数，是否包含结束，对数底数
'''
np.logspace(start, stop, num=50, endpoint=True, base=10.0, dtype=None)
'''
生成元素全为0的数组
'''
np.zeros(shape, dtype=None)
'''
生成单位矩阵（对角线全为1其余元素全为0的）
行数，列数（默认行数），对角线偏移量（>0上移），元素在内存存储顺序（'C'行优先'F'列优先）
'''
np.eye(N, M=None, k=0, dtype=float, order='C')
'''
创建单位方阵（行列数相同的单位矩阵）
'''
np.identity(n, dtype)
'''
以数据序列作为矩阵的对角线元素，生成对角矩阵
object接收一个数据序列对象，可以是列表、元组及其组合等，k表示对角线偏移
'''
np.diag(object, k=0)
'''
创建指定形状的数组，所有元素都被初始化为 1
'''
np.ones(shape, dtype=None, order='C')
'''
创建指定形状的数组，所有元素初始化为fill_value
'''
np.full(shape, fill_value, dtype=None)
'''
创建指定形状的数组，所有元素任意
'''
np.empty(shape, dtype=None, order='C')

```

### 2.1.3 数组访问

- 一维数组索引

```python
arr[5]
arr[3:5] # 包括3不包括5
arr[:5] # 从0开始省略
arr[-1] # 最后一个元素
arr[1:-1:2] # 最后一个参数代表步长
arr[5:1:-2] # 步长为负，则开始下标大于结束下标
```

- 多维数组索引

```python
arr[0, 3:5] # 第0行第3、4列元素
arr[1:, 2:] # 第1行第2列开始的元素
arr[:, 2] # 第2列开始的元素
```

- 花式索引：花式索引的索引值是一个数组。不同于切片，花式索引实现的是拷贝功能，生成的是一个新的数组。

```python
arr[[0, 2]] # 第0、2行所有元素
arr[:, [1, 3]] # 第1、3列所有元素
arr[1:, [0, 2, 3]] # 第1行开始的第0、2、3列元素
```
 
### 2.2 Numpy通用函数

ufunc函数全称为通用函数（universal function），是一种能够对数组中所有元素进行操作的函数。

- 算术运算：加（+）、减（-）、乘（`*`）、除（/）、整除（//）、求余（%）、幂（`**`）等。数组间的算术运算表示对每个数组中的元素分别进行算术运算，所以两个数组的形状需要相同。

- 比较运算：>、<、`==`、>=、<=、!=。比较运算返回的结果是一个布尔数组，每个元素为两个数组对应元素比较的结果。

- 逻辑运算：通过函数 np.logical_and()、 np.logical_or()、 np.logical_not()、 np.logical_xor() 分别实现数组元素的逻辑”与”、 ”或”、 ”非”、 ”异或” 功能。运算结果返回一个布尔数组。

- 常用一元函数：包括 np.abs()、np.sqrt()、 np.square()、 np.exp()、 np.log()、 np.log10()、np.ceil()、np.floor()、 np.rint()（四舍五入取整）、 np.modf() （返回一个由小数数组和整数数组组成的元组） 、三角函数和反三角函数等.

#### 2.2.1 ufunc函数广播机制

广播（broadcasting）是指不同形状的数组之间执行算术运算的方式。需要遵循4个原则。

- 让所有输入数组都向其中shape最长的数组看齐，shape中不足的部分都通过在前面加1补齐。

- 输出数组的shape是输入数组shape的各个轴上的最大值。

- 如果输入数组的某个轴和输出数组的对应轴的长度相同或者其长度为1时，这个数组能够用来计算，否则出错。

- 当输入数组的某个轴的长度为1时，沿着此轴运算时都用此轴上的第一组值

### 2.3 Numpy统计分析

#### 2.3.1 读写文件

NumPy文件读写主要有二进制文件的读写和文本文件的读写两种形式。

- 二进制文件读写

```python
# 以二进制形式保存数据，文件默认扩展名为“.npy”
np.save(filename, arr, allow_pickle=True)
# 将多个数组保存到一个文件中，文件默认扩展名为“.npz”
np.savez(filename, arr1, arr2)
# 从二进制文件读取数据
np.load(filename)
```

:::tip
存储时可以省略扩展名，但读取时不能省略扩展名。
:::

- 文本文件读写

```python
# 将数组写到某种分隔符隔开的文本文件中
# 文件名、数组、存储格式、数据列分隔符、数据行分隔符
np.savetxt(filename, arr, fmt, delimiter=' ', newline='\n')
# 将文本文件加载到数组
np.loadtxt(filename, dtype=<class 'float'>, delimiter=None)
```
 
#### 2.3.2 统计分析

1. **排序**

- 直接排序

```python
# 指定axis，1沿横轴排序，0沿纵轴排序；默认值-1表示沿最后的轴排序；该方法为原地操作
ndarray.sort(axis=-1)
# 返回已排序数组，不改变原数组内容
np.sort(arr, axis=-1)
```
- 间接排序

```python
# 返回对数组升序降序后的数组元素在原数组的下标
ndarray.argsort(axis=-1)
# 按照多个键的值排序，最后一个传入的键是主键，倒数第二个是次主键；返回原数组中的下标
np.lexsort(keys, axis=-1)
```

2. **去重**

```python
'''
找出数组中唯一值并返回排序结果
return_index为True，返回一个索引数组，表示唯一值数组在原数组的下标
return_inverse为True， 返回一个索引数组，表示原数组元素在唯一值数组中的下标
return_counts为True，返回一个整数数组，表示对应的唯一值数组在原数组出现的次数
axis=0，对行去重并排序
axis=1，对列去重并排序
axis=None，对所有元素（flatten原数组）去重并排除
'''
np.unique(arr, return_index=False, return_inverse=False, return_counts=False, axis=None)
```

## 3 Matplotlib

### 3.1 绘制线形图

```python
import numpy as np  
import matplotlib.pyplot as plt
# 字体
plt.rcParams['font.family'] = 'FangSong'
# 绘图区域
plt.figure(figsize=(8, 4))

# 子图1
plt.subplot(2, 1, 1)
plt.plot(x=[1,2,3], y=[2,3,4], 'ko-')
plt.xlabel('')
plt.ylabel('')
plt.title('')
plt.show()

# 子图2
plt.subplot(2, 1, 2)
```

### 3.2 绘制直方图

```python
import numpy as np  
import matplotlib.pyplot as plt

pop = np.random.randint(0, 100, 100)
plt.hist(pop, bins=20)
plt.show()
```

### 3.3 绘制条形图

```python
import numpy as np  
import matplotlib.pyplot as plt

xvalues = list(range(4))
gdp = [11,12,13,14]

plt.bar(xvalues, gdp)
plt.ylabel('GDP')
plt.title('')
plt.xticks(xvalues, ['b', 's', 'g', 's']) # 刻度
plt.ylim(9, 15) # 刻度范围
plt.show()
```

### 3.4 绘制饼图

```python
import numpy as np  
import matplotlib.pyplot as plt

labels = ('c', 'j', 'p')
sizes = [15, 30, 45]
explode = (0, 0.1, 0) # 离开中心的距离
plt.pie(sizes, explode=explode, labels=labels)
plt.show()
```

### 3.5 绘制散点图

```python
import numpy as np  
import matplotlib.pyplot as plt

x=np.random.rand(50) # 50个0到1的数
y=np.random.rand(50)
plt.scatter(x, y, s=10, c='black')
plt.show()
```

## 4 Pandas

### 4.1 数据预处理

- 重复行

```python
# subset列索引，默认所有列
# keep = first/last/False
df.duplicated(subset=None, keep='first')
# 根据行索引
df.index.duplicated(keep='first')
# 根据列索引重复行删除
df.drop_duplicates(subset=None, keep='first', inplace=False)
```

- 缺失值

```python
df.isnull()
```

::: info
**待更新**
:::
