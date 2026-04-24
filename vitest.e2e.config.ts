import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig, type Plugin } from 'vitest/config';

export default defineConfig(() => ({
  plugins: [vanillaExtractPlugin() as Plugin[], storybookTest()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' as const }],
      provider: playwright(),
      screenshotDirectory: '__screenshots__',
    },
  },
}));
