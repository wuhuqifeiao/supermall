<template>
  <div id="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style scoped>
#navbar{
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  position: sticky;
  top:0;
  z-index: 999;
}
.left .right{
  width: 60px;
}
.center{
  flex:1;
}
</style>