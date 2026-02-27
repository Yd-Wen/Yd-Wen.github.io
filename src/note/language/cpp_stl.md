---
title: C++ STL 容器
icon: cpp
date: 2024-12-08
category: 编程语言
tag: C++
---

## 主要内容

- string：各种字符串查找、拼接、花式读入。

- set：将丢入的数自动排序、去重。

- vector：不知道开数组开多大的替代。

- priority_queue：可自定义优先级的队列。

- map：不同类型的数据的双向字典。

## vector

向量，变长数组，支持随机访问，不支持任意位置插入，**元素增删一般在末尾进行**。

### 声明

```cpp
#include <vector>

vector<int> a; //不定长的int数组
vector<int> b[3]; //一维长度3，二维长度动态变化的int数组
vector<int> c(a.begin(), a.end());
vector<int> d(5, 5) // 5个元素均为5的数组
vector<int> e(a) // 拷贝
```

### 赋值

```cpp
vector<int> a, b, c, d;
b = a; //赋值运算符重载
c.assign(a.begin(), a.end());
d.assign(5, 9); // 5个元素均为9
```

### 大小

```cpp
vector<int> a;
if(a.empty())
{
	for(int i=0;i<5;i++) a.push_back(i);	
}
cout << "a的容量为：" << a.capacity() << endl;
cout << "a的大小为：" << a.size() << endl;
a.resize(10); //重新指定容器大小，变长填充0，变短截断
a.resize(15, 9); ////重新指定容器大小，变长填充9
```

### 插入删除

```cpp
push_back(element); //尾部插入element
pop_back(); //删除最后一个元素
insert(const_iterator pos,ele); //在迭代器指向的位置pos处插入一个元素ele
insert(const_iterator pos,int count,ele); //在迭代器指向的位置pos处插入count个元素ele
erase(const_iterator pos); //删除迭代器指向的元素
erase(const_iterator begin,const_iterator end); //删除迭代器从begin到end之间的元素
clear(); //删除容器中所有元素
```

### 数据存取

```cpp
at(int idx); //返回索引idx所指的数据  
operator[]; //返回[]内索引所指的数据  
front(); //返回容器中第一个元素  
back(); //返回容器中最后一个元素
```

::: tip
a[0] 通常比 a.at(0) 快，因为它不进行额外的越界检查；a.at(0) 因为进行了越界检查，所以可能会稍微慢一些。
:::

## queue

队列，头文件 queue 主要包括两个容器：

- 循环队列(先进先出) queue

- 优先队列 priority_queue

### 声明

```cpp
#include <queue>
//queue的定义 
queue<int>q1; //定义一个储存数据类型为int的queue容器q1 
queue<double>q2; //定义一个储存数据类型为double的queue容器q2
queue<string>q3; //定义一个储存数据类型为string的queue容器q3
queue<结构体类型>q4; //定义一个储存数据类型为结构体类型的queue容器q4
priority_queue<int> q5; //定义默认的优先级队列，大根堆
```

###  函数

```cpp  
push() //在队列末尾加入一个元素 
pop() //删除队列的第一个元素 
size() //返回队列中元素的个数 
empty() //判断队列是否为空
# queue
front() //返回队列中的第一个元素
back() //返回队列中最后一个元素
# priority_queue
top(); //查询堆顶元素（最大值）
```

### 遍历

```cpp
queue<int> q; //定义一个数据类型为int的queue
q.push(1); //向队列中加入元素1 
q.push(2); //向队列中加入元素2
q.push(3); //向队列中加入元素3
q.push(4); //向队列中加入元素4
while(!q.empty())
{
	cout<<q.front()<<" ";
	q.pop();
}	
```

## set

集合的特点就是不会出现重复的内容。一般用来作查重或去重操作。

### 声明

```cpp
#inclue <set>
set<int> s;  
set<double> s;  
set<string> s;  
set<结构体名> s;
```

### 函数

