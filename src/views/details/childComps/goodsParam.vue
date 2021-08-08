<template>
  <div class="goodsParam">
    <van-cell-group>
      <van-cell :title="item[0]" v-for="(item,index) in goodsParam.sizes[0]" :key="index">
        <template #value>
          <tr >
            <td v-for="(item,index) in goodsParam.sizes[0][index]" :key="index">{{item}}&nbsp;</td>
          </tr>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell :title="item.key" :value="item.value" v-for="(item,index) in goodsParam.set" :key="index"
        value-class="wider" />
    </van-cell-group>
  </div>
</template>

<script>
  import {
    Cell,
    CellGroup
  } from 'vant'
  export default {
    name: "goodsParam",
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup
    },
    props: {
      goodsParam: Object
    }
  }
</script>

<style scoped>
  .goodsParam {
    font-size: 12px;
    margin-bottom: 48px;
  }
  tr td:first-child{
    display: none;
  }
</style>

<style>
  .van-cell-group {
    margin-top: 44px;
  }
  .wider{
    text-align: left !important;
  }
</style>