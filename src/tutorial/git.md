---
date: 2024-01-08
title: Git 
icon: git
category: 教程
tag: 
    - Git
---

## 1 概述

版本控制系统：

- 集中式：svn 、 cvs

- 分布式：git

区别：

- 集中式：把代码放在一个服务器上集中管理，你的所有回滚等操作都需要服务器的支持。

- 分布式：每台电脑都是服务器，当你从主仓库拉取一份代码下来后，你的电脑就是服务器，无需担心主仓库被删或者找不到的情况，你可以自由在本地回滚，提交，当你想把自己的代码提交到主仓库时，只需要合并推送到主仓库就可以了，同时你可以把自己的代码新建一份仓库分享给其它人。
## 2 工作流程

![工作流程.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/git_2.png)

命令详解：

- clone（克隆）：从远程仓库克隆代码到本地仓库。

- checkout（检出）：从本地仓库检出一个仓库分支后进行修订。

- add（添加）：将代码添加到暂存区。

- commit（提交）：提交到本地仓库。

- fetch（抓取）：从远程仓库抓取到本地仓库，不进行合并操作。

- pull（拉取）：从远程仓库拉到本地仓库，自动进行合并（merge），然后放到工作区，相当于fetch + merge。

- push（推送）：从本地仓库推送到远程仓库。

## 3 安装

- 下载地址：[Git下载](https://git-scm.com/)

- 安装成功：右键菜单有Git GUI / Git Bash 即安装成功。

::: tip
- Git GUI：Git 提供的图形化界面工具。
- Git Bash：Git 提供的命令行工具。
:::

## 4 仓库

仓库（repository）可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。仓库包括：

- 本地仓库：在本地电脑上的仓库。

- 远程仓库：在远程服务器上的仓库。

- 主仓库：远程仓库中主要的代码仓库，一般是项目的负责人维护。

- 分支仓库：从主仓库分出来的仓库，一般是项目的成员维护。

### 4.1 初始化仓库

初始化本地仓库的命令：

```bash
git init
```

执行此命令后，会在当前目录创建一个 `.git` 目录，用于存储 Git 仓库的相关信息。

### 4.2 添加文件到仓库

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

### 4.3 提交文件到仓库

提交暂存区文件到本地仓库的命令：

```bash
git commit -m "commit message"
```

其中，`commit message` 是对本次提交的描述，应该清晰明了地说明本次提交的内容。

### 4.4 添加远程仓库

添加远程仓库的命令：

```bash
git remote add origin remote_repository_url
```

其中，`origin` 是远程仓库的名称，`remote_repository_url` 是远程仓库的 URL。

### 4.5 从远程仓库拉取代码

从远程仓库拉取代码的命令：

```bash
# 拉取默认分支的代码
git pull

# 拉取指定分支的代码
git pull origin branch_name
```

### 4.6 推送代码到远程仓库

推送代码到远程仓库的命令：

```bash
# 推送默认分支的代码
git push

# 推送指定分支的代码
git push origin branch_name

# 首次推送时设置上游分支
git push -u origin branch_name
```

# 5 忽略文件

Git 忽略文件是通过 `.gitignore` 文件来实现的，该文件列出了 Git 应该忽略的文件和目录。

### 常见的忽略文件

```
# 操作系统文件
.DS_Store
Thumbs.db

# 编辑器文件
.vscode/
.idea/
*.swp
*.swo
*~

# 编译产物
build/
dist/
*.class

# 依赖文件
node_modules/
vendor/

# 环境文件
.env
.env.local
.env.*.local
```

### 创建 .gitignore 文件

在项目根目录创建 `.gitignore` 文件，然后添加需要忽略的文件和目录。

# 6 分支

分支是 Git 中非常重要的概念，它允许你在不同的分支上开发不同的功能，而不会影响主分支的代码。

### 分支操作命令

```bash
# 查看所有分支
git branch

# 创建新分支
git branch branch_name

# 切换分支
git checkout branch_name

# 创建并切换分支
git checkout -b branch_name

# 合并分支
git merge branch_name

# 删除分支
git branch -d branch_name

# 强制删除分支
git branch -D branch_name
```

### 分支最佳实践

- 主分支（main/master）：用于存放稳定的代码
- 开发分支（develop）：用于集成开发中的功能
- 特性分支（feature）：用于开发新功能
- 修复分支（bugfix）：用于修复 bug
- 发布分支（release）：用于准备发布

# 7 代理

在某些网络环境下，需要设置 Git 代理才能正常访问远程仓库。

### 设置 HTTP 代理

```bash
# 设置 HTTP 代理
git config --global http.proxy http://proxy.example.com:8080

# 取消 HTTP 代理
git config --global --unset http.proxy
```

### 设置 HTTPS 代理

```bash
# 设置 HTTPS 代理
git config --global https.proxy https://proxy.example.com:8080

# 取消 HTTPS 代理
git config --global --unset https.proxy
```

### 设置 SOCKS5 代理

```bash
# 设置 SOCKS5 代理
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080

# 取消 SOCKS5 代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

# 8 Gitee/Github 最佳实践

### 仓库命名

- 仓库名称应该简洁明了，反映项目的内容
- 可以使用连字符（-）分隔单词，避免使用空格和特殊字符

###  README.md

每个仓库都应该包含一个 README.md 文件，用于说明项目的：
- 项目简介
- 安装方法
- 使用方法
- 贡献指南
- 许可证信息

### 提交信息

- 提交信息应该清晰明了，说明本次提交的内容
- 可以使用约定式提交（Conventional Commits）格式
- 提交信息应该使用英文，便于国际化协作

### 分支管理

- 使用主分支（main/master）存放稳定代码
- 使用特性分支开发新功能
- 使用修复分支修复 bug
- 定期合并分支，保持代码的同步

### 代码规范

- 制定并遵循代码规范
- 使用代码格式化工具
- 定期进行代码审查

### 问题和 Pull Request

- 使用 Issue 跟踪问题和功能请求
- 使用 Pull Request 提交代码变更
- 在 Pull Request 中详细说明变更内容
- 进行代码审查后再合并代码

### 标签管理

- 使用标签标记版本发布
- 标签名称应该遵循语义化版本规范（Semantic Versioning）

### 持续集成/持续部署

- 配置 CI/CD 流程
- 自动运行测试
- 自动部署代码
