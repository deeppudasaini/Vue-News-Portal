<template>

    <div class="col-6 col-md-4">
        
        <div class="row"><h1>{{sideTitle}}</h1></div>
        <div class="row"><SingleCovidUpdate /></div>
        <div class="row"><SingleCovidUpdate /></div>
        <div class="row"><SingleCovidUpdate /></div>
        <div class="row"><SingleCovidUpdate /></div>
        <div class="row"><SingleCovidUpdate /></div>
          
    </div>
</template>

<script>
import SingleCovidUpdate from './SingleCovidUpdate.vue'
export default({
   name: 'CovidUpdates',
   props: {
       sideTitle: String
   },
   components:
   {
       SingleCovidUpdate
   }
})
</script>

<style scoped>
h1
{
    margin-top: 20px;
    margin-bottom: 20px;
    float: left;
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
}
.row
{
    margin-left: 20px;
}
</style>
