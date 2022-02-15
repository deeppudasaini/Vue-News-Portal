<template>
   <ArticleText title="latest-title" foot="latest-time" context="" />
</template>
<script>

import ArticleText from '../Article/ArticleText.vue'
export default({

   name: 'LatestArticleContent',
   props: {
   },
   components: {
       ArticleText
   }
})
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:wght@700&display=swap');

.content h1
{   
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
}

a
{
    
    position: relative;
    float: right;
    margin-top: 30px;
    font-size:18px ;
    font-family: 'Merriweather', serif;
    font-style: italic;
}
.date {
  position: relative;

  bottom: 0px;
  float: left;
  margin-top:10px ;
  font-size:18px ;
  font-family: 'Roboto', serif;
  font-style: light;
}
</style>