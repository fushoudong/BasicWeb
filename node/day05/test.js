// console.log(v1);
// var v1 = 100;
// function foo() {
//     console.log(v1);
//     var v1 = 200;
//     console.log(v1);
// }
// foo();
// console.log(v1);
// 等价于
var v1;
console.log(v1);
v1 = 100;
function foo() {
  var v1;
  console.log(v1); // 下面的var 会在函数作用域中进行声明提前，想当如先定义 var v1，再进行 console
  v1 = 200;
  console.log(v1);
}
foo();
console.log(v1);
