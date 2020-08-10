// 实现简单的注册
/**
 * 存在：返回已存在
 * 不存在：插入到数据库
 */
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  email: String,
});
const User = mongoose.model("User", dataSchema);
let obj = new User({
  name: "52斐斐1314",
  password: "521",
  email: "aifeier",
});
User.findOne({ name: obj.name }, (error, data) => {
  return new Promise((resolve, reject) => {
    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
})
  .then((data) => {
    if (data) {
      return console.log("用户已存在");
    } else {
      return obj.save();
    }
  })
  .then((data, error) => {
    if (data) {
      console.log("保存成功", data);
    } else {
      console.log("保存失败", error);
    }
  });
