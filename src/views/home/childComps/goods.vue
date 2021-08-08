<template>
  <div id="goods">
    <div v-for="(item,index) in goods" :key="index">
      <a @click="detailsClick(item.iid)">
        <img :src="item.show.img" alt="">
        <p>{{item.title}}</p>
        <div class="details">
          <p>{{item.price}}&nbsp;</p>
          <p>&nbsp;❤{{item.cfav}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'goods',
  props:{
    goods:Array
  },
  methods:{
    detailsClick(iid){
      this.$router.push('/details/'+iid)
    }
  }
}
</script>

<style scoped>
#goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
#goods div{
  width: 48%;
}
#goods div img{
  width: 100%;
  height: 90%;
  vertical-align: middle;
  border-radius: 5px;
}
#goods div p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#goods div p{
  font-size: 12px;
}
#goods div a .details{
  display: flex;
  width: 100%;
}
#goods div a .details p{
  flex: 1;
  text-align: left;
}
#goods div a .details p:first-child{
  color: #ff5777;
  text-align: right;
}
</style>

