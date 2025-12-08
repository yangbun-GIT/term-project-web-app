import { defineStore } from 'pinia'
import { ref } from 'vue'
import tmdb from '../api/tmdb'

export const useMovieStore = defineStore('movie', () => {
    // --- State (총 20개 Key) ---
    const wishlist = ref<any[]>([])
    const email = ref('')
    const apiKey = ref('')
    const searchHistory = ref<string[]>([])
    const language = ref('ko-KR')
    const theme = ref('dark')
    const watchHistory = ref<any[]>([])
    const genreCache = ref<any[]>([])
    const viewMode = ref<'table' | 'infinite'>('table')
    const wishlistSort = ref<'date' | 'alpha'>('date')
    const includeAdult = ref(false)
    const autoplay = ref(true)
    const lowDataMode = ref(false)
    const lastPath = ref('/')

    // [NEW] 추가된 6개 상태
    const volumeLevel = ref(0.5)        // 볼륨 (0.0 ~ 1.0)
    const isMuted = ref(false)          // 음소거 여부
    const gridSize = ref<'normal' | 'large'>('normal') // 그리드 크기
    const fontSize = ref<'normal' | 'large'>('normal') // 글자 크기
    const reducedMotion = ref(false)    // 애니메이션 줄이기
    const hideHorror = ref(false)       // 공포 영화 숨기기 (Content Filter)

    // --- Actions ---
    const initializeStore = () => {
        const load = (key: string, def: any = null) => {
            const data = localStorage.getItem(key)
            if (data === null) return def
            try { return JSON.parse(data) } catch { return data } // 문자열은 그대로 반환
        }

        // 1-14. 기존 로직
        wishlist.value = load('my-wishlist', [])
        email.value = localStorage.getItem('UserId') || ''
        apiKey.value = localStorage.getItem('TMDb-Key') || ''
        searchHistory.value = load('search-history', [])
        language.value = localStorage.getItem('app-lang') || 'ko-KR'

        // 테마 & 폰트 적용
        theme.value = localStorage.getItem('app-theme') || 'dark'
        fontSize.value = localStorage.getItem('font-size') as any || 'normal'
        applyVisualSettings()

        watchHistory.value = load('watch-history', [])
        genreCache.value = load('cached-genres', [])
        viewMode.value = localStorage.getItem('view-mode') as any || 'table'
        wishlistSort.value = localStorage.getItem('wishlist-sort') as any || 'date'
        includeAdult.value = load('include-adult', false)
        autoplay.value = load('autoplay', true)
        lowDataMode.value = load('low-data-mode', false)
        lastPath.value = localStorage.getItem('last-path') || '/'

        // [NEW] 15-20. 신규 데이터 로드
        volumeLevel.value = load('volume-level', 0.5)
        isMuted.value = load('is-muted', false)
        gridSize.value = localStorage.getItem('grid-size') as any || 'normal'
        reducedMotion.value = load('reduced-motion', false)
        hideHorror.value = load('content-filter', false)
    }

    // --- Visual Settings 적용 함수 (테마 + 폰트) ---
    const applyVisualSettings = () => {
        // 테마 적용
        if (theme.value === 'light') document.body.classList.add('light-mode')
        else document.body.classList.remove('light-mode')

        // 폰트 크기 적용
        if (fontSize.value === 'large') document.body.classList.add('font-large')
        else document.body.classList.remove('font-large')
    }

    // ... (기존 기본 함수들은 생략 없이 유지) ...
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
    const setViewMode = (mode: 'table' | 'infinite') => {
        viewMode.value = mode; localStorage.setItem('view-mode', mode)
    }
    const setWishlistSort = (sort: 'date' | 'alpha') => {
        wishlistSort.value = sort; localStorage.setItem('wishlist-sort', sort)
    }
    const toggleAdult = () => {
        includeAdult.value = !includeAdult.value; localStorage.setItem('include-adult', String(includeAdult.value))
    }
    const toggleAutoplay = () => {
        autoplay.value = !autoplay.value; localStorage.setItem('autoplay', String(autoplay.value))
    }
    const toggleLowData = () => {
        lowDataMode.value = !lowDataMode.value; localStorage.setItem('low-data-mode', String(lowDataMode.value))
    }
    const saveLastPath = (path: string) => {
        if (path === '/signin') return
        lastPath.value = path; localStorage.setItem('last-path', path)
    }

    // --- [NEW] 신규 기능 제어 함수들 ---
    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
        localStorage.setItem('app-theme', theme.value)
        applyVisualSettings()
    }
    const toggleGridSize = () => {
        gridSize.value = gridSize.value === 'normal' ? 'large' : 'normal'
        localStorage.setItem('grid-size', gridSize.value)
    }
    const toggleFontSize = () => {
        fontSize.value = fontSize.value === 'normal' ? 'large' : 'normal'
        localStorage.setItem('font-size', fontSize.value)
        applyVisualSettings()
    }
    const toggleMotion = () => {
        reducedMotion.value = !reducedMotion.value
        localStorage.setItem('reduced-motion', String(reducedMotion.value))
    }
    const toggleHorror = () => {
        hideHorror.value = !hideHorror.value
        localStorage.setItem('content-filter', String(hideHorror.value))
    }
    const setVolume = (vol: number) => {
        volumeLevel.value = vol; localStorage.setItem('volume-level', String(vol))
    }
    const toggleMute = () => {
        isMuted.value = !isMuted.value; localStorage.setItem('is-muted', String(isMuted.value))
    }

    return {
        // State
        wishlist, email, apiKey, searchHistory, language, theme, watchHistory, genreCache, viewMode,
        wishlistSort, includeAdult, autoplay, lowDataMode, lastPath,
        volumeLevel, isMuted, gridSize, fontSize, reducedMotion, hideHorror,
        // Actions
        initializeStore, login, logout, toggleLike, isLiked,
        addSearchHistory, removeSearchHistory, setLanguage,
        toggleTheme, addToHistory, fetchGenres, setViewMode,
        setWishlistSort, toggleAdult, toggleAutoplay, toggleLowData, saveLastPath,
        toggleGridSize, toggleFontSize, toggleMotion, toggleHorror, setVolume, toggleMute
    }
})