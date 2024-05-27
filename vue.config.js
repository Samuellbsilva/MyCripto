module.exports = {
  publicPath: '/',
  configureWebpack: {
    optimization: {
      minimize: true
    }
  },
  devServer: {
    historyApiFallback: true
  },
  outputDir: 'dist'
};
