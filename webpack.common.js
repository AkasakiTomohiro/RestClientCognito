const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const BUILD_ROOT = path.join(__dirname, './lib');
const SRC_ROOT = path.join(__dirname, './src/Serr');

module.exports = {
  context: SRC_ROOT,
  entry: {
    index: path.resolve('src', 'index.ts')
  },
  externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    path: BUILD_ROOT,
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.webpack.json'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, '/src/')
    }
  }
};
