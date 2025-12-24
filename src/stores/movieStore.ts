import { defineStore } from 'pinia'
import { ref } from 'vue'
import tmdb from '../api/tmdb'
// Firebase Auth 함수 추가
import { auth, db, googleProvider } from '../firebase'
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword, // [추가] 회원가입
    signInWithEmailAndPassword      // [추가] 이메일 로그인
} from 'firebase/auth'
import { doc, setDoc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore'

export const useMovieStore = defineStore('movie', () => {
    // --- State ---
    const user = ref<any>(null)
    const wishlist = ref<any[]>([])
    const searchHistory = ref<string[]>([])
    const watchHistory = ref<any[]>([])

    // UI 상태
    const language = ref('ko-KR')
    const theme = ref('dark')
    const viewMode = ref<'table' | 'infinite'>('table')
    const lastPath = ref('/')
    const includeAdult = ref(false)
    const genreCache = ref<any[]>([])

    // UI 비주얼 설정
    const gridSize = ref<'normal' | 'large'>('normal')
    const fontSize = ref<'normal' | 'large'>('normal')
    const reducedMotion = ref(false)
    const hideHorror = ref(false)
    const showYear = ref(false)
    const enableHover = ref(true)
    const wishlistSort = ref<'date' | 'alpha'>('date')
    const autoplay = ref(true)
    const lowDataMode = ref(false)
    const apiKey = ref('')

    // --- Actions ---

    const applyVisualSettings = () => {
        const body = document.body.classList
        theme.value === 'light' ? (body.add('light-mode'), body.remove('dark-mode')) : (body.add('dark-mode'), body.remove('light-mode'))
        fontSize.value === 'large' ? body.add('font-large') : body.remove('font-large')
        reducedMotion.value ? body.add('reduced-motion') : body.remove('reduced-motion')
        gridSize.value === 'large' ? body.add('grid-large') : body.remove('grid-large')
        !enableHover.value ? body.add('no-hover') : body.remove('no-hover')
    }

    const initializeStore = () => {
        theme.value = localStorage.getItem('app-theme') || 'dark'
        language.value = localStorage.getItem('app-lang') || 'ko-KR'
        applyVisualSettings()

        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                console.log("로그인 성공:", firebaseUser.email)
                user.value = firebaseUser
                syncUserData(firebaseUser.uid)
            } else {
                user.value = null
                wishlist.value = []
            }
        })
    }

    const syncUserData = (uid: string) => {
        const userDocRef = doc(db, 'users', uid)
        onSnapshot(userDocRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data()
                wishlist.value = data.wishlist || []
                searchHistory.value = data.searchHistory || []
            } else {
                setDoc(userDocRef, { wishlist: [], searchHistory: [], createdAt: new Date() })
            }
        })
    }

    // [1] 구글 로그인
    const loginWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
    }

    // [2] 이메일 회원가입 (신규 기능)
    const registerWithEmail = async (email: string, pw: string) => {
        await createUserWithEmailAndPassword(auth, email, pw)
    }

    // [3] 이메일 로그인 (신규 기능)
    const loginWithEmail = async (email: string, pw: string) => {
        await signInWithEmailAndPassword(auth, email, pw)
    }

    const logout = async () => {
        await signOut(auth)
        user.value = null
        localStorage.removeItem('last-path')
        window.location.reload()
    }

    const toggleLike = async (movie: any) => {
        if (!user.value) return alert("로그인이 필요합니다.")
        const userDocRef = doc(db, 'users', user.value.uid)
        const isExist = wishlist.value.some(m => m.id === movie.id)
        try {
            if (isExist) await updateDoc(userDocRef, { wishlist: arrayRemove(movie) })
            else await updateDoc(userDocRef, { wishlist: arrayUnion(movie) })
        } catch (e) {
            console.error(e)
            alert("저장 실패")
        }
    }

    const isLiked = (id: number) => wishlist.value.some((m) => m.id === id)

    // 기타 설정 함수들은 그대로 유지 (생략 없이 사용하세요)
    const setLanguage = (l: string) => { language.value = l; localStorage.setItem('app-lang', l); window.location.reload() }
    const toggleTheme = () => { theme.value = theme.value === 'dark' ? 'light' : 'dark'; localStorage.setItem('app-theme', theme.value); applyVisualSettings() }
    const saveLastPath = (p: string) => { if (p !== '/signin') { lastPath.value = p; localStorage.setItem('last-path', p) } }
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
    const fetchGenres = async () => {
        if (genreCache.value.length > 0) return genreCache.value
        try { const res = await tmdb.get('/genre/movie/list'); genreCache.value = res.data.genres; return genreCache.value } catch { return [] }
    }
    const addSearchHistory = (k: string) => { if (!k.trim()) return; searchHistory.value = searchHistory.value.filter(x => x !== k); searchHistory.value.unshift(k); if (searchHistory.value.length > 10) searchHistory.value.pop(); }
    const removeSearchHistory = (k: string) => { searchHistory.value = searchHistory.value.filter(x => x !== k); }
    const addToHistory = (m: any) => { const idx = watchHistory.value.findIndex(x => x.id === m.id); if (idx !== -1) watchHistory.value.splice(idx, 1); watchHistory.value.unshift(m); if (watchHistory.value.length > 20) watchHistory.value.pop(); }
    const setViewMode = (m: 'table' | 'infinite') => { viewMode.value = m; localStorage.setItem('view-mode', m) }

    return {
        user, wishlist, searchHistory, watchHistory, apiKey,
        theme, language, viewMode, lastPath,
        wishlistSort, includeAdult, autoplay, lowDataMode,
        gridSize, fontSize, reducedMotion, hideHorror, showYear, enableHover,
        initializeStore, loginWithGoogle, registerWithEmail, loginWithEmail, logout, toggleLike, isLiked,
        setLanguage, toggleTheme, saveLastPath,
        toggleAdult, toggleAutoplay, toggleLowData, toggleGridSize, toggleFontSize,
        toggleMotion, toggleHorror, toggleShowYear, toggleHover, setWishlistSort,
        fetchGenres, addSearchHistory, removeSearchHistory, addToHistory, setViewMode
    }
})