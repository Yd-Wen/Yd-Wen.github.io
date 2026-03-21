<template>
  <div class="nav-page">
    <!-- 顶部时间和搜索区 -->
    <header class="nav-header">
      <div class="clock">{{ currentTime }}</div>

      <div class="search-box">
        <div class="search-input-wrapper">
          <button class="engine-selector-btn" @click.stop="toggleEngineSelect">
            <img v-if="currentEngine.logo" :src="currentEngine.logo" class="engine-logo" alt="">
            <span v-else :class="['engine-icon', currentEngine.icon]"></span>
          </button>

          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            placeholder="输入搜索内容..."
            @keydown.enter="handleSearch"
            @click.stop
          />

          <button class="search-btn" @click="handleSearch">
            <span class="iconfont icon-search"></span>
          </button>
        </div>

        <!-- 搜索引擎选择弹窗 -->
        <div v-if="showEngineSelect" class="engine-dropdown" @click.stop>
          <div
            v-for="engine in searchEngines"
            :key="engine.name"
            :class="['engine-option', { active: currentEngine.name === engine.name }]"
            @click="selectEngine(engine)"
          >
            <img v-if="engine.logo" :src="engine.logo" class="engine-option-logo" alt="">
            <span v-else :class="['engine-option-icon', engine.icon]"></span>
            <span class="engine-option-name">{{ engine.name }}</span>
            <span class="engine-option-shortcut">{{ engine.shortcut }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- 主体内容区 -->
    <div class="nav-content-wrapper">
      <!-- 左侧分类导航 -->
      <aside class="nav-sidebar-left">
        <div class="nav-categories">
          <a
            v-for="cat in categories"
            :key="cat.id"
            :href="`#${cat.id}`"
            :class="['nav-category', { active: activeCategory === cat.id }]"
            @click.prevent="scrollToSection(cat.id)"
          >
            <span :class="['iconfont', cat.icon]"></span>
            <span>{{ cat.name }}</span>
          </a>
        </div>
      </aside>

      <!-- 中间内容区 -->
      <main ref="contentRef" class="nav-content">
        <section
          v-for="cat in categories"
          :id="cat.id"
          :key="cat.id"
          class="nav-section"
        >
          <h2 class="section-title">{{ cat.name }}</h2>
          <div class="nav-grid">
            <a
              v-for="item in cat.items"
              :key="item.url"
              :href="item.url"
              :target="item.external ? '_blank' : '_self'"
              class="nav-card"
            >
              <img
                v-if="item.icon.startsWith('http') || item.icon.startsWith('/')"
                :src="item.icon"
                :alt="item.name"
                class="nav-card-icon"
              />
              <span v-else :class="['nav-card-icon', 'iconfont', item.icon]"></span>
              <span class="nav-card-title">{{ item.name }}</span>
            </a>
          </div>
        </section>
      </main>

      <!-- 右侧预留区 -->
      <aside class="nav-sidebar-right"></aside>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 时间显示
const currentTime = ref('')
let timeInterval = null

const updateTime = () => {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  currentTime.value = `${hours}:${minutes}`
}

// 搜索引擎
const searchQuery = ref('')
const showEngineSelect = ref(false)
const currentEngine = ref({
  name: '必应',
  icon: 'icon-bing',
  logo: 'https://www.bing.com/favicon.ico',
  url: 'https://www.bing.com/search?q=',
  shortcut: 'Alt+1'
})

const searchEngines = [
  {
    name: '必应',
    icon: 'icon-bing',
    logo: 'https://www.bing.com/favicon.ico',
    url: 'https://www.bing.com/search?q=',
    shortcut: 'Alt+1'
  },
  {
    name: '谷歌',
    icon: 'icon-google',
    logo: 'https://www.google.com/favicon.ico',
    url: 'https://www.google.com/search?q=',
    shortcut: 'Alt+2'
  },
]

const toggleEngineSelect = () => {
  showEngineSelect.value = !showEngineSelect.value
}

const selectEngine = (engine) => {
  currentEngine.value = engine
  showEngineSelect.value = false
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    window.open(currentEngine.value.url + encodeURIComponent(searchQuery.value.trim()), '_blank')
    searchQuery.value = ''
  }
}

// 点击外部关闭搜索引擎选择
const handleClickOutside = (e) => {
  if (!e.target.closest('.search-box')) {
    showEngineSelect.value = false
  }
}

// 快捷键支持
const handleKeydown = (e) => {
  if (e.altKey) {
    if (e.key === '1') {
      e.preventDefault()
      selectEngine(searchEngines[0])
    } else if (e.key === '2') {
      e.preventDefault()
      selectEngine(searchEngines[1])
    }
  }
}

// 分类导航
const activeCategory = ref('dev-tools')

