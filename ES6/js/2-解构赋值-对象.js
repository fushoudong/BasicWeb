let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
let { baz } = { foo: 'aaa', bar: 'bbb' };
// 变量名与属性值不一致
let { foo: baf } = {foo: 'aifeifei'}
const { log } = console
// log({
//   foo, bar, baz
// })
// log({ baf })

const {p, p: [x, {y} ]} = {p: ['Hello', { y: 'World' }]};
// log({x, y, p})

// 获取继承属性
const obj1 = {}
const obj2 = {foo: 'bar'}
Object.setPrototypeOf(obj1, obj2)
const {foo: data} = obj1
console.log(data)

// 对数组进行对象属性的解构赋值
const arr = [1, 2, 3, 4]
const {0: first, [arr.length - 1]: last} = arr
log({
  first, last
})