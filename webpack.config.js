const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  entry: {
    main: './src/index.js'
  },
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({ sourceMap: true })
  ]
})
