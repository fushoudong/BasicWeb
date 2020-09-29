<template>
  <div>
    {{msg}}
    <p>
      <router-link to="/home/login/22/feifei" active-class="homeActive">Login</router-link>
      <router-link to="/home/forget" active-class="homeActive">Forget</router-link>
    </p>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Home Page',
        inPath: '/home/login'
      }
    },
    created() {
      console.log('首页被创建')
    },
    activated() {
     console.log('activated', this.inPath) 
     this.$router.push(this.inPath)
    },
    beforeRouteLeave (to, from, next) {
      this.inPath = this.$route.path
      next()
    }
  }
</script>

<style scoped>
  .homeActive {
    color: blue;
  }
</style>