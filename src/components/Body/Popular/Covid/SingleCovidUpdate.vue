<template>
    <div class="row">
            
                <div class="col">
                <ArticleText title="latest-title" :read="false" foot="latest-time" context="" />
                </div>
                
            
        </div>
        <hr/>
</template>
<script>
import ArticleText from '../../Article/ArticleText.vue';
export default ({
    name: 'SingleCovidUpdate',
    props:{},
    components:{
        ArticleText
    }
})
</script>
<style scoped>
hr{
    width: 25%;
    height:2px;
    
    border-width:0;
    color:gray;
    background-color:gray;
    margin-top:40px;
    margin-bottom:50px;
}
</style>
