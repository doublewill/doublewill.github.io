"use strict";(self["webpackChunkwill_app_mall"]=self["webpackChunkwill_app_mall"]||[]).push([[443],{7693:function(t,n,a){a.r(n),a.d(n,{default:function(){return l}});var o=function(){var t=this,n=t._self._c;return n("div",[n("van-nav-bar",{attrs:{title:"分类"}}),n("van-tree-select",{attrs:{height:"100vw",items:t.items,"main-active-index":t.active},on:{"update:mainActiveIndex":function(n){t.active=n},"update:main-active-index":function(n){t.active=n}},scopedSlots:t._u([{key:"content",fn:function(){return[n("van-image",{attrs:{src:"https://img01.yzcdn.cn/vant/apple-1.jpg"}})]},proxy:!0}])}),n("Tabbar")],1)},e=[],s=a(945),i={name:"CategoryHome",components:{Tabbar:s.Z},data(){return{active:0,items:[{text:"热门推荐"},{text:"手机数码"},{text:"家用电器"},{text:"电脑用品"}]}},methods:{}},r=i,c=a(1001),u=(0,c.Z)(r,o,e,!1,null,null,null),l=u.exports},8792:function(t,n,a){a.r(n),a.d(n,{default:function(){return u}});var o=function(){var t=this,n=t._self._c;return n("div",[n("van-nav-bar",{attrs:{title:"商品详情","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-card",{attrs:{num:"2",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img01.yzcdn.cn/vant/ipad.jpeg"},scopedSlots:t._u([{key:"tags",fn:function(){return[n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("标签")]),n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("标签")])]},proxy:!0},{key:"footer",fn:function(){return[n("van-button",{attrs:{size:"mini"}},[t._v("按钮")]),n("van-button",{attrs:{size:"mini"}},[t._v("按钮")])]},proxy:!0}])}),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服",color:"#ee0a24"}}),n("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"}}),n("van-goods-action-icon",{attrs:{icon:"star",text:"已收藏",color:"#ff5000"}}),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"}}),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1)],1)},e=[],s={name:"GoodsAction",components:{},data(){return{}},methods:{onClickLeft(){this.$router.go(-1)}}},i=s,r=a(1001),c=(0,r.Z)(i,o,e,!1,null,null,null),u=c.exports},1513:function(t,n,a){a.r(n),a.d(n,{default:function(){return d}});var o=function(){var t=this,n=t._self._c;return n("div",[n("van-nav-bar",{attrs:{title:"首页"}}),n("van-search",{attrs:{"show-action":"",label:"地址",shape:"round",background:"#4fc08d",placeholder:"请输入搜索关键词"},on:{search:t.onSearch},scopedSlots:t._u([{key:"action",fn:function(){return[n("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.keyWord,callback:function(n){t.keyWord=n},expression:"keyWord"}}),n("van-swipe",{attrs:{autoplay:3e3}},t._l(t.images,(function(t,a){return n("van-swipe-item",{key:a,staticClass:"swipe-image"},[n("img",{attrs:{src:t}})])})),1),n("div",{staticClass:"will-container"},[n("van-grid",{attrs:{square:""}},[n("van-grid-item",{attrs:{icon:"photo-o",text:"二维码"},on:{click:t.jumpTo}}),n("van-grid-item",{attrs:{icon:"photo-o",text:"表格"}}),n("van-grid-item",{attrs:{icon:"photo-o",text:"Chart"}})],1)],1),n("van-grid",{attrs:{"column-num":2}},[n("van-grid-item",[n("ul",{staticClass:"like-list"},t._l(t.goodsList,(function(a){return n("li",{key:a.id,attrs:{span:"12"}},[n("img",{attrs:{src:"https://img01.yzcdn.cn/vant/apple-1.jpg",alt:""}}),n("p",[t._v(" "+t._s(a.goodsName)+" ")])])})),0)]),n("van-grid-item",[n("ul",{staticClass:"like-list"},t._l(t.goodsList,(function(a){return n("li",{key:a.id+"xx",attrs:{span:"12"}},[n("img",{attrs:{src:"https://img01.yzcdn.cn/vant/apple-1.jpg",alt:""}}),n("p",{staticClass:"goods-name"},[t._v(" "+t._s(a.goodsName)+" ")])])})),0)])],1),n("Tabbar")],1)},e=[],s=(a(7658),a(945)),i=a(2419),r={name:"HomePge",components:{Tabbar:s.Z},data(){return{keyWord:"",goodsList:[],images:["https://img01.yzcdn.cn/vant/apple-1.jpg","https://img01.yzcdn.cn/vant/apple-2.jpg"]}},mounted(){(0,i.o)({}).then((t=>{this.goodsList=t.data}))},methods:{onSearch(){},jumpTo(){this.$router.push({name:"goodsAction"})}}},c=r,u=a(1001),l=(0,u.Z)(c,o,e,!1,null,"58c7bfaf",null),d=l.exports},945:function(t,n,a){a.d(n,{Z:function(){return u}});var o=function(){var t=this,n=t._self._c;return n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{to:"/home",icon:"wap-home-o"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{to:"/chat",icon:"wap-home-o"}},[t._v("Chat")]),n("van-tabbar-item",{attrs:{to:"/category",icon:"gem-o"}},[t._v("分类")]),n("van-tabbar-item",{attrs:{to:"/shoppingCar",icon:"shopping-cart-o",badge:"20"}},[t._v("购物车")]),n("van-tabbar-item",{attrs:{to:"/mine",icon:"manager-o",badge:"5"}},[t._v("我的")])],1)},e=[],s={name:"TabBar",props:{}},i=s,r=a(1001),c=(0,r.Z)(i,o,e,!1,null,null,null),u=c.exports},9085:function(t,n,a){a.r(n),a.d(n,{default:function(){return d}});var o=function(){var t=this,n=t._self._c;return n("div",[n("van-nav-bar",{attrs:{title:"个人中心"}}),n("van-grid",{attrs:{"column-num":3}},[n("van-grid-item",{attrs:{icon:"photo-o",text:"收藏的商品"}}),n("van-grid-item",{attrs:{icon:"photo-o",text:"收藏的店铺"}}),n("van-grid-item",{attrs:{icon:"photo-o",text:"我的足迹"}})],1),n("div",[t._v(" 111 ")]),n("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(n){t.showList=!0}}}),n("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:t.showList,callback:function(n){t.showList=n},expression:"showList"}},[n("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1),n("van-grid",{attrs:{"column-num":4}},[n("van-grid-item",{attrs:{text:"收货地址"},on:{click:t.toAddressList}})],1),n("h4",[t._v("猜您喜欢")]),n("Tabbar")],1)},e=[],s=(a(7658),a(945));a(6265);const i={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"};var r={name:"MinePage",components:{Tabbar:s.Z},data(){return{chosenContactId:"",chosenCoupon:-1,showList:!1,enginesList:[],coupons:[i],disabledCoupons:[i]}},async mounted(){},methods:{onChange(t){this.showList=!1,this.chosenCoupon=t},onExchange(t){this.coupons.push(i)},toAddressList(){this.$router.push({name:"addressList"})}}},c=r,u=a(1001),l=(0,u.Z)(c,o,e,!1,null,null,null),d=l.exports},2361:function(t,n,a){a.r(n),a.d(n,{default:function(){return u}});var o=function(){var t=this,n=t._self._c;return n("div",[n("van-nav-bar",{attrs:{title:"购物车","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[n("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"}})]},proxy:!0}])},[n("van-card",{staticClass:"goods-card",attrs:{num:"2",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img01.yzcdn.cn/vant/cat.jpeg"}})],1),n("van-card",{attrs:{num:"2",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img01.yzcdn.cn/vant/ipad.jpeg"},scopedSlots:t._u([{key:"tags",fn:function(){return[n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("标签")]),n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("标签")])]},proxy:!0},{key:"footer",fn:function(){return[n("van-button",{attrs:{size:"mini"}},[t._v("按钮")]),n("van-button",{attrs:{size:"mini"}},[t._v("按钮")])]},proxy:!0}])}),n("van-submit-bar",{attrs:{price:3050,"button-text":"提交订单"},on:{submit:t.onSubmit},scopedSlots:t._u([{key:"tip",fn:function(){return[t._v(" 你的收货地址不支持同城送, "),n("span",{on:{click:t.onClickEditAddress}},[t._v("修改地址")])]},proxy:!0}])},[n("van-checkbox",{model:{value:t.checked,callback:function(n){t.checked=n},expression:"checked"}},[t._v("全选")])],1)],1)},e=[],s=(a(7658),{name:"ShoppingCar",components:{},data(){return{checked:!0}},methods:{onClickLeft(){this.$router.push({name:"home"})},onClickEditAddress(){},onSubmit(){}}}),i=s,r=a(1001),c=(0,r.Z)(i,o,e,!1,null,null,null),u=c.exports},2419:function(t,n,a){a.d(n,{o:function(){return e}});var o=a(4471);function e(){return(0,o.Z)({url:"/api/goodsList",method:"post"})}}}]);