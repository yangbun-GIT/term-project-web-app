<template>
  <div class="popular-container">
    <Navbar />

    <div class="content">
      <div class="header-section">
        <h2>대세 콘텐츠</h2>
        <div class="mode-toggle">
          <button
              :class="{ active: viewMode === 'table' }"
              @click="changeMode('table')"
          >
            페이지 보기
          </button>
          <button
              :class="{ active: viewMode === 'infinite' }"
              @click="changeMode('infinite')"
          >
            무한 스크롤
          </button>
        </div>
      </div>

      <div class="grid-container">
        <MovieCard
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import tmdb from '../api/tmdb'
import Navbar from '../components/Navbar.vue'
import MovieCard from '../components/MovieCard.vue'

// 상태 변수
const movies = ref<any[]>([])
const currentPage = ref(1)
const viewMode = ref<'table' | 'infinite'>('table') // 기본은 페이지 보기
const isLoading = ref(false)
const observerElement = ref<HTMLElement | null>(null) // 무한 스크롤 감지용 DOM

// 영화 데이터 가져오기 함수
const fetchMovies = async (page: number, isAppend: boolean) => {
  if (isLoading.value) return
  isLoading.value = true

  try {
    const res = await tmdb.get('/movie/popular', {
      params: { page: page }
    })

    if (isAppend) {
      // 무한 스크롤: 기존 목록 뒤에 새 데이터를 붙임 (이어보기)
      movies.value = [...movies.value, ...res.data.results]
    } else {
      // 페이지네이션: 기존 목록을 싹 지우고 새 데이터로 교체
      movies.value = res.data.results
    }
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

// 모드 변경 시 초기화
const changeMode = (mode: 'table' | 'infinite') => {
  viewMode.value = mode
  currentPage.value = 1
  window.scrollTo(0, 0)
  fetchMovies(1, false) // 1페이지부터 다시 로드
}

// [모드 1] 페이지 변경 버튼 클릭
const changePage = (page: number) => {
  if (page < 1) return
  currentPage.value = page
  window.scrollTo(0, 0) // 맨 위로 올리기
  fetchMovies(page, false)
}

// [모드 2] Intersection Observer (무한 스크롤 핵심 로직)
let observer: IntersectionObserver | null = null

const initObserver = () => {
  observer = new IntersectionObserver((entries) => {
    // 감지 센서(observerElement)가 화면에 보이고, 로딩 중이 아닐 때
    if (entries[0].isIntersecting && !isLoading.value) {
      currentPage.value++ // 페이지 번호 증가
      fetchMovies(currentPage.value, true) // 데이터 이어붙이기
    }
  })

  if (observerElement.value) {
    observer.observe(observerElement.value)
  }
}

// 화면이 켜지거나 모드가 바뀔 때 감지기 재설정
watch(() => [viewMode.value, observerElement.value], () => {
  if (viewMode.value === 'infinite' && observerElement.value) {
    initObserver()
  } else {
    if (observer) observer.disconnect()
  }
})

onMounted(() => {
  fetchMovies(1, false) // 처음엔 1페이지 로드
})

onUnmounted(() => {
  if (observer) observer.disconnect() // 나가면 감지기 끄기
})
</script>

<style scoped>
.popular-container { min-height: 100vh; background-color: #141414; color: white; }
.content { padding: 20px 40px; }
.header-section {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
}

/* 모드 전환 버튼 스타일 */
.mode-toggle button {
  background: #333;
  color: #888;
  border: 1px solid #555;
  padding: 8px 16px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 4px;
}
.mode-toggle button.active {
  background: #e50914;
  color: white;
  border-color: #e50914;
  font-weight: bold;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

/* 페이지네이션 버튼 스타일 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
}
.pagination button {
  background: #333; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px;
}
.pagination button:disabled { opacity: 0.5; cursor: not-allowed; }

/* 무한 스크롤 감지 영역 (투명) */
.observer-sentinel {
  height: 50px;
  text-align: center;
  margin-top: 20px;
  color: #888;
}
</style>