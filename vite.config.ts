import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: 'https://github.com/Cristian1891/valores_sinai.git' // reemplaza TU_REPO por el nombre exacto del repo GitHub
})
