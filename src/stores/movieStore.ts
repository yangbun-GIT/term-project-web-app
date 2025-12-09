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
    const lastPath = ref('/')

    // 기능 제어
    const wishlistSort = ref<'date' | 'alpha'>('date')
    const includeAdult = ref(false)
    const autoplay = ref(true)
    const lowDataMode = ref(false)

    // UI/비주얼 제어 (즉시 반영됨)
    const gridSize = ref<'normal' | 'large'>('normal')
    const fontSize = ref<'normal' | 'large'>('normal')
    const reducedMotion = ref(false)
    const hideHorror = ref(false)
    const showYear = ref(false)   // [New] 개봉년도 표시
    const enableHover = ref(true) // [New] 호버 확대 효과

    // --- Actions ---

    // [핵심 함수] 화면(body)에 실제 클래스를 붙였다 떼는 역할
    const applyVisualSettings = () => {
        const body = document.body.classList

        // 1. 테마 적용 (가장 중요)
        if (theme.value === 'light') {
            body.add('light-mode')
            body.remove('dark-mode')
        } else {
            body.add('dark-mode')
            body.remove('light-mode')
        }

        // 2. 기타 설정 적용
        fontSize.value === 'large' ? body.add('font-large') : body.remove('font-large')
        reducedMotion.value ? body.add('reduced-motion') : body.remove('reduced-motion')
        gridSize.value === 'large' ? body.add('grid-large') : body.remove('grid-large')
        !enableHover.value ? body.add('no-hover') : body.remove('no-hover')
    }

    const initializeStore = () => {
        const load = (key: string, def: any = null) => {
            const data = localStorage.getItem(key)
            if (data === null) return def
            try { return JSON.parse(data) } catch { return data }
        }

        wishlist.value = load('my-wishlist', [])
        email.value = localStorage.getItem('UserId') || ''
        apiKey.value = localStorage.getItem('TMDb-Key') || ''
        searchHistory.value = load('search-history', [])
        language.value = localStorage.getItem('app-lang') || 'ko-KR'

        // 테마 불러오기
        theme.value = localStorage.getItem('app-theme') || 'dark'

        // 비주얼 설정 로드
        fontSize.value = localStorage.getItem('font-size') as any || 'normal'
        reducedMotion.value = load('reduced-motion', false)
        gridSize.value = localStorage.getItem('grid-size') as any || 'normal'
        enableHover.value = load('enable-hover', true)

        // [중요] 앱 켜질 때 설정 바로 적용
        applyVisualSettings()

        watchHistory.value = load('watch-history', [])
        genreCache.value = load('cached-genres', [])
        viewMode.value = localStorage.getItem('view-mode') as any || 'table'
        wishlistSort.value = localStorage.getItem('wishlist-sort') as any || 'date'
        includeAdult.value = load('include-adult', false)
        autoplay.value = load('autoplay', true)
        lowDataMode.value = load('low-data-mode', false)
        lastPath.value = localStorage.getItem('last-path') || '/'

        hideHorror.value = load('content-filter', false)
        showYear.value = load('show-year', false)
    }

    // --- 기능 함수들 ---
    const login = (u: string, k: string) => { email.value = u; apiKey.value = k; localStorage.setItem('UserId', u); localStorage.setItem('TMDb-Key', k); }
    const logout = () => { email.value = ''; apiKey.value = ''; localStorage.removeItem('UserId'); localStorage.removeItem('TMDb-Key'); }
    const toggleLike = (m: any) => {
        const idx = wishlist.value.findIndex((x) => x.id === m.id)
        if (idx !== -1) wishlist.value.splice(idx, 1); else wishlist.value.push(m)
        localStorage.setItem('my-wishlist', JSON.stringify(wishlist.value))
    }
    const isLiked = (id: number) => wishlist.value.some((m) => m.id === id)
    const addSearchHistory = (k: string) => {
        if (!k.trim()) return; searchHistory.value = searchHistory.value.filter(x => x !== k); searchHistory.value.unshift(k)
        if (searchHistory.value.length > 10) searchHistory.value.pop(); localStorage.setItem('search-history', JSON.stringify(searchHistory.value))
    }
    const removeSearchHistory = (k: string) => { searchHistory.value = searchHistory.value.filter(x => x !== k); localStorage.setItem('search-history', JSON.stringify(searchHistory.value)) }
    const setLanguage = (l: string) => { language.value = l; localStorage.setItem('app-lang', l); window.location.reload() }
    const addToHistory = (m: any) => {
        const idx = watchHistory.value.findIndex(x => x.id === m.id)
        if (idx !== -1) watchHistory.value.splice(idx, 1); watchHistory.value.unshift(m)
        if (watchHistory.value.length > 20) watchHistory.value.pop(); localStorage.setItem('watch-history', JSON.stringify(watchHistory.value))
    }
    const fetchGenres = async () => {
        if (genreCache.value.length > 0) return genreCache.value
        try { const res = await tmdb.get('/genre/movie/list'); genreCache.value = res.data.genres; localStorage.setItem('cached-genres', JSON.stringify(genreCache.value)); return genreCache.value } catch { return [] }
    }
    const setViewMode = (m: 'table' | 'infinite') => { viewMode.value = m; localStorage.setItem('view-mode', m) }
    const saveLastPath = (p: string) => { if (p !== '/signin') { lastPath.value = p; localStorage.setItem('last-path', p) } }

    // --- [Toggle Functions] 설정 변경 시 applyVisualSettings 호출 필수 ---
    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        localStorage.setItem('app-theme', theme.value);
        applyVisualSettings(); // 여기서 body 클래스 변경됨
    }

    const toggleAdult = () => { includeAdult.value = !includeAdult.value; localStorage.setItem('include-adult', String(includeAdult.value)); window.location.reload() }
    const toggleAutoplay = () => { autoplay.value = !autoplay.value; localStorage.setItem('autoplay', String(autoplay.value)) }
    const toggleLowData = () => { lowDataMode.value = !lowDataMode.value; localStorage.setItem('low-data-mode', String(lowDataMode.value)) }
    const toggleGridSize = () => { gridSize.value = gridSize.value === 'normal' ? 'large' : 'normal'; localStorage.setItem('grid-size', gridSize.value); applyVisualSettings() }
    const toggleFontSize = () => { fontSize.value = fontSize.value === 'normal' ? 'large' : 'normal'; localStorage.setItem('font-size', fontSize.value); applyVisualSettings() }
    const toggleMotion = () => { reducedMotion.value = !reducedMotion.value; localStorage.setItem('reduced-motion', String(reducedMotion.value)); applyVisualSettings() }
    const toggleHorror = () => { hideHorror.value = !hideHorror.value; localStorage.setItem('content-filter', String(hideHorror.value)) }
    const toggleShowYear = () => { showYear.value = !showYear.value; localStorage.setItem('show-year', String(showYear.value)) }
    const toggleHover = () => { enableHover.value = !enableHover.value; localStorage.setItem('enable-hover', String(enableHover.value)); applyVisualSettings() }
    const setWishlistSort = (s: 'date' | 'alpha') => { wishlistSort.value = s; localStorage.setItem('wishlist-sort', s) }

    return {
        wishlist, email, apiKey, searchHistory, language, theme, watchHistory, genreCache, viewMode,
        wishlistSort, includeAdult, autoplay, lowDataMode, lastPath,
        gridSize, fontSize, reducedMotion, hideHorror, showYear, enableHover,
        initializeStore, login, logout, toggleLike, isLiked,
        addSearchHistory, removeSearchHistory, setLanguage,
        toggleTheme, addToHistory, fetchGenres, setViewMode,
        setWishlistSort, toggleAdult, toggleAutoplay, toggleLowData, saveLastPath,
        toggleGridSize, toggleFontSize, toggleMotion, toggleHorror, toggleShowYear, toggleHover
    }
})