/**
 * 与2相同功能，但是统一处理
 */
let http = require('http')
let server = http.createServer()
let fs = require('fs')
server.on('request', (Request, Response) => {
  console.log('请求路径' + Request.url)
  let url = Request.url
  let filePath = './www/index.html'
  if(url !== '/') {
    filePath = './www' + url
  }
  fs.readFile(filePath, (error, data) => {
    Response.setHeader('content-type', 'text/html; charset=utf-8;')
    if(error) {
      return Response.end('网页打开失败')
    }
    return Response.end(data)
  })
})
server.listen(4000, (error) => {
  console.log('server running...')
})