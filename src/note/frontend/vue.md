---
date: 2026-01-26
title: Vue
icon: vue
category: 
    - 前端开发
tag: 
    - vue
---

## 1 简介

Vue官网见 [Vue.js](https://cn.vuejs.org/)

### 1.1 渐进式框架

Vue 既是一个框架，也是一个生态系统，覆盖了大部分前端开发的常见需求。Web 世界十分多样化，不同开发者构建的应用在形式和规模上差异很大。因此，Vue 的设计注重灵活性和可逐步集成的特点。根据具体需求，你可以用不同方式使用 Vue：

- 无需构建步骤，渐进式增强静态 HTML

- 在任何页面中作为 Web Components 嵌入

- 单页应用（SPA）

- 全栈/服务端渲染（SSR）

- Jamstack/静态站点生成（SSG）

- 开发桌面端、移动端、WebGL 甚至命令行终端界面

### 1.2 单文件组件

单文件组件是 Vue 的标志性功能。

在大多数启用了构建工具的 Vue 项目中，可以使用类似 HTML 格式的文件来书写 Vue 组件，它被称为**单文件组件** (也被称为 `*.vue` 文件，Single-File Components，**SFC**)。

顾名思义，Vue 的单文件组件会将一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) 封装在同一个文件里。用单文件组件的格式编写计数器示例：

```html
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

### 1.3 API 风格

Vue组件可以按照两种不同风格书写：选项式和组合式。

两种 API 风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式 API 是在组合式 API 的基础上实现的！关于 Vue 的基础概念和知识在它们之间都是通用的。

- **选项式 API**

  使用选项式 API，可以用包含多个选项的对象来描述组件的逻辑，如 `data`、`methods` 和 `mounted`。选项所定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例。

```html
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件处理器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

