<template>
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from './stores/movieStore'
import Footer from './components/Footer.vue'
// [추가] Firebase 인증 상태 감지 함수 불러오기
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const store = useMovieStore()
const router = useRouter()

onMounted(() => {
  const auth = getAuth()

  // [핵심 수정] 앱이 시작될 때 Firebase 인증 상태를 실시간으로 확인
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // 1. Firebase가 "로그인 됨"이라고 확인해주면 -> 스토어 초기화 및 페이지 이동
      store.initializeStore()
      if (store.lastPath && store.lastPath !== '/' && store.lastPath !== '/signin') {
        router.push(store.lastPath)
      }
    } else {
      // 2. Firebase가 "로그아웃 됨"이라고 확인해주면 -> 강제로 로그인 페이지로 이동
      store.logout()
      router.replace('/signin')
    }
  })
})

router.afterEach((to) => {
  if (to.path !== '/signin') {
    store.saveLastPath(to.path)
  }
})
</script>

<style>
body { margin: 0; padding: 0; background-color: #141414; color: white; }

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>