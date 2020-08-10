const express = require('express')
const app = express()
let fs = require('fs')
app.get('/', (req, res) => {
  fs.readFile('./data.txt', (err, data) => {
    if(err) {
      return res.send('404 Not Found')
    }
    let induce = ""
    let method = ""
    let reason = ""
    induce = data.toString().match(/(?<=是否诱导：).+(?=A{3})/)
    method = data.toString().match(/(?<=司机怎么诱导了：).+(?=B{3})/)
    reason = data.toString().match(/(?<=司机描述拒载的原因：).+(?=F{3})/)
    console.log(induce.toString(), method.toString(), reason.toString())
    res.send(data.toString().replace(/"_"/g, '\",\"'))
  })
}).listen(3000, (err) => {
  console.log('server running...')
})