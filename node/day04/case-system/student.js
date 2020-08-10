/**
 * 封装一些操作处理的API，不关心业务
 * 负责数据的增删改查
 */

const fs = require('fs')
function getStudents(callback) {
  fs.readFile('./data/db.json', (error, data) => {
    if(error) {
      callback(error)
    }else {
      let students = JSON.parse(data.toString()).students
      callback(error, students)
    }
  })
}
exports.selectStudentById = function(id, callback) {
  getStudents((error, students) => {
    if(error) {
      callback(error) 
    }else {
      let student = students.find(item => {
        return item.id === parseInt(id)
      })
      callback(error, student)
    }
  }) 
}

//  获取所有学生列表
exports.select = function(callback) {
  getStudents((error, students) => {
    if(error) {
      callback(error) 
    }else {
      callback(error, students)
    }
  })
}

// 增加学生
exports.insert = function(student, callback) {
  getStudents((error, students) => {
    if(error) {
      callback(error)
    }else {
      let id = parseInt(students[students.length - 1].id) + 1
      student.id = id
      students.push(student)
      console.log(JSON.stringify({"students": students}))
      fs.writeFile('./data/db.json', JSON.stringify({"students": students}), error => {
        if(error) {
          callback(error)
        }else {
          callback(null)
        }
      })
    }
  })
}

// 修改学生
exports.update = function(stu, callback) {
  getStudents((error, students) => {
    if(error) return callback(error)
    let item = students.find(item => item.id === parseInt(stu.id))
    for(let key in item) {
      item[key] = stu[key]
    }
    item.id = parseInt(item.id)
    fs.writeFile('./data/db.json', JSON.stringify({"students": students}), error => {
      if(error) {
        callback(error)
      }else {
        callback(null)
      }
    })
  })
}

// 删除学生
exports.delete = function(id, callback) {
  getStudents((error, students) => {
    if(error) return callback(error)
    let index = students.findIndex(item => {return item.id === parseInt(id)})
    students.splice(index, 1)
    fs.writeFile('./data/db.json', JSON.stringify({"students": students}), error => {
      if(error) {
        callback(error)
      }else {
        callback(null)
      }
    })
  })
}
