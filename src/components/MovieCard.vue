<template>
  <div class="movie-card" @click="toggleLike">
    <img
        v-if="movie.poster_path"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
        class="poster"
    />
    <div v-else class="no-poster">이미지 준비중</div>

    <div class="overlay">
      <p class="title">{{ movie.title }}</p>
    </div>

    <div v-if="isLiked" class="heart-icon">
      <i class="fas fa-heart"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 부모에게서 받는 데이터 정의
const props = defineProps<{
  movie: {
    id: number
    title: string
    poster_path: string | null
  }
}>()

const isLiked = ref(false)

// [로직 1] 처음 로딩될 때 '이 영화가 찜 목록에 있나?' 확인
const checkLike = () => {
  // 로컬스토리지에서 목록 꺼내기 (없으면 빈 배열 [])
  const wishlist = JSON.parse(localStorage.getItem('my-wishlist') || '[]')
  // 내 ID가 목록에 있는지 검사
  isLiked.value = wishlist.some((item: any) => item.id === props.movie.id)
}

// [로직 2] 클릭하면 찜 추가/삭제 (Toggle)
const toggleLike = () => {
  const wishlist = JSON.parse(localStorage.getItem('my-wishlist') || '[]')

  if (isLiked.value) {
    // 이미 찜 상태면 -> 삭제 (내 ID를 제외한 나머지로 새 배열 만듦)
    const nextList = wishlist.filter((item: any) => item.id !== props.movie.id)
    localStorage.setItem('my-wishlist', JSON.stringify(nextList))
    isLiked.value = false
  } else {
    // 찜 아니면 -> 추가
    wishlist.push(props.movie)
    localStorage.setItem('my-wishlist', JSON.stringify(wishlist))
    isLiked.value = true
  }
}

onMounted(() => {
  checkLike()
})
</script>

<style scoped>
.movie-card {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
  border-radius: 6px;
  overflow: hidden;
}
.movie-card:hover {
  transform: scale(1.05);
  z-index: 5;
}
.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.no-poster {
  width: 100%;
  height: 300px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
}
.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #e50914;
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
}
/* 타이틀 오버레이 (마우스 올렸을 때만 보이게 하려면 opacity 조절) */
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  padding: 10px;
  color: white;
  text-align: center;
}
.title {
  margin: 0;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>