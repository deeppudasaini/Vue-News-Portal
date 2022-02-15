<template>
 
    <div class="col-10 col-md-8">
        <div class="row"><h1>{{Title}}</h1></div>
        <div class="row"><SinglePopular /></div>
        <div class="row"><SinglePopular /></div>
        <div class="row"><SinglePopular /></div>
        <div class="row"><SinglePopular /></div>
        <div class="row"><SinglePopular /></div>
        
        
        
    </div>
</template>

<script>
import SinglePopular from './SinglePopular.vue'

export default({
   name: 'Populars',
   props: {
       Title:String
   }
   ,
   components: {
    SinglePopular
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
</style>