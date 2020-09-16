<template>
  <div>
    <h1>这是Main</h1>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        num: "456.11"
      }
    },
    created() {
      console.log(this.setData(this.num))
    },
    methods: {
      setData(num) {
        let str = num.toString().split('.')[0]
        let point = num.toString().split('.')[1]
        let arr = str.split("").reverse()
        const newArr = arr.map((item, index) => {
          if(index % 3 == 2) {
            return "," + item 
          }else {
            return item
          }
        })
        if(newArr.join("").length % 4 == 0) {
          return newArr.reverse().join("").substring(1) + '.' + point
        }
        return newArr.reverse().join("") + '.' + point
      }
    }
  }
</script>

<style scoped>

</style>