const path = require('path')
const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/js')
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new WebpackShellPlugin({
      onBuildEnd: ['yarn run env'],
      dev: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/hmda-ui')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  modules: false,
                  useBuiltIns: 'entry'
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../css/[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}
