const add = require('./js/myModules')
const mul = require('./js/myModules')
// import {add, mul} from './js/exports'
console.log(add(10, 20))
console.log(mul(10, 20))
import {name, age, height} from './js/exports'
console.log({
  name,
  age,
  height
})