import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Replace with your actual repository name
  plugins: [react()],
  base: '/scientist_portfolio', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
