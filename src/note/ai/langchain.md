---
date: 2026-02-15
title: LangChain
icon: langchain
category: AI 应用开发
tag: 
    - LangChain
---

## 1 简介

LangChain 由 Harrison Chase 创建于 2022 年 10 月，它是围绕 LLMs（大语言模型）建立的一个框架。

LangChain 本身并不开发 LLMs，它的核心理念是为各种 LLMs 实现通用的接口，把 LLMs 相关的组件链接在一起，简化 LLMs 应用的开发难度，方便开发者快速地开发复杂的 LLMs 应用。

LangChain 主要功能：

- Prompts：提示词工程

- Models：调用各类模型

- History：管理会话历史记录（记忆）

- Indexes：管理和分析各类文档（RAG）

- Chains：构建功能的执行链条（核心功能）

- Agent：构建智能体

### 1.1 环境部署

执行命令：

```python
pip install langchain langchain-community langchain-ollama dashscope chromadb
```

- `langchain`：核心包

- `langchain-community` ：社区支持包，提供了更多的第三方模型调用（包括阿里云千问模型）

- `langchain-ollama`： `ollama` 支持包，支持调用 `ollama` 托管部署的本地模型

- `dashscope` ：阿里云千问模型的 Python SDK

- `chromadb` ：轻量向量数据库

## 2 组件

### 2.1 Models

- **大语言模型**

  现在市面上的模型多如牛毛，LangChain 模型组件提供了各种模型的集成，为所有模型提供了一个精简的统一接口。

  LangChain 目前支持三种类型的模型：

  - 大语言模型（LLMs）：是技术范畴的统称，指基于大量参数、海量文本训练的 Transformer 架构模型，核心能力是理解和生成自然语言，主要服务于文本生成场景。

  - 聊天模型：是应用范畴的细分，是专为对话场景优化的 LLMs，核心能力是模拟人类对话的轮次交互，主要服务于聊天场景。

  - 文本嵌入模型：接收文本作为输入，得到文本的向量。

  阿里云通义千问系列模型主要来自于 `langchain-community` 包。

  **调用大语言模型**

  - 通过 `from langchain_community.llms.tongyi import Tongyi` 导入阿里云通义千问系列的支持

  - 通过 `invoke` 对模型发起提问

  ```python
  from langchain_community.llms.tongyi import Tongyi

  # 不用 qwen3-max 聊天模型
  # 使用 qwen-max 大语言模型
  llm = Tongyi(api_key="sk-xxx", model='qwen-max')

  res = llm.invoke("你是谁")

  print(res)
  ```

  **流式输出**

  - 模型提问时调用方法由 

    ```
    invoke
    ```

     方法改为 

    ```
    stream
    ```

     方法

    - `invoke` ：一次性返回完整结果

    - `stream` ：逐段返回结果，流式输出

  - `for` 循环遍历和输出返回结果

  ```python
  from langchain_community.llms.tongyi import Tongyi

  # 不用 qwen3-max 聊天模型
  # 使用 qwen-max 大语言模型
  llm = Tongyi(api_key="sk-xxx", model='qwen-max')

  # res = llm.invoke("你是谁")
  res = llm.stream("你是谁")

  # print(res)
  for chunk in res:
      print(chunk, end="", flush=True)
  ```

  ::: tip
  `invoke` 和 `stream` 方法：

  这两个核心方法是新版 LangChain（1.0 版本后）中基于 Runnable 接口的通用核心方法。

  绝大多数组件（提示词模板、链、向量检索、工具调用等）都支持这两个方法，这也是 LangChain 设计的核心范式之一。
  :::

- **聊天模型**

  LangChain 聊天消息包含三种类型：

  - `SystemMessage` ：可以用于指定模型具体所处环境和背景，如角色扮演（“你是一个代码专家”），或给出具体指示（“请返回 json 格式”），相当于 OpenAI 库中的 system 角色。

  - `HumanMessage` ：人类消息就是用户发送给 LLMs 的消息，相当于 OpenAI 库中的 user 角色。

  - `AIMessage` ：AI 针对问题输出的消息，相当于 OpenAI 库中的 assistant 角色。

  ```python
  from langchain_community.chat_models import ChatTongyi
  from langchain_core.messages import SystemMessage, HumanMessage, AIMessage

  # 实例化模型
  # 不用用 qwen-max 大语言模型
  # 使用 qwen3-max 聊天模型
  chat = ChatTongyi(api_key="sk-xxx", model="qwen3-max")

  # 准备消息
  messages = [
      SystemMessage(content="你是一名边塞诗人"),
      HumanMessage(content="请作一首唐诗"),
      AIMessage(content="锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。"),
      HumanMessage(content="仿照上面的例子作一首边塞诗")
  ]

  # 聊天
  res = chat.stream(messages)

  # 输出 chunk.content
  for chunk in res:
      print(chunk.content, end="", flush=True)
  ```

