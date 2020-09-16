<template>
  <div class="el-container">
    {{count}}
  </div>
</template>

<script>
export default {
  name: "Another",
  data() {
    return {
      count: this.$store.state.count
    }
  }
}
</script>

<style scoped>

</style>
