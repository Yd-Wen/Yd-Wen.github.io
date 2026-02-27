---
title: 3 数组
icon: array
date: 2024-02-02
category: 编程语言
tag: 
    - Java
    - 数组
---

## 3.1 数组基础

### 3.1.1 定义

- `DATATYPE [] ARRAYNAME`
- `DATATYPE ARRAYNAME []`

### 3.1.2 初始化

```java
// 静态
DATATYPE [] ARRAYNAME = new DATATYPE [] {Elem1, Elem2, ...}
// 静态简化
DATATYPE [] ARRAYNAME = {Elem1, Elem2, ...}
/** 动态
  * 整数默认初始化为0
  * 浮点数默认初始化0.0、
  * 字符默认初始化为空格
  * 布尔值默认初始化为false
  * 引用型默认初始化为null
  */
DATATYPE [] ARRAYNAME = new DATATYPE [ARRAYLen]
```

### 3.1.3 访问
```java
ARRAYNAME [Index] = DATAVALUE
```

## 3.2 内存管理

- **栈**：方法运行时使用的内存，比如 main 方法运行，进入方法栈中执行

- **堆**：存储对象或数组，用 new 来创建，都存储在堆内存

- **方法区**：存储可以运行的 class 文件

- **本地方法栈**：JVM 在使用操作系统功能时使用，与开发无关

- **寄存器**：给 CPU 使用，与开发无关

::: tip
当多个数组指向同一片空间时，其中一个数组对空间中值的进行修改，其他数组访问该空间时就是修改后的值了。
:::

## 3.3 数组操作

1. 遍历

- for 循环遍历
  ```java
  int[] arr = {1, 2, 3, 4, 5};
  for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
  }
  ```
- 增强 for 循环（for-each）
  ```java
  int[] arr = {1, 2, 3, 4, 5};
  for (int element : arr) {
      System.out.println(element);
  }
  ```
- Arrays 工具类遍历
  ```java
  int[] arr = {1, 2, 3, 4, 5};
  System.out.println(Arrays.toString(arr));
  ```

2. 复制

- System.arraycopy()

- Arrays.copyOf()

- Arrays.copyOfRange()

3. 排序

- Arrays.sort()

- Collections.sort()（用于 List 集合）

4. 查找

- 线性查找

- 二分查找（数组必须已排序）

## 3.4 多维数组

1. 二维数组定义

```java
// 动态初始化
int[][] matrix = new int[3][4]; // 3行4列

// 静态初始化
int[][] matrix = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// 不规则数组
int[][] irregular = new int[3][];
irregular[0] = new int[2];
irregular[1] = new int[3];
irregular[2] = new int[4];
```

2. 二维数组遍历

- 嵌套 for 循环

- 增强 for 循环

## 3.5 数组工具类

1. Arrays 类常用方法

- `Arrays.toString()`

- `Arrays.sort()`

- `Arrays.copyOf()`

- `Arrays.copyOfRange()`

- `Arrays.equals()`

- `Arrays.binarySearch()`

- `Arrays.fill()`

- `Arrays.asList()`

2. 使用示例

```java
import java.util.Arrays;

public class ArrayDemo {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 3, 1};
        
        // 排序
        Arrays.sort(arr);
        System.out.println("排序后：" + Arrays.toString(arr));
        
        // 填充
        int[] filledArray = new int[5];
        Arrays.fill(filledArray, 10);
        System.out.println("填充后：" + Arrays.toString(filledArray));
    }
}
```

## 3.6 数组特性

1. 优点

- 快速访问：通过索引直接访问，时间复杂度 O(1)

- 内存连续：占用空间小

- 简单易用：语法简单

- 适合随机访问

2. 缺点

- 固定长度：长度不可改变

- 插入删除效率低：需要移动元素

- 类型单一：只能存储同一种类型

- 空间浪费：可能浪费内存

## 3.7 数组与集合对比

| 特性 | 数组 | 集合 |
|------|------|------|
| 长度 | 固定 | 可变 |
| 类型 | 单一类型 | 可存储任意类型（泛型） |
| 功能 | 基本操作 | 丰富的方法 |
| 性能 | 访问快，插入删除慢 | 插入删除快，访问相对较慢 |
| 适用场景 | 固定大小、频繁访问 | 动态大小、频繁修改 |

## 3.8 应用场景

1. 存储基本数据类型集合

2. 矩阵运算

3. 排序和搜索算法

4. 缓冲区

5. 参数传递

6. 数据结构基础

## 3.9 常见错误

1. 数组索引越界：访问超出长度的索引

2. 空指针异常：访问未初始化的数组

3. 类型不匹配：赋值类型错误

4. 内存溢出：创建过大的数组