- **组合式 API**

  通过组合式 API，可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 [**`<script setup>`**](https://cn.vuejs.org/api/sfc-script-setup.html) 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

```html
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## 2 基础

### 2.1 创建应用

**前提条件**

- 熟悉命令行

- 已安装 `^20.19.0 || >=22.12.0` 版本的 [**Node.js**](https://nodejs.org/)

在本节中，我们将介绍如何在本地搭建 Vue [**单页应用**](https://cn.vuejs.org/guide/extras/ways-of-using-vue.html#single-page-application-spa)。创建的项目将使用基于 [**Vite**](https://vitejs.dev/) 的构建设置，并允许我们使用 Vue 的[**单文件组件**](https://cn.vuejs.org/guide/scaling-up/sfc.html) (SFC)。

创建步骤：

1. 命令行打开工作目录

```bash
npm create vue@latest
```

2. 安装依赖并启动开发服务器

```bash
cd <your-project-name>
npm install # 安装vue项目依赖（node_modules文件夹）
npm run dev
```

3. 访问5173端口

在浏览器中访问 `http://localhost:5173/`，即可看到 Vue 应用的运行效果。

### 2.2 项目结构

```jsx
.vscode           ---VSCode工具的配置文件夹
node_modules      ---Vue项目的运行依赖
public            ---源码文件夹（浏览器图标）
src               ---源码文件夹
.gitignore        ---git忽略文件
index.html        ---入口文件
package.json      ---信息描述文件
README.md         ---注释文件
vite.config.js    ---Vue配置文件
```

### 2.3 模板语法

- **文本插值**

  最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

```html
<template>
  <h3>模板语法</h3>
  <p>{{ msg }}</p>
</template>

<script>
export default{
  data(){
    return{
      msg:"神奇的语法"
    }
  }
}
</script>
```

双大括号标签会替换为 `script` 中 `msg` 属性的值。

- **原始 HTML**

  双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，需要使用 [**`v-html` 指令**](https://cn.vuejs.org/api/built-in-directives.html#v-html)。

```html
<template>
  <p v-html="rawHTML"></p>
  <!-- <p>rawHTML</p> -->
</template>

<script>
export default{
  data(){
    return{
      rawHTML:"<a href='https://www.baidu.com'>百度</a>"
    }
  }
}
</script>
```

- **JavaScript 表达式**

  Vue 在所有的数据绑定中都支持完整的 JavaScript 表达式。

```html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div :id="`list-${id}`"></div>
```

::: tip
这些表达式都会被作为 JavaScript ，以当前组件实例为作用域解析执行。在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：

- 在文本插值中 (双大括号)

- 在任何 Vue 指令 (以 `v-` 开头的特殊 attribute) attribute 的值中
:::

- **Attribute 绑定**

  双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 [**`v-bind` 指令**](https://cn.vuejs.org/api/built-in-directives.html#v-bind)。**因为 `v-bind` 非常常用，可以简写为 `:` 。

```html
<template>
	<div v-bind:id="dynamicId"></div>
	<div :class="dynamicClass"></div>
	<button :id="dynamicId" :disabled="isButtonDisabled">Button</button>
</template>

<script>
export default{
  data(){
    return{
      dynamicId:'appid',
      dynamicClass:'appclass',
      isButtonDisabled: true
    }
  }
}
</script>
```

也可绑定包含多个attribute的JavaScript对象：

```
<template>
  <button v-bind="attrs">Button</button>
</template>

<script>
export default{
  data(){
    return{
      attrs: {
        id:'appid',
        disabled: true
      }
    }
  }
}
</script>

```

### 2.4 条件渲染

`v-if`

- “真实的”按条件渲染，条件区块内的事件监听器和子组件都会被销毁与重建；
- 也是**惰性**的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染；
- 有更高的切换开销，适合运行时绑定条件很少改变的场景。

`v-show` 

- 元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换；
- 有更高的初始渲染开销，适合需要频繁切换的场景。

```html
<template>
    <h3>条件渲染</h3>
    <div v-if="flag">你能看见我吗</div>
    <div v-else>那你还是看看我吧</div>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === C">C</div>
    <div v-else>Not A/B/C</div>
    <div v-show="flag">你能看见我吗</div>
</template>

<script>
export default{
    data(){
        return{
            flag:true,
            type:'D'
        }
    }
}
</script>
```

### 2.5 列表渲染

- 访问列表时，可通过两个参数分别获取元素和索引；

- 访问对象时，可通过对象调用返回值，也可通过三个参数分别获取值、键、索引；

- 也可以使用 `of` 作为分隔符来替代 `in`，这更接近 JavaScript 的迭代器语法。

- **通过 Key 管理状态**

  - Vue 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

  - 为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，需要为每个元素对应的块提供一个唯一的 `key` attribute。

  - 推荐在任何可行的时候为 `v-for` 提供一个 `key` attribute，除非所迭代的 DOM 内容非常简单或者想有意采用默认行为来提高性能。

```html
<template>
<h3>列表渲染</h3>
<p v-for="(item, index) in names" :key="index">{{ item }}:{{ index }}</p>
<p v-for="item of result" :key="item.id">
    <p>{{ item.title }}</p>
    <p>{{ item.content }}</p>
</p>
<p v-for="(value, key, index) of userInfo" :key="index">{{ key }}: {{ value }}</p>
</template>

<script>
export default{
    data(){
        return{
            names:['阿里', '美团', '京东'],
            result: [
                {
                    "id":1,
                    "title":"标题1",
                    "content":"内容1"
                },
                {
                    "id":2,
                    "title":"标题2",
                    "content":"内容2"
                },
                {
                    "id":3,
                    "title":"标题3",
                    "content":"内容3"
                }
            ],
            userInfo:{
                name:"Wen",
                age:"18",
                sex:"female"
            }
        }
    }
}
</script>
```

### 2.6 事件处理

我们可以使用 `v-on` 指令 (简写为 `@`) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：`v-on:click="handler"` 或 `@click="handler"`。

事件处理器 (handler) 的值可以是：

1. **内联事件处理器**：事件被触发时执行的内联 JavaScript 语句；也可以在内联处理器中调用方法。

2. **方法事件处理器**：指向组件上定义的方法的名称或路径。

```html
<template>
    <h3>内联事件处理器</h3>
    <button @click="count++">Add result {{ count }}</button>
    <h3>方法事件处理器</h3>
    <button @click="addCount">Add result {{ count }}</button>
    <h3>内联事件调用方法</h3>
    <button @click="addCount(2)">Add result {{ count }}</button>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addCount(num=1) {
            this.count += num
        }
    }
}
</script>
```

- **事件参数**

  事件参数可以获取 `event` 对象，并通过事件传递数据，此时通过 `$event` 传递 `event` 对象。 

```html
<template>
    <h3>事件参数</h3>
    <button @click="getEvent">获取event对象</button>
    <p @click="getNameHandler(item, $event)" v-for="(item, index) in names" :key="index">
    事件传参(通过$event获取event对象)：{{ item }}</p>
</template>

<script>
export default {
    data() {
        return {
            names: ['weng', 'yu', 'xie']
        }
    },
    methods: {
        getNameHandler(name, e){
            console.log(name)
            console.log(e)
        }
    }
}
</script>

```

- **事件修饰符**

  在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。
  
  尽管可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。
  
  为解决这一问题，Vue 为 `v-on` 提供了**事件修饰符**。修饰符是用 `.` 表示的指令后缀。

```html
<template>
		<h3>事件修饰符</h3>  
    <a href="https://www.baidu.com" @click.prevent="clickHandler">百度</a>
    <div @click="clickDiv">
        <p @click.stop="clickP">阻止事件冒泡</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        clickHandler(e) {
            // 阻止默认行为，等价于 click.prevent
            // e.preventDefault()
            console.log(e.target.innerHTML)
        },
        clickDiv() {
            console.log('clickDiv')
        },
        clickP(e) {
            // 阻止事件冒泡，等价于 click.stop
            // e.stopPropagation()
            console.log('clickP')
        }
    }
}
</script>
```

::: tip
浏览器对某些元素的事件有默认处理逻辑，例如：

- `<a>` 标签点击后会跳转页面

- `<form>` 提交后会刷新页面

- `<input type="checkbox">` 点击后会切换选中状态

`event.preventDefault()` 的作用就是**取消这些默认行为**，让事件只执行自定义的逻辑。

事件在 DOM 中会遵循**冒泡机制**：当子元素触发事件时，事件会向上传递到父元素、祖父元素等，直到根节点。

`event.stopPropagation()` 的作用是**阻止事件向上冒泡**，让事件只在当前元素触发，不传递给父元素。
:::

---

### 2.7 数组变化侦听

数组变化方法包括：

1. 变异方法：调用后修改原数组，引起 UI 自动更新，如

    1. `push()`

    2. `pop()`

    3. `shift()`

    4. `unshift()`

    5. `splice()` 

    6. `sort()`

    7. `reverse()`

2. 非变异方法：调用后不修改原数组，而是返回一个新的数组，如

    1. `filter()`

    2. `concat()`

    3. `slice()`

```html
<template>
<h3>数组变化侦听</h3>
<button @click="pushHandler">添加到数组</button>
<button @click="concatHandler">拼接到数组</button>
<ul>
    <li v-for="(item, index) in arr" :key="index">element: {{item}}</li>
</ul>
</template>
<script>
export default{
    data(){
        return{
            arr: [1,2,3,4,5]
        }
    },
    methods:{
        pushHandler(){
            this.arr.push(this.arr.length+1)
        },
        concatHandler(){
            this.arr.concat([this.arr.length+1]) // 不会触发视图更新
            // this.arr = this.arr.concat([this.arr.length+1]) // 会触发视图更新
        }
    }
}
</script>

```

---

### 2.8 计算属性

模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。

更重要的是，如果在模板中需要不止一次这样的计算，我们可不想将这样的代码在模板里重复好多遍。

因此推荐使用**计算属性**来描述依赖响应式状态的复杂逻辑。

```html
<template>
<h3>计算属性</h3>
<p>{{ name }}</p>
<p>{{ books.length > 0 ? 'Yes': 'No' }}</p>
<p>{{ computedBook }}</p>
<p>{{ computedBooks() }}</p>
</template>

<script>
export default{
    data(){
        return{
            name: 'John Doe',
            books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
            ]
        }
    },
    computed:{
        computedBook(){
            return this.books.length > 0 ? 'Yes': 'No'
        }
    },
    methods:{
        computedBooks(){
            return this.books.length > 0 ? 'Yes': 'No'
        }
    }
}
</script>
```

::: tip 区别
计算属性：基于其响应式依赖被缓存。一个计算属性仅在其响应式依赖更新时才重新计算。

方法：总会在重渲染/方法调用时再次执行函数。
:::

::: important 声明
待更新
:::
