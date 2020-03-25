module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx|jsx)'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register', 
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.stories\.js/,
      use: [{ loader: "story-description-loader" }],
    });

    return config;
  }
};
