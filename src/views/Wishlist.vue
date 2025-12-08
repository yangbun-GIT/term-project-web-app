<template>
  <div class="page-container">
    <Navbar />

    <div class="content">
      <h2>내가 찜한 콘텐츠</h2>
      <div v-if="movies.length === 0" class="empty">
        <p>아직 찜한 콘텐츠가 없습니다.</p>
        <p class="sub-text">마음에 드는 영화를 찜해보세요!</p>
      </div>
      <div v-else class="grid">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" @click="openModal(movie)" @toggle-like="handleToggleLike" />
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
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieModal from '../components/MovieModal.vue'

const movies = ref<any[]>([])
const showModal = ref(false)
const selectedMovie = ref<any>(null)
const showTopBtn = ref(false)

const openModal = (movie: any) => { selectedMovie.value = movie; showModal.value = true }
const handleToggleLike = (movieId: number, isLiked: boolean) => { if (!isLiked) movies.value = movies.value.filter(m => m.id !== movieId) }

const handleScroll = () => { showTopBtn.value = window.scrollY > 500 }
const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

onMounted(() => {
  const savedData = localStorage.getItem('my-wishlist')
  if (savedData) movies.value = JSON.parse(savedData)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.page-container { min-height: 100vh; background-color: #141414; position: relative; }
.content { padding: 100px 4% 40px; color: white; }
h2 { margin-bottom: 20px; font-weight: bold; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
.empty { text-align: center; margin-top: 150px; color: #666; }
.sub-text { font-size: 0.9rem; margin-top: 10px; }
.top-btn { position: fixed; bottom: 30px; right: 30px; background: #e50914; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; z-index: 100; box-shadow: 0 4px 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; transition: transform 0.3s, background 0.3s; }
.top-btn:hover { background: #f40612; transform: translateY(-5px); }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>