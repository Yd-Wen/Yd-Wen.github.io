---
date: 2026-02-16
title: RAG
icon: rag
category: AI 应用开发
tag: 
    - RAG
---

## 1 简介

LLM 幻觉解决方案：

1. 检索增强生成/RAG

2. 微调/Fine-tuning

LLM 为什么要使用 RAG？

- 知识时效性

- 专业领域盲区

- 幻觉问题

- 数据安全性

![RAG 概念图](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202603011638552.png)

RAG：

- Retrive（检索）：根据问题从知识库检索出相关内容文档

- Augment（增强）：将问题和检索到的内容上下文填充到 Prompt

- Generate（生成）：检索增强提示输入到 LLM 生成答案

- 为大模型提供实时的私域知识支持，减少幻觉的情况；基于知识库检索与用户问题相关知识，将检索到的知识与用户的问题一起提交给大模型，由大模型总结、归纳、整理，生成易于理解的自然语言回答用户的问题。

引入 ragas 评估回答：

- 忠实度（faithfulness）：回答是否严格基于向量知识库

  - 提示词：严格告诉模型做什么（未查找到，请联系人工客服）

  - 显示引用：给出参考资料

- 回答相关性（answer_relevancy）：回答是否简洁明了

- 上下文召回率（context_recall）：向量知识库中所有向量中包含相关答案的向量占比。

  - 强化学习

  - 索引/多样化检索（表格形式的文档难以计算语义相似度，在向量知识库中为表格添加摘要，检索语义相似度检索到摘要，通过映射 ID 得到表格）

- 上下文精度（context_precision）：检索到的 top_k 个向量中包含相关答案的向量占比，生产环境一般要求 90% 以上。

  - 文档清洗

  - 重排序：把包含相关答案的向量排序到 top_k 个向量中

  - 更换更强大的嵌入模型

总结：RAG（Retrieval-Augmented Generation）即检索增强生成，为大模型提供了从特定数据源检索到的信息，以此来修正和补充生成的答案。可以概括为公式：RAG = 检索技术 + LLM 提示词。

## 2 工作原理

工作流程：

![RAG 工作流程图](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202603011639869.png)

RAG 标准流程：

RAG 标准流程由索引（Indexing）、检索（Retriever）、生成（Generation）三个核心阶段组成。

- 索引阶段：通过处理多种来源多种格式的文档提取其中文本，将其切分为标准长度的文本块（chunk），并进行嵌入向量化（embedding），向量存储在向量数据库（vector database）中。

  - 加载文件

  - 内容提取

  - 文本分割，形成 chunk

  - 文本向量化

  - 存向量数据库

- 检索阶段：用户输入的查询被转化为向量表示，通过相似度匹配从向量数据库中检索出最相关的文本块。

  - query 向量化

  - 在文本向量中匹配出与问题向量相似的 top_k 个

- 生成阶段：检索到的相关文本与原始查询共同构成提示词（Prompt），输入大语言模型（LLM），生成精确且具备上下文关联的回答。

  - 匹配出的文本作为上下文和问题一起添加到 prompt 中

  - 提交给 LLM 生成答案

![RAG 标准流程图](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202603011640884.png)

## 3 向量

向量（Vector）就是文本的“数学身份证”，它把一段文字的语义信息，转换成一串固定长度的数字列表，让计算机能“看懂”文字的含义并做相似度计算。

- 向量的计算（文本嵌入过程），可借助**文本嵌入模型**实现，如 text-embedding-v1

- 向量的匹配通过相似度算法实现，如余弦相似度

- 向量表示文本在多个抽象语义特征方面的强度

  - 向量维度代表模型用多少个抽象语义特征来描述文本

  - 维度越多，语义匹配越精确，计算越复杂，需要在精度和性能之间取得平衡

- 余弦相似度：

  - 向量的数字序列共同决定了向量在高维空间的方向和长度，而余弦相似度主要是关注夹角，夹角越小越相似，即余弦相似度主要匹配的是：同向（无所谓长度）。

  - 在文本语义匹配中，余弦相似度是衡量两个向量方向相似度的核心算法。

  - 余弦相似度 = 两个向量的点积 / 两个向量的模长的乘积

  - $$ cos(\vec{A}, \vec{B}) = \frac{\vec{A} \cdot \vec{B}}{\|\vec{A}\| \|\vec{B}\|} $$

  - 点积：两个向量在同维度的乘积之和

  - 模长：单个向量不同维度的平方和开根号

## 4 项目案例：服装商城智能客服

RAG 开发主要分为 2 条线：

