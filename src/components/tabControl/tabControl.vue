<template>
  <div id="tabControl">
    <div v-for="(item,index) in titles" :key="index">
      <span :class="{active:isIndex==index}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"tabControl",
  props:{
    titles:Array
  },
  data () {
    return {
      isIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.isIndex=index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
#tabControl{
  display: flex;
  background-color: #fff;
}
#tabControl div{
  flex:1;
  text-align: center;
  padding-bottom: 10px;
}
.active{
  color: #ff5777;
  padding-bottom: 5px;
  border-bottom: 2px solid #ff5777;
}
</style>