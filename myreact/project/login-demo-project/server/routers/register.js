const express = require('express')
const register = express.Router()

const user = require("../user")

register.post("/api/register",(req, res) => {
  const form = req.query
  if(form.name === "") {
    res.status(202).json({
      exception: true,
      status: 0,
      message: '请填写用户名'
    })
  }else if(form.email === "") {
    res.status(202).json({
      exception: true,
      status: 1,
      message: '请填写邮箱'
    })
  }else if(form.password === "") {
    res.status(202).json({
      exception: true,
      status: 2,
      message: '请填写密码'
    })
  }else if(form.password !== form.confirmInfo) {
    res.status(202).json({
      exception: true,
      status: 3,
      message: '请检查密码是否一致'
    })
  }else {
    user.addUser(form, (error, data) => {
      console.log(error, data)
      if(error) {
        res.status(500).json({
          msg:'出现错误',
          status: -1
        })
      }else {
        if(!data) {
          return res.status(202).json({
            msg:'当前用户已注册',
            status: 1
          })
        }
        return res.status(200).json({
          msg: '注册成功',
          code: "0000",
          status: 0
        })
      }
    })
   
  }
})

register.post('/api/login', (req, res) => {
  const form = req.query
  if(form.account === "") {
    res.status(202).json({
      exception: true,
      status: 0,
      message: '请填写用户名'
    })
  }else if(form.password === "") {
    res.status(202).json({
      exception: true,
      status: 1,
      message: '请填写密码'
    })
  }else {
    user.login(form, (error, data) => {
      if(error) return res.status(500).json({
        msg: '获取失败'
      })
      if(!data) {
        return res.status(200).json({
          status: -1,
          msg: '当前账号不存在'
        })
      }else if(data.password !== form.password){
        return res.status(200).json({
          status: -1,
          msg: '账号密码不匹配'
        })
      }
      return res.status(200).json({
        msg: '登录成功',
        respCode: '0000',
        status: 1
      })
    })
  }
})

module.exports =  register
