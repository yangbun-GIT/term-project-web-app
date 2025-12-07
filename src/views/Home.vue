<template>
  <div class="home">
    <Navbar />

    <div class="content">
      <h2>지금 뜨는 콘텐츠</h2>

      <div v-if="isLoading" class="loading-msg">로딩 중...</div>

      <div v-else class="grid-container">
        <MovieCard
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 확장자(.ts)를 붙여서 명확하게 지정
import tmdb from "../api/tmdb.ts"
import Navbar from '../components/Navbar.vue' // [추가] 네비게이션 바 불러오기
import MovieCard from '../components/MovieCard.vue'

// 데이터 타입 정의 (TypeScript의 장점 활용)
interface Movie {
  id: number
  title: string
  poster_path: string
}

// 상태 변수
const movies = ref<Movie[]>([])
const isLoading = ref(true)

// [LifeCycle] 화면이 켜지자마자 실행
onMounted(async () => {
  try {
    // TMDB API 호출: 인기 영화 목록 가져오기
    const response = await tmdb.get('/movie/popular')
    movies.value = response.data.results
  } catch (error) {
    console.error('영화 불러오기 실패:', error)
    alert('영화 정보를 불러오는 데 실패했습니다. API 키를 확인해주세요.')
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.home {
  background-color: #141414; /* 전체 배경색 */
  min-height: 100vh;
}

.content {
  padding: 20px 40px; /* 좌우 여백 */
  color: white;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
}

.loading-msg {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
  color: #888;
}

/* CSS Grid: 반응형 레이아웃 */
.grid-container {
  display: grid;
  /* 화면 크기에 따라 자동으로 열 개수 조절 (최소 150px 너비 보장) */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}
</style>