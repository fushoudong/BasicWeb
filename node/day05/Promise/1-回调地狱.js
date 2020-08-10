let fs = require("fs");
let data = {}
readFile("./data/users.json", (error, user) => {
  if (error) {
    console.log('数据获取失败', error)
  } else {
    data.users = JSON.parse(user.toString()).users
    readFile('./data/jobs.json', (error, jobs) => {
      if(error) {
        console.log('数据获取失败') 
      }else {
        data.jobs = JSON.parse(jobs.toString()).jobs
        console.log(data.jobs)
      }
    })
  }
});

function readFile(fpath, callback) {
  fs.readFile(fpath, (error, data) => {
    if (error) {
      return callback(error);
    } else {
      callback(null, data);
    }
  });
}
