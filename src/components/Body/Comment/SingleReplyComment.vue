<template>
<div class="row">
   <div class="col-md-0"><img src="https://randomuser.me/api/portraits/women/44.jpg"/></div>
    <div class="col comment">
        
        
        <label><b>Sarah</b>  1 day ago</label>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</p>
        
    </div>
  
    
</div>
 <div class="row">
     <div class="col-md-1">
         <i class="far fa-thumbs-up"></i>
         </div>
         <div class="col-md-1">
             <a href=""><p>Reply</p></a>
         </div>
         <div class="col-md-1">
             <a href=""><b>...</b></a>
         </div>  
    </div>
   
        
        

</template>
<script>

export default {
    name: 'SingleReplyComment',
    components:{
        
    },

}
</script>

<style scoped>
img
{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.comment
{
    text-align:left;
}
p
{
    font-size: 18px;
    font-family: 'Merriweather', serif;

}
</style>