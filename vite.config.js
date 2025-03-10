import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan all JSX/TSX files
  // Replace with your actual repository name
  theme: {
    extend: {},
  },
  server: {
    cors: {
      origin: "https://sunandanarayanan.in/", // Restrict to your development origin
      methods: ["GET", "POST"], // Allow only necessary methods
    },
    strictPort: true // Prevents port hijacking
  },
  plugins: [react()],
  base:  '/',  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});

