import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './public/assets/images'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react(), svgr()],
});
