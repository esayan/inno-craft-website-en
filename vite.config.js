import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/inno-craft-website/',   // <-- yeni repo adın
  plugins: [react()],
})