- 离线处理：向私有数据库（向量存储）源源不断添加私有知识文档

  - 向知识库添加来自未来的知识文档（基于模型训练时间）

  - 向模型添加私有知识文档

  - 给出模型参考资料，规避模型幻觉（一本正经的胡说八道）

- 在线处理：用户提问会先基于私有知识库做检索，获取参考资料，同步组装新提示词询问大模型获取结果

“服装商城智能客服”项目结构：

![服装商城智能客服项目结构图](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202603011640451.png)

### 4.1 离线处理

![离线处理流程图](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202603011641101.png)

- 文件上传：

  - `app_file_uploader`：基于 Streamlit 框架开发 WEB 服务，完成用户上传文件（更新知识库）功能。

  - Streamlit 安装： `pip install streamlit`

  - Streamlit 项目运行：在 conda 环境下输入命令 `streamlit run app_file_uploader.py`

  - Streamlit 状态管理：使用 session-state，字典，默认为空字典

  ```python
  """
  基于 streamlit 的 WEB 上传服务
  pip install streamlit

  Streamlit: 当WEB页面刷新，代码重新运行
      - 解决方案: 使用session-state, 字典, 默认为空字典
  """
  import time

  import streamlit as st
  from knowledge_base import KnowledgeBaseService

  if "service" not in st.session_state:
      st.session_state.service = KnowledgeBaseService()

  # 添加网页标题
  st.title("知识库更新")

  # 文件上传控件
  uploader_file = st.file_uploader(
      label="请上传TXT文件",
      type=["txt"],
      accept_multiple_files=False  # 是否允许上传多个文件
  )

  if uploader_file:
      # 提取文件信息
      file_name = uploader_file.name
      file_type = uploader_file.type
      file_size = uploader_file.size / 1024   # KB

      st.subheader(f"文件名：{file_name}")
      st.write(f"文件类型：{file_type}， 文件大小：{file_size:.2f}KB")

      # get_value -> bytes -> decode('utf-8)
      text = uploader_file.getvalue().decode('utf-8')

      # 上传
      with st.spinner("上传中..."):
          time.sleep(1)
          st.write(st.session_state.service.upload(text, file_name))
  ```

- 知识库：

  - `knowledge_base`：使用 chroma 向量数据库存储文档知识，通过 md5 值完成去重（避免重复上传相同文件）。

  - 通过哈希函数获取 MD5 值：

  ```python
  """
  知识库
  """
  import os
  import hashlib
  import config_data as config

  def check_md5(md5_str) -> bool:
      """
      检查MD5字符串是否已经处理过
      :param md5_str:
      :return:
      """
      if not os.path.exists(config.md5_path):
          # 文件不存在
          open(config.md5_path, 'w', encoding='utf-8').close()
          return False
      else:
          for line in open(config.md5_path, 'r', encoding='utf-8').readlines():
              line = line.strip()  # 去掉换行符
              if line == md5_str:
                  # 已经处理过
                  return True
          return False

  def save_md5(md5_str) -> None:
      """
      保存MD5字符串，记录到文件保存
      :param md5_str:
      :return:
      """
      # 追加模式
      with open(config.md5_path, 'a', encoding='utf-8') as f:
          f.write(md5_str + '\\n')

  def get_md5(file_str, encoding='utf-8') -> str:
      """
      文件内容转换成MD5值
      :param file_str:
      :param encoding:
      :return:
      """
      str_bytes = file_str.encode(encoding)    # 字符串转字节流
      md5 = hashlib.md5()                 # 创建MD5对象
      md5.update(str_bytes)               # 更新MD5对象
      md5_hex = md5.hexdigest()           # 获取MD5的十六进制字符串
      return md5_hex

  if __name__ == '__main__':
      r1 = get_md5('123456')
      r2 = get_md5('123465')
      r3 = get_md5('123456')
      print(r1, r2, r3)
      save_md5(r1)
      print(check_md5("e10adc3949ba59abbe56e057f20f883e"))
  ```

  - 知识库上传步骤：去重、分割、存储、记录（MD5，标记已存储）

  ```python
  class KnowledgeBaseService:
      """
      知识库
      """
      def __init__(self):
          os.makedirs(config.persist_directory, exist_ok=True)  # 创建数据库目录, 如果已存在则不创建
          # Chroma 数据库实例
          self.chroma = Chroma(
              collection_name=config.collection_name,
              embedding_function=DashScopeEmbeddings(dashscope_api_key=config.dashscope_api_key,
                                                     model=config.embedding_model),
              persist_directory=config.persist_directory
          )
          # 文本分割器实例
          self.splitter = RecursiveCharacterTextSplitter(
              chunk_size=config.chunk_size,
              chunk_overlap=config.chunk_overlap,
              separators=config.separators,
              length_function=len
          )

      def upload(self, data, file_name):
          """
          上传文件到知识库
          :param data:
          :param file_name:
          :return:
          """
          # 去重
          md5_hex = get_md5(data)
          if check_md5(md5_hex):
              return "【跳过】知识库已存在该文件"
          # 分割
          if len(data) > config.max_split_characters:
              knowledge_chunks: list[str] = self.splitter.split_text(data)
          else:
              knowledge_chunks = [data]
          # 添加到知识库
          self.chroma.add_texts(
              texts=knowledge_chunks,
              metadatas=[{"source": file_name, "create_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}]
          )
          # 保存MD5
          save_md5(md5_hex)

          return "【成功】文件存入知识库"

  if __name__ == '__main__':
      kb = KnowledgeBaseService()
      res = kb.upload("test", "test.txt")
      print(res)
  ```

