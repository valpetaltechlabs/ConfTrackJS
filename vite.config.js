import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Only add base path for production (GitHub Pages)
const base = process.env.NODE_ENV === 'production'
  ? `/${process.env.VITE_REPO_NAME}/`
  : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
})
