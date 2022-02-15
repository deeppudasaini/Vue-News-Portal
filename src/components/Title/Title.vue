<template>

  
   <div class="row header-band">
    <div class="col" >
      <DateWeather  v-if="showWeather"/>
    </div>
    <div class="col">
      <HeaderName name="Sara News"/>
    </div>
    <div class="col">
      <Button  v-if="showButton" />
      <LogoutBox v-else-if="showProfile" />
    </div>
  </div>
  <div class="row" >
  <hr class="nav-breaker">
  <div class="col" v-if="showNav">
    <Navigation />
    <hr class="nav-breaker below">
  </div>
  
  </div>
  
 

</template>
<script>
import HeaderName from './Title/HeaderName'
import DateWeather from './DateWeather/DateWeather'
import Button from './Button/Button'
import Navigation from './Navigation/Navigation'
import LogoutBox from './Logout/LogoutBox.vue'

export default{
    name:'Title',
    props:{
      showNav:{
        type:Boolean,
        default:true
      },
      showWeather:{
        type:Boolean,
        default:true
      },
      showButton:{
        type:Boolean,
        default:true
      },
      showProfile:{
        type:Boolean,
        default:false
      }
    },
    components:
    {
      HeaderName,DateWeather,Button,Navigation,LogoutBox
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:wght@700&display=swap');

.row
{

  padding-left: 20px;
  padding-right: 20px;
  
}
.nav-breaker
{
    width: 100%;
    height:2px;
    border-width:0;
    color:gray;
    background-color:gray;
    
    
}
.below{
    margin-bottom:20px;
}
</style>