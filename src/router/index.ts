// [수정] createWebHashHistory 임포트 (History -> HashHistory)
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
    // [핵심 수정] createWebHistory -> createWebHashHistory 로 변경
    // 이렇게 하면 주소가 /#/signin 형태로 변하며, 새로고침 해도 404가 안 뜹니다.
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, _from, next) => {
    const apiKey = localStorage.getItem('TMDb-Key')
    if (to.name !== 'SignIn' && !apiKey) {
        next({ name: 'SignIn' })
    } else {
        next()
    }
})

export default router