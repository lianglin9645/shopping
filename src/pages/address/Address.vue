<template>
  <div class="address">
    <div class="hd">
      <div class="hd-left" @click="back()">
        <div class="iconfont hd-left-icon">&#xe624;</div>
      </div>
      <div class="hd-middle">
        <div class="title">收货地址</div>
      </div>
      <div class="hd-right">
        <div class="hd-right-icon"></div>
      </div>
    </div>
    <div class="container">
      <div class="page-wrap">
        <div class="manager">
          <div class="manager-list" v-for="item in addressList" >
            <div class="manager-border">
              <ul class="ul-card">
                <li class="li-name">
                  <span class="consignee">收件人：{{item.userName}}</span> 
                  <span>电话：{{item.tel}}</span> 
                  <i class="iconfont add-icon" @click="handleClickDel(item._id)" >&#xe645;</i> 
                </li>
                <li class="li-address"><p>地址：{{item.streetName}}</p></li>
                <li class="li-address"><van-switch :value="item.isDefault" @input="handleClickDefault($event, item._id)" size="18px" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="add">
      <router-link to="./UpDataAddress">
      <div class="btn">新建地址</div>
      </router-link>
    </div>
  </div>
</template>
<script >
// import {mapGetters} from "vuex"
// import { Switch } from 'vant';
import axios from 'axios'
  export default {
      name: 'Address',
      components: {
        // Switch
      },
      data() {
        return {
          addressList: []
        }
      },
      // computed: {
      //   ...mapGetters(['address']),
      //   address() {
      //     return this.$store.state.address
      //   },
      // },
      methods:{
        back() {
          this.$router.go(-1)
        },
        getList() {
          axios.get('/user/addressList').then((res) => {
            console.log(res)
            this.addressList = res.data.result.list
          })
        },
        handleClickDel(id) {
          console.log(id)
          axios.post('/user/delAddress', {
            _id: id
          }).then((res) => {
            this.getList()
          })
        },
        handleClickDefault(isDefault, id) {
          console.log(id)
          if(isDefault) {
            axios.post('/user/setDefault', {
              _id: id
            }).then((res) => {
              this.getList()
            })
          }
        },
      },
      mounted () {
        this.getList()
        console.log(this.$store.state.address)
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
            border: 1px solid #f6f6f6;
            overflow: hidden;
            margin: .2rem;
            border-radius: .06rem;
            background: #fff;
            text-align: left;
            .ul-card
              padding: 0 .2rem;
              .li-name
                border-bottom: 1px solid #f6f6f6;
                display: block;
                font-size: .28rem;
                overflow: hidden;
                background: #fff;
                padding: .2rem .3rem;
                .consignee
                  margin-right: .6rem;
                  color: #f60;
                .add-icon
                  float: right;
              .li-address
                position: relative;
                padding-right: .5rem;
                font-size: .24rem;
                display: block;
                overflow: hidden;
                background: #fff;
                padding: .2rem .3rem;
              .li-address:after
                content: " ";
                position: absolute;
                width: .14rem;
                height: .14rem;
                right: .14rem;
                top: 50%;
                margin-top: -.07rem;
                border-right: 1px solid #999;
                border-bottom: 1px solid #999;
                -webkit-transform: rotate(-45deg);
                p
                  line-height: .36rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
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