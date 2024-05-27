module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
  }
  const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          // Customize Terser options here if necessary
        },
        parallel: true,
      })],
    },
  },
};
