<template>
  <div class="popular-container">
    <Navbar />

    <div class="content">
      <div class="header-section">
        <h2>인기 콘텐츠</h2>
        <div class="mode-toggle">
          <button
              :class="{ active: viewMode === 'table' }"
              @click="changeMode('table')"
              title="페이지 보기"
          >
            <i class="fas fa-th-large"></i>
          </button>
          <button
              :class="{ active: viewMode === 'infinite' }"
              @click="changeMode('infinite')"
              title="무한 스크롤"
          >
            <i class="fas fa-infinity"></i>
          </button>
        </div>
      </div>

      <div class="grid-container">
        <MovieCard
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
            @click="openModal(movie)"
        />
      </div>

      <div v-if="viewMode === 'table'" class="pagination">
        <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">이전</button>
        <span class="page-num">{{ currentPage }} 페이지</span>
        <button @click="changePage(currentPage + 1)">다음</button>
      </div>

      <div v-if="viewMode === 'infinite'" ref="observerElement" class="observer-sentinel">
        <p v-if="isLoading">로딩 중...</p>
      </div>
    </div>

    <MovieModal v-if="showModal" :movie="selectedMovie" @close="showModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import tmdb from '../api/tmdb'
import Navbar from '../components/Navbar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieModal from '../components/MovieModal.vue' // [추가]

const movies = ref<any[]>([])
const currentPage = ref(1)
const viewMode = ref<'table' | 'infinite'>('table')
const isLoading = ref(false)
const observerElement = ref<HTMLElement | null>(null)

// 모달 상태
const showModal = ref(false)
const selectedMovie = ref<any>(null)
const openModal = (movie: any) => {
  selectedMovie.value = movie
  showModal.value = true
}

// 영화 데이터 가져오기 (단순화: 페이지 병합 로직 제거)
const fetchMovies = async (page: number, isAppend: boolean) => {
  if (isLoading.value) return
  isLoading.value = true

  try {
    const res = await tmdb.get('/movie/popular', { params: { page: page } })

    if (isAppend) {
      // 무한 스크롤일 때만 데이터 이어붙이기
      const newMovies = res.data.results.filter((newM: any) =>
          !movies.value.some((oldM: any) => oldM.id === newM.id)
      )
      movies.value = [...movies.value, ...newMovies]
    } else {
      // 페이지 모드일 때는 데이터 덮어쓰기 (20개 고정)
      movies.value = res.data.results
    }
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

const changeMode = (mode: 'table' | 'infinite') => {
  viewMode.value = mode
  currentPage.value = 1
  window.scrollTo(0, 0)
  fetchMovies(1, false)
}

const changePage = (page: number) => {
  if (page < 1) return
  currentPage.value = page
  window.scrollTo(0, 0)
  fetchMovies(page, false)
}

// 무한 스크롤 감지
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

watch(() => [viewMode.value, observerElement.value], () => {
  if (viewMode.value === 'infinite' && observerElement.value) {
    initObserver()
    // 무한 스크롤 모드 초기 진입 시 화면이 비어있으면 2페이지 로드 시도
    // (페이지 모드 로직과는 분리됨)
    if (movies.value.length > 0 && document.documentElement.scrollHeight <= window.innerHeight) {
      currentPage.value++
      fetchMovies(currentPage.value, true)
    }
  } else {
    if (observer) observer.disconnect()
  }
})

onMounted(() => fetchMovies(1, false))
onUnmounted(() => { if (observer) observer.disconnect() })
</script>

<style scoped>
.popular-container { min-height: 100vh; background-color: #141414; color: white; }
.content { padding: 100px 4% 40px; }
.header-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }

.mode-toggle button {
  background: transparent; color: #888; border: 1px solid #555;
  padding: 8px 12px; font-size: 1.2rem; cursor: pointer; margin-left: 10px; border-radius: 4px; transition: 0.3s;
}
.mode-toggle button:hover { color: white; border-color: white; }
.mode-toggle button.active { background: #e50914; color: white; border-color: #e50914; }

.grid-container {
  display: grid;
  /* [수정] 최소 너비를 200px 이상으로 잡아서 대형 화면에서도 카드가 너무 작아지지 않게 함 */
  /* 이렇게 하면 화면이 넓어도 20개가 적당히 꽉 차 보입니다 */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.pagination { display: flex; justify-content: center; align-items: center; margin-top: 40px; gap: 20px; }
.pagination button { background: #333; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px; }
.pagination button:disabled { opacity: 0.5; cursor: not-allowed; }

.observer-sentinel { height: 50px; text-align: center; margin-top: 20px; color: #888; }

@media (max-width: 768px) {
  .grid-container { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
}
</style>