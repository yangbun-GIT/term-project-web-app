<template>
  <div class="popular-container">
    <Navbar />

    <div class="content">
      <div class="header-section">
        <h2>인기 콘텐츠</h2>
        <div class="mode-toggle">
          <button :class="{ active: viewMode === 'table' }" @click="changeMode('table')" title="페이지 보기"><i class="fas fa-th-large"></i></button>
          <button :class="{ active: viewMode === 'infinite' }" @click="changeMode('infinite')" title="무한 스크롤"><i class="fas fa-infinity"></i></button>
        </div>
      </div>

      <div class="grid-container">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" @click="openModal(movie)" />
      </div>

      <div v-if="viewMode === 'table'" class="pagination">
        <button :disabled="currentPage === 1" @click="changePage(1)" title="첫 페이지"><i class="fas fa-angle-double-left"></i></button>
        <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">이전</button>
        <span class="page-num">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="changePage(currentPage + 1)">다음</button>
        <button @click="changePage(totalPages)" title="마지막 페이지"><i class="fas fa-angle-double-right"></i></button>
      </div>

      <div v-if="viewMode === 'infinite'" ref="observerElement" class="observer-sentinel">
        <p v-if="isLoading">로딩 중...</p>
      </div>
    </div>

    <transition name="fade">
      <button v-show="showTopBtn" class="top-btn" @click="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </button>
    </transition>

    <MovieModal v-if="showModal" :movie="selectedMovie" @close="showModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue'
import tmdb from '../api/tmdb'
import Navbar from '../components/Navbar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieModal from '../components/MovieModal.vue'

const movies = ref<any[]>([])
const currentPage = ref(1)
const totalPages = ref(1) // 전체 페이지 수 저장
const viewMode = ref<'table' | 'infinite'>('table')
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
    // TMDB는 보통 500페이지까지 제공하므로 제한
    totalPages.value = res.data.total_pages > 500 ? 500 : res.data.total_pages

    if (isAppend) {
      const newMovies = res.data.results.filter((newM: any) => !movies.value.some((oldM: any) => oldM.id === newM.id))
      movies.value = [...movies.value, ...newMovies]
    } else {
      movies.value = res.data.results
    }
  } catch (error) { console.error(error) } finally { isLoading.value = false }
}

const changeMode = (mode: 'table' | 'infinite') => {
  viewMode.value = mode; currentPage.value = 1; window.scrollTo(0, 0)
  fetchMovies(1, false)
}

const changePage = (page: number) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page; window.scrollTo(0, 0);
  fetchMovies(page, false)
}

let observer: IntersectionObserver | null = null
const initObserver = () => {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isLoading.value) { currentPage.value++; fetchMovies(currentPage.value, true) }
  })
  if (observerElement.value) observer.observe(observerElement.value)
}

watch(() => [viewMode.value, observerElement.value], () => {
  if (viewMode.value === 'infinite' && observerElement.value) { initObserver() } else { if (observer) observer.disconnect() }
})

onMounted(() => {
  fetchMovies(1, false);
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  if (observer) observer.disconnect();
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.popular-container { min-height: 100vh; background-color: #141414; color: white; position: relative; }
.content { padding: 100px 4% 40px; }
.header-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.mode-toggle button { background: transparent; color: #888; border: 1px solid #555; padding: 8px 12px; font-size: 1.2rem; cursor: pointer; margin-left: 10px; border-radius: 4px; transition: 0.3s; }
.mode-toggle button:hover { color: white; border-color: white; }
.mode-toggle button.active { background: #e50914; color: white; border-color: #e50914; }
.grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
.pagination { display: flex; justify-content: center; align-items: center; margin-top: 40px; gap: 15px; }
.pagination button { background: #333; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 4px; font-size: 1rem; }
.pagination button:disabled { opacity: 0.5; cursor: not-allowed; }
.page-num { font-weight: bold; margin: 0 10px; }
.observer-sentinel { height: 80px; text-align: center; margin-top: 20px; color: #888; display: flex; align-items: center; justify-content: center; }
.top-btn { position: fixed; bottom: 30px; right: 30px; background: #e50914; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; z-index: 100; box-shadow: 0 4px 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; transition: transform 0.3s, background 0.3s; }
.top-btn:hover { background: #f40612; transform: translateY(-5px); }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@media (max-width: 768px) { .grid-container { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); } }
</style>