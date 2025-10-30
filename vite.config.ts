import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/e-shops-client-side/',
  plugins: [react(),tailwindcss()
  ]     
})
