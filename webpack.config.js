var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
//var merge = require('webpack-merge');
//var Target = process.env.npm_lifecycle_event;

module.exports = {
  entry: '/components/sample.js'
  resolve: {
    extensions: ['', '.js']
  },
  output:{
    path: path.resolve(ROOT_PATH, 'build')
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        exclude: node_modules,
        include: path.resolve(ROOT_PATH, 'components')
      }
    ]
  }
  plugin: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Recipe App'
    })
  ]
};

// if(TARGET === 'start' || !TARGET) {
//   module.exports = merge(common, {
//     devtool: 'eval-source-map',
//     devServer: {
//       historyApiFallback: true,
//       hot: true,
//       inline: true,
//       progress: true
//     },
//     plugins: [

//     ]
//   });
// }
