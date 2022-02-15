<template>
 <div class="col">
      <ArticlePicture imageClass="article-image" imageText="right"/> 
    </div>
</template>
<script>
import ArticlePicture from '../Article/ArticlePicture.vue'
export default({
    name:"ArticleImage",
    props:{
        
    },
    components:
    {
     ArticlePicture
    }
})
</script>

<style scoped>

</style>
