<template>
  <div id="tab-bar">
    <router-link to="/home">
      <div class="tab-bar-item">
        <img src="@/assets/img/tabbar/home.svg" alt="" v-if="$route.path!=='/home'" />
        <img src="@/assets/img/tabbar/home_active.svg" alt="" v-else />
        <div>首页</div>
      </div>
    </router-link>
    <router-link to="/category">
      <div class="tab-bar-item">
        <img src="@/assets/img/tabbar/category.svg" alt="" v-if="$route.path!=='/category'" />
        <img src="@/assets/img/tabbar/category_active.svg" alt="" v-else />
        <div>分类</div>
      </div>
    </router-link>
    <router-link to="/shopcart">
      <div class="tab-bar-item">
        <img src="@/assets/img/tabbar/shopcart.svg" alt="" v-if="$route.path!=='/shopcart'" />
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" v-else />
        <div>购物车</div>
      </div>
    </router-link>
    <router-link to="/profile">
      <div class="tab-bar-item">
        <img src="@/assets/img/tabbar/profile.svg" alt="" v-if="$route.path!=='/profile'" />
        <img src="@/assets/img/tabbar/profile_active.svg" alt="" v-else />
        <div>我的</div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  };
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px rgba(100, 100, 100, 0.1);
    z-index: 8;
  }

  #tab-bar a {
    flex: 1;
  }

  .tab-bar-item {
    text-align: center;
    height: 48px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  
  .router-link-active{
    color:#ff5777;
  }
</style>