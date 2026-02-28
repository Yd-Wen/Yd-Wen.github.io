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

## 5 忽略文件

Git 忽略文件是通过 `.gitignore` 文件来实现的，该文件列出了 Git 应该忽略的文件和目录。

### 5.1 常见的忽略文件

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

### 5.2 创建 .gitignore 文件

在项目根目录创建 `.gitignore` 文件，然后添加需要忽略的文件和目录。

### 5.3 使忽略文件生效

- 确保 .gitignore 文件位置正确：应放在项目根目录，这样它会对整个项目生效

- 处理已跟踪的文件：如果文件已经被 Git 跟踪（即已经提交过），修改 .gitignore 不会自动忽略它，需要执行以下步骤：

  ```bash
  # 从暂存区移除已跟踪的文件（保留本地文件）
  git rm --cached 文件名
  
  # 提交移除操作
  git commit -m "停止跟踪该文件"
  ```
- 验证忽略效果：使用 `git status` 命令检查文件状态，确认被忽略的文件不再显示为未跟踪状态

### 5.4 新增忽略项

1. 编辑 .gitignore 文件，添加需要忽略的文件或目录模式

2. 提交 .gitignore 文件到版本库：
  ```bash
  git add .gitignore
  git commit -m "更新忽略规则"
  ```

### 5.5 删除忽略项

1. 编辑 .gitignore 文件，删除对应的忽略规则

2. 提交 .gitignore 文件到版本库：
  ```bash
  git add .gitignore
  git commit -m "移除忽略规则"
  ```

3. 如果需要跟踪之前被忽略的文件，执行：
  ```bash
  git add 文件名
  git commit -m "开始跟踪该文件"
  ```

### 5.6 忽略文件的语法规则

- 注释：以 # 开头的行是注释


- 通配符：

  - * 匹配任意字符（除了斜杠）

  - ? 匹配单个字符

  - ** 匹配任意层级的目录

- 目录：以 / 结尾表示目录

- 否定：以 ! 开头表示否定（不忽略）

- 转义：使用 \ 转义特殊字符

::: tip
**示例**：

```
# 忽略所有 .log 文件
*.log

# 但不忽略 error.log
!error.log

# 忽略 build 目录
build/

# 忽略 src 目录下的 temp 目录
src/temp/
```
:::

## 6 分支

分支是 Git 中非常重要的概念，它允许你在不同的分支上开发不同的功能，而不会影响主分支的代码。

### 6.1 分支操作命令

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

### 6.2 分支最佳实践

- 主分支（main/master）：用于存放稳定的代码

- 开发分支（develop）：用于集成开发中的功能

- 特性分支（feature）：用于开发新功能

- 修复分支（bugfix）：用于修复 bug

- 发布分支（release）：用于准备发布

## 7 代理

在某些网络环境下，需要设置 Git 代理才能正常访问远程仓库。

### 7.1 设置 HTTP 代理

```bash
# 设置 HTTP 代理
git config --global http.proxy http://proxy.example.com:8080

# 取消 HTTP 代理
git config --global --unset http.proxy
```

### 7.2 设置 HTTPS 代理

```bash
# 设置 HTTPS 代理
git config --global https.proxy https://proxy.example.com:8080

# 取消 HTTPS 代理
git config --global --unset https.proxy
```

### 7.3 设置 SOCKS5 代理

```bash
# 设置 SOCKS5 代理
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080

# 取消 SOCKS5 代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 8 同时使用 Gitee/Github 仓库

### 8.1 准备工作

1. 在 Gitee 和 Github 上分别创建仓库：
   
   - 在 Gitee 上创建一个新仓库
   
   - 在 Github 上创建一个新仓库
   
   - 两个仓库的名称最好保持一致

### 8.2 初始化本地仓库

```bash
# 创建并进入项目目录
mkdir project-name
cd project-name

# 初始化 Git 仓库
git init

# 创建 README.md 文件
echo "# Project Name" > README.md

# 添加并提交文件
git add .
git commit -m "Initial commit"
```

### 8.3 添加远程仓库

1. 添加 Gitee 远程仓库
    ```bash
    git remote add gitee https://gitee.com/username/project-name.git
    ```
2. 添加 Github 远程仓库
    ```bash
    git remote add github https://github.com/username/project-name.git
    ```

3. 查看远程仓库配置
    ```bash
    git remote -v
    ```

::: tip
`git remote -v` 输出应该类似：
```
gitee   https://gitee.com/username/project-name.git (fetch)
gitee   https://gitee.com/username/project-name.git (push)
github  https://github.com/username/project-name.git (fetch)
github  https://github.com/username/project-name.git (push)
```
:::

### 8.4 推送代码到两个仓库

1. 分别推送到两个仓库
    ```bash
    # 推送到 Gitee
    git push gitee main

    # 推送到 Github
    git push github main
    ```

2. 为仓库别名添加第二个推送地址
    ```bash
    # 第一步：先给 origin 添加第一个推送地址（比如 Gitee，若已存在可跳过）
    git remote set-url --add gitee https://gitee.com/username/project-name.git

    # 第二步：再添加第二个推送地址（GitHub）
    git remote set-url --add github https://github.com/username/project-name.git
    ```

    验证配置是否成功
    ```bash
    git remote -v
    ```
    ```plaintext
    gitee   https://gitee.com/username/project-name.git (fetch)  # 拉取仅从 Gitee
    gitee   https://gitee.com/username/project-name.git (push)   # push 到 Gitee
    github  https://github.com/username/project-name.git (push)  # push 到 GitHub
    ```

    配置成功后，每次推送代码时，会同时推送到 Gitee 和 Github 两个仓库。
    ```bash
    git push origin main
    ```

    ::: warning
    若配置错误，执行以下命令移除错误地址：
    ```bash
    git remote set-url --delete origin https://错误的地址.git
    ```
    :::

### 8.5 从两个仓库拉取代码

```bash
# 从 Gitee 拉取
git pull gitee main

# 从 Github 拉取
git pull github main
```

::: warning
如果两个仓库的代码不一致，拉取时可能会出现冲突，需要手动解决冲突后再提交。
:::

### 8.6 常见问题及解决方案

1. 权限问题

如果推送时出现权限错误，可能是因为：

- 没有在 Gitee 或 Github 上添加 SSH 密钥

- 账号密码不正确

- 仓库权限设置不正确

解决方案：

- 检查 SSH 密钥是否正确添加

- 确保账号密码正确

- 检查仓库权限设置

2. 推送失败

如果推送失败，可能是因为：

- 远程仓库有未同步的更改

- 网络连接问题

- 仓库大小超过限制

解决方案：

- 先拉取远程仓库的更改，解决冲突后再推送

- 检查网络连接

- 检查仓库大小，清理不必要的文件

### 8.6.3 分支不同步

如果两个仓库的分支不同步，可能是因为：

- 只在一个仓库创建了新分支

- 分支合并情况不同

解决方案：

- 在两个仓库都创建相同的分支

- 确保分支合并操作在两个仓库都执行

通过以上步骤，可以成功配置一个项目同时使用 Gitee 和 Github 仓库，实现一次推送同时更新两个仓库的目的。
