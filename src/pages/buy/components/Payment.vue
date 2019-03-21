<template>
  <div 
    class="choose unchecked" 
    :class="{ 'check' : checkAll }"
    @click="checkAll(false)"
  >
    全选
  </div>
</template>

<script>
export default {
  name: 'BuyPayment',
  methods: {
    checkAll (flag) {
      this.carList.forEach(function (item,index) {
        if (typeof item.checked == 'undefined') {
        this.$set(item,"checked",this.checkAll);
      } else {
        item.checked = this.checkAll
      }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
 .choose
    background: url("//s1.mi.com/m/images/m/check_normal.png") 50% 50% no-repeat
    background-size: .4rem .4rem
  .check
    background: url("//s1.mi.com/m/images/m/check_press.png") 50% 50% no-repeat
    background-size: .4rem .4rem
  .unchecked
    flex: none
    width: .6rem
    padding: 0 .2rem
    height: 1.8rem
</style>
