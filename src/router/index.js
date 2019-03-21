import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Type from '@/pages/type/Type'
import Buy from '@/pages/buy/Buy'
import Myself from '@/pages/myself/Myself'
import Detail from '@/pages/detail/Detail'
import Address from '@/pages/address/Address'
import UpDataAddress from '@/pages/address/UpDataAddress'
import Settle from '@/pages/pay/Settle'


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
    },
    // 地址
    {
      path: '/address/',
      name: 'Address',
      component: Address
    },
     // 新增地址
     {
      path: '/UpDataAddress',
      name: 'UpDataAddress',
      component: UpDataAddress
    },
    // 结算
     {
      path: '/settle',
      name: 'Settle',
      component: Settle
    }
  ]
})
