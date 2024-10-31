const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index'], // This ensures the index.bundle.js is included
      inject: true,
      filename: 'index.html',
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/products.html'),
      chunks: ['product'], // This ensures the product.bundle.js is included
      inject: true,
      filename: 'products.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'), // Source folder with images
          to: path.resolve(__dirname, 'dist/assets'), // Destination folder for images
        },
      ],
    }),
  ],
}
