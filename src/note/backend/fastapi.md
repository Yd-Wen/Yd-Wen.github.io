---
date: 2026-02-21
title: FastAPI
icon: fastapi
category: 
    - 后端开发
tag: 
    - fastapi
---

## 1 简介

FastAPI 是一个基于 Python 的高性能 Web 框架，专门用于快速构建 API 接口服务。

特点：

- 原生异步支持： `async`

- 类型提示与验证： Pydantic 类型验证提示与验证，减少手动校验代码

- 可交互式文档：自动生成可交互式文档，浏览器中直接调用和调试 API

## 2 基础

### 2.1 第一个项目

- 安装依赖： `pip install "fastapi[standard]"`

```python
from typing import Union

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

- 运行项目：开发——`fastapi dev main.py --reload` ；部署—— `fastapi run main.py --reload`

- 访问项目：`http://127.0.0.1:8080/`

- 访问交互式 API 文档：`http://127.0.0.1:8080:docs`

::: tip
依赖项安装：[FastAPI 框架](https://fastapi.org.cn/#dependencies)
:::

### 2.2 路由

FastAPI 的路由定义基于 Python 的装饰器模式。

![FastAPI 路由定义](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301211156205.png)

### 2.3 参数

同一段接口逻辑，根据参数不同返回不同的数据。参数包括：

|      | 路径参数                        | 查询参数                             | 请求体参数                         |
| ---- | ------------------------------- | ------------------------------------ | ---------------------------------- |
| 位置 | URL 路径的一部分： `/book/{id}` | URL ? 之后 `k1=v1&k2=v2`             | HTTP 请求的消息体 `{body}` 中      |
| 作用 | 指向唯一的特定的资源            | 对资源集合进行过滤、排序、分页等操作 | 创建、更新资源携带大量数据，如JSON |
| 方法 | `GET`                           | `GET`                                | `PUT` 、`POST` 等                  |

- **路径参数**

  - 装饰器声明路径参数后，函数中声明的参数必须包含同名参数。
  - 为路径参数添加类型注解：Python 原生注解类型限制，Path 注解更多限制。

常见 Path 参数：

| Path 参数               | 说明           |
| ----------------------- | -------------- |
| `default=...`           | 必填           |
| `gt/ge`                 | 大于/大等于    |
| `lt/le`                 | 小于/小等于    |
| `description`           | 描述           |
| `min_length/max_length` | 字符串长度限制 |

```python
from fastapi import FastAPI, Path

@app.get("/items/{item_id}")
async def read_item(item_id: int = Path(default=..., gt=0, le=1000, description="The ID of the item to get: 1-1000")):
    return {"item_id": item_id}
```

- **查询参数**

  - 函数中声明的参数不是路径参数（不与路径参数同名）时，路径操作函数会将该参数自动解释为查询参数。

  - 为查询参数添加类型注解：Python 原生注解类型限制，Query 注解更多限制。

```python
from fastapi import FastAPI, Query

@app.get("/news/news_list")
async def get_news_list(
        skip: int = Query(default=0, gt=0, le=1000, description="skip"), 
        limit: int = Query(default=10, gt=0, le=1000, description="limit")
):
    return {"news_list": [{"id": i, "title": f"新闻标题{i}"} for i in range(skip, skip + limit)]}
```

- **请求体参数**

  在 HTTP 协议中，一个完整的请求由三部分组成：

  1. 请求行：包含方法、URL、协议版本

  2. 请求头：元数据信息（Content-Type、Authorization等）

  3. 请求体：实际要发送的数据内容

  为请求体参数添加类型注解：Python 原生注解类型限制，Field 注解更多限制。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str = Field(..., min_length=2, max_length=10, description="用户名")
    password: str = Field(..., min_length=6, max_length=12, description="密码")

@app.post("/user/register")
async def register(user: User):
    return {"user": user, "message": "注册成功"}
```

### 2.4 响应类型

默认情况下，FastAPI 会自动将路径操作函数返回的 Python 对象（字典、列表、Pydantic 模型等），经由 jsonable_encoder 转换为 JSON 兼容格式，并包装为 JSONResponse 返回。这省去了手动序列化的步骤。

如果需要返回非 JSON 数据，FastAPI 提供了丰富的响应类型来返回不同数据。

![FastAPI 响应类型](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301211238609.png)

设置响应类型可以在装饰器声明，也可以直接返回响应对象。

- **装饰器中指定响应类**

  适合固定返回类型（HTML、纯文本等）场景。

```python
from fastapi.responses import HTMLResponse

@app.get("/html", response_class=HTMLResponse)
async def get_html():
    return """
    <html>
        <head>
            <title>HTML Response</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>
    """
```

- **返回响应对象**

  适合文件下载、图片、流式响应场景。

  `FileResponse` 是 FastAPI 提供的专门用于高效返回文件内容（图片、PDF、Excel、音视频等）的响应类。它能够智能处理文件路径、媒体类型推断、范围请求和缓存头部，是服务静态文件的推荐方式。

```python
from fastapi.responses import FileResponse
@app.get("/file")
async def get_file():
    return FileResponse("./file/jjy.jpg")
```

- **自定义响应数据格式**

```python
class Books(BaseModel):
    id: int = Field(..., gt=0, description="id")
    name: str = Field(..., min_length=2, max_length=10, description="书名")

@app.get("/book/{book_id}")
async def get_book(book_id: int):
    return {
        "id": book_id,
        "name": f"第{book_id}本书",
    }
```

### 2.5 异常处理

对于客户端引发的错误（4xx，如资源未找到、认证失败），应使用 `fastapi.HTTPException` 来中断正常处理流程，并返回标准错误响应。

```python
from fastapi import FastAPI, HTTPException

@app.get("/news/{id}")
async def get_news_id(id: int):
    id_list = [i for i in range(1, 10)]
    if id not in id_list:
        raise HTTPException(status_code=404, detail="新闻不存在")
    return {"id": id, "title": f"新闻标题{id}"}
```

## 3 进阶

### 3.1 中间件

![FastAPI 中间件流程](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301211312418.png)

中间件（Middleware）是一个在每次请求进入 FastAPI 应用时都会被执行的函数。

它在请求到达实际路径操作（路由处理函数）之前运行，并且在响应返回给客户端之前再运行一次。

- 作用：使用中间件为每个请求前后添加统一的处理逻辑（记录日志、身份认证、跨域、配置响应头、性能监控等）。

- 定义：函数顶部使用装饰器 `@app.middleware("http")`

- 多个中间件执行顺序：自底向上

```python
@app.middleware("http")
async def middleware_1(request, call_next):
    print("中间件1 start...")
    response = await call_next(request)
    print("中间件1 end...")
    return response

@app.middleware("http")
async def middleware_2(request, call_next):
    print("中间件2 start...")
    response = await call_next(request)
    print("中间件2 end...")
    return response
```

::: tip
执行结果为：

1. 中间件2 start...

2. 中间件1 start... 

3. 中间件1 end... 

4. 中间件2 end...
:::

### 3.2 依赖注入

使用依赖注入来共享通用逻辑，减少代码冗余。

依赖项：可重用的组件（函数/类），负责提供某种功能或数据。

注入：FastAPI 自动调用依赖项，并将结果“注入”到路径操作函数中。

优点：

- 代码复用：一次编写，多处使用

- 解耦：业务逻辑与基础设施代码分离

- 易于测试：轻松地用模拟依赖替换真实依赖进行测试

![FastAPI 依赖注入](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301211400819.png)

使用步骤：

1. 导入 Depends 包

2. 创建依赖项

3. 依赖注入

```python
from fastapi import Depends

async def common_parameters(
        skip: int = Query(default=0, ge=0), limit: int = Query(default=10, le=60)
):
    return {"skip": skip, "limit": limit}

@app.get("/user_list")
async def get_user_list(commons: dict = Depends(common_parameters)):
    return commons

@app.get("/book_list")
async def get_book_list(commons: dict = Depends(common_parameters)):
    return commons
```

### 3.3 ORM

ORM（Object-Relational Mapping，对象关系映射）是一种编程技术，用于在面向对象编程语言和关系型数据库之间建立映射。它允许开发者通过操作对象的方式与数据库进行交互，而无需直接编写复杂的SQL语句。

优势：

- 减少重复的 SQL 代码

- 代码更简洁易读

- 自动处理数据库连接和事务

- 自动防止 SQL 注入攻击

![FastAPI ORM 架构](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301211426516.png)

安装：执行命令 `pip install "sqlalchemy[asyncio]" aiomysql`

::: tip
aiomysql 是异步数据库驱动。
:::

- **建库建表**

1. 创建数据库引擎：使用 `create_async_engine` 创建异步引擎

```python
from sqlalchemy.ext.asyncio import create_async_engine

ASYNC_DATABASE_URL = "mysql+aiomysql://root:041209@localhost:3306/fastapi_test?charset=utf8"
async_engine = create_async_engine(
    ASYNC_DATABASE_URL,
    echo=True,           # 输出 SQL 日志
    pool_size=20,        # 连接池大小
    max_overflow=10,     # 连接池溢出大小
)
```

2. 定义模型类：基类继承 `DeclarativeBase` ，包含通用属性和字段的映射；定义表对应的模型类

```python
from sqlalchemy import DateTime, func, String, Float
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

# 2. 定义模型类 基类 + 表对应的模型类
class Base(DeclarativeBase):
    """
    定义模型类基类
    """
    create_time: Mapped[datetime] = (
        mapped_column(DateTime, insert_default=func.now(), default=datetime.now, comment="创建时间"))
    update_time: Mapped[datetime] = (
        mapped_column(DateTime, insert_default=func.now(), default=datetime.now, onupdate=func.now(), comment="更新时间"))

class Book(Base):
    """
    定义模型类
    """
    __tablename__ = "book"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, comment="编号")
    title: Mapped[str] = mapped_column(String(50), nullable=False, comment="标题")
    author: Mapped[str] = mapped_column(String(50), nullable=False, comment="作者")
    price: Mapped[float] = mapped_column(Float, nullable=False, comment="价格")
