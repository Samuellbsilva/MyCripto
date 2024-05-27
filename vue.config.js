const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
        parallel: true,
      })],
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  outputDir: 'dist',
  publicPath: '/',
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env'].NODE_OPTIONS = '"--openssl-legacy-provider"';
      return args;
    });
  }
};
