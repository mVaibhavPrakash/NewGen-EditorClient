const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/components/Index.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    port: 3011,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};