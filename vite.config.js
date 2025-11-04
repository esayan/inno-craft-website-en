

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  build: { copyPublicDir: true },   // açıkça söyleyelim
  plugins: [react()],
})