- **消息的简写形式**

  聊天消息有如下简写形式：

  ```python
  # 准备消息
  messages = [
      # 二元元组简写形式
      ("system", "你作为一名边塞诗人"),
      ("human", "请作一首唐诗"),
      ("ai", "锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。"),
      ("human", "仿照上面的例子作一首边塞诗")
  ]
  ```

  即通过二元元组封装消息：第一个元素为角色（system/human/ai），第二个元素为消息内容。

  两种形式对比：

  - 类对象形式：静态的，一步到位直接得到 Message 类的对象。

  - 简写形式：动态的，需要在运行时由 LangChain 内部机制转换为 Message 类的对象。

    - 优势：避免导包，书写简便；支持内部 `{变量}` 占位（提示词模板使用）。

- **嵌入模型**

  嵌入模型（Embedding Models）将字符串作为输入，返回一个浮点数列表（向量）。在 NLP 中，Embedding 的作用就是将文本进行向量化。

  ```python
  from langchain_community.embeddings import DashScopeEmbeddings

  embedding = DashScopeEmbeddings(
      dashscope_api_key="sk-xxx", 
      model="text-embedding-v1"
  )

  print(embedding.embed_query("你好"))
  print(embedding.embed_documents(["早上好", "晚上好"]))
  ```

### 2.2 Prompts

- **通用提示词模板**

  提示词优化在模型应用中非常重要，LangChain 提供了 `PromptTemplate` 类，用来协助提示词优化。

  `PromptTemplate` 类可以通过 `from_template` 方法构建一个基础提示词模板，支持变量的注入，最终生成所需的提示词。

  ```python
  from langchain_core.prompts import PromptTemplate
  from langchain_community.llms import Tongyi

  llm = Tongyi(api_key="sk-xxx", model='qwen-max')

  prompt_template = PromptTemplate.from_template(
      "我的邻居姓{lastname}，刚生了个{gender}娃，帮王取名，直接给出名字，不做解释。"
  )

  # 标准写法
  # prompt_text = prompt_template.format(lastname='张', gender='女')
  # print(llm.invoke(prompt_text))

  # 基于链的写法
  chain = prompt_template | llm
  print(chain.invoke({'lastname': '张', 'gender': '女'}))
  ```

  ::: tip
  提示词模板相比手动拼接字符串的优势：

  - Template 类构建的提示词，在大型工程中更容易做标准化模板

  - Template 类支持 LangChain 框架的链式调用（Runnable 接口）

    - PromptTemplate

    - FewShotPromptTemplate

    - ChatPromptTemplate
  :::

- **FewShot 提示词模板**

  `FewShotPromptTemplate` 类对象构建需要 5 个核心参数：

  - `example_prompt` ：包含示例数据的提示词模板

  - `examples`：示例数据，字典列表

  - `prefix`：组装提示词，示例数据的前缀

  - `suffix`：组装提示词，示例数据的后缀

  - `input_variables`：注入到前缀或后缀的变量列表

  通过 `format` 或 `invoke` 方法组装提示词。

  ```python
  from langchain_core.prompts import PromptTemplate, FewShotPromptTemplate
  from langchain_community.llms import Tongyi

  llm = Tongyi(api_key="sk-b01fa56960e0483ab12dff7a7577129f", model='qwen-max')

  example_prompt = PromptTemplate.from_template("单词：{word}， 反义词：{antonym}")

  example_data = [
      {"word": "good", "antonym": "bad"},
      {"word": "big", "antonym": "small"}
  ]

  few_shot_template = FewShotPromptTemplate(
     example_prompt=example_prompt,                   # 示例模板
     examples=example_data,                           # 示例数据
     prefix="给出单词的反义词，示例如下：",                # 示例数据的前缀
     suffix="请基于上述示例，给出 {input_word} 的反义词",  # 示例数据的后缀
     input_variables=['input_word']                   # 注入前缀/后缀的变量
  )

  prompt_text = few_shot_template.format(input_word="beautiful")
  # prompt_text = few_shot_template.invoke({"input_word": "beautiful"}).to_string()
  print(prompt_text)

  res = llm.invoke(prompt_text)
  print(res)
  ```

  `format` 和 `invoke` 方法：

  - Template 类（PromptTemplate/FewShotPromptTemplate/ChatPromptTemplate）都继承自 BasePromptTemplate 类，拥有 `format` 方法；BasePromptTemplate 类又继承了 Runnable 接口，拥有 `invoke` 方法

  - 区别在于

  ![format 与 invoke 方法区别](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202603011714453.png)

