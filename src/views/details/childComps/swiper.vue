<template>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in topBar" :key="index" class="detailSwiper">
    <img :src="item" alt="">
  </van-swipe-item>
</van-swipe>
</template>

<script>
import{Swipe,SwipeItem} from 'vant'
  export default ({
    name: 'swiper',
    components: {
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem
    },
    props:{
      topBar:{
        type:Array
      }
    }
  })
</script>

<style>
  img{
    width: 100%;
  }
  .detailSwiper{
    height: 300px;
    overflow: hidden;
  }
</style>
