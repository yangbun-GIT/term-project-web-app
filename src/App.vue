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
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const store = useMovieStore()
const router = useRouter()

onMounted(() => {
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // 1. 로그인 됨: 스토어 초기화 및 원래 가려던 페이지로 이동
      store.initializeStore()
      if (store.lastPath && store.lastPath !== '/' && store.lastPath !== '/signin') {
        router.push(store.lastPath)
      }
    } else {
      // 2. 로그인 안 됨 (문제 해결 핵심 부분)
      // store.logout()을 여기서 호출하면 새로고침 무한 루프에 빠지므로 삭제함.

      // 현재 페이지가 이미 로그인 페이지라면 아무것도 하지 않음 (루프 방지)
      if (router.currentRoute.value.path !== '/signin') {
        router.replace('/signin')
      }
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