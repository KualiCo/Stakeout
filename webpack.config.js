'use strict'

var path = require('path')
var webpack = require('webpack')
var hotPort = 8000
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')

var isDev = process.env.NODE_ENV !== 'production'

var plugins = isDev ? [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('main.css')
] : [
  new ExtractTextPlugin('main.css'),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  }),
  new StatsPlugin(path.join(__dirname, 'dist', 'webpack.stats.json'), {
    source: false,
    modules: false
  })
]

module.exports = {
  devtool: isDev ? 'eval' : 'source-map',
  entry: [
    path.join(__dirname, 'src/main.js')
  ].concat(isDev ? [
    'webpack-dev-server/client?http://localhost:' + hotPort,
    'webpack/hot/dev-server'
  ] : []),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js', // '[name]-[hash].min.js
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx'],
    fallback: [__dirname]
  },
  externals: {
    'js-data-schema': 'undefined' // See https://github.com/js-data/js-data/issues/58
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.json?$/,
      exclude: /node_modules/,
      loader: 'json'
    }, {
      test: /\.styl|\.css$/,
      loader: ExtractTextPlugin.extract('css-loader')
    }]
  },
  plugins: plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__DEV__': JSON.stringify(isDev || true)
    })
  ]),
  _hotPort: hotPort
}
