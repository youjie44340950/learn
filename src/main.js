// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import cookie from 'vue-cookie'

axios.defaults.headers.common['token'] = cookie.get('token')
Vue.prototype.$cookie = cookie
Vue.prototype.$qs = qs
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://http://47.104.150.14:8888' // 关键步骤–填写后台请求统一的地址

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) { // 判断该路由是否需要登录权限
    if (localStorage.getItem('userInfo')) { // 判断当前用户的登录信息loginInfo是否存在
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})
