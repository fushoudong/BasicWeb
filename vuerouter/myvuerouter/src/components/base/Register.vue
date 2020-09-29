<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        msg: 'Register Page'
      }
    },
    created() {
      console.log('注册被创建')
    }
  }
</script>

<style scoped>

</style>