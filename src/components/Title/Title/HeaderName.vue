<template>
    <div class="header-name">
    <h1>
        {{name}}
    </h1>
    </div>
</template>

<script>


export default({
    name:'HeaderName',
    props:{
        name:String
    }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plaster&display=swap');
.header-name h1{
    font-size:36px;
    font-family: 'Plaster', cursive;
}
</style>