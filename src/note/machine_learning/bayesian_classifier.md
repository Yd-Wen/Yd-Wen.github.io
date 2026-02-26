---
date: 2023-10-31
title: 7 贝叶斯分类器
icon: bayesian_classifier
category:
  - 机器学习
tag:
  - 贝叶斯
---

## 7.1 贝叶斯决策论

- 贝叶斯判定标准：最小化总体风险 。

- 贝叶斯最优分类器：为最小化条件风险，只需在每个样本上选择那个使条件风险最小的类别标记。贝叶斯最优分类器，即对每个样本，选择能使后验概率最大的类别标记。

- 贝叶斯定理：后验概率 = 先验概率 * 条件概率（似然）/ 证据因子

![贝叶斯定理.png](https://gitee.com/yindong-wen/picgo_img/raw/master/image/7.1.png)

## 7.2 极大似然估计

极大似然估计：寻找使似然最大的参数。连乘容易下溢，通常使用对数似然。

## 7.3 朴素贝叶斯分类器

- 朴素贝叶斯分类器：采用属性独立性假设，即每个属性独立地对分类结果发生影响。

![朴素贝叶斯分类器.png](https://gitee.com/yindong-wen/picgo_img/raw/master/image/7.2.png)

- 拉普拉斯修正：避免因数据样本不充分而导致概率估值为0的问题。

![拉普拉斯修正.png](https://gitee.com/yindong-wen/picgo_img/raw/master/image/7.3.png)
