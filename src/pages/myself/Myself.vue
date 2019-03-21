<template>
  <div class="myself">
    <div class="hd">
      <div class="align-center">
        <div class="img">
          <img  src="https://m.mi.com/static/img/avatar.76a75b8f17.png">
        </div>
        <div  class="name">登录/注册</div>
      </div>
    </div>
    <div class="order">
      <div class="cite">我的订单</div>
    </div>
    <ul class="pay">
      <li>待付款</li>
      <li>待收货</li>
      <li>退换修</li>
    </ul>
    <ul class="item">
      <li>
        <router-link to="address">设置</router-link>
      </li>
    </ul>
    <tabs></tabs>
  </div>
</template>

<script>
import Tabs from "./../Tabs"
  export default{
    name: 'myself',
    data() {
      return {

      }
    },
    methods: {

    },
    components:{
      Tabs
    }
  }
</script>

<style  lang="stylus">
.myself
  background:#f5f5f5 !important
  .hd
    background: url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0 #f37d0f;
    background-size: auto 100%;
    padding: .32rem 0;
    .align-center
      display: flex
      align-items: center;
      .img
        margin: 0 .16rem 0 .32rem;
        width: .96rem;
        height: .96rem;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 100%;
        border: 3px solid hsla(0,0%,100%,.4);
        text-align: center;
        img
          width: auto;
          height: 100%;
          margin: 0 auto;
      .name
        color: #fff;
        font-size: .24rem;
        text-align: left;
  .order
    background-color: #fff;
    height: .8rem;
    line-height: .8rem
    border-bottom: 1px solid rgba(0,0,0,.15);
    color: rgba(0,0,0,.54);
    position: relative;
    padding-right: .56rem;
    .cite
      font-size: .28rem;
      padding: 0 0 0 .32rem;
      color: rgba(0,0,0,.87);
  .pay
    padding: 0 .8rem;
    background-color: #fff;
    display:flex
    align-items: center;
    justify-content: space-between;
    -webkit-box-pack: justify;
    li
      display: flex;
      align-content: space-between;
      position: relative;
      padding: .4rem 0;
  .item
    background: #fff;
    li a
      display: block;
      padding-right: .56rem;
      padding-left: 1.12rem;
      height: 1.04rem;
      display: box;
      display: -webkit-box;
      box-align: center;
      -webkit-box-align: center;
      box-pack: justify;
      -webkit-box-pack: justify;
      color: currentColor;

</style>
