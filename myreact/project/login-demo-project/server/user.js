const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/session")
 
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
const User = mongoose.model('User', schema)
function getUserById(name, callback) {
  User.findOne({name: name},(error, data) => {
    if(error) return callback(error)
    else {
      return callback(null,data)
    }
  })
}

exports.addUser = ((user, callback) => {
  getUserById(user.name, (error, data) => {
    console.log(error, data, 'addUser')
    if(data) return callback(error)
    else {
      user = new User(user)
      user.save().then((data, error) => {
        if(error) {
          callback(error)
        }else {
          callback(null, data)
        }
      })
    }
  })
})

exports.login = ((user, callback) => {
  getUserById(user.account, (error, data) => {
    console.log(user, error, data, "exports.login")
    if(!data) return callback(error)
    return callback(null, data)
  })
})