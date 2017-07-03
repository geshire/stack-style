const webpack = require('webpack');

module.exports = {
  entry: {
    exports: __dirname + '/src/scriptExports'
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: 'Style',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
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
  plugins: []
};
