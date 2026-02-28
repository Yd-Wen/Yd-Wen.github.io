---
title: 10 多态
icon: polymorphism
date: 2024-03-17
category: 编程语言
tag: 
    - Java
---

## 10.1 概述

1. 什么是多态

- 同类型的对象，表现出不同形态。

2. 表现形式

- 父类类型 对象名 = 子类对象；

3. 前提条件

- 有继承/实现关系

- 有父类引用指向子类对象

- 有方法重写

4. 优点

- 使用父类型作为参数，接受所有子类对象，体现多态的扩展性与便利。

5. 应用场景

![应用场景.png](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/java002.png)

## 10.2 调用成员特点

### 10.2.1 成员变量

- 调用规则：编译看左边，运行看左边

- 解释：当通过多态方式调用成员变量时，编译器会检查父类是否有该变量，运行时也会使用父类的变量值

- 示例：

  ```java
  class Father {
      int age = 40;
  }
  
  class Son extends Father {
      int age = 20;
  }
  
  public class Test {
      public static void main(String[] args) {
          Father f = new Son(); // 多态
          System.out.println(f.age); // 输出 40，使用父类的age
      }
  }
  ```

- 原因：成员变量不具有多态性，它在编译时就已经确定了类型

### 10.2.2 成员方法

- 调用规则：编译看左边，运行看右边

- 解释：当通过多态方式调用成员方法时，编译器会检查父类是否有该方法，运行时会调用子类的重写方法

- 示例：

  ```java
  class Father {
      void show() {
          System.out.println("Father's show method");
      }
  }
  
  class Son extends Father {
      @Override
      void show() {
          System.out.println("Son's show method");
      }
  }
  
  public class Test {
      public static void main(String[] args) {
          Father f = new Son(); // 多态
          f.show(); // 输出 Son's show method，调用子类的show方法
      }
  }
  ```

- 原因：成员方法具有多态性，运行时会根据实际对象的类型来调用相应的方法

### 10.2.3 静态方法

- 调用规则：编译看左边，运行看左边

- 解释：静态方法属于类，不具有多态性，调用时会使用父类的静态方法

- 示例：

  ```java
  class Father {
      static void staticMethod() {
          System.out.println("Father's static method");
      }
  }
  
  class Son extends Father {
      static void staticMethod() {
          System.out.println("Son's static method");
      }
  }
  
  public class Test {
      public static void main(String[] args) {
          Father f = new Son(); // 多态
          f.staticMethod(); // 输出 Father's static method，使用父类的静态方法
      }
  }
  ```

::: important
- 成员变量：编译和运行都看左边（父类）

- 成员方法：编译看左边（父类），运行看右边（子类）

- 静态方法：编译和运行都看左边（父类）
:::

## 10.3 优势与弊端

1. 优势

- 方法中，使用父类型作为参数，可以接收所有子类对象

2. 弊端

- 不能使用子类的特有功能

3. 类型转换方式

- 自动类型转换：Person p = new Student();

- 强制类型转换：Student s = (Person) p;

4. 强制类型转换解决的问题

- 可以转换成真正的子类类型，从而调用子类特有的功能

- 转换类型与真实类型不一致时会报错

- 转换的时候使用instanceof关键字进行判断
