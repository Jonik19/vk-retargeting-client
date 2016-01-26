'use strict';

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || 'development';

let config = {};

config.context = path.resolve(__dirname, 'app');

config.entry = {
  app: './app.js'
};

config.output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: '[name].bundle.js'
};

config.devtool = 'eval';

config.module = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    {
      test: /\.(png|jpe?g|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader'
    },
    {
      test: /\.html$/,
      loader: 'raw'
    }
  ]
};

config.plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'app/index.html'),
    inject: 'body'
  }),
  new ExtractTextPlugin('bundle.css')
];

// config.watch = 'development' === NODE_ENV;
// config.cache = false;

module.exports = config;