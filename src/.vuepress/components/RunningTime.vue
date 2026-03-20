<template>
  <span class="running-time">{{ displayText }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const displayText = ref('')
let timer = null

const updateTime = () => {
  const start = new Date('2026-02-01 20:30:00')
  const now = new Date()
  const diff = now - start

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  displayText.value = `已运行 ${days} 天 ${hours} 小时`
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 60000) // 每分钟更新一次
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.running-time {
  color: inherit;
  font-size: 0.875rem;
}
</style>
