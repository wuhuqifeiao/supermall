<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <template v-slot:center>我的</template>
    </nav-bar>
    <user></user>
    <user-service></user-service>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue';

import User from '@/views/profile/childComps/user.vue'
import UserService from '@/views/profile/childComps/userService.vue';

export default {
  name:'profile',
  components:{
    NavBar,
    User,
    UserService
  }
}
</script>

<style>
  .profile-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>