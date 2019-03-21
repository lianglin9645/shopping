<template>
  <div class="address">
    <div class="hd">
      <div class="hd-left" @click="back()">
        <div class="iconfont hd-left-icon">&#xe624;</div>
      </div>
      <div class="hd-middle">
        <div class="title">新增地址</div>
      </div>
      <div class="hd-right">
        <div class="hd-right-icon"></div>
      </div>
    </div>
    <div class="container">
      <div class="page-wrap">
        <div class="manager">
          <div class="manager-list">
            <div class="manager-border">
              <ul class="ul-card">
                <li class="li-list">
                  <div class="label">收货人：</div>
                  <div class="ui-input">
                    <input type="text" name="name" v-model="name" placeholder="真实姓名">
                  </div>
                </li>
                <li class="li-list">
                  <div class="label">手机号码：</div>
                  <div class="ui-input">
                    <input type="number" name="tel" v-model="tel" placeholder="手机号">
                  </div>
                </li>
                <li class="li-list">
                  <div class="label">所在地区：</div>
                  <div class="ui-input">
                    <input type="text" name="city" v-model="city" placeholder="省 市 区 街道信息">
                  </div>
                </li>
                <li class="li-list">
                  <div class="label">详细地址：</div>
                  <div class="ui-input">
                    <input type="text" name="detail" v-model="detail" placeholder="详细地址">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="add">
      <div class="btn" @click="submit">保存地址</div>
    </div>
  </div>
</template>
<script >
import {mapGetters, mapMutations} from "vuex"
  export default {
      name: 'UpDataAddress',
      data () {
        return {
          name: '',
          tel: '',
          city: '',
          detail: ''
        }
      },
      computed:{
        ...mapGetters(['address']),
      },
      methods:{
        ...mapMutations(['submitAddress']),
        back () {
          this.$router.go(-1)
        },
        submit () {
          if( this.name =='' || this.tel =='' || this.city =='' || this.detail ==''){
            console.log("重要信息为空")
          } else {
            var data = {
              name: this.name,
              tel: this.tel,
              city: this.city,
              detail: this.detail
            };
            this.submitAddress(data)
            this.name ='';
            this.tel ='';
            this.city =''; 
            this.detail ='';
            this.$router.back();
          }
        }
      }
  }
</script>
<style scoped lang="stylus">
.address
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
    background: #f2f2f2;
    color: #666;
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
  .container
    padding-top:1rem
    .page-wrap
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      .manager
        position: relative;
        padding-bottom: 1rem;
        .manager-list
          .manager-border
            .ul-card
              position: relative;
              .li-list
                border-bottom: 1px solid #f6f6f6;
                font-size: .28rem;
                overflow: hidden;
                background: #fff;
                padding: .2rem .3rem;
                display: box;
                display: -webkit-box;
                box-align: center;
                -webkit-box-align: center;
                .ui-input
                  border: 0;
                  overflow: hidden;
                  font-size: .24rem;
                  width: 100%;
                  -webkit-box-flex: 1;
                .ui-input input
                  padding: .18rem .3rem;
                  width: 100%;
                  -webkit-box-flex: 1;
                  box-sizing: border-box;
                  font-size: .28rem;
                  border: 0;
                  text-decoration: none;
                  outline: 0;
                  vertical-align: middle;
  .add
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 1;
    .btn
      display: block;
      outline: 0;
      background: #ff6700;
      color: #fff;
      text-align: center;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      font-size: .28rem;
    

</style>