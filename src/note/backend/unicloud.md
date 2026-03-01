---
date: 2024-01-28
title: UniCloud
icon: unicloud
category: 
    - 后端开发
tag: 
    - unicloud
---

## 1 简介

`uniCloud` 是 DCloud 联合阿里云、腾讯云、支付宝云，为开发者提供的基于 serverless 模式和 js 编程的云开发平台。

`uniCloud` 的 web 控制台地址：[**https://unicloud.dcloud.net.cn**](https://unicloud.dcloud.net.cn/)。

### 1.1 服务空间

一个服务空间对应一整套独立的云开发资源，包括云数据库、云存储、云函数等资源。服务空间之间彼此隔离。

每个服务空间都有一个全局唯一的 space ID。

- 通过 HBuilderX 中管理服务空间，包括新建服务空间和关联服务空间。
- 通过 uniCloud 的 web 控制台 [**https://unicloud.dcloud.net.cn**](https://unicloud.dcloud.net.cn/) 管理服务空间。

- **应用和服务空间的关系**

  每个 uni-app 应用都有一个 appid，每个服务空间都有一个 spaceid。

  服务空间和手机端项目是多对多绑定关系。同 DCloud 账号下，一个应用可以关联到多个服务空间。一个服务空间也可以被多个项目访问。

### 1.2 数据库

`uniCloud` 提供了 2 种类型的 nosql 数据库：

- JSON 文档型云数据库：uniCloud 阿里云版的云数据库就是 MongoDB 的 serverless 版；uniCloud 腾讯云版的云数据库是兼容 MongoDB 的自研数据库；uniCloud 支付宝云版的云数据库是兼容部分 MongoDB 语法的自研数据库；数据库中的每条记录都是一个 JSON 格式的对象。

- redis 数据库：redis 是一种可以运行在内存中的键值对数据库，它的能力没有 MongoDB 强大，但由于可运行在内存中，它的性能远超常规数据库。redis 也使用 json 方式 key/value 键值对存储数据。

### 1.3 云函数/云对象

云函数即在云端（服务器端）运行的函数。

开发者无需购买、搭建服务器，只需编写代码并部署到云端即可在客户端（App/Web/小程序等）调用，同时云函数之间也可互相调用。

一个云函数的写法与一个在本地定义的 `JavaScript` 方法无异，代码运行在云端 `Node.js` 中。当云函数被客户端调用时，定义的代码会被放在 `Node.js` 运行环境中执行。

从 HBuilderX 3.4 起，新增了云函数的扩展版，云对象。云对象本质是对云函数的一种封装，可以对象化的方式使用云服务。

## 2 云函数/云对象

### 2.1 综述

云函数有若干子概念，包括 普通云函数、云对象、公共模块、clientDB 的 action 云函数、uniCloud 扩展库：

- 云函数：通过传统 json 接口方式和客户端通信，客户端使用 `uniCloud.callfunction("")` 调用云函数

- 云对象：是通过前端导入对象来操作的，客户端使用 `uniCloud.importObject("")` 导入云对象。

- 公共模块：用于不同的云函数/云对象，抽取和共享相同代码。

- action 云函数（不推荐使用）：为了弥补 clientDB 客户端直接操作数据库的局限而设计的，从 HBuilderX 3.6.11 开始，推荐使用 [**数据库触发器**](https://doc.dcloud.net.cn/uniCloud/jql-schema-ext.html) 替代 action 云函数。

- uniCloud 扩展库：为了裁剪和控制云函数体积而设计的，一些不太常用的功能比如 Redis，独立为可选扩展库，避免增大每个云函数的体积。

HBuilderX 中 uniCloud 项目的云函数均在项目的 `uniCloud/cloudfunctions` 目录下，目录结构如下：

```markdown
|——— cloudfunctions               云函数目录
|   │───common                    云函数公用模块目录
|   |   └──hello-common           云函数公用模块
|   |      │──index.js            公用模块代码
|   |      └──package.json        公用模块package.json
|   │───uni-clientDB-actions      （推荐用数据库触发器替代action云函数）
|   │      └──new_action.js       clientDB action代码
|   │───function-name             云函数目录
|   │     │──index.js             云函数代码
|   │     └──package.json         包含云函数的配置信息，如url化、定时设置、可用内存等内容
|   └───object-name               云对象目录
|         │──index.obj.js         云对象代码
|         └──package.json         包含云对象的配置信息，可用内存等内容
```

- **客户端与云函数通信**

  uniCloud 体系里，客户端和服务端的云函数通信，有 4 种方式：

| 对比项 | 传统的 restful 方式 | callfunction 方式 | 云对象方式 | **clientDB 方式** |
| :--- | :------------------------- | :--------------- | :--------- | :---------------- |
| 简述 | 通过配置 [**云函数 URL 化**](https://doc.dcloud.net.cn/uniCloud/http)，把云函数转为传统的 http 链接 | 云函数默认并不自带 http 链接 | 把 callfunction 的函数式调用，<br>升级为模块化的对象调用 | 客户端直接操作云数据库 |
| 前端调用方式 | 传统 ajax | uni-app 客户端通过 `uniCloud.callFunction(functionname)` 来调用云函数 | uni-app 客户端通过 `uniCloud.importObject(objectname)` 导入一个云对象，<br>直接使用这个对象的方法 | uni-app 客户端通过 `<uniCloud-db>` 组件或 `uniCloud.database()` API 来访问 uniCloud 数据库。<br>也支持搭配 action 云函数追加服务器逻辑 |
| 适用场景 | http 链接需要自己注册域名。如果前端是 uni-app，则不推荐使用 URL 化。如果是非 uni-app 的系统需要访问云函数，只能使用 URL 化 | 相比云函数 URL，callfunction 更加安全、更 serverless，<br>不暴露域名和 ip，不怕攻击，也无需注册域名 | uni-app 3.4 起支持。相比 callfunction 方式。<br>代码更加精简、逻辑更加清晰、开发更加高效 | 如果 uni-app 前端发起的服务器请求目的主要是查询或操作数据库，<br>则推荐使用 clientDB 方式 |

云函数是 uniCloud 的基础，本质上 clientDB 和 云对象 都是建立在云函数上针对特定场景的优化。

- clientDB 针对的场景是数据库操作，它优化了可以不写或少写服务器代码。

- 云对象针对的场景是非数据库操作或不宜前端暴露的数据库操作时，和 uni-app 客户端的通信方式。它优化了代码结构，更精简、简单。

### 2.2 普通云函数

callFunction 方式云函数，也称之为普通云函数。

uni-app 的前端代码，不再执行 `uni.request` 联网，而是通过 `uniCloud.callFunction` 调用云函数。

- **callFunction 方法**

  `uniCloud.callFunction` 需要一个 json 对象作为参数，其中包含 2 个字段：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | String | 是 | 云函数名称 |
| data | Object | 否 | 客户端需要传递的参数 |
| timeout | Number | 否 | 超时时间，单位ms，默认60000, 新增于HBuilderX 4.25 |

返回的json格式：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| result | Object | 云函数中代码return的返回结果 |
| requestId | String | 云函数请求序列号，用于错误排查，可以在uniCloud web控制台的云函数日志中查到 |
| header | Object | 服务器header信息 |
| errCode | Number或String | 服务器错误码 |
| success | bool | 执行是否成功 |

云函数调用示例：

```jsx
// promise方式
uniCloud.callFunction({
    name: 'hellocf',
    data: { a: 1 }
  }).then(res => {});

// callback方式
uniCloud.callFunction({
 name: 'hellocf',
 data: { a: 1 },
 success(){},
 fail(){},
 complete(){}
});
```

## 3 云数据库

`uniCloud` 提供了一个 JSON 格式的文档型数据库，数据库中的每条记录都是一个 JSON 格式的文档。它是 nosql 非关系型数据库，它与 sql 关系型数据库的对应关系如下：

| 关系型 | JSON 文档型 |
| --- | --- |
| 表 table | 集合 collection。但行业里也经常称之为“表”。无需特意区分 |
| 行 row | 记录 record / doc |
| 字段 column / field | 字段 field |
| 使用sql语法操作 | 使用MongoDB语法或jql语法操作 |

::: tip
一个 `uniCloud` 服务空间，有且只有一个数据库。
:::

uniCloud 的云数据库有多种操作方式。

- 支持在云函数操作，也支持在客户端操作。

- 支持使用传统 MongoDB 语法操作，也支持 JQL 语法操作。

uniCloud 默认推荐使用 JQL 语法操作数据库，它是一种更简单易用、对 js 开发者更友好的、开发效率更高的数据库操作语法。不管在云函数中还是在 uni-app 客户端中，均支持 JQL。

三种方法参考：

- [**客户端操作数据库 clientDB**](https://doc.dcloud.net.cn/uniCloud/clientdb.html)

- [**云函数内使用 JQL 语法操作数据库**](https://doc.dcloud.net.cn/uniCloud/jql-cloud.html)

- [**云函数使用传统 MongoDB 语法操作数据库**](https://doc.dcloud.net.cn/uniCloud/cf-database.html)

### 3.1 传统方式操作数据库

- **集合 Collection**：通过 `db.collection(name)` 可以获取指定集合的引用，在集合上可以进行

  - 写 add

  - 计数 count

  - 读 get：可使用 where 语句定义查询条件

  - 引用 doc：获取对该集合中指定 id 的记录的引用

  - 查询条件

    - where：可搭配查询指令（eq, gt, in, ...）使用

    - skip：跳过指定数量的文档，常用于分页，传入 offset

    - orderBy

    - limit

    - field：指定需要返回的字段

- **记录 Record / Document**：通过 `db.collection(collectionName).doc(docId)` 可以获取指定集合上指定 _id 的记录的引用，在记录上可以进行

  - 写

    - update：局部更新记录，只更新传入的字段

    - set：覆写记录;会删除操作的记录中的所有字段，创建传入的字段

    - remove：删除记录

  - 读：get：获取记录

- **查询筛选指令**

  - 比较运算：eq / neq / gt / gte / lt / lte / in / nin

  - 逻辑运算：and / or

- **字段更新指令**

  - set：设置字段值

  - remove：删除字段

  - inc：加一个数值，原子自增

  - mul：乘一个数值，原子自乘

  - push：数组类型字段追加尾元素

  - pop：数组类型字段删除尾元素

  - shift：数组类型字段删除头元素

  - unshift：数组类型字段追加头元素

::: warning 注意

查询筛选指令、字段更新指令均挂载在 `db.command` 下：

```jsx
const db = uniCloud.database();
const dbCmd = db.command;
let res = await db.collection('articles').where({
  quarter: dbCmd.eq('2020 Q2')
}).get()
```
:::

## 4 参考资料

[UniCloud 云开发视频教程](https://www.bilibili.com/video/BV1PP411E7qG)

[UniCloud 云开发进阶篇](https://www.bilibili.com/video/BV1yG4y1h7ck)
