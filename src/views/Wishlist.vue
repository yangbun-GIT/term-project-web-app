<template>
  <div class="page-container">
    <Navbar />

    <div class="content">
      <h2>내가 찜한 콘텐츠</h2>
      <div v-if="wishlist.length === 0" class="empty-state">
        <i class="fas fa-heart-broken empty-icon"></i>
        <p class="empty-msg">아직 찜한 콘텐츠가 없습니다.</p>
        <p class="empty-sub">마음에 드는 영화를 찾아 '좋아요'를 눌러보세요!</p>
        <button class="go-search-btn" @click="$router.push('/popular')">
          콘텐츠 찾아보기
        </button>
      </div>
      <div v-else class="grid">
        <MovieCard v-for="movie in sortedMovies" :key="movie.id" :movie="movie" @click="openModal(movie)" />
      </div>

      <h2 class="history-title">최근 본 콘텐츠 (History)</h2>
      <div v-if="watchHistory.length === 0" class="empty-mini">
        <p class="sub-text">최근 본 영화가 없습니다.</p>
      </div>
      <div v-else class="grid">
        <MovieCard v-for="movie in watchHistory" :key="`history-${movie.id}`" :movie="movie" @click="openModal(movie)" />
      </div>
    </div>

    <transition name="fade">
      <button v-show="showTopBtn" class="top-btn" @click="scrollToTop"><i class="fas fa-arrow-up"></i></button>
    </transition>
    <MovieModal v-if="showModal" :movie="selectedMovie" @close="showModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import { storeToRefs } from 'pinia'
import Navbar from '../components/Navbar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieModal from '../components/MovieModal.vue'
import { useRouter } from 'vue-router' // 라우터 추가

const store = useMovieStore()
const { wishlist, wishlistSort, watchHistory } = storeToRefs(store)
const router = useRouter() // 라우터 사용

const showModal = ref(false)
const selectedMovie = ref<any>(null)
const showTopBtn = ref(false)

const openModal = (movie: any) => { selectedMovie.value = movie; showModal.value = true }
const handleScroll = () => { showTopBtn.value = window.scrollY > 500 }
const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

const sortedMovies = computed(() => {
  const list = [...wishlist.value]
  if (wishlistSort.value === 'alpha') {
    return list.sort((a, b) => a.title.localeCompare(b.title))
  } else {
    return list.reverse()
  }
})

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.page-container { min-height: 100vh; position: relative; }
.content { padding: 100px 4% 40px; }
h2 { margin-bottom: 20px; font-weight: bold; font-size: 1.5rem; }

.empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 0; text-align: center; color: #666; }
.empty-icon { font-size: 4rem; margin-bottom: 20px; opacity: 0.5; }
.empty-msg { font-size: 1.2rem; font-weight: bold; margin-bottom: 10px; }
.empty-sub { font-size: 0.9rem; margin-bottom: 30px; }
.go-search-btn {
  padding: 10px 20px;
  border: 1px solid #666;
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}
.go-search-btn:hover { background: #666; color: white; border-color: transparent; }

/* 라이트 모드 가독성 */
:global(body.light-mode) h2 { color: #333 !important; }
:global(body.light-mode) .empty-msg { color: #333; }
:global(body.light-mode) .empty-sub { color: #666; }
:global(body.light-mode) .go-search-btn { color: #333; border-color: #333; }
:global(body.light-mode) .go-search-btn:hover { color: #fff; }
:global(body.light-mode) .history-title { border-top-color: #ddd; }

.history-title { margin-top: 60px; border-top: 1px solid #333; padding-top: 40px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
.empty-mini { text-align: center; margin: 30px 0; color: #666; }

.top-btn { position: fixed; bottom: 30px; right: 30px; background: #e50914; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; z-index: 100; box-shadow: 0 4px 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; transition: transform 0.3s, background 0.3s; }
.top-btn:hover { background: #f40612; transform: translateY(-5px); }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@media (max-width: 768px) { .grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); } }
</style>