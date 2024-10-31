const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
  ],
}
