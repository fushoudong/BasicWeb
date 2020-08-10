// 作为路由文件，处理相关的请求
const fs = require('fs')
module.exports = function(app) {
  app.get('/', (req, res) => {
    fs.readFile('./data/db.json', (error, data) => {
      data = data.toString()
      let students = JSON.parse(data).students
      if(error) {
        return res.send('404 Not Found')
      }else {
        res.render('index.html', {
          students
        })
      }
    })
  })
}