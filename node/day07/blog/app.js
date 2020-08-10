const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const session_router = require("./routes/session");
// 引入session 
const session = require('express-session')
// 配置bodyParser获取post参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/public/", express.static(path.join(__dirname, "./public/")));
app.use(
  "/node_modules/",
  express.static(path.join(__dirname, "./node_modules/"))
);

app.engine("html", require("express-art-template"));

app.use(
  session({
    // 一个 String 类型的字符串，作为服务器端生成 session 的签名。
    secret: "keyboard cat",
    resave: true,
    // 强制将未初始化的 session 存储。当新建了一个 session 且未设定属性或值时，它就处于未初始化状态
    saveUninitialized: true,
  })
);
app.use(session_router);

// 设置错误处理
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({
    respCode: "1000100",
    msg: error.message,
  });
});

app.listen(5000, (error) => {
  console.log("server running...");
});
