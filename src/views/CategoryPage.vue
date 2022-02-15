<template>
<Title />
  <div class="container-fluid">
    <MostPopular pageTitle="Tech" pageSideTitle="Featured"/>      
  </div>
  <Footer />
</template>

<script>
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import MostPopular from '../components/Body/Popular/MostPopular'
export default {
name:'CategoryPage',
components: {
    Title,Footer,MostPopular
}
}
</script>
<style>
</style>