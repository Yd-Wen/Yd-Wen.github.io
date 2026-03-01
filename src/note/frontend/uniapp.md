---
date: 2024-08-01
title: Uniapp
icon: uniapp
category: 
    - 前端开发
tag: 
    - uniapp
---

## 1 简介

uni-app 官方网站：[uni-app 官网](https://uniapp.dcloud.net.cn/)。

- uni-app 是使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到 IOS、Android、H5 以及各种小程序等多个平台。

- 即使不夸端，uni-app 同时也是更好的小程序开发框架。

- 具有 vue 和微信小程序开发经验，可快速上手。

---

## 2 环境搭建

- 安装编辑器 HBuilderX：[HBuilderX 下载地址](https://dcloud.io/hbuilderx.html)

- 安装微信开发者工具：[微信开发者工具下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

::: tip
HBuilderX 是通用的前端开发工具，但为 uni-app 做了特别强化。
:::

---

## 3 项目结构

- pages.json：对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生 tabbar 等。

- manifest.json：应用配置文件，指定应用的名称、图标、权限等。

- App.vue：根组件，所有页面都是在 App.vue 下进行切换的，是**页面入口文件**，可以调用应用的生命周期函数。

- main.js：**项目入口文件**，主要作用是初始化 vue 实例并使用需要的插件。

- uni.css：整体控制应用的风格。比如按钮颜色、边框风格，uni.css 文件里预置了一批 scss 变量预置。

- unpackage：打包目录，各个平台的打包文件。

- pages：所有页面的存放目录。

- static：静态资源目录，例如图片。

- components：组件存放目录。

为了实现多端兼容，综合考虑编译速度、运行性能等因素，uni-app 约定了如下开发规范：

- 页面文件遵循 Vue 单文件组件（SFC）规范

- 组件标签靠近微信小程序规范，详见 uni-app 组件规范

- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换文 uni，详见 uni-app 接口规范

- 数据绑定及事件处理同 Vue.js 规范，同时补充了 App 及页面的生命周期

- 为兼容多端运行，建议使用 flex 布局开发

---

## 4 页面

### 4.1 生命周期

`uni-app` 页面除支持 Vue 组件生命周期外还支持下方页面生命周期函数，当以组合式 API 使用时，在 Vue2 和 Vue3 中存在一定区别，请分别参考：

- [Uniapp 页面生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)；

- [Vue2 组合式 API 使用文档](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)；

- [Vue3 组合式 API 使用文档](https://uniapp.dcloud.net.cn/tutorial/vue3-composition-api.html)。

### 4.2 页面配置

- **全局配置**

  通过 globalStyle 进行配置，见[全局配置](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle)。用于设置应用状态栏、导航条、标题、窗口背景色等。

  | 属性 | 类型 | 默认值 | 描述 |
  | --- | --- | --- | --- |
  | navigationBarBackgroundColor | HexColor | #F7F7F7 | 导航栏背景颜色（同状态栏背景色） |
  | navigationBarTextStyle | String | white | 导航栏标题颜色及状态栏前景颜色，仅支持 black/white |
  | navigationBarTitleText | String |  | 导航标题栏文字内容 |
  | backgroundColor | HexColor | #FFFFFF | 窗口背景色，仅下拉可见 |
  | backgroundTextStyle | String | dark | 下拉 loading 的样式，仅支持 dark/light |
  | enablePullDownRefresh | Boolean | false | 是否开启下拉刷新 |
  | onReachBottomDistance | Number | 50 | 页面上拉触底事件触发时距页面底部距离，单位仅支持 px |

- **局部页面配置**

  右键 pages 创建 message 目录，在该目录下右键新建 `.vue` 文件，并选择基本模板。

  ```html
  <template>
  	<view>
  		这是消息页面
  	</view>
  </template>

  <script>
  </script>

  <style>
  </style>

  ```

  **通过 pages 配置页面**：参考 [pageStyle](https://uniapp.dcloud.net.cn/collocation/pages.html#style)。

  | 属性 | 类型 | 默认值 | 描述 |
  | --- | --- | --- | --- |
  | path | String |  | 配置页面路径 |
  | style | Object |  | 配置页面窗口表现 |

  pages 数组中**第一项表示应用启动页**，参考 [pages.json 页面路由](https://uniapp.dcloud.net.cn/collocation/pages.html)。

### 4.3 tabBar

如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页。

在 pages.json 中提供 tabBar 配置，不仅仅是为了方便快速开发导航，更重要的是在 App 和小程序端提升性能。在这两个平台，底层原生引擎在启动时无需等待 js 引擎初始化，即可直接读取 pages.json 中配置的 tabBar 信息，渲染原生 tab。

属性配置详见[tabBar](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)。

::: warning 注意
- 当设置 position 为 top 时，将不会显示 icon。

- tabBar 中的 list 是一个数组，只能配置最少 2 个、最多 5 个 tab，tab 按数组的顺序排序。

- tabbar 切换第一次加载时可能渲染不及时，可以在每个 tabbar 页面的 onLoad 生命周期里先弹出一个等待雪花（hello uni-app 使用了此方式）。

- tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的 onShow，不会再触发 onLoad。

- 顶部的 tabbar 目前仅微信小程序上支持。需要用到顶部选项卡的话，建议不使用 tabbar 的顶部设置，而是自己做顶部选项卡，可参考 hello uni-app->模板->顶部选项卡。
:::

### 4.4 condition

启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。详见[condition](https://uniapp.dcloud.net.cn/collocation/pages.html#condition)。

```jsx
"condition": { //模式配置，仅开发期间生效
	"current": 0, //当前激活的模式（list 的索引项）
	"list": [{
			"name": "swiper", //模式名称
			"path": "pages/component/swiper/swiper", //启动页面，必选
			"query": "interval=4000&autoplay=false" //启动参数，在页面的 onLoad 函数里面得到。
		},
		{
			"name": "test",
			"path": "pages/component/switch/switch"
		}
	]
}
```

---

## 5 内置组件

### 5.1 视图容器

所有的视图组件，包括 view、swiper 等，本身不显示任何可视化元素。它们的用途都是为了包裹其他真正显示的组件。

- **尺寸单位**

  `uni-app` 支持的通用 css 单位包括 px、rpx。

  - px 即屏幕像素

  - rpx 即响应式 px，一种根据屏幕宽度自适应的动态单位。以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大。

  设计师在提供设计图时，一般只提供一个分辨率的图。严格按设计图标注的 px 做开发，在不同宽度的手机上界面很容易变形。而且主要是宽度变形。高度一般因为有滚动条，不容易出问题。由此，引发了较强的动态宽度单位需求。

  微信小程序设计了 rpx 解决这个问题。`uni-app` 在 App 端、H5 端都支持了 `rpx`，并且可以配置不同屏幕宽度的计算方式，具体参考：[**rpx 计算配置**](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)。

  rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。`uni-app` 规定屏幕基准宽度 750rpx。

  开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：

  `设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx`

  换言之，页面元素宽度在 `uni-app` 中的宽度计算公式：

  `750 * 元素在设计稿中的宽度 / 设计稿基准宽度`

- **view**

  类似于传统 html 中的 div，用于包裹各种元素内容。详见[view](https://uniapp.dcloud.net.cn/component/view.html#view)。

- **scroll-view**

  可滚动视图。

- **swiper**

  滑块视图容器，一般用于左右滑动或上下滑动，比如 banner 轮播图。详见[swiper](https://uniapp.dcloud.net.cn/component/swiper.html#swiper)。

  ::: warning 注意
  - 其中只可放置 `<swiper-item>` 组件，否则会导致未定义的行为。
  :::

  ::: warning 注意
  **scroll-view 和 swiper 的区别**：

  - 滑动切换是一屏一屏的切换；

  - swiper 下的每个 swiper-item 是一个滑动切换区域，不能停留在两个区域之间。
  :::

### 5.2 媒体组件

- **image**

  图片组件，详见[image](https://uniapp.dcloud.net.cn/component/image.html#image)。

  ::: tip
  - `<image>` 组件未设置宽高时，默认宽度 320px、高度 240px。

  - `src` 仅支持相对路径、绝对路径，支持 base64 码。

  - 页面结构复杂，css 样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 `image{will-change: transform}`，可优化此问题。

  - 自定义组件里面使用 `<image>` 时，若 `src` 使用相对路径可能出现路径查找失败的情况，故建议使用绝对路径。
  :::

- **video**

  视频播放组件，详见[video](https://uniapp.dcloud.net.cn/component/video.html#video)。

### 5.3 表单组件

用于表单创建、填写、提交等，详见[表单组件](https://uniapp.dcloud.net.cn/component/button)。

::: tip
**注意**：

当点击 `<form>` 表单中 formType 为 submit 的 `<button>` 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。
:::

### 5.4 页面跳转组件

该组件类似 HTML 中的 `<a>` 组件，但只能跳转本地页面。目标页面必须在 pages.json 中注册。

除了组件方式，API 方式也可以实现页面跳转，另见：[API: navigator](https://uniapp.dcloud.io/api/router?id=navigateto)。

常用属性：

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| url | String |  | 应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 `.vue` 后缀 |
| open-type | String | navigate | 跳转方式 |

open-type 有效值：

| 值 | 说明 | 平台差异说明 |
| --- | --- | --- |
| navigate | 对应 uni.navigateTo 的功能，保留当前页面，跳转到应用内的某个页面 |  |
| redirect | 对应 uni.redirectTo 的功能，关闭当前页面，跳转到应用内的某个页面 |  |
| switchTab | 对应 uni.switchTab 的功能，跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 |  |
| reLaunch | 对应 uni.reLaunch 的功能，关闭所有页面，打开到应用内的某个页面 | 抖音小程序与飞书小程序不支持 |
| navigateBack | 对应 uni.navigateBack 的功能，关闭当前页面，返回上一页面或多级页面 |  |

## 6 Vue 语法

详见：[Vue](https://www.notion.so/Vue-2f11b43b79dc8048bdaec56005d38a01?pvs=21)。

### 6.1 v-model

可以用 v-model 指令在表单 `input`、`textarea` 及 `select` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

::: tip
v-model 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。应该通过 JavaScript 在组件的 data 选项中声明初始值。
:::

```html
<template>
	<view>
		<input v-model="message" placeholder="edit me">
		<text>Message is: {{ message }}</text>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				message:""
			}
		}
	}
</script>
```

## 7 封装组件

### 7.1 概念

- 组件是视图层的基本组成单元。

- 组件是一个单独且可复用的功能模块的封装。

- 一个组件包括开始标签和结束标签，标签上可以写属性，并对属性赋值。内容则写在两个标签之内。根节点为 `<template>`，这个 `<template>` 下只能且必须有一个根 `<view>` 组件。这是[**vue 单文件组件规范**](https://cn.vuejs.org/v2/guide/single-file-components.html)。

::: tip
vue 2 中 `<template>` 下只能且必须有一个根 `<view>` 组件； vue 3 允许多个根组件。
:::

### 7.2 注册

注册组件时，组件命名方式有：

- kebab-case：短横线分隔命名，引用时同样使用 kebab-case，例如 `<my-component-name>` 。

- PascalCase：首字母大写命名，引用这个自定义元素时两种命名法都可以使用， `<my-component-name>` 和 `<MyComponentName>` 都是可接受的。

注册方式有：

- 全局注册：见[全局注册](https://uniapp.dcloud.net.cn/tutorial/vue-components.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)。

- 局部注册
  
  - 页面引入组件： **传统 vue 规范**中，在 index.vue 页面中，通过 `import` 方式引入组件 ，在 `components` 选项中定义组件。
  
  - 通过 `uni-app` 的 `easycom` ：将组件引入精简为一步。只要组件安装在项目的 `components` 目录下，并符合 `components/组件名称/组件名称.vue` 目录结构。就可以不用引用、注册，直接在页面中使用。

### 7.3 Props

`props` 可以是数组或对象，用于接收来自父组件的数据。`props` 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。

| 选项 | 类型 | 说明 |
| --- | --- | --- |
| type | `String`、`Number`、`Boolean`、`Array`、`Object`、`Date`、`Function`、`Symbol`，<br>任何自定义构造函数、或上述内容组成的数组 | 会检查一个 `prop` 是否是给定的类型，否则抛出警告 |
| default | any | 为该 `prop` 指定一个默认值。如果该 `prop` 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。 |
| required | Boolean | 定义该 `prop` 是否是必填项 |
| validator | Function | 自定义验证函数会将该 `prop` 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 `false` 的值 (也就是验证失败)，一个控制台警告将会被抛出 |

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<view>{{age}}</view>
		</view>
	</template>
	<script>
		export default {
			props: {
				// 检测类型 + 其他验证
				age: {
					type: Number,
					default: 0,
					required: true,
					validator: function(value) {
						return value >= 0
					}
				}
			}
		}
	</script>
	
	<template>
		<view>
			<!-- 我是父组件 -->
			<componentA :age="10"></componentA>
		</view>
	</template>
```

- **单向数据流**

  所有的 `prop` 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 `prop` 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态而导致应用的数据流向难以理解。

  想要更改一个 `prop` 的需求通常来源于以下两种场景：

  1. **`prop` 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性**。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：

  ```jsx
  const props = defineProps(['initialCounter'])
  // 计数器只是将 props.initialCounter 作为初始值
  // 像下面这样做就使 prop 和后续更新无关了
  const counter = ref(props.initialCounter)
  ```

  2. **需要对传入的 `prop` 值做进一步的转换**。在这种情况中，最好是基于该 prop 值定义一个计算属性：

  ```jsx
  const props = defineProps(['size'])

  // 该 prop 变更时计算属性也会自动更新
  const normalizedSize = computed(() => props.size.trim().toLowerCase())
  ```

### 7.4 Emit

用于声明由组件触发的自定义事件。任何额外的参数都会传递给事件监听器的回调函数。详见[emits](https://cn.vuejs.org/api/options-state#emits)。

---

### 7.5 插槽 Slots

`<slot>` 元素是一个**插槽出口** (slot outlet)，标示了父元素提供的**插槽内容** (slot content) 将在哪里被渲染。

```html
<button class="fancy-btn">
  <slot></slot> <!-- 插槽出口 -->
</button>

<FancyButton>
  Click me! <!-- 插槽内容 -->
</FancyButton>

<!-- 渲染结果 -->
<button class="fancy-btn">Click me!</button>
```

- **默认内容**

  写在 `<slot>` 标签之间的内容可以作为默认内容:

  ```html
  <button type="submit">
    <slot>
      Submit <!-- 默认内容 -->
    </slot>
  </button>
  ```

  - 当父组件没有提供任何插槽内容时，默认内容将被渲染：

  ```html
  <!-- 不提供插槽内容 -->
  <SubmitButton />
  <!-- 渲染结果 -->
  <button type="submit">Submit</button>
  ```

  - 当父组件提供了插槽内容，那么被显式提供的内容会取代默认内容：

  ```html
  <!-- 提供插槽内容 -->
  <SubmitButton>Save</SubmitButton>
  <!-- 渲染结果 -->
  <button type="submit">Save</button>
  ```

- **具名插槽**

  有时在一个组件中包含多个插槽出口是很有用的。

  对于这种场景，`<slot>` 元素可以有一个特殊的 attribute `name`，用来给各个插槽分配唯一的 ID，以确定每一处要渲染的内容。

  父组件使用时，要为具名插槽传入内容，需要使用一个含 `v-slot` 指令的 `<template>` 元素，并将目标插槽的名字传给该指令。

  ```html
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>

  <BaseLayout>
    <template v-slot:header>
      <!-- header 插槽的内容放这里 -->
    </template>
  </BaseLayout>
  ```

  ::: tip
  `v-slot` 可简写为 `#` 。
  :::

---

## 8 API

### 8.1 路由与页面跳转

除了使用 `navigator` 组件外，也可以使用 API 进行页面跳转。

- `uni.navigateTo`：保留当前页面，跳转到应用内的某个页面，使用 `uni.navigateBack` 可以返回到原页面。通过 `url` 参数设置需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'，path 为下一个页面的路径，下一个页面的 onLoad 函数可得到传递的参数。

- `uni.redirectTo`：关闭当前页面，跳转到应用内的某个页面。`url` 参数设置同上。

- `uni.reLaunch`：关闭所有页面，打开到应用内的某个页面。`url` 参数设置同上（如果跳转的页面路径是 tabBar 页面则不能带参数）。

- `uni.switchTab`：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。`url` 参数设置需要跳转的 tabBar 页面的路径（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数。

- `uni.navigateBack`：关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。

### 8.2 界面

- **交互反馈**

详见[交互反馈](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast)。

- `uni.showToast(OBJECT)`：显示消息提示框。

- `uni.hideToast()`：隐藏消息提示框。

- `uni.showLoading(OBJECT)`：显示 loading 提示框, 需主动调用 `uni.hideLoading` 才能关闭提示框。

- `uni.hideLoading()`：隐藏 loading 提示框。

- `uni.showModal(OBJECT)`：显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个 API 整合了 html 中：alert、confirm。

- `uni.showActionSheet(OBJECT)`：从底部向上弹出操作菜单。

::: tip 一般情况
- `showToast` 设置 `mask=false`

- `showLoading` 设置 `mask=true`
:::

- **导航栏**

  详见[设置导航条](https://uniapp.dcloud.net.cn/api/ui/navigationbar.html#setnavigationbartitle)。

  - `uni.setNavigationBarTitle(OBJECT)`：动态设置当前页面的标题。

  - `uni.setNavigationBarColor(OBJECT)`：设置页面导航条颜色。如果需要进入页面就设置颜色，需延迟执行，防止被框架内设置颜色逻辑覆盖。

  - `uni.showNavigationBarLoading(OBJECT)`：在当前页面显示导航条加载动画。

  - `uni.hideNavigationBarLoading(OBJECT)`：在当前页面隐藏导航条加载动画。

  - `uni.hideHomeButton(OBJECT)`：隐藏返回首页按钮。

  ::: info 说明
  - 如果需要在页面进入时设置标题，可以在 `onReady` 内执行，以避免被框架内的修改所覆盖。如果必须在 `onShow` 内执行需要延迟一小段时间。
  - 当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，可在页面 `onShow` 中调用 `hideHomeButton` 进行隐藏。
  :::

- **设置 TabBar**

  详见[设置 TabBar](https://uniapp.dcloud.net.cn/api/ui/tabbar.html#settabbaritem)。

  - `uni.setTabBarItem(OBJECT)`：动态设置 tabBar 某一项的内容。

  - `uni.setTabBarStyle(OBJECT)`：动态设置 tabBar 的整体样式。

  - `uni.hideTabBar(OBJECT)`：隐藏 tabBar。

  - `uni.showTabBar(OBJECT)`：显示 tabBar。

  - `uni.setTabBarBadge(OBJECT)`：为 tabBar 某一项的右上角添加文本。

  - `uni.removeTabBarBadge(OBJECT)`：移除 tabBar 某一项右上角的文本。

  - `uni.showTabBarRedDot(OBJECT)`：显示 tabBar 某一项的右上角的红点。

  - `uni.hideTabBarRedDot(OBJECT)`：隐藏 tabBar 某一项的右上角的红点。

  - `uni.onTabBarMidButtonTap(CALLBACK)`：监听中间按钮的点击事件。

### 8.3 网络

`uni.request(OBJECT)`：发起网络请求。

参考异步请求解决方案[Promise](https://www.notion.so/ES6-Promise-ES7-2f51b43b79dc803ea249e724a4819a61?pvs=21)。

| 参数名 | 类型 | 必填 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- | --- |
| url | String | 是 |  | 开发者服务器接口地址 |  |
| data | Object/String/ArrayBuffer | 否 |  | 请求的参数 | App 3.3.7 以下不支持 ArrayBuffer 类型 |
| header | Object | 否 |  | 设置请求的 header，header 中不能设置 Referer | App、H5 端会自动带上 cookie，且 H5 端不可手动修改 |
| method | String | 否 | GET | 有效值详见下方说明 |  |
| timeout | Number | 否 | 60000 | 超时时间，单位 ms | H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序 |
| success | Function | 否 |  | 收到开发者服务器成功返回的回调函数 |  |
| fail | Function | 否 |  | 接口调用失败的回调函数 |  |
| complete | Function | 否 |  | 接口调用结束的回调函数（调用成功、失败都会执行） |  |

### 8.4 数据缓存

详见[数据缓存 storage](https://uniapp.dcloud.net.cn/api/storage/storage)。

- `uni.setStorage(OBJECT)`：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。

- `uni.setStorageSync(KEY,DATA)`：将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。

- `uni.getStorage(OBJECT)`：从本地缓存中异步获取指定 key 对应的内容。

- `uni.getStorageSync(KEY)`：从本地缓存中同步获取指定 key 对应的内容。

- `uni.removeStorage(OBJECT)`：从本地缓存中异步移除指定 key。

- `uni.removeStorageSync(KEY)`：从本地缓存中同步移除指定 key。

- `uni.clearStorage()`：清理所有本地数据缓存。

- `uni.clearStorageSync()`：同步清理所有本地数据缓存。

::: important 参考资料
[uniapp 零基础入门到项目打包](https://www.bilibili.com/video/BV1mT411K7nW/)

[零基础入门 uniapp Vue3 组合式 API 版本](https://www.bilibili.com/video/BV1Yg4y127Fp)
:::
