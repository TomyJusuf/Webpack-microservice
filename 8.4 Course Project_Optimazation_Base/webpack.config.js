const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { split } = require('lodash')

module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),

    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
              },
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/pages/courses.html'),
      inject: true,
      chunks: ['courses'],
      filename: 'pages/courses.html',
    }),
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, './src/assets'), to: 'assets' }],
    }),
    new BundleAnalyzerPlugin({}),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
