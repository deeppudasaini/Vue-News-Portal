<template>
    
    <Title :showNav=false :showWeather=false :showButton=false />
    <div class="row">
    <div class="col-md-4 mx-auto">
      <p id="top">Log in or create an account</p>
      <LoginForm />
      <hr class="line-breaker">
      <LoginOption />
    </div>
  </div>
<FooterTwo />
</template>
<script>
import Title from '../components/Title/Title';
import LoginForm from '../components/Form/LoginForm';
import LoginOption from '../components/Form/OtherLogin/LoginOption';
import FooterTwo from '../components/Footer/FooterTwo.vue'
export default({
   name:'Login',
   components:{
       Title,
       LoginForm,
       LoginOption,
       FooterTwo
   },
    props:{}
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:wght@700&display=swap');

p,a
{
  font-family: 'Roboto', sans-serif
}
#top
{
  font-family: 'Merriweather', serif;
  
  font-size: 24px;
}

@import'~bootstrap/dist/css/bootstrap.css';
</style>
