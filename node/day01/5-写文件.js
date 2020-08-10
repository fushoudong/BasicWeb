let fs = require('fs')
fs.writeFile('./file/我喜欢斐斐.txt','我喜欢斐斐一生一世', (error) => {
  if(error) {
    console.log('文件写入失败')
  }else {
    console.log('文件写入成功')
    fs.readFile('./file/我喜欢斐斐.txt', (error, data) => {
      if(data) {
        console.log(data.toString())
      }else {
        console.log(error)
      }
    })
  }
})