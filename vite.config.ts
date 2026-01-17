import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Using './' is essential for GitHub Pages if the project is in a subfolder (e.g. username.github.io/repo-name/)
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});