- **Chat 提示词模板**

  `ChatPromptTemplate` 类对象支持注入任意数量的历史会话。

  - 通过 `from_messages` 方法从列表中获取多轮次会话作为聊天的基础模板

  ::: tip
  - `from_template` 仅支持接入一条消息
  - `from_messages` 可以接入一个消息列表
  :::

  ```python
  from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
  from langchain_community.chat_models.tongyi import ChatTongyi

  chat = ChatTongyi(api_key="sk-xxx", model="qwen3-max")

  chat_prompt = ChatPromptTemplate.from_messages([
      ("system", "你是一个边塞诗人"),
      ("human", "请作一首唐诗"),
      MessagesPlaceholder('history'),
      ("human", "仿照之前你给出的唐诗，作一首边塞诗")
  ])

  history_data = [
      ("ai", "锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。"),
      ("human", "再作一首"),
      ("ai", "床前明月光，疑是地上霜。举头望明月，低头思故乡。"),
  ]

  prompt_text = chat_prompt.invoke({'history': history_data}).to_string()
  print(prompt_text)

  res = chat.invoke(prompt_text)
  print(res.content)
  ```

### 2.3 Chains

- **链的基础使用**

  LangChain 中的链将各个组件串联在一起：

  - 成链的各个组件都是 Runnable 接口的子类

  - 通过 '|' 符号组成链

  - 形成的链是 RunnableSerializable 对象（Runnable 接口的子类）

  - 调用 `invoke` 或 `stream` 方法触发整个链的执行

  - 按顺序执行，前一个组件的输出作为下一个组件的输入

  ```python
  from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
  from langchain_community.chat_models.tongyi import ChatTongyi

  chat = ChatTongyi(api_key="sk-xxx", model="qwen3-max")

  chat_prompt = ChatPromptTemplate.from_messages([
      ("system", "你是一个边塞诗人"),
      ("human", "请作一首唐诗"),
      MessagesPlaceholder('history'),
      ("human", "仿照之前你给出的唐诗，作一首边塞诗")
  ])

  history_data = [
      ("ai", "锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。"),
      ("human", "再作一首"),
      ("ai", "床前明月光，疑是地上霜。举头望明月，低头思故乡。"),
  ]

  chain = chat_prompt | chat
  # print(chain.invoke({'history': history_data}).content)
  for chunk in chain.stream({'history': history_data}):
      print(chunk.content, end="", flush=True)
  ```

- **字符串解析器**

  `StrOutputParser` 是 LangChain 内置的简单字符串解析器。

  - 可以将 AIMessage 类转换为基础字符串

  - 可以作为组件加入 Chain（Runnable 接口子类）

  ```python
  from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
  from langchain_community.chat_models.tongyi import ChatTongyi
  from langchain_core.output_parsers import StrOutputParser

  chat = ChatTongyi(api_key="sk-xxx ", model="qwen3-max")

  chat_prompt = ChatPromptTemplate.from_messages([
      ("system", "你是一个边塞诗人"),
      ("human", "请作一首唐诗"),
      MessagesPlaceholder('history'),
      ("human", "仿照之前你给出的唐诗，作一首边塞诗")
  ])

  history_data = [
      ("ai", "锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。"),
      ("human", "再作一首"),
      ("ai", "床前明月光，疑是地上霜。举头望明月，低头思故乡。"),
  ]

  parser = StrOutputParser()

  chain = chat_prompt | chat | parser | chat
  # print(chain.invoke({'history': history_data}).content)
  for chunk in chain.stream({'history': history_data}):
      print(chunk.content, end="", flush=True)
  ```

