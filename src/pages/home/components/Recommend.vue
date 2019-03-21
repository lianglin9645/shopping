<template>
  <div>
    <div class="car">
      <img class="car-img" src="//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp">
      <img class="car-img" src="//i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp">
      <img class="car-img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?thumb=1&w=144&h=152">
      <img class="car-img" src="//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp">
      <img class="car-img" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152">
    </div>
      <div class="recommend-box" v-for="(item, index) of itemtopList">
        <div class="recommend">
          <img class="recommend-img" :src="item.topUrl">
        </div>
        <router-link 
          tag="div" 
          class="recommend-left" 
          v-for="(item, index) of goods" 
          :key="item.id"
          :to="{path:'/detail/' + item.id,params:{id:item.id}}"
        >
          <img class="recommend-imgs" :src="item.imgUrl">
          <p class="title">{{item.title}}</p>
          <p class="brief">{{item.brief}}</p>
          <p class="price">{{item.price}}</p>
        </router-link>
      </div>
    <div style="height:12rem"></div>
  </div> 
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
      goods: Array
    },
    data () {
      return {
        itemtopList: [{
          topUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b5f5e5856381c53edcbf2718bd7080e0.jpg?thumb=1&w=720&h=280'
        }, {
          topUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39a9ed0be3f2a43ec6d85527bc5d8227.jpg?thumb=1&w=720&h=280'
        }]
      }
    }
}
</script>

<style lang="stylus" scoped>
  .recommend-box
    height: auto
    .recommend-img
      width:100%
    .recommend-left
      float: left  
      width: 50%
      padding: 0 .1rem 0 0 
      box-sizing: border-box
      margin-bottom: .24rem
      .recommend-imgs
        width: 100%
      p
        padding: 0 .2rem
      .brief
        margin-top: .06rem
        font-size: .32rem
        line-height: .38rem
        font-size: .2rem
        color: rgba(0,0,0,.54)
      .title
        padding-top: 0.2rem
        font-size: .36rem
        color: rgba(0,0,0,.87)
      .price
        font-size: .38rem
        color: #ea625b
        padding-top: 0.05rem
  .car
    width: 100%
    .car-img
      width: 20%
      border-box: box-sizing
      float: left

</style>