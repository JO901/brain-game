const path = require('path');

module.exports = {
  entry: './frontend/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
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
      /**
       * get css working!
       */
    //   {
    //     // added the dollar sign
    //     test: /\.scss$/,
    //     use: {
    //       loader: 'css-loader',
    //       options: {
    //         // targets: 'defaults',
    //         presets: ['sass-loader'],
    //       },
    //     },
    //   }
    ],
  },
};