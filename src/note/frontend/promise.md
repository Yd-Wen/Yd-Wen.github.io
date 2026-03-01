---
date: 2026-01-27
title: Promise
icon: promise
category: 
    - 前端开发
tag: 
    - promise
---

## 1 异步与同步

JavaScript 代码实际上是单线程的程序，那就决定了代码是一行一行的顺序执行的，处理一些简短、快速的运算操作时主线程就够了，如果在同步程序中发送了网络请求且请求超时了，下面的代码又依赖于网络请求，那么整个网页将会失去响应。

一个异步过程的执行将不再与原有的序列有顺序关系，特别是对发送网络请求，不确保响应时间时候，异步是最优选择，网络请求无论多长时间，程序将不会在此等待，直接走下面的代码，等异步的请求有了响应，主线程几乎不用关心异步任务的状态了，自己完成回调后续的操作，程序间互不影响。

即：**同步按代码顺序执行，异步不按照代码顺序执行，异步的执行效率更高**。 

::: tip
如果涉及到网络请求没有依赖关系的话，异步请求是效率最高的。

但是下一个的方法依赖于上一个网络请求的结果，那么必须使用 await 命令，将异步结果等待返回之后再执行后面的代码。
:::

![异步与同步对比](https://gitee.com/yindong-wen/mypicgo_img/raw/master/image/20260301222256638.png)

## 2 回调地狱

回调地狱：异步调用获取到结果后，为下一个异步函数提供参数，此时就会一层一层的出现回调里面嵌入回调，导致层次很深，代码维护起来特别复杂。

以 uniapp 里面的网络请求 uni.request() 进行异步请求为例，通过 success 回调函数获取数据：

```jsx
getData(){
  //获取分类列表id
  uni.request({
    url:"<https://ku.qingnian8.com/dataApi/news/navlist.php>",
    success:res=>{
      let id=res.data[0].id
      // 根据分类id获取该分类下的所有文章
      uni.request({
        url:"<https://ku.qingnian8.com/dataApi/news/newslist.php>",
        data:{
          cid:id
        },
        success:res2=>{
          //获取到一篇文章的id，根据文章id找到该文章下的评论
          let id=res2.data[0].id;
          uni.request({
            url:"<https://ku.qingnian8.com/dataApi/news/comment.php>",
            data:{
              aid:id
            },
            success:res3=>{
              //找到该文章下所有的评论
              console.log(res3)
            }
          })
        }
      })
    }
  })
}
```

**回调函数方案**：在没有 ES6 的 promise 时候，优化方法是将每一个 request 请求封装出一个函数将结果进行返回，这就是原来常用的回调函数方案。将上述代码可以改造成如下代码：

```jsx
methods: {
    //先获取导航分类接口，将结果进行返回，到调用函数的地方获取
    getNav(callback){
      uni.request({
        url:"<https://ku.qingnian8.com/dataApi/news/navlist.php>",
        success:res=>{
          callback(res)
        }
      })
    },

    //获取文章数据，将文章列表进行返回
    getArticle(id,callback){
      uni.request({
        url:"<https://ku.qingnian8.com/dataApi/news/newslist.php>",
        data:{
          cid:id
        },
        success:res=>{
          callback(res)
        }
      })
    },

      //获取文章下的所有评论
      getComment(id,callback){
        uni.request({
          url:"<https://ku.qingnian8.com/dataApi/news/comment.php>",
          data:{
            aid:id
          },
          success:res=>{
            callback(res)
          }
        })
      }
} 

//在onload初始化后调用相应的函数
onLoad() {
  //调用导航函数，并拿到函数的返回值
  this.getNav(res=>{
    let id=res.data[0].id;
    //拿到分类id作为参数
    this.getArticle(id,res2=>{
      //拿到文章id作为参数
      let id=res2.data[0].id;
      this.getComment(id,res3=>{
        //最终获取到第一个分类下，第一篇文章下，所有评论
        console.log(res3)
      })
    })
  });
} 
```

上述方案并没有解决回调地狱的问题，还是回调里面嵌套回调，只是把函数独立出来了，看着清晰条理了一些而已，但是维护仍有难度，随着ES6的普及，这种方案逐渐边缘化，取而代之的是 **promise方案**。

## 3 ES6：Promise

`Promise` 是 ES6 引入的异步编程核心解决方案，用于替代嵌套回调函数（回调地狱），它通过**状态管理**来处理异步操作的结果。 `promise` 本质上是一个构造函数，可以用它实例化一个对象。

对象有 resolve、reject、all，原型上有 then、catch 方法。

promise 对象有三种状态：

- pending（初识状态/进行中）

- resolved 或 fulfilled（成功）

- rejected（失败）

**Promise方案**：

```jsx
methods: {
    //先获取导航分类接口，将结果进行返回，到调用函数的地方获取
    getNav(callback){
      return new Promise((resolve,reject)=>{
        uni.request({
          url:"<https://ku.qingnian8.com/dataApi/news/navlist.php>",
          success:res=>{
            resolve(res)
          },
          fail:err=>{
            reject(err)
          }
        })
      })
    },

    //获取文章数据，将文章列表进行返回
    getArticle(id){
      return new Promise((resolve,reject)=>{
        uni.request({
          url:"<https://ku.qingnian8.com/dataApi/news/newslist.php>",
          data:{
            cid:id
          },
          success:res=>{
            resolve(res)
          },
          fail:err=>{
            reject(err)
          }
        })
      })
    },

      //获取文章下的所有评论
      getComment(id){
        return new Promise((resolve,reject)=>{
          uni.request({
            url:"<https://ku.qingnian8.com/dataApi/news/comment.php>",
            data:{
              aid:id
            },
            success:res=>{
              resolve(res)
            },
            fail:err=>{
              reject(err)
            }
          })
        })
}

//promise链式调用
this.getNav().then(res=>{
  let id=res.data[0].id;
  return this.getArticle(id);
}).then(res=>{
  let id=res.data[0].id;
  return this.getComment(id)
}).then(res=>{
  console.log(res)
}) 
```

经过一番改造，代码的可读性更好了，虽然多了几行代码，但是在调用的时候更优雅更清晰。

这种调用方式还是有嵌套不够清晰，还有大杀器，就是目前最为流行的 await/async，这是 ES7 新引入的概念。

## 4 ES7：异步处理同步化

`async`/ `await` 是**Promise 的语法糖**，核心目的是让异步代码的写法和同步代码一致，大幅提升可读性。

- `async`：修饰函数，该函数的返回值**必然是 Promise**（即使返回普通值，也会被包装成 resolved 的 Promise）。

- `await`：只能在 `async` 函数内使用，作用是**暂停代码执行**（不阻塞主线程），等待 Promise 完成并返回其 resolved 结果；若 Promise 失败，`await` 会抛出错误，需用 `try/catch` 捕获。

使用示例：

```jsx
// 定义返回Promise的异步函数
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("获取到数据"), 1000);
  });
}

// async/await调用（同步化写法）
async function handleData() {
  try {
    // 等待异步操作完成，代码在此“暂停”
    const result = await fetchData();
    console.log(result); // 1秒后输出：获取到数据
    console.log("这行代码会等上面的异步完成后执行"); // 同步执行的效果
  } catch (error) {
    console.error("出错了：", error); // 捕获异步错误
  }
}

handleData();
```

**异步处理同步化方案**：将 `promise` 链式调用替换为 `async`/ `await` 顺序调用。

```jsx
async onLoad() {
  let id,res;
  res=await this.getNav();
  id=res.data[0].id;
  res=await this.getArticle(id);
  id=res.data[0].id;
  res=await this.getComment(id);
  console.log(res)
} 
```

以上代码就是最终的改造版。

可以看到 `onload` 函数必须有 `async` 命令，在调用函数的部分，前面都加了一个 `await`，这个命令的意思就是等这一行的异步方法执行成功后，将返回的值赋值给 `res` 变量，然后才能再走下一行代码，这就是将原来的异步编程改为了同步编程，这就是**异步处理同步化**。

::: tip
`await` / `async` 这两个命令是成对出现的。

如果使用 await 没有在函数中使用 async 命令，那就会报错。

如果直接使用 async 没有使用 await 不会报错，只是返回的函数是个 promise，但是没有意义，所以这两个一起使用才会发挥出它们本身重要的作用。
:::

## 5 参考资料

- [ES6 Promise的用法 async/await异步处理同步化](https://www.bilibili.com/read/cv18799030/)
