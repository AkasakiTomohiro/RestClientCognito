const merge = require('webpack-merge');
const common = require('./webpack.common');

const prod = merge(common, {
  mode: 'production'
});

const dev = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  }
});

module.exports = process.env.ENV === 'production' ? prod : dev;
