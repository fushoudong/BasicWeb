/**
 * 模板引擎使用demo
 * 渲染temp.html
 */
let http = require('http')
let fs = require('fs')
let server = http.createServer()
let template = require('art-template')
server.on('request', (Request, Response) => {
  fs.readFile('./temp.html', (error, data) => {
    if(error) {
      return Response.end('404 Not Found!')
    }else {
      data = template.render(data.toString(), {
        title: '标题',
        name: 'feifei',
        age: 22,
        province: '山西省',
        hobbies: [
          '唱歌',
          '运动',
          '看书'
        ]
      })
      return Response.end(data)
    }
  })
})
server.listen(4000, (error) => {
  console.log('server running')
})