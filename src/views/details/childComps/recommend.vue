<template>
  <div id="goodsRecommend">
    <div v-for="(item,index) in recommend" :key="index">
      <a>
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
        <div>
          <p>{{item.price}}&nbsp;</p>
          <p>&nbsp;❤{{item.cfav}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsRecommend",
    props: {
      recommend: Array
    }
  }
</script>

<style>
  #goodsRecommend {
    margin-top: 44px;
    margin-bottom: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  #goodsRecommend div {
    width: 48%;
  }

  #goodsRecommend div img {
    width: 100%;
    height: 85%;
    vertical-align: middle;
    border-radius: 5px;
  }

  #goodsRecommend div p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  #goodsRecommend div p {
    font-size: 12px;
  }

  #goodsRecommend div a div {
    display: flex;
    width: 100%;
  }

  #goodsRecommend div a div p {
    flex: 1;
    text-align: left;
  }

  #goodsRecommend div a div p:first-child {
    color: #ff5777;
    text-align: right;
  }
</style>