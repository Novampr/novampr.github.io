import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-pages';

const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  base: basePath,
  plugins: [react(), pages({ resolver: 'react', importMode: 'sync' })],
  server: {
    port: 3000,
  },
});
