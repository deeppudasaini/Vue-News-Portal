<template>
<div class="row">
   <User />
    <div class="col comment">
        
        
        <label><b>Sarah</b>  1 day ago</label>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</p>
        <SingleReplyComment />
        
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
import SingleReplyComment from './SingleReplyComment'
import User from '../User/User.vue'
export default {
    name: 'SingleComment',
    components:{
        SingleReplyComment,User
    },
    data()
    {
        return {
            replyStatus:true,
        }
    }
}
</script>

<style scoped>

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