- **JSON 解析器**

  像这样 `chain = chat_prompt | chat | parser | chat` 构建多模型链是并不标准的，因为**上一个模型的输出，没有被处理就输入下一个模型**。即：

  - 上一个模型的输出，应该作为下一个提示词模板的输入，构建下一个提示词，用来二次调用模型。

  - 模型输出（AIMessage）→ 字典 → 下一个提示词模板（PromptValue）

  - 使用 `JsonOutputParser` 将 AIMessage 对象转换成字典

  ```python
  from langchain_core.prompts import PromptTemplate, ChatPromptTemplate, MessagesPlaceholder
  from langchain_community.chat_models.tongyi import ChatTongyi
  from langchain_core.output_parsers import StrOutputParser, JsonOutputParser

  chat = ChatTongyi(api_key="sk-xxx", model="qwen3-max")

  chat_prompt = ChatPromptTemplate.from_messages([
      ("system", "你是一个边塞诗人"),
      ("human", "请作一首唐诗"),
      MessagesPlaceholder('history'),
      ("human", "仿照之前你给出的唐诗，作一首边塞诗,按照 JSON 格式返回，"
                "key 为 poetry,value 是你作的诗，请严格遵守格式要求！")
  ])

  history_data = [
      ("ai", "锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。"),
      ("human", "再作一首"),
      ("ai", "床前明月光，疑是地上霜。举头望明月，低头思故乡。"),
  ]

  second_prompt = PromptTemplate.from_template(
      "请解析{poetry}这首诗，30字以内。"
  )

  str_parser = StrOutputParser()
  json_parser = JsonOutputParser()

  chain = chat_prompt | chat | json_parser | second_prompt | chat | str_parser
  # print(chain.invoke({'history': history_data}))
  for chunk in chain.stream({'history': history_data}):
      print(chunk, end="", flush=True)
  ```

  ::: tip
  在构建链的时候要注意整体兼容性，注意前后组件的输入输出要求：

  - 提示词模板

    - 输入：dict

    - 输出：PromptValue

  - 模型

    - 输入：PromptValue

    - 输出：AIMessage

  - 字符串解析器

    - 输入： AIMessage

    - 输出：str

  - JSON 解析器

    - 输入：AIMessage

    - 输出：dict
  :::

- **自定义解析**

  除了固定功能的解析器外，我们也可以基于 RunnableLamdba 类，编写 Lambda 匿名函数来完成解析。

  RunnableLamdba 类是 LangChain 内置的，将普通函数转换为 Runnable 接口实例，方便自定义函数作为组件加入 Chain。

  语法：`RunnableLambda(函数对象或 Lambda 匿名函数)`

  ```python
  from langchain_core.prompts import PromptTemplate, ChatPromptTemplate, MessagesPlaceholder
  from langchain_community.chat_models.tongyi import ChatTongyi
  from langchain_core.output_parsers import StrOutputParser, JsonOutputParser
  from langchain_core.runnables import RunnableLambda

  chat = ChatTongyi(api_key="sk-xxx", model="qwen3-max")

  chat_prompt = ChatPromptTemplate.from_messages([
      ("system", "你是一个边塞诗人"),
      ("human", "请作一首唐诗"),
      MessagesPlaceholder('history'),
      ("human", "仿照之前你给出的唐诗，作一首边塞诗,按照 JSON 格式返回，"
                "仅给出诗，不要额外信息！")
  ])

  history_data = [
      ("ai", "锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。"),
      ("human", "再作一首"),
      ("ai", "床前明月光，疑是地上霜。举头望明月，低头思故乡。"),
  ]

  second_prompt = PromptTemplate.from_template(
      "请解析{poetry}这首诗，20字以内。"
  )

  str_parser = StrOutputParser()
  json_parser = JsonOutputParser()
  my_parser = RunnableLambda(lambda ai_message: {'poetry': ai_message.content})

  chain = chat_prompt | chat | my_parser | second_prompt | chat | str_parser
  # print(chain.invoke({'history': history_data}))
  for chunk in chain.stream({'history': history_data}):
      print(chunk, end="", flush=True)
  ```

### 2.4 Memory

