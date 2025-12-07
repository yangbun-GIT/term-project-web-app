<template>
  <div>
    <h1>Main Page</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const logout = () => {
  localStorage.removeItem('TMDb-Key')
  router.push('/signin')
}
</script>