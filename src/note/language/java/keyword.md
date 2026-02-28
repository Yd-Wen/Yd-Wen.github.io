---
title: 8 关键字
icon: keyword
date: 2024-03-11
category: 编程语言
tag: 
    - Java
---

## 8.1 什么是关键字

关键字是 Java 语言中预定义的、具有特殊含义的单词。这些单词被 Java 编译器保留，不能用作变量名、方法名、类名或其他标识符。关键字在 Java 程序中用于表示特定的语法结构或功能。

1. 关键字的特点

- 全部由小写字母组成

- 具有特殊的语法含义

- 不能被用作标识符

- 在代码中有特定的用途和功能

2. 关键字的数量

Java 语言中有 53 个关键字，其中包括 50 个常用关键字和 3 个保留字（const、goto、strictfp）。

## 8.2 关键字分类

1. 数据类型关键字

- boolean：布尔类型

- byte：字节类型

- char：字符类型

- double：双精度浮点型

- float：单精度浮点型

- int：整型

- long：长整型

- short：短整型

- void：无返回值类型

2. 控制流程关键字

- if：条件判断

- else：条件分支

- switch：多条件分支

- case：分支条件

- default：默认分支

- while：循环

- do：循环

- for：循环

- break：跳出循环

- continue：跳过当前循环

- return：返回值

3. 访问控制关键字

- public：公共访问权限

- protected：受保护访问权限

- private：私有访问权限

- default：默认访问权限

4. 类与对象关键字

- class：类定义

- interface：接口定义

- extends：继承

- implements：实现接口

- new：创建对象

- this：当前对象引用

- super：父类引用

- static：静态成员

- final：最终的

- abstract：抽象的

5. 其他关键字

- package：包声明

- import：导入包

- try：异常处理

- catch：捕获异常

- finally：异常处理的最终块

- throw：抛出异常

- throws：声明异常

- synchronized：同步

- volatile：易变的

- transient：瞬态的

- native：本地方法

- instanceof：类型判断

- enum：枚举

- assert：断言

- var：局部变量类型推断（Java 10+）

- record：记录类（Java 14+）

## 8.3 常用关键字详解

### 8.3.1 public

- 公共访问权限，修饰的成员可以被任何类访问

- 适用于需要被广泛访问的类、方法或变量

- 示例：

  ```java
  public class PublicClass {
      public int publicVariable;
      public void publicMethod() {
          // 方法实现
      }
  }
  ```

### 8.3.2 protected

- 受保护访问权限，修饰的成员可以被同一包内的类和子类访问

- 适用于需要在继承体系中共享的成员

- 示例：

  ```java
  protected class ProtectedClass {
      protected int protectedVariable;
      protected void protectedMethod() {
          // 方法实现
      }
  }
  ```

### 8.3.3 private

- 私有访问权限，修饰的成员只能被本类访问

- 适用于类内部使用的成员，实现封装

- 示例：

  ```java
  public class PrivateClass {
      private int privateVariable;
      private void privateMethod() {
          // 方法实现
      }
      
      public void accessPrivate() {
          privateVariable = 10; // 本类可以访问
          privateMethod(); // 本类可以访问
      }
  }
  ```

### 8.3.4 default

- 默认访问权限，修饰的成员只能被同一包内的类访问

- 适用于包内共享的成员

- 示例：

  ```java
  class DefaultClass {
      int defaultVariable;
      void defaultMethod() {
          // 方法实现
      }
  }
  ```

### 8.3.5 interface

- 用于定义接口，接口是一种抽象类型，只包含方法签名和常量

- 示例：

  ```java
  public interface MyInterface {
      void method1();
      void method2();
      int CONSTANT = 100;
  }
  ```

- 特点：

  - 接口中的方法默认是 public abstract

  - 接口中的变量默认是 public static final

  - 一个类可以实现多个接口

  - 接口可以继承其他接口

### 8.3.6 abstract

- 用于修饰抽象类和抽象方法

- 示例：

  ```java
  public abstract class AbstractClass {
      public abstract void abstractMethod();
      
      public void concreteMethod() {
          // 具体实现
      }
  }
  ```

- 特点：

  - 抽象类不能实例化

  - 抽象类可以包含抽象方法和具体方法

  - 子类必须实现所有抽象方法，否则子类也必须是抽象类

  - 抽象方法只有方法签名，没有方法体

### 8.3.7 static

- 用于修饰静态成员，属于类而非对象

- 示例：

  ```java
  public class StaticExample {
      public static int staticVariable = 10;
      
      public static void staticMethod() {
          // 静态方法实现
      }
      
      public void instanceMethod() {
          // 实例方法实现
      }
  }
  ```

- 特点：

  - 静态成员在类加载时初始化

  - 静态成员可以通过类名直接访问

  - 静态方法不能访问实例成员

  - 静态变量在内存中只有一个副本

### 8.3.8 final

- 用于修饰类、方法和变量

- 示例：

  ```java
  public final class FinalClass {
      public final int FINAL_VARIABLE = 100;
      
      public final void finalMethod() {
          // 方法实现
      }
  }
  ```

- 特点：

  - final 类：不可被继承

  - final 方法：不可被重写

  - final 变量：不可被修改，必须初始化

  - final 引用：引用不可变，但引用的对象内容可以变

## 8.4 注意事项

1. 不能用作标识符

关键字不能被用作变量名、方法名、类名或其他标识符。例如，以下代码是错误的：

```java
int int = 10; // 错误：int是关键字
class class { } // 错误：class是关键字
```

2. 区分关键字与保留字

Java 中有三个保留字：const、goto、strictfp。这些单词虽然目前没有特定用途，但被 Java 保留，不能用作标识符。

3. 注意关键字的大小写

Java 关键字全部由小写字母组成，使用大写字母的单词不是关键字。例如，Int 不是关键字，而 int 是关键字。

4. 了解关键字的作用域

不同的关键字有不同的作用域，例如：

- public、protected、private 用于控制访问权限

- static、final 用于修饰成员

- if、else、for 等用于控制流程

5. 正确使用上下文

关键字必须在正确的上下文中使用，例如：

- class 关键字只能用于定义类

- extends 关键字只能用于类的继承

- try 关键字必须与 catch 或 finally 配合使用
