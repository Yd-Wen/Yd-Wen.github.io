---
title: 6 Gitee/Github 实践
icon: git
date: 2024-01-09
category: 教程
tag: 
    - Git
---

## 6.1 准备工作

1. 在 Gitee 和 Github 上分别创建仓库：
   
   - 在 Gitee 上创建一个新仓库
   
   - 在 Github 上创建一个新仓库
   
   - 两个仓库的名称最好保持一致

## 6.2 初始化本地仓库

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

## 6.3 添加远程仓库

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

## 6.4 推送代码到两个仓库

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

## 6.5 从两个仓库拉取代码

```bash
# 从 Gitee 拉取
git pull gitee main

# 从 Github 拉取
git pull github main
```

::: warning
如果两个仓库的代码不一致，拉取时可能会出现冲突，需要手动解决冲突后再提交。
:::

## 6.6 常见问题及解决方案

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

3. 分支不同步

如果两个仓库的分支不同步，可能是因为：

- 只在一个仓库创建了新分支

- 分支合并情况不同

解决方案：

- 在两个仓库都创建相同的分支

- 确保分支合并操作在两个仓库都执行

通过以上步骤，可以成功配置一个项目同时使用 Gitee 和 Github 仓库，实现一次推送同时更新两个仓库的目的。

