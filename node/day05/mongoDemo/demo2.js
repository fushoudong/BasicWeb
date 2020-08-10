const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:　true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})
let User = mongoose.model('User', userSchema)
const zs = new User({
  name: 'zs',
  password: '12321',
  email: 'woaifeifei.@163.com'
})
// 保存数据
// zs.save().then((data, error) => {
//   if(error) {
//     return console.log('保存失败', error)
//   }
//   console.log('保存成功')
// })
User.update({
  name: 'zs'
},{
  name: '斐斐'
}, (error, data) => {
  if(error) {
    console.log('修改失败')
  }else {
    console.log('修改成功')
  }
})
User.find((error, data) => {
  if(error) {
    return console.log('查询失败', error)
  }
  console.log('查询成功')
  console.log(data)
})
// User.remove({
//   name: 'zs'
// }, (error, data) => {
//   if(error) {
//     console.log('删除失败')
//   }else {
//     console.log('删除成功')
//   }
// })