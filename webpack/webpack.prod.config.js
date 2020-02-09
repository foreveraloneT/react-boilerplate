const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin')

const base = require('./webpack.base.config')

const getPublicPath = () => {
  const path = process.env.CDN_ENDPOINT
  if (path.endsWith('/')) return path
  return `${path}/`
}

module.exports = {
  ...base,
  mode: 'production',
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.resolve(process.cwd(), 'src', 'App.js'),
  ],
  output: {
    ...base.output,
    filename: '[name].[Chunkhash].js',
    chunkFilename: '[name].[Chunkhash].chunk.js',
    publicPath: getPublicPath(),
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    ...base.plugins,
    // new CompressionPlugin({
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    // })
  ],
}
