---
title: 6 字符串
icon: string
date: 2024-02-21
category: 编程语言
tag: 
    - Java
---

## 6.1 概述

- String 是 Java 定义好的一个类。定义在 Java.lang 包中，所以使用时不需要导包。

- Java 程序中的所有字符串都被视为该类的对象。

- 字符串不可变，其值在创建后不可更改。

## 6.2 创建

- 直接赋值

- new

- 常用构造方法：

|            构造方法            |              说明              |
|:------------------------------|:------------------------------|
|        public String()         | 创建空白字符串，不包含任何内容 |
| public String(String original) |   根据传入的字符串，创建对象   |
|   public String(char[] chs)    |  根据传入的字符数组，创建对象  |
|  public String(byte[] bytes)   |  根据传入的字节数组，创建对象  |

## 6.3 常用方法

1. 比较

- boolean equals(Object obj)

- boolean equalsIgnoreCase(String str)

2. 截取

- String subString(beginIndex, endIndex)

- String subString(beginIndex)

::: tip
包左不包右，包头不包尾
:::

3. 替换

- String replace(value, newValue)

4. StringBuilder：创建的字符串容器内容可变，用于字符串的拼接和反转。

- StringBuilder append()

- StringBuilder reverse()

- int length()

- String toString()：StringBuilder 转换成 String。

## 6.4 底层原理

- 字符串存储

	- 直接赋值会复用字符串常量池中的

	- new 出来的不会复用，而是开辟新的空间

-  == 的比较

	- 基本数据类型比较数据值

	- 引用数据类型比较地址值

-  字符串拼接

	- 没有变量参与，都是字符串相加，编译之后就是拼接的结果，会复用

	- 有变量参与，会 new 新的字符串，浪费内存（创建多个 StringBuilder 和 String）

- StringBuilder 提供效率

	- 所有拼接内容都会往 StringBuilder 容器中放，不会创建很多无用的空间，节约内存

- StringBuilder 源码分析

	- 默认创建一个长度为 16 的字节数组

	- 添加内容小于 16，直接放

	- 添加内容大于 16，扩容（原容量*2+2）

	- 扩容后还是不够，以实际长度为准
