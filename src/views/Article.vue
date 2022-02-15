<template>

  <Title />
  <div class="row">
      <div class="col-md-10 mx-auto">
<ArticlePicture imageClass="article-image" imageText="bottom"/> 
</div>
  </div>
  
  <div class="row">
<div class="col-md-10 mx-auto">
    <div class="article shadow -lg p-3 mb-5 bg-white rounded">
<ArticleText title="article-title"  v-bind:read="false" foot="date" context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reiciendis qui magni necessitatibus ipsam eius, dolores pariatur earum vero ipsa consectetur corrupti dignissimos delectus, non quos numquam aperiam labore." />
</div>
</div>

</div>
<div class="d-flex flex-row-reverse">
  <div class="p-2"><i class="fal fa-share-alt"></i> 3k</div>
  <div class="p-2">
    <button v-on:click="showComments"><i :class="comment?'fas fa-comment-alt':'far fa-comment-alt'"></i> 1.4k</button>
    </div>
  <div class="p-2"><i class="fas fa-eye"></i> 1.5m</div>
</div>
<hr class="line-breaker"/>
<Comments v-if="comment"/>
<LatestArticles title="Related News"/>
     
  <Footer />
</template>
<script>
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import ArticlePicture from '../components/Body/Article/ArticlePicture.vue';
import ArticleText from '../components/Body/Article/ArticleText';
import Comments from '../components/Body/Comment/Comments';
import LatestArticles from '../components/Body/Latest/LatestArticles';
export default {
name:'Article',
components:{
    Title,
    Footer,
    ArticlePicture,
    ArticleText,
    LatestArticles,
    Comments
},
data()
{
  return {
    comment:false
    }
},
methods:
{
  showComments(){
    this.comment=!this.comment;
  }
}


}
</script>

<style scoped>
.article
{
    padding:30px;
    border: 1px solid #A19D9D;
    border-top-style:none;
    text-align: center;
}


</style>