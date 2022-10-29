const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entry = path.resolve(__dirname, './src/index.ts');
const dist = path.resolve(__dirname, './lib');

/** @type {import('webpack').Configuration} */
const commonConfig = {
  mode: 'production',
  entry,
  output: {
    path: dist,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.(sass|scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        type: 'asset/source',
        use: ['svgo-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/inline',
      },
    ],
  },
};

/**
 * @type {import('webpack').Configuration}
 */
const cjsConfig = merge(commonConfig, {
  output: {
    filename: 'index.js',
    library: {
      type: 'commonjs2',
    },
  },
  optimization: {
    minimize: false,
  },
});

/**
 * @type {import('webpack').Configuration}
 */
const esmConfig = merge(commonConfig, {
  output: {
    filename: 'index.esm.js',
    library: {
      type: 'module',
    },
  },
  optimization: {
    minimize: false,
  },
  experiments: {
    outputModule: true,
  },
});

module.exports = [cjsConfig, esmConfig];
