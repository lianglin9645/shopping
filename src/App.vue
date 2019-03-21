<template>
  <div id="app"> 
    <!-- <tabs></tabs> -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
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
    // Tabs
  }
}
</script>

<style lang="stylus" scoped>
 

</style>
