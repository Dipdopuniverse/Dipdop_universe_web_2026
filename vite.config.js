import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' 
import sitemapPlugin from 'vite-plugin-sitemap'
import { fileURLToPath } from 'url'
import vitePrerender from 'vite-plugin-prerender'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    sitemapPlugin({ 
      hostname: 'https://dipdop-three.vercel.app/',
      dynamicRoutes: ['/'] 
    }),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'],
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      }
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }},
})
