import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // Tambahkan ini
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Ini yang akan menghubungkan simbol @ ke folder src
      '@': path.resolve(__dirname, './src'),
    }},
})
