<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper' ,
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 2000,
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6503426aa32ed960b51475585013208.jpg?thumb=1&w=720&h=360'
      }, {
        id: '0002',
        imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26ec2a3acab5a8ac5a17ae63b027fa49.jpg?thumb=1&w=720&h=360'
      }, {
        id: '0003',
        imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360'
      }, {
        id: '0004',
        imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3ac01d8f272100aa9b2d65c6a92ca5e7.jpg?thumb=1&w=720&h=360 '
      }]
    }
  },
   
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet
    background: #fff
  .wrapper
    width: 100%
    height: 0
    overflow:hidden
    background: #eee
    padding-bottom: 50%
    .swiper-img
      width: 100%
</style>