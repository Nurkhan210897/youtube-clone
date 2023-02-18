import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    port: 8080,
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false
  }
})