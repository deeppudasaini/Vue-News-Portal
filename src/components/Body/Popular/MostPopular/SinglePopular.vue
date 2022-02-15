<template>
    <div class="row">
            <div class="row">
                <div class="col">
                <ArticlePicture imageClass="latest-image" imageText="bottom"/> 
                </div>
                <div class="col">
                <ArticleText title="latest-title" :read="false" foot="latest-time" context="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ad qui optio repellendus." />
                </div>
                
                
            </div>
    </div>
</template>
<script>
import ArticlePicture from '../../Article/ArticlePicture.vue';
import ArticleText from '../../Article/ArticleText.vue';

export default({
   name: 'SinglePopular',
   props:{},
   components:
   {
       ArticlePicture,
       ArticleText
   }
})
</script>
<style scoped>
.row
{
    margin-bottom: 5px;
}
</style>
