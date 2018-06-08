/* global require, module */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, { mode }) => {
  return {
    devtool: mode === 'development' ? 'source-map' : false,
    entry: './src/js/main',
    output: {
      filename: mode === 'development' ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      ],
    },
  };
};