```

3. 启动应用时建表：从连接池获取异步连接，开启事务，执行ORM操作；应用启动时执行建表操作

```python
# 3. 建表
# 3.1 开启事务，执行ORM操作
async def create_table():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)  # 基类元数据创建表

# 3.2 应用启动时建表
@app.on_event("startup")
async def startup():
    await create_table()
```

- **路由匹配中使用 ORM**

  核心：创建依赖项，使用 Depends 注入到处理函数。

```python
from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import async_sessionmaker, AsyncSession

async def get_database():
    """
    获取数据库连接
    :return:
    """
    async with async_session() as session:
        try:
            yield session                # 返回数据库会话
            await session.commit()       # 提交事务
        except Exception as e:
            await session.rollback()     # 回滚
            raise e

@app.get("/book/books")
async def get_books(db: AsyncSession = Depends(get_database)):
    """
    获取所有图书
    :param db:
    :return:
    """
    query = await db.execute(select(Book))
    books = query.scalars().all()
    return books
```

- **查询**

  - 核心语句： `await db.ececute(select(模型类))` ，返回一个 ORM 对象

  - 查询所有数据： `scalars().all()`

  - 查询单条数据： `scalars().first()`  `scalar_one_or_none()` `scalar()` `db.get(模型类, 主键值)`

```python
@app.get("/book/books")
async def get_books(db: AsyncSession = Depends(get_database)):
    """
    获取所有图书
    :param db:
    :return:
    """
    query = await db.execute(select(Book))
    # books = query.scalars().all()
    # book = query.scalars().first()
    return await db.get(Book, 1)
    # return books
