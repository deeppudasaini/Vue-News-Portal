<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <p>Follow:</p>
      </div>
      <div class="col">
        <a class="fb-ic"> <i class="fab fa-facebook-f white-text mr-4"> </i> </a>
          <a class="tw-ic"> <i class="fab fa-twitter white-text mr-4"> </i> </a> 
         <a class="gplus-ic"> <i class="fab fa-google-plus-g white-text mr-4"> </i> </a>
      </div>
    </div>
    <div class="row">
      <div class="col"><p>Subscribe:</p></div>
      <div class="col">
 
        <form class="form-row">
          <div class="col-6">
            
          <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="col">
          <button class="btn">Join</button>
          </div>
        </form>
      </div>
       
      

    </div>
    </div>      
    
</template>
<script>
export default ({
    name: 'SocialMedia',
    props: {}
})
</script>
<style scoped>
.btn
{
  background-color: black;
  color: white;
  border-radius: 8px;
  
}
.col
{
  text-align: left;
}
form{
  border: 1px solid #000;
  border-radius: 8px;
  
}
p
{
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}
input
{
  border: none;
}
</style>