<template>
  <router-link tag="div" to="/" class="header-abs">
    <div class="iconfont header-abs-back">&#xe624;</div>
  </router-link>
</template>

<script>
  export default {
    name: 'DetailHeader'
  }  
</script>

<style lang="stylus" scoped>
  .header-abs
    display: flex
    position: fixed
    left: .3rem
    top: .2rem
    width: .8rem
    height:.8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .6) 
    .header-abs-back
      color: #fff 
      font-size: .4rem
      margin: 0 .1rem
</style>