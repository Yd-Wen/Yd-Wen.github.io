---
title: 最优化
icon: optimization
date: 2025-01-08
category: 其他
tag: 
    - 梯度
    - 算法
---

## 1 学科背景

### 1.1 线性规划与非线性规划

- 生产计划问题

$$
\begin{align}
max&\sum_{j=1}^3c_jx_j\\
s.t.&\sum_{j=1}^3a_{ij}x_j\leq b_i, &i&=1,2,3,4\\
&x_j\leq d_j, &j&=1,2,3\\
&x_j\geq 0, &j&=1,2,3
\end{align}
$$

- 食谱问题

$$
\begin{align}
min&\sum_{j=1}^nc_jx_j\\
s.t.&\sum_{j=1}^na_{ij}x_j\geq b_i, &i&=1,2,\dots,m\\
&x_j \geq 0, &j&=1,2,\dots,n
\end{align}
$$

- 选址问题

$$
\begin{align}
min &\sum_{i=1}^m\sum_{j=1}^n w_{ij}\sqrt{(x_i-a_j)^2+(y-i-b_j)^2}\\
s.t. &\sum_{j=1}^n w_{ij}\leq c_i, &i&=1,2,\dots,m \\
&\sum_{j=1}^m w_{ij}=q_j, &j&=1,2,\dots,n\\
&w_{ij}\geq 0,&i&=1,2,\dots,m,j=1,2,\dots,n
\end{align}
$$

- **线性规划**：目标函数和约束函数都是线性的

- **非线性规划**：目标函数或约束函数是非线性的

### 1.2 凸集与凸函数

- 凸集

设 $S$ 为 $n$ 维欧氏空间 $R^n$ 中的一个集合，若对 $S$ 中任意两点，联结它们的线段仍然属于 $S$；换言之，
对 $S$ 中**任意两点** $x_1$, $x_2$，及**每个实数** $\lambda\in [0,1]$，都有：

$$
\lambda x_1 + (1-\lambda) x_2 \in S,
$$

则称 $S$ 为**凸集**。

$$
\lambda x_1 + (1-\lambda) x_2
$$

称为 $x_1$ 和 $x_2$ 的**凸组合**。

::: tip
集合上任意两点的**凸组合**仍属于原集合的集合称为**凸集**。
:::

- 凸函数

设 $S$ 为 $R^n$ 中的非空**开凸集**，$f(x)$ 是定义在 $S$ 上的二次**可微函数**，则 $f(x)$ 为**凸函数**的**充要条件**是对任意 $x \in S$ 处的**Hesse 矩阵半正定**。

习题：
- 证明凸集
- 证明凸函数：Hesse 矩阵

## 2 线性规划

线性规划通常解决如下两类问题：

1. **当任务或目标确定后**，如何统筹兼顾，合理安排，用最少的资源完成确定的任务或目标。

2. **在一定资源条件限制下**，如何组织安排生产获得最好的经济效益。

- 标准形式

$$
\begin{align}
min &\sum_{j=1}^n c_jx_j \\
s.t. &\sum_{j=1}^n a_{ij}x_j=b_i, &i=1,\dots,m\\
&x_j \geq 0, &j=1,\dots,n
\end{align}
$$ 

- 如何标准化

  - 目标函数：目标函数求极大值，则乘以（-1）

  - 变量：若存在取值**无非负限制**的变量 $x_j$，令 $x_j=x'_j-x''_j$，其中 $x'_j \geq 0, x''_j \geq 0$

  - 约束方程：$x_{n+i}$ 为**松弛变量** 

$$
\begin{align}
\sum a_{ij}x_j\leq b_i => \sum a_{ij}x_j+x_{n+i}= b_i, x_{n+i}\geq0 \\
\sum a_{ij}x_j\geq b_i => \sum a_{ij}x_j-x_{n+i}= b_i, x_{n+i}\geq0
\end{align}
$$

::: tip
小加大减
:::

