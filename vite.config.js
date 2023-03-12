import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	base: '/Reservo-frontend/',
	plugins: [tsconfigPaths()],
	optimizeDeps: {
	  include: ['main.ts', 'new-elements.ts']
	}
});
