const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* const env = dotenv.config().parsed; */

/* const envKeys = Object.keys(env).reduce((prev, next) => {
 *   prev[`process.env.${next}`] = JSON.stringify(env[next]);
 *   return prev;
 * },{}); */


module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: { main: './client.js' },


//needed for purecloud
  /* resolve: {
   *   mainFields: ['jsnext:main', 'browser', 'module', 'main'],
   * },
   * node: {
   *   fs: 'empty',
   * },
   */
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
       test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      filename: 'index.html',
    }),
  ],
}