### 4.2 在线处理

![在线处理流程图](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/202603011644506.png)

- 向量存储：

  - `vector_store` ：创建 VectorStoreService 类，定义 `get_retriever` 方法返回检索器，用于入链。

  ```python
  from langchain_chroma import Chroma
  from langchain_community.embeddings import DashScopeEmbeddings
  import config_data as config

  class VectorStoreService:
      def  __init__(self, embedding):
          self.vector_store = Chroma(
              collection_name=config.collection_name,
              embedding_function=embedding,
              persist_directory=config.persist_directory,
          )

      def get_retriever(self):
          return self.vector_store.as_retriever(search_kwargs={"k": config.similarity_search_k})

  if __name__ == "__main__":
      retriever = VectorStoreService(
          embedding=DashScopeEmbeddings(dashscope_api_key=config.dashscope_api_key, 
                                        model=config.embedding_model_name)
      ).get_retriever()
      print(retriever.invoke("我的身高150cm，该穿多大尺码"))
      print(len(retriever.invoke("我的身高150cm，该穿多大尺码")))
  ```

- RAG 核心服务：

  - `rag` ：创建 RagService 类，添加 vector_store、prompt_template、chat_model 属性，通过 `__get_chain` 方法得到链。**该链的输入可以是字符串**。

  - 添加 `format_docs` 方法：将检索结果由文档列表（检索器输出）转字符串（提示词输入）

  ```python
  from vector_store import VectorStoreService
  from langchain_community.embeddings import DashScopeEmbeddings
  from langchain_core.prompts import ChatPromptTemplate
  from langchain_community.chat_models.tongyi import ChatTongyi
  from langchain_core.runnables import RunnablePassthrough
  from langchain_core.output_parsers import StrOutputParser
  import config_data as config

  class RAGService:
      def __init__(self):
          self.vector_store = VectorStoreService(
              embedding=DashScopeEmbeddings(dashscope_api_key=config.dashscope_api_key,
                                            model=config.embedding_model_name),
          )
          self.prompt_template = ChatPromptTemplate.from_messages([
              ("system", "以我提供的参考资料为依据，简介和专业地回答用户问题。参考资料：{context}。"),
              ("human", "请回答用户提问：{question}")
          ])
          self.chat_model = ChatTongyi(
              dashscope_api_key=config.dashscope_api_key,
              model=config.chat_model_name
          )
          self.chain = self.__get_chain()

      def __get_chain(self):
          retriever = self.vector_store.get_retriever()

          def format_docs(docs):
              if not docs:
                  return "没有参考资料"
              formatted_str = ""
              for doc in docs:
                  formatted_str += f"文档片段：{doc.page_content}\\n文档元数据：{doc.metadata}\\n\\n"
              return formatted_str

          def print_prompt(prompt):
              print("="*20, prompt, "="*20)
              return prompt

          chain = (
              {
                  "question": RunnablePassthrough(),
                  "context": retriever | format_docs
              } | self.prompt_template | print_prompt | self.chat_model | StrOutputParser()
          )
          return chain

  if __name__ == "__main__":
      rag = RAGService()
      print(rag.chain.invoke("我的身高160cm，该穿多大尺码"))
  ```

