<template>
  <div class="list-box">
    <div class="list">
      <ul>
        <li class="item" 
          v-for="(item, key, index) of cities" 
          :key="key" 
          @click="handleLetterClick" 
          :class="{ active : index == navListActiveIndex}"
          @click.native="handleNavClick(index)"
        >
          {{key}}
        </li>        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeList',
  props: {
    cities: Object,
    letter: String
  },
  data () {
    return {
      navListActiveIndex:0
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change',e.target.innerText)
    },
    handleNavClick(index) {
      console.log(index)
      this.navListActiveIndex = index
    }
  },
  watch: {
    letter () {
      console.log(this.letter)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list-box
    width: 1.52rem
    .list
      position: fixed
      top: 49px
      bottom: 53px
      left: 0
      bottom: 0
      width: 1.52rem
      border-right: 1px solid #efefef
      overflow: hidden
      ul
        z-index: 2
        position: absolute
        top: 0
        bottom: 0
        left: 0
        right: -.3rem
        overflow-y: auto
        padding: .2rem .3rem .2rem 0
        background: #fefefe
        .item
          line-height: .9rem
          height: .9rem
          text-align: center
          overflow: hidden
        .active
          border-left:2px solid rgb(237, 91, 0)
          color: rgb(237, 91, 0)
          font-size: .32rem
</style>