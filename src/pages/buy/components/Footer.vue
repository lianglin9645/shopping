<template>
  <!-- <div class="bottom-submit">
    <div class="selectAll choose" :class="{'check': checkAll}" @click="checkAll()"> 全选</div>
    <div class="price-box">合计:{{totalMoney}}</div> 
    <div class="buy-box">结算</div>
  </div> --> 
</template>

<script>
export default {
  name:'BuyFooter',
  data () {
    return {
      totalMoney:0
    }
  },
  computed: {
    carList(){
            return this.$store.state.car_List
        }
  },
  methods: {
    checkAll (flag) {
      var _this = this
      this.carList.forEach(function (item,index) {
        if (typeof item.checked == 'undefined') {
        _this.$set(item,"checked",_this.checkAll);
        } else {
          item.checked = _this.checkAll
        }
      });
      this.totalPrice();
    },
    totalPrice () {
    var _this = this;
    _this.totalMoney = 0;
    this.carList.forEach(function(item, index) {
      if(item.checked) {
        _this.totalMoney += item.price*item.num;
        }
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
  .bottom-submit
    position: fixed
    display: flex
    bottom: 0
    left: 0
    right: 0
    background: #fff
    z-index: 98
    margin-top: 1rem
    height: 1rem
    line-height: 1rem
    text-align: center
    bottom: 1rem
    .selectAll
      font-size: .26rem
      color: #999
      width: 100%
    .choose
      background: url("//s1.mi.com/m/images/m/check_press.png") 20% 50% no-repeat
      background-size: .4rem .4rem
    .check
      background: url("//s1.mi.com/m/images/m/check_normal.png") 20% 50% no-repeat
      background-size: .4rem .4rem
    .price-box
      display: block
      width: 100%
    .buy-box
      width: 100%
      display: block
      background: #ff6700
      color: #fff
</style>