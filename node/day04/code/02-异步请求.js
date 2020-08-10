// function fn() {
//   setTimeout(function() {
//     data = '123'
//     return data
//   }, 1000) 
// }
// let data = "默认数据"
// function fn() {
//   setTimeout(() =>{
//     data = 1234
//     return data
//   }, 1000)
// }
// console.log(fn())
function fn(callback) {
  setTimeout(() => {
    data = 123
    callback(data)
  }, 1000)
}
fn((data) => {
  console.log(data)
})