import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/e-plantShopping/",
  build: {
    outDir: "docs",      // ← output to docs/
  },
  plugins: [react()],
})
