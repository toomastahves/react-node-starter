'use strict';
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true,
    port: 1337
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: './client/main.jsx',
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Shelter'
    })
  ]
}
