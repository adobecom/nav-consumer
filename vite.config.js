import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages project site; use '/' locally for simpler dev URLs.
  // React app (Footer): dev http://localhost:5173/ · prod …/nav-consumer/
  // Static nav demo: /consumer/navigation.html (prod …/nav-consumer/consumer/navigation.html)
  base: command === 'build' ? '/nav-consumer/' : '/',
  // Dev pre-bundling uses esbuild’s default browserslist target unless overridden;
  // standalone-feds uses top-level await (same as production build).
  esbuild: {
    target: 'es2022',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2022',
    },
  },
  build: {
    // @adobecom/standalone-feds ships chunks with top-level await
    target: 'es2022',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
}));
