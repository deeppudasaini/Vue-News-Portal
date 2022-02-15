<template>
<h1>Comments</h1>
<SingleComment />
<p>View More ></p>
</template>
<script>
import SingleComment from './SingleComment.vue'
export default {
    name: 'Comments',
    components:{ 
        SingleComment
    }
}
</script>

<style scoped>
h1
{
    text-align: left;
}
p{
    font-size:18px ;
    font-family: 'Merriweather', serif;
    font-style: italic;
}
</style>