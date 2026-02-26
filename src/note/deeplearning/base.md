---
date: 2024-12-17
title: 基础概念
icon: base
category:
  - 深度学习
tag:
  - 基础
---

深度学习是机器学习的一个分支，是一种以人工神经网络为架构，对数据进行特征学习的算法。

## 深度学习与机器学习的区别

### 特征提取

![特征提取.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202602261714169.png)

- 机器学习需要人工提取特征。
- 深度学习没有复杂的人工特征提取过程，特征提取的过程可以通过深度神经网络自动完成。

### 数据量

- 机器学习参数较少，效果不是很好。
- 深度学习需要大量训练数据，需要大量算力，会有更高的效果。

## 应用场景

- 图像识别
  - 物体识别
  - 场景识别
  - 人脸检测跟踪
  - 人脸身份验证
- 自然语言处理
  - 机器翻译
  - 文本识别
  - 聊天对话
- 语音技术
  - 语音识别

## 常见框架

目前企业中常见的深度学习框架有很多，TensorFlow, Caffe2, Keras, Theano, PyTorch, Chainer, DyNet, MXNet, CNTK 等等。

其中 TensorFlow 和 Keras 是 Google 出品的，使用者很多，但是其语法晦涩且和 python 语法不尽相同，对于入门玩家上手难度高。

PyTorch 语法与 Python 相同，操作类似 Numpy，且 PyTorch 使用动态计算，会让代码调试更加简单。

---