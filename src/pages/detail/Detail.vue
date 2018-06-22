<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-parameter></detail-parameter>
    <detail-footer></detail-footer>
    <div class="content"></div>
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
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 2rem
</style>