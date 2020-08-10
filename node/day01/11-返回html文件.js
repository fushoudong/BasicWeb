let http = require('http')
let server = http.createServer()
let fs = require('fs')
server.on('request', function(Request, Response) {
  console.log('接受请求')
  fs.readFile('./file/index.html', (error, data) => {
    if(error) {
      console.error('文件读取失败')
    }else {
      Response.setHeader('content-type', 'text/html; charset=utf-8')
      Response.end(data)
    }
  })
})

server.listen(3000, () => {
  console.log('server starting')
})