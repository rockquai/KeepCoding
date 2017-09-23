const path = require('path');

module.exports = {
  entry: path.resolve('src/index.jsx'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader'
    }, {
      test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg)$/,
      loader: 'url-loader'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [],
  devServer: {
    host: '192.168.0.18',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
