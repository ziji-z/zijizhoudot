const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Check for .css files
        use: ['style-loader', 'css-loader'],  // Use style-loader and css-loader
      },
      {
        test: /\.js$/,  // Check for .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};