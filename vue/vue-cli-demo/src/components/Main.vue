<template>
  <div>
<!--    <el-date-picker-->
<!--      v-model="date"-->
<!--      type="datetime"-->
<!--      value-format="timestamp"-->
<!--      @change="chooseDate">-->
<!--    </el-date-picker>-->
<!--    <el-row>-->
<!--      <el-tag type="primary">-->
<!--        {{count}}-->
<!--      </el-tag>-->
<!--      <el-button type="primary" @click="clickData" icon="el-icon-plus" size="small"></el-button>-->
<!--    </el-row>-->
<!--    <el-row>-->
      <el-tag
        type="success">
        {{$store.state.count}}
      </el-tag>
      <el-button
        type="warning"
        size="small"
        icon="el-icon-plus"
        plain
        @click="addCountStore">

      </el-button>
<!--      <el-tag>-->
<!--        {{$store.state.identify}}-->
<!--      </el-tag>-->
<!--      <el-button-->
<!--        size="small"-->
<!--        type="danger"-->
<!--        plain-->
<!--        @click="changeStatus">-->

<!--      </el-button>-->

<!--    </el-row>-->
<!--    <RouterLink to="/another">打开another</RouterLink>-->
<!--    <RouterView></RouterView>-->
    <el-button
      type="primary"
      icon="el-icon-setting"
      size="small"
      @click="doneTodos"
      plain>
      do
    </el-button>
    <el-button
      type="success"
      size="small"
      @click="sendRequest"
      plain>
      axios异步
    </el-button>
    <el-tag>
      {{$store.state.title? $store.state.title : 'loading' }}
    </el-tag>
    <el-row>
      <el-button type="info" plain size="small" @click="setPromise"></el-button>
    </el-row>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    name: "Main",
    data() {
      return {
        date: '',
        count: 0
      }
    },
    computed: {
      ...mapState({
        num1: state => state.num1,
        num2: state => state.num2,
        num3: state => state.num3
      }),
      ...mapGetters({
        list: 'doneTodos',
        doneLength: 'getDoneLength'
      })
    },
    methods: {
      // chooseDate(val) {
      //   console.log(new Date(this.date), val)
      // },
      clickData() {
        this.count ++
      },
      addCountStore() {
        // this.$store.commit('increase')
        this.$store.dispatch('increase')
      },
      changeStatus() {
        this.$store.commit('changeIdentify', '传递的参数')
      },
      doneTodos() {
        // console.log(this.$store.getters.doneTodos)
        console.log(this.list, this.doneLength)
      },
      sendRequest() {
        this.$store.dispatch('dealRequest')
        this.$store.dispatch('delayOperation', {
          data: 'dispatch'
        })
      },
      setPromise() {
        console.log('开始加载...')
        this.$store.dispatch('setPromise', {
          info: {
            msg: 'success',
            data: {
              name: '斐斐',
              age: 22,
              gender: '女'
            }
          }
        }).then(res => {
          console.log(res.info.data)
          console.log('加载完成----')
        })
      }
    },
    created() {
      // console.log('num1: ' + this.num1, 'num2: ' + this.num2, 'num3: ' + this.num3)
    }
  }
</script>

<style scoped>

</style>
