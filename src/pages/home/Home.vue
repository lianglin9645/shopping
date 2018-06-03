<template>
  <div>
    <home-header></home-header>
    <home-navigation></home-navigation>
    <home-swiper></home-swiper>    
    <home-recommend></home-recommend>
  </div>  
</template>

<script>
import HomeHeader from './components/Header'
import HomeNavigation from './components/Navigation'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
export default  {
  name:'Home',
  components:{
    HomeHeader,
    HomeNavigation,
    HomeSwiper,
    HomeRecommend
  }
} 
</script>

<style>
    
</style>