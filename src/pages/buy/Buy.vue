<template>
  <div>
    <buy-header></buy-header>
    <buy-car></buy-car>
    <buy-payment></buy-payment>
  </div>
</template>

<script>
import BuyHeader from './components/Header'
import BuyCar from './components/Car'
import BuyPayment from './components/Payment'
export default {
  name:'Buy',
  components: {
    BuyHeader,
    BuyCar,
    BuyPayment
  }
}
</script>

<style lang="stylus" scoped>

</style>
