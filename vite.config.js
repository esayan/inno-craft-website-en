import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain için base kök olmalı:
export default defineConfig({
  plugins: [react()],
  base: '/',

  // Prod bundle'a sızan dev/HMR placeholder'larını build-time'da sabitle
  define: {
    __DEFINES__: '{}',
    __DEV__: 'false',
    'process.env': '{}',
    'process.env.NODE_ENV': '"production"',

    // HMR/dev kalıntıları ihtimaline karşı emniyet kemeri
    __HMR_CONFIG_NAME__: '""',
    __HMR_PROTOCOL__: '""',
    __HMR_HOSTNAME__: '""',
    __HMR_PORT__: '""',
    __HMR_BASE__: '""',
    __HMR_TIMEOUT__: '30000',
  },

  build: { minify: 'esbuild' },
})
