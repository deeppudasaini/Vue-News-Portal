<template>
  <Title />
  <RandomArticle />
  <LatestArticles />
  <MostPopular />
  <Footer />
  
</template>

<script>
// import './assets/tailwind.css'
import Title from '../components/Title/Title';
import RandomArticle from '../components/Body/Header/RandomArticle'
import LatestArticles from '../components/Body/Latest/LatestArticles'
import MostPopular from '../components/Body/Popular/MostPopular'
import Footer from '../components/Footer/Footer.vue'
export default {
  name: 'Home',
  components: {
   Title,
   RandomArticle,
   LatestArticles,
   MostPopular,Footer
  }
}
</script>

<style>

</style>
