<template>
  <div class="header">
    <div class="header-box">
      <div class="input">
        <span class="iconfont base-icon">&#xe632;</span>
        小米Min 2
      </div>
      <div class="right">
        <span class="iconfont mes-icon">&#xe631;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    height:1.04rem
    .header-box
      line-height: .97rem
      display: flex
      position: fixed
      width: 100%
      z-index: 99
      background: #F2F2F2
      .input
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
      .right
        width: 1.04rem
        text-align: center
        .mes-icon
          font-size: .44rem
</style>