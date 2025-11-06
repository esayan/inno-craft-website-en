import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages (project pages) için base yolu repo adın olmalı:
//  - GH Pages:  base: '/inno-craft-website-en/'
//  - Custom domain (inno-craft.com): base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/inno-craft-website-en/',

  // Build-time sabit yerleştirmeleri (bundle içindeki referansları çözer)
  define: {
    __DEFINES__: {},                 // <-- sorun çıkaran global yer tutucu
    __DEV__: false,
    'process.env': {},               // process.env.* erişimleri için boş obje
    'process.env.NODE_ENV': JSON.stringify('production'),
  },

  build: {
    minify: 'esbuild',
  },
})
