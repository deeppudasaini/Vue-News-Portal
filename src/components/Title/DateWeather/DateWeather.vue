<template>

<div class="container">
  <div class="row">
    <div class="col-1">
      <i class="fas fa-cloud"></i>
    </div>
    <div class="col-8">
         <div class="row">
            <div class="col">
            <p>Kathmandu, NP 72°F</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
            <p>Tuesday, July 20, 2021</p>
            </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>


export default({
    name:'DateWeather',
    props:{}
})
</script>
<style scoped>
p
{
    font-family: 'Roboto', serif;
    font-size: 11px;
}
.row{
    float: left;
}
i{
    float: left;
}

</style>