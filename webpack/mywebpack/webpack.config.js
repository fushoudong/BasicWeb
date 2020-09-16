const path = require('path')
module.exports = {
  entry: './src/main.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包后的路径
    filename: 'bundle.js' // 打包后的文件名
  }
}