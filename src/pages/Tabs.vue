<template>
  <div>
    <div class="footer-box">
      <div class="footer">
        <router-link :to="{name:'Home'}" tag="div" exact class="icon-font">
          <i class="iconfont">&#xe630;</i>
          <span>首页</span>
        </router-link>
        <router-link :to="{name:'Type'}" tag="div" class="icon-font">
          <i class="iconfont">&#xe609;</i>
          <span>分类</span>
        </router-link>
        <router-link :to="{name:'Buy'}" tag="div" class="icon-font">
          <i class="iconfont">&#xe62d;</i>
          <span>购物车</span>
        </router-link>
        <router-link :to="{name:'Myself'}" tag="div" class="icon-font">
          <i class="iconfont">&#xe62f;</i>
          <span>我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      navListActiveIndex: true
    }
  },
  methods: {
    
  }
}
</script>

<style lang="stylus" scoped>
  .router-link-active
    color: rgb(237, 91, 0)
  .footer-box
    position: fixed
    bottom: 0
    left: 0
    right: 0
    z-index: 99
    box-sizing: inherit
    .footer
      align-items: center
      display: flex 
      height: 1rem 
      box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
      background: #fff
      .icon-font
        display: inline-block
        justify-content: flex-end
        flex: 1
        text-align: center
      i
        font-size: .42rem
        display: block
        width: .4rem
        height: .4rem
        margin: 0 auto .1rem

</style>
