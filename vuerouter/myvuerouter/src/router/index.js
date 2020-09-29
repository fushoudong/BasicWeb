import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import A from '@/components/routerview/A'
import B from '@/components/routerview/B'
import C from '@/components/routerview/C'
import Register from '@/components/base/Register'
import ConnectUs from '@/components/base/Connect'
import Params from '@/components/params/Params'
import Query from '@/components/params/Query'

// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    },
    Home,
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/connect',
      name: 'Connect',
      component: ConnectUs,
      meta: {
        title: '联系我们'
      }
    },
    {
      path: '/param/:id/:name',
      name: 'Param',
      components: {
        default: Params,
        a: A,
        b: B,
        c: C
      },
      meta: {
        title: '参数'
      }
    },
    {
      path: '/query',
      name: 'Query',
      component: Query,
      meta: {
        title: '查询'
      }
    }
  ],
  // mode: 'history',
  linkActiveClass: 'myActive'
})

// 路由跳转前守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

// 路由跳转后守卫
router.afterEach((to, from) => {
  // console.log('路由跳转后', to, from)
})

export default router