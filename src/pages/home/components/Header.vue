<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont mes-icon">&#xe631;</span>
    </div>
    <div class="header-input">
      <span class="iconfont base-icon">&#xe632;</span>
      搜索商品名称
    </div>
    <div class="header-right">
      <span class="iconfont">&#xe62e;</span>
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
      height: .64rem
      line-height: .64rem
      margin-left: .2rem
      margin-top: .12rem
      background: white
      line-height: .64rem 
      .base-icon
        padding: 0 .1rem     
    .header-right
      width: 1.04rem
      float: right
      text-align: center
</style>
