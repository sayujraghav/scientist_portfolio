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
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/scientist_portfolio/' : '/',  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});

