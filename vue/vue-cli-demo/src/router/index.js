import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Another from "../components/Another";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/another',
      name: 'Another',
      component: Another
    }
  ]
})
