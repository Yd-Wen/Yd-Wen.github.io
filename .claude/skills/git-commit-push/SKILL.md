---
name: git-commit-push
description: 执行完整的 git 工作流程：添加文件、创建提交并推送到远程仓库。
---

# git-commit-push

执行完整的 git 工作流程：添加文件、创建提交并推送到远程仓库。

```yaml
skill:
  name: git-commit-push
  description: 执行 git add、commit 和 push 的完整流程
  usage: /git-commit-push [commit-message]
  args:
    - name: commit-message
      description: 提交信息（可选，不提供时会生成）
      required: false
```

**执行步骤：**

1. 运行 `git status` 查看当前工作区状态
2. 如果有未跟踪文件或修改的文件：
   - 运行 `git add -A` 或 `git add <具体文件>` 添加更改
3. 检查是否有已暂存的更改：
   - 如果有，创建提交
   - 如果用户提供了提交信息，使用用户提供的信息
   - 如果没有提供，根据更改内容生成合适的提交信息
4. 运行 `git push` 推送到远程仓库
5. 返回操作结果摘要

**注意事项：**

- 仅在用户明确要求推送时才执行 push
- 如果有冲突或推送失败，告知用户并停止操作
- 尊重 .gitignore 设置
