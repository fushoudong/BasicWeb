const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包后的路径
    filename: 'bundle.js' // 打包后的文件名
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|gif|jpeg|jpg|svg)$/,
        use: ['file-loader', {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.js$/,
        // 排除node_modules的js文件
        exclude: /(node_modules|bower_components)/,
         use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}