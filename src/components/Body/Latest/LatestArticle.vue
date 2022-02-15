<template>
    <div class="row">
        <ArticlePicture imageClass="latest-image" imageText="bottom"/> 
    </div>
    <div class="row">
         <LatestArticleContent />
    </div>
 
</template>
<script>
import LatestArticleContent from './LatestArticleContent.vue';
import ArticlePicture from '../Article/ArticlePicture.vue'
export default {
    name:'LatestArticle',
    props: {},
    components: {
        LatestArticleContent,
        ArticlePicture
    }

}
</script>
<style scoped>

.random-article-image {
  position: relative;
  text-align: center;
  color: white;
}

.right p
{
    
    font-size:22px ;
    
    background: white;
    color: black;
}

.right {
  position: absolute;
  top: 100%;
  left: 50%;
   height: 21px;
  width: 78px;
  transform: translate(-50%, -100%);
}
#article-image {
    width: 100%;
    height: 190px;
}
.row
{
    margin-right: 3px;
    margin-top: 20px;
    
}




</style>