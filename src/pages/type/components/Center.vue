<template>
  <div class="center-box" ref="wrapper">
    <div>
    <div class="center-list">
      <!-- this is centerthis is centerthis is centerthis is center -->
      <div class="center-main" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="center-box-img">
          <a>
            <img class="center-pic" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/711275806886438be20e33ec943a904a.jpg?thumb=1&w=500&h=200">
          </a>
        </div>
        <div class="center-title">
            <span>{{key}}</span>
        </div>
        <div class="center-goods">
          <div class="goods-box">
            <div class="product" v-for="innerItem of item" >
              <div class="box-imgsize">
                <img class="product-img" :src="innerItem.imgUrl">
              </div>
              <span>{{innerItem.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'TypeCenter',
  props: {
    cities: Object,
    letter: String
  },
  data () {
    return {
      
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if(this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .center-box
    position: absolute
    left: 1.52rem
    right: 0
    top:49px
    bottom: 52px
    padding: 0 .32rem
    .center-list
      .center-pic
        width: 100%
      .center-title
        font-size: .28rem
        text-align: center
        font-weight: 400
        margin-top: .2rem
        margin-bottom: .3rem
        height: 1.28rem
        line-height: 1.28rem
        overflow: hidden
      .center-goods
        display: flex
        .goods-box
          flex: 1 1 auto
          .product
            float: left
            width: 33.33%
            text-align: center
            margin-top: .2rem
            .box-imgsize
              width: 1rem
              height: 1rem
              margin: 0 auto
            .product-img
              width: 100%
            span
              margin-top: .2rem
              white-space: nowarp
              display: inline-block
</style>