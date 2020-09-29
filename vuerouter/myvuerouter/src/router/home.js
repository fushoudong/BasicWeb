import Home from '@/components/base/Home'
import Login from '@/components/home/Login'
import Forget from '@/components/home/Forget'

export default {
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    title: '首页'
  },
  children: [
    {
      parent: 'Home',
      path: 'login/:id/:name',
      name: 'Login',
      component: Login
    },
    {
      parent: 'Home',
      path: 'forget',
      name: 'Forget',
      component: Forget
    }
  ]
}