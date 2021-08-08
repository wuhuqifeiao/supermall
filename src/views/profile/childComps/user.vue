<template>
  <div id="user">
    <div class="userLogin">
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="72px" class="userIcon"/>
      <p>登录/注册</p>
      <p>暂无绑定手机</p>
      <van-icon name="arrow" class="arrowIcon" size="24px"/>
    </div>
    <div class="account">
      <div>
        <p><span>0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div>
        <p><span>0</span>个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span>0</span>分</p>
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Icon
  } from 'vant';
  export default {
    name: 'user',
    components: {
      [Icon.name]: Icon
    }
  }
</script>

<style scoped>
#user{
  color: #323233;
  font-size: 14px;
}
.userIcon{
  float: left;
}
.arrowIcon{
  position: absolute;
  right: 12px;
  top:24px;
}
#user .userLogin{
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
}
#user .userLogin p{
  height: 36px;
}
#user .userLogin p:nth-child(2){
  line-height: 36px;
}
#user .userLogin p:nth-child(3){
  font-size: 12px;
}
#user .account{
  display: flex;
  width: 100%;
}
#user .account div{
  display: flex;
  flex-flow: column;
  flex: 1;
}
#user .account div p{
  flex:1;
  text-align: center;
}
#user .account div p span{
  font-size: 18px;
  color: #ff5777;
}
</style>