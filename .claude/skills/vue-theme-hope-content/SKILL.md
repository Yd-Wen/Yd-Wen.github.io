---
name: vue-theme-hope-content
description: 笔记、随笔、项目、教程的创建与管理规范指南。基于 VuePress Theme Hope 构建的个人博客内容管理系统。
---

# VuePress Theme Hope 内容管理规范

本文档定义了本项目四类内容（笔记、随笔、项目、教程）的创建与管理规范。

---

## 一、内容分类概览

| 类型 | 文件夹 | 说明 |
|------|--------|------|
| **笔记** | `src/note/` | 系统性学习笔记，按知识领域分类 |
| **随笔** | `src/piece/` | 碎片化思考、文章、诗歌等 |
| **项目** | `src/project/` | 项目文档、开发记录 |
| **教程** | `src/tutorial/` | 步骤指南、操作教程 |

---

## 二、各类内容详解

### 2.1 笔记（note）

#### 存储位置
`src/note/`

#### 分类结构

| 分类目录 | 分类名称 | 说明 |
|---------|---------|------|
| `language/` | 编程语言 | Markdown、LaTeX、C++、HTML、CSS、JavaScript、Python、Java 等 |
| `frontend/` | 前端开发 | Vue、React、Uniapp、Debug、Emmet 等 |
| `backend/` | 后端开发 | Spring Boot、FastAPI、Unicloud 等 |
| `big_data/` | 大数据 | 大数据技术、数据挖矿、物联网、NoSQL 等 |
| `machine_learning/` | 机器学习 | 各类机器学习算法笔记 |
| `deep_learning/` | 深度学习 | PyTorch、CNN、RNN、注意力机制等 |
| `ai/` | AI 应用开发 | Prompt、RAG、LangChain、Agent 等 |
| `other/` | 其他 | 信息安全、最优化、自然辩证法等 |

#### 命名规范
- 文件：snake_case，如 `linear_regression.md`
- 目录：snake_case，如 `machine_learning/`

#### Frontmatter 模板
```yaml
---
title: 笔记标题
icon: 图标名称
date: YYYY-MM-DD
category: 
  - 笔记
  - 具体分类名
tag: 
  - 标签1
  - 标签2
---
```

#### 侧边栏配置
文件：`src/.vuepress/sidebar/note.ts`

```typescript
{
    text: "分类名称",
    icon: "图标名",
    link: "分类目录/",
    prefix: "分类目录/",
    collapsible: true,
    children: [
        "笔记文件名1",      // 不含 .md 后缀
        "笔记文件名2",
    ]
}
```

---

### 2.2 随笔（piece）

#### 存储位置
`src/piece/`

#### 分类结构

| 分类目录 | 分类名称 | 说明 |
|---------|---------|------|
| `fragment/` | 学习碎片 | 技术思考、源码分析、工具分享等 |
| `poem/` | 收藏的诗歌 | 个人创作或收藏的诗歌 |

#### 命名规范
- **学习碎片**：日期格式，如 `20260401.md`
- **诗歌**：日期格式，如 `20190921.md`

#### Frontmatter 模板
```yaml
---
title: 随笔标题
icon: 图标名称
date: YYYY-MM-DD
category: 随笔
tag:
  - 标签1
  - 标签2
star: true  # 可选，标记为精华
---
```

#### 侧边栏配置
文件：`src/.vuepress/sidebar/piece.ts`

```typescript
{
    text: "分类名称",
    icon: "图标名",
    link: "分类目录/",
    prefix: "分类目录/",
    collapsible: true,
    children: [
        {
            text: "随笔标题",
            icon: "图标名",
            link: "20260401",      // 日期格式的文件名，不含 .md
        }
    ]
}
```

#### 特点
- 文件使用日期命名，便于按时间追溯
- 支持 `star: true` 标记精华内容

---

### 2.3 项目（project）

#### 存储位置
`src/project/`

#### 分类结构

每个项目一个目录，如：
- `harmonystride/` - 与你同行
- `safestep/` - 步步安
- `sleepnet/` - SleepNet
- `xxmall/` - 小闲小店
- `rag-xxmall/` - 小闲小店智能客服
- `blog/` - 个人博客
- `video2note/` - 视频转笔记工具

#### 命名规范
- 项目目录：snake_case，如 `xxmall/`
- 项目文档：日期格式或描述性名称，如 `20260312.md`、`intro.md`

#### Frontmatter 模板
```yaml
---
date: YYYY-MM-DD
title: 文档标题
icon: 图标名称
category: 项目
tag: 
  - 项目名称
  - 技术标签1
  - 技术标签2
star: true  # 可选
---
```

#### 侧边栏配置
文件：`src/.vuepress/sidebar/project.ts`

```typescript
{
    text: "项目名称",
    icon: "项目图标",
    link: "项目目录/",
    prefix: "项目目录/",
    collapsible: true,
    children: [
        {
            text: "项目介绍",
            icon: "项目图标",
            link: ""              // 空字符串表示链接到目录 README
        },
        {
            text: "文档标题",
            icon: "图标名",
            link: "20260312"      // 文件名，不含 .md
        }
    ]
}
```

#### 项目结构
每个项目目录必须包含 `README.md` 作为项目介绍：

```yaml
---
title: 项目名称
icon: 项目图标
date: YYYY-MM-DD
category: 项目
tag: 
  - 项目名称
---

## 项目简介

...

## 技术栈

...

## 功能特性

...
```

---

### 2.4 教程（tutorial）

#### 存储位置
`src/tutorial/`

#### 分类结构

| 类型 | 说明 |
|------|------|
| 单文件教程 | 直接放在 `tutorial/` 根目录，如 `linux.md` |
| 系列教程 | 单独目录，如 `git/`、`claudecode/`、`openclaw/` |

