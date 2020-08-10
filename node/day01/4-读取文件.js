let fs = require('fs')
fs.readFile('./file/love.txt', (error, data) => {
  if(data) {
    console.log(data.toString())
  }else {
    console.log(error)
  }
})