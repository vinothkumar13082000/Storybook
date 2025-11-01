import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ['../public'],
  // GitHub Pages base path configuration
  viteFinal: async (config) => {
    if (process.env.GITHUB_ACTIONS) {
      config.base = '/Storybook/';
    }
    return config;
  },
};
export default config;
