import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.inno-craft.com) yayını için:
export default defineConfig({
  plugins: [react()],
  base: '/', // custom domain için kök

  // Prod bundle'a sızan HMR/dev placeholder'larını build-time'da İNLINE ET
  // (Bu anahtarlar derleme sırasında gerçek JS literallerine çevrilir)
  define: {
    __DEV__: false,
    __DEFINES__: {},

    __HMR_CONFIG_NAME__: JSON.stringify(''),
    __HMR_PROTOCOL__:   JSON.stringify(''),
    __HMR_HOSTNAME__:   JSON.stringify(''),
    __HMR_PORT__:       JSON.stringify(''),
    __HMR_BASE__:       JSON.stringify(''),
    __HMR_TIMEOUT__:    30000,

    'process.env': {},
    'process.env.NODE_ENV': JSON.stringify('production'),
  },

  build: { minify: 'esbuild' },
})
