import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList:[],
    totalPrice:0
  },
  mutations: {
    // 添加购物车
    addCart(state,payload){
      let oldProduct=null
      for(let item of state.cartList){
        if(item.iid==payload.iid){
          oldProduct=item
        }
      }
      if(oldProduct){
        oldProduct.count++
      }else{
        state.cartList.push(payload)
      }
    },
    // 购物车总价格
    getTotalPrice(state,payload){
      let list=[]
      for(let item of state.cartList){
        if(item.checked)
        list.push(item)
      }
      state.totalPrice=list.reduce((preValue,item)=>preValue+item.count*item.price*100,0)
    },
    // 购物车复选框加入与取消
    changeChecked(state,payload){
      !state.cartList[payload].checked
      if(!state.cartList[payload].checked){
      state.totalPrice=state.totalPrice-state.cartList[payload].price*state.cartList[payload].count*100
      }else{
      state.totalPrice=state.totalPrice+state.cartList[payload].price*state.cartList[payload].count*100
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
