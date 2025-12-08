<template>
  <div class="popular-container">
    <Navbar />

    <div class="content">
      <div class="header-section">
        <h2>인기 콘텐츠</h2>
        <div class="mode-toggle">
          <button :class="{ active: viewMode === 'table' }" @click="handleChangeMode('table')" title="페이지 보기">
            <i class="fas fa-th-large"></i>
          </button>
          <button :class="{ active: viewMode === 'infinite' }" @click="handleChangeMode('infinite')" title="무한 스크롤">
            <i class="fas fa-infinity"></i>
          </button>
        </div>
      </div>

      <div class="grid-container">
        <template v-if="isLoading && movies.length === 0">
          <SkeletonCard v-for="n in 10" :key="`skeleton-${n}`" />
        </template>

        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" @click="openModal(movie)" />
      </div>

      <div v-if="viewMode === 'table' && !isLoading" class="pagination">
        <button :disabled="currentPage === 1" @click="changePage(1)"><i class="fas fa-angle-double-left"></i></button>
        <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">이전</button>
        <span class="page-num">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="changePage(currentPage + 1)">다음</button>
        <button @click="changePage(totalPages)"><i class="fas fa-angle-double-right"></i></button>
      </div>

      <div v-if="viewMode === 'infinite'" ref="observerElement" class="observer-sentinel">
        <div v-if="isLoading && movies.length > 0" class="loading-more">
          <i class="fas fa-spinner fa-spin"></i> 콘텐츠를 불러오는 중...
        </div>
      </div>
    </div>

    <transition name="fade">
      <button v-show="showTopBtn" class="top-btn" @click="scrollToTop"><i class="fas fa-arrow-up"></i></button>
    </transition>
    <MovieModal v-if="showModal" :movie="selectedMovie" @close="showModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import tmdb from '../api/tmdb'
import { useMovieStore } from '../stores/movieStore' // Store import
import { storeToRefs } from 'pinia'
import Navbar from '../components/Navbar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieModal from '../components/MovieModal.vue'
import SkeletonCard from '../components/SkeletonCard.vue'

const store = useMovieStore()
// [수정] Store의 viewMode를 반응형으로 가져옴
const { viewMode } = storeToRefs(store)

const movies = ref<any[]>([])
const currentPage = ref(1)
const totalPages = ref(1)
// const viewMode = ref... (제거됨) -> Store 사용
const isLoading = ref(false)
const observerElement = ref<HTMLElement | null>(null)
const showTopBtn = ref(false)
const showModal = ref(false)
const selectedMovie = ref<any>(null)

const openModal = (movie: any) => { selectedMovie.value = movie; showModal.value = true }
const handleScroll = () => { showTopBtn.value = window.scrollY > 500 }
const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

const fetchMovies = async (page: number, isAppend: boolean) => {
  if (isLoading.value) return
  isLoading.value = true
  try {
    const res = await tmdb.get('/movie/popular', { params: { page: page } })
    totalPages.value = res.data.total_pages > 500 ? 500 : res.data.total_pages
    if (isAppend) {
      const newMovies = res.data.results.filter((newM: any) => !movies.value.some((oldM: any) => oldM.id === newM.id))
      movies.value = [...movies.value, ...newMovies]
    } else {
      movies.value = res.data.results
    }
  } catch (error) { console.error(error) } finally { isLoading.value = false }
}

// [수정] 모드 변경 시 Store 함수 호출
const handleChangeMode = (mode: 'table' | 'infinite') => {
  store.setViewMode(mode) // Store에 저장
  currentPage.value = 1
  movies.value = []
  window.scrollTo(0, 0)
  fetchMovies(1, false)
}

const changePage = (page: number) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  movies.value = []
  window.scrollTo(0, 0)
  fetchMovies(page, false)
}

let observer: IntersectionObserver | null = null
const initObserver = () => {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isLoading.value) {
      currentPage.value++
      fetchMovies(currentPage.value, true)
    }
  })
  if (observerElement.value) observer.observe(observerElement.value)
}

// viewMode는 이제 Store 값이므로 그대로 감지 가능
watch(() => [viewMode.value, observerElement.value], () => {
  if (viewMode.value === 'infinite' && observerElement.value) { initObserver() }
  else { if (observer) observer.disconnect() }
})

onMounted(() => {
  fetchMovies(1, false)
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 기존 스타일 유지 */
.popular-container { min-height: 100vh; color: white; position: relative; }
.content { padding: 100px 4% 40px; }
.header-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.mode-toggle button { background: transparent; color: #888; border: 1px solid #555; padding: 8px 12px; font-size: 1.2rem; cursor: pointer; margin-left: 10px; border-radius: 4px; transition: 0.3s; }
.mode-toggle button:hover { color: white; border-color: white; }
.mode-toggle button.active { background: #e50914; color: white; border-color: #e50914; }

.grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }

.pagination { display: flex; justify-content: center; align-items: center; margin-top: 40px; gap: 15px; }
.pagination button { background: #333; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 4px; font-size: 1rem; transition: 0.2s; }
.pagination button:hover:not(:disabled) { background: #555; }
.pagination button:disabled { opacity: 0.5; cursor: not-allowed; }
.page-num { font-weight: bold; margin: 0 10px; color: white; }
:global(body.light-mode) .page-num { color: #333 !important; }

.observer-sentinel { height: 80px; text-align: center; margin-top: 20px; color: #888; display: flex; align-items: center; justify-content: center; }
.loading-more { font-size: 1rem; color: #b3b3b3; }
.top-btn { position: fixed; bottom: 30px; right: 30px; background: #e50914; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; z-index: 100; box-shadow: 0 4px 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; transition: transform 0.3s, background 0.3s; }
.top-btn:hover { background: #f40612; transform: translateY(-5px); }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@media (max-width: 768px) { .grid-container { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); } }
</style>