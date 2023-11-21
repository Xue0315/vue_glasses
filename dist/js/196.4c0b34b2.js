"use strict";(self["webpackChunkvue_glasses"]=self["webpackChunkvue_glasses"]||[]).push([[196],{8224:function(t,s,e){e.r(s),e.d(s,{default:function(){return T}});var i=e(3396),a=e(7139),o=e(9242);const r=t=>((0,i.dD)("data-v-7da41434"),t=t(),(0,i.Cn)(),t),c={class:"bg-light"},d={class:"container py-5"},u={class:"row position-relative"},l={"aria-label":"breadcrumb "},n={class:"breadcrumb d-none d-md-flex"},p={class:"breadcrumb-item active","aria-current":"page"},m={class:"col-xl-6"},h={class:"product-image mx-5"},v={class:"col-xl-6"},g={class:"product-caption h-100"},f={class:"product-title mb-5"},_={class:"h2 fw-bold"},b={class:"product-price mb-5 d-flex"},y={class:"fs-5"},P={class:"product-content mb-5"},w={class:"text-secondary"},k={class:"product-category mb-5"},I={class:"text-secondary"},x=r((()=>(0,i._)("hr",{class:"mt-5 w-100"},null,-1))),C={class:"row"},q={class:"col-5"},z={class:"control"},$={class:"btn ms-auto"},S={class:"mx-3"},F={class:"btn"},W={class:"col-7"},L={class:"text-end"},M={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},O={key:1,class:"visually-hidden"},U={class:"saleTitle text-center container my-5 py-5"};function D(t,s,e,r,D,Z){const A=(0,i.up)("PageLoading"),J=(0,i.up)("router-view"),N=(0,i.up)("router-link"),j=(0,i.up)("ProductOnsale"),B=(0,i.up)("Footer"),T=(0,i.up)("SocialMedia");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(A,{active:D.isLoading},null,8,["active"]),(0,i.Wm)(J),(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("nav",l,[(0,i._)("ol",n,[(0,i.Wm)(N,{to:"/",class:"breadcrumb-item text-primary"},{default:(0,i.w5)((()=>[(0,i.Uk)("首頁")])),_:1}),(0,i.Wm)(N,{to:"/products",class:"breadcrumb-item"},{default:(0,i.w5)((()=>[(0,i.Uk)("產品列表")])),_:1}),(0,i._)("li",p,[(0,i._)("strong",null,(0,a.zw)(D.tempProduct.title),1)])])]),(0,i._)("div",m,[(0,i._)("div",h,[(0,i._)("div",{class:"product-img",style:(0,a.j5)([{"background-size":"cover","background-position":"center"},{backgroundImage:`url(${D.productImg})`}])},null,4)])]),(0,i._)("div",v,[(0,i._)("div",g,[(0,i._)("div",f,[(0,i._)("h2",_,(0,a.zw)(D.tempProduct.title),1)]),(0,i._)("div",b,[(0,i._)("span",null,[(0,i._)("strong",y,(0,a.zw)(t.$filter.currency(D.tempProduct.price)),1),(0,i.Uk)(" 元 / "+(0,a.zw)(D.tempProduct.unit),1)]),(0,i._)("button",{type:"button",class:(0,a.C_)(["fa-solid z-2 fa-heart fs-3 border-0 bg-light",Z.isFavorite(D.tempProduct.id)?"favorite":""]),onClick:s[0]||(s[0]=(0,o.iM)((t=>Z.favoriteBtn(D.tempProduct)),["stop"]))},"收藏",2)]),(0,i._)("div",P,[(0,i._)("p",w,(0,a.zw)(D.tempProduct.content)+(0,a.zw)(D.tempProduct.description),1)]),(0,i._)("div",k,[(0,i._)("span",I,"#"+(0,a.zw)(D.tempProduct.category),1)]),x,(0,i._)("div",C,[(0,i._)("div",q,[(0,i._)("div",z,[(0,i._)("button",$,[(0,i._)("i",{class:"fa-solid fa-minus",onClick:s[1]||(s[1]=t=>Z.changeAmount(-1))})]),(0,i._)("span",S,(0,a.zw)(D.qty),1),(0,i._)("button",F,[(0,i._)("i",{class:"fa-solid fa-plus",onClick:s[2]||(s[2]=t=>Z.changeAmount(1))})])])]),(0,i._)("div",W,[(0,i._)("div",L,[(0,i._)("button",{type:"button",class:"btn btn-primary text-white fw-bold",onClick:s[3]||(s[3]=(...t)=>Z.addCart&&Z.addCart(...t))},[D.status.loadingItem===D.tempProduct.id?((0,i.wg)(),(0,i.iD)("span",M)):(0,i.kq)("",!0),D.status.loadingItem===D.tempProduct.id?((0,i.wg)(),(0,i.iD)("span",O,"Loading...")):(0,i.kq)("",!0),(0,i.Uk)("加入購物車")])])])])])])])]),(0,i._)("div",U,[(0,i.Wm)(j)]),(0,i.Wm)(B),(0,i.Wm)(T)])}e(7658);var Z=e(9915),A=e(339),J=e(7703),N={data(){return{qty:1,isLoading:!1,tempProduct:{},productTitle:"",productImg:"",status:{loadingItem:""},favorite:[],favoriteIds:[]}},methods:{getProduct(){this.isLoading=!0;const t=this.$route.params.productId,s=`https://vue3-course-api.hexschool.io/api/colpp61109/product/${t}`;this.$http.get(s).then((t=>{this.isLoading=!1,t.data.success&&(this.tempProduct=t.data.product,this.productImg=t.data.product.imageUrl)}))},addCart(){const t="https://vue3-course-api.hexschool.io/api/colpp61109/cart";this.status.loadingItem=this.tempProduct.id,this.status.loadingItem=this.tempProduct.id;const s={product_id:this.tempProduct.id,qty:this.qty};this.$http.post(t,{data:s}).then((t=>{this.$pushMessage(t,"加入購物車"),this.emitter.emit("update-cart"),this.status.loadingItem=""}))},getFavorite(){this.favorite=JSON.parse(localStorage.getItem("favorite"))||[],this.favoriteIds=[],this.favorite.forEach((t=>{this.favoriteIds.push(t.id)}))},isFavorite(t){return this.favoriteIds.some((s=>s===t))},favoriteBtn(){const t=this.tempProduct.id,s=this.favorite.some((s=>s.id===t));if(s){const s=this.favorite.find((s=>s.id===t));this.favorite.splice(this.favorite.indexOf(s),1),localStorage.setItem("favorite",JSON.stringify(this.favorite)),this.$pushMessage(!0,"移除收藏")}else this.favorite.push(this.tempProduct),localStorage.setItem("favorite",JSON.stringify(this.favorite)),this.$pushMessage(!0,"加入收藏");this.getFavorite(),this.emitter.emit("update-favorite")},changeAmount(t){t>0?this.qty+=1:(this.qty-=1,this.qty<1&&(this.qty=1))}},watch:{$route(){this.getProduct()}},mounted(){this.getProduct(),this.getFavorite()},components:{ProductOnsale:Z.Z,Footer:J.Z,SocialMedia:A.Z},inject:["emitter"]},j=e(89);const B=(0,j.Z)(N,[["render",D],["__scopeId","data-v-7da41434"]]);var T=B}}]);
//# sourceMappingURL=196.4c0b34b2.js.map