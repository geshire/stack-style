const webpack = require('webpack');

module.exports = {
  entry: {
    exports: __dirname + '/src/exports.js'
  },
  mode: "production",
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname + '/lib',
    filename: 'stack-style.js',
    library: 'stack-style',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      'node_modules',
      'src',
    ]
  },
  module: {
    rules: [
      {
        test: [
          /\.js?$/,
        ],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: []
};
