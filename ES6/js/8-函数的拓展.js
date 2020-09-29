// console.log((function(a){}).length)
// console.log((function(a, b, c, d = 5){}).length)
// console.log((function(a = 5, b, c, d){}).length)
// console.log((function(a, b = 5, c, d){}).length)
// const x = 4
// function f(x, y = x) {
//   console.log(x + y)
// }
// f(x)
// let foo = "outer"
// function bar(fun = () => foo) {
//   let foo = "inner"
//   console.log(fun())
// }
// bar()

// var x = 1
// function foo(x, y = function() {console.log(x);  x = 2 }) {
//   /**
//    * 函数作用域定义的变量x
//    * 不会污染全局作用域的x
//    * 执行y前，x被赋值3
//    * y初始化作用域中，x为当前作用域，不会修改全局
//    */
//   var x = 3
//   y()
//   console.log(x)
// }
// foo()
// console.log(x) // 1
// function add(...values) {
//   console.log(values)
//   return values.reduce((prev, cur) => {
//     return prev + cur
//   }, 0)
// }
// console.log(add(1, 2, 3, 4))

/**
 *  箭头函数
 */ 
// 返回对象
// const f = (id, name) => ({id, name})
// console.log(f('11', 'feifei'))
// // 结合解构赋值的使用
// const full = ({name, age}) => console.log(name, age)
// const person = {name: '斐斐', age: 22}
// full(person)
// var name = 'window'
// const say = () => console.log(this.name)
// const say1 = function() {console.log(this.name)}
// const obj = {
//   name: 'object',
//   say: () => console.log(this.name),
//   say1: function() {
//     console.log(this.name)
//   }
// }
// say()
// obj.say()
// say.call(obj)
// obj.say1()
// say1()
// function foo() {
//   setTimeout(() => {
//     console.log("id", this.id)
//   }, 1000)
// }
// let id = 21
// foo()
// foo.call({id: 22})

function foo () {
  return () => {
    return () => {
      return () => {
        console.log('id', this.id, this)
      }
    }
  }
}

foo()
foo.call({id: 12})
let f = foo.call({id: 12})
