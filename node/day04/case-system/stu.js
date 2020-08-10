const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stu')
const schema = new mongoose.Schema({
    id: String,
    name: String,
    gender: String,
    age: Number,
    hobbies: String
})
const Stu = mongoose.model('Stu', schema)
function getStudents(callback) {
  Stu.find((error, data) => {
    if(error) {
      callback(error)
    }else {
      callback(error, data)
    }
  })
}
exports.selectStudentById = function(id, callback) {
  Stu.findOne({id : id},(error, data) => {
    if(error) {
      return callback(error)
    }else {
      console.log(data)
      return callback(error, data)
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
      students.forEach(item => {
        let stu = new Stu(item)
        console.log(stu)
        stu.save().then((data, error) => {
          if(error) {
            return callback(error)
          }
          return callback(null, data)
        })
      })
    }
  })
}

// 修改学生
exports.update = function(stu, callback) {
  getStudents((error, students) => {
    if(error) return callback(error)
    return Stu.update({
      id: stu.id
    },{
      name: stu.name,
      age: stu.age,
      gender: stu.gender,
      hobbies: stu.hobbies
    }, (error, data) => {
      if(error) return callback(error)
      return callback(null, data)
    })
  })
}

// 删除学生
exports.delete = function(id, callback) {
  Stu.remove({id: id},(error, data) => {
    if(error) return callback(error)
    return callback(null, data)
  })
}
