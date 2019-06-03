const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new CleanWebpackPlugin(),
    new WebpackMd5Hash(),
  ],
});
