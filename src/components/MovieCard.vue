<template>
  <div
      class="movie-card"
      @click="$emit('click')"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <div class="poster-wrapper">
      <img
          :src="posterUrl"
          :alt="movie.title || movie.name"
          class="movie-poster"
          loading="lazy"
      >

      <button class="like-btn" @click.stop="toggleLike">
        <i :class="isLiked ? 'fas fa-heart liked' : 'far fa-heart'"></i>
      </button>

      <div class="poster-overlay" :class="{ 'show-overlay': isHovered }">
        <div class="movie-info">
          <h3 class="movie-title">{{ movie.title || movie.name }}</h3>
          <div class="movie-meta">
            <span class="rating"><i class="fas fa-star"></i> {{ movie.vote_average?.toFixed(1) }}</span>
          </div>
          <div class="genres">
            <span v-for="(genre, index) in movieGenres.slice(0, 2)" :key="genre.id">
              {{ genre.name }}{{ index < movieGenres.slice(0, 2).length - 1 ? ' · ' : '' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import tmdb from '../api/tmdb'

const props = defineProps<{ movie: any }>()
defineEmits(['click'])

const store = useMovieStore()
const isHovered = ref(false)
const allGenres = ref<any[]>([])

const posterUrl = computed(() => {
  return props.movie.poster_path
      ? `https://image.tmdb.org/t/p/w342${props.movie.poster_path}`
      : 'https://via.placeholder.com/342x513?text=No+Poster'
})

// 찜 상태 확인
const isLiked = computed(() => store.wishlist.some(m => m.id === props.movie.id))

const toggleLike = () => {
  // [버그 수정] store에 정의된 실제 함수 이름은 'toggleLike' 입니다.
  // 기존 'toggleWishlist'는 존재하지 않아 동작하지 않았습니다.
  store.toggleLike(props.movie)
}

const movieGenres = computed(() => {
  if (!props.movie.genre_ids || allGenres.value.length === 0) return []
  return allGenres.value.filter(g => props.movie.genre_ids.includes(g.id))
})

onMounted(async () => {
  try {
    const res = await tmdb.get('/genre/movie/list')
    allGenres.value = res.data.genres
  } catch (e) { console.error('Failed to fetch genres', e) }
})
</script>

<style scoped>
.movie-card {
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
  background-color: #2f2f2f;
  aspect-ratio: 2 / 3;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
}

.poster-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.movie-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* [수정] 찜 버튼 스타일: 최상위 레이어, 클릭 영역 확보 */
.like-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white; /* 기본(빈 하트) 색상 */
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  z-index: 100; /* 오버레이보다 무조건 위 */
  backdrop-filter: blur(2px);
}

.like-btn:active { transform: scale(0.9); }

/* 꽉 찬 하트(찜 완료) 색상 */
.like-btn i.liked {
  color: #e50914;
  animation: heartPop 0.3s ease;
}

@keyframes heartPop {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

.poster-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
  opacity: 0; transition: opacity 0.3s ease;
  display: flex; flex-direction: column; justify-content: flex-end; padding: 15px;
  z-index: 10;
  pointer-events: none; /* 오버레이가 클릭 방해하지 않도록 */
}

.movie-info { color: white; }
.movie-title { font-size: 1rem; font-weight: bold; margin: 0 0 5px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.movie-meta { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; margin-bottom: 5px; }
.rating { color: #46d369; font-weight: bold; }
.genres { font-size: 0.8rem; color: #ccc; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* PC: 호버 시 버튼 표시 */
@media (hover: hover) {
  .movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5), 0 6px 6px rgba(0,0,0,0.3);
    z-index: 10;
  }
  .show-overlay { opacity: 1; }

  .like-btn { opacity: 0; }
  .movie-card:hover .like-btn { opacity: 1; }
}

/* 모바일: 버튼 항상 표시 */
@media (max-width: 768px) {
  .movie-card { border-radius: 4px; }
  .poster-overlay { display: none; }
  .movie-card:hover { transform: none; box-shadow: none; }

  .like-btn {
    opacity: 1 !important;
    top: 6px;
    right: 6px;
    width: 34px;
    height: 34px;
    font-size: 1.1rem;
    background: rgba(0, 0, 0, 0.6);
    pointer-events: auto;
  }
}
</style>