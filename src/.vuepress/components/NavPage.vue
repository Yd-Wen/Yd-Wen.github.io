<template>
  <div class="nav-page">
    <!-- 背景点击捕获层 - 透明，用于点击关闭卡片 -->
    <div
      v-if="activeCategory"
      class="nav-overlay"
      @click="closeCategoryView"
    ></div>

    <!-- 顶部时间 - 始终显示 -->
    <header :class="['nav-header', { 'collapsed': activeCategory }]">
      <div class="clock">{{ currentTime }}</div>

      <!-- 搜索区 - 随按钮点击显示/隐藏 -->
      <div v-if="showSearchBox" class="search-box">
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

    <!-- 中间内容区 - 显示选中的分类卡片 -->
    <main :class="['nav-content-area', { 'expanded': activeCategory }]">
      <div v-if="activeCategory" class="nav-cards-wrapper" @click="closeCategoryView">
        <div class="nav-cards-container" @click.stop>
          <div class="nav-grid">
            <a
              v-for="item in currentCategoryItems"
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
        </div>
      </div>
      <div v-else class="nav-empty-state"></div>
    </main>

    <!-- 底部五个功能按钮 -->
    <footer class="nav-bottom-container">
      <div class="nav-buttons-wrapper">
        <div
          v-for="btn in categoryButtons"
          :key="btn.id"
          class="nav-button-item"
          @click="handleButtonClick(btn)"
        >
          <!-- 提示文字 -->
          <div class="nav-button-tooltip">{{ btn.name }}</div>
          <div class="nav-button">
            <img :src="btn.icon" class="nav-button-icon" :alt="btn.name">
          </div>
        </div>
      </div>
    </footer>
  </div>

  <!-- 壁纸偏好弹窗 -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="showWallpaperModal" class="wallpaper-modal-overlay" @click.self="closeWallpaperModal">
        <div class="wallpaper-modal">
          <!-- 弹窗头部 -->
          <div class="modal-header">
            <h3 class="modal-title">壁纸偏好</h3>
            <span class="modal-close" @click="closeWallpaperModal">×</span>
          </div>
          <!-- 壁纸网格 -->
          <div class="wallpaper-grid">
            <div
              v-for="wp in wallpapers"
              :key="wp.id"
              :class="['wallpaper-grid-item', { active: currentWallpaper === wp.id }]"
              @click="selectWallpaper(wp.id)"
            >
              <img :src="wp.thumbnail" class="wallpaper-thumb" alt="">
              <!-- 选中标记 -->
              <div v-if="currentWallpaper === wp.id" class="wallpaper-check">✓</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'

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

// （配置已从 frontmatter 动态读取，详见下方 computed 属性）

// 当前激活的分类
const activeCategory = ref(null)

// 搜索框显示状态
const showSearchBox = ref(true)

// 防止双击标志
let isProcessingClick = false

// 处理按钮点击
const handleButtonClick = (btn) => {
  // 防止快速双击
  if (isProcessingClick) return
  isProcessingClick = true
  setTimeout(() => {
    isProcessingClick = false
  }, 300)

  if (btn.isWallpaper) {
    openWallpaperModal()
    return
  }

  if (activeCategory.value === btn.id) {
    // 再次点击相同按钮：隐藏卡片，显示搜索框
    activeCategory.value = null
    showSearchBox.value = true
  } else {
    // 点击不同按钮：显示卡片，隐藏搜索框
    activeCategory.value = btn.id
    showSearchBox.value = false
  }
}

// 关闭分类视图
const closeCategoryView = () => {
  activeCategory.value = null
  showSearchBox.value = true
}

// 获取页面 frontmatter
const frontmatter = usePageFrontmatter()

// 默认分类按钮配置
const defaultCategoryButtons = [
  { id: 'dev-tools', name: '开发工具', icon: '/assets/icon/icon_develop.png' },
  { id: 'learning', name: '学习资源', icon: '/assets/icon/icon_resource.png' },
  { id: 'common', name: '常用网站', icon: '/assets/icon/icon_website.png' },
  { id: 'personal', name: '个人收藏', icon: '/assets/icon/icon_favorite.png' },
  { id: 'wallpaper', name: '壁纸切换', icon: '/assets/icon/icon_wallpaper.png', isWallpaper: true },
]

