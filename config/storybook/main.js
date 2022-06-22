module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
     '@storybook/addon-links',
     '@storybook/addon-interactions',
    ],
    framework: '@storybook/vue2',
    core: {
      builder: '@storybook/builder-webpack5',
    },
    features: {
      interactionsDebugger: true,
    },
}
