"use strict";(self["webpackChunkvue_glasses"]=self["webpackChunkvue_glasses"]||[]).push([[953],{1486:function(t,e,i){i.r(e),i.d(e,{default:function(){return z}});var s=i(3396),o=i(9242),a=i(7139);const r={class:"bg-light"},l=(0,s._)("div",{class:"favorite-banner position-relative mb-5"},[(0,s._)("div",{class:"favorite-title bg-dark bg-opacity-50 w-100 position-absolute bottom-0 d-flex align-items-center h-100"},[(0,s._)("h1",{class:"text-white fw-bold mx-auto"},"收藏商品")])],-1),c={class:"container"},n={class:"row"},d={class:"col-lg-12 d-flex flex-wrap"},f={class:"card h-100 ms-2",style:{width:"19.5rem"}},u=["onClick"],v={class:"control-img overflow-hidden"},h=(0,s._)("button",{type:"button",class:"btn bg-dark bg-opacity-25 position-absolute text-white fs-3 fw-bold"}," 查看更多",-1),p=["src"],g={class:"card-body text-center"},m=["onClick"],b={class:"card-title"},w={class:"card-text"},_=["onClick"],k={key:0,class:"nothing text-center w-100 my-5 d-flex flex-column justify-content-center align-items-center"},x=(0,s._)("img",{src:"https://www.svgrepo.com//show/533045/cart-xmark.svg",alt:"xmark",width:"80",height:"80"},null,-1),y=(0,s._)("p",{class:"fw-bold fs-2 text-info"},"目前沒有收藏商品",-1),C={class:"saleTitle text-center","data-aos":"fade-left","data-aos-duration":"2000"},S=(0,s._)("h2",{class:"my-5 fw-bold"},"促銷商品",-1);function F(t,e,i,F,N,D){const O=(0,s.up)("router-view"),$=(0,s.up)("ProductOnsale"),M=(0,s.up)("Footer"),P=(0,s.up)("SocialMedia");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(O),(0,s._)("div",r,[l,(0,s._)("div",c,[(0,s._)("div",n,[(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(N.favorite,(e=>((0,s.wg)(),(0,s.iD)("ul",{key:e.id,class:"list-unstyled"},[(0,s._)("li",null,[(0,s._)("div",f,[(0,s._)("a",{href:"#",class:"stretched-link",onClick:(0,o.iM)((t=>D.productDetail(e.id)),["prevent"])},[(0,s._)("div",v,[h,(0,s._)("img",{src:e.imageUrl,class:"card-img-top favorite-img"},null,8,p)])],8,u),(0,s._)("div",g,[(0,s._)("span",{class:(0,a.C_)(["fa-solid text-end z-2 fa-heart fs-3",{favorite:N.isFavorite}]),onClick:(0,o.iM)((t=>D.favoriteBtn(e)),["stop"])},null,10,m),(0,s._)("h5",b,(0,a.zw)(e.title),1),(0,s._)("p",w,"NT$"+(0,a.zw)(t.$filter.currency(e.price)),1),(0,s._)("button",{type:"button",class:"btn btn-primary text-light w-75 position-relative z-2",onClick:i=>t.addCart(e.id)},"加入購物車",8,_)])])])])))),128))])]),N.favoriteNum?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",k,[x,y,(0,s._)("button",{class:"btn btn-outline-info fw-bold my-3 p-2 fs-4",onClick:e[0]||(e[0]=(...t)=>D.proceedPage&&D.proceedPage(...t))},"前往商品頁面")])),(0,s._)("div",C,[S,(0,s.Wm)($)])]),(0,s.Wm)(M),(0,s.Wm)(P)])],64)}i(7658);var N=i(2918),D=i(5498),O=i(452),$={data(){return{favorite:[],favoriteNum:0,isFavorite:!0}},inject:["emitter"],methods:{getFavorite(){this.favorite=JSON.parse(localStorage.getItem("favorite"))||[],this.favoriteNum=(JSON.parse(localStorage.getItem("favorite"))||[]).length,console.log(this.favorite)},favoriteBtn(t){const e=t.id,i=this.favorite.some((t=>t.id===e));if(i){const t=this.favorite.find((t=>t.id===e));this.favorite.splice(this.favorite.indexOf(t),1),localStorage.setItem("favorite",JSON.stringify(this.favorite)),this.$pushMessage(!0,"移除收藏")}this.getFavorite(),this.emitter.emit("update-favorite")},productDetail(t){this.$router.push(`/products/${t}`)},proceedPage(){this.$router.push("/products")}},mounted(){this.getFavorite()},components:{ProductOnsale:D.Z,Footer:N.Z,SocialMedia:O.Z}},M=i(89);const P=(0,M.Z)($,[["render",F]]);var z=P}}]);
//# sourceMappingURL=953.82da1382.js.map