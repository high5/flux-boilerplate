var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    first: './js/apps/first.js',
    second: './js/apps/second.js'
  },
  output: {
    path: path.join(__dirname, 'js', 'bundles'),
    filename: "[name].bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
          }
      ]
  }
};
