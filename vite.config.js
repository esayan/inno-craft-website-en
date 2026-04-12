import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// Build sonrası index.html'i 404.html olarak kopyalar
// GitHub Pages SPA desteği için gerekli
const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle() {
    copyFileSync(
      resolve('dist', 'index.html'),
      resolve('dist', '404.html')
    )
  }
})

// Custom domain (www.inno-craft.com) yayını için:
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/', // custom domain için kök

  build: { minify: 'esbuild' },
})
