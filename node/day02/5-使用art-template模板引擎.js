/**
 * 使用art-template进行模板引擎渲染
 */
let http = require('http')
let fs = require('fs')
let server = http.createServer()
let template = require('art-template')
let wwwPath = './www'
let content = ''
fs.readdir(wwwPath, (error, files) => {
  if(error) {
    console.log('文件夹路径错误')
  }else {
    fs.readFile('./artTemplate.html', (error, data) => {
      if(error) {
        Response.setHeader('content-type', 'text/plain; charset=utf-8;')
        return Response.end('页面访问出错')
      }else {
        content = template.render(data.toString(), {
          title: '模板引擎',
          lists: files
        })
      }
    })
  }
})
server.on('request', (Request, Response) => {
  Response.end(content)
})

server.listen(3000, (error) => {
  console.log('server running...')
})