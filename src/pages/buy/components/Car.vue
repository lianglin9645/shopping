<template>
  <div>
    <div class="car-box">
      <div class="no-data" v-if="goodsList== ''">
        购物车还是空的 
        <router-link to="/">
          <p class="no-data-btn">去看看</p>
        </router-link>
      </div>
      <div class="car-list">
        <ul>
          <li class="item" v-for="(item, index) in goodsList">
            <div class="ui-flex">
              <div 
                class="choose unchecked" 
                :class="{ 'check' : item.check }" 
                @click="check(item)"
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
                    <div class="input-sub" @click="changeMoney('-1', item.id)">
                      <i class="iconfont icon-font">&#xe696;</i>
                    </div>
                    <div class="input-num">
                      <span v-model="item.num">{{item.num}}</span>
                    </div>
                    <div class="input-add" @click="changeMoney('1', item.id)">
                      <i class="iconfont icon-font">&#xe695;</i>
                    </div>
                  </div> 
                  <div class="delete" @click="delGoods(item.id)">
                    <i class="iconfont imgs-icon">&#xe645;</i>
                  </div>
                  <!-- <span>{{item.price * item.num}}</span> -->
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-submit">
      <div class="selectAll choose" :class="{'checkall': checkall}" @click="checkAll()"> 全选</div>
      <div class="price-box">合计:{{totalPrice}}</div> 
      <div class="buy-box" @click="goSettle">结算 ({{count}})</div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
export default {
  name:'BuyCar',
  data () {
    return {
      totalMoney:0,
      checkall:false,
      id: ''
    }
  },
  computed: {
    ...mapGetters(['goodsList']),
    goodsList(){
      return this.$store.state.goodsList
    },
    totalPrice () {
      var totalMoney = 0;      
      this.$store.state.goodsList.forEach(data => {
      console.log(data.check)
        if(data.check) {
          totalMoney += data.price  * data.num;
          }
        })
      return totalMoney;
    },
    count() {
      var i = 0;
      this.$store.state.goodsList.forEach(goodsList => {
        if (goodsList.check) {
            i ++;
        }
      });
      return i;
    },
    checkAllFlag() {    
      console.log(this.count) 
      return this.count == this.goodsList.length
    }
  },
  mounted (){
    console.log(this.goodsList)
  },
  methods: {
    ...mapMutations(["updateGoods", "deleteGoods"]),
    // handelCarChoose (item) {
    //   if (typeof item.checked == 'undefined') {
    //     this.$set(item,"checked",true);
    //   } else {
    //     item.checked = !item.checked
    //   }
    // },
    findPosition(id){
      return this.goodsList.findIndex(item=>{
          return item.id==id
       })
    },
    check(item) {
      var check_num =0;
      var goodsList = this.$store.state.goodsList;
      item.check = !item.check;
      if(item.check) {
        this.checkall = false;
      }
      for(var i =0; i<goodsList.length; i++) {
        if(goodsList[i].check){
          check_num++
        }
      }
      if(check_num == goodsList.length) {
          this.checkall = true
        } else {
          this.checkall = false
        }
    },
    checkAll() {
      console.log(this.checkAllFlag)
      this.checkall = !this.checkall;
      // console.log(this.checkall)
      if(this.checkall) {
        this.$store.state.goodsList.forEach(goodsList => {
          goodsList.check = true;
        });
      } else {
        this.$store.state.goodsList.forEach(goodsList => {
          goodsList.check = false;
        });
      }
      // this.totalPrice();
    },
    changeMoney (flag, id) {
      var i = this.findPosition(id)
      var num=this.goodsList[i].num;
      if(flag == 1) {
        num ++;
      } else {
        if ( num <=1 ) {
          return
        }
        num --;
      }
      console.log(num) 
      this.updateGoods({
        index:i,
        key:"num",
        value:num
      })
    },
    delGoods (id) {
      var i=this.findPosition(id);
      this.deleteGoods(i);
    }, 
    goSettle() {
      this.$store.state.goodsList.forEach(goodsList =>{
        if(goodsList.check==true){
          this.id = goodsList.id;
        }
      })
      if(this.id == ''){
        return console.log("请选择商品")
      }
      this.$router.push({
              path: "Settle",
              query: {
                id: this.id
              }
            })
    }  
  }
}
</script>

<style lang="stylus" scoped>
  .no-data
    text-align: center;
    font-size: .36rem;
    line-height:1rem
    .no-data-btn
      display: inline-block;
      padding: .2rem;
      font-size:.2rem;
      height: .25rem
      line-height: 1rem;
      color: #ff6700;
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
        .num 
          position: relative
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
            position: absolute
            float: right
            margin-left: 3.2rem
            top: 0
            min-width: .6rem
            height: .6rem
            line-height: .6rem
            display: block
            .imgs-icon
              width: .6rem
              height: .6rem
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
        background: url("//s1.mi.com/m/images/m/check_normal.png") 20% 50% no-repeat
        background-size: .4rem .4rem
      .checkall
        background: url("//s1.mi.com/m/images/m/check_press.png") 20% 50% no-repeat
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