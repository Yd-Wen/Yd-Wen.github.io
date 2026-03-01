---
title: MongoDB
icon: mongodb
date: 2023-09-17
category: 教程
tag: 
    - 数据库
    - MongoDB
---

## 1 概述

MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写，旨在为 WEB 应用提高可扩展的高性能数据存储解决方案。

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库中功能最丰富，最像关系数据库的。

MongoDB 支持的数据结构非常松散，类似于 json 格式，可以存储复杂的数据类型。其查询语言功能强大，还支持对数据建立索引。

MongoDB 服务端可运行在 Linux、Windows 平台，默认端口是 27017。

## 2 特点

一个 MongoDB 实例包含一组数据库，一个数据库包含一组集合，一个集合就是一个文档，每个集合由若干个键值对组成。

### 2.1 文档

MongoDB 中的记录是一个文档。

文档中的键的数据类型只能是字符串；值的类型可以是字符串、整数、布尔型等。

### 2.2 集合

集合是一组文档的集合。

集合中可以存放任何类型的文档。

::: tip
**既然集合中可以存放任何类型的文档，为什么要使用多个集合？**

所有文档都放在同一个集合中，无论对于开发者还是管理员，都很难对集合进行管理，而且对集合的查询等操作效率都不高。所以在实际使用中，往往将文档分类存放在不同的集合中。

可以使用`“.”`按照命名空间将集合划分为子集合。 例如，对于一个博客系统，可能包括`blog.user`和`blog.article`两个子集合，这样划分只是让组织结构更好一些。
:::

### 2.3 数据库

多个集合组成数据库。

每个数据库都有独立的权限控制。在磁盘上，不同的数据库存放在不同的文件中。

::: tip
**MongoDB 中存在以下系统数据库**。

Admin 数据库：一个权限数据库，如果创建用户的时候将该用户添加到 admin 数据库中，那么该用户就自动继承了所有数据库的权限。

Local 数据库：这个数据库永远不会被复制，可以用来存储本地单台服务器的任意集合。

Config 数据库：当 MongoDB 使用分片模式时，config 数据库在内部使用，用于保存分片的信息。
:::

### 2.4 数据模型

一个 MongoDB 实例可以包含一组数据库，一个 DataBase 可以包含一组 Collection（集合），一个集合可以包含一组 Document（文档）。

一个 Document 包含一组 field（字段），每一个字段都是一个 key/value pair。

::: tip
key: 必须为字符串类型

value：可以包含如下类型

- 基本类型，例如，string，int，float，timestamp，binary 等类型
- 一个 document
- 数组类型
:::

## 3 基本操作

### 3.1 数据库

- 查看数据库

```shell
show databases
//OR
show dbs
```

- 选择和创建数据库

```shell
use dbname
```

::: tip
如果数据库不存在，则自动创建该数据库。但插入数据前，使用 show dbs 不能看到库。如下图所示。
:::

![数据库创建](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/mongodb001.png)

- 查看正在使用的数据库

```shell
db
```

- 删除数据库

```shell
db.dropDatabase();
```

### 3.2 集合

- 查看当前数据库的集合

```shell
show collections
//OR
show tables
```

- 显式创建集合

```shell
db.createCollection("cname")
```

::: tip
集合的隐式创建：向一个集合插入文档时，若集合不存在，则自动创建该集合。
:::

- 重命名集合

```shell
db.cname.renameCollection("newcname")
```

- 删除集合

```shell
db.cname.drop()
```

### 3.3 文档

- 文档单条插入

```shell
db.cname.insert({"keyname1":"value1", "keyname2":"value2", ...})
```

::: tip
1. cname 如果不存在，则会隐式创建

2. mongodb 中的数字默认是 double 类型，要存 int 型，必须使用函数 NumberInt()

3. 插入当前日期使用 new Date()

4. 插入的数据没有指定 _id，会自动生成主键值

5. 如果某字段没有值，可以赋值为 null，也可以不写该字段
:::

![文档插入](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/mongodb002.png)

- 文档多条插入

```shell
db.cname.insertMany([document1, document2, ...])
//OR
db.cname.insert([document1, document2, ...])
```

![文档多条插入](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/mongodb003.png)

- 文档查询

```shell
//查询 cname 集合下的所有记录
db.cname.find()
//OR
db.cname.find({})

//查询 cname 集合下的指定记录
db.cname.find({key:value})

//查询 cname 集合下的一条记录
db.cname.findOne({key:value})

//投影查询：返回部分字段(key1, key2, ...)
//这里的 1 表示显示此列的意思，也可以用 true 表示
db.cname.find({key:value}, {key1:1, key2:1, ...})

//比较条件查询
db.cname.find(condition)

//逻辑条件查询
//and 条件  MongoDB 的 fidn() 方法可以传入多个键(key)，每个键(key)以逗号隔开，即常规 SQL 的 AND 条件
db.cname.find({key1:value1, key2:value2}).pretty()
//or 条件
db.cname.find({$or:[{key1:value1}, {key2:value2}]}).pretty()
//not 条件 
db.cname.find({key:{$not:{$操作符 op:value}}).pretty()

//分页查询
db.cname.find({条件}).sort({排序字段:排序方式})).skip(跳过的行数).limit(一页显示多少数据)

//查询指定字段数据并去重
db.cname.distinct(key)
```

比较条件查询表：

| 条件操作符 | 格式   |     
| ---- | ----------- |
| =    | {key:value} |
| >    | {key:{$gt:value}} | 
| <    | {key:{$lt:value}}  |
| >=   | {key:{$gte:value}} |           
| <=   | {key:{$lte:value}}  |         
| !=   | {key:{$ne:value}}   |    

::: tip
- `.pretty()` 可以使查询结果以 json 格式更加清晰美观的形式显示。

- `.sort()` 中，1：升序，-1：降序。
:::

- 文档修改

```shell
//$set :设置字段值 $unset :删除指定字段 $inc:对修改的值进行自增
//upsert: 可选，如果不存在 update 的记录，是否插入 objNew，默认是 false 不插入 
//writeConcern: 可选，用来指定 mongod 对写操作的回执行为比如写的行为是否需要确认
db.cname.update
(
	<query>, 
	<objNew>, 
	{ 
		upsert: <boolean>, 
		multi: <boolean>, 
		writeConcern: <document>
	}
)

//覆盖修改:执行后，该文档除了 key 字段外的其他字段都没有了
db.cname.update({_id:"1"}, {key:newvalue})

//局部修改：解决覆盖修改的问题，用修改器 $set 修改
db.cname.update({_id:"1"}, {$set:{key:newvalue}})

//批量修改：如果不加后面的参数，则只更新符合条件的第一条记录
db.cname.update({key:value}, {$set:{key:newvalue}}, {multi:true})

//列值增长的修改
db.cname.update({key:value}, {$inc:{key:NumberInt(1)}})
```

- 文档删除

```shell
//query :(可选)删除的文档的条件
//justOne : (可选)如果设为 true 或 1，则只删除一个文档，默认值 false，删除所有文档
//writeConcern :(可选)用来指定 mongod 对写操作的回执行为
db.cname.remove
( 
	<query>,
	{
	     justOne: <boolean>,
	     writeConcern: <document>
	} 
)

//删除所有文档
db.cname.remove()
//OR
db.cname.remove({})

//删除满足条件的第一个文档
db.cname.remove({key:value}, {justOne:true})

//Collection.remove() is deprecated. Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
db.cname.deleteOne()
db.cname.deleteMany()
```

::: important 声明
待更新
:::
