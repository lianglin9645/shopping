// import Vue from 'vue'
// import Router from 'vue-router'


// Vue.use(Router)

export default [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home/Home'],resolve)
    },
    {
      path: '/type',
      name: 'Type',
      component: resolve => require(['@/pages/type/Type'],resolve)
    },
    {
      path: '/buy',
      name: 'Buy',
      component: resolve => require(['@/pages/buy/Buy'],resolve)
    },
    {
      path: '/myself',
      name: 'Myself',
      component: resolve => require(['@/pages/myself/Myself'],resolve)
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: resolve => require(['@/pages/detail/Detail'],resolve)
    },
    // 地址
    {
      path: '/address/',
      name: 'Address',
      component: resolve => require(['@/pages/address/Address'],resolve)
    },
     // 新增地址
     {
      path: '/UpDataAddress',
      name: 'UpDataAddress',
      component: resolve => require(['@/pages/address/UpDataAddress'],resolve)
    },
    // 结算
     {
      path: '/settle',
      name: 'Settle',
      component: resolve => require(['@/pages/pay/Settle'],resolve)
    },
    // 注册
     {
      path: '/register',
      name: 'Register',
      component: resolve => require(['@/pages/login/Register'],resolve)
    },
    // 登录
     {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/pages/login/Login'],resolve)
    },
    // 添加商品列表
     {
      path: '/addGoods',
      name: 'AddGoods',
      component: resolve => require(['@/pages/addMongo/addGoods'],resolve)
    },
    // 添加地址
     {
      path: '/addAddressMon',
      name: 'addAddressMon',
      component: resolve => require(['@/pages/addMongo/addAddressMon'],resolve)
    }
  ]
