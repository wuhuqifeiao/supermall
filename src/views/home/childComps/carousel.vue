<template>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in banners" :key="index">
         <a :href="item.link">
       <img :src="item.image" alt="">
     </a>
  </van-swipe-item>
</van-swipe>
</template>

<script>
import{Swipe,SwipeItem} from 'vant'
  export default ({
    name: 'carousel',
    components: {
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem
    },
    props:{
      banners:{
        type:Array
      }
    }
  })
</script>
<style scoped>
  img{
    height:100%;
    width:100%;
  }
</style>