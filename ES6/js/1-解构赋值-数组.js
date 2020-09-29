let arr = [1, 2, 3, 4, 5]
const [a, b, c, ...d] = arr
let arr1 = [1, [2, 3], [4, [5, [6, 7]]]]
const [a1, a2, a3, a4] = arr1

let [foo = 'feifei', baz] = [undefined, 'woaifeifei']
// console.log(foo, baz)
// let [x = 1, y = x] = [2] 
// let [x = 1, y = x] = [2, 8] 
// let [x = 1, y = x] = [] 
let [x = y, y = 1] = [] 

console.log(x, y)