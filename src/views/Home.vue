<template>
  <div class="home">
    <Navbar />

    <div v-if="featuredMovie" class="hero" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})` }">
      <button class="hero-arrow left" @click="prevBanner"><i class="fas fa-chevron-left"></i></button>

      <div class="hero-content">
        <h1 class="hero-title">{{ featuredMovie.title }}</h1>
        <p class="hero-desc">
          {{ truncate(featuredMovie.overview, 150) }}
          <span v-if="featuredMovie.overview.length > 150" class="more-btn" @click="openModal(featuredMovie)">더보기</span>
        </p>
        <div class="hero-buttons">
          <button class="btn play"><i class="fas fa-play"></i> 재생</button>
          <button class="btn info" @click="openModal(featuredMovie)"><i class="fas fa-info-circle"></i> 상세 정보</button>
        </div>
      </div>

      <button class="hero-arrow right" @click="nextBanner"><i class="fas fa-chevron-right"></i></button>

      <div class="hero-gradient"></div>
    </div>

    <div class="rows-container">
      <MovieRow title="인기 콘텐츠" :movies="popularMovies" @card-click="openModal" />
      <MovieRow title="최신 콘텐츠" :movies="nowPlayingMovies" @card-click="openModal" />
      <MovieRow title="평단의 찬사 (높은 평점)" :movies="topRatedMovies" @card-click="openModal" />
      <MovieRow title="액션" :movies="actionMovies" @card-click="openModal" />
      <MovieRow title="코미디" :movies="comedyMovies" @card-click="openModal" />
      <MovieRow title="공포" :movies="horrorMovies" @card-click="openModal" />
      <MovieRow title="SF / 판타지" :movies="scifiMovies" @card-click="openModal" />
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
import tmdb from '../api/tmdb'
import Navbar from '../components/Navbar.vue'
import MovieRow from '../components/MovieRow.vue'
import MovieModal from '../components/MovieModal.vue'

const featuredMovie = ref<any>(null)
const bannerIndex = ref(0)
let bannerInterval: any = null
const showModal = ref(false)
const selectedMovie = ref<any>(null)
const showTopBtn = ref(false)

const popularMovies = ref([])
const nowPlayingMovies = ref([])
const topRatedMovies = ref([])
const actionMovies = ref([])
const comedyMovies = ref([])
const horrorMovies = ref([])
const scifiMovies = ref([])

const truncate = (str: string, n: number) => str?.length > n ? str.substr(0, n - 1) + "..." : str;
const openModal = (movie: any) => { selectedMovie.value = movie; showModal.value = true }

const handleScroll = () => { showTopBtn.value = window.scrollY > 500 }
const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

const updateBanner = () => {
  if (popularMovies.value.length > 0) {
    featuredMovie.value = popularMovies.value[bannerIndex.value]
  }
}
const nextBanner = () => { bannerIndex.value = (bannerIndex.value + 1) % popularMovies.value.length; updateBanner(); resetTimer(); }
const prevBanner = () => { bannerIndex.value = (bannerIndex.value - 1 + popularMovies.value.length) % popularMovies.value.length; updateBanner(); resetTimer(); }
const resetTimer = () => { clearInterval(bannerInterval); bannerInterval = setInterval(nextBanner, 60000) }

const fetchAllMovies = async () => {
  try {
    const [pop, now, top, act, com, hor, sci] = await Promise.all([
      tmdb.get('/movie/popular'), tmdb.get('/movie/now_playing'), tmdb.get('/movie/top_rated'),
      tmdb.get('/discover/movie', { params: { with_genres: 28 } }),
      tmdb.get('/discover/movie', { params: { with_genres: 35 } }),
      tmdb.get('/discover/movie', { params: { with_genres: 27 } }),
      tmdb.get('/discover/movie', { params: { with_genres: 878 } })
    ])
    popularMovies.value = pop.data.results; nowPlayingMovies.value = now.data.results; topRatedMovies.value = top.data.results
    actionMovies.value = act.data.results; comedyMovies.value = com.data.results; horrorMovies.value = hor.data.results; scifiMovies.value = sci.data.results
    updateBanner(); resetTimer();
  } catch (error) { console.error(error) }
}

onMounted(() => { fetchAllMovies(); window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { clearInterval(bannerInterval); window.removeEventListener('scroll', handleScroll) })
</script>

<style scoped>
.home { min-height: 100vh; position: relative; }
.hero { position: relative; height: 85vh; background-size: cover; background-position: center top; display: flex; align-items: center; color: white; transition: background-image 0.5s ease-in-out; }
.hero-content { margin-left: 80px; max-width: 600px; z-index: 10; margin-top: 50px; flex: 1; padding-right: 40px; }
.hero-title { font-size: 4rem; font-weight: 800; text-shadow: 2px 2px 4px rgba(0,0,0,0.6); margin-bottom: 20px; }
.hero-desc { font-size: 1.3rem; line-height: 1.5; margin-bottom: 30px; text-shadow: 1px 1px 2px rgba(0,0,0,0.8); }
.hero-buttons { display: flex; gap: 15px; }
.btn { border: none; padding: 12px 30px; border-radius: 4px; font-size: 1.2rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 10px; }
.btn.play { background: white; color: black; }
.btn.play:hover { background: rgba(255,255,255,0.75); }
.btn.info { background: rgba(109, 109, 110, 0.7); color: white; }
.btn.info:hover { background: rgba(109, 109, 110, 0.4); }
.hero-gradient { position: absolute; bottom: 0; left: 0; width: 100%; height: 300px; background: linear-gradient(to top, #141414 0%, rgba(20, 20, 20, 0.8) 40%, transparent 100%); }

/* [수정] 박스 제거 및 아이콘 스타일 */
.hero-arrow {
  background: none !important; /* 배경 강제 제거 */
  border: none; color: white; font-size: 3.5rem;
  padding: 0; cursor: pointer; z-index: 20; height: 100%;
  position: absolute; top: 0; opacity: 0;
  transition: all 0.3s ease; display: flex; align-items: center; justify-content: center;
  width: 60px; text-shadow: 0 0 15px rgba(0,0,0,0.9); /* 그림자로 아이콘 부각 */
}
.hero-arrow.left { left: 10px; }
.hero-arrow.right { right: 10px; }
.hero:hover .hero-arrow { opacity: 0.7; }
.hero-arrow:hover { opacity: 1 !important; transform: scale(1.2); }

.rows-container { position: relative; z-index: 20; margin-top: -100px; background: transparent; padding-bottom: 50px; }
.more-btn { color: #888; font-weight: bold; cursor: pointer; margin-left: 5px; font-size: 1rem; }
.more-btn:hover { text-decoration: underline; color: white; }
.top-btn { position: fixed; bottom: 30px; right: 30px; background: #e50914; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; z-index: 100; box-shadow: 0 4px 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; transition: transform 0.3s, background 0.3s; }
.top-btn:hover { background: #f40612; transform: translateY(-5px); }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>