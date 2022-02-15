<template>
  <div class="row">
      <p>By continuing, you agree to the <a href="">Terms of Service</a> and acknowledge our <a href="">Privacy Policy.</a></p>
      
      <button type="submit" class="btn"><i class="fab fa-google"></i>  Continue with Google</button>
      <button type="submit" class="btn"><i class="fab fa-facebook-f"></i>  Continue with Facebook</button>
      <button type="submit" class="btn"><i class="fab fa-apple"></i>  Continue with Apple</button>
  </div>
</template>

<script>
export default {
name:'LoginOption',
props:{}
}
</script>

<style scoped>
p
{

 font-family: 'Roboto', sans-serif;
 font-size: 18px;
}
button
{
    width:100%;
    height: 65px;
    background-color: white;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    border: 1px solid #000;
    border-radius: 15px;
    margin-bottom: 30px;
    white-space:normal;
    word-wrap:break-word;

}
.fa-google {
  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent; 
}
.fa-facebook-f
{
  color:rgb(66 ,103, 178)
}
a{
text-decoration-line: underline;
}
</style>