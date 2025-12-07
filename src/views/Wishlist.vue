<template>
  <div class="page-container">
    <Navbar />

    <div class="content">
      <h2>내가 찜한 콘텐츠</h2>

      <div v-if="movies.length === 0" class="empty">
        <p>아직 찜한 콘텐츠가 없습니다.</p>
      </div>

      <div v-else class="grid">
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
import Navbar from '../components/Navbar.vue' // 헤더 불러오기
import MovieCard from '../components/MovieCard.vue'

const movies = ref([])

onMounted(() => {
  // API 호출 없이 로컬 스토리지 데이터만 가져옵니다. [cite: 395]
  const savedData = localStorage.getItem('my-wishlist')
  if (savedData) {
    movies.value = JSON.parse(savedData)
  }
})
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background-color: #141414;
}
.content {
  padding: 20px 40px;
  color: white;
}
h2 { margin-bottom: 20px; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}
.empty {
  text-align: center;
  margin-top: 100px;
  color: #666;
  font-size: 1.2rem;
}
</style>