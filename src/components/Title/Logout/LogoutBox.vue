<template>
  <div class="dropdown">
      <div class="row">
          <div class="col-md-auto">
              <User :icon="false"/>
          </div>
<div class="col col-lg-4">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Keeanu Reeves
  </button>
  <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
      <p class="m-2">keanureeves@gmail.com</p>
      <hr>
    <a class="dropdown-item" href="#">Basic Info</a>
    <a class="dropdown-item" href="#">Favourites</a>
    <a class="dropdown-item" href="#">Notifications</a>
    <hr>
    <a style="text-align:center" class="dropdown-item" href="#">Logout</a>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import  User  from '../../Body/User/User.vue';
export default {
name:'LogoutBox',
components:
{
    User
}
}
</script>

<style>

</style>