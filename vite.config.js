// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Porfolio-inprogress/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules packages into separate chunks
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
    // Increase the chunk size warning limit (in kB) to 1000
    chunkSizeWarningLimit: 1000,
  },
});