- 会话历史：

  - `File_history_store` ：创建 `FileChatMessageHistory` 类，复杂会话历史的管理。参考[长期会话记忆](https://www.notion.so/3061b43b79dc804f86edcf401de597eb?pvs=21)。通过 `get_history` 方法获取该类实例。

  ```python
  def get_history(session_id):
      return FileChatMessageHistory(session_id, config.history_path)
  ```

  - `rag` ：进行相应修改

    - 修改 prompt_template 属性；

    - 修改 chain（历史记录入链后， `invoke` 方法的输入是字典，而不是字符串）

      - 添加 `format_for_retriever` 方法：将包含历史记录的字典（输入）转字符串（检索器输入）

      - 添加 `format_for_prompt_template` 方法：将提示词字典重新抽取组合

  ```python
  from langchain_community.embeddings import DashScopeEmbeddings
  from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
  from langchain_community.chat_models.tongyi import ChatTongyi
  from langchain_core.runnables import RunnablePassthrough, RunnableWithMessageHistory, RunnableLambda
  from langchain_core.output_parsers import StrOutputParser
  from vector_store import VectorStoreService
  import config_data as config
  from file_history_store import get_history
  from langchain_core.documents import Document

  class RAGService:
      def __init__(self):
          self.vector_store = VectorStoreService(
              embedding=DashScopeEmbeddings(dashscope_api_key=config.dashscope_api_key,
                                            model=config.embedding_model_name),
          )
          self.prompt_template = ChatPromptTemplate.from_messages([
              ("system", "以我提供的参考资料为依据，简介和专业地回答用户问题。参考资料：{context}。"),
              ("system", "并且我提供用户的对话历史记录。如下："),
              MessagesPlaceholder("history"),
              ("human", "请回答用户提问：{question}")
          ])
          self.chat_model = ChatTongyi(
              dashscope_api_key=config.dashscope_api_key,
              model=config.chat_model_name
          )
          self.chain = self.__get_chain()

      def __get_chain(self):
          retriever = self.vector_store.get_retriever()

          def format_for_retriever(value: dict) -> str:
              """包含历史记录的字典转字符串 value {'question‘: '', 'history': []}"""
              return value['question']

          def format_docs(docs: list[Document]) -> str:
              """检索器检索结果由文档列表转字符串"""
              if not docs:
                  return "没有参考资料"
              formatted_str = ""
              for doc in docs:
                  formatted_str += f"文档片段：{doc.page_content}\\n文档元数据：{doc.metadata}\\n\\n"
              return formatted_str

          def format_for_prompt_template(prompt: dict):
              """
              提示词提取
              {'question': {'question':'', 'history': []}, 'context': ''} ->
              {'question':'', 'history': [], 'context': ''}
              """
              new_prompt = {
                  "question": prompt['question']['question'],
                  "history": prompt['question']['history'],
                  "context": prompt['context']
              }
              return new_prompt

          def print_prompt(prompt):
              print("="*20, prompt, "="*20)
              return prompt

          chain = (
              {
                  "question": RunnablePassthrough(),
                  "context":  RunnableLambda(format_for_retriever) | retriever | format_docs
              } | RunnableLambda(format_for_prompt_template) | self.prompt_template | print_prompt | self.chat_model | StrOutputParser()
          )

          conversation_chain = RunnableWithMessageHistory(
              chain,
              get_history,
              history_messages_key="history",
              input_messages_key="question"
          )

          return conversation_chain

  if __name__ == "__main__":
      # session_id
      session_config = {
          "configurable": {
              "session_id": "user_001"
          }
      }
      rag = RAGService()
      # print(rag.chain.invoke({"question": "我的身高160cm，该穿多大尺码"}, session_config))
      print(rag.chain.invoke({"question": "春天适合穿什么颜色的衣服"}, session_config))
  ```

- 聊天页面开发：

  ```python
  import time
  import streamlit as st
  from rag import RAGService
  import config_data as config

  # 添加网页标题
  st.title("智能客服")
  st.divider()  # 分割线

  if "rag" not in st.session_state:
      st.session_state.rag = RAGService()

  if "message" not in st.session_state:
      st.session_state.message = [
          {"role": "assistant", "content": "我是一个智能助手，有什么可以帮助您？"}
      ]

  for message in st.session_state.message:
      st.chat_message(message['role']).write(message['content'])

  # 输入栏
  prompt = st.chat_input("请输入问题")

  if prompt:
      st.chat_message("user").write(prompt)
      st.session_state.message.append({"role": "user", "content": prompt})
      ai_res_list = []
      with st.spinner("AI思考中..."):
          res_stream = st.session_state.rag.chain.stream({"question": prompt}, config.session_config)
          # yield
          def capture(generator, cache_list):
              for chunk in generator:
                  cache_list.append(chunk)
                  yield chunk
          st.chat_message("assistant").write_stream(capture(res_stream, ai_res_list))
          st.session_state.message.append({"role": "assistant", "content": "".join(ai_res_list)})
  ```
