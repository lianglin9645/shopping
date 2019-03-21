<template>
  <div>
    <home-header></home-header>
    <home-navigation></home-navigation>
    <home-swiper></home-swiper>    
    <home-recommend :goods="goods"></home-recommend>
    <tabs></tabs>
  </div>  
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeNavigation from './components/Navigation'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import Tabs from "./../Tabs"
export default  {
  name:'Home',
  components:{
    HomeHeader,
    HomeNavigation,
    HomeSwiper,
    HomeRecommend,
    Tabs
  },
  data () {
    return {
      goods: []
    }
  },
  methods: {
    getGoodsInfo() {
      axios.get('/static/mock/goods.json')
        .then(this.handleGeGoodsInfoSucc)
    },
    handleGeGoodsInfoSucc(res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.goods = data.goods 
      }
    }
  },
  mounted () {
    this.getGoodsInfo()
  }
} 
</script>

<style>
    
</style>