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
      <div class="recommend-left" v-for="(item, index) of itemList" :key="item.id">
        <img class="recommend-imgs" :src="item.imgUrl">
        <p class="title">{{item.title}}</p>
        <p class="brief">{{item.brief}}</p>
        <p class="price">{{item.price}}</p>
      </div>
    </div>
    <div style="height:12rem"></div>
  </div> 
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
      return {
        itemList: [{
          id: '0001',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0bd24d4f71813791c2987e4bf41696d.jpg?thumb=1&w=360&h=360',
          title:'红米5A 轻巧长续航',
          brief: '高通骁龙处理器',
          price: '599'
        }, {
          id: '0002',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8612f157af2c116b7e3fc47356cdb7be.jpg?thumb=1&w=360&h=360',
          title:'红米自拍手机S2',
          brief: '1600万像素自拍手机',
          price: '599'
        }, {
          id: '0003',
          imgUrl: '//i8.mifile.cn/v1/a1/11a2b2b9-8deb-5177-ac51-eb9c07b03c31!360x360.webp',
          title:'红米5',
          brief: '12MP旗舰相机，骁龙处理器',
          price: '599'
        }, {
          id: '0004',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg?thumb=1&w=360&h=360',
          title:'小米MIX 2',
          brief: '5.99"大屏，4轴光学防抖',
          price: '599'
        }],
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