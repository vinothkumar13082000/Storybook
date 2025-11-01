import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Library build configuration for npm package
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Add any SCSS options here if needed
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ModenUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `moden-ui.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Extract CSS into separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'styles.css';
          }
          return assetInfo.name || 'asset';
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    cssCodeSplit: false, // Bundle all CSS into one file
  },
});

