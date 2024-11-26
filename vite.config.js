import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

export default defineConfig({
  server: {
    port: 5173, // or any other port you prefer
    open: true, // automatically open the app in the browser
    },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
