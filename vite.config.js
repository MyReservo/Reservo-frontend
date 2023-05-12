import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false,
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
  },
  png: {
    quality: 100,
  },
  jpeg: {
    quality: 100,
  },
  jpg: {
    quality: 50,
  },
  tiff: {
    quality: 100,
  },
  gif: {},
  webp: {
    lossless: true,
  },
  avif: {
    lossless: true,
  },
};


export default defineConfig({
  publicDir: 'public',
  base: '/Reservo-frontend/',
  plugins: [
    tsconfigPaths(),
    ViteImageOptimizer({
      ...DEFAULT_OPTIONS,
      generate: {
        filename: 'images/[name]-[hash][ext]',
        webp: true,
      },
    }),
  ],
  build: {
    outDir: 'dist',
    css: {
      target: 'dist/*.css',
      minify: true,
    },
    assetsDir: 'assets',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login.html',
        customerPanel: 'customer-panel.html',
        customerPanelTs: 'src/ts/customer-panel.ts',
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
         assetFileNames: '[name]-[hash].[ext]',
        // assetFileNames: 'images/[name]-[hash].[ext]',
      },
    },
  },
});

