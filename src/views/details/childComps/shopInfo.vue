<template>
  <div id="shopInfo">
    <h4>【{{info.name}}】{{info.title}}</h4>
    <p class="price">{{info.newPrice}}<s>{{info.oldPrice}}</s></p>
    <ul class="columns">
      <li v-for="(item,index) in info.columns" :key=index>{{item}}</li>
    </ul>
    <div class="linear"></div>

    <ul class="services">
      <li v-for="(service,index) in info.services" :key=index><img :src="service.icon" alt="">{{service.name}}</li>
    </ul>
    <div class="linear strongLinear"></div>

    <div class="shopLogo">
      <p><img :src="info.shopLogo" alt="">&nbsp;{{info.name}}</p>
    </div>

    <div class="box">
      <div class="leftInfo">
        <div class="sells">
          <p><strong>{{getSells(info.sells)}}</strong></p>
          <p>总销量</p>
        </div>
        <div class="goodsCount">
          <p><strong>{{info.goodsCount}}</strong></p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="rightInfo">
        <div v-for="(score,index) in info.scores" :key="index">{{score.name}}&nbsp;
          <div :class="{'isBetter':score.isBetter}">{{score.score}}</div>
          <div>
            <span v-show="score.isBetter" style="color:red">高</span>
            <span v-show="!score.isBetter">低</span>
          </div>
        </div>
      </div>
    </div>
    <van-button type="default" class="default" :block="true">进入店铺</van-button>
    <div class="linear strongLinear"></div>
    
    <!-- v-if防止页面渲染时取不到数据 -->
    <div class="detailInfo" v-if="detailInfo.detailImage!=null">
      <div>{{detailInfo.detailImage[0].desc}}</div>
      <p>{{detailInfo.detailImage[0].key}}</p>
      <img :src="detail" alt="" v-for="(detail,index) in detailInfo.detailImage[0].list" :key="index">
    </div>
  </div>
</template>

<script>
  import {
    Button
  } from 'vant';
  export default {
    name: "shopInfo",
    components: {
      [Button.name]: Button
    },
    props: {
      info: {
        type: Object
      },
      detailInfo: {
        type: Object
      }
    },
    methods: {
      getSells(newSells) {
        if (newSells > 10000) {
          newSells /= 10000
          newSells = newSells + '万'
        }
        return newSells
      }
    }
  }
</script>

<style scoped>
  #shopInfo {
    margin: 6px;
  }

  #shopInfo h4 {
    color: #000000;
  }

  #shopInfo .price {
    margin-top: 5px;
    color: #ff5777;

  }

  #shopInfo .price s {
    font-size: 12px;
    color: #666;
  }

  #shopInfo ul {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  #shopInfo ul li {
    text-align: center;
    font-size: 12px;
    width: 33%;
  }

  #shopInfo ul li:first-child {
    text-align: left;
  }

  #shopInfo ul li:nth-child(3) {
    text-align: right;
  }

  #shopInfo ul li img {
    width: 12px;
    height: 12px;
    vertical-align: middle;
  }

  .linear {
    margin-top: 10px;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, white, lightgrey, lightgrey, grey, grey, lightgrey, lightgrey, white)
  }

  .strongLinear {
    height: 3px;
  }

  .shopLogo {
    margin-top: 24px;

  }

  .shopLogo p {
    height: 36px;
    line-height: 36px;
  }

  .shopLogo img {
    width: 36px;
    height: 36px;
    float: left;
    border-radius: 18px;
  }

  .box {
    display: flex;
    margin-top: 15px;
  }

  .box div {
    flex: 1;
    font-size: 12px;
  }

  .box div p {
    padding-bottom: 6px;
  }

  .box .leftInfo {
    display: flex;
    padding-top: 12px;
  }

  .box .leftInfo p {
    flex: 1;
    text-align: center;
  }

  .box .rightInfo {
    padding-left: 36px;
  }

  .box .rightInfo div {
    display: flex;
    padding-bottom: 6px;
  }

  .box .rightInfo div div {
    color: green;
  }

  .isBetter {
    color: red !important;
  }
.detailInfo{
  margin-bottom: 48px;
}
  .detailInfo img{
    vertical-align: middle;
  }
  .detailInfo img:first-child{
    margin-top:12px;
  }
  .detailInfo p{
    padding-left:12px;
    padding-top:12px;
    font-size: 14px;
  }
</style>

<style>
  .default {
    margin: 0 auto;
    width: 30%;
  }
</style>