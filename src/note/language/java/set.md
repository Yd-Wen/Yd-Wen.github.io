---
title: 7 集合
icon: set
date: 2024-03-10
category: 编程语言
tag: 
    - Java
---

Java 集合框架是 Java 中用于存储和操作对象的工具类集合，提供了一套统一的接口和实现，使数据结构的使用更加方便和高效。

<!-- more -->

## 7.1 集合框架的整体结构

Java 集合框架主要分为以下几部分：

1. Collection 接口：存储单个元素的集合

   - List：有序集合，允许重复元素

   - Set：无序集合，不允许重复元素

   - Queue：队列，按特定顺序处理元素

2. Map 接口：存储键值对的集合

   - 不继承自 Collection 接口

   - 通过键来存储和检索值

3. 工具类：

   - Collections：提供集合操作的静态方法

   - Arrays：提供数组操作的静态方法

## 7.2 主要接口及其特点

### 7.2.1 Collection 接口

- List：

  - 有序集合，元素有索引

  - 允许重复元素

  - 常用实现：ArrayList、LinkedList、Vector

- Set：

  - 无序集合，元素无索引

  - 不允许重复元素

  - 常用实现：HashSet、LinkedHashSet、TreeSet

- Queue：

  - 队列，通常按 FIFO（先进先出）顺序处理元素

  - 常用实现：LinkedList、PriorityQueue

### 7.2.2 Map 接口

- 特点：

  - 存储键值对

  - 键唯一，值可重复

  - 通过键快速查找值

- 常用实现：

  - HashMap：基于哈希表，无序。

  - LinkedHashMap：基于哈希表，保持插入顺序。

  - TreeMap：基于红黑树，按键排序。

  - Hashtable：线程安全，已被 HashMap 替代。

## 7.3 常用实现类及其特性

### 7.3.1 List 实现类

| 实现类 | 底层结构 | 特点 | 适用场景 |
|--------|----------|------|----------|
| ArrayList | 动态数组 | 随机访问快，插入删除慢 | 频繁随机访问，较少插入删除 |
| LinkedList | 双向链表 | 插入删除快，随机访问慢 | 频繁插入删除，较少随机访问 |
| Vector | 动态数组 | 线程安全，性能较低 | 多线程环境 |

### 7.3.2 Set 实现类

| 实现类 | 底层结构 | 特点 | 适用场景 |
|--------|----------|------|----------|
| HashSet | 哈希表 | 无序，去重 | 快速查找，不关心顺序 |
| LinkedHashSet | 哈希表 + 链表 | 保持插入顺序，去重 | 需要保持插入顺序 |
| TreeSet | 红黑树 | 按键排序，去重 | 需要排序的场景 |

### 7.3.3 Map 实现类

| 实现类 | 底层结构 | 特点 | 适用场景 |
|--------|----------|------|----------|
| HashMap | 哈希表 | 无序，键唯一 | 快速查找，不关心顺序 |
| LinkedHashMap | 哈希表 + 链表 | 保持插入顺序，键唯一 | 需要保持插入顺序 |
| TreeMap | 红黑树 | 按键排序，键唯一 | 需要按键排序 |
| Hashtable | 哈希表 | 线程安全，性能较低 | 多线程环境（已被 ConcurrentHashMap 替代） |

## 7.4 集合的使用场景

1. ArrayList：适用于需要频繁随机访问元素的场景，如存储学生列表、产品列表等

2. LinkedList：适用于需要频繁插入删除元素的场景，如队列、栈等数据结构

3. HashSet：适用于需要快速去重的场景，如存储不重复的用户 ID

4. TreeSet：适用于需要排序的场景，如存储按名称排序的联系人

5. HashMap：适用于需要键值对映射的场景，如存储用户信息（键为用户 ID，值为用户对象）

6. LinkedHashMap：适用于需要保持插入顺序的键值对场景，如缓存实现

7. TreeMap：适用于需要按键排序的键值对场景，如按日期排序的事件记录

## 7.5 集合的遍历方式

### 7.5.1 List 遍历

