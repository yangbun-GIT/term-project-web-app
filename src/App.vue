<template>
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from './stores/movieStore'

const store = useMovieStore()
const router = useRouter()

onMounted(() => {
  store.initializeStore()

  // 마지막 접속 페이지 복구 (로그인 상태일 때만)
  if (store.apiKey && store.lastPath && store.lastPath !== '/' && store.lastPath !== '/signin') {
    router.push(store.lastPath)
  }
})

// 페이지 이동 시마다 경로 저장
router.afterEach((to) => {
  if (to.path !== '/signin') {
    store.saveLastPath(to.path)
  }
})
</script>

<style>
body { margin: 0; padding: 0; background-color: #141414; color: white; }
#app { width: 100%; min-height: 100vh; }

/* [필수] 페이지 전환 애니메이션 CSS */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>