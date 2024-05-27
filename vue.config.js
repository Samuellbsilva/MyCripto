module.exports = {
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
