let http = require('http')
let server = http.createServer()
server.on('request', function(Request, Response) {
  console.log('接受请求')
  Response.setHeader('content-type', 'text/plain; charset=utf-8')
  Response.end('我喜欢斐斐')
})

server.listen(3000, () => {
  console.log('server starting')
})