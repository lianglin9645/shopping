<template>
  <div class="container">
    <div class="par-box">
      <div class="goods-name">
        {{this.title}}
      </div>
      <div class="goods-brief">
        {{this.goodsbrief}}
      </div>
      <div class="goods-price">
        <div class="price cur-price">
          {{this.price}}
        </div>
      </div>
    </div>
    <div class="product-section more mt2x" @click="hangelFooterClick">
      <div class="ui-flex">
        <div class="title">已选</div>
        <div class="flex">
          <div class="info">黑鲨游戏手机 高配版 极夜黑 128GB x1</div>
        </div>
        <div class="iconfont">&#xe60d;</div>
      </div>
    </div>
    <div class="product-section more">
      <div class="ui-flex">
        <div class="title">送至</div>
        <div class="flex">
          <div class="info">
            <span class="mrx1">北京市 东城区</span>
            <span class="on">有现货</span>
          </div>
        </div>
        <div class="iconfont">&#xe60d;</div>
      </div>
    </div>
    <div class="product-section">
      <div class="product-back">
        <div class="flex-img">
          <img class="back-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==">
          <span>7天无理由退货</span>
        </div>
        <div class="flex-img">
          <img class="back-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==">
          <span>15天质量问题换货</span>
        </div>
        <div class="flex-img">
          <img class="back-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==">
          <span>365天保修</span>
        </div>
      </div>
    </div>
    <common-shopping v-show="showShopping" @close="handelShoppingClose"></common-shopping>
  </div>
</template>

<script>
import CommonShopping from './Shopping'
import axios from 'axios'
  export default {
    name: 'DetailParameter',
    props: {
      good: String,
      title: String,
      price: String,
      goodsbrief: String
    },
    data () {
      return {
        showShopping:false
      }
    },
    mounted () {
      this.getGoodsInfo()
    },
    components: {
      CommonShopping
    },
    methods: {
      getGoodsInfo () {
        axios.get(`/static/mock/goods.json/`).then(res => {
           res = res.data
          if (res.ret && res.data) {
            const data = res.data
            // console.log(data)
            this.goods = data.goods
          }
            })
      },
     
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
  .container
    background: #efefef
    .par-box
      background: #fff
      text-align: left
      padding: .2rem .32rem 0
      .goods-name
        font-size: .36rem
        line-height: 1.5rem
      .goods-brief
        font-size: .24rem
        line-height: 1.5em
        color: rgba(0,0,0, .54)
      .goods-price
        padding .2rem 0
        .price
          color: #ff6700
          position: relative
          padding-left: .2rem
          line-height: 1em
          font-size: .48rem
          font-weight: 700
        .price:before
          content: '\A5'
          position: absolute
          left: 0
          top: 0
          font-size: .76em
    .product-section
      padding: .16rem .32rem
      background: #fff
      .ui-flex
        display: -webkit-box
        .title
          width: .82rem
          font-size: .24rem
          color: rgba(0,0,0 .54)
          line-height: .4rem
        .flex
          flex: 1 1 auto
          .info
            font-size: .24rem
            color: rgba(0,0,0 .87)
            line-height: .4rem
            padding-right: .2rem  
            .mrx1
              margin-right: .08rem  
            .on
              color: #ff6700  
    .mt2x
      margin-top: .08rem
    .product-back
      flex-wrap: wrap
      .flex-img
        display: inline-block
        font-size: .24rem
        line-height: .4rem
        margin-right .2rem
        flex: 0 1 auto
        .back-img
          height: .2rem
          width: auto

</style>