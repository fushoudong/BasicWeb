// 文件中的相对路径可以省略 ./
/**
 * 文件操作是异步的
 */
require('./mode')
const fs = require('fs')
fs.readFile('/data/json.txt', (res, data) => {
  if(res) {
    return console.log(res)
  }else {
    console.log(data.toString())
  }
})