import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Porfolio-inprogress/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split vendor libraries into separate chunks:
            if (id.includes('@splinetool/react-spline')) return 'spline';
            if (id.includes('three')) return 'three';
            if (id.includes('framer-motion')) return 'framer';
            return 'vendor';
          }
        }
      }
    },
    // Increase warning threshold if needed
    chunkSizeWarningLimit: 1000,
  }
});
