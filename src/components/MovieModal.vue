<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')"><i class="fas fa-times"></i></button>

      <div class="modal-header" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path})` }">
        <div class="modal-gradient"></div>
        <div class="modal-title">
          <h1>{{ movie.title }}</h1>
          <div class="modal-meta">
            <span class="rating">⭐ {{ movie.vote_average?.toFixed(1) }}</span>
            <span class="date">{{ movie.release_date }}</span>
          </div>
        </div>
      </div>

      <div class="modal-body">
        <div class="genres" v-if="details && details.genres">
          <span v-for="g in details.genres" :key="g.id" class="genre-tag">{{ g.name }}</span>
        </div>

        <p class="overview">{{ movie.overview || '상세 설명이 없습니다.' }}</p>

        <hr class="divider" />

        <div class="chat-section">
          <h3>💬 실시간 응원톡</h3>

          <div class="chat-list" ref="chatListRef">
            <div v-if="messages.length === 0" class="empty-chat">
              첫 번째 응원 메시지를 남겨보세요!
            </div>

            <div
                v-for="msg in messages"
                :key="msg.id"
                class="chat-item"
                :class="{ 'my-chat': msg.uid === user?.uid }"
            >
              <div class="chat-bubble">
                <span class="chat-user">
                  {{ msg.email ? msg.email.split('@')[0] : '익명' }}
                </span>
                <p class="chat-text">{{ msg.text }}</p>
                <span class="chat-time">{{ formatTime(msg.createdAt) }}</span>
              </div>

              <button v-if="msg.uid === user?.uid" class="delete-btn" @click="deleteMessage(msg.id)">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div class="chat-input-area">
            <input
                v-model="newMessage"
                @keyup.enter="sendMessage"
                type="text"
                :placeholder="user ? '이 영화에 대한 감상평을 남겨주세요...' : '로그인이 필요합니다.'"
                :disabled="!user"
            />
            <button class="send-btn" @click="sendMessage" :disabled="!user || !newMessage.trim()">
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import tmdb from '../api/tmdb'
import { useMovieStore } from '../stores/movieStore'
import { storeToRefs } from 'pinia'
// [Firebase] 실시간 연동을 위한 함수들 임포트
import { db } from '../firebase'
import {
  collection, query, orderBy, onSnapshot,
  addDoc, deleteDoc, doc, serverTimestamp
} from 'firebase/firestore'

const props = defineProps<{ movie: any }>()
defineEmits(['close'])

const store = useMovieStore()
const { user } = storeToRefs(store) // 로그인 유저 정보

const details = ref<any>(null)
const messages = ref<any[]>([])
const newMessage = ref('')
const chatListRef = ref<HTMLElement | null>(null)

// 리스너 해제용 변수
let unsubscribe: (() => void) | null = null

// [기존 로직] 상세 정보 로드
const fetchDetails = async () => {
  try {
    const res = await tmdb.get(`/movie/${props.movie.id}`)
    details.value = res.data
  } catch (e) {
    console.error('상세 정보 로드 실패')
  }
}

// [신규 로직] 실시간 채팅 불러오기 (onSnapshot)
const loadMessages = () => {
  // DB 경로: movies -> {영화ID} -> messages
  const messagesRef = collection(db, 'movies', String(props.movie.id), 'messages')
  // 작성 시간순 정렬
  const q = query(messagesRef, orderBy('createdAt', 'asc'))

  // 데이터가 바뀔 때마다 실행됨 (새로고침 불필요)
  unsubscribe = onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    scrollToBottom()
  })
}

// [신규 로직] 메시지 전송
const sendMessage = async () => {
  if (!user.value || !newMessage.value.trim()) return

  const text = newMessage.value
  newMessage.value = '' // 입력창 비우기

  try {
    const messagesRef = collection(db, 'movies', String(props.movie.id), 'messages')
    await addDoc(messagesRef, {
      text: text,
      uid: user.value.uid,
      email: user.value.email,
      createdAt: serverTimestamp()
    })
  } catch (e) {
    console.error("전송 실패", e)
    alert("메시지 전송 실패")
  }
}

// [신규 로직] 메시지 삭제
const deleteMessage = async (msgId: string) => {
  if (!confirm("삭제하시겠습니까?")) return
  try {
    await deleteDoc(doc(db, 'movies', String(props.movie.id), 'messages', msgId))
  } catch (e) { console.error(e) }
}

// 유틸: 시간 포맷
const formatTime = (timestamp: any) => {
  if (!timestamp) return ''
  const date = timestamp.toDate()
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
}

// 유틸: 스크롤 하단 이동
const scrollToBottom = () => {
  nextTick(() => {
    if (chatListRef.value) {
      chatListRef.value.scrollTop = chatListRef.value.scrollHeight
    }
  })
}

onMounted(() => {
  fetchDetails()
  loadMessages() // 모달 열리면 채팅 연결
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe() // 모달 닫히면 연결 해제
})
</script>

<style scoped>
/* ==================================================== */
/* [기존 스타일 유지] 변경하지 않음 */
/* ==================================================== */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.8); z-index: 2000;
  display: flex; justify-content: center; align-items: center; animation: fadeIn 0.3s;
}
.modal-content {
  background: #141414; width: 90%; max-width: 800px; max-height: 90vh;
  border-radius: 8px; overflow: hidden; position: relative; overflow-y: auto;
  box-shadow: 0 0 20px rgba(0,0,0,0.5); animation: slideUp 0.3s;
}
.close-btn {
  position: absolute; top: 15px; right: 15px; z-index: 10;
  background: rgba(0,0,0,0.5); border: none; color: white; border-radius: 50%;
  width: 36px; height: 36px; cursor: pointer; font-size: 1.2rem;
}
.modal-header { height: 400px; background-size: cover; background-position: center; position: relative; }
.modal-gradient { position: absolute; bottom: 0; width: 100%; height: 100%; background: linear-gradient(to top, #141414, transparent); }
.modal-title { position: absolute; bottom: 20px; left: 30px; width: 90%; }
.modal-title h1 { font-size: 3rem; margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); }
.modal-meta { display: flex; gap: 15px; font-size: 1.1rem; font-weight: bold; align-items: center; }
.rating { color: #46d369; }

.modal-body { padding: 30px; font-size: 1.1rem; line-height: 1.6; color: #ddd; }
.genres { margin-bottom: 20px; display: flex; gap: 10px; flex-wrap: wrap; }
.genre-tag {
  background: #333; padding: 5px 10px; border-radius: 4px; font-size: 0.9rem; color: #fff; border: 1px solid #555;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { transform: translateY(50px); } to { transform: translateY(0); } }
@media (max-width: 768px) { .modal-header { height: 250px; } .modal-title h1 { font-size: 1.8rem; } }


/* ==================================================== */
/* [신규 스타일 추가] 채팅 섹션용 CSS (기존 디자인과 통일) */
/* ==================================================== */
.divider {
  border: 0; border-top: 1px solid #333; margin: 30px 0;
}

.chat-section h3 {
  margin-bottom: 15px; font-size: 1.2rem; color: #fff; font-weight: bold;
}

.chat-list {
  background: #1f1f1f; /* 어두운 배경 */
  height: 300px;
  border-radius: 8px;
  padding: 15px;
  overflow-y: auto;
  margin-bottom: 15px;
  border: 1px solid #333;
}

/* 스크롤바 커스텀 */
.chat-list::-webkit-scrollbar { width: 6px; }
.chat-list::-webkit-scrollbar-thumb { background: #555; border-radius: 3px; }

.empty-chat {
  text-align: center; color: #666; margin-top: 100px; font-size: 0.9rem;
}

.chat-item {
  display: flex; margin-bottom: 12px;
}
/* 내 채팅은 오른쪽 정렬 */
.chat-item.my-chat { justify-content: flex-end; }

.chat-bubble {
  background: #333;
  padding: 10px 14px;
  border-radius: 12px;
  border-top-left-radius: 2px;
  max-width: 80%;
  position: relative;
  font-size: 0.95rem;
}
.my-chat .chat-bubble {
  background: #e50914; /* 넷플릭스 레드 포인트 */
  color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 2px;
}

.chat-user {
  display: block; font-size: 0.75rem; color: #aaa; margin-bottom: 4px;
}
.my-chat .chat-user { text-align: right; color: #ffcccc; }

.chat-time {
  display: block; font-size: 0.7rem; color: #888; text-align: right; margin-top: 4px;
}
.my-chat .chat-time { color: rgba(255,255,255,0.7); }

.delete-btn {
  background: none; border: none; color: #666; cursor: pointer;
  margin-left: 8px; font-size: 0.9rem; display: flex; align-items: center;
}
.delete-btn:hover { color: #e50914; }

.chat-input-area { display: flex; gap: 10px; }
.chat-input-area input {
  flex: 1;
  background: #333; border: 1px solid #444; color: white;
  padding: 12px; border-radius: 4px; outline: none; font-size: 1rem;
}
.chat-input-area input:focus { border-color: #888; }

.send-btn {
  background: #e50914; color: white; border: none;
  padding: 0 20px; border-radius: 4px; font-weight: bold; cursor: pointer;
  white-space: nowrap; transition: 0.2s;
}
.send-btn:hover { background: #f40612; }
.send-btn:disabled { background: #444; color: #888; cursor: not-allowed; }
</style>