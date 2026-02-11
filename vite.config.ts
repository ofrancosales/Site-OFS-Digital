import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Fundamental para funcionar em subdiretórios do GitHub Pages
  build: {
    outDir: 'dist',
  }
});