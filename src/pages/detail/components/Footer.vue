<template>
	<div class="footer-box">
		<div class="footer">
			<router-link tag="a" to="/" class="icon-font">
				<i class="iconfont">&#xe630;</i>
	      <span>首页</span>
			</router-link>
			<router-link tag="a" to="/buy" class="icon-font">
				<i class="iconfont">&#xe62d;</i>
	      <span>购物车</span>
			</router-link>
			<div class="buy" @click="hangelFooterClick">
				<a class="buy-a">加入购物车</a>
			</div>
		</div>
    <common-shopping :title="title" :price="price" :goodsbrief="goodsbrief" :good="good" :imgUrl="imgUrl" v-show="showShopping" @close="handelShoppingClose"></common-shopping>
	</div>
</template>

<script>
import CommonShopping from './Shopping'
  export default {
    name: 'DetailFooter',
    props: {
      good: String,
      title: String,
      price: String,
      goodsbrief: String,
      imgUrl: String
    },
    data () {
      return {
        showShopping:false
      }
    },
    components: {
      CommonShopping
    },
    methods: {
      hangelFooterClick () {
        this.showShopping = true
      },
      handelShoppingClose () {
        this.showShopping = false
      }
    }
  }  
</script>

<style lang="stylus" scoped>
  .footer-box
  	height: 1.04rem
  	background: #fff
  	box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
  	position: fixed
  	bottom: 0
  	left: 0
  	right: 0
  	z-index: 100
  	.footer
  		display: -webkit-box
	  	height: 100%
  		.icon-font
	      display: inline-block
	      width: 1.45rem
	      text-align: center
	      color: #666
      i
        font-size: .42rem
        display: block
        width: .4rem
        height: .4rem
        margin: 0 auto .1rem
      .buy
      	flex: 1 1 auto
      	a
      		height: 1rem
      		line-height: 1rem
      		display: block
      		font-size: .28rem
      		color: #fff
      		background: #ff6700
      		text-align: center

</style>