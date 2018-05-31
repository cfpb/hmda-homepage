const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new UglifyJSPlugin({ sourceMap: true }),
    new WebpackShellPlugin({
      onBuildEnd: ['yarn run env'],
      dev: false
    })
  ]
})
