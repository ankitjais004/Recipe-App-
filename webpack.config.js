var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'components');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');


process.env.BABEL_ENV = TARGET;

var common = {
  entry: './components/index.jsx',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        loaders: ['babel'],
        include: ROOT_PATH,
        exclude: /node_modules/

      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH,"stylesheet")
      }

    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,

      hot: true,
      inline: true,
      progress: true,
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
