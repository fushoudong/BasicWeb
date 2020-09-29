<template>
  <div>
    <p v-for="(key, value) in object" :key="value">
      {{key}} -- {{value}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Param',
    data() {
      return {
        object: {}
      }
    },
    created() {
      console.log(this.$route.params)
      this.object = this.$route.params
    },
    methods: {

    },
    watch: {
      '$route'(to, from) {
        console.log('路由变化', from.fullPath, to.fullPath)
        this.object = this.$route.params
      }
    }
  }
</script>

<style>

</style>