<template>
  <div id="comment">
    <div class="linear strongLinear"></div>
    <div class="separate clear-fix">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="linear strongLinear"></div>
    <div class="userComment">
      <p><img :src="comment.user.avatar" alt="">{{comment.user.uname}}</p>
      <p>{{comment.content}}</p>
      <p class="commentInfo">
        <span>{{getCreated}}&nbsp;&nbsp;</span>
        <span>{{comment.style}}</span>
      </p>
      <img :src="item" alt="" v-for="(item,index) in comment.images" :key="index">
    </div>
  </div>
</template>

<script>
  import {
    formatDate
  } from '@/common/formatDate.js'
  export default {
    name: "comment",
    props: {
      comment: Object
    },
    computed: {
      getCreated() {
        const date = new Date(this.comment.created * 1000)
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  #comment {
    margin-top: 55px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 48px;
    font-size: 12px;
    line-height: 12px;
  }

  .separate {
    margin-top: 6px;
  }

  .separate span:last-child {
    float: right
  }

  .linear {
    margin-top: 10px;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, white, lightgrey, lightgrey, grey, grey, lightgrey, lightgrey, white)
  }

  .strongLinear {
    height: 2px;
  }

  .userComment p img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    float: left;
  }

  .userComment p:first-child {
    margin-top: 12px;
    height: 48px;
    line-height: 48px;
  }
  .userComment p:nth-child(2){
    margin-top: 12px;
  }
  .userComment .commentInfo{
    margin-top:12px;
  }
  .userComment img{
    margin-top: 12px;
    width: 60px;
    height: 60px;
    margin-right: 12px;
  }
</style>