/**
 * 存储用户数据
 * 是mongodb的实体类
 * 定义了连接数据库
 * 数据实体
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog')
const schame = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_time: {
    /**
     * 注意此处不可以写 Date.now()，它会立刻执行
     * 如果传递的参数中不含有create_time，则会去调用Date.now方法，将其返回值作为默认值
     */
    type: Date,
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar-default.png'
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },
  birthday: {
    type: Date
  },
  status: {
    type: Number,
    enum: [0, 1, 2],
    default: 0
    /**
     * 0: 无权限限制
     * 1: 不可以评论
     * 2: 不可以登录
     */
  }
})