```cpp
//常用函数（必学）
insert()//插入元素
count()//判断容器中是否存在某个元素
size()//返回容器的尺寸，也可以元素的个数
erase()//删除集合中某个元素
clear()//清空集合
empty()//判断是否为空
begin()//返回第一个节点的迭代器
end()//返回最后一个节点加1的迭代器
rbegin()//反向迭代器
rend()//反向迭代器

//功能函数（进阶）
find(x) //查找等于x的元素，并返回指向该元素的迭代器;若不存在，则返回s.end()
lower_bound(x) //查找大于等于x的元素中最小的一个，并返回指向该元素的迭代器
upper_bound(x) //查找大于x的元素中最小的一个，并返回指向该元素的迭代器
get_allocator()//返回集合的分配器
swap()//交换两个集合的变量
max_size()//返回集合能容纳元素的最大限值
```

### 遍历

1. 使用迭代器遍历

```cpp
set<int>::iterator it;//使用迭代器 
for(it=s.begin();it!=s.end();it++){ cout<<*it<<' '; }
```

set 有一个很重要的特性，那就是***自动升序排序***，在很多场景可以方便使用，那么当需要降序排序的时候需要怎样呢？

- rbegin() 和 rend()：逆向迭代器本来就是实现逆向迭代的功能，所以可以直接使用。

```cpp
set<int>::reverse_iterator it;//使用反向迭代器 
for(it=s.rbegin();it!=s.rend();it++){ cout<<*it<<' ';
```

2. foreach遍历

```cpp
set<int> s;//定义
for(auto it:s){ cout<<it<<' '; }
```

::: tip
auto 用法，c++auto 用法强大，当你无法确定变量的类型时，都可以用 auto 来代替，迭代器 iterator 也可以用 auto 来代替。
:::

```cpp
for(auto it=s.begin();it!=s.end();it++){ cout<<*it<<' '; }
```

## map

map 容器是一个键值对 key-value 的映射，其内部实现是一棵以 key 为关键码的红黑树。Map 的 key 和 value 可以是任意类型，其中 key 必须定义小于号运算符。

### 声明

```cpp
#include <map>
map<string,int> hash;
map<pair<int,int>, vector<int>> test;
```

### 插入

```cpp
map<int, string> ID_Name;
// 如果已经存在键值2015，则会作赋值修改操作，如果没有则插入 
ID_Name[2015] = "Tom";

// 插入单个键值对，并返回插入位置和成功标志，插入位置已经存在值时，插入失败
pair<iterator,bool> insert (const value_type& val);

//在指定位置插入，在不同位置插入效率是不一样的，因为涉及到重排
iterator insert (const_iterator position, const value_type& val);

// 插入多个
void insert (InputIterator first, InputIterator last);

//c++11开始支持，使用列表插入多个   
void insert (initializer_list<value_type> il);
```

### 取值

```cpp
map<int, string> ID_Name;

//ID_Name中没有关键字2016，使用[]取值会导致插入
//因此，下面语句不会报错，但打印结果为空
cout<<ID_Name[2016].c_str()<<endl;

//使用at会进行关键字检查，因此下面语句会报错
ID_Name.at(2016) = "Bob";
```

### 容量查询

```cpp
// 查询map是否为空
bool empty();

// 查询map中键值对的数量
size_t size();

// 查询map所能包含的最大键值对数量，和系统和应用库有关。
// 此外，这并不意味着用户一定可以存这么多，很可能还没达到就已经开辟内存失败了
size_t max_size();

// 查询关键字为key的元素的个数，在map里结果非0即1
size_t count( const Key& key ) const; //
```

### 删除

```cpp

// 删除迭代器指向位置的键值对，并返回一个指向下一元素的迭代器
iterator erase( iterator pos )

// 删除一定范围内的元素，并返回一个指向下一元素的迭代器
iterator erase( const_iterator first, const_iterator last );

// 根据Key来进行删除， 返回删除的元素数量，在map里结果非0即1
size_t erase( const key_type& key );

// 清空map，清空后的size为0
void clear();
```

### 查找

```cpp
// 关键字查询，找到则返回指向该关键字的迭代器，否则返回指向end的迭代器
// 根据map的类型，返回的迭代器为 iterator 或者 const_iterator
iterator find (const key_type& k);
const_iterator find (const key_type& k) const;
```

## string

### 声明

```cpp
#include <string>
string a;
string b(a);
string c = a;
string d("value");
string e = "value";
string f = (n, 's'); //连续n个s
```

