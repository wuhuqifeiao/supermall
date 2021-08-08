<template>
  <div id="categoryItem">
    <div v-for="(item,index) in categoryGoods" :key="index">
      <a @click="detailsClick(goodsInfo[index].iid)">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "categoryItem",
    props: {
      categoryGoods: Object,
      goodsInfo:Array
    },
    methods: {
      detailsClick(iid) {
        this.$router.push('/details/' + iid)
      }
    }
  }
</script>

<style>
  #categoryItem {
    overflow: scroll;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 50px;
  }

  #categoryItem div {
    width: 50%;
  }

  #categoryItem div img {
    height: 80%;
    width: 100%;
  }

  #categoryItem div p {
    text-align: center;
  }
</style>