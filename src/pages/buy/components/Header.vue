<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont mes-icon"></span>
    </div>
    <div class="header-input">
      购物车
    </div>
    <div class="header-right">
      <span class="iconfont icon-base">&#xe631;</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display:flex
    line-height: .97rem
    background: #F2F2F2
    .header-left
      width: .64rem
      float: left
      text-align: center
    .header-input
      flex: 1
      color: #ccc
      height: 1rem
      line-height: 1rem 
      text-align: center   
    .header-right
      width: 1.04rem
      float: right
      text-align: center
      .icon-base
        font-size: .44rem
</style>