### 读取

1. `cin` 读取键盘输入的值：string 对象会自动忽略开头的空白（既空格、换行符、制表符等），并从第一个真正的字符开始读入，直到遇到下一处空白字符。

```cpp
string s;
cin >> s;
cout << s << endl;
```

::: tip
输入 `hello world`，s='hello'。 
:::

2. `getline` 读取一整行：直到遇到换行符才停止读取，期间能读取空格、Tab 等的空白符。

```cpp
// 函数格式
// getline(cin,string对象)
string s;
getline(cin, s);
cout << s1 << endl;
```

::: tip
输入`hello world`，s='hello world'。
:::

### 相加

为什么 string 对象可以加上字符或字符串字面值？

- 实际上是因为它们可以自动转换为 string 类型.

```cpp
string str = "Hello";
string phrase = "world";

string s = str + ','+ phrase+ '\n';
cout << s ;
```

::: tip
判断下面的加法是否正确？

`string str = "Hello";`

1. `string s1 = str + "," + "world";`

2. `string s2 = "Hello" + "," + str;`

答：

1. 正确；

2. 错误。当 string 对象和字符或字符串字面值相加时，必须确保 + 号的两侧的运算对象至少有一个 string。至于(1)，str + “,”会返回一个 string 类。
:::

### 遍历

1. 使用下标运算符 `[]`

```cpp
string s = "Hello world!";
cout << s[0] << endl;
cout << s[s.size()-1] << endl;
cout << s << endl;
s[0] = 'h';
cout << s << endl;
```

2. 使用迭代器

```cpp
string s = "Hello world!";
for (auto i = s.begin(); i != s.end(); i++){
	cout << *i  << ",";
}
cout << endl;
```

3. 使用基于范围的 for 语句（C++ 11）

```cpp
string str("some string");
for (auto c : str)
	cout << c << ",";
cout << endl;
```

::: tip
当需要修改 str 中的字符时，可以使用引用：for (auto &c : str)。
:::

### 子字符串

- 格式：使用 `s.substr(pos,n)`。

- 解释：返回一个 string 对象，返回的对象包含 s 从 pos 下标开始的 n 个字符。pos 和 n 均为可选参数。pos 默认为下标 0；n 默认为 s.size()-pos。

### 插入

1. 迭代器

```cpp
string s1("value");

s1.insert(s1.begin(), 's');//执行后，s1为"svalue"
s1.insert(s1.begin(), 1, 's');//执行后，s1为"ssvalue"
s1.insert(s1.begin(), s1.begin(), ++s1.begin());//执行后，s1为"sssvalue"
s1.insert(s1.end(), {'1','2'});//执行后，s1为"sssvalue12"
```

2. 下标

```cpp
// 1. basic_string& insert( size_type index, size_type count, CharT ch )
string s1("value");

s1.insert(0,2,’s’); //执行后，s1为” ssvalue”
s1.insert(5,2,’s’); //执行后，s1为” valuess”

//2. basic_string& insert( size_type index, const CharT* s );  
//   basic_string& insert( size_type index, const basic_string& str );

string s1("value");
string s3 = "value";
const char* cp = "value";

s1.insert(0,s3);//执行完后，s1为" valuevalue"
s1.insert(0,cp); //执行完后，s1为" valuevalue"

//3. basic_string& insert( size_type index, const basic_string& str,  size_type index_str, size_type count );
string s1("value");
string s3 = "value";
const char* cp = "value";
s1.insert(0,s3,1,2);//执行后，s1为” alvalue”

//4. basic_string& insert( size_type index, const CharT* s, size_type count );
string s1("value");
const char* cp = "value";
s1.insert(0, cp,3); //执行后，s1为” valvalue”
```

### 删除

1. basic_string & erase(size_type pos=0, size_type n=npos)：如果 string 对象 s 调用，它删除 s 从 pos 下标开始的 n 个字符，并返回删除后的 s。当 pos > s.size() 时，报错。

2. iterator erase(const_iterator position)：如果 string 对象 s 调用，它删除 s 迭代器 position 位置的字符，并返回下一个字符的迭代器。

3. iterator erase(const_iterator first, const_iterator last)：如果 string 对象 s 调用，它删除 `[first,last)` 区间的字符，并返回 last 字符的迭代器。

