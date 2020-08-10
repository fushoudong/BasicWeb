const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const md5 = require("blueimp-md5");
mongoose.connect("mongodb://localhost/blog");
// 首页
router.get("/", (req, res) => {
  const user = req.session.user
  console.log(user)
  res.render("index.html", {
    user: user
  });
});
// 登录
router.get("/login", (req, res) => {
  res.render("login.html", {
    title: '登录'
  });
});
router.post("/login", (req, res) => {
  let body = req.body;
  User.findOne({
    email: body.name
  }, (error, data, next) => {
    if(error) {
      return next(error)
    }
    if(data.password === md5(md5(body.password))) {
      req.session.user = data
      res.status(200).json({
        respCode: '0000',
        status: 0,
        msg: '登录成功'
      })
    }else {
      res.status(200).json({
        respCode: '0000',
        status: 1,
        msg: '账号不存在或密码错误'
      })
    }
  })
});
// 注册
router.get("/register", (req, res) => {
  res.render("register.html", { title: "注册" });
});
router.post("/register", (req, res) => {
  let body = req.body;
  // console.log(body)
  let user = new User();
  for (key in body) {
    user[key] = body[key];
  }
  user.password = md5(md5(user.password));
  // 检查用户是否存在
  User.findOne(
    {
      $or: [{ email: body.email }, { nickname: body.nickname }],
    },
    (error, data, next) => {
      if (error) return next(error);
      if (data) {
        console.log(data);
        res.status(200).json({
          respCode: "0000",
          status: 1,
          msg: "用户名或邮箱已存在",
        });
      } else {
        // 添加注册
        user.save().then((data, error, next) => {
          if (error) {
            return next(error);
          }
          res.status(200).json({
            respCode: "0000",
            msg: "注册成功",
          });
        });
      }
    }
  );
});

// 个人主页
router.get("/settings/profile", (req, res) => {
  const user = req.session.user
  res.render("settings/profile.html", {
    selectIndex: 1,
    user: user
  });
});
router.post("/settings/profile", (req, res) => {
  const body = req.body
  console.log(body)
  User.updateOne({
    _id: body._id
  },{
    nickname: body.nickname,
    bio: body.bio,
    gender: body.gender,
    last_modified_time: Date.now()
  }, (error, data, next) => {
    if(error) {
      return next(error)
    }
    console.log(data)
    if(data) {
      res.status(200).json({
        respCode: '0000',
        msg: '修改成功'
      })
    }
  })
});

// 设置
router.get("/settings/admin", (req, res) => {
  const user = req.session.user
  res.render("settings/admin.html", {
    selectIndex: 2,
    user: user
  });
});
router.post("/settings/admin", (req, res) => {
  const body = req.body
  console.log(body)
  User.updateOne({
    _id: body._id
  },{
    password: md5(md5(body.password))
  },(error, data, next) => {
    if(error) {
      return next(error)
    }else {
      res.status(200).json({
        respCode: '0000',
        msg: '修改成功'
      })
    }
  })
});

// 退出
router.get('/logout', (req, res) => {
  delete req.user
  res.redirect('/login')
})

// 设置密码等
module.exports = router;
