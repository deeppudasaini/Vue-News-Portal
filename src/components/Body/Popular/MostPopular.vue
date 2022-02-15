<template>
   
    <div class="row">
      
        <Populars :Title="pageTitle" />
        <CovidUpdates :sideTitle="pageSideTitle"/>
        
    </div>
</template>
<script>

import Populars from './MostPopular/Populars'
import CovidUpdates from './Covid/CovidUpdates.vue'
export default({
  name: 'MostPopular',
  props: {
    pageTitle:{
      type: String,
      default: 'Most Popular'
    },
    pageSideTitle:{
      type: String,
      default: 'Covid Updates'
    }
  },
  components: {
    Populars,CovidUpdates
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

</style>
