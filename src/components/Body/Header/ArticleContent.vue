<template>
    
            <div class="col">
      <ArticleText title="title" foot="date" />
    
        
        </div>
</template>
<script>

import ArticleText from '../Article/ArticleText.vue'
export default({
    name:"ArticleContent",
    props:{},
    components:{
        ArticleText
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:wght@700&display=swap');


</style>
