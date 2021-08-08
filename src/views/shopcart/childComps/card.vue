<template>
<div id="card" v-for="(item,index) in $store.state.cartList" :key="item.iid" >
  <van-checkbox v-model="item.checked" @click="changeChecked(index)"/>
  <van-card :num="item.count" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.image"/>
</div>    
</template>

<script>
  import {
    Card,
    Checkbox
  } from 'vant';
  export default {
    name: 'card',
    components: {
      [Card.name]: Card,
      [Checkbox.name]: Checkbox
    },
    methods:{
      changeChecked(index){
        this.$store.commit('changeChecked',index)
      }
    },
  }
</script>

<style>
#card{
  position: relative;
}
#card .van-checkbox{
  position: absolute;
  top:42px;
  left: 2vh;
}
.van-card{
  height: 100%;
  width: 90vw;
  margin-left: 10vw;
}
</style>