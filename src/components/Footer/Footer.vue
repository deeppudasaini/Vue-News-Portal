<template>
    <!-- Footer -->
<footer class="page-footer pt-4">
  <div class="container">
    <div class="row">
      <div class="foot-one col">
        <Copyrights />
      </div>
      <div class="foot-one col">
        <Category />
      </div>
      <div class="foot-one col">
        <SocialMedia />
      </div>
    </div>
  </div>
  

</footer>

</template>
<script>

import SocialMedia from './Media/SocialMedia.vue'
import Category from './Category/Category.vue'
import Copyrights from './Rights/Copyrights.vue'
export default({
    name: 'Footer',
    props:{},
    components:
    {
        SocialMedia,
        Category,
        Copyrights
    }
})
</script>
<style scoped>
footer{
  width: 100%;
}
.foot-one{
  border-top: 1px solid #000;
  border-right: 1px solid #000;
}
</style>
