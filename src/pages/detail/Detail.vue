<template>
  <div>
    <detail-banner :imgUrl="imgUrl"></detail-banner>
    <detail-header></detail-header>
    <detail-parameter :title="title" :price="price" :goodsbrief="goodsbrief" :good="good" :goodstitle="goodstitle"></detail-parameter>
    <detail-footer :title="title" :price="price" :goodsbrief="goodsbrief" :good="good" :imgUrl="imgUrl"></detail-footer>
    <div class="content">{{$route.params.id}}</div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailFooter from './components/Footer'
import DetailParameter from './components/Parameter'
export default {
  name:'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailFooter,
    DetailParameter
  },
  data() {
    return {
      goods: [],
      good: '',
      goodstitle: '',
      newId: '',
      price: '',
      title: '',
      goodsbrief: '',
      imgUrl: '',

    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/static/mock/goods.json',{
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      let newId = this.$route.params.id
      // console.log(newId)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.goods = data.goods
        this.good = data.good
        this.goodstitle = data.goodstitle
        for (var i = 0; i < this.goods.length; i++) {
          if(this.goods[i].id == newId) {
            this.price = this.goods[i].price
            this.title = this.goods[i].title
            this.goodsbrief = this.goods[i].goodsbrief
            this.imgUrl = this.goods[i].imgUrl
          }
        }
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 2rem
</style>