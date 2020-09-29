<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <select v-model="flag" @change="handleSelectChange">
        <option :value="true">显示</option>
        <option :value="false">不显示</option>
      </select>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data() {
      return {
        flag: true
      }
    },
    methods: {
      handleSelectChange(el) {
        const {value} = el.target
        this.$store.commit('changeFlag', {
          flag: (value === "true")
        })
        localStorage.setItem('flag', value)
      },
      initFlag() {
        const flag = localStorage.getItem('flag')
        console.log(flag)
        this.flag = flag === "true"
        this.$store.commit('changeFlag', {
          flag: (flag === "true")
        })
      }
    },
    created() {
      const list = []
      for(let i = 0; i< 4; i++) {
        list.push({
          caseId: i,
          number: i * i
        })
      }
      this.initFlag()
      axios({
        url: 'http://123.207.32.32:8000/home/data',
        method: 'POST', // 默认为GET
        type: 'JSON',
        params: {
          dto: list
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
</script>
<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
