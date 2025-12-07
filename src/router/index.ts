import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Wishlist from '../views/Wishlist.vue' // [추가됨] 찜 목록 페이지

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/wishlist', // [추가됨] 주소 설정
        name: 'Wishlist',
        component: Wishlist
    }
    // 나중에 Popular, Search 페이지가 만들어지면 여기에 추가할 예정입니다.
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// [중요] 네비게이션 가드: 로그인 안 된 상태로 접근 시 차단
// '_from'은 사용하지 않는 변수이므로 앞에 언더바를 붙여 경고를 방지합니다.
router.beforeEach((to, _from, next) => {
    // 로컬 스토리지에서 API 키 확인
    const apiKey = localStorage.getItem('TMDb-Key')

    // 이동하려는 곳이 로그인 페이지가 아니고, 키도 없다면? -> 로그인 페이지로 강제 이동
    if (to.name !== 'SignIn' && !apiKey) {
        next({ name: 'SignIn' })
    } else {
        next() // 통과
    }
})

export default router