import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import viteCompression from 'vite-plugin-compression';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/up2017-particle-effect/',
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    viteCompression()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src/'),
      "@components/*": path.resolve(__dirname, './src/'),
      "@constant/*": path.resolve(__dirname, './src/constant/'),
      "@declare/*": path.resolve(__dirname, './src/declare/'),
      "@THREE/*": path.resolve(__dirname, './src/THREE/'),
    }
  }
})
