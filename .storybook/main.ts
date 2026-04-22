import { defineMain } from '@storybook/react-vite/node';

const mainConfig = defineMain({
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
});
export default mainConfig;
