<template>

<div class="row">
    <div class="col">
        <ArticleImage/>
    </div>
    <div class="col">
        <ArticleContent/>
    </div>
</div>

        
    
    <hr class="line-breaker">
</template>
<script>
import ArticleContent from './ArticleContent.vue';
import ArticleImage from './ArticleImage.vue';
export default({
    name:"RandomArticle",
    props:{},
    components:{
        ArticleImage,
        ArticleContent
    }
})
</script>

<style>

</style>
