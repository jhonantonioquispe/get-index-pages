import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    open: '/popup/index.html' // Esta es la clave
  },
  build: {
    rollupOptions: {
      input: {
        popup: 'popup/index.html'
      },
      output: {
        dir: 'dist',
        format: 'esm'
      }
    }
  }
})
