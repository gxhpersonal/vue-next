import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"/vue-next/",
  server: {
    host: '192.168.7.62',
    port: 8082
  }
})