```

- 条件查询：`select(模型类).where()`

```python
@app.get("/book/{book_id}")
async def get_book(book_id: int, db: AsyncSession = Depends(get_database)):
    """
    获取图书
    :param book_id:
    :param db:
    :return:
    """
    query = await db.execute(select(Book).where(Book.id == book_id))
    return query.scalar_one_or_none()
```

- 聚合查询： `select(func.方法(模型类.属性))`

```python
@app.get("/book/count")
async def get_book_count(db: AsyncSession = Depends(get_database)):
    """
    获取图书数量
    :param db:
    :return:
    """
    query = await db.execute(select(func.count(Book.id)))
    query = await db.execute(select(func.max(Book.price)))
    query = await db.execute(select(func.sum(Book.price)))
    query = await db.execute(select(func.avt(Book.price)))
    return query.scalar()
```

- 分页查询： `select().offset().limit()` ，设置跳过的记录数和返回的记录数

```python
@app.get("/books/page")
async def get_books_page(page: int = 1, page_size: int = 10, db: AsyncSession = Depends(get_database)):
    """
    获取图书分页
    :param page:
    :param page_size:
    :param db:
    :return:
    """
    query = await db.execute(select(Book).offset((page - 1) * page_size).limit(page_size))
    return query.scalars().all()
