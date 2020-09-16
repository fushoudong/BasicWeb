// 导入css
require('./css/mainCss.css')
require('./less/less.less')
// const add = require('./js/myModules')
// const mul = require('./js/myModules')
import {add, mul} from './js/exports'
console.log(add(10, 20))
console.log(mul(10, 20))
import {name, age, height} from './js/exports'
console.log({
  name,
  age,
  height
})
setTimeout(() => {
  console.log('我这里使用了ES6语法')
}, 1000)