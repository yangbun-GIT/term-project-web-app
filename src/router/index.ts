import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Wishlist from '../views/Wishlist.vue'
import Popular from '../views/Popular.vue' // [추가]

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/signin', name: 'SignIn', component: SignIn },
    { path: '/wishlist', name: 'Wishlist', component: Wishlist },
    { path: '/popular', name: 'Popular', component: Popular } // [추가]
]

const router = createRouter({
    history: createWebHistory(),
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