- for 循环：

  ```java
  for (int i = 0; i < list.size(); i++) {
      System.out.println(list.get(i));
  }
  ```

- 增强 for 循环：

  ```java
  for (Element element : list) {
      System.out.println(element);
  }
  ```

- 迭代器：

  ```java
  Iterator<Element> iterator = list.iterator();
  while (iterator.hasNext()) {
      System.out.println(iterator.next());
  }
  ```

- Stream API（Java 8+）：

  ```java
  list.forEach(System.out::println);
  ```

### 7.5.2 Set 遍历

- 增强 for 循环：

  ```java
  for (Element element : set) {
      System.out.println(element);
  }
  ```

- 迭代器：

  ```java
  Iterator<Element> iterator = set.iterator();
  while (iterator.hasNext()) {
      System.out.println(iterator.next());
  }
  ```

- Stream API（Java 8+）：

  ```java
  set.forEach(System.out::println);
  ```

### 7.5.3 Map 遍历

- 遍历键：

  ```java
  for (Key key : map.keySet()) {
      System.out.println(key + ": " + map.get(key));
  }
  ```

- 遍历值：

  ```java
  for (Value value : map.values()) {
      System.out.println(value);
  }
  ```

- 遍历键值对：

  ```java
  for (Map.Entry<Key, Value> entry : map.entrySet()) {
      System.out.println(entry.getKey() + ": " + entry.getValue());
  }
  ```

- Stream API（Java 8+）：

  ```java
  map.forEach((key, value) -> System.out.println(key + ": " + value));
  ```

## 7.6 集合的性能对比

### 7.6.1 List 性能对比

| 操作 | ArrayList | LinkedList |
|------|-----------|------------|
| 随机访问 | O(1) | O(n) |
| 头部插入 | O(n) | O(1) |
| 中间插入 | O(n) | O(n) |
| 尾部插入 | O(1) | O(1) |
| 删除元素 | O(n) | O(n) |

### 7.6.2 Set 性能对比

| 操作 | HashSet | LinkedHashSet | TreeSet |
|------|---------|---------------|---------|
| 插入 | O(1) | O(1) | O(log n) |
| 查找 | O(1) | O(1) | O(log n) |
| 删除 | O(1) | O(1) | O(log n) |
| 遍历 | O(n) | O(n) | O(n) |

### 7.6.3 Map 性能对比

| 操作 | HashMap | LinkedHashMap | TreeMap |
|------|---------|---------------|---------|
| 插入 | O(1) | O(1) | O(log n) |
| 查找 | O(1) | O(1) | O(log n) |
| 删除 | O(1) | O(1) | O(log n) |
| 遍历 | O(n) | O(n) | O(n) |

## 7.7 集合的线程安全性

- 非线程安全：ArrayList、LinkedList、HashSet、HashMap 等

- 线程安全：

  - Vector：同步的 ArrayList

  - Hashtable：同步的 HashMap

  - Collections.synchronizedXXX()：返回同步的集合

  - ConcurrentHashMap：线程安全的 HashMap 实现，性能优于 Hashtable

## 7.8 集合的最佳实践

1. 根据使用场景选择合适的集合：

   - 需要随机访问：ArrayList

   - 需要频繁插入删除：LinkedList

   - 需要去重：Set 实现类

   - 需要键值对：Map 实现类

2. 初始化时指定容量：

   ```java
   List<String> list = new ArrayList<>(100); // 指定初始容量
   Map<String, Integer> map = new HashMap<>(16); // 指定初始容量
   ```

3. 使用泛型：

   ```java
   List<String> list = new ArrayList<>(); // 避免类型转换错误
   ```

4. 使用增强 for 循环或 Stream API：

   ```java
   // 增强 for 循环
   for (String item : list) {
       // 处理元素
   }
   
   // Stream API
   list.stream()
       .filter(item -> item.startsWith("A"))
       .forEach(System.out::println);
   ```

5. 注意空指针异常：

   ```java
   // 检查集合是否为 null
   if (list != null && !list.isEmpty()) {
       // 处理集合
   }
   ```
