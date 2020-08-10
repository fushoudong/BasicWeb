let http= require('http')
let server = http.createServer()
server.on('request', (Request, Response) => {
  let product
  if(Request.url === '/products') {
    product = [
      {
        name: '斐斐',
        age: 22,
        gender: '女'
      },
      {
        name: 'dd',
        age: 23,
        gender: '男'
      }
    ]
  }else {
    product = "404 Not Found"
  }
  Response.setHeader('content-type', 'text/html; charset=utf-8')
  Response.end(JSON.stringify(product))
})
server.listen(2000, () => {
  console.log('服务器成功启动')
})