const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LessLists = require("less-plugin-lists");
const createStyles = require("./scripts/createStyles");

module.exports = function(env) {
  return {
    entry: {
      app: __dirname + '/guide/client/App'
    },
    devtool: 'eval',
    devServer: {
      inline: true,
      hot: true,
      port: process.env.WEBPACK_DEV_SERVER_PORT
    },
    output: {
      filename: '[name].bundle.js',
      publicPath: 'http://localhost:1112/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.es6', '.less'],
      modules: [
        'node_modules',
        'guide/client',
        'src',
        'config',
      ]
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'less-loader',
                options: {
                  plugins: [
                    new LessLists()
                  ],
                  globalVars: createStyles()
                }
              }
            ]
          })
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader"
          }
        },
        {
          test: [
            /\.jsx?$/,
            /\.es6?$/
          ],
          exclude: /(node_modules|guide\/server|scripts|svg)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('app.bundle.css')
    ]
  }
};
