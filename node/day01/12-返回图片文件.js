let http = require('http')
let server = http.createServer()
let fs = require('fs')
server.on('request', function(Request, Response) {
  console.log('接受请求')
  fs.readFile('./images/ceshi.jpg', (error, data) => {
    if(error) {
      console.error('文件读取失败')
    }else {
      Response.setHeader('content-type', 'image/jpg')
      Response.end(data)
    }
  })
})

server.listen(3000, () => {
  console.log('server starting')
})