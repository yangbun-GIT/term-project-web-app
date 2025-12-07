<template>
  <div class="container">
    <h2>NETFLIX LOGIN</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password (TMDB API Key)" required />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    // 입력한 키가 유효한지 TMDB에 물어봄
    await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${password.value}`)

    // 유효하면 저장 (과제 필수)
    localStorage.setItem('TMDb-Key', password.value)
    localStorage.setItem('UserId', email.value)

    alert('로그인 성공!')
    router.push('/') // 메인으로 이동
  } catch (e) {
    alert('로그인 실패: API Key를 확인해주세요.')
  }
}
</script>

<style scoped>
.container { display: flex; flex-direction: column; align-items: center; margin-top: 100px; color: white; }
input { margin: 10px; padding: 10px; width: 300px; display: block; }
button { padding: 10px 20px; background: red; color: white; border: none; cursor: pointer; }
</style>