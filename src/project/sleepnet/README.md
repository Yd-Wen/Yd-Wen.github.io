---
date: 2026-04-03
title: SleepNet
icon: base
category: 项目
tag: 
  - SleepNet
  - README
star: true
---

::: center

**SleepNet**

[![Python 3.10](https://img.shields.io/badge/python-3.10-blue.svg)](https://www.python.org/downloads/)
[![PyTorch 2.5.0](https://img.shields.io/badge/PyTorch-2.5.0-ee4c2c.svg)](https://pytorch.org/)
[![CUDA 11.8](https://img.shields.io/badge/CUDA-11.8-green.svg)](https://developer.nvidia.com/cuda-downloads)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

SleepNet 是一个基于深度学习的人体动作识别框架，专门处理点云序列数据（4D时空数据）。本项目针对毫米波雷达产生的稀疏点云数据进行优化，实现了高效准确的动作分类。
:::

## 项目介绍

SleepNet 采用创新的多阶段特征提取架构，结合空间-时间注意力机制，能够有效捕捉人体动作的空间特征和时间动态。项目支持多种主流的点云处理模型作为基线对比，并提供完整的训练、测试和可视化流程。

### 核心特点

- **多模态数据支持**：支持毫米波雷达、深度相机等多种传感器产生的点云数据
- **高效架构设计**：采用密集连接和注意力机制，在精度和效率之间取得平衡
- **丰富的基线模型**：集成 20+ 种主流点云处理模型用于对比
- **完整的实验流程**：提供数据预处理、训练、测试、可视化一体化解决方案

## 技术栈

- **深度学习框架**：PyTorch 2.5.0 + torchvision 0.20.0
- **编程语言**：Python 3.10
- **环境管理**：Conda 25.3.1
- **CUDA 版本**：11.8
- **主要依赖**：
  - PyTorch 2.5.0 / torchvision 0.20.0
  - NumPy / SciPy
  - einops（张量操作）
  - thop（模型复杂度分析）
  - lmdb（高效数据存储）
  - matplotlib / seaborn（可视化）
  - PyYAML（配置管理）
  - ONNX 1.17.0（模型导出）

## 功能特性

### 支持的模型

| 类别 | 模型 |
|------|------|
| **SleepNet** | SleepNet (核心模型) |
| **Point3D** | PointNet, PointNet2, PointNext, PointMLP, PointCNN, DGCNN, PointConv, PointVector |
| **Point4D** | MeteorNet, PointLSTM, PSTNet, PSTNet2, P4Transformer, PSTTransformer, SequentialPointNet, Mamba4D |
| **Efficient** | MobileNet, DenseNet, GhostNet, SHViT, SwiftFormer, EfficientViT, EfficientViM |

### 支持的数据集

| 数据集 | 类别数 | 描述 |
|--------|--------|------|
| MMActivity | 5 | 拳击、开合跳、跳跃、深蹲、行走 |
| MSRAction3D | 20 | MSR 3D 动作数据集 |
| DGUHA | 7 | 人体动作数据集 |
| Self-build | 9 | 自建数据集：跌倒、起立、坐下、仰卧起、深蹲、行走、弯腰、弯腰起、蹲起 |

### 关键技术

- **注意力机制**：通道注意力、帧内空间注意力、帧间空间注意力、时间注意力
- **数据增强**：支持多种点云数据增强策略
- **训练策略**：K折交叉验证、早停机制、学习率调度、自动混合精度(AMP)
- **评估指标**：准确率、精确率、召回率、F1分数、混淆矩阵

## 快速开始

### 环境配置

**环境要求**：
- Python 3.10
- Conda 25.3.1
- CUDA 11.8
- PyTorch 2.5.0
- ONNX 1.17.0

```bash
# 克隆项目
git clone <repository-url>
cd SleepNet

# 创建conda环境（Python 3.10）
conda create -n SleepNet python=3.10
conda activate SleepNet

# 安装 PyTorch 2.5.0 (CUDA 11.8)
pip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0 --index-url https://download.pytorch.org/whl/cu118

# 安装其他依赖
pip install numpy scipy pyyaml tqdm matplotlib seaborn lmdb

# 安装特殊依赖（详见下方说明）
# pip install einops thop onnx==1.17.0
```

**注意**：einops、thop、onnx 需要特殊安装方式，详见 [依赖安装说明](#依赖安装说明)

### 数据准备

```bash
# 处理 MMActivity 数据集
python -m dataset.mmactivity_process

# 处理自建数据集
python -m dataset.self_process

# 自建数据集过采样与分层划分
python -m dataset.self_process --stratify --oversample

# 处理 MSRAction3D 数据集
python -m dataset.msr_process
```

### 模型训练

```bash
# 基础训练（SleepNet + MMActivity）
python -m experiment.train --model sleepnet --dataset mmac --split random

# 完整参数训练
python -m experiment.train \
  --model sleepnet \
  --dataset mmac \
  --split kfold \
  --num_fold 5 \
  --optimizer adam \
  --lr 0.001 \
  --embed_size 64 \
  --stages 2 2 2 \
  --groups 4 \
  --growth_ratio 16 \
  --dropout 0.2

# 使用自建数据集训练
python -m experiment.train --dataset self --num_class 9

# 使用欠采样自建数据集训练
python -m experiment.train --dataset self --split kfold --stratify --num_fold 5 --undersample_valid --num_class 9
```

### 模型测试

```bash
# 测试指定时间戳的模型
python -m experiment.test \
  --model sleepnet \
  --dataset mmac \
  --time 2025-0711-152338 \
  
# 自建数据集测试时欠采样测试集
python -m experiment.test \
  --model sleepnet \
  --dataset self \
  --time 2025-0711-152338 \
  --undersample_test
```

### 后台运行

```bash
# 后台训练（输出到日志文件）
nohup python -m experiment.train \
  --model sleepnet \
  --dataset mmac \
  --split random > output.log 2>&1 &
 
# 后台训练（自建数据集使用欠采样验证集、使用类权重、使用F2损失函数、配置早停模式使用F2作为评估指标） 
nohup python -m experiment.train --undersample_valid --use_class_weight --early_stop_metric f2 --loss_fn softf2 > output.log 2>&1 &

# 查看进程
ps -ef | grep sleepnet.train
ps -p <PID> -o lstart
```

## 部署脚本

### 训练脚本示例

```bash
#!/bin/bash
# train_sleepnet.sh

MODEL="sleepnet"
DATASET="mmac"
EPOCHS=300
BATCH_SIZE=32
LR=0.001

python -m experiment.train \
  --model $MODEL \
  --dataset $DATASET \
  --num_epoch $EPOCHS \
  --batch_size $BATCH_SIZE \
  --lr $LR \
  --split kfold \
  --num_fold 5 \
  --optimizer adam \
  --embed_size 64 \
  --stages 2 3 2 \
  --growth_ratio 32 \
  --groups 16 \
  --pool_type mix \
  --dropout 0.1
```

### 测试脚本示例

```bash
#!/bin/bash
# test_model.sh

MODEL="sleepnet"
DATASET="mmac"
TIME="2025-0711-152338"

python -m experiment.test \
  --model $MODEL \
  --dataset $DATASET \
  --time $TIME

# 测试（自建数据集使用欠采样测试集、使用类权重、使用F2损失函数） 
python -m experiment.test --time 2026-0325-215658 --loss_fn softf2 --use_class_weight --undersample_test 
```

## 依赖安装说明

### thop（模型复杂度计算）

```bash
# 1. 下载源码
git clone https://github.com/Lyken17/pytorch-OpCounter

# 2. 修改 setup.py 第 VERSION 行
# 原：VERSION += "_" + datetime.datetime.now().strftime("%Y%m%d%H%M")[2:]
# 改：VERSION += ".post" + datetime.datetime.now().strftime("%Y%m%d")[2:]

# 3. 安装
cd pytorch-OpCounter
python setup.py install
```

### einops

```bash
# 从 PyPI 下载对应平台的 .whl 文件手动安装
pip install einops-*.whl
```

### ONNX 1.17.0

```bash
# 从 PyPI 或阿里云镜像下载 onnx 1.17.0 的 .whl 文件手动安装
pip install onnx-1.17.0-*.whl
# 或使用阿里云镜像
pip install onnx-1.17.0-*.whl -i https://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com
```

## 项目结构

```
SleepNet/
├── dataset/               # 数据集处理
│   ├── utils/            # 数据加载和处理工具
│   ├── mmactivity_process.py
│   ├── msr_process.py
│   └── self_process.py
├── model/                # 模型定义
│   ├── sleepnet.py       # SleepNet 核心模型
│   ├── backbone.py       # 骨干网络
│   ├── block.py          # 基础模块
│   ├── layer.py          # 层定义
│   ├── point3d/          # 3D点云模型
│   ├── point4d/          # 4D点云模型
│   └── efficient/        # 高效模型
├── experiment/           # 训练和测试
│   ├── train.py
│   ├── test.py
│   ├── visualize.py
│   └── utils/
├── utils/                # 工具函数
│   ├── file/            # 文件操作
│   ├── metrics/         # 评估指标
│   ├── visualize/       # 可视化
│   └── ...
├── main.py              # 模型推理示例
└── README.md
```

## 更新日志

### 2026-0325
- 新增启用类别权重
- 新增早停模式配置
- 新增损失函数选择
- 新增初始数据集过采样和验证集测试集欠采样

### 2026-0324
- 配置初始化
- 添加项目说明

### 2025-12
- 添加可视化设置
- 更新模型大小配置

### 2025-10
- 添加可视化功能
- 支持 DGUHA 数据集
- 支持 MSRAction3D 数据集
- 添加 SwiftFormer、EfficientViT 等高效模型
- 添加 Mamba4D、SHViT 模型

### 2025-09
- 添加模型注册机制
- 添加 SequentialPointNet、PSTTransformer
- 添加 MeteorNet、PSTNet、PSTNet++
- 添加 P4Transformer
- 实现多种时间建模方法消融实验（PointLSTM、TCN、Attention）

### 2025-08
- 添加 PointNet 系列模型（PointNet, PointNet2, PointNext, PointMLP）
- 添加 PointCNN、PointConv、DGCNN
- 实现通道注意力、空间注意力、时间注意力模块
- 添加自动混合精度(AMP)训练

### 2025-07
- 优化项目结构
- 添加可视化工具
- 更新训练测试方法

### 2025-05
- 实现 K 折交叉验证
- 添加早停机制
- 完善参数解析工具
- 添加统计工具

### 2025-04
- 项目初始提交
- 实现数据预处理流程
- 实现标准训练/测试流程

### 2025-03
- 项目初始化

## 开源协议

本项目采用 MIT License 开源协议。

Copyright (C) 2026 - present by Yd Wen

## 致谢

本项目在以下开源项目的基础上进行开发和改进：

- **[RadHAR](https://github.com/nesl/RadHAR)** 

- **[MTGEA](https://github.com/AIC-DGU/MTGEA)** 

感谢以上项目的作者和贡献者！
