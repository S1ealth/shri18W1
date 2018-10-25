const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
    surv: './src/surv.ts',
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      {test: /\.js$/, loader: 'source-map-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
    ],
  },
};
