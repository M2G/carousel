import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      index: path.resolve(__dirname, './src/index/'),
    },
  },
}));
