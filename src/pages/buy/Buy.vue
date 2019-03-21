<template>
  <div>
    <buy-header></buy-header>
    <buy-car></buy-car>
    <buy-footer></buy-footer>
    <tabs></tabs>
  </div>
</template>

<script>
import BuyHeader from './components/Header'
import BuyCar from './components/Car'
import BuyPayment from './components/Payment'
import BuyFooter from './components/Footer'
import Tabs from "./../Tabs"
export default {
  name:'Buy',
  components: {
    BuyHeader,
    BuyCar,
    BuyPayment,
    BuyFooter,
    Tabs
  }
}
</script>

<style lang="stylus" scoped>

</style>
