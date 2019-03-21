<template>
  <div class="container" v-show="showShopping">
    <div class="msg">
      <div class="close" @click="handelShoppingClose">X</div>
      <div class="pro-info">
        <div class="pro-img">
          <img :src="this.imgUrl">
        </div>
        <div class="pro-desc layout">
          <div class="cur-price">
            <div class="price">
              {{this.price}}
            </div>
            <div class="name">{{this.title}}</div>
          </div>
        </div>       
      </div>
      <div class="max5" >
        <div class="mtx2">
          <div class="option-title">版本</div>
          <div class="options-group">
            <div class="option-item" 
               v-for="(item, index) in dataList"
              :class="{ active : index === goodsListIndex}"
              @click="handelShoppingChoose(index)"
            >
              <p>{{item.space}}</p>
              <p>{{item.price}}</p>
            </div>
          </div>
        </div>
        <div class="mtx2">
          <div class="option-title">购买数量</div>
          <div class="input-number">
            <div class="input-sub" @click="sub">
              <i class="iconfont">&#xe696;</i>
            </div>
            <div class="input-num">
              <span>{{inputnum}}</span>
            </div>
            <div class="input-add" @click="add">
              <i class="iconfont">&#xe695;</i>
            </div>
          </div> 
        </div>
      <div class="btn-bottom" @click="handelAddGoods($route.params.id)">
        <div class="action-box">
          <a class="btn">加入购物车</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
  export default {
    name: 'CommonShopping',
    props: {
      good: String,
      title: String,
      price: String,
      goodsbrief: String,
      imgUrl: String
    },
    data () {
      return {
        goodsListIndex: 0,
        inputnum:1,
        showShopping: true,
        dataList:[{
          id: "0001",
          space: "6GB+64GB",
          price: "2599元"
        },{
          id: "0002",
          space: "6GB+128GB",
          price: "2799元"
        }, {
          id: "0003",
          space: "全陶瓷尊享版",
          price: "3499元"
        }, {
          id: "0004",
          space: "6GB+128GB 移动4G+",
          price: "2799元"
        }]
      }
    },
    methods: {
      ...mapActions(['handelAddGoods']),
      handelShoppingClose () {
        this.$emit('close')
      },
      handelShoppingChoose (index) {
        console.log(index)
        this.goodsListIndex = index
      },
      handelAddGoods(id) {
        var carList = this.$store.state.goodsList
        console.log(this.$store.state.goodsList)
        //判断是否存在  已存在则不加入
        var idExist = carList.find(item => { 
          return item.id == id
        })
          if (!idExist) {
              var data = {
                  id: this.$route.params.id,
                  price: this.price,
                  name: this.title,
                  num: this.inputnum,
                  imgUrl: this.imgUrl,
                  check: false
              }
              this.$store.commit('addGoods', data)

            this.showShopping = false
          } else {
            this.showShopping = false
            console('已加入购物车')
          }
      },
      sub () {
        if(this.inputnum>1) {
          this.inputnum--
        }  
      },
      add () {
        this.inputnum++
      },
    }
  }  
</script>

<style lang="stylus" scoped>
  .container
    display: flex
    flex-direction: column
    justify-content center
    z-index: 100
    position: fixed
    left: 0
    right:0
    top: 0
    bottom: 0
    background: rgba(0,0,0 .54)
    .msg
      position: fixed
      bottom: 0
      left: 0
      right: 0
      width: 7.2rem
      background-color: #fff
      color: #000
      padding: .32rem .32rem 1.27rem
      z-index: 110
      min-height: 7rem
      max-height: 9.6rem
      text-align: left 
      .close
        position: absolute
        top: .16rem
        right: .16rem
        width: .5rem
        height: .5rem
      .pro-info
        min-height: 1.5rem
        display: flex
        .pro-img
          position: relattive
          width: 2rem
          height: 2rem
          text-align: center
          background: #fff 
        .pro-img img
          height: 100%
          width: auto
          margin: 0 auto
        .pro-desc
          display: flex
          position: relative
          flex-direction: column
          width: 4.5rem
          margin: .32rem .16rem
          text-align: left
          .price:before
            content: "\A5"
            left: 0
            top: 0
            font-size: .46rem
          .price
            display: inline
            color: #ff6700
            font-size: .48rem
            line-height: .38rem
          .name
            font-size: .28rem
            color: rgba(0,0,0 .87)
            line-height: .4rem
      .max5
        max-height: 6rem
        overflow-x: hidden
        overflow-y: scroll 
        .mtx2
          margin-top: .08rem
          align-items: center
          .option-title
            padding-bottom: .16rem
            padding-top: .32rem
            line-height: .24rem
            font-size: .24rem
            color: rgba(0,0,0, .87)
          .options-group
            padding-bottom: .32rem
            flex-wrap: wrap
            align-items: center
            .option-item
              width: 90%
              display: flex
              height: .72rem
              line-height: .72rem
              min-width: 1.35rem
              justify-content: space-between
              box-sizing: border-box
              align-items: center
              border: 1px solid rgba(0,0,0 .10)
              text-align: center
              margin: .16rem 0 0 .16rem
              overflow: visible
              padding: .24rem .32rem!important
            .active
              border: 1px solid #ff6700
              color: #ff6700
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
            .input-num
              display: inline-block
              vertical-align: middle
              min-width: .4rem
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
        .btn-bottom
          position: absolute
          bottom: 0
          left: 0
          right: 0
          z-index: 110
          .action-box
            flex: 1 1 auto
            .btn
              display: block
              outline: 0
              background: #ff6700
              color: #fff
              text-align: center
              width: 100%
              height: 1rem
              line-height: 1rem
              font-size: .28rem


</style>