- 基本性质

- 线性规划的可行域是**凸集**。

- 设线性规划的可行域非空，则：

  - 线性规划**存在有限最优解**的**充要条件**是所有 $cd^{(j)}$ 为非负数，其中 $d^{(j)}$ 是可行域的极方向。
  
  - 若线性规划**存在有限最优解**，则目标函数**最优值**可在**某个极点**上达到。

- 基本可行解：基（m 阶可逆矩阵，r(A)=m）- 基变量 - 基本解 - 基本可行解 - 是否退化

![基本可行解](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_2.png)

### 2.1 单纯形法

求解 $x_B=B^{-1}b=\overline b, f_B=c_Bx_B$

求解 $w=c_BB^{-1}, z_k-c_k=max\{wp_j-c_j\}$=>$k$

求解 $y_k=B^{-1}p_k$=>进基变量 $x_k$

求解 $\frac{\overline br}{y_{rk}}=min\{\frac{\overline b_i}{y_{ik}}|y_{ik}>0\}$=>离基变量 $x_{B_r}$，$p_k$ 替换 $p_{B_r}$

![单纯形法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_2.1_01.png)

### 2.2 对偶原理

- 对偶的一般规则

  ![对偶的一般规则](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_2.2_01.png)
  
  - 若原问题是 min，**先取反后取同**（对应 4、5 行）；
  
  - 若原问题是 max，**先取同后取反**（对应 5、4 行）。

- 弱对偶定理

  线性规划原问题 1：

  $$
  \begin{align}
  min~&cx \\
  s.t.~&AX\geq b,\\
  &x\geq 0.
  \end{align}
  $$

  线性规划对偶问题 2：

  $$
  \begin{align}
  max~&wb \\
  s.t.~&wA\leq c,\\
  &w\geq 0.
  \end{align}
  $$

  设 $x^{(0)}$ 和 $w^{(0)}$ 分别是问题 1、2 的可行解，则：
  
  $$
  cx^{(0)}\geq w^{(0)}b.
  $$

- 推论

  1. $x^{(0)}$ 和 $w^{(0)}$ 分别是问题 1、2 的可行解，且 $cx^{(0)}= w^{(0)}b$，则 $x^{(0)}$ 和 $w^{(0)}$ 分别是问题 1、2 的最优解。
  
  2. 问题 1、2 都有最优解的充要条件是他们都有可行解。
  
  3. 1 的目标函数在可行域无下界，则 2 无可行解；2 的目标函数在可行域无上界，则 1 无可行解；

- 强对偶定理：问题 1、2 有一个存在最优解，则另一个也存在最优解，且两者目标函数最优值相等。

- 对偶规划最优解情形：

  | LP\DLP | 有最优解 | 有可行无最优 | 不可行  |
  | ------ | ---- | ------ | ---- |
  | 有最优解   | √（强） |        |      |
  | 有可行无最优 |      |        | √（弱） |
  | 不可行    |      | √（弱）   | √    |

- 互补松弛性质

  在一对最优解 (x∗,w∗) 中，如果原（对偶）问题的一个约束严格成立（松），那么对应的对偶（原）变量必须为 0（紧）；如果原（对偶）问题的变量分量严格大于 0（松），那么对应的对偶问题约束必须是等号成立（紧）。

### 2.3 运输问题

