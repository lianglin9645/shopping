import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Type from '@/pages/type/Type'
import Buy from '@/pages/buy/Buy'
import Myself from '@/pages/myself/Myself'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/myself',
      name: 'Myself',
      component: Myself
    }
  ]
})
