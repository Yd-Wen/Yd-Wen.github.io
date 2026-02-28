---
title: 3 忽略文件
icon: ignore
date: 2024-01-11
category: 教程
tag: 
    - Git
---

## 3.1 忽略文件

Git 忽略文件是通过 `.gitignore` 文件来实现的，该文件列出了 Git 应该忽略的文件和目录。

## 3.2 常见的忽略文件

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

## 3.3 创建 .gitignore 文件

在项目根目录创建 `.gitignore` 文件，然后添加需要忽略的文件和目录。

## 3.4 使忽略文件生效

- 确保 .gitignore 文件位置正确：应放在项目根目录，这样它会对整个项目生效

- 处理已跟踪的文件：如果文件已经被 Git 跟踪（即已经提交过），修改 .gitignore 不会自动忽略它，需要执行以下步骤：

  ```bash
  # 从暂存区移除已跟踪的文件（保留本地文件）
  git rm --cached 文件名
  
  # 提交移除操作
  git commit -m "停止跟踪该文件"
  ```
- 验证忽略效果：使用 `git status` 命令检查文件状态，确认被忽略的文件不再显示为未跟踪状态

## 3.4 新增忽略项

1. 编辑 .gitignore 文件，添加需要忽略的文件或目录模式

2. 提交 .gitignore 文件到版本库：
  ```bash
  git add .gitignore
  git commit -m "更新忽略规则"
  ```

## 3.3 删除忽略项

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

## 3.6 忽略文件的语法规则

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
