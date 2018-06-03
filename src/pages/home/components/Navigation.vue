<template>
  <div class="header">
    <div class="nav-item" 
      v-for="(list, index) of item" 
      :class="{ active : index ==navListActiveIndex}"
      @click="handleNavClick(index)"
    >
      <span>{{list.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeNavigation',
  data () {
    return {
      navListActiveIndex:0,
      item: [
        {
          title:'推荐'
        }, {
          title:'手机'
        }, {
          title:'智能'
        }, {
          title:'电视'
        }, {
          title:'电脑'
        }, {
          title:'双摄'
        }, {
          title:'全面屏'
        }, {
          title:'盒子'
        }]
    }
  },
  methods: {
    handleNavClick(index) {
      console.log(index)
      this.navListActiveIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    line-height: .7rem
    background: #F2F2F2
    overflow-x: auto
    z-index: 2
    white-space: nowrap
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2)
    .nav-item
      padding: 0 .25rem
      display: inline-block
      font-size: .26rem      
    .nav-item:-webkit-scrollbar 
      display:none     
      span
        color: rgb(116, 116, 116)        
    .active
      border-bottom:2px solid rgb(237, 91, 0)
      color: rgb(237, 91, 0)
</style>