// 默认分类数据
const defaultCategories = [
  {
    id: 'dev-tools',
    name: '开发工具',
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
    items: [
      { name: 'MDN', url: 'https://developer.mozilla.org/zh-CN/', icon: 'https://developer.mozilla.org/favicon-48x48.png', external: true },
      { name: 'VuePress', url: 'https://vuejs.press/zh/', icon: 'https://vuejs.press/images/hero.png', external: true },
    ],
  },
  {
    id: 'common',
    name: '常用网站',
    items: [
      { name: '掘金', url: 'https://juejin.cn', icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png', external: true },
      { name: '知乎', url: 'https://www.zhihu.com', icon: 'https://static.zhihu.com/heifetz/favicon.ico', external: true },
    ],
  },
  {
    id: 'personal',
    name: '个人收藏',
    items: [
      { name: '个人主页', url: '/', icon: '/logo.svg', external: false },
      { name: '项目展示', url: '/project/', icon: 'icon-project', external: false },
    ],
  },
]

// 从 frontmatter 或默认配置获取分类按钮
const categoryButtons = computed(() => {
  const fmCategories = frontmatter.value?.categories
  if (Array.isArray(fmCategories) && fmCategories.length > 0) {
    // 将 frontmatter 中的 categories 转换为按钮配置
    const buttons = fmCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      icon: cat.icon,
      isWallpaper: false
    }))
    // 添加壁纸切换按钮
    buttons.push({
      id: 'wallpaper',
      name: '壁纸切换',
      icon: '/assets/icon/icon_wallpaper.png',
      isWallpaper: true
    })
    return buttons
  }
  return defaultCategoryButtons
})

// 从 frontmatter 或默认配置获取分类数据
const categories = computed(() => {
  const fmCategories = frontmatter.value?.categories
  if (Array.isArray(fmCategories) && fmCategories.length > 0) {
    return fmCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      items: (cat.items || []).map(item => ({
        name: item.name,
        url: item.url,
        icon: item.icon,
        external: item.external !== false // 默认为 true
      }))
    }))
  }
  return defaultCategories
})

// 计算当前分类名称
const currentCategoryName = computed(() => {
  const cat = categories.value.find(c => c.id === activeCategory.value)
  return cat ? cat.name : ''
})

// 计算当前分类的导航项
const currentCategoryItems = computed(() => {
  const cat = categories.value.find(c => c.id === activeCategory.value)
  return cat ? cat.items : []
})

// 壁纸配置
const currentWallpaper = ref('default')
const showWallpaperModal = ref(false)
const STORAGE_KEY = 'nav-page-wallpaper'

// 打开壁纸弹窗
const openWallpaperModal = () => {
  showWallpaperModal.value = true
}

// 关闭壁纸弹窗
const closeWallpaperModal = () => {
  showWallpaperModal.value = false
}

// 默认壁纸配置
const defaultWallpapers = [
  { id: 'default', name: '默认主题', file: 'default.jpg' },
  { id: '001', name: '风景 001', file: '001.jpg' },
  { id: '002', name: '风景 002', file: '002.jpg' },
  { id: '003', name: '风景 003', file: '003.jpg' },
  { id: '004', name: '风景 004', file: '004.jpg' },
  { id: '005', name: '风景 005', file: '005.jpg' },
  { id: '006', name: '风景 006', file: '006.jpg' },
  { id: '007', name: '风景 007', file: '007.jpg' },
  { id: '008', name: '风景 008', file: '008.jpg' },
]

// 从 frontmatter 或默认配置获取壁纸列表
const wallpapers = computed(() => {
  const fmWallpapers = frontmatter.value?.wallpapers
  const wpList = Array.isArray(fmWallpapers) && fmWallpapers.length > 0
    ? fmWallpapers
    : defaultWallpapers

  return wpList.map(wp => ({
    id: wp.id,
    name: wp.name,
    url: `/assets/bg/${wp.file}`,
    thumbnail: `/assets/bg/${wp.file}`
  }))
})

