

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain için:
export default defineConfig({
  base: '/',          // ÖNEMLİ: repo yolu değil, kök!
  plugins: [react()],
})
