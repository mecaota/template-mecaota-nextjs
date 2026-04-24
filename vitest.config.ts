import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig(() => ({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      exclude: ['**/*.{d,stories}.{ts,tsx,js,jsx}', '**/*.config.{ts,js,cjs}'],
      include: ['{src,app}/**/*.{ts,tsx,js,jsx}'],
    },
    include: ['**/*.test.{ts,tsx,js,jsx}'],
  },
}));