#### 现有教程
- `linux.md` - Linux 教程
- `server.md` - 云服务器
- `software_copyright.md` - 软著申请
- `git/` - Git 教程系列
- `claudecode/` - Claude Code 教程系列
- `openclaw/` - OpenClaw 教程系列
- `database/` - 数据库教程

#### 命名规范
- 单文件：描述性 snake_case，如 `linux.md`
- 系列教程目录：snake_case，如 `claudecode/`
- 系列内文件：序号或描述性名称，如 `intro.md`、`install.md`

#### Frontmatter 模板
```yaml
---
title: 序号 教程标题
icon: 图标名称
date: YYYY-MM-DD
category: 教程
tag: 
  - 标签1
  - 标签2
---
```

#### 侧边栏配置
文件：`src/.vuepress/sidebar/tutorial.ts`

**单文件教程：**
```typescript
{
    text: "教程名称",
    icon: "图标名",
    link: "文件名",       // 不含 .md
}
```

**系列教程：**
```typescript
{
    text: "系列名称",
    icon: "图标名",
    link: "目录名/",
    prefix: "目录名/",
    collapsible: true,
    children: [
        "intro",           // 不含 .md
        "install",
        "command"
    ]
}
```

---

## 三、通用规范

### 3.1 图标使用

常用图标参考：

| 图标 | 用途 |
|------|------|
| `note` | 笔记总览 |
| `piece` | 随笔总览 |
| `project` | 项目总览 |
| `tutorial` | 教程总览 |
| `language`, `python`, `java`, `javascript` | 编程语言 |
| `frontend`, `vue`, `react` | 前端 |
| `backend` | 后端 |
| `linux`, `git`, `database`, `server` | 工具/基础设施 |
| `claude`, `openclaw`, `ai` | AI 相关 |

### 3.2 Category 规范

| 类型 | category 值 |
|------|-------------|
| 笔记 | `笔记` + 具体分类 |
| 随笔 | `随笔` |
| 项目 | `项目` |
| 教程 | `教程` |

### 3.3 索引文件（README.md）

每个目录应包含 `README.md` 作为索引：

```yaml
---
title: 目录名称
icon: 图标
date: YYYY-MM-DD
category: 对应类型
tag: 
  - README
---

目录简介...

### [内容1](链接1)

### [内容2](链接2)
```

---

## 四、创建内容流程

### 4.1 创建新笔记

1. **确定分类**：选择 `language/`, `frontend/`, `backend/` 等
2. **创建文件**：`src/note/分类/笔记名.md`（snake_case）
3. **填写 frontmatter**：title, date, category（笔记 + 分类）, tag
4. **编写内容**：使用中文，可包含代码块、提示框等
5. **更新侧边栏**：编辑 `src/.vuepress/sidebar/note.ts`
6. **更新分类索引**：编辑对应分类的 `README.md`

### 4.2 创建新随笔

1. **确定分类**：`fragment/`（技术思考）或 `poem/`（诗歌）
2. **创建文件**：`src/piece/分类/YYYYMMDD.md`（日期格式）
3. **填写 frontmatter**：title, date, category（随笔）, tag, 可选 star
4. **编写内容**
5. **更新侧边栏**：编辑 `src/.vuepress/sidebar/piece.ts`
6. **添加链接**：在分类 `README.md` 中添加

### 4.3 创建新项目文档

1. **确定项目**：已有项目或新建项目目录
2. **创建/更新文件**：
   - 新建项目：创建 `src/project/项目名/README.md`
   - 添加文档：`src/project/项目名/YYYYMMDD.md` 或描述性名称
3. **填写 frontmatter**：title, date, category（项目）, tag（含项目名）
4. **更新侧边栏**：编辑 `src/.vuepress/sidebar/project.ts`

### 4.4 创建新教程

**单文件教程：**
1. 创建文件：`src/tutorial/教程名.md`
2. 填写 frontmatter：title, date, category（教程）, tag
3. 更新侧边栏：编辑 `src/.vuepress/sidebar/tutorial.ts`

**系列教程：**
1. 创建目录：`src/tutorial/系列名/`
2. 创建索引：`src/tutorial/系列名/README.md`
3. 创建各章节：如 `intro.md`, `install.md`
4. 更新侧边栏：添加系列配置

---

## 五、检查清单

### 创建任何内容前
- [ ] 确定内容类型（笔记/随笔/项目/教程）
- [ ] 选择合适的存储位置
- [ ] 确认文件名符合命名规范

### 文件内容
- [ ] 包含完整的 frontmatter
- [ ] `title` 不为空
- [ ] `date` 格式为 `YYYY-MM-DD`
- [ ] `category` 正确（笔记/随笔/项目/教程）
- [ ] 正文使用中文（代码除外）

### 侧边栏配置
- [ ] 编辑对应的 sidebar 文件（note.ts/piece.ts/project.ts/tutorial.ts）
- [ ] 文件名不含 `.md` 后缀
- [ ] 路径正确（注意 prefix 的使用）

### 索引更新
- [ ] 目录 README.md 已更新（如适用）
- [ ] 总索引已更新（如新增分类/项目/系列）

### 验证
- [ ] `npm dev:vite` 能正常启动
- [ ] 侧边栏显示正常
- [ ] 页面能正常访问

---

## 六、注意事项

1. **缓存问题**：修改未生效时，使用 `npm dev:vite-clean` 清除缓存
2. **路径大小写**：Git 区分大小写，但 Windows 不区分，修改文件名大小写需特别注意
3. **相对路径**：Markdown 内部链接使用相对路径
4. **日期格式**：统一使用 `YYYY-MM-DD`
5. **随笔日期命名**：便于按时间追溯，也避免中文文件名编码问题
