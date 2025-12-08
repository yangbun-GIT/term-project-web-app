import { defineStore } from 'pinia'
import { ref } from 'vue'
import tmdb from '../api/tmdb'

export const useMovieStore = defineStore('movie', () => {
    // --- State (총 9개 Key 관리) ---
    const wishlist = ref<any[]>([])
    const email = ref('')
    const apiKey = ref('')
    const searchHistory = ref<string[]>([])
    const language = ref('ko-KR')
    const theme = ref('dark')
    const watchHistory = ref<any[]>([])
    const genreCache = ref<any[]>([])

    // [NEW] 보기 모드 (기본값 table)
    const viewMode = ref<'table' | 'infinite'>('table')

    // --- Actions ---
    const initializeStore = () => {
        const load = (key: string) => {
            const data = localStorage.getItem(key)
            return data ? JSON.parse(data) : null
        }

        // 기존 데이터 로드
        const savedWishlist = load('my-wishlist')
        if (savedWishlist) wishlist.value = savedWishlist

        email.value = localStorage.getItem('UserId') || ''
        apiKey.value = localStorage.getItem('TMDb-Key') || ''

        const savedHistory = load('search-history')
        if (savedHistory) searchHistory.value = savedHistory

        const savedLang = localStorage.getItem('app-lang')
        if (savedLang) language.value = savedLang

        const savedTheme = localStorage.getItem('app-theme')
        if (savedTheme) theme.value = savedTheme
        applyTheme(theme.value)

        const savedWatch = load('watch-history')
        if (savedWatch) watchHistory.value = savedWatch

        const savedGenres = load('cached-genres')
        if (savedGenres) genreCache.value = savedGenres

        // [NEW] 보기 모드 로드
        const savedViewMode = localStorage.getItem('view-mode')
        if (savedViewMode) viewMode.value = savedViewMode as 'table' | 'infinite'
    }

    // --- [NEW] 보기 모드 저장 ---
    const setViewMode = (mode: 'table' | 'infinite') => {
        viewMode.value = mode
        localStorage.setItem('view-mode', mode)
    }

    // ... (기존 로그인, 찜하기, 검색기록, 언어, 테마, 시청기록, 캐싱 함수들 유지) ...
    const login = (userEmail: string, key: string) => {
        email.value = userEmail; apiKey.value = key;
        localStorage.setItem('UserId', userEmail); localStorage.setItem('TMDb-Key', key);
    }
    const logout = () => {
        email.value = ''; apiKey.value = '';
        localStorage.removeItem('UserId'); localStorage.removeItem('TMDb-Key');
    }
    const toggleLike = (movie: any) => {
        const index = wishlist.value.findIndex((m) => m.id === movie.id)
        if (index !== -1) wishlist.value.splice(index, 1); else wishlist.value.push(movie)
        localStorage.setItem('my-wishlist', JSON.stringify(wishlist.value))
    }
    const isLiked = (movieId: number) => wishlist.value.some((m) => m.id === movieId)
    const addSearchHistory = (keyword: string) => {
        if (!keyword.trim()) return
        searchHistory.value = searchHistory.value.filter(k => k !== keyword)
        searchHistory.value.unshift(keyword)
        if (searchHistory.value.length > 10) searchHistory.value.pop()
        localStorage.setItem('search-history', JSON.stringify(searchHistory.value))
    }
    const removeSearchHistory = (keyword: string) => {
        searchHistory.value = searchHistory.value.filter(k => k !== keyword)
        localStorage.setItem('search-history', JSON.stringify(searchHistory.value))
    }
    const setLanguage = (lang: string) => {
        language.value = lang; localStorage.setItem('app-lang', lang); window.location.reload()
    }
    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        localStorage.setItem('app-theme', theme.value); applyTheme(theme.value)
    }
    const applyTheme = (mode: string) => {
        if (mode === 'light') document.body.classList.add('light-mode'); else document.body.classList.remove('light-mode')
    }
    const addToHistory = (movie: any) => {
        const exists = watchHistory.value.findIndex(m => m.id === movie.id)
        if (exists !== -1) watchHistory.value.splice(exists, 1)
        watchHistory.value.unshift(movie)
        if (watchHistory.value.length > 20) watchHistory.value.pop()
        localStorage.setItem('watch-history', JSON.stringify(watchHistory.value))
    }
    const fetchGenres = async () => {
        if (genreCache.value.length > 0) return genreCache.value
        try {
            const res = await tmdb.get('/genre/movie/list')
            genreCache.value = res.data.genres
            localStorage.setItem('cached-genres', JSON.stringify(genreCache.value))
            return genreCache.value
        } catch (e) { return [] }
    }

    return {
        wishlist, email, apiKey, searchHistory, language, theme, watchHistory, genreCache, viewMode,
        initializeStore, login, logout, toggleLike, isLiked,
        addSearchHistory, removeSearchHistory, setLanguage,
        toggleTheme, addToHistory, fetchGenres, setViewMode
    }
})