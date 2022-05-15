<template>
   <div class="home">
      <v-navbar/>

      <div class="container">
         <v-flight-search/>

         <v-promotions/>

         <v-subscribe/>
      </div>

      <v-footer/>
   </div>
</template>

<script>
import VFlightSearch from '../components/VFlightSearch.vue'
import VFooter from '../components/VFooter.vue'
import VNavbar from '../components/VNavbar.vue'
import VPromotions from '../components/VPromotions.vue'
import VSubscribe from '../components/VSubscribe.vue'
export default {
   components: { VNavbar, VFlightSearch, VPromotions, VSubscribe, VFooter },

}
</script>

<style>

</style>