// 应用壁纸到页面
const applyWallpaper = (wpId) => {
  // 获取 theme-container 元素（与默认背景相同的容器）
  const themeContainer = document.querySelector('.theme-container')
  if (!themeContainer) return

  if (wpId === 'default') {
    // 恢复默认背景
    themeContainer.style.backgroundImage = ''
    document.body.classList.remove('has-custom-wallpaper')
  } else {
    const wp = wallpapers.value.find(w => w.id === wpId)
    if (!wp) return
    themeContainer.style.backgroundImage = `url(${wp.url})`
    document.body.classList.add('has-custom-wallpaper')
  }
}

// 选择壁纸
const selectWallpaper = (wpId) => {
  currentWallpaper.value = wpId
  localStorage.setItem(STORAGE_KEY, wpId)
  applyWallpaper(wpId)
  // 选中后不关闭弹窗，让用户可以看到选中状态
}

// 从 localStorage 加载壁纸设置
const loadWallpaper = () => {
  if (typeof window === 'undefined') return
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && wallpapers.value.some(w => w.id === saved)) {
    currentWallpaper.value = saved
    applyWallpaper(saved)
  }
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  // 加载保存的壁纸设置
  loadWallpaper()
})

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)

  // 离开导航页面时清除背景图片
  const themeContainer = document.querySelector('.theme-container')
  if (themeContainer) {
    themeContainer.style.backgroundImage = ''
    document.body.classList.remove('has-custom-wallpaper')
  }
})
</script>

<style scoped>
/* 页面根容器 - 100% 高度（父容器已设置为 calc(100vh - 60px)） */
.nav-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 20px 10px;
  position: relative;
  z-index: 1;
}

/* 背景点击捕获层 - 透明，用于点击关闭卡片 */
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 1;
}

/* 顶部时间和搜索区 */
.nav-header {
  text-align: center;
  padding: 20px 20px 30px;
  width: 40vw;
  max-width: 90%;
  margin: 0 auto;
  flex-shrink: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
}

/* 当显示分类卡片时，收缩顶部区域 */
.nav-header.collapsed {
  padding: 10px 20px 20px;
  opacity: 0.7;
  gap: 12px;
}

.nav-header.collapsed .search-box {
  margin-top: 0;
}

.clock {
  font-size: 5rem;
  font-weight: 200;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 4px;
  margin: 0;
}

/* 暗黑模式：时间文字黑色 */
html[data-theme="dark"] .clock {
  color: #000;
}

/* 搜索框容器 */
.search-box {
  position: relative;
  width: 100%;
  margin-top: 80px;
}

/* 搜索输入框包装 */
.search-input-wrapper {
  display: flex;
  align-items: center;
  height: 44px;
  border-radius: 22px;
  padding: 3px;
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
  width: 38px;
  height: 38px;
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
  width: 38px;
  height: 38px;
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

/* 中间内容区 - 可滚动 */
.nav-content-area {
  flex: 1;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.nav-content-area::-webkit-scrollbar {
  display: none;
}

/* 当显示分类卡片时，扩展内容区域 */
.nav-content-area.expanded {
  flex: 2;
  padding-top: 5px;
}

/* 导航卡片包装器 - 40%视窗宽度，占满中间空间 */
.nav-cards-wrapper {
  width: 40vw;
  height: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 200;
}

.nav-cards-container {
  width: 100%;
  height: 520px;
  max-height: 60vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.nav-cards-container::-webkit-scrollbar {
  display: none;
}

.nav-empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #fff;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4);
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
}

/* 导航卡片 */
.nav-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  /* 暗黑模式：黑色背景，明亮模式：白色背景 */
  background: rgba(0, 0, 0, 0.6);
  border: none;
}

html[data-theme="light"] .nav-card {
  background: rgba(255, 255, 255, 0.6);
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.nav-card:hover .nav-card-title {
  color: var(--theme-color, #f28e16);
}

.nav-card-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 10px;
}

.nav-card-icon.iconfont {
  font-size: 36px;
  line-height: 40px;
  text-align: center;
}

.nav-card-title {
  font-size: 13px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  /* 暗黑模式：白色文字，明亮模式：黑色文字 */
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease;
}

html[data-theme="light"] .nav-card-title {
  color: #000;
  text-shadow: none;
}

/* 底部按钮容器 - 玻璃效果 */
.nav-bottom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-shrink: 0;
  overflow: visible;
  position: relative;
  z-index: 200;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

/* 按钮包装器 - 玻璃效果 */
.nav-buttons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 16px 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: visible;
  pointer-events: auto;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

/* 按钮项容器 */
.nav-button-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  pointer-events: auto;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

/* 底部按钮 */
.nav-button {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

html[data-theme="light"] .nav-button {
  background: #fff;
}

.nav-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* 按钮提示文字 - 玻璃效果 */
.nav-button-tooltip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

/* 悬停时显示提示 */
.nav-button-item:hover .nav-button-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-14px);
}

/* 按钮内图标 */
.nav-button-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
}

