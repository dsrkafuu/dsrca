module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react',
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(sass|scss|css)$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    return config;
  },
};
