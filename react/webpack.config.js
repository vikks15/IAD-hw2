const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');


module.exports = {
  entry: path.resolve(src,'components/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]',
						}
					}
				]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {  
    contentBase: build,       
    compress: true,
    port: 8080,
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'SPA',
      filename: path.resolve(__dirname, 'build/index.html'),
      template: path.resolve(__dirname, 'src/components/indextmpl.html'),
    }),
  ]
}
