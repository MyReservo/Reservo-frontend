import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// import vitePluginSass from 'vite-plugin-sass';

export default defineConfig({
  base: '/Reservo-frontend/',
  plugins: [
    tsconfigPaths(),
    // vitePluginSass({
    //   include: /src\/.*\.scss$/,
    //   exclude: /node_modules/,
    // }),
  ],
  optimizeDeps: {
    include: ['main.ts', 'new-elements.ts', 'calendar.ts', 'calendar.html']
  },
//   build: {
//     css: {
//       extract: {
//         filename: 'calendar.css'
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@calendar': '\OneDrive\Pulpit\Programming\Reservo-front\app\src\sass\calendar.scss'
//     }
//   }
});
