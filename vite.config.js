import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      // Evita ENOSPC no Linux: não vigia pastas pesadas fora do projeto
      ignored: ['**/node_modules/**', '**/.git/**', '**/.config/**', '**/vendor/**']
    }
  },
  build: { outDir: 'dist', sourcemap: false, chunkSizeWarningLimit: 1000 }
})
