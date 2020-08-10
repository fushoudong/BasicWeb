// 1. 导入http模块
let http = require('http')

// 2. 使用http.createServer创建服务，返回一个服务对象
let server = http.createServer()

// 3. 接收响应
server.on('request', function(Requset, Response) {
  console.log('接受请求')
  console.log('请求字段' + Requset.url)
  Response.setHeader('content-type', 'text/html; charset=utf-8')
  Response.write('我爱斐斐')
  Response.write(Requset.url)
  Response.write('<h1>一生一世</h1>')
  Response.end()
})

// 4. 绑定端口号，启动服务器
server.listen(3000,function() {
  console.log('服务器成功启动，可以通过http://127.0.0.1:3000/进行访问')
})