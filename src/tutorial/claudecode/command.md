---
title: 常用命令
icon: cli
date: 2026-04-06
category: 教程
tag:
  - Claude Code
  - CLI
star: true
---

## 🎯 核心斜杠命令

### 项目初始化与配置

| 命令 | 功能 | 使用场景 |
|:---|:---|:---|
| `/init` | 初始化项目，生成 CLAUDE.md 指南文件 | 新项目首次使用，让 AI 理解项目结构 |
| `/config` | 打开配置菜单（语言、模型、权限等） | 修改设置，如切换中文界面 |
| `/memory` | 编辑 CLAUDE.md 记忆文件 | 添加项目规范、代码风格等长期记忆 |

### 模型与上下文管理

| 命令 | 功能 | 使用场景 |
|:---|:---|:---|
| `/model` | 切换 AI 模型（Opus/Sonnet 等） | 根据任务复杂度选择合适模型 |
| `/clear` | 清除当前对话历史 | 开始新任务，避免上下文干扰 |
| `/compact` | 压缩对话上下文，节省 token | 对话过长时优化性能 |
| `/context` | 可视化上下文使用情况 | 查看各部分（历史/文件/系统提示）占比 |

### 代码审查与回退

| 命令 | 功能 | 使用场景 |
|:---|:---|:---|
| `/review` | 请求代码审查 | 让 AI 检查代码质量和潜在问题 |
| `/rewind` | 回退到之前的代码状态 | AI 改错代码时"时光倒流" |
| `/diff` | 查看本次会话所有文件变更 | 确认修改内容后再决定提交或回滚 |

### 系统与扩展

| 命令 | 功能 | 使用场景 |
|:---|:---|:---|
| `/mcp` | 管理 MCP（Model Context Protocol）服务器 | 连接外部工具（数据库、浏览器等） |
| `/agents` | 管理子智能体（subagents） | 创建专用 AI 代理处理特定任务 |
| `/status` | 查看账户和系统状态 | 检查用量、权限、配置状态 |
| `/export` | 导出当前对话到文件或剪贴板 | 保存会话记录 |
| `/exit` | 退出 Claude Code | 结束当前会话 |

## ⚡ 常用非斜杠命令

### 启动与恢复

```bash
# 启动交互模式
claude

# 继续上次会话（当前目录）
claude -c
# 或
claude --resume

# 恢复指定会话（按 ID 或名称）
claude -r "session-name"

# 一次性执行并退出（Headless 模式）
claude -p "解释这个函数"
```

### 管道与文件

```bash
# 管道输入处理
cat file.py | claude -p "优化这段代码"

# 带初始提示启动
claude "帮我分析这个项目结构"
```

## 🎮 交互快捷键

| 快捷键 | 功能 |
|:---|:---|
| `Shift + Tab` | 切换执行模式（Normal/Accept Edits/Plan/Bypass） |
| `Esc Esc` | 快速回退到上一个检查点（同 `/rewind`） |
| `Ctrl + C` | 中断当前操作 |
| `Ctrl + B` | 将任务放到后台运行 |
| `Ctrl + L` | 清屏（保留对话历史） |
| `@文件名` | 引用文件或文件夹 |
| `!命令` | 执行 Bash 命令 |

## 📝 最佳实践速查

```bash
# 1. 新项目启动流程
/init                    # 生成 CLAUDE.md
/memory                  # 编辑项目规范

# 2. 日常开发循环
/model                   # 选择合适模型
@文件名                   # 引用相关文件
...自然语言描述需求...

# 3. 代码审查流程
/review                  # 请求审查
/diff                    # 查看变更
/rewind                  # 如有问题回退

# 4. 会话管理
/context                 # 检查上下文占用
/compact                 # 压缩优化
/clear                   # 或清空重新开始
```

## 📚 参考资料

- [Claude Code 深度教程](https://claudecode.tangshuang.net/tutorial)
