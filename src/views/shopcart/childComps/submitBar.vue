<template>
<div id="submitBar">
  <van-submit-bar :price="$store.state.totalPrice" button-text="提交订单" class="submit">
  </van-submit-bar>
</div> 
</template>

<script>
  import {
    SubmitBar,
    Checkbox
  } from 'vant';
  export default {
    components: {
      [SubmitBar.name]: SubmitBar,
      [Checkbox.name]: Checkbox
    },
  }
</script>

<style>
  .submit {
    margin-bottom: 48px;
  }
</style>