---
title: 4 分支
icon: branch
date: 2024-01-17
category: 教程
tag: 
    - Git
---

## 4.1 分支

分支是 Git 中非常重要的概念，它允许你在不同的分支上开发不同的功能，而不会影响主分支的代码。

## 4.2 分支操作命令

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

## 4.3 分支最佳实践

- 主分支（main/master）：用于存放稳定的代码

- 开发分支（develop）：用于集成开发中的功能

- 特性分支（feature）：用于开发新功能

- 修复分支（bugfix）：用于修复 bug

- 发布分支（release）：用于准备发布