const categories = [
  {
    id: 'dev-tools',
    name: '开发工具',
    icon: 'icon-tool',
    items: [
      { name: 'GitHub', url: 'https://github.com', icon: 'https://github.com/favicon.ico', external: true },
      { name: 'VS Code', url: 'https://code.visualstudio.com', icon: 'https://code.visualstudio.com/favicon.ico', external: true },
      { name: 'Vue.js', url: 'https://vuejs.org', icon: 'https://vuejs.org/logo.svg', external: true },
      { name: 'Node.js', url: 'https://nodejs.org', icon: 'https://nodejs.org/static/images/favicons/favicon.png', external: true },
    ],
  },
  {
    id: 'learning',
    name: '学习资源',
    icon: 'icon-book',
    items: [
      { name: 'MDN', url: 'https://developer.mozilla.org/zh-CN/', icon: 'https://developer.mozilla.org/favicon-48x48.png', external: true },
      { name: 'VuePress', url: 'https://vuejs.press/zh/', icon: 'https://vuejs.press/images/hero.png', external: true },
      { name: 'Theme Hope', url: 'https://theme-hope.vuejs.press/zh/', icon: 'https://theme-hope-assets.vuejs.press/logo.svg', external: true },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/zh/', icon: 'https://www.typescriptlang.org/favicon-32x32.png', external: true },
    ],
  },
  {
    id: 'common',
    name: '常用网站',
    icon: 'icon-link',
    items: [
      { name: '掘金', url: 'https://juejin.cn', icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png', external: true },
      { name: '知乎', url: 'https://www.zhihu.com', icon: 'https://static.zhihu.com/heifetz/favicon.ico', external: true },
      { name: '哔哩哔哩', url: 'https://www.bilibili.com', icon: 'https://www.bilibili.com/favicon.ico', external: true },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com', icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico', external: true },
    ],
  },
  {
    id: 'personal',
    name: '个人收藏',
    icon: 'icon-star',
    items: [
      { name: '个人主页', url: '/', icon: '/logo.svg', external: false },
      { name: '项目展示', url: '/project/', icon: 'icon-project', external: false },
      { name: '笔记归档', url: '/note/', icon: 'icon-note', external: false },
      { name: '关于我', url: '/about/', icon: '/logo.svg', external: false },
    ],
  },
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  let current = categories[0].id

  for (const cat of categories) {
    const element = document.getElementById(cat.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150) {
        current = cat.id
      }
    }
  }

  activeCategory.value = current
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  handleScroll()
})

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval)
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* 页面根容器 */
.nav-page {
  min-height: 100vh;
  padding: 20px;
}

/* 顶部时间和搜索区 */
.nav-header {
  text-align: center;
  padding: 40px 20px 30px;
  max-width: 600px;
  margin: 0 auto;
}

.clock {
  font-size: 5rem;
  font-weight: 200;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
  margin-bottom: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 4px;
}

/* 搜索框容器 */
.search-box {
  position: relative;
  width: 100%;
}

/* 搜索输入框包装 - 样式通过index.scss中的CSS变量控制 */
.search-input-wrapper {
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 28px;
  padding: 4px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.search-input-wrapper:focus-within {
  box-shadow: 0 0 0 3px rgba(242, 142, 22, 0.15);
}

/* 搜索引擎选择按钮 */
.engine-selector-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.engine-selector-btn:hover {
  background: rgba(128, 128, 128, 0.1);
}

.engine-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.engine-icon {
  font-size: 22px;
}

/* 搜索输入 */
.search-input {
  flex: 1;
  background: transparent;
  border: none;
  font-size: 16px;
  padding: 0 12px;
  outline: none;
  height: 100%;
}

/* 搜索按钮 */
.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.search-btn:hover {
  filter: brightness(1.1);
  transform: scale(1.05);
}

.search-btn .iconfont {
  font-size: 20px;
}

/* 搜索引擎下拉选择 */
.engine-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 10px;
  min-width: 150px;
  border-radius: 12px;
  padding: 8px;
  backdrop-filter: blur(20px);
  z-index: 100;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.engine-option {
  display: flex;
  align-items: center;
  padding: 12px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.engine-option:hover {
  background: rgba(128, 128, 128, 0.1);
}

.engine-option-logo {
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 12px;
}

.engine-option-icon {
  font-size: 18px;
  margin-right: 12px;
  width: 20px;
  text-align: center;
}

.engine-option-name {
  flex: 1;
  font-size: 14px;
}

.engine-option-shortcut {
  font-size: 12px;
  font-family: monospace;
}

/* 主体布局 */
.nav-content-wrapper {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  gap: 20px;
}

/* 左侧分类导航 */
.nav-sidebar-left {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  height: fit-content;
}

.nav-categories {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  padding: 16px;
}

.nav-category {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.nav-category .iconfont {
  font-size: 18px;
}

/* 中间内容区 */
.nav-content {
  flex: 1;
  padding-right: 10px;
}

.nav-section {
  margin-bottom: 60px;
  scroll-margin-top: 100px;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
}

/* 导航卡片 */
.nav-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-card:hover {
  transform: translateY(-4px);
}

.nav-card-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 12px;
}

.nav-card-icon.iconfont {
  font-size: 40px;
  line-height: 48px;
  text-align: center;
}

.nav-card-title {
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

/* 右侧预留区 */
.nav-sidebar-right {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  height: fit-content;
}

/* 响应式 */
@media (max-width: 1200px) {
  .nav-sidebar-right {
    display: none;
  }
}

@media (max-width: 768px) {
  .clock {
    font-size: 3.5rem;
  }

  .nav-header {
    padding: 30px 15px 25px;
  }

  .search-input-wrapper {
    height: 50px;
  }

  .engine-selector-btn,
  .search-btn {
    width: 42px;
    height: 42px;
  }

  .nav-content-wrapper {
    flex-direction: column;
    padding: 10px;
  }

  .nav-sidebar-left {
    width: 100%;
    position: relative;
    top: 0;
  }

  .nav-categories {
    flex-direction: row;
    overflow-x: auto;
    padding: 12px;
  }

  .nav-category {
    white-space: nowrap;
    padding: 8px 16px;
  }

  .nav-section {
    scroll-margin-top: 150px;
  }

  .nav-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 12px;
  }

  .nav-card {
    padding: 16px 12px;
  }

  .nav-card-icon {
    width: 36px;
    height: 36px;
  }
}
</style>
