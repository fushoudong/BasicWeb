<template>
  <div id="app">
    <div class="vuex">
      <p>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="asyncDone">async</button>
      </p>
      <p>
        {{$store.state.count}}
      </p>
      <ul>
        <li v-for="(item, index) in $store.getters.getPerson" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <router-link to="/home" tag="button" active-class="active" replace>打开首页</router-link>
      <router-link to="/register" tag="button" active-class="active1">打开注册</router-link>
      <router-link to="/connect" tag="span">联系我们</router-link>
      <!-- <button @click="toHome">点我进入首页</button> -->
      <router-link to="/param/12/lisi">param1</router-link>
      <router-link to="/param/21/laowang">param2</router-link>
      <button @click="toQuery(0)">query1</button>
      <button @click="toQuery(1)">query2</button>
    </div>
    <div class="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="views">
      <router-view class="view" name="a"></router-view>
      <router-view class="view" name="b"></router-view>
      <router-view class="view" name="c"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: ['斐斐','feifei'],
      age: '22',
      gender: ['女', 'girl']
    }
  },
  methods: {
    toHome() {
      this.$router.replace({
        // path: '/home'
        name: 'Home'
      })
    },
    toQuery(index) {
      this.$router.push({
        path: '/query',
        query: {
          index,
          name: this.name[index],
          age: this.age,
          gender: this.gender[index]
        }
      })
    },
    increase() {
      this.$store.commit('increase', {
        count: 10
      })
    },
    decrease() {
      this.$store.commit('decrease', {
        count: 5
      })
    },
    asyncDone() {
      this.$store.dispatch('timeDone', {
        count: 100
      }).then(data => {
        console.log(data)
      })
    }
  },
}
</script>

<style scoped>
  .content {
    width: 100%;
    min-height: 400px;
    border: 1px solid #d3d3d3;
    margin-top: 10px;
    padding: 5px;
  }
  .active {
    color: red;
    font-style: italic;
  }
  .myActive {
    color: blue;
    margin-left: 1px;
    cursor: pointer;
  }
  .active1 {
    font-weight: bold;
  }
  .views {
    display: flex;
    justify-content: space-between;
    min-height: 250px;
  }
  .view {
    flex: 1;
    border: 1px solid gray;
    margin-right: 10px;
    
  }
  .vuex {
    padding-left: 20px;
    width: 100%;
    min-height: 100px;
    border: 1px solid black;
  }
</style>
