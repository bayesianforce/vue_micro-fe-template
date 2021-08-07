const { merge } = require('webpack-merge');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  plugins: [new HtmlWebpackPlugin({
    favicon: "./public/favicon.png",
    template: './public/index.html'
  })],
}

module.exports = merge(commonConfig, devConfig);
