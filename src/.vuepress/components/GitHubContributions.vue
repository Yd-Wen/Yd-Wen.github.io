<template>
  <div class="github-contributions-wrapper">
    <div class="github-contributions">
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="contributions.length > 0" class="contributions-calendar">
        <!-- 月份标签 -->
        <div class="months-row">
          <div v-for="month in visibleMonths" :key="month.label + month.startWeek" class="month-label" :style="{ width: month.width }">
            {{ month.label }}
          </div>
        </div>

        <!-- 贡献网格 -->
        <div class="contributions-grid">
          <!-- 色块网格 -->
          <div class="grid-container">
            <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="week-column">
              <div v-for="(day, dayIndex) in week" :key="dayIndex" class="day-cell-wrapper">
                <div v-if="day" class="day-cell" :class="getLevelClass(day.count)" :data-date="day.date"
                  :data-count="day.count" @mouseenter="showTooltip($event, day)" @mouseleave="hideTooltip">
                </div>
                <div v-else class="day-cell empty"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="contributions-legend">
          <span>Less</span>
          <div class="legend-cell level-0"></div>
          <div class="legend-cell level-1"></div>
          <div class="legend-cell level-2"></div>
          <div class="legend-cell level-3"></div>
          <div class="legend-cell level-4"></div>
          <span>More</span>
        </div>
      </div>

      <div v-else class="contributions-placeholder">
        <span>No contributions yet</span>
      </div>
    </div>

    <!-- Tooltip - Teleported to body to avoid z-index issues -->
    <Teleport to="body">
      <div v-if="tooltip.visible" class="contribution-tooltip" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }">
        <div class="tooltip-date">{{ tooltip.displayDate }}</div>
        <div class="tooltip-count">{{ tooltip.count }} contributions</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  username: {
    type: String,
    default: ''
  },
  themeColor: {
    type: String,
    default: 'f28e16'
  },
  months: {
    type: Number,
    default: 2,
    validator: (value) => value >= 2 && value <= 12
  }
})

const loading = ref(false)
const error = ref('')
const allContributions = ref([])
const tooltip = ref({
  visible: false,
  rawDate: '',  // 原始日期用于比较
  displayDate: '',  // 格式化后的日期用于显示
  count: 0,
  x: 0,
  y: 0
})

// 缓存配置
const CACHE_DURATION = 60 * 60 * 1000 // 1小时缓存
const getCacheKey = (username) => `github-contributions-${username}`

// 从缓存读取数据
const loadFromCache = (username) => {
  if (typeof window === 'undefined') return null
  try {
    const cacheKey = getCacheKey(username)
    const cached = localStorage.getItem(cacheKey)
    if (!cached) return null

    const { data, timestamp } = JSON.parse(cached)
    const now = Date.now()

    // 检查缓存是否过期
    if (now - timestamp > CACHE_DURATION) {
      localStorage.removeItem(cacheKey)
      return null
    }

    return data
  } catch (e) {
    return null
  }
}

// 保存数据到缓存
const saveToCache = (username, data) => {
  if (typeof window === 'undefined') return
  try {
    const cacheKey = getCacheKey(username)
    const cacheData = {
      data,
      timestamp: Date.now()
    }
    localStorage.setItem(cacheKey, JSON.stringify(cacheData))
  } catch (e) {
    // 缓存失败不影响功能
  }
}

