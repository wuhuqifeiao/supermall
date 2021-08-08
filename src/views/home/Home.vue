<template>
  <div id="home" ref="scrollTop">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- 轮播图 vant ui-->
    <carousel :banners="banners"></carousel>
    <recommend :recommend="recommend"></recommend>
    <feature></feature>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
    <!-- 下拉加载更多 element ui -->
    <goods :goods="showGoods" v-infinite-scroll="load"></goods>
    <!-- 返回顶部 element ui-->
    <backtop></backtop>
  </div>
</template>

<script>
  //公共组件
  import NavBar from '@/components/navbar/NavBar.vue';
  import TabControl from '@/components/tabControl/tabControl.vue';
  import Backtop from '@/components/backtop/backtop.vue'
  // 子组件
  import Carousel from "@/views/home/childComps/carousel.vue";
  import Recommend from "@/views/home/childComps/recommend.vue";
  import Goods from '@/views/home/childComps/goods.vue';
  import Feature from '@/views/home/childComps/feature.vue';
  // 网络请求
  import {
    getHome,
    getHomeGoods
  } from '@/network/home.js';


  export default {
    name: 'home',
    components: {
      NavBar,
      TabControl,
      Goods,
      Backtop,

      Carousel,
      Recommend,
      Feature
    },
    data() {
      return {
        banners: [],
        recommend: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        scroll: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      // 网络请求相关
      getHome() {
        getHome().then(res => {
          console.log(res);
          this.banners = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      },
      // 事件监听相关
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      load() {
        this.getHomeGoods(this.currentType)
      },

    },
    created() {
      this.getHome(),
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    // 记录页面滚动高度
    beforeRouteEnter(to, from, next) {
      next(vm => {
        const scrollTop = vm.$refs.scrollTop
        // 记录滚动高度
        scrollTop.scrollTop = vm.scroll
      })
    },
    beforeRouteLeave(to, from, next) {
      const scrollTop = this.$refs.scrollTop;
      this.scroll = scrollTop.scrollTop; 
      next()
    }
  }
</script>

<style scoped>
  #home {
    padding-bottom: 49px;
    /* 解决部分浏览器的上拉加载失效问题 */
    height: 100vh;
    overflow: scroll;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>