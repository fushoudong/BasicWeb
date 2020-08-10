const express = require('express')
const app = express()
// 省略第一个参数可以直接使用/访问文件夹的文件
app.use('/public/', express.static('./public/'))
app.get('/', (req, res) => {
  res.send('这是主页')
}).get('/lover', (req, res) => {
  res.send('她叫斐斐')
}).get('/login', (req, res) => {
  res.send('login')
})
app.listen(3000, (err) => {
  console.log('server running...')
})