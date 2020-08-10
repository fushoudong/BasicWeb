// 引入包
const express = require('express')
// 创建服务器应用程序
const app = express()
// 读取文件的核心模块
const fs = require('fs')
// 模板渲染
const artTemplate = require('art-template')
// 初始化数据
var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]
// 公开指定目录
app.use('/public/', express.static('./public/'))

app.get('/', (Request, Response) => {
  fs.readFile('./views/index.html', (err, data) => {
    if(err) {
      return Response.send('404 Not Found!')
    }else {
      data = artTemplate.render(data.toString(), { // 此处使用render函数进行渲染
        comments
      })
      Response.send(data)
    }
  })
})
app.get('/post', (Request, Response) => {
  fs.readFile('./views/post.html', (error, data) => {
    if(error) {
      return Response.send('404 Not Found!')
    }else {
      Response.send(data.toString())
    }
  })
})
app.get('/pinglun', (Request, Response) => {
  console.log(Request.query)
  let obj = {}
  obj.name = Request.query.name
  obj.message = Request.query.message
  obj.dateTime = '2020-07-31'
  comments.push(obj)
  // 进行重定向，使用redirect方法，如果重定向的状态码不传递的话，默认设置为302
  Response.redirect(302,'/')
})
app.get('/about', (Request, Response) => {
  Response.send('你好，我是express!')
})
app.listen(3000, () => {
  console.log('server running....')
})