- **临时会话记忆**

  如果想要封装历史记录，除了自行维护历史消息外，也可以借助 LangChain 内置的历史记录附加功能。

  LangChain 提供了 History 功能，帮助模型在有历史记忆的情况下回答。

  - 基于 `RunnableWithMessageHistory` 在原有链的基础上创建带有历史记录功能的新链（新 Runnable 实例）

  - 基于 `InMemoryChatMessageHistory` 为历史记录提供内存存储（临时用）

  ```python
  from langchain_core.prompts import PromptTemplate, ChatPromptTemplate, MessagesPlaceholder
  from langchain_community.chat_models.tongyi import ChatTongyi
  from langchain_core.output_parsers import StrOutputParser
  from langchain_core.runnables.history import RunnableWithMessageHistory
  from langchain_core.chat_history import InMemoryChatMessageHistory

  chat = ChatTongyi(api_key="sk-xxx", model="qwen3-max")

  base_prompt = ChatPromptTemplate.from_messages([
      ("system", "请根据历史会话记录回答问题，历史会话："),
      MessagesPlaceholder("chat_history"),
      ("human", "请回答问题：{input}")
  ])

  def print_parser(full_prompts):
      print("*"*20, full_prompts, "*"*20)
      return full_prompts

  str_parser = StrOutputParser()

  base_chain = base_prompt | print_parser | chat | str_parser

  # 会话历史，key是session_id，value是InMemoryChatMessageHistory
  conversation_history = {}

  # 获取会话历史
  def get_history(session_id):
      if session_id not in conversation_history:
          conversation_history[session_id] = InMemoryChatMessageHistory()
      return conversation_history[session_id]

  # 新链：对原有链的增强，附加历史会话
  conversation_chain = RunnableWithMessageHistory(
      base_chain,
      get_history,
      history_messages_key="chat_history",
      input_messages_key="input"
  )

  if __name__ == "__main__":
      # 固定格式，添加LangChain的配置，为当前会话添加session_id
      session_config = {"configurable": {"session_id": "user_001"}}

      conversation_chain.invoke({"input": "小明有两只猫"}, session_config)
      conversation_chain.invoke({"input": "小刚有一只狗"}, session_config)
      print(conversation_chain.invoke({"input": "总共有几只宠物？"}, session_config))
      
  ```

  总结：

  `RunnableWithMessageHistory` 是 LangChain 内 Runnable 接口的实现，主要用于。

  - 创建一个带有历史记忆功能的 Runnable 实例（链）。

  创建时需要提供一个 BaseChatMessageHistory 的具体实现用来存储历史消息。

  - `InMemoryChatMessageHistory` 是 BaseChatMessageHistory 的子类，可以实现在内存中存储历史。

  如果想要在执行链的同时，将提示词打印出来，可以在链中加入自定义函数。

  - 函数的输入（提示词）应原封不动返回，避免破坏原有业务，仅在 return 之前，print 所需信息。

