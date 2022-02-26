import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/renderer',
  publicDir: 'src/renderer/public',
  base: process.env.IS_DEV !== 'true' ? './' : '/',
  mode: process.env.IS_DEV !== 'true' ? 'production' : 'development',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/renderer'),
    }
  },
  build: {
    outDir: '../application/rendererBuild',
    emptyOutDir: true
  },
  plugins: [vue()]
})
