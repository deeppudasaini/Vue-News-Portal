<template>
  <form @submit="saveLogin">
  <div class="form-group" >
    <label for="exampleInputEmail1" :style="errors.emailErrors.length>0?'color:red':'color:#000'" >Email address</label>
    <input type="email" v-model="credentials.email" :style="errors.emailErrors.length>0?'border-color:red':'border-color:#000'"  class="textfield form-control" id="exampleInputEmail1" aria-describedby="emailHelp" >
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" :style="errors.passwordErrors.length>0?'color:red':'color:#000'">Password</label>
    <input type="password" v-model="credentials.password" :style="errors.passwordErrors.length>0?'border-color:red':'border-color:#000'" class="textfield form-control" id="exampleInputPassword1" >
  </div>
 
  <button type="submit" @click="credentialData" class="btn">Continue</button>
</form>
</template>

<script>
export default {
name:'LoginForm',
props:{},
data(){
  return {
    
      errors:{
        emailErrors:[],
        passwordErrors:[]
      },
    credentials:{
      email:null,
      password:null
    }
  }
},
methods:
{
  saveLogin(e) {
    if (this.credentials.email && this.credentials.password) {
      e.preventDefault();
      return true;
    }
    this.errors.emailErrors=[];
    this.errors.passwordErrors=[];
    if(!this.credentials.email){
      this.errors.emailErrors.push('Email is required');
    }
    if(!this.credentials.password){
      this.errors.passwordErrors.push('Password is required');
    }
    e.preventDefault();
    
  },
  credentialData()
  {
    console.log(this.credentials);
    console.log(this.errors);
  
  }

}
}
</script>

<style scoped>
.textfield
{
    border-color: black;
    height: 62px;
}
label
{
    
 font-family: 'Roboto', sans-serif;
 font-size: 18px;
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
</style>