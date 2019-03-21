<template>
  <div>
    <type-header></type-header>
    <type-list :cities="cities" @change="handleLetterChange"></type-list>
    <type-center :cities="cities" :letter="letter"></type-center>
    <tabs></tabs>
  </div>
</template>

<script>
import axios from 'axios'
import TypeHeader from './components/Header'
import TypeList from './components/List'
import TypeCenter from './components/Center'
import Tabs from "./../Tabs"
export default {
  name:'Type',
  components: {
    TypeHeader,
    TypeList,
    TypeCenter,
    Tabs
  },
  data () {
    return {
      cities: {},
      letter: ''
    }
  },
  methods: {
    getTypeInfo() {
      axios.get('/static/mock/type.json')
        .then(this.handleGeTypeInfoSucc)
    },
    handleGeTypeInfoSucc(res) {
      console.log(res)
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.cities = data.cities 
      }
    },
    handleLetterChange(letter) {
      this.letter = letter
      // console.log(letter)
    },
  },
  mounted () {
    this.getTypeInfo()
  }
}
</script>

<style lang="stylus" scoped>
 
</style>