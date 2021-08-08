<template>
  <div id="category">
    <nav-bar class="category-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <el-tabs :tab-position="tabPosition" @tab-click="itemClick">
      <el-tab-pane :label="item.title" v-for="(item,index) in categoryList" :key="index">
        <category-item :categoryGoods="categoryGoods" :goodsInfo="goodsInfo"></category-item>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
  import {
    getCategory,
    getSubcategory,
    getCategoryDetail
  } from '@/network/category.js'
  import NavBar from '@/components/navbar/NavBar.vue';
  import categoryItem from '@/views/category/childComps/categoryItem.vue';

  export default {
    components: {
      categoryItem,
      NavBar
    },
    data() {
      return {
        tabPosition: 'left',
        categoryList: [],
        maitKey: [],
        categoryGoods: {},
        goodsInfo: []
      }
    },
    methods: {
      // 获得左边列表
      getCategory() {
        getCategory().then(res => {
          const data = res.data.data.category.list
          console.log(res);
          this.categoryList = data
          for (let item of data) {
            this.maitKey.push(item.maitKey)
          }
          this.getSubcategory(this.maitKey[0])
          this.getCategoryDetail(this.categoryList[0].miniWallkey)
        })
      },
      // 获得右边信息
      getSubcategory(maitKey) {
        getSubcategory(maitKey).then(res => {
          console.log(res);
          this.categoryGoods = res.data.data.list;
        })
      },
      getCategoryDetail(miniWallkey) {
        getCategoryDetail(miniWallkey).then(res => {
          console.log(res);
          this.goodsInfo = res.data
        })

      },

      // 点击触发获得右边信息
      itemClick(tab, event) {
        // console.log(tab, event);
        this.getSubcategory(this.maitKey[tab.index])
        this.getCategoryDetail(this.categoryList[tab.index].miniWallkey)
      }
    },
    created() {
      this.getCategory()

    },
  }
</script>
<style>
  .category-nav {
    background-color: var(--color-tint);
    color: white;
  }
  #category .el-tabs__nav-prev {
    display: none;
    height: 0;
  }

  #category .el-tabs__nav-next {
    display: none;
    height: 0 !important;
  }
  #category .el-tabs{
    position: fixed;
    top:44px;
    left: 0;
  }
  #category .el-tabs__header {
    height: 100vh;
  }

  #category .el-tabs__nav-wrap {
    height: 90vh;
  }

  #category .el-tabs__nav-scroll {
    height: 100%;
    overflow: scroll;
  }

  #category .el-tabs__active-bar {
    background-color: #ff5777;
    color: #ff5777;
  }

  #category .is-active {
    color: #ff5777 !important;
  }

  #category .el-tabs__content {
    overflow: scroll;
    height: 100%;
  }
</style>