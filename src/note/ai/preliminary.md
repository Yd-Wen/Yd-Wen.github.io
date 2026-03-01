---
date: 2026-02-13
title: 预备知识
icon: preliminary
category: AI 应用开发
tag: 
    - 基础
---

## 通过阿里云百炼平台接入大模型

- 阿里云百炼：https://bailian.console.aliyun.com/

- 获取API KEY

- 新建Python项目并安装opanai库：
    ```bash
    pip install openai
    ```

- 执行官网示例代码：
    ```python
    import openai

    client = openai.OpenAI(
        api_key="sk-",
        base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
    )

    completion = client.chat.completions.create(
        model="qwen3-max",
        messages=[
            {"role": "system", "content": "你是一个专业的助手"},
            {"role": "user", "content": "你好"}
        ]
    )

    print(completion.choices[0].message.content)
    ```

## 使用环境变量保护 API KEY

- 将 API KEY 暴露在代码中是不合理的

- 通过环境变量：OPENAI_API_KEY和DASHSCOPE_API_KEY记录值，代码读取环境变量获得值

## Ollama 本地部署大模型

- Ollama 是一款旨在简化大语言模型本地部署和运行过程的开源软件

- Ollama 提供了一个轻量级、易于扩展的框架，让开发者能够在本地机器上轻松构建和管理LLMs

- [Ollama 官网：https://ollama.com](https://ollama.com/)

## OpenAI 库

OpenAI 库是 OpenAI 官方推出的 Python SDK，核心作用是让开发者能简单、高效地调用 OpenAI 的各类 API （如 GPT 聊天、DALL·E 绘图、语音转文字等），无需手动处理 HTTP 请求、身份验证等细节。

由于其发布较且简单易用，现今许多模型服务商（如阿里云百炼平台）均兼容 OpenAI SDK 的调用。

### 基础使用

1. 获取客户端对象：使用OpenAI类创建客户端实例，主要参数有

    1. `api_key` ：模型服务商提供的密钥

    2. `base_url` ：模型服务商的 API 接入地址

2. 调用模型：使用 `client.chat.completions.create` 创建 `ChatCompletion` 对象，参数有

    1. `model` ：选择所用模型，如 qwen3-max

    2. `messages` ：提供给模型的消息，字典列表，每个字典包括2个key（role：角色；content：内容）

        1. `system` ：设定助手的整体行为、角色和规则，是全局背景设定，影响后续所有交互

        2. `assistant`：代表 AI 助手的回答，可在代码中人为设定

        3. `user`：用户，发送问题或指令

3. 处理结果：返回结果是一个 `ChatCompletion` 对象

### 流式输出

可以设定结果输出为 `stream` 模式（流式输出），以获得更好的体验。

1. 使用 `client.chat.completions.create` 创建 `ChatCompletion` 对象是，设定参数 `stream=True` 

2. `for` 循环遍历和输出返回结果

### 附带历史消息

在调用模型传入参数 `messages` 时，将历史消息填入，使其知晓对话上下文。
