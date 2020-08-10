const express = require('express')
const app = express()
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'))
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
app.get('/', (req, res) => {
  res.render('index.html', {
    comments
  })
}).get('/post', (req, res) => {
  res.render('post.html')
}).get('/pinglun', (req, res) => {
  console.log(req.query)
  let query = req.query
  query.dateTime = '2020-07-31'
  comments.push(query)
  res.redirect(302, '/')
})
app.listen(3000, err => {
  console.log('server running...')
})