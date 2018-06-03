<template>
  <div id="app">
    <tabs></tabs>
  <router-view/>
  </div>
</template>

<script>
import Tabs from "./pages/Tabs"
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
    Tabs
  }
}
</script>

<style lang="stylus" scoped>
 

</style>
