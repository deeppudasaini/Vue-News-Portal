<template>
<div class="row">
<div class="col-md-auto">
            <User  :icon="true"/>
</div>
<div class="col col-lg-4">
    <h4>Keeanu Reeves</h4>
    <p>Toronto, Canada</p>
</div>
</div>

 <form>
     <div class="mb-3">
      
    <label class="form-label">Full Name</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Keeanu Reeves">
    
  </div>
  <div class="mb-3">
      
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" >
  </div>
     <div class="mb-3">
      
    <label class="form-label">Location</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Toronto, Canada">
    
  </div>
     <div class="mb-3">
      
    <label class="form-label">Linked Account</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Google">
    
  </div>

  <button type="submit" class="btn">Save Changes</button>
</form>
</template>

<script>
import User from '../Body/User/User.vue'
export default {
name:'DetailForm',
components:{
    User
}
}
</script>

<style scoped>
input[type=email],input[type=password],input[type=text]{ 

    border-color: black;
    height: 62px;
}
label
{
    
 font-family: 'Roboto', sans-serif;
 font-size: 18px;
 text-align: left;
}

input
{
    font-family: 'Roboto', sans-serif;
}
button
{
    width:100%;
    height: 65px;
    background-color: black;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    border-radius: 15px;
}
p,h4
{
    font-family: 'Roboto', sans-serif;
}
</style>