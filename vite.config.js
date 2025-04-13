import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/DA_CongCu.github.io/', // 👈 dòng này rất quan trọng
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  }
})
