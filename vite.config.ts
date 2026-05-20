import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // 포트가 이미 사용 중일 경우 에러 발생 (자동 변경 방지)
  }
})
