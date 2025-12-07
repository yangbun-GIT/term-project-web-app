<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">NETFLIX</router-link>
    </div>
    <div class="links">
      <router-link to="/">홈</router-link>
      <router-link to="/popular">대세 콘텐츠</router-link>
      <router-link to="/wishlist">내가 찜한 리스트</router-link>
    </div>
    <div class="user-info">
      <span>{{ email }}님</span>
      <button @click="logout">로그아웃</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const router = useRouter()

onMounted(() => {
  // 로그인 때 저장한 ID 가져오기
  email.value = localStorage.getItem('UserId') || 'Guest'
})

const logout = () => {
  localStorage.removeItem('TMDb-Key')
  router.push('/signin')
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: transparent; /* 스크롤 시 검게 변하게 하려면 추가 로직 필요 */
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0));
}
.logo a {
  color: #e50914;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
}
.links a {
  color: #e5e5e5;
  text-decoration: none;
  margin: 0 15px;
  font-size: 0.9rem;
  transition: color 0.3s;
}
.links a:hover, .links a.router-link-active {
  color: #fff;
  font-weight: bold;
}
.user-info button {
  background: #e50914;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>