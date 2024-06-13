/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
};

// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap">
  `,
};

export default config;
