<template>
    <div class="random-article-image">
            <img src="https://picsum.photos/300/300" v-bind:id="imageClass">
            <div v-bind:class="imageText"><p>Tech</p></div>
        </div> 
</template>
<script>


export default ({
    name: 'ArticlePicture',
    props: {
    imageText:String,
    imageClass:String
    }
})
</script>
<style scoped>

.random-article-image {
  position: relative;
  text-align: center;
  color: white;
}

.bottom p
{
    
    font-size:22px ;
    
    background: white;
    color: black;
}

.bottom {
  position: absolute;
  top: 100%;
  left: 50%;
   height: 21px;
  width: 78px;
  transform: translate(-50%, -120%);
}
#article-image {
    width: 100%;
    height: 616px;
}

#latest-image {
    width: 100%;
    height: 200px;
}


.right p
{
    
    font-size:22px ;
    transform: rotate(-90deg);
    background: white;
    color: black;
}

.right {
  position: absolute;
  bottom: 8px;
  right: 16px;
  height: 32px;
  width: 96px;
  top: 50%;
  transform: translate(50%, 10%);
}
</style>