- **长期会话记忆**

  在内存中存储历史会话，一旦程序退出，历史就会消失。我们可以基于 JSON 和本地文件实现长期会话记忆。

  `FileChatMessageHistory` 类实现：基于文件存储会话历史，以 session_id 为文件名，不同 session_id 有不同文件存储消息。

  `FileChatMessageHistory` 类继承 `BaseChatMessageHistory` ，实现三个方法：

  - add_messages：同步添加消息

  - messages：同步获取消息

  - clear：同步清除消息

  ```python
  import os, json
  from typing import Sequence

  from langchain_community.chat_models import ChatTongyi
  from langchain_core.chat_history import BaseChatMessageHistory
  from langchain_core.messages import message_to_dict, messages_from_dict, BaseMessage
  from langchain_core.output_parsers import StrOutputParser
  from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
  from langchain_core.runnables import RunnableWithMessageHistory

  # message_to_dict: 单个消息对象（BaseMessage类实例） -> 字典
  # messages_from_dict: 字典列表 -> BaseMessage类实例列表
  # AIMessage、HumanMessage、SystemMessage 都是BaseMessage的子类

  class FileChatMessageHistory(BaseChatMessageHistory):
      def __init__(self, session_id: str, storage_path: str):
          self.session_id = session_id      # 会话ID
          self.storage_path = storage_path  # 不同ID的会话历史的存储路径
          # 会话历史文件路径
          self.file_path = os.path.join(self.storage_path, self.session_id + ".json")
          # 确保文件夹存在
          os.makedirs(os.path.dirname(self.file_path), exist_ok=True)

      def add_message(self, message: BaseMessage) -> None:
          """参数为单个BaseMessage，而非Sequence"""
          # 读取已有消息
          all_messages = self.messages  # 直接使用@property装饰的messages属性
          # 追加单个消息（而非extend）
          all_messages.append(message)
          # 转换为字典列表并写入文件
          message_dicts = [message_to_dict(msg) for msg in all_messages]
          with open(self.file_path, "w", encoding="utf-8") as f:
              json.dump(message_dicts, f, ensure_ascii=False)  # 加ensure_ascii=False避免中文乱码

      @property  # property装饰器将messages方法转变成成员属性
      def messages(self) -> list[BaseMessage]:
          try:
              with open(self.file_path, "r", encoding="utf-8") as f:
                  message_data = json.load(f)
                  return messages_from_dict(message_data)
          except FileNotFoundError:
              return []

      def clear(self) -> None:
          with open(self.file_path, "w", encoding="utf-8") as f:
              json.dump([], f)

  chat = ChatTongyi(api_key="sk-xxx", model="qwen3-max")

  base_prompt = ChatPromptTemplate.from_messages([
      ("system", "请根据历史会话记录回答问题，历史会话："),
      MessagesPlaceholder("chat_history"),
      ("human", "请回答问题：{input}")
  ])

  def print_parser(full_prompts):
      print("*" * 20, full_prompts, "*" * 20)
      return full_prompts

  str_parser = StrOutputParser()

  base_chain = base_prompt | print_parser | chat | str_parser

  # 获取会话历史
  def get_history(session_id):
      return FileChatMessageHistory(session_id, "./chat_history")

  # 新链：对原有链的增强，附加历史会话
  conversation_chain = RunnableWithMessageHistory(
      base_chain,
      get_history,
      history_messages_key="chat_history",
      input_messages_key="input"
  )

  if __name__ == "__main__":
      # 固定格式，添加LangChain的配置，为当前会话添加session_id
      session_config = {"configurable": {"session_id": "user_001"}}

      # conversation_chain.invoke({"input": "小明有两只猫"}, session_config)
      # conversation_chain.invoke({"input": "小刚有一只狗"}, session_config)
      print(conversation_chain.invoke({"input": "总共有几只宠物？"}, session_config))
  ```

### 2.5 Document loaders

文档加载器提供了一套标准接口，用于将不同来源（CSV/PDF/JSON等）的数据读取为 LangChain 的文档格式。

- 文档加载器均继承于 BaseLoader 类。

- 返回 `Document` 类对象。

  - `metedata` 文档元数据

  - `page_content` 文档内容

- `load` 方法一次性批量加载（返回 Document 对象列表）。

- `lazy_load` 方法得到生成器对象，可用 for 循环依次获取单个 Document 对象，适用于大文档，避免内存溢出。

- **CSVLoader**

  CSVLoader 初始化的主要参数：

  - `file_path` 指定文件路径

  - `encoding` 文件编码

  - `source_column` 指定数据来源

  - `csv_args` csv 参数字典

    - `delimiter` 分隔符

    - `quotechar` 带分隔符文本的包裹符
    
    - `fieldnames` 列名，当文件无列名时指定

```python
from langchain_community.document_loaders import CSVLoader

loader = CSVLoader(
    file_path="./data/stu.csv",
    encoding="utf-8",
    csv_args={
        "delimiter": ",",  # 分隔符
        "quotechar": '"',  # 带分隔符文本的包裹符
        "fieldnames": ["name", "age", "gender", "hobby"]  # 列名, 文件无列名时指定
    },
)

# documents = loader.load()
# print(documents)
for document in loader.lazy_load():
    print(document)
```

- **JSONLoader**

  JSONLoader 依赖 jq 库，通过 `pip install jq` 安装。

  JSONLoader 初始化的主要参数：

  - `file_path` 指定文件路径，必填

  - `jq_schema` jq 解析语法，必填。

    - `.` 表示根

    - `[]` 表示数组

    - `.name` 表示从根取得 name 的值

    - `.hobby[1]` 表示从 hobby 数组取得第二个元素

    - `.[]` 表示将数组内每个元素都取到

    - `.[].name` 表示数组内每个字典（Json 对象）的 name 的值

  - `text_content` 抽取的是否是字符串，默认 True，非必填

  - `json_lines` 是否是 JsonLines 文件，默认 False，非必填

    - JSON Lines 文件的核心规范是：每行一个独立 JSON 对象，无外层数组、无行尾逗号，编码为 UTF-8，是大数据处理和 LLM 数据加载中常用的格式。

  ```python
  from langchain_community.document_loaders import JSONLoader

  loader = JSONLoader(
      # file_path="./data/stu.json",
      # file_path="./data/stus.json",
      file_path="data/stus.jsonl",
      jq_schema=".name",
      text_content=False,
      json_lines=True
  )

  for document in loader.lazy_load():
      print(document)
  ```

