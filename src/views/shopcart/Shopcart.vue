<template>
  <div id="Shopcart">
    <nav-bar class="shop-nav">
      <template v-slot:center>购物车({{$store.state.cartList.length}})</template>
    </nav-bar>
    <card></card>
    <submit-bar></submit-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/navbar/NavBar.vue'
  import SubmitBar from '@/views/shopcart/childComps/submitBar.vue'
  import Card from '@/views/shopcart/childComps/card.vue'

  export default {
    name: "Shopcart",
    components: {
      NavBar,
      SubmitBar,
      Card,
    },
  }
</script>

<style scoped>
  .shop-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>