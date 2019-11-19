import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    // store.getters.token == !("")
      // 判断是否登录
    //   if (to.name != 'login' && (!store.getters.token || store.getters.token === null)) return next({name: 'login'});
  
      next();
  });


export default router;