import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Type from '@/pages/type/Type'
import Buy from '@/pages/buy/Buy'
import Myself from '@/pages/myself/Myself'
import Detail from '@/pages/detail/Detail'

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
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
