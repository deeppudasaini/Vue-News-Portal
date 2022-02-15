<template>
   <div class="container">
  <div class="row">
    <div class="col">
        <a id="login">
        <i class="fas fa-user"></i>
        Login
        </a>
    </div>
    
    <div class="col">
      
      
      
      <form class="form-row" @submit="submitSubscribe">
        
          
          <input id="email" type="email" class="form-control" placeholder="Email" />
          
          
          <button id="subscribe">Subscribe</button>
          
        </form>
        
        
    </div>
  </div>
 
</div>
</template>

<script>


export default({
    name:'Button',
    props:{},
  
    methods:
    {
    
      submitSubscribe(e)
      {
        e.preventDefault();
        console.log('ola seniore');
      }
    }
})
</script>
<style scoped>
button
{
    font-family: 'Roboto', serif;
    text-align:center;
  
    
}
#login
{
    font-size: 14px;
    padding: 2px;
    float: right;
}
#subscribe
{
    font-size: 18px;
    float: right;
    border: 1px solid #000;
    padding: 4px;
}
.row
{
    float: right;
}

</style>