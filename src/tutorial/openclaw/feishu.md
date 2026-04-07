---
title: 接入大模型与飞书渠道
icon: feishu
date: 2026-04-07
category: 教程
tag:
  - OpenClaw
  - LLM
  - feishu
star: true
---

## 🧠 将大模型接入 OpenClaw

如何为 OpenClaw 配置自定义的大模型 API？

如果在配置向导中跳过了模型相关配置，或者想追加更多自定义的模型，可以到控制面的配置模块进行设置。

### 模型配置解读

openclaw 的核心配置文件存放在 `~/.openclaw/openclaw.json`。

::: tip
openclaw 本身内置的配置模块并不具备对 JSON 文件进行格式化和高亮的能力，配置体验很差，建议直接在一些编辑器（如 VSCode）中打开这个文件进行配置。
:::

配置文件的一级 Key 分类如下：

| 字段 | 说明 |
|:---|:---|
| **meta** | 元数据模块，记录配置文件的基础信息 |
| **wizard** | 向导配置模块，记录交互式配置向导的运行记录 |
| **auth** | 认证配置模块，管理模型提供商的认证信息 |
| **models** | 模型提供商与模型元信息模块 |
| **agents** | 智能体默认行为配置模块 |
| **commands** | 命令执行配置模块，控制 OpenClaw 的命令运行规则 |
| **session** | 会话管理配置模块，定义会话的作用域等规则 |
| **hooks** | 钩子配置模块，管理内置的事件钩子/插件 |
| **gateway** | 网关配置模块，控制 OpenClaw 的网络服务 |

模型配置主要涉及 `models` 和 `agents` 两个字段：

| 字段 | 作用 |
|:---|:---|
| **models** | 告诉系统「去哪里调用模型」「模型的参数/计费规则是什么」 |
| **agents** | 定义「默认用哪个模型」「哪些模型可以用（白名单）」「模型的快捷别名」 |

默认的模型配置结构如下：

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "minimax-cn": {
        "baseUrl": "https://api.minimaxi.com/anthropic",
        "api": "anthropic-messages",
        "models": [
          {
            "id": "MiniMax-M2.5",
            "name": "MiniMax M2.5",
            "reasoning": true,
            "input": ["text"],
            "cost": {
              "input": 0.3,
              "output": 1.2,
              "cacheRead": 0.03,
              "cacheWrite": 0.12
            },
            "contextWindow": 200000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "minimax-cn/MiniMax-M2.5"
      }
    },
    "models": {
      "minimax-cn/MiniMax-M2.5": {
        "alias": "Minimax"
      }
    }
  }
}
```

### 自定义模型配置

按照上述格式，可以继续添加更多的模型配置。以**阿里云百炼**为例：

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "minimax-cn": {
        // ... 原有配置
      },
      "bailian": {
        "baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "apiKey": "sk-xxxxxxxxxxxxxxxx",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3.5-plus",
            "name": "Qwen 3.5 Plus",
            "api": "openai-completions",
            "reasoning": true,
            "input": ["text", "image"],
            "cost": {
              "input": 0.3,
              "output": 1.2,
              "cacheRead": 0.03,
              "cacheWrite": 0.12
            },
            "contextWindow": 600000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "bailian/qwen3.5-plus"
      }
    },
    "models": {
      "bailian/qwen3.5-plus": {
        "alias": "Qwen 3.5 Plus"
      },
      "minimax-cn/MiniMax-M2.5": {
        "alias": "Minimax"
      }
    }
  }
}
```

配置要点说明：

| 配置项 | 说明 |
|:---|:---|
| `providers` 新 key | 如 `bailian`，可自定义名称 |
| `baseUrl` | 模型平台的 Base URL |
| `apiKey` | 模型平台的 API Key |
| `api` | 使用的 API 协议（如 `openai-completions`） |
| `models.id` | 要调用的模型 ID |
| `input` | 支持的输入类型（`text`、`image` 等） |
| `agents.defaults.model.primary` | 替换默认模型（提供商标识/模型ID） |
| `agents.models.alias` | 定义模型别名，方便切换 |

配置完成后：

1. 将这份配置复制到控制面板的「配置」- Raw JSON 中
2. 点击 **Save** 和 **Update**
3. 等待更新配置和重启服务

接下来到聊天中测试，输入 `/model status` 可以查看当前已配置的所有模型：

```
Current: bailian/qwen3.5-plus
Default: bailian/qwen3.5-plus
Agent: main
...
```

如果配置过多个模型，可以使用 `/model 模型标识` 快捷切换模型：

```
/model minimax-cn/MiniMax-M2.5
```

### 模型回退机制

openclaw 运行起来是非常烧 Token 的，如果你的模型 TPM 比较低，很容易超限导致任务失败。并且如果只配置单一的模型提供商也可能会因为提供商故障或者余额不足导致失败等情况。