- **PyPDFLoader**

  LangChain 内支持许多 PDF 加载器。PyPDFLoader 加载器依赖 PyPDF 库，通过命令 `pip install pypdf` 安装。

  PyPDFLoader 初始化的主要参数：

  - `file_path` 指定文件路径

  - `mode` 读取模式，可选 page（按页数分割获取多个 Document）/single（获取单个 Document）

  - `password` 文件密码

  ```python
  from langchain_community.document_loaders import PyPDFLoader

  loader = PyPDFLoader(
      file_path="data/test.pdf",   # 文件路径
      mode="page",                 # 读取模式，可选 page（按页数分割获取多个 Document）/single（获取单个 Document
      # password="123456"          # 密码
  )

  i = 0
  for document in loader.lazy_load():
      print(document)
      i += 1
      print("="*20, i, "="*20)
  ```

- **TextLoader 和文档分割器**

  TextLoader 读取文本文件（如 .txt），将全部内容放入一个 Document 对象，返回仅有一个 Document 对象的列表。

  TextLoader 初始化的主要参数：

  - `file_path` 指定文件路径

  - `encoding` 文件编码

  RecursiveCharacterTextSplitter（递归字符文本分割器）是 LangChain 官方推荐的默认分割器，通过 `split_documents` 方法将文本划分，得到多个 Document 对象。它在保持上下文完整性和控制分块大小之间取得了良好平衡。

  RecursiveCharacterTextSplitter 初始化的主要参数：

  - `chunk_size` 分块的最大字符数

  - `chunk_overlap` 分块间的重叠字符数

  - `separators` 文本自然段分割的依据符号

  - `length_function` 统计字符数的函数

  ```python
  from langchain_community.document_loaders import TextLoader
  from langchain_text_splitters import RecursiveCharacterTextSplitter

  loader = TextLoader(
      file_path="data/test.txt",
      encoding="utf-8"
  )

  splitter = RecursiveCharacterTextSplitter(
      chunk_size=100,
      chunk_overlap=10,
      separators=["\\n\\n", "\\n", " ", "", "?", "!", "？", "！"],
      length_function=len  # 使用 python 默认方法获取字符串长度
  )

  documents = loader.load()
  print(documents)

  split_documents =splitter.split_documents(documents)
  print(split_documents)
  print(len(split_documents))
  ```

### 2.6 向量存储

基于 LangChain 的向量存储，存储嵌入数据，并执行相似性搜索。

LangChain 为向量存储提供了统一接口：

- `add_documents`

  - `documents` 需要添加的文档列表

  - `ids` 文档对应的 ID 列表

- `delete`

  - `ids` 指定要删除的 ID 列表

- `similarity_search` → [Document]

  - `query` 要查询的文本

  - `k` 匹配数

- **内存向量存储**

  通过 `InMemoryVectorStore` 类创建实例，参数：

  - `embedding` 指定嵌入模型

  ```python
  from langchain_community.document_loaders import CSVLoader
  from langchain_community.embeddings import DashScopeEmbeddings
  from langchain_core.vectorstores import InMemoryVectorStore

  loader = CSVLoader(
      file_path="data/info.csv",
      encoding="utf-8",
      source_column="source"      # 指定数据来源
  )

  vector_store = InMemoryVectorStore(
      embedding=DashScopeEmbeddings(dashscope_api_key="sk-xxx")
  )

  document = loader.load()

  vector_store.add_documents(
      documents=document, 
      ids=['id_'+str(i+1) for i in range(len(document))]
  )

  vector_store.delete(ids=['id_1'])

  res = vector_store.similarity_search(
      query="学python容易吗",
      k=2,
      filter=lambda doc: doc.metadata.get("source") == "极客时间"
  )
  print(res)
  ```

