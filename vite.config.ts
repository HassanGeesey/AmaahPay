import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AmaahPay/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