```cpp
string s1("value");
string s2("value");
string s3("value");
string s4("value");

s1.erase();//执行后，s1为空
s2.erase(0,2); //执行后，s2为”lue”
s3.erase(s3.begin());//执行后，s3为”alue”
s4.erase(s4.begin(),++s4.begin());//执行后，s4为”alue”

```

### 追加

append 是在 string 对象的末尾进行插入操作。这一点使用 + 运算符也能做到。

```cpp
string s("i love China!");
s.append("forever");//执行完后，s=” i love China! forever”
```

### 替换

replace 可看作是 erase 和 insert 的结合体，它删除指定的字符，删除后再插入指定的字符。和 insert一样，可以通过下标或者是迭代器指定位置。

### 赋值

assign 方法可以理解为先将原字符串清空，然后赋予新的值作替换。

- string& assign (const string& str);

- string& assign (const string& str, size_t subpos, size_t sublen);

- string& assign (const char* s);

- string& assign (const char* s, size_t n);

- string& assign (size_t n, char c);

- template string& assign (InputIterator first, InputIterator last);

- string& assign (initializer_list il);

### 搜索

string 提供 6 个不同的搜索函数，每个函数都有 4 个重载版本，所有函数的返回值都为 string::size_type 值，表示匹配发生位置的下标。

| string搜索函数                | 描述                          |
| ------------------------- | --------------------------- |
| s.find(args)              | 在 s 中查找第一次出现 args 的下标           |
| s.rfind(args)             | 在 s 中查找最后一次出现 args 的下标          |
| s.find_first_of(args)     | 在 s 中查找第一个在 args 中出现的字符，返回其下标   |
| s.find_first_not_of(args) | 在 s 中查找第一个不在 args 中出现的字符，返回其下标  |
| s.find_last_of(args)      | 在 s 中查找最后一个在 args 中出现的字符，返回其下标  |
| s.find_last_not_of(args)  | 在 s 中查找最后一个不在 args 中出现的字符，返回其下标 |

其中 args 参数格式如下：

| 格式       | 描述                                                  |
| -------- | --------------------------------------------------- |
| c,pos    | 搜索单个字符。从 s 中位置 pos 开始查找字符 c。pos 可省略，默认值为 0                 |
| s2,pos   | 搜索字符串。从 s 中位置 pos 开始查找字符串 string 对象 s2。pos 可省略，默认值为 0        |
| cp,pos   | 搜索字符串。从 s 中位置 pos 开始查找指针 cp 指向的以空字符结尾的 C 风格字符串。pos 可省略，默认值为 0 |
| cp,pos,n | 从 s 中位置 pos 开始查找指针 cp 指向的数组的前 n 个字符。                        |

### 比较

string 对象中有一个成员函数 compare，它也可以比较字符串，并且有 6 种不同的参数形式，比较字符串时更加灵活。compare 的参数形式如下：

| 参数形式s.compare()        | 说明                                     |
| ---------------------- | -------------------------------------- |
| s2                     | 比较 s 和 s2                                 |
| pos1, n1, s2           | 将 s 中从 pos1 开始的 n1 个字符与 s2 比较                  |
| pos1, n1, s2, pos2, n2 | 将 s 中从 pos1 开始的 n1 个字符与 s2 中从 pos2 开始的 n2 个字符比较    |
| cp                     | 比较 s 与 cp 指向的以空字符结尾的数组                     |
| pos1, n1, cp           | 将 s 中从 pos1 开始的 n1 个字符与 cp 指向的以空字符结尾的数组比较      |
| pos1, n1, cp,n2        | 将 s 中从 pos1 开始的 n1 个字符与 cp 指向的以空字符结尾的数组前 n2 个字符比较 |

::: warning
- 若 s= 指定的字符串，s.compare()返回0
- 若 s> 指定的字符串，s.compare()返回正数
- 若 s< 指定的字符串，s.compare()返回负数
:::

### 转换

```cpp
string pi = "pi is " + to_string(3.1415926);
string perfect = to_string(1 + 2 + 4 + 7 + 14) + " is a perfect number";
cout << pi << '\n';
cout << perfect << '\n';
```