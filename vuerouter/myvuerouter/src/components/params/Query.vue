<template>
  <div>
    <p v-for="(item,index) in query" :key="index">
      {{index}} -- {{item}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Query',
    data() {
      return {
        query: {

        }
      }
    },
    created() {
      this.query = this.$route.query
      console.log(this.query)
    },
    watch: {
      '$route'(to, from) {
        this.query = to.query
      }
    }
  }
</script>

<style>

</style>