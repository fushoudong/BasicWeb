const express = require('express')
const path = require('path')
const router = require('./routers/index')

const app = express()

app.use('./public/', express.static(path.join(__dirname, '/public/')))

app.use(router)

app.listen(4000, (error) => {
  console.log('server running...')
})