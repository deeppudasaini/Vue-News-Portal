<template>
  <div class="col-md-0">
      <img src="https://randomuser.me/api/portraits/women/44.jpg"/>
      <a v-if="icon" href=""><i class="fas fa-pen-square"></i></a>
      </div>
</template>

<script>
export default {
name:'User',
props:{
    icon:{
        default:false,
        type:Boolean
    }
}
}
</script>

<style scoped>
img
{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
i
{
    position: absolute;
    top:35px;
    left:53px;
}
</style>