- 数学模型
  m 个产地 A（产量 $a_i$）和 n 个销地 B（销量 $b_j$），之间的运费为 $c_{ij}$，假设产销平衡，即：
  $$
  \sum_{i=1}^ma_i=\sum_{j=1}^nb_j
  $$
  试确定一个调运方案，使总费用最小。

  |         | $B_1$    | $B_2$    | $\dots$ | $B_n$    |         |
  | ------- | -------- | -------- | ------- | -------- | ------- |
  | $A_1$   | $c_{11}$ | $c_{12}$ | $\dots$ | $c_{1n}$ | $a_1$   |
  | $A_2$   | $c_{21}$ | $c_{22}$ | $\dots$ | $c_{2n}$ | $a_2$   |
  | $\dots$ | $\dots$  | $\dots$  | $\dots$ | $\dots$  | $\dots$ |
  | $A_m$   | $c_{m1}$ | $c_{m1}$ | $\dots$ | $c_{mn}$ | $a_m$   |
  |         | $b_1$    | $b_2$    | $\dots$ | $b_n$    |         |

  解：设货运量为 $x_{ij}$，则：

  $$
  \begin{align}
  min~&\sum_{i=1}^m\sum_{j=1}^nc_{ij}x_{ij}\\ns.t.~&\sum_{j=1}^nx_{ij}=a_i,&i=1,2,\dots,m\\
  &\sum_{i=1}^mx_{ij}=b_j,&j=1,2,\dots,n\\
  &x_{ij}\geq0,&i=1,2,\dots,m;&j=1,2,\dots,n
  \end{align}
  $$

- 基本性质

  1. 产销平衡的运输问题**存在最优解**。

  2. 每个基本可行解包含 $m+n-1$ 基变量，$mn-(m+n-1)$ 个非基变量。

- 闭回路
  
  变量序列 $\{x_{ij}\}$ 称为**闭回路**，如 $\{x_{11},x_{12},x_{42},x_{43},x_{23},x_{25},x_{35},x_{31}\}$ 是一个闭回路。

- 闭回路性质
  - 回路定点数一定是偶数

  - 遇到顶点须转 90 度与另一顶点连接

- 表上作业法

  初始基本可行解表上求法：
  
  1. **西北角法**
  
  2. **最小元素法**
  最优基本可行解表上求法
  借鉴一般单纯形法，从一个可行解出发，不断改进，直到找到最优解。改进规则：**闭回路法**。

  - 西北角法
    从运输表的**西北角方格开始**，优先安排**标号小**的产地与销地间的运输任务。
    ![西北角法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_2.3.4.1.png)

  - 最小元素法
    根据**就近供应原则**，一般先安排**运价最小**的产地和销地间的运输任务，其他步骤类似西北角法。

  - 最优基本可行解与闭回路法
    - 借鉴一般单纯形法，从一个可行解出发，不断改进，直到找到最优解。改进规则：**闭回路法**。

    - 通过西北角法或最小元素法得到初始基本可行解后：
        1. 判断是否为最优解
        1. 计算 $w_i,v_j$：令 $w_1=0$，基变量判别数为 0
        $$
        w_1=0,w_i+v_j=c_{ij}, \forall x_{ij}\in x_B 
        $$
        2. 计算判别数：对非基变量，即 $\forall x_{ij}\notin x_B$，计算判别数 $w_i+v_j-c_{ij}$，最大判别数大于 0，则未达到最优
        2. 闭回路法改进
        1. 进基变量 $x_{pq}$：$z_{pq}-c_{pq}=max\{w_i+v_j-c_{ij}\}>0$ 时取 $x_{pq}$
        2. 离基变量：
            1. 确定闭回路：非基变量 $x_{pq}$ 与基变量构成唯一**闭回路**。
            2. 改变闭回路上各变量的取值：设该变量 $\theta$，即 $x_{pq}=\theta$，改变回路上其他变量：原则是同一行/列两个变量一赠 $\theta$ 一减 $\theta$。
            3. 确定最大变量，使原有基变量 $x_{uv}=0$，则 $x_{uv}$ 为离基变量。注意新的基变量中 $x_{pq}=\theta$。

## 3 非线性规划
### 3.1 最优性条件

- 无约束问题的极值条件

  - 局部极小点的充分条件和必要条件：

    梯度 $\triangledown f(\overline x)=0$；$Hesse$ 矩阵 $\triangledown^2 f(\overline x)$ 正定=>局部极小点=>梯度 $\triangledown f(\overline x)=0$；$Hesse$ 矩阵 $\triangledown^2 f(\overline x)$ 半正定.

  - 全局极小点的充要条件：

    $f(x)$ 可微**凸函数**，则 $\overline x$ 为全局极小点<=>$\triangledown f(\overline x)=0$.

