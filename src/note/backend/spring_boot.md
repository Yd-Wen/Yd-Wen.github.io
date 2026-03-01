---
date: 2024-03-01
title: Spring Boot
icon: spring_boot
category: 
    - 后端开发
tag: 
    - spring boot
---

## 1 Maven

### 1.1 概述

什么是 Maven？

- apache 旗下的一个开源项目，是一款用于管理和构建 Java 项目的工具。

作用：

- 依赖管理：方便快捷地管理项目依赖的资源（jar 包），避免版本冲突。

- 统一项目结构：提供标准、统一的项目结构。

- 项目构建：标准平台（Linux、Windows、MacOS）的自动化项目构建方式。

官网：

- [Maven官网](https://maven.apache.org/)

仓库：

- 本地仓库：自己计算机上的一个目录。

- 中央仓库：由 Maven 团队维护的全球唯一的仓库。[中央仓库](https://repo1.maven.org/maven2/)

- 远程仓库：私服，一般由公司团体搭建的私有仓库。

### 1.2 安装

Maven安装：

![Maven安装](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_5.2.png)

### 1.3 IDEA集成Maven

- 配置Maven环境

  - settings -> build -> maven 配置Maven相关信息

    - 安装目录

    - 配置文件


    - 本地仓库

  - maven -> runner -> jre 设置 jdk11 版本

  - compiler -> java compiler 设置 java11 版本

  ![Maven环境配置](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_5.3.1.png)

- 创建Maven项目

  - 创建模块，选择Maven，点击Next

  - 填写模块名称，坐标信息，点击Finish，创建完成

  - 编写HelloWorld，运行

  Maven坐标：

  - 什么是Maven坐标

    - 资源的唯一标识，通过该坐标可以唯一定位资源位置

    - 使用坐标定义项目模块或引入项目中需要的依赖

  - Maven坐标组成

    - groupId：定义当前项目隶属组织名称，通常是域名反写

    - artifactId：定义当前项目名称，通常是模块名

    - version：定义当前项目模块版本号

- 导入Maven项目

  - 方法一：选择项目结构，选择导入模块，选择项目的pom.xml文件即可。

  - 方法二：点击Maven面板的 “+”，选择项目的pom.xml文件即可。

### 1.4 依赖管理

- 依赖配置

  - 编辑`<dependecy></dependecy>`标签

  - 设置坐标

  - Maven面板点击刷新

  ::: tip
  如果引入的依赖不在本地仓库，将会连接远程仓库或中央仓库下载依赖。
  
  如果不知道依赖的坐标信息，可以到[Maven仓库](https://mvnrepository.com/)中搜索。
  :::

- 依赖传递

  传递依赖：

  某项目的依赖会传递给依赖该项目的项目。

  ![依赖传递](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_5.4.2_01.png)
  
  排除依赖：

  通过`<exclusions>`标签断开依赖连接。

  如图，A项目依赖了B项目，但不依赖B项目的junit包。

  ![排除依赖](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_5.4.2_02.png)

- 依赖范围

  ![依赖范围](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_5.4.3.png)

- 生命周期

  三套独立的生命周期：

  ![三套独立的生命周期](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_5.4.4_01.png)
  
  ![生命周期阶段](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_5.4.4_02.png)
  
  五个重要的生命周期阶段：

  ![五个重要的生命周期阶段](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_5.4.4_03.png)
  执行 package 时，default 生命周期中的 compile、test 会执行，但 clean 生命周期中的 clean 不执行。

## 2 Web入门

### 2.1 概述

Spring
- [Spring官网](spring.io)

- Spring 发展到今天已经形成了一种开发生态圈，Spring 提供了若干个子项目，用于完成特定的功能。

- Spring Framework：Spring 框架，配置繁琐，入门难度大。

  - Spring Boot：简化配置，快速开发。可以快速构建应用程序，简化开发，提供效率。

  - Spring Data

  - Spring Cloud

  - Spring Security

### 2.2 SpringBoot Web快速入门

![SpringBoot Web快速入门](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_6.2.png)

### 2.3 HTTP协议

- 概述

  概念

  - Hyper Text Transfer Protocol，超文本传输协议，规定了浏览器和服务器之间数据传输的规则。

  特点

  - 基于 TCP 协议：面向连接，安全

  - 基于请求-响应模型：一次请求对应一次响应

  - 无状态的协议：对于事务处理没有记忆能力，每次请求，响应都是独立的

    - 缺点：多次请求间不能共享数据

    - 优点：速度快

- 请求协议

  数据格式

  - 请求行：请求数据的第一行（请求方式，资源路径，协议）。

  - 请求头：第二行开始，格式 key:value。

  - 请求体：POST 请求特有，存放请求参数。

  请求方式

  - GET：请求参数在请求行，没有请求体，如：/brand/findAll?name=OPPO&status=1。请求大小有限制。

  - POST：请求参数在请求体中。请求大小没有限制。

- 响应协议

  数据格式

  - 响应行：响应数据的第一行（协议，状态码，描述）。

  - 响应头：第二行开始，格式 key:value。

  - 响应体：最后一部分，存放响应数据。

  常见状态码

  - 200：客户端请求成功。

  - 404：资源路径不存在。

  - 500：服务器发生不可预期的错误。

- 协议解析

  Web 服务器封装了协议解析的操作。

### 2.4 Web服务器-Tomcat

概念

- Tomcat 是 Apache 软件基金会一个核心项目，是一个开源免费的轻量级 Web 服务器，支持 Servlet/JSP 少量 JavaEE 规范。也被称为 Web 容器、Servlet 容器。Servlet 程序需要依赖于 Tomcat 才能运行。

- JavaSE：标准版。

- JavaME：小型版。

- JavaEE：企业版。

- [Tomcat官网](https://tomcat.apache.org/)

Web 服务器

- 对 HTTP 协议进行封装，简化 Web 程序开发。

- 部署 Web 项目，对外提供网上信息浏览服务。

Tomcat

- 一个轻量级 Web 服务器

- 也被称为 Web 容器、Servlet 容器。

起步依赖

- spring-boot-starter-web

- spring-boot-starter-test

内嵌 Tomcat 服务器

- 基于 Spring Boot 开发的 Web 应用程序，内置了 Tomcat 服务器，当启动类运行时，会自动启动内置的 Tomcat 服务器。

## 3 请求响应

什么是请求和响应？

![请求和响应](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.png)

### 3.1 请求

- 简单参数和实体参数

  - 简单参数：

  ![简单参数](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.1.1.png)

  - 实体参数：请求参数名与对象属性名相同即可。

- 数组参数和集合参数

  - 数组参数：请求参数名与形参数组名相同且请求参数为多个，定义数组类型形参即可接收参数。

  - 集合参数：请求参数名与形参集合名相同且请求参数为多个，需要使用 `@RequestParam` 注解绑定参数关系（默认绑定数组参数）。

- 日期参数

  使用 `@DateTimeFormat` 注解完成日期参数格式转换。

- Json参数

  JSON 数据**键名**与形参对象**属性名**相同，需要使用 `@RequestBody` 注解进行标识。

- 路径参数

  ![路径参数](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.1.5.png)

### 3.2 响应

![响应](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.2.png)

### 3.3 分层解耦

- 三层架构

  ![三层架构](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.3.1.png)

- 分层解耦

  内聚：软件中各个功能模块内部的功能联系。

  耦合：衡量软件中各个层/模块之间的依赖、关联程度。

  软件设计原则：高内聚低耦合。

  ![分层解耦](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.3.2.png)

- IOC & DI 入门

  操作步骤：

  - 控制权反转：使用 `@Component` 注解，将实现类交给 IOC 容器，由 IOC 容器管理。IOC 容器内的对象称为 Bean 对象。
  ![IOC容器](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.3.3_01.png)

  - 依赖注入：使用 `@AutoWired` 注解，注入依赖的对象。

  ![依赖注入](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.3.3_02.png)

  ::: tip
  需要切换不同实现时，只要将 `@Component` 注解注释掉。
  :::

- IOC详解

  - Bean的声明

  ![Bean的声明](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.3.4_01.png)

  - Bean组件扫描

  ![Bean组件扫描](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.3.4_02.png)

- DI详解

  ![DI详解](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_7.3.5.png)

## 4 Mybatis

简介：

- 一款优秀的持久层框架，用于简化 JDBC 的开发。

- Apache 旗下的一个开源项目，2010 年迁移到 Google code，并改名 Mybatis，2013 年迁移到 Github。

- [MyBatis官网](https://mybatis.net.cn/)

### 4.1 Mybatis入门

- 快速入门

  ![Mybatis快速入门](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.1.1.png)

- JDBC

  - JDBC介绍

  ![JDBC介绍](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.1.2_01.png)

  - JDBC与MyBatis对比

  ![JDBC与MyBatis对比](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.1.2_02.png)

- 数据库连接池

  - 是一个容器，负责分配、管理数据库连接

  - 优势：资源复用、提升系统响应速度

  - 接口：DataSource

  - 产品：C3P0 DBCP Druid Hikari

- lombok

  ![lombok](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.1.4.png)

### 4.2 Mybatis增删改查

- 删除

  ![删除操作](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.2.1.png)

- 新增

  ![新增操作](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.2.2.png)

  主键返回：

  插入数据后获得主键，除了 `@Insert` 注解，还需要添加以下注解。

  ```java
  @Options(keyProperty = "id", useGeneratedKeys = true)
  ```

- 更新

  ![更新操作](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.2.3.png)

- 查询

  查询数据后进行自动数据封装，封装到实体类中。

  ::: tip
  实体属性名和字段名不一致时，需要手动进行数据封装。
  :::

  ![查询操作](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.2.4_01.png)
  模糊查询：

  - `${}`：直接拼接字符串，存在 SQL 注入的问题。

  - `#{}`：使用 concat 拼接字符串。

  ::: tip
  建议使用 `#{}` 拼接字符串，避免 SQL 注入问题。
  :::

  ![模糊查询](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.2.4_02.png)

### 4.3 Mybatis动态SQL

- Xml映射文件

  - 简单SQL：注解

  - 复杂SQL：XML映射文件

  ![XML映射文件](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/javaweb_8.3.1.png)

- `<if>` 标签

  - 用于条件判断，根据条件动态生成 SQL 语句

  - 示例：

  ```xml
  <select id="findByCondition" parameterType="map" resultType="User">
    SELECT * FROM user
    <where>
      <if test="name != null and name != ''">
        AND name = #{name}
      </if>
      <if test="age != null">
        AND age = #{age}
      </if>
    </where>
  </select>
  ```

- `<foreach>` 标签

  - 用于遍历集合，动态生成 IN 语句

  - 示例：

  ```xml
  <select id="findByIds" parameterType="list" resultType="User">
    SELECT * FROM user
    WHERE id IN
    <foreach collection="list" item="id" open="(" separator="," close=")">
      #{id}
    </foreach>
  </select>
  ```

- `<sql> <include>` 标签

  - `<sql>` 用于定义可复用的 SQL 片段

  - `<include>` 用于引用定义的 SQL 片段

  - 示例：

  ```xml
  <sql id="userColumns">
    id, name, age, email
  </sql>
  
  <select id="findAll" resultType="User">
    SELECT <include refid="userColumns" /> FROM user
  </select>
  ```

::: important 声明
待更新
:::
