<template>
  <div v-if="!isHidden" class="movie-card" :class="{ 'liked-border': isLiked }" @click="$emit('click', movie)">
    <img v-if="movie.poster_path" :src="posterUrl" :alt="movie.title" class="poster" />
    <div v-else class="no-poster"><span>이미지 준비중</span></div>

    <div class="overlay">
      <p class="title">{{ movie.title }}</p>
      <p v-if="showYear" class="release-year">{{ getYear(movie.release_date) }}</p>
    </div>

    <div class="heart-btn" @click.stop="handleToggleLike">
      <i :class="isLiked ? 'fas fa-heart' : 'far fa-heart'"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import { storeToRefs } from 'pinia'

const props = defineProps<{ movie: any }>()
defineEmits(['click'])

const store = useMovieStore()
const { showYear, hideHorror, lowDataMode, includeAdult } = storeToRefs(store)

const isLiked = computed(() => store.isLiked(props.movie.id))

const posterUrl = computed(() => {
  const size = lowDataMode.value ? 'w200' : 'w500'
  return `https://image.tmdb.org/t/p/${size}${props.movie.poster_path}`
})

// [기능] 필터링 로직 (공포 차단 + 성인 차단)
const isHidden = computed(() => {
  // 1. 공포 영화 차단 (ID 27)
  if (hideHorror.value && props.movie.genre_ids?.includes(27)) return true

  // 2. 성인 영화 차단 (설정이 꺼져있는데 영화가 성인물인 경우)
  if (!includeAdult.value && props.movie.adult === true) return true

  return false
})

const getYear = (date: string) => date ? date.split('-')[0] : ''
const handleToggleLike = () => store.toggleLike(props.movie)
</script>

<style scoped>
.movie-card {
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  aspect-ratio: 2 / 3;
  width: 100%;
  background-color: #222;

  /* [성능 최적화] 브라우저 렌더링 힌트 제공 (GPU 가속 유도) */
  will-change: transform, box-shadow;

  /* [애니메이션] 부드러운 확대/축소 효과 (cubic-bezier 적용) */
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease;
}

/* 호버 시 확대 및 그림자 (style.css의 no-hover 설정이 없을 때만 동작) */
.movie-card:hover {
  transform: scale(1.05);
  z-index: 10;
  box-shadow: 0 10px 20px rgba(0,0,0,0.7);
}

.liked-border { border: 2px solid #e50914; }

.poster { width: 100%; height: 100%; object-fit: cover; display: block; }

.no-poster { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #333; color: #888; font-size: 0.9rem; }

.overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, black, transparent);
  padding: 20px 10px 10px;
  opacity: 0;
  transition: opacity 0.3s ease; /* 오버레이 페이드 효과 */
}

.movie-card:hover .overlay { opacity: 1; }

.title { font-size: 0.9rem; text-align: center; color: white; margin: 0; }
.release-year { font-size: 0.8rem; color: #ccc; text-align: center; margin-top: 4px; }

.heart-btn {
  position: absolute; top: 10px; right: 10px; color: white; font-size: 1.5rem;
  cursor: pointer; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.8));
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* 통통 튀는 효과 */
  z-index: 15;
}
.heart-btn:hover { transform: scale(1.2); }
.heart-btn i.fas { color: #e50914; }
</style>