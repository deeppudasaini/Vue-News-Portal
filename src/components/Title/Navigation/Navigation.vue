<template>
    <nav class="navbar navbar-expand-lg">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      
    <div class="navbar-nav">
    <div class="row">
      <div class="col">
        <a class="nav-item nav-link active " href="#"><router-link to="/category-page">Politics</router-link></a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">World</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">National</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">Business</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">Health</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">Tech</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">Sports</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">Entertainment</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">Arts</a>
      </div>
      <div class="col">
        <a class="nav-item nav-link active " href="#">Style</a>
      </div>
       
      <div class="col-md-auto">
         <form class="form-row nav-item nav-link active" @submit="submitSearch" >
          <input class="search" :type="searchState?'text':'hidden'"  placeholder="Search">
          
          
          <button @mouseover="searchHover" style="margin-left: 10px;"><i class="fas fa-search "></i></button>
        </form>        
      </div>
    </div>
        
    
    </div>
    
  </div>
  
</nav>

</template>

<script>
export default ({
   name:'Navigation',
   props:{},
   data(){
     return{
       searchState:false
     }
   },
   methods:
   {
     submitSearch(e){
       e.preventDefault();
       console.log("ola ssenirs")
     },
     searchHover(){
       this.searchState=true;
     }
   }

})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
a
{
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    
}
button
{
  transition: 00.8s;
}
.navbar
{
    width:100%;
}

.search{
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  transition: 0.8s;
  border: 1px solid #ccc;
  border-radius:5px;
  padding: 4px;
  
}

</style>
