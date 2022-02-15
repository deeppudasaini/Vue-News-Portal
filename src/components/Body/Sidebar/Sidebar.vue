<template>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
   <div id="sidenavigation" class="d-flex flex-column flex-shrink-0 p-3" >
   <div class="navbar-nav">
      <h3 class="nav-item nav-link">User Profile</h3>
   
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item nav-link  act">
        <a href="#" class="nav-link " aria-current="page">
          Basic Info
        </a>
      </li>
      <li>
        <a href="#" class="nav-item nav-link ">
          
          Favourites
        </a>
      </li>
      <li>
        <a href="#" class="nav-item nav-link ">
          
          Notifications
        </a>
      </li>
      
    </ul>
    
    <div class="nav-item nav-link logout">
 
      <a href="">
        <i class="fas fa-sign-out"></i><label>Logout</label>
      </a>
    </div>
  </div>
   </div>
  </div>
</template>

<script>
export default {
name:'Sidebar'
}
</script>

<style scoped>
#sidenavigation
{
    margin-left: 20px;
    margin-right: 20px;
    
}
h3{
    font-family: 'Merriweather', serif; 
}
ul
{
    border-right:1px solid #ccc; 
}
label
{
    font-family: 'Roboto', sans-serif;
    margin: 2px;
}
a{
    font-family: 'Roboto', sans-serif;
}
.logout
{
    margin-top:90px
}
.act{
    border-right: 1px solid #000;
}
</style>