import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig, type Plugin } from 'vitest/config';

export default defineConfig(() => ({
  plugins: [vanillaExtractPlugin() as Plugin[]],
  test: {
    coverage: {
      exclude: ['**/*.{d,stories}.{ts,tsx,js,jsx}', '**/*.config.{ts,js,cjs}'],
      include: ['{src,app}/**/*.{ts,tsx,js,jsx}'],
    },
    include: ['**/*.test.{ts,tsx,js,jsx}'],
  },
}));
