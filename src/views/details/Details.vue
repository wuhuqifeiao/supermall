<template>
  <div id="details">
    <div class="background"></div>
    <div class="back" @click="backClick">&lt;返回</div>
 
    <van-tabs v-model="active" color="#ff5777" >
      <van-tab title="商品">
        <swiper :topBar="topBar" class="swiper"></swiper>
        <shop-info :info="info" :detailInfo="detailInfo"></shop-info>
      </van-tab>
      <van-tab title="参数">
        <goods-param :goodsParam="goodsParam"></goods-param>
      </van-tab>
      <van-tab title="评论">
        <comment :comment="comment"></comment>
      </van-tab>
      <van-tab title="推荐">
        <recommend :recommend="recommend"></recommend>
      </van-tab>
    </van-tabs>
    <action-bar @addCart="addCart"></action-bar>
  </div>
</template>


<script>
  // 网络请求相关
  import {
    getDetails,
    getRecommend,
    info,
    goodsParam
  } from '@/network/details.js'
  // 公共组件
  import ActionBar from '@/views/details/childComps/actionBar.vue'
  // 子组件
  import shopInfo from '@/views/details/childComps/shopInfo.vue'
  import Swiper from '@/views/details/childComps/swiper.vue'
  import GoodsParam from '@/views/details/childComps/goodsParam.vue'
  import Comment from '@/views/details/childComps/comment.vue'
  // vant ui引入
  import {
    Tabs,
    Tab,
    Toast
  } from 'vant'
  import Recommend from '@/views/details/childComps/recommend.vue'


  export default {
    name: "Details",
    components: {
      [Tabs.name]: Tabs,
      [Tab.name]: Tab,
      [Toast.name]:Toast,
      Swiper,
      shopInfo,
      GoodsParam,
      Comment,
      Recommend,
      ActionBar
    },
    data() {
      return {
        active: '商品',
        iid: '',
        topBar: [],
        info: {},
        detailInfo: {},
        goodsParam: {},
        comment: {},
        recommend: []
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      addCart(){
        const product={}
        product.count=1
        product.checked=true
        product.image=this.topBar[0]
        product.title=this.info.title
        product.desc=this.info.desc
        product.price=this.info.realPrice
        product.iid=this.iid
        this.$store.commit('addCart', product)
        this.$store.commit('getTotalPrice')
        Toast('添加购物车成功');
      }
    },
    created() {
      this.iid = this.$route.params.iid
      getDetails(this.iid).then(res => {
          console.log(res);
          const data = res.data.result
          this.topBar = data.itemInfo.topImages
          this.detailInfo = data.detailInfo
          this.info = new info(data.shopInfo, data.itemInfo, data.columns)
          this.goodsParam = new goodsParam(data.itemParams.info, data.itemParams.rule)
          if (data.rate.cRate !== null) {
            this.comment = data.rate.list[0]
          }
        }),
        getRecommend().then(res => {
          console.log(res);
          this.recommend = res.data.data.list
        })
    }
  }
</script>
<style scoped>
  #details {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .background {
    position: fixed;
    top: 0;
    height: 44px;
    width: 100%;
    background-color: #fff;
    z-index: 9
  }

  .back {
    position: fixed;
    z-index: 11;
    left: 15px;
    top: 15px;
  }

  .swiper {
    margin-top: 44px;
  }
</style>

<style>
  #details .van-tabs__wrap {
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 70vw;
    margin-left: 20vw;
    height: 44px;
  }
  .van-tab__pane, .van-tab__pane-wrapper{
    height: 100vh;
    overflow: scroll;
  }
</style>