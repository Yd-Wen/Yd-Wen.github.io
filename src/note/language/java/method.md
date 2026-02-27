---
title: 4 方法
icon: method
date: 2024-02-05
category: 编程语言
tag: 
    - Java
---

## 4.1 介绍

1. 什么是方法？

方法是程序中最小的执行单元，是一组为了实现特定功能的代码块。

2. 实际开发中，什么时候用到方法？

- 重复的代码可以抽取到方法中

- 具有独立功能的代码可以抽取到方法中

- 需要被多次调用的代码可以抽取到方法中

3. 实际开发中，方法有什么好处？

- **提高代码复用性**：避免重复编写相同的代码

- **提高代码可维护性**：修改功能时只需修改对应方法

- **提高代码可读性**：将复杂逻辑分解为多个方法

- **便于团队协作**：不同开发者可以负责不同的方法

## 4.2 定义和调用

### 4.2.1 语法结构

```java
[修饰符] 返回类型 方法名([参数列表]) [throws 异常列表] {
    // 方法体
    [return 返回值;]
}
```

- 修饰符：可选，如 `public`、`private`、`protected`、`static`、`final` 等

- 返回类型：方法返回值的数据类型，无返回值时使用 `void`

- 方法名：遵循驼峰命名法，首字母小写

- 参数列表：方法接收的参数，格式为 `数据类型 参数名`，多个参数用逗号分隔

- 异常列表：方法可能抛出的异常，可选

- 方法体：方法的具体实现

- return 语句：返回方法结果，无返回值时可省略

1. 最简单的方法

```java
// 定义
public static void methodName(){
    // 方法体
    System.out.println("Hello, Method!");
}

// 调用
methodName();
```

2. 带参数的方法

```java
// 定义
public static void methodName(String name, int age){
    // 方法体
    System.out.println("Name: " + name + ", Age: " + age);
}

// 调用：参数的数据类型必须与定义的数据类型一一对应
methodName("Alice", 25);
```

3. 带返回值的方法

```java
// 定义
public static int add(int a, int b){
    // 方法体
    int sum = a + b;
    return sum;
}

// 调用：参数的数据类型必须与定义的数据类型一一对应，变量类型与返回值类型必须相同
int result = add(10, 20);
System.out.println("Sum: " + result);
```

### 4.2.2 参数详解

- 形式参数：方法定义时声明的参数

- 实际参数：方法调用时传递的参数

- 参数传递：

  - 基本数据类型：传递值的副本

  - 引用数据类型：传递引用的副本

## 4.3 重载

1. 重载的定义

同一个类中，方法名相同，但参数列表不同的方法。与返回值类型无关。

2. 重载的条件

- 方法名相同

- 参数列表不同（参数类型、参数个数或参数顺序不同）

- 返回值类型可以相同也可以不同

- 修饰符可以相同也可以不同

3. 重载的示例

```java
// 示例1：参数个数不同
public static int add(int a, int b){
    return a + b;
}

public static int add(int a, int b, int c){
    return a + b + c;
}

// 示例2：参数类型不同
public static double add(double a, double b){
    return a + b;
}

// 示例3：参数顺序不同
public static void display(String name, int age){
    System.out.println("Name: " + name + ", Age: " + age);
}

public static void display(int age, String name){
    System.out.println("Age: " + age + ", Name: " + name);
}
```

4. 重载的优点

- 提高代码可读性：使用相同的方法名表示相似的功能

- 方便方法调用：根据参数自动选择合适的方法

- 减少方法名的数量：避免为相似功能创建不同的方法名

## 4.4 方法的作用域

1. 局部变量

在方法内部定义的变量，只在方法内部有效。

```java
public static void method(){
    int localVariable = 10; // 局部变量
    System.out.println(localVariable); // 可以访问
}

public static void main(String[] args){
    // System.out.println(localVariable); // 无法访问，编译错误
}
```

2. 成员变量

在类中定义的变量，在整个类中有效。

```java
public class Example {
    int memberVariable = 20; // 成员变量
    
    public void method1(){
        System.out.println(memberVariable); // 可以访问
    }
    
    public void method2(){
        System.out.println(memberVariable); // 可以访问
    }
}
```

## 4.5 递归方法

1. 递归的定义

方法调用自身的过程。

2. 递归的条件

- 基准条件：递归的终止条件

- 递归条件：方法调用自身的条件

3. 递归的示例

```java
// 计算阶乘
public static int factorial(int n){
    // 基准条件
    if (n == 1) {
        return 1;
    }
    // 递归条件
    return n * factorial(n - 1);
}

// 计算斐波那契数列
public static int fibonacci(int n){
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

::: note
**递归的优缺点**

- 优点：

  - 代码简洁，逻辑清晰

  - 适合解决分治问题

- 缺点：

  - 可能导致栈溢出

  - 可能存在重复计算

  - 执行效率相对较低
:::

## 4.6 内存原理

### 4.6.1 执行过程

1. 方法调用：当方法被调用时，会在栈内存中创建一个栈帧

2. 栈帧：包含方法的局部变量、参数、返回地址等信息

3. 方法执行：执行方法体中的代码

4. 方法返回：执行完毕后，栈帧被销毁，返回到调用处

### 4.6.2 值传递和引用传递

1. 值传递

基本数据类型的参数传递是值传递，传递的是值的副本。

```java
public static void changeValue(int value){
    value = 100;
    System.out.println("方法内：" + value); // 输出 100
}

public static void main(String[] args){
    int num = 10;
    changeValue(num);
    System.out.println("方法外：" + num); // 输出 10，值未改变
}
```

2. 引用传递

引用数据类型的参数传递是引用传递，传递的是引用的副本，但指向同一个对象。

```java
public static void changeArray(int[] arr){
    arr[0] = 100;
    System.out.println("方法内：" + arr[0]); // 输出 100
}

public static void main(String[] args){
    int[] array = {10, 20, 30};
    changeArray(array);
    System.out.println("方法外：" + array[0]); // 输出 100，值已改变
}
```

### 4.6.3 递归方法的内存管理

递归方法会在栈内存中创建多个栈帧，需要注意栈溢出的问题。

```java
public static int factorial(int n){
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1); // 递归调用
}
```
