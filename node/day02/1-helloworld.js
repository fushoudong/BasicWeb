/**
 * 使用http实现：
 *  /返回：helloworld
 * 其它返回：404 not found
 */
let http = require('http')
let server = http.createServer()
server.on('request', (Request, Response) => {
  console.log('请求路径' + Request.url)
  let url = Request.url
  if(url === '/') {
    Response.end('hello world')
  }else {
    Response.end('404 Not Found')
  }
})
server.listen(4000, (error) => {
  console.log('server running...')
})