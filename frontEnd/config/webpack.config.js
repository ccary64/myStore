const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [/node_modules/],
      query: {
        presets: ['es2015', 'react'],
        plugins: [
          'transform-async-to-generator',
          'transform-object-rest-spread'
        ]
      }
    }
  ]
  },
  plugins:[ HtmlWebpackPluginConfig ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};