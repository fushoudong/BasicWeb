let fs = require("fs");
let jsonData = {}
readFile("./data/users.json")
.then(data => {
  jsonData.users = JSON.parse(data.toString()).users
  return readFile('./data/jobs.json') // 注意此处的return
}, error => {
})
.then(data => {
  jsonData.jobs = JSON.parse(data.toString()).jobs
  console.log(jsonData.jobs)
}, error => {

})
function readFile(fpath) {
  return new Promise((resolve, reject) => {
    fs.readFile(fpath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  })
}
