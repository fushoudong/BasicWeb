// 交换两个数字
function swap(x = 1, y = 2) {
  [x, y] = [y, x]
  return {x, y}
}
console.log(swap(12, 21))

// 从函数返回值中提取多个值
function example() {
  return [
    1,
    3,
    {
      foo: 'baz',
      bar: 'fii'
    }
  ]
}
const [a, b, {foo, bar}] = example()
console.log({a, b,foo, bar})

// 函数参数的定义

// 提取json参数
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
const {id, data, data: [a1, b1], status} = jsonData
console.log({
  data,
  a1,
  b1,
  status,
  id
})

// 遍历map
const map = new Map()
map.set('first', 'hello')
map.set('second', 'world')
for(let [key, value] of map) {
  console.log({key, value})
}
console.log(map)