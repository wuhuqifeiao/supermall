<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="Details,Shopcart,category">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <tab-bar></tab-bar>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar.vue'
  export default {
    name: 'app',
    components: {
      TabBar,
    }
  }
</script>

<style>
  @import '~@/assets/css/base.css';
</style>