- **外部向量存储**

  通过 `Chroma` 类创建实例，参数：

  - `collection_name` 集合名字，相当于数据库表名

  - `embedding_function` 嵌入模型

  - `persist_directory` 向量数据库存储路径

  ```python
  from langchain_community.document_loaders import CSVLoader
  from langchain_community.embeddings import DashScopeEmbeddings
  from langchain_chroma import Chroma

  loader = CSVLoader(
      file_path="data/info.csv",
      encoding="utf-8",
      source_column="source"      # 指定数据来源
  )

  vector_store = Chroma(
      collection_name="info",
      embedding_function=DashScopeEmbeddings(dashscope_api_key="sk-xxx"),
      persist_directory="data/chroma_db"
  )

  document = loader.load()

  vector_store.add_documents(
      documents=document,
      ids=['id_'+str(i+1) for i in range(len(document))]
  )

  vector_store.delete(ids=['id_1'])

  res = vector_store.similarity_search(
      query="学python容易吗",
      k=2,
      filter={"source": "黑马程序员"}
  )
  print(res)
  ```

## 3 项目构建

### 3.1 基于向量检索构建提示词

流程：

- 先通过向量存储检索匹配信息：

  - 向量存储实例中，通过 `add_texts(list[str])` 方法可以快速添加到向量库中。

- 将用户提问和匹配信息一同封装到提示词模板中提问模型。

```python
from langchain_community.chat_models.tongyi import ChatTongyi
from langchain_community.embeddings import DashScopeEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_core.output_parsers import StrOutputParser

chat = ChatTongyi(
    dashscope_api_key="sk-xxx",
    model="qwen3-max"
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个智能助手。以我提供的参考资料为依据，简洁而专业地回答用户问题。参考资料：{context}"),
    ("human", "用户提问：{input}")
])

vector_store = InMemoryVectorStore(
    embedding=DashScopeEmbeddings(
        dashscope_api_key="sk-xxx",
        model="text-embedding-v4"
    )
)

vector_store.add_texts(["减肥就是要少吃多练", "在降脂减肥过程中清淡少油控制卡路里摄入并运动起来非常重要", "跑步是很好的运动"])

question = "如何减肥"
context = ""

for doc in vector_store.similarity_search(query=question, k=2):
    print(doc.page_content)
    context += doc.page_content + "\\n"

def print_parser(full_prompts):
    print("*"*20, full_prompts, "*"*20)
    return full_prompts

chain = prompt | print_parser | chat | StrOutputParser()

print(chain.invoke({"input": question, "context": context}))
```

### 3.2 向量检索入链

在链 `chain = retriever | prompt | print_parser | chat | StrOutputParser()` 中，

- `retriever`

  - 输入：用户提问 str

  - 输出：检索结果 list[Document]

- `prompt`

  - 输入：用户提问+检索结果 dict

  - 输出：提示词 PromptValue

存在两个潜在的问题：

1. 如何在链 `retriever | prompt` 中保留用户提问？

2. 如何将检索结果由 list[Document] 转换为 dict？

解决方案：

1. 使用 `RunnablePassthrough` 类截留用户提问

2. 自定义检索结果转换方法

```python
from langchain_community.chat_models.tongyi import ChatTongyi
from langchain_community.embeddings import DashScopeEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_core.output_parsers import StrOutputParser

chat = ChatTongyi(
    dashscope_api_key="sk-xxx",
    model="qwen3-max"
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个智能助手。以我提供的参考资料为依据，简洁而专业地回答用户问题。参考资料：{context}"),
    ("human", "用户提问：{input}")
])

vector_store = InMemoryVectorStore(
    embedding=DashScopeEmbeddings(
        dashscope_api_key="sk-xxx",
        model="text-embedding-v4"
    )
)

vector_store.add_texts(["减肥就是要少吃多练", "在降脂减肥过程中清淡少油控制卡路里摄入并运动起来非常重要", "跑步是很好的运动"])

retriever = vector_store.as_retriever(search_kwargs={"k": 2})

question = "如何减肥"


def format_parser(documents):
    context = ""
    for doc in documents:
        print(doc.page_content)
        context += doc.page_content + "\n"
    return context


def print_parser(full_prompts):
    print("*"*20, full_prompts, "*"*20)
    return full_prompts


chain = (
    {"input": RunnablePassthrough(), "context": retriever | format_parser } 
    | prompt | print_parser | chat | StrOutputParser()
)

print(chain.invoke(question))
```
