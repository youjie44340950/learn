import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Registered from '@/components/Registered'
import ThreeLogin from '@/components/ThreeLogin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
      meta: {
        requireLogin: true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    },
    {
      path: '/threeLogin',
      name: 'threeLogin',
      component: ThreeLogin
    }
  ]
})
