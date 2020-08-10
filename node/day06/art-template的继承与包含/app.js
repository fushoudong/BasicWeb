const express = require('express')
const path = require('path')
const { send } = require('process')
const app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))

app.get('/', function(req, res) {
  res.render('index.html', {
    name: '測試'
  })
  // res.send('ok')
})
app.listen(3000, (error) => {
  console.log('server running...')
})