openclaw 为此额外提供了一个**回退机制**，可以在 `defaults.model` 下增加一个 `fallbacks` 字段：

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "bailian/qwen3.5-plus",
        "fallbacks": ["minimax-cn/MiniMax-M2.5"]
      }
    }
  }
}
```

这里可以配置当主模型出现故障时可以使用的**备用模型**，确保服务高可用。

## 💬 让 OpenClaw 接入飞书

 OpenClaw 接入飞书后，能在飞书中和 OpenClaw 进行对话。

::: tip
OpenClaw 默认提供的 Channels 大部分在国内无法使用（如 WhatsApp、Telegram 等）。在最新版本中，OpenClaw 已经将飞书内置到默认渠道，无需再额外安装插件。
:::

### 在飞书开发者平台创建应用

**第一步：登录开发者后台**

访问 [飞书开发者后台](https://open.feishu.cn/app/)，使用飞书账号登录。

**第二步：创建企业自建应用**

1. 点击页面上的「**创建企业自建应用**」按钮
2. 填写应用名称，例如：`OpenClaw 助手`
3. 上传一个专属头像（可选）
4. 点击「**创建**」

**第三步：获取凭证信息**

创建完成后会进入应用的开发后台：

1. 在左侧导航栏，点击「**凭证与基础信息**」
2. 找到 **App ID** 和 **App Secret**
3. 将这两个值复制并保存下来，稍后在 OpenClaw 中会用到

::: tip
App Secret 需要点击「查看」按钮才会显示，注意保密不要泄露。
:::

### 在 OpenClaw 中配置飞书渠道

**第一步：进入频道配置**

1. 打开 OpenClaw Control 控制台
2. 点击左侧菜单「**频道**」
3. 点击「**添加频道**」按钮

**第二步：选择飞书渠道**

在渠道列表中选择 **Feishu/Lark（飞书）**，进入配置页面：

| 配置项 | 填写内容 |
|:---|:---|
| **App ID** | 从飞书开发者后台复制的 App ID |
| **App Secret** | 从飞书开发者后台复制的 App Secret |
| **Encrypt Key** | 可选，用于消息加密 |
| **Verification Token** | 可选，用于验证请求来源 |

**第三步：配置事件订阅（可选）**

如果需要使用飞书的机器人主动推送功能，需要配置事件订阅 URL：

1. 在飞书开发者后台，点击「**事件订阅**」
2. 在 OpenClaw 的飞书频道配置页面，复制「**事件订阅地址**」
3. 将地址粘贴到飞书后台的「请求地址」中
4. 点击「保存」完成验证

::: tip
如果 OpenClaw 运行在本地没有公网地址，可以使用内网穿透工具（如 ngrok）暴露服务。
:::

**第四步：启用机器人**

1. 在飞书开发者后台，点击「**权限管理**」
2. 申请需要的权限（如 `im:chat:readonly`、`im:message:send` 等）
3. 点击「**版本管理与发布**」
4. 创建版本，填写更新说明，点击「**保存并发布**」
5. 在飞书客户端中搜索应用名称，添加到聊天列表

**第五步：开始对话**

在飞书客户端中：

1. 搜索并找到「**OpenClaw 助手**」应用
2. 点击进入对话窗口
3. 发送消息测试连接

如果配置正确，OpenClaw 会回复你的消息，此时你就可以在飞书中随时与 AI 助手对话了。

### 飞书渠道的优势

| 优势 | 说明 |
|:---|:---|
| **国内可用** | 相比 WhatsApp、Telegram 等国外渠道，飞书在国内稳定可用 |
| **企业集成** | 可以接入企业飞书，实现团队协作场景 |
| **消息同步** | 支持多端同步，手机、电脑都能收到 AI 回复 |
| **群聊支持** | 可以将 AI 助手添加到群聊中，服务整个团队 |
| **内置支持** | 最新版本已内置，无需额外安装插件 |

## 📝 总结

通过本章节，已经完成了：

- ✅ **模型配置**：理解 `openclaw.json` 结构，成功接入自定义大模型
- ✅ **模型管理**：掌握模型切换、回退机制，确保服务稳定
- ✅ **飞书接入**：创建飞书应用，配置渠道，实现飞书内对话

现在 OpenClaw 已经具备了：
- 灵活的模型调用能力（支持多厂商、自定义模型）
- 稳定的模型 fallback 机制
- 便捷的飞书交互入口

## 📚 参考资料

- [将任意大模型接入 OpenClaw | OpenClaw 完全指南](https://my.feishu.cn/wiki/QzGAwOH4LiZOYXktGyhcHoLUnRe)

- [让 OpenClaw 接入飞书 | OpenClaw 完全指南](https://my.feishu.cn/wiki/QzGAwOH4LiZOYXktGyhcHoLUnRe)