- 约束问题的最优性条件

  - 约束极值问题：
  
  $$
  \begin{align}
  min~&f(x)&x\in R^n\\
  s.t.~&g_i(x)\geq 0,&i=1,\dots,m\\
  &h_j(x)=0,&j=1,\dots,l
  \end{align}
  $$
  
  其中，$g_i(x)\geq 0$ 称为不等式约束，$h_j(x)=0$ 称为等式约束。

  - 对于非线性规划问题：
  
  $$
  \begin{align}
  min~&f(x)&x\in R^n\\
  s.t.~&g_i(x)\geq 0,&i=1,\dots,m
  \end{align}
  $$

  **可行域**：$S=\{x|g_i(x)\geq 0,~i=1,\dots,m\}$ 在点 $\overline x\in S$ 处，约束呈两种情形：

  1. $g_i(\overline x)=0,~i\in I$，称这样的约束是 $\overline x$ 处**起作用约束**。

  2. $g_i(\overline x)>0,~i\notin I$，称这样的约束是 $\overline x$ 处**不起作用约束**。

  记 $I=\{i|g_i(\overline x)=0\}$ 表示起作用约束下标集。

  KT 条件：

  ![KT 条件](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.1.2_01.png)

  满足 KT 条件的一阶必要条件（KT 条件等价形式+约束）：

  ![KT 条件等价形式](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.1.2_02.png)

  ::: tip
  注意 $g_i(x)\geq 0$
  :::

  习题 7.2/7.3/7.4/7.11

### 3.2 无约束求解

- 一维搜索

  一维搜索方法分为两类：

  1. 试探法：需要按照某种方式找到试探点，通过一系列试探点来确定极小点，包括 0.618 法、Fibonacci 法。

  2. 函数逼近法（插值法）：用某种简单曲线逼近目标函数曲线，包括牛顿法、割线法、抛物线法。

  - 试探法

    - 0.618 法（黄金分割法）：常用于单峰函数。

    ![0.618 法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.1.1_01.png)

    - Fibonacci 法：区间缩短比率不是常数，而是由 Fibonacci 数确定。

    ![Fibonacci 法 1](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.1.1_02.png)

    ![Fibonacci 法 2](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.1.1_03.png)

  - 函数逼近法

    - 牛顿法：极小点附近用二阶 Taylor 多项式近似目标函数。

    ![牛顿法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.1.2_01.png)

    - 割线法：用割线逼近目标函数的导函数曲线。

    ![割线法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.1.2_02.png)

    - 抛物线法：用二次三项式逼近目标函数。

    ![抛物线法 1](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.1.2_03.png)

    ![抛物线法 2](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.1.2_04.png)

