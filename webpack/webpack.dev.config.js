const path = require('path')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const base = require('./webpack.base.config')

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    'react-hot-loader/patch',
    path.resolve(process.cwd(), 'src', 'App.js'),
  ],
  output: {
    ...base.output,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    publicPath:  '/',
    open: false,
    hot: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  },
  plugins: [
    ...base.plugins,
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    })
  ],
  resolve: {
    ...base.resolve,
    alias: {
      ...base.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    },
  },
}
