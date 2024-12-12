const path = require('path');
const htmlplugin = require('html-webpack-plugin');
const { type } = require('os');

module.exports = {
  entry: './frontend/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  mode: 'development',
  plugins: [
    new htmlplugin({
      template: './frontend/main.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
      },
    ],
    static: {
      directory: path.join(__dirname, './build'),
    },
  },
  module: {
    rules: [
      {
        // added the dollar sign
        test: /\.jsx?$/,
        exclude: /node_modules|backend/,
        use: {
          loader: 'babel-loader',
          options: {
            // targets: 'defaults',
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        // added the dollar sign
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
