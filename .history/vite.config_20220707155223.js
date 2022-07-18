import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@store": path.resolve(__dirname, 'src/store'),
      "@api": path.resolve(__dirname, 'src/api'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@page": path.resolve(__dirname, 'src/pages')
    }
  }
})
