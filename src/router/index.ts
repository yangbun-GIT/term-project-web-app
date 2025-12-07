import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/signin', name: 'SignIn', component: SignIn }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// [과제 핵심] 로그인 안 했으면 튕겨내기 (Navigation Guard) [cite: 341]
router.beforeEach((to, _from, next) => {
    const apiKey = localStorage.getItem('TMDb-Key')

    // 로그인 페이지가 아닌 곳을 가려는데, 키가 없다? -> 로그인 페이지로 보냄
    if (to.name !== 'SignIn' && !apiKey) {
        next({ name: 'SignIn' })
    } else {
        next()
    }
})

export default router