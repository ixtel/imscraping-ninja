var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./data');

var webpackConfig = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9090',
    './entry.js'
  ],
  devServer: {
    hot: true,
    contentBase: './assets',
    historyApiFallback: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/diy'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    // new HtmlWebpackPlugin({ template: 'pages/_index.html' }),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: ['', '.js', '.jsx', '.css']
};

// Server-side config
var serverSideWrapper = function(wpConf) {
  if (process.env.NODE_ENV !== 'client') {
    var config = {
      entry: [
        './entry.js'
      ],
      devServer: {
        contentBase: './assets'
      },
      plugins: [
        new ExtractTextPlugin('styles.css'),
        // new HtmlWebpackPlugin({ template: 'pages/_index.html' }),
        new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
      ]
    };
    return Object.assign(wpConf, config);
  }
  return wpConf;
};

module.exports = serverSideWrapper(webpackConfig);
