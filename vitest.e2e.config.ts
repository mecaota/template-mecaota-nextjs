import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig(() => ({
  plugins: [react(), tsconfigPaths()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' as const }],
      provider: playwright(),
      screenshotDirectory: '__screenshots__',
    },
    include: ['**/*.e2e.{ts,tsx,js,jsx}'],
    setupFiles: ['vitest.e2e.setup.ts'],
  },
}));