- 使用导数的最优化

  - 最速下降法：从某个点出发，选择一个目标函数值下降最快的方向，使其更快达到极小点。

  ![最速下降法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.2_01.png)

  ::: tip
  局限性：相邻搜索方向是正交的，要使迭代充分接近极小点，需要走很大的弯路，计算效率会更低。
  :::

  - 牛顿法

  ![牛顿法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.2_02.png)

  ::: tip
  - 牛顿法至少二级收敛，因此收敛较快。
  - 但是牛顿方向不一定是下降方向，当初始点远离极小点时，牛顿法可能不收敛。
  :::

  - 阻尼牛顿法：增加了沿牛顿方向的一维搜索。

  ![阻尼牛顿法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.2_03.png)

  - **共轭梯度法**/**FR 法**：将共轭性和最速下降法结合，利用已知点的梯度构造一组共轭方向，沿着这组方向搜索，求出目标函数极小点。

  ![共轭梯度法](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.2.2_04.png)

  ::: tip
  初始搜索方向 $d^{(1)}=-\triangledown f{(x^{(1)})}$ 十分重要，选择其他方向不能保证共轭性
  :::

  ::: tip
  证明向量关于矩阵共轭。
  给定矩阵，给出一组共轭方向。
  :::

  - 信赖域法

  - 最小二乘法

- 无约束最优化的直接方法

  直接方法与导数方法比较：

  1. 直接方法对目标函数不要求导数存在

  2. 迭代简单，容易编程实现

  3. 变量较少的问题效果较好

  4. 收敛较慢

  - 模式搜索法

  - Rosenbrock 方法

  - 单纯形搜索法

  - Powell 方法

### 3.3 有约束求解

- 可行方向法

  - Zoutendijk 可行方向法

  - Rosen 梯度投影法

  - Frank-Wolfe 方法

- 惩罚函数法

  考虑具有约束的非线性规划：

  $$
  \begin{align}
  min~&f(x)\\
  s.t.~&g_i(x)\geq 0,&i&=1,\dots,m\\
  &h_j(x)=0,&j&=1,\dots,l
  \end{align}
  $$

  - 基本思想

  构造**惩罚函数**（目标函数和约束函数组成**辅助函数**），将约束问题转化成无约束问题，进而用无约束最优化方法求解。

  - 外点罚函数法

  定义辅助函数：

  $$
  \begin{align}
  &F(x,\sigma)=f(x)+\sigma \cdot P(x),\\
  &P(x)=\sum_{i=1}^m \phi (g_i(x))+\sum_{j=1}^l \psi (h_j(x)),\\
  \end{align}
  $$

  函数 $\phi$ 和 $\psi$ 需要满足的条件：

  $$
  \begin{align}
  &\phi(y)=0,y\geq 0; &\phi(y)>0,y<0;\\
  &\psi(y)=0,y=0; &\psi(y)>0,y\neq 0;
  \end{align}
  $$

  典型的取法：
  
  $$
  \begin{align}
  &\phi(x)=[max\{0,-g_i(x)\}]^\alpha \\
  &\psi(x)=|h_j(x)|^\beta
  \end{align}
  $$

  其中 $\alpha \geq1, \beta \geq 1$，通常取 $\alpha=\beta=2.$，因此，可以将约束问题转化成无约束问题：

  $$
  min~F(x,\sigma)=f(x)+\sigma P(x)
  $$

  其中，$\sigma$ 是很大的正数，

  $$
  P(x)=\sum_{i=1}^m[max\{0, -g_i(x)\}]^2+\sum_{j=1}^l|h_j(x)|^2
  $$

  - 内点罚函数法

  从内点出发，保持在可行域内部搜索，适用于**只有不等式约束的问题**。

  定义障碍函数

  $$
  G(x,r)=f(x)+rB(x),
  $$

  两种重要形式：

  $$
  \begin{align}
  B(x)=\sum_{i=1}^m\frac{1}{g_i(x)},\\
  B(x)=-\sum_{i=1}^mlog~g_i(x).
  \end{align}
  $$

  当 $x$ 趋向于边界时，$G$ 趋向于无穷大；

  因此，原问题可转化成无约束问题：

  $$
  \begin{align}
  min~&G(x,r)\\
  s.t.~&x\in int~S
  \end{align}
  $$

- 二次规划

  二次规划是非线性规划的特殊情形，其**目标函数是二次实函数**，**约束是线性的**。

  典型的方法：

  1. **Lagrange 方法**：等式约束

  2. **起作用集方法**

  3. Lemke 方法

  4. 路径跟踪方法

  - Lagrange 方法

  问题定义：

  $$
  \begin{align}
  min~&\frac{1}{2}x^THx+c^Tx\\
  s.t.~&Ax=b
  \end{align}
  $$

  其中，$x\in R^n$，$H$ 是 $n$ 阶对称矩阵，$A$ 是 $m\times n$ 满秩矩阵，$b$ 是 $m$ 维向量。

  定义 Lagrange 函数：

  $$
  L(x,\lambda)=\frac{1}{2}x^THx+c^Tx-\lambda^T(Ax-b),
  $$

  令 $\triangledown_xL(x,\lambda)=0,\triangledown_\lambda L(x,\lambda)=0$，得到：

  $$
  \begin{bmatrix}
  H&-A^T\\
  -A&0
  \end{bmatrix}
  \begin{bmatrix}
  x\\
  \lambda
  \end{bmatrix}
  =
  \begin{bmatrix}
  -c\\
  -b
  \end{bmatrix}
  $$

  其中，$\begin{bmatrix} H&-A^T\\-A&0 \end{bmatrix}$ 称为 Lagrange 矩阵。

  若矩阵 $H$ 的逆矩阵存在，则二次规划的解：

  $$
  \begin{align}
  &\overline x=-Qc+R^Tb,\\
  &\overline \lambda=Rc-Sb.
  \end{align}
  $$

  其中，

  $$
  \begin{align}
  &Q=H^{-1}-H^{-1}A^T(AH^{-1}A^T)^{-1}AH^{-1},\\
  &R=(AH^{-1}A^T)^{-1}AH^{-1},\\
  &S=-(AH^{-1}A^T)^{-1}.
  \end{align}
  $$

  - 起作用集方法

  问题定义：

  $$
  \begin{align}
  min~&\frac{1}{2}x^THx+c^Tx\\
  s.t.~&Ax\geq b
  \end{align}
  $$

  其中，$x\in R^n$，$H$ 是正定矩阵，$A$ 是 $m\times n$ 满秩矩阵，$b$ 是 $m$ 维向量。

  ::: tip
  由于不等式约束的出现，不能使用 Lagrange 方法。
  :::

  计算步骤：

  ![起作用集方法 1](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.3.3_01.png)

  ![起作用集方法 2](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_3.3.3_02.png)

  1. 确定 $H,A,c,b$ 和起作用约束指标集 $I$

  2. 计算起始点梯度，写出新的约束问题，解出 $\delta$

  3. $\delta=0$ 时计算 $\lambda$，判断最小值 $\lambda^{(k)}_q$，大等于 0 则得到最优解，否则更新指标集 $I$，求解新的约束问题
  
  4. 确定方向 $d=\delta$，计算步长 $\alpha$，计算新的的起始点，进行第二步

## 4 动态规划

研究多阶段决策问题的一种运筹学方法，用于以时间或地域划分阶段的动态过程的最优化。

举例：生产负荷问题；最短路径问题。

多阶段决策问题：决策过程分为互相联系的若干阶段，每一阶段都需作出决策，从而形成全过程决策。

### 4.1 术语

1. 阶段

阶段时整个过程的自然划分，通常按照时间顺序或空间特征划分阶段。表示阶段序号的变量称为**阶段变量**，一般用 $k$ 表示，$k=1$ 表示第 1 阶段。

2. 状态

每个阶段开始所处的自然状况或客观条件称为状态，是不可控因素。描述每个阶段状态的变量称为**状态变量**。

用 $s_k$ 表示第 $k$ 阶段的状态变量，用 $S_k$ 表示第 $k$ 阶段允许状态集合。

3. 决策

一个阶段状态确定后，可以作出不同的选择，从而演变到下一阶段的某个状态。描述决策的变量称为决策变量。

用 $u_k(s_k)$ 表示第 $k$ 阶段状态变量取值 $s_k$ 时的决策变量。

用 $D_k(s_k)$ 表示决策变量全体可取值的集合。

4. 策略

由决策组成的序列称为**策略**。

记作 $p_{1,n}(s_1)=\{u_1(s_1),u_2(s_2),\dots,u_n(s_n)\}$
。
用 $p_{k,n}(s_1)=\{u_k(s_k),u_{k+1}(s_{k+1}),\dots,u_n(s_n)\}$ 表示 $k$ 子过程策略。

用 $p_{k,n}(s_k)(k=1,2,\dots,n-1)$ 表示允许策略集合。

允许策略集合中达到最优效果的策略称为**最优策略**。

5. 状态转移方程

给定第 $k$ 阶段的状态 $s_k$ 和决策 $u_k$，则第 $k+1$ 阶段的状态 $s_{k+1}$ 与 $s_k$ 和 $u_k$ 存在函数关系，记作 $s_{k+1}=T(s_k,u_k)$，称为状态转移方程。

6. 指标函数

指标函数取得最优值时，相应的策略称为最优策略。

最优函数记作 $f_k(s_k)$，指标函数具有可分离性，并满足递推关系。

7. 最优策略和最优轨线

指标函数达到最优值时的策略称为**最优策略**，按照最优策略和状态转移方程得到的状态序列称为**最优轨线**。

### 4.2 逆推解法

假设初始状态 $s_1$，状态转移方程 $s_{k+1}=T(s_k,u_k)$。

计算步骤：

利用已知条件，从 $k=n$ 开始从后向前推算，求得各阶段的最优决策和最优指标函数，最后算出 $f_1(s_1)$ 时得到最优指标函数值。

再从 $k=1$ 开始，利用状态转移方程确定最优轨线和最优策略。

逆推解法求解最短路径问题：

![逆推解法求解最短路径问题 1](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_4.2_01.png)

![逆推解法求解最短路径问题 2](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_4.2_02.png)

逆推解法求解资源分配问题：

![逆推解法求解资源分配问题 1](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_4.2_03.png)

![逆推解法求解资源分配问题 2](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_4.2_04.png)

![逆推解法求解资源分配问题 3](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_4.2_05.png)

![逆推解法求解资源分配问题 4](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/optimize_4.2_06.png)

## 5 整数规划

- 纯整数线性规划：指全部决策变量都必须取整数值的整数线性规划。

- 混合整数线性规划：决策变量中有一部分必须取整数值，另一部分可以不取整数值的整数线性规划。

- 0-1 型整数线性规划：决策变量只能取值 0 或 1 的整数线性规划。

整数规划的松弛问题：原规划去掉整数要求。

分支定界法

1. 求解松弛：解满足整数要求则为最优解，否则继续。

2. 分支定界：对非整数解 $x_i$，在松弛问题加上约束：

$$
\begin{align}
&x_i\leq \lfloor x_i \rfloor \\
&x_i\geq \lceil x_i \rceil
\end{align}
$$

3. 求解分支：解是整数且目标函数取得更优值则停止，否则继续分支。

## 6 总结

- **凸集和凸函数**

- 线性规划

  - 标准形式：松弛变量（小加大减）和辅助变量（变量非负）

  - 单纯形法：**注意化成标准型**

  - 对偶问题

    - 互补松弛性质

  - 运输问题

- 非线性规划

  - 标准形式：$min~f(x),g_i(x)\geq0,h_j(x)=0$

  - 最优性条件

    - 无约束：一阶导数为 0，$Hesse$ 矩阵（半）正定

    - 有约束：KT 条件（给出 KT 点：**注意起作用集**）（未给出 KT 点：等价形式）（一阶必要条件：等价形式+原约束）

  - 无约束求解

    - 一维搜索

      - 试探法：0.618/Fibonacci

      - 函数逼近法：牛顿法/割线法/抛物线法

    - 使用导数：最速下降法、牛顿法、阻尼牛顿法（添加一维搜索）、共轭梯度法（共轭性结合最速下降法）
    
  - 有约束求解

    - 罚函数法：外点；内点（**只有不等式约束时适用**）

    - 二次规划（约束函数线性）

      - Lagrange 法（**等式约束适用**）

      - 起作用集法

- 动态规划

  - 逆推解法

- 整数规划

  - 分支定界法
