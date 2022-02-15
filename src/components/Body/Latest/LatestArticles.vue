<template>
    <div class="container">
        <div class="row">
        <h1>{{title}}</h1>    
        </div>
        <div class="row">
            <div class="col">
                <LatestArticle />
            </div>
            <div class="col">
                <LatestArticle />
            </div>
            <div class="col">
                <LatestArticle />
            </div>
            <div class="col">
                <LatestArticle />
            </div>
        </div>
        
        
    </div>
    <hr class="line-breaker">
</template>
<script>
import LatestArticle from './LatestArticle.vue'
export default {
    name:'LatestArticles',
    props: {
        title: {
            type: String,
            default: 'Latest Articles',
        }
    },
    components:
    {
        LatestArticle
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
h1
{
    margin-top: 20px;
    float: left;
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
}
</style>