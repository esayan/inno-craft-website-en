// vite.config.(js|ts)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',                 // custom domain
  build: { copyPublicDir: true },
  plugins: [react()],
})
