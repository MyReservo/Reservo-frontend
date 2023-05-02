import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { imageminPlugin } from './plugins/imagemin-plugin';

export default defineConfig({
  publicDir: 'public',
  base: '/Reservo-frontend/',
  plugins: [
    tsconfigPaths(),
    tsconfigPaths(),
    imageminPlugin(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', 
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login.html',
        customerPanel: 'customer-panel.html',
        companyPanel: 'company-panel.html',
        companyPanelTs: 'src/ts/company-panel.ts',
      },
      output: {
        manualChunks(id) {
          if (id.endsWith('.html')) {
            return id.split('/').slice(-1)[0].split('.')[0];
          }
        },
        format: 'es',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: 'chunks/[name].[hash].js',
       assetFileNames: 'images/[name]-[hash].[ext]', 
      },
    },
  },
  
});
