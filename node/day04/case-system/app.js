const express = require('express')
const app = express()
const router = require("./router")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'))
// 使用配置的路由
app.use(router)
app.listen(3000, err => {
  console.log('server running...')
}) 