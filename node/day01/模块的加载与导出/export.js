let foo = "我爱斐斐"
function toString() {
  console.log('函数', this.foo)
}
exports.foo = foo
exports.toString = toString