<template>
    <div class="content">
            <h1 v-bind:id="title">Donec gravida dapibus vel sit risus suscipit</h1>
            <p id="content-body">
            {{context}}
            </p>
            <a href="#" v-if="read">Read More ></a>
            <p v-bind:class="foot">March 9, 2021 - John Travolta</p>
        </div>
</template>
<script>
export default ({
    name: 'ArticleText',
    props: {
        context: {
            type: String,
            default:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        foot:String,
        title:String,
        read:{
            type:Boolean,
            default:true
        }
    }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
 #title
{   
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    
}

#article-title
{
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    
    text-align: center;
}
 #latest-title
{
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    text-align: left;
}
.content #content-body
{
    font-size: 18px;
    font-family: 'Merriweather', serif;
    text-align: left;
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
  
  float: left;
  margin-top:258px ;
  font-size:18px ;
  font-family: 'Roboto Condensed', sans-serif;
  font-style: light;
  
}
.latest-time
{
  position: relative;
  bottom: 0px;
  float: left;
  margin-top:50px ;
  font-size:18px ;
  font-family: 'Roboto Condensed', sans-serif;
  font-style: light;  
}


.head-right p
{
    
    font-size:22px ;
    transform: rotate(-90deg);
    background: white;
    color: black;
    text-align: left;
}

.head-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
  height: 32px;
  width: 96px;
  top: 50%;
  transform: translate(50%, 10%);
  text-align: left;
  }
</style>