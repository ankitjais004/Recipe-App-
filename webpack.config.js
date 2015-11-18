var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'components');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');
var merge = require('webpack-merge');
var TARGET = process.env.npm_lifecycle_event;

module.exports = {
  entry: './components/sample.js',
  resolve: {
    extensions: ['', '.js']
  },
  output:{
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      host: process.env.HOST,
      port: process.env.PORT
    },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: APP_PATH
      }
    ]
  },
  plugin: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Recipe App'
    })
  ]
};
