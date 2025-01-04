import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 5000, //set the chunksize limit to 5mb
  },
  server: {
    proxy: {
      "/api":{
        target:"http://localhost:5000"
      }
    }
  }
})