// 根据月份数计算要显示的贡献数据
const contributions = computed(() => {
  if (allContributions.value.length === 0) return []

  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()
  const today = now.getDate()

  // 计算需要显示的完整月份
  // 当 months=12 时，需要显示完整的12个月（从去年同月1号到本月今天）
  const fullMonthsToShow = Math.max(0, props.months - 1)

  // 计算起始日期：往前推 (months - 1) 个月，从该月1号开始
  // 例如 months=2: 显示上个月完整月 + 本月已过日期
  // 例如 months=3: 显示上上月完整月、上月完整月 + 本月已过日期
  // 例如 months=12: 显示前11个完整月 + 本月已过日期
  let startYear = currentYear
  let startMonth = currentMonth - fullMonthsToShow

  // 处理跨年的情况
  while (startMonth < 0) {
    startYear -= 1
    startMonth += 12
  }

  const startDate = new Date(startYear, startMonth, 1)
  const endDate = new Date(currentYear, currentMonth, today)

  return allContributions.value
    .filter(day => {
      const date = new Date(day.date)
      return date >= startDate && date <= endDate
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
})

// 获取最近一年的贡献数据
const fetchContributions = async () => {
  if (!props.username) {
    error.value = 'Please configure githubUsername in frontmatter'
    return
  }

  // 先尝试从缓存读取
  const cachedData = loadFromCache(props.username)
  if (cachedData) {
    allContributions.value = cachedData
    return
  }

  loading.value = true
  error.value = ''

  try {
    // 使用 github-contributions-api 获取贡献数据
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${props.username}?y=last`)
    if (!response.ok) {
      throw new Error('Failed to fetch contributions')
    }

    const data = await response.json()

    if (data.contributions && Array.isArray(data.contributions)) {
      allContributions.value = data.contributions
      // 保存到缓存
      saveToCache(props.username, data.contributions)
    } else {
      allContributions.value = []
    }
  } catch (err) {
    error.value = err.message || 'Failed to fetch contributions'
    allContributions.value = []
  } finally {
    loading.value = false
  }
}

// 将贡献数据按周分组
const weeks = computed(() => {
  if (contributions.value.length === 0) return []

  const weeks = []
  let currentWeek = []

  // 获取第一天是星期几 (0=周日, 1=周一, ...)
  const firstDay = new Date(contributions.value[0].date)
  const firstWeekday = firstDay.getDay() || 7 // 转换为 1-7 (周一=1, 周日=7)

  // 填充第一周前面的空白
  for (let i = 1; i < firstWeekday; i++) {
    currentWeek.push(null)
  }

  contributions.value.forEach(day => {
    const date = new Date(day.date)
    const weekday = date.getDay() || 7

    currentWeek.push({
      date: day.date,
      count: day.count,
      weekday: weekday
    })

    if (weekday === 7) {
      weeks.push([...currentWeek])
      currentWeek = []
    }
  })

  // 添加最后一周
  if (currentWeek.length > 0) {
    // 填充最后一周的空白
    const lastWeekday = currentWeek[currentWeek.length - 1]?.weekday || 7
    for (let i = lastWeekday; i < 7; i++) {
      currentWeek.push(null)
    }
    weeks.push(currentWeek)
  }

  return weeks
})

// 英文月份简写
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// 计算可见月份
const visibleMonths = computed(() => {
  if (contributions.value.length === 0) return []

  const months = []
  const cellWidth = 16 // 每个色块宽度 (12px + 4px gap)

  contributions.value.forEach((day, index) => {
    const date = new Date(day.date)
    const monthLabel = monthNames[date.getMonth()]

    // 计算该日期属于第几周
    const firstDayWeekday = (new Date(contributions.value[0].date).getDay() || 7)
    const weekIndex = Math.floor((index + firstDayWeekday - 1) / 7)

    if (months.length === 0 || months[months.length - 1].label !== monthLabel) {
      if (months.length > 0) {
        months[months.length - 1].width = ((weekIndex - months[months.length - 1].startWeek) * cellWidth) + 'px'
      }
      months.push({
        label: monthLabel,
        startWeek: weekIndex,
        width: 'auto'
      })
    }
  })

  // 设置最后一个月份的宽度
  if (months.length > 0) {
    const lastMonth = months[months.length - 1]
    const totalWeeks = weeks.value.length
    lastMonth.width = ((totalWeeks - lastMonth.startWeek) * cellWidth) + 'px'
  }

  // 过滤掉宽度太小的月份（至少要有2周才显示）
  return months.filter(month => {
    const widthInWeeks = (parseInt(month.width) / cellWidth)
    return widthInWeeks >= 2
  })
})

// 获取贡献等级
const getLevelClass = (count) => {
  if (count === 0) return 'level-0'
  if (count <= 3) return 'level-1'
  if (count <= 6) return 'level-2'
  if (count <= 9) return 'level-3'
  return 'level-4'
}

// Format date to English format
const formatDate = (date) => {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

// 显示 tooltip
const showTooltip = (event, day) => {
  const rect = event.target.getBoundingClientRect()
  const date = new Date(day.date)
  tooltip.value = {
    visible: true,
    rawDate: day.date,  // 保存原始日期用于比较
    displayDate: formatDate(date),  // 格式化后的日期用于显示
    count: day.count,
    x: rect.left + rect.width / 2,  // 水平居中
    y: rect.top - 8  // 在色块上方
  }
}

// 隐藏 tooltip
const hideTooltip = () => {
  tooltip.value.visible = false
  tooltip.value.rawDate = ''
}

onMounted(() => {
  fetchContributions()
})
</script>

<style scoped>
.github-contributions-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  position: relative;
}

.github-contributions {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}

.loading,
.error,
.contributions-placeholder {
  text-align: center;
  padding: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.error {
  color: #ff6b6b;
}

.contributions-calendar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.months-row {
  display: flex;
  padding-left: 28px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.month-label {
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contributions-grid {
  display: flex;
  gap: 4px;
}

.weekday-labels {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2px 0;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  height: 98px;
}

.weekday-label {
  height: 12px;
  line-height: 12px;
}

.grid-container {
  display: flex;
  gap: 4px;
}

.week-column {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.day-cell-wrapper {
  width: 12px;
  height: 12px;
}

.day-cell {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.day-cell:hover {
  transform: scale(1.2);
  box-shadow: 0 0 4px rgba(242, 142, 22, 0.5);
}

.day-cell.empty {
  background: transparent;
  cursor: default;
}

.day-cell.empty:hover {
  transform: none;
  box-shadow: none;
}

/* Tooltip - teleported to body */
.contribution-tooltip {
  position: fixed;
  background: rgba(0, 0, 0, 0.95);
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 11px;
  white-space: nowrap;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transform: translate(-50%, -100%);
}

.contribution-tooltip .tooltip-date {
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.7);
}

.contribution-tooltip .tooltip-count {
  font-weight: 600;
}

/* 使用主题色的贡献等级 */
.level-0 {
  background: rgba(255, 255, 255, 0.1);
}

.level-1 {
  background: rgba(242, 142, 22, 0.3);
}

.level-2 {
  background: rgba(242, 142, 22, 0.5);
}

.level-3 {
  background: rgba(242, 142, 22, 0.7);
}

.level-4 {
  background: rgba(242, 142, 22, 1);
}

/* 图例 */
.contributions-legend {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 8px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}

.legend-cell {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

/* 响应式 */
@media (max-width: 768px) {
  .github-contributions {
    padding: 16px;
  }

  .day-cell-wrapper,
  .day-cell {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .github-contributions {
    padding: 12px;
  }

  .day-cell-wrapper,
  .day-cell {
    width: 8px;
    height: 8px;
  }
}

/* 移动端隐藏贡献图 */
@media (max-width: 768px) {
  .github-contributions-wrapper {
    display: none;
  }
}
</style>
