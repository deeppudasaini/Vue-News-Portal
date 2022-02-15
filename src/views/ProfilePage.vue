<template>
    <Title :showNav=false :showWeather=false :showButton=false :showProfile=true />
    <div class="row d-flex flex-row">
    <div class="col-4">
    <Sidebar />
    </div>
    
    <div class="col-md-6 mx-auto">
    <DetailForm />
    </div>
    </div>
   
    <FooterTwo/>
</template>

<script>
import Title from '../components/Title/Title';
import FooterTwo from '../components/Footer/FooterTwo';
import Sidebar from '../components/Body/Sidebar/Sidebar.vue';
import DetailForm from '../components/Form/DetailForm.vue';
export default {
name:'ProfilePage',
components:{
    Title,FooterTwo,Sidebar,DetailForm
}
}
</script>

<style scoped>
/* #horizontal{
    position: relative;
    transform: rotate(90deg);
    height: 1px;
    width: 100%;
} */

</style>