var path = require('path');

module.exports = {
  entry: [
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  target: 'electron',
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.tsx?$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]'],
        exclude: /node_modules/,
      },
    ],
  },
}
