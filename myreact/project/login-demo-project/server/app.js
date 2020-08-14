const express = require('express')
const app  = express()
const register = require('./routers/register')
const bodyParser = require('body-parser')

// 用来处理post请求数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(register)

app.listen(3030, (error) => {
  error?
  console.log(error):
  console.log("server running...")
})