/* 弹窗遮罩层 */
.wallpaper-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* 弹窗主体 */
.wallpaper-modal {
  background: #1a1a1a;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

/* 弹窗头部 */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-title {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin: 0;
}

.modal-close {
  font-size: 28px;
  font-weight: 300;
  color: var(--theme-color, #f28e16);
  cursor: pointer;
  transition: opacity 0.2s ease;
  line-height: 1;
}

.modal-close:hover {
  opacity: 0.8;
}

/* 壁纸网格 */
.wallpaper-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 20px;
  overflow-y: auto;
  max-height: calc(80vh - 60px);
}

.wallpaper-grid-item {
  position: relative;
  aspect-ratio: 16/10;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.wallpaper-grid-item:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.3);
}

.wallpaper-grid-item.active {
  border-color: var(--theme-color, #f28e16);
}

.wallpaper-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 选中标记 */
.wallpaper-check {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: bold;
  color: var(--theme-color, #f28e16);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* 弹窗淡入淡出动画 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .wallpaper-modal,
.modal-fade-leave-to .wallpaper-modal {
  transform: scale(0.95);
}

/* 响应式 */
@media (max-width: 768px) {
  .nav-page {
    padding: 15px;
  }

  .clock {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  .nav-header {
    padding: 20px 15px;
  }

  .search-input-wrapper {
    height: 40px;
  }

  .engine-selector-btn,
  .search-btn {
    width: 34px;
    height: 34px;
  }

  .nav-cards-container {
    padding: 20px;
  }

  .nav-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 20px;
  }

  .nav-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 16px;
    justify-items: center;
  }

  .nav-card {
    padding: 16px 10px;
    width: 110px;
  }

  .nav-card-icon {
    width: 36px;
    height: 36px;
  }

  .nav-card-icon.iconfont {
    font-size: 32px;
    line-height: 36px;
  }

  .nav-header {
    width: 60vw;
  }

  .search-box {
    margin-top: 30px;
  }

  .nav-cards-wrapper {
    width: 70vw;
  }

  .nav-bottom-container {
    padding: 15px;
  }

  .nav-buttons-wrapper {
    gap: 12px;
    padding: 12px 20px;
  }

  .nav-button {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }

  .nav-button-icon {
    width: 28px;
    height: 28px;
    pointer-events: none;
    user-select: none;
  }

  .nav-button-tooltip {
    bottom: calc(100% + 10px);
    font-size: 12px;
    padding: 5px 10px;
  }

  .wallpaper-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 16px;
  }

  .wallpaper-grid-item {
    aspect-ratio: 16/9;
  }
}

@media (max-width: 480px) {
  .nav-header {
    width: 70vw;
  }

  .search-box {
    margin-top: 24px;
  }

  .nav-cards-wrapper {
    width: 80vw;
  }

  .nav-cards-container {
    padding: 16px;
  }

  .nav-grid {
    gap: 12px;
    justify-items: center;
  }

  .nav-card {
    width: 110px;
  }

  .nav-buttons-wrapper {
    gap: 10px;
    padding: 10px 16px;
  }

  .nav-button {
    width: 44px;
    height: 44px;
    border-radius: 10px;
  }

  .nav-button-icon {
    width: 24px;
    height: 24px;
    pointer-events: none;
    user-select: none;
  }

  .nav-button-tooltip {
    bottom: calc(100% + 8px);
    font-size: 11px;
    padding: 4px 8px;
  }

  .wallpaper-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 12px;
  }

  .wallpaper-grid-item {
    aspect-ratio: 16/9;
  }
}
</style>