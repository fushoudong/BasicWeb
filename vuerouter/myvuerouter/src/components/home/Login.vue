<template>
  <div>
    {{msg}}
    <p v-for="(item, index) in params" :key="index">
      {{item}}
    </p>
    <p>
      {{$store.state.count}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: '这是登录界面',
        params: {

        }
      }
    },
    created() {
      this.params = this.$route.params
      console.log(this.params)
    }
  }
</script>

<style>

</style>