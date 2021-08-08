<template>
  <div id="recommend">
    <ul>
      <li v-for="(item,index) in recommend" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </li>
    </ul>
    <div>
      <span v-for="(item,index) in recommend" :key="index">{{item.title}}</span>
    </div>
  </div>
</template>

<script scoped>
  export default {
    name: 'recommend',
    props: {
      recommend:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  #recommend ul {
    display: flex;
    justify-content: space-evenly;
  }

  #recommend ul li {
    width: 22%;
    height: 70px;
    margin-top: 10px;
  }

  #recommend ul li a img {
    vertical-align: middle;
  }

  #recommend div span{
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    padding-bottom:20px;
  }
  
  #recommend div {
    display: flex;
    border-bottom: 8px solid #eee;
  }

  img{
    width: 100%;
    height: 100%;
  }
</style>