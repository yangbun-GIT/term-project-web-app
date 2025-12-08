<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="settings-modal">
      <div class="modal-header">
        <h3>설정 (Settings)</h3>
        <button class="close-btn" @click="$emit('close')"><i class="fas fa-times"></i></button>
      </div>

      <div class="scroll-area">
        <h4>화면 및 표시</h4>
        <div class="setting-item">
          <div class="info"><span class="label">큰 글씨 모드</span><span class="desc">글자 크기를 키웁니다.</span></div>
          <div class="toggle" :class="{ active: fontSize === 'large' }" @click="store.toggleFontSize"><div class="circle"></div></div>
        </div>
        <div class="setting-item">
          <div class="info"><span class="label">큰 그리드 보기</span><span class="desc">영화 카드를 더 크게 봅니다.</span></div>
          <div class="toggle" :class="{ active: gridSize === 'large' }" @click="store.toggleGridSize"><div class="circle"></div></div>
        </div>
        <div class="setting-item">
          <div class="info"><span class="label">애니메이션 줄이기</span><span class="desc">화면 전환 효과를 최소화합니다.</span></div>
          <div class="toggle" :class="{ active: reducedMotion }" @click="store.toggleMotion"><div class="circle"></div></div>
        </div>

        <h4>재생 및 데이터</h4>
        <div class="setting-item">
          <div class="info"><span class="label">데이터 절약 모드</span><span class="desc">저화질 이미지를 사용합니다.</span></div>
          <div class="toggle" :class="{ active: lowDataMode }" @click="store.toggleLowData"><div class="circle"></div></div>
        </div>
        <div class="setting-item">
          <div class="info"><span class="label">홈 배너 자동 재생</span><span class="desc">메인 슬라이드를 자동 넘김.</span></div>
          <div class="toggle" :class="{ active: autoplay }" @click="store.toggleAutoplay"><div class="circle"></div></div>
        </div>

        <h4>콘텐츠 필터</h4>
        <div class="setting-item">
          <div class="info"><span class="label">성인 콘텐츠 허용</span><span class="desc">검색 결과에 포함합니다.</span></div>
          <div class="toggle" :class="{ active: includeAdult }" @click="store.toggleAdult"><div class="circle"></div></div>
        </div>
        <div class="setting-item">
          <div class="info"><span class="label">공포 장르 숨기기</span><span class="desc">무서운 콘텐츠를 제외합니다.</span></div>
          <div class="toggle" :class="{ active: hideHorror }" @click="store.toggleHorror"><div class="circle"></div></div>
        </div>

        <h4>기타</h4>
        <div class="setting-item">
          <div class="info"><span class="label">찜 목록 정렬</span></div>
          <select :value="wishlistSort" @change="(e) => store.setWishlistSort((e.target as HTMLSelectElement).value as any)">
            <option value="date">최신 등록순</option>
            <option value="alpha">가나다순</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '../stores/movieStore'
import { storeToRefs } from 'pinia'

const store = useMovieStore()
const { lowDataMode, autoplay, includeAdult, wishlistSort, fontSize, gridSize, reducedMotion, hideHorror } = storeToRefs(store)
defineEmits(['close'])
</script>

<style scoped>
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 2000; display: flex; align-items: center; justify-content: center; }
.settings-modal { background: #1f1f1f; width: 450px; max-height: 80vh; padding: 25px; border-radius: 8px; color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.5); display: flex; flex-direction: column; }
.modal-header { display: flex; justify-content: space-between; margin-bottom: 20px; align-items: center; border-bottom: 1px solid #444; padding-bottom: 10px; }
.scroll-area { overflow-y: auto; flex: 1; padding-right: 10px; }
h4 { color: #e50914; margin: 20px 0 10px; font-size: 0.9rem; text-transform: uppercase; }
.setting-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.info { display: flex; flex-direction: column; }
.label { font-weight: bold; font-size: 1rem; }
.desc { font-size: 0.8rem; color: #888; margin-top: 4px; }
.toggle { width: 50px; height: 26px; background: #555; border-radius: 15px; position: relative; cursor: pointer; transition: 0.3s; }
.toggle.active { background: #e50914; }
.circle { width: 20px; height: 20px; background: white; border-radius: 50%; position: absolute; top: 3px; left: 3px; transition: 0.3s; }
.toggle.active .circle { left: 27px; }
select { background: #333; color: white; border: 1px solid #555; padding: 5px; border-radius: 4px; }

/* 라이트 모드 */
:global(body.light-mode) .settings-modal { background: white; color: #333; border: 1px solid #ddd; }
:global(body.light-mode) .modal-header { border-bottom-color: #eee; }
:global(body.light-mode) .desc { color: #666; }
</style>