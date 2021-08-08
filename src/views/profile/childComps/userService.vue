<template>
  <div id="userService"> 
    <van-cell-group>
      <div>
        <van-icon name="chat-o" size="20px"/><van-cell value="我的消息" />
      </div>
      <div>
        <van-icon name="balance-o" size="20px"/><van-cell value="积分商城" />
      </div>
      <div>
        <van-icon name="gem-o" size="20px"/><van-cell value="会员卡" />
      </div>
      <div>
        <van-icon name="shopping-cart-o" size="20px"/><van-cell value="我的购物车" />
      </div>
      <div>
        <van-icon name="down" size="20px"/><van-cell value="下载购物APP" /> 
      </div> 
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup,Icon } from 'vant';
export default {
  name:"userService",
  components:{
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Icon.name]:Icon
  }
}
</script>

<style>
#userService .van-cell-group div{
  display: flex;
}
#userService .van-cell-group div i{
  margin-top: 10px;
  margin-left: 6px;
}
#userService .van-cell-group div div{
  flex: 1;
}
</style>