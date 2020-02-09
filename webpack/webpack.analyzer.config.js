const prodConfig = require('./webpack.prod.config')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  ...prodConfig,
  plugins: [
    ...prodConfig.plugins,
    new BundleAnalyzerPlugin(),
  ]
}