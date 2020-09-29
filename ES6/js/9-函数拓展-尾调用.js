console.time('timer')
factorial(20)
console.timeEnd('timer')

function factorial(n) {
  if(n === 1) return 1
  return n * factorial(n-1)
}
// function factorial(n, total) {
//   if(n === 1) return total
//   return factorial(n - 1, n * total)
// }