```

- **添加**

  核心步骤：定义 ORM 对象→添加对象到事务：add(对象)→commit 提交到数据库

```python
class BookBase(BaseModel):
    title: str
    author: str
    price: float

@app.post("/book/add")
async def add_book(book: BookBase, db: AsyncSession = Depends(get_database)):
    """
    添加图书
    :param book:
    :param db:
    :return:
    """
    # 获取 book 参数，创建 Book 实例
    book_obj = Book(**book.__dict__)
    db.add(book_obj)
    await db.commit()
    return book
```

- **更新**

  核心步骤：查询→属性重新赋值→commit 提交到数据库

```python
@app.put("/book/update/{book_id}")
async def update_book(book_id: int, data: BookBase, db: AsyncSession = Depends(get_database)):
    """
    更新图书
    :param book_id:
    :param data:
    :param db:
    :return:
    """
    # 1. 查询
    book = await db.get(Book, book_id)
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    # 2. 更新
    book.title = data.title
    book.author = data.author
    book.price = data.price
    # 3. 提交
    await db.commit()
    return book
```

::: tip POST 和 PUT 对比

| 特性           | POST                                 | PUT                                   |
| -------------- | ------------------------------------ | ------------------------------------- |
| **核心语义**   | 「创建 / 提交」资源（非幂等）        | 「更新 / 替换」资源（幂等）           |
| **目标指向**   | 通常指向「资源集合」（如 `/books/`） | 通常指向「具体资源」（如 `/books/1`） |
| **幂等性**     | 非幂等（多次调用可能产生不同结果）   | 幂等（多次调用结果相同）              |
| **是否可缓存** | 默认不可缓存                         | 可缓存（需配合合适的响应头）          |
| **数据位置**   | 数据放在请求体（Body）中             | 数据放在请求体（Body）中              |
:::

- **删除**

  核心步骤：查询→delete 删除→commit 提交到数据库

```python
@app.delete("/book/delete/{book_id}")
async def delete_book(book_id: int, db: AsyncSession = Depends(get_database)):
    """
    删除图书
    :param book_id:
    :param db:
    :return:
    """
    # 1. 获取图书
    book = await db.get(Book, book_id)
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    # 2. 删除
    await db.delete(book)
    # 3. 提交
    await db.commit()
    return {"message": "Book deleted"}
```

## 4 参考资料

- [FastAPI 官网](https://fastapi.org.cn/)

- [黑马程序员PythonWeb开发：FastAPI从入门到实战视频教程](https://www.bilibili.com/video/BV1zV2QBtE39)
