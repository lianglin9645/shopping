<template>
  <div class="settle">
    <div class="hd">
      <div class="hd-left" @click="back()">
        <div class="iconfont hd-left-icon">&#xe624;</div>
      </div>
      <div class="hd-middle">
        <div class="title">订单配送至</div>
      </div>
      <div class="hd-right">
        <div class="hd-right-icon"></div>
      </div>
    </div>
    <div class="address">
      <ul>
        <li> <span>张三</span> <span>13888888888</span></li>
        <li><span>福建省福州仓山区</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Settle',
    data() {
      return {
        id: this.$route.query.id
      }
    },
    methods: {
      back () {
          this.$router.go(-1)
        },
    },
    mounted() {
      console.log(this.id)
    }
  }
</script>

<style  lang="stylus">
.settle
  .hd
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background: #ff6700;
    color: #fff;
    padding: 0;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
    .hd-left
      .hd-left-icon
        display: block;
        width: .6rem;
        margin: 0 .2rem;
    .hd-middle
      flex: 1;
      font-size: .3rem;
      min-width: 0;
      .title
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: center
    .hd-right
      min-width: 1rem
      .hd-right-icon
        display: block;
        width: .6rem;
        margin: 0 .2rem;
  .address
    width: 100%
    height: 2rem
    background: #ff6700;
    padding-top: 1rem
  .address li
    padding: .3rem 1rem;
    color:#fff

</style>
