<template>
  <div class="car-box">
    <div class="car-list">
      <ul>
        <li class="item" v-for="(item, index) in carList">
          <div class="ui-flex">
            <div 
              class="choose unchecked" 
              :class="{ 'check' : item.checked }" 
              @click="handelCarChoose(item)"
            >              
            </div>
            <a  class="imgProduct flex">
              <img class="imgProduct-img" :src="item.imgUrl">
            </a>
            <div class="info">
              <p class="name">
                <span>{{item.name}}</span>
              </p>
              <div class="price-without">
                <span>售价：{{item.price}}元</span>
              </div>
              <div class="num">
                <div class="input-number">
                  <div class="input-sub" @click="changeMoney(item, -1)">
                    <i class="iconfont icon-font">&#xe696;</i>
                  </div>
                  <div class="input-num">
                    <span v-model="item.num">{{item.num}}</span>
                  </div>
                  <div class="input-add" @click="changeMoney(item, 1)">
                    <i class="iconfont icon-font">&#xe695;</i>
                  </div>
                </div> 
                <div class="delete" @click="delGoods(index)">
                  <i class="iconfont imgs-icon">&#xe645;</i>
                </div>
                <span>{{item.price * item.num}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'BuyCar',
  data () {
    return {
      carList: [{
        id: '0001',
        name: '小米MIX2 全网通版 6GB内存 黑色陶瓷 128GB',
        price: '2799',
        num: '3',
        imgUrl: '//i1.mifile.cn/a1/pms_1505401551.09912910!180x1800.jpg'
      }, {
        id: '0002',
        name: '小米MIX2 全网通版 6GB内存 黑色陶瓷 128GB',
        price: '2799',
        num: '2',
        imgUrl: '//i1.mifile.cn/a1/pms_1505401551.09912910!180x1800.jpg'
      }, {
        id: '0003',
        name: '小米MIX2 全网通版 6GB内存 黑色陶瓷 128GB',
        price: '2799',
        num: '10',
        imgUrl: '//i1.mifile.cn/a1/pms_1505401551.09912910!180x1800.jpg'
      }]
    }
  },
  methods: {
    handelCarChoose (item) {
      if (typeof item.checked == 'undefined') {
        this.$set(item,"checked",true);
      } else {
        item.checked = !item.checked
      }
    },
    changeMoney (product, way) {
      if (way > 0) {
        product.num++;
      } else {
        product.num--
        if (product.num <= 1) {
          product.num = 1
        }
      }
    },
    delGoods (index) {
      this.carList.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .car-list
    background: #fff
    .item
      border-bottom: 1px solid #f6f6f6
      line-height: 0
      .ui-flex
        padding: .24rem 0
        display: flex
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
        .imgProduct
          display: block
          position: relative
          width: 1.8rem
          height: 1.8rem
          margin-right: .2rem
          border: 1px solid #eee
          border-radius: 2px
          .imgProduct-img
            width: auto
            height: 100%
        .info
          text-align: left
          .name
            font-size: .28rem
            line-height: .32rem
            color: #666
            margin-bottom: .12rem
            margin-right: .3rem
            display: box
            box-align: start
        .price-without
          padding: .12rem 0
          font-size: .24rem
          color: #999
          margin-bottom: .12rem
        .input-number
          display: inline-block
          border: 1px solid #eee
          .input-sub
            display: inline-block
            width: .6rem
            height: .6rem
            position: relative
            vertical-align: middle
            background-color: #fafafa
            text-align: center
            .icon-font
              position: absolute
              top: .3rem
              left: .15rem
          .input-num
            display: inline-block
            vertical-align: middle
            min-width: .6rem
            padding: 0 .12rem
            text-align: center
            font-size: .32rem
          .input-add
            display: inline-block
            width: .6rem
            height: .6rem
            position: relative
            vertical-align: middle
            background-color: #fafafa
            text-align: center
            .icon-font
              position: absolute
              top: .3rem
              left: .15rem
        .delete
          float: right
          margin-right: .2rem
          min-width: .6rem
          height: .6rem
          line-height: .6rem
          display: block
          .imgs-icon
            width: .6rem
            height: .6rem



</style>
