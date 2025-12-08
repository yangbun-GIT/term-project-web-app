<template>
  <div class="netflix-skeleton"></div>
</template>

<style scoped>
.netflix-skeleton {
  width: 100%;
  aspect-ratio: 2 / 3; /* 영화 포스터 비율 고정 */
  border-radius: 4px;  /* 넷플릭스 특유의 둥근 모서리 */
  background-color: #1f1f1f; /* 아주 어두운 베이스 색상 */

  /* 넷플릭스 스타일의 어두운 쉬머 효과 */
  background-image: linear-gradient(
      90deg,
      #1f1f1f 0%,
      #2b2b2b 50%,
      #1f1f1f 100%
  );
  background-size: 200% 100%;
  animation: netflix-pulse 1.5s infinite ease-in-out;
}

@keyframes netflix-pulse {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>