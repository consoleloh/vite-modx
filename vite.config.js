import { defineConfig } from 'vite';
import path from 'path';
import { viteConvertPugInHtml } from '@mish.dev/vite-convert-pug-in-html';

export default defineConfig({
  root: 'src',
  plugins: [
    viteConvertPugInHtml(),
  ],
  css: {
        postcss: {
          plugins: [
            require('postcss-combine-media-query'),
          ],
        },
      },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: '../dist',
  },
  server: {
    cors: true
  }
});