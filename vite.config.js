import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// If you are using the babel plugin from your screenshot:
import babel from '@rollway/plugin-babel' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gonme-game",
})