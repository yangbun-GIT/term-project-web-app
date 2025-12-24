// src/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Wishlist from '../views/Wishlist.vue'
import Popular from '../views/Popular.vue'
import Search from '../views/Search.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/signin', name: 'SignIn', component: SignIn },
    { path: '/wishlist', name: 'Wishlist', component: Wishlist },
    { path: '/popular', name: 'Popular', component: Popular },
    { path: '/search', name: 'Search', component: Search }
]

const router = createRouter({
    // 주소에 '#'이 붙는 Hash 모드 사용 (새로고침 시 404 에러 방지)
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

// [수정 완료] 기존의 API Key 검사 가드(beforeEach)를 삭제했습니다.
// 이제 Firebase가 로그인 상태를 관리하므로, 라우터에서 강제로 막을 필요가 없습니다.

export default router