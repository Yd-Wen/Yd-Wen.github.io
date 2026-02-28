---
title: 2 仓库
icon: repo
date: 2024-01-09
category: 教程
tag: 
    - Git
---

## 2.1 仓库

仓库（repository）可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。仓库包括：

- 本地仓库：在本地电脑上的仓库。

- 远程仓库：在远程服务器上的仓库。

- 主仓库：远程仓库中主要的代码仓库，一般是项目的负责人维护。

- 分支仓库：从主仓库分出来的仓库，一般是项目的成员维护。

## 2.2 初始化仓库

初始化本地仓库的命令：

```bash
git init
```

执行此命令后，会在当前目录创建一个 `.git` 目录，用于存储 Git 仓库的相关信息。

## 2.3 添加文件到仓库

将文件添加到暂存区的命令：

```bash
# 添加单个文件
git add filename

# 添加所有文件
git add .

# 添加指定目录
git add directory/
```

添加文件后，可以使用 `git status` 命令查看当前仓库的状态。

## 2.4 提交文件到仓库  

提交暂存区文件到本地仓库的命令：

```bash
git commit -m "commit message"
```

其中，`commit message` 是对本次提交的描述，应该清晰明了地说明本次提交的内容。

## 2.5 添加远程仓库

添加远程仓库的命令：

```bash
git remote add origin remote_repository_url
```

其中，`origin` 是远程仓库的名称，`remote_repository_url` 是远程仓库的 URL。

## 2.6 从远程仓库拉取代码

从远程仓库拉取代码的命令：

```bash
# 拉取默认分支的代码
git pull

# 拉取指定分支的代码
git pull origin branch_name
```

## 2.7 推送代码到远程仓库

推送代码到远程仓库的命令：

```bash
# 推送默认分支的代码
git push

# 推送指定分支的代码
git push origin branch_name

# 首次推送时设置上游分支
git push -u origin branch_name
```
