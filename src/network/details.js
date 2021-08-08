import { request} from "@/network/request.js";
export function getDetails(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
export class info{
  constructor(shopInfo,itemInfo,columns){
    this.name=shopInfo.name
    this.services=shopInfo.services
    this.scores=shopInfo.score
    this.shopLogo=shopInfo.shopLogo
    this.fans=shopInfo.cFans
    this.sells=shopInfo.cSells
    this.goodsCount=shopInfo.cGoods

    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discount

    this.columns=columns
    this.realPrice=itemInfo.lowNowPrice
  }
}

export class goodsParam{
  constructor(info,rule){
    this.set=info.set
    this.sizes=rule.tables
  }
}

