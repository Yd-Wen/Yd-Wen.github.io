---
title: 云服务器安装 Claude Code
icon: install
date: 2026-04-06
category: 教程
tag:
  - Claude Code
  - Linux
  - Proxy
  - Node.js
star: true
---

## 🎯 目标：在云服务器安装并运行 Claude Code

通过 Node.js 环境安装 Anthropic 的终端 AI 编程助手，并解决网络访问限制。

::: tip
本教程是基于本地 SSH 连接 Ubuntu 远程主机环境下的 Claude Code 安装。
:::

## 📋 环境准备

### 1. 安装 Node.js 20.x（LTS 版本）

```bash
# 卸载旧版本（如有）
apt remove -y nodejs npm

# 安装 NodeSource 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 验证
node --version  # v20.x.x
npm --version
```

### 2. 安装 pnpm（可选，推荐）

```bash
npm install -g pnpm
```

::: nodejs、npm 和 pnpm
- **Node.js** 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让 JavaScript 可以在服务器端运行。

- **npm** 是 Node.js 的包管理器，可随 Node.js 一起安装。它用于管理项目的依赖包（安装、更新、卸载），并提供 `package.json` 来记录项目依赖。

- **pnpm** 是新一代的 Node.js 包管理工具，与 npm 兼容但更高效。它通过**内容寻址存储**和**硬链接**机制，显著节省磁盘空间并加快安装速度，同时解决了 npm 的"幽灵依赖"问题。

**三者关系**：Node.js 是基础运行时；npm 是官方标配的包管理器；pnpm 是 npm 的替代品/优化版，使用相同的 `package.json` 和 npm 生态，但性能更优。
:::

## 🔧 安装 Claude Code

```bash
# 使用 npm
npm install -g @anthropic-ai/claude-code

# 或使用 pnpm
pnpm add -g @anthropic-ai/claude-code

# 检查是否安装成功
claude --version
```

## 配置 API Key (核心步骤)

### 1. 打开配置文件
```bash
# 在家目录新建 .claude 目录
mkdir -p ~/.claude

# 新建并打开 .claude 目录下的 settings.json 文件
nano ~/.claude/settings.json
```

### 2. 填写 Claude Code 配置

将 API key 替换以下内容并填写到文件：
```json
{
    "env": {
        "ANTHROPIC_AUTH_TOKEN": "sk-xxx",
        "ANTHROPIC_BASE_URL": "https://linoapi.com.cn",
        "API_TIMEOUT_MS": "3000000",
        "ANTHROPIC_MODEL": "claude-haiku-4-5-20251001"
    }
}
```
- 保存：Ctrl + O → 回车

- 退出：Ctrl + X

:::tip 家目录

- root 和普通用户的家目录对比

| 特性         | root 用户       | 普通用户                              |
| ---------- | ------------- | --------------------------------- |
| **家目录路径**  | `/root`       | `/home/用户名`                       |
| **示例**     | `/root`       | `/home/ubuntu`、`/home/lighthouse` |
| **权限**     | 系统最高权限（UID=0） | 受限权限                              |
| **创建文件位置** | 默认在 `/root`   | 默认在 `/home/用户名`                   |

- 图示

```plaintext
├── root/              ← root 家目录（只有 root 能访问）
│   ├── .bashrc
│   └── .ssh/
│
├── home/              ← 普通用户家目录
│   ├── ubuntu/        ← ubuntu 用户的家
│   │   ├── .bashrc
│   │   └── projects/
│   │
│   └── lighthouse/    ← lighthouse 用户的家
│       └── ...
│
└── ...
```

- 最佳实践

| 场景     | 建议                                     |
| ------ | -------------------------------------- |
| 个人项目开发 | 使用普通用户（如 `ubuntu`），家目录在 `/home/ubuntu` |
| 系统管理   | 使用 `root`，但谨慎操作                        |
| 存放代码   | 避免在 `/root` 存放项目，便于权限管理和备份             |
| 多用户共享  | 使用 `/opt` 或 `/srv`                     |

:::

## 🌐 网络问题解决（核心难点）

### 问题现象

输入命令首次启动 Claude Code：

```bash
claude
```

此时报错：无法访问 Anthropic 服务

```plaintext
Unable to connect to Anthropic services
Failed to connect to api.anthropic.com: ERR_BAD_REQUEST
```

![无法访问 Anthropic 服务](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260406212117269.jpg)

经过查阅资料发现，需要设置代理才能访问。在云服务器安装 Clash 等代理，或通过本机代理转发。这里我们选择本机 Clash 代理转发。

::: note
还有一种方案是修改 hasCompletedOnboarding 字段。

Claude Code 会在用户主目录下生成一个本地状态文件 .claude.json，其中包含一个关键字 段 hasCompletedOnboarding，用于标记用户是否已经完成了初次引导流程。

- hasCompletedOnboarding: true：表示引导已完成，程序启动后直接进入工作模式。

- hasCompletedOnboarding: false：表示引导未完成，程序会在每次启动时尝试引导用户。

输入命令：

```bash
# 打开家目录下的 .claude.json 文件
nano ~/.claude.json
```

找到 hasCompletedOnboarding，设置为 `false`。

但是输入问题后，Claude Code 提示未登录。仍然需要开启代理完成登录。
:::

### 方案：通过本机 Clash 代理转发

**原理**：SSH 远程端口转发，将云服务器端口映射到本机代理

#### 步骤 1：本机（Windows PowerShell）开启转发

```powershell
ssh -R 7890:127.0.0.1:7890 root@服务器IP -N
```

> ⚠️ 注意：若云服务器 7890 被占用（如 TinyProxy），需先停止或换端口

#### 步骤 2：云服务器设置代理环境变量

```bash
# fish shell
set -x https_proxy "http://127.0.0.1:7890"

# 验证代理
curl -x http://127.0.0.1:7890 -I https://google.com
# 期望返回 HTTP/2 200
```

#### 步骤 3：运行 Claude Code

后续再次启动 Claude Code，不再报错。

```bash
claude
```

## 🛠️ 常见问题处理

| 问题 | 原因 | 解决 |
|:---|:---|:---|
| `pnpm/npm command not found` | 未安装 Node.js | 按上文安装 Node.js 20.x |
| `OAuth error: 403` | IP 被限制或网络不通 | 使用代理 |
| SSH 转发失败 `port forwarding failed` | 端口被 TinyProxy 占用 | `systemctl stop tinyproxy` 或换端口 |

## 🔒 关闭代理

关闭代理，接入国内大模型的 Claude Code 也可以正常使用。

```bash
# fish shell
set -e https_proxy
set -e http_proxy
set -e ALL_PROXY
```

> 📝 Claude Code 安装简单，网络打通是关键；SSH 远程转发 + 本机 Clash 是云服务器场景的最优解。

## 📚 参考资料

- [Claude Code 深度教程](https://claudecode.tangshuang.net/tutorial)

- [Claude Code 在 Linux(Ubuntu) 上的完整安装部署指南](https://blog.csdn.net/Little_Carter/article/details/155679936)

- [解决 Claude Code 初次引导未完成的问题](https://blog.csdn.net/objectdsf/article/details/159240060)
