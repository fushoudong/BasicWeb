/**
 * 使用http实现：
 *  仿照apache服务器，开启服务器后，只能访问www目录下的文件，其他文件夹下报错404
 */
let http = require('http')
let server = http.createServer()
let fs = require('fs')
server.on('request', (Request, Response) => {
  console.log('请求路径' + Request.url)
  let url = Request.url
  if(url === '/' || url === '/index.html') {
    fs.readFile('./www/index.html', (error, data) => {
      if(error) {
        Response.setHeader('content-type', 'text/plain; charset=utf-8;')
        return Response.end('网页打开失败')
      }
      return Response.end(data)
    })
  }else if(url === '/a.txt') {
    fs.readFile('./www/a.txt', (error, data) => {
      Response.setHeader('content-type', 'text/plain; charset=utf-8;')
      if(error) {
        return Response.end('网页打开失败')
      }
      return Response.end(data)
    })
  }else if(url === '/login/login.html') {
    fs.readFile('./www/login/login.html', (error, data) => {
      if(error) {
        Response.setHeader('content-type', 'text/plain; charset=utf-8;')
        return Response.end('网页打开失败')
      }
      return Response.end(data)
    })
  }else {
    return Response.end('404 Not Found!')
  }
})
server.listen(4000, (error) => {
  console.log('server running...')
})