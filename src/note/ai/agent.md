---
date: 2026-01-16
title: Agent
icon: agent
category: 
  - 笔记
  - AI 应用开发
tag: 
  - Agent
  - ReAct
---

## 1 概念

大语言模型可以接受输入，可以分析和推理，可以输出文字、代码、媒体，但无法像人类一样拥有规划思考能力、运用各种工具和物理世界互动能力、人类记忆能力。

AI Agent 时基于 LLM 的能够自主理解、规划、决策、执行复杂任务的智能体。其设计目的是为了处理那些简单的语言模型可能无法直接解决的问题，尤其是当这些任务涉及多个步骤或需要外部数据源的情况。

- 没有 Agent 时，LLM 只能基于自身训练数据回答问题，遇到需要实时数据、复杂计算、外部工具调用的场景就会卡壳
- 有了 Agent 时，LLM 就像一个“指挥官”，能思考任务步骤 -> 选择合适工具 -> 执行工具调用 -> 根据结果调整策略，直到完成任务
- Agent = LLM（大脑） + 工具（手脚） + 决策逻辑（思维），是让 LLM 从“只会回答“升级为”会做事（影响现实世界）“的智能助手

![Agent](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260328094207858.png)

### 1.1 流程图

![Agent 流程图](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301181643706.png)

- 子任务分解

  通过 LLM 使得智能体可以把大型任务分解为更小的、更可控的子任务，从而能够有效完成复杂的任务。

  **思维链**（Chain of Thoughts, CoT）是一种比较标准的提示技术，能显著提升 LLM 完成复杂任务的效果。当我们要求 LLM think step by step 时，LLM 会将问题分解为多个步骤，使得输出结果更加准确。这是一种线性的思维方式。

  思维树（Tree of Thoughts, ToT）是对 CoT 的进一步扩展，扩展多个分支得到思维树。使用启发式方法评估每个推理分支对解决问题的贡献。

### 1.2 记忆（Memory）

AI Agent 的记忆机制：

- 形成记忆：LLM 在包含大量世界知识的数据集上进行预训练。

- 短期记忆：执行任务过程中所产生的信息，如某个工具或子任务执行的结果会写入短期记忆。短期记忆在任务过程中产生和暂存，任务结束后清除。

- 长期记忆：长时间保留的信息。一般是外部知识库，通常用向量数据库来存储和检索。

### 1.3 工具（Tool）

AI Agent 可以通过调用外部 API 来获取模型权重（预训练后难以修改模型权重）中缺少的额外信息，从而提升 LLM 的能力。

## 2 Agent 框架

### 2.1 Plan-and-Execute

计划和执行（Plan-and-Execute）框架侧重于先规划一系列行动，然后执行。适用于比较复杂的项目管理或需要多步决策的场景。

![Plan-and-Execute 框架](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301181750763.png)

### 2.2 Self-Ask

自问自答（Self-Ask）允许 LLM 对自己提问并回答，以提高回答质量。适用于需要深入分析或提供创造性解决方案（如创意写作）的场景。

### 2.3 Thinking and Self-Refection

思考和自我反思（Thinking and Self-Refection）框架通过不断自我评估以学习和改进决策过程。适用于模拟和实现复杂决策的场景。

![Thinking and Self-Refection 框架](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301181826337.png)

### 2.4 ReAct

ReAct 框架由[ReAct](https://arxiv.org/pdf/2210.03629)论文提出，通过结合推理（Reasoning）和行动（Acting）来提高推理和决策效果。

![ReAct 框架](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301181854816.png)

Agent ReAct 是大模型智能体的核心思考和行动框架，全称 Reasoning + Acting （推理 + 行动），是让 Agent 像人一样思考问题 -> 制定策略 -> 执行行动 -> 验证结果的关键逻辑。

简单来说，ReAct 让 Agent 不再是”直接回答问题“，而是通过”自然语言思考过程“指导工具调用，一步步解决复杂问题，完美适配需要多步推理、工具协作的场景（如智能客服、报告生成、任务规划等）。

一个典型的 ReAct 范式如图所示：

- 思考 Reasoning：分析问题，判断现有信息是否足够，明确下一步，即模型决策是否需要调用外部工具获取更多信息用来回答问题

- 行动 Acting：执行思考阶段指定的策略，即基于模型决策结果，调用工具获取信息

- 观察 Observation：获取行动的结果，提取有效信息，即获取工具返回值，为下一轮思考提供信息

- （再）思考 -> （再）行动 -> （再）观察 -> 循环往复直到结束

  ![ReAct 范式](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260328120506220.png)





