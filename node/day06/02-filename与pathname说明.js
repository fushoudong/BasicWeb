const fs = require('fs')
fs.readFile('./a.json', (error, data) => {
  if(error) return console.log(error)
  console.log(data.toString())
})