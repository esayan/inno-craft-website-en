import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.inno-craft.com) yayını için:
export default defineConfig({
  plugins: [react()],
  base: '/', // custom domain için kök

  build: { minify: 'esbuild' },
})
