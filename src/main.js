// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios'
import store from './store/index.js'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import { Switch, NumberKeyboard } from 'vant';
import 'vant/lib/switch/style';
import 'vant/lib/number-keyboard/style';
Vue.use(VueAwesomeSwiper)
Vue.use(Switch).use(NumberKeyboard);
Vue.config.productionTip = false

// var instance = Axios.create({
// });

// instance.defaults.headers.common["Authorization"] = sessionStorage.getItem('token');

// http request 拦截器
Axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) { // 若存在token，则每个Http Header都加上token
      config.headers.Authorization = `${sessionStorage.getItem('token')}`
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  })

// http response 拦截器
Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 (未授权) 清除 token 并跳转到登录页面
          sessionStorage.removeItem('token')
          router.replace({
            path: 'login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
