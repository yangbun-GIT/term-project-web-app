import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    // [중요] GitHub Pages 배포를 위한 기본 경로 설정
    // 리포지토리 이름과 동일하게 맞춰야 합니다.
    base: '/term-project-web-app/',
})
