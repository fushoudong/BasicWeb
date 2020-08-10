let http = require('http')
let server = http.createServer()
server.on('request', function(Request, Response) {
  console.log('接受请求')
  Response.setHeader('content-type', 'text/html; charset=utf-8')
  Response.end('<h1>我喜欢斐斐</h1>')
})

server.listen(3000, () => {
  console.log('server starting')
})