"use strict";(self["webpackChunkvue_glasses"]=self["webpackChunkvue_glasses"]||[]).push([[391],{6391:function(t,e,l){l.r(e),l.d(e,{default:function(){return tt}});var s=l(3396),a=l(7139),o=l(9242);const i={class:"container"},d={class:"row"},c={class:"col-md-7"},r={class:"table mt-4"},n=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"圖片"),(0,s._)("th",null,"產品名稱"),(0,s._)("th",null,"價格"),(0,s._)("th")])],-1),u={style:{width:"200px"}},p={key:0,class:"h5"},m={key:1,class:"h6"},h={key:2,class:"h5"},_={class:"btn-group btn-group-sm"},g=["onClick"],b=["onClick","disabled"],f={class:"col-md-5"},v={class:"sticky-top"},y={class:"table mt-4"},k=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"品名"),(0,s._)("th",{style:{width:"110px"}},"數量"),(0,s._)("th",null,"單價")])],-1),w=["disabled","onClick"],C=(0,s._)("i",{class:"fa fa-trash","aria-hidden":"true"},null,-1),x=[C],$={style:{width:"200px"}},q={key:0,class:"text-success"},V={class:"input-group input-group-sm"},D=["onUpdate:modelValue","onClick"],U={class:"input-group-text"},z={style:{width:"180px"},class:"text-end"},I={key:0,class:"text-success"},W=(0,s._)("td",{colspan:"3",class:"text-end"},"總計",-1),L={class:"text-end"},O={key:0},H=(0,s._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),M={class:"text-end"},Y={class:"mt-3 input-group"},j={class:"my-5 row justify-content-center"},E={class:"mb-3"},F=(0,s._)("div",{class:"mb-1"},[(0,s._)("label",{for:"email",class:"form-label"},"Email")],-1),K={class:"mb-3"},P=(0,s._)("div",{class:"mb-1"},[(0,s._)("label",{for:"name",class:"form-label"},"收件人姓名")],-1),S={class:"mb-3"},Z=(0,s._)("div",{class:"mb-1"},[(0,s._)("label",{for:"tel",class:"form-label"},"收件人電話")],-1),A={class:"mb-3"},B=(0,s._)("div",{class:"mb-1"},[(0,s._)("label",{for:"address",class:"form-label"},"收件人地址")],-1),G={class:"mb-3"},J=(0,s._)("div",{class:"mb-1"},[(0,s._)("label",{for:"message"},"留言")],-1),N=(0,s._)("div",{class:"text-end mt-3"},[(0,s._)("button",{class:"btn btn-danger"},"送出訂單")],-1);function Q(t,e,l,C,Q,R){const T=(0,s.up)("Loading"),X=(0,s.up)("Field"),tt=(0,s.up)("ErrorMessage"),et=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(T,{active:Q.isLoading},null,8,["active"]),(0,s._)("div",i,[(0,s._)("div",d,[(0,s._)("div",c,[(0,s._)("table",r,[n,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Q.products,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",u,[(0,s._)("div",{style:(0,a.j5)([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${e.imageUrl})`}])},null,4)]),(0,s._)("td",null,(0,a.zw)(e.title),1),(0,s._)("td",null,[e.origin_price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",p,(0,a.zw)(e.origin_price),1)),e.price?((0,s.wg)(),(0,s.iD)("del",m,"原價"+(0,a.zw)(t.$filter.currency(e.origin_price))+"元",1)):(0,s.kq)("",!0),e.price?((0,s.wg)(),(0,s.iD)("div",h,"現在只要"+(0,a.zw)(t.$filter.currency(e.price))+"元",1)):(0,s.kq)("",!0)]),(0,s._)("td",null,[(0,s._)("div",_,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:t=>R.productDetail(e.id)},"查看更多",8,g),(0,s._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>R.addCart(e.id),disabled:Q.status.loadingItem===e.id}," 加入購物車 ",8,b)])])])))),128))])])]),(0,s._)("div",f,[(0,s._)("div",v,[Q.cart.carts?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("table",y,[k,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Q.cart.carts,((e,l)=>((0,s.wg)(),(0,s.iD)("tr",{key:l},[(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-danger",disabled:e.id===Q.status.loadingItem,onClick:t=>R.deleteCart(e.id)},x,8,w)]),(0,s._)("td",$,[(0,s.Uk)((0,a.zw)(e.product.title)+" ",1),e.coupon?((0,s.wg)(),(0,s.iD)("div",q,"已套用優惠券")):(0,s.kq)("",!0)]),(0,s._)("td",null,[(0,s._)("div",V,[(0,s.wy)((0,s._)("input",{type:"number",min:"1",class:"form-control","onUpdate:modelValue":t=>e.qty=t,onClick:t=>R.updateCart(e)},null,8,D),[[o.nr,e.qty]]),(0,s._)("div",U,"/"+(0,a.zw)(e.product.unit),1)])]),(0,s._)("td",z,[e.coupon?((0,s.wg)(),(0,s.iD)("small",I,"折扣價 : ")):(0,s.kq)("",!0),(0,s.Uk)((0,a.zw)(t.$filter.currency(e.final_total)),1)])])))),128))]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[W,(0,s._)("td",L,(0,a.zw)(t.$filter.currency(Q.cart.total)),1)]),Q.cart.total!==Q.cart.final_total?((0,s.wg)(),(0,s.iD)("tr",O,[H,(0,s._)("td",M,(0,a.zw)(t.$filter.currency(Q.cart.final_total)),1)])):(0,s.kq)("",!0)])]),(0,s._)("div",Y,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[0]||(e[0]=t=>Q.code=t)},null,512),[[o.nr,Q.code]]),(0,s._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[1]||(e[1]=(...t)=>R.checkCode&&R.checkCode(...t))},"套用優惠碼")])],64)):(0,s.kq)("",!0)])])])]),(0,s._)("div",j,[(0,s.Wm)(et,{class:"col-md-6",onSubmit:R.addOrder},{default:(0,s.w5)((({errors:t})=>[(0,s._)("div",E,[F,(0,s.Wm)(X,{type:"email",id:"email",name:"email",class:(0,a.C_)(["form-control",{"is-invalid":t["email"]}]),placeholder:"請輸入Email",rules:"email|required",modelValue:Q.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=t=>Q.form.user.email=t)},null,8,["class","modelValue"]),(0,s.Wm)(tt,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",K,[P,(0,s.Wm)(X,{type:"text",id:"name",name:"姓名",class:(0,a.C_)(["form-control",{"is-invalid":t["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:Q.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=t=>Q.form.user.name=t)},null,8,["class","modelValue"]),(0,s.Wm)(tt,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",S,[Z,(0,s.Wm)(X,{type:"text",id:"tel",name:"電話",class:(0,a.C_)(["form-control",{"is-invalid":t["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:Q.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=t=>Q.form.user.tel=t)},null,8,["class","modelValue"]),(0,s.Wm)(tt,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",A,[B,(0,s.Wm)(X,{type:"text",id:"address",name:"地址",class:(0,a.C_)(["form-control",{"is-invalid":t["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:Q.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=t=>Q.form.user.address=t)},null,8,["class","modelValue"]),(0,s.Wm)(tt,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",G,[J,(0,s.wy)((0,s._)("textarea",{type:"text",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=t=>Q.form.message=t)},null,512),[[o.nr,Q.form.message]])]),N])),_:1},8,["onSubmit"])])],64)}l(7658);var R={data(){return{products:[],cart:[],isLoading:!1,status:{loadingItem:""},form:{user:{email:"",name:"",tel:"",address:""},message:""},tempOrderId:"",code:""}},inject:["emitter"],methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/colpp61109/admin/products/all";this.$http.get(t).then((t=>{this.products=t.data.products}))},productDetail(t){this.$router.push(`/user/product/${t}`)},addCart(t){const e="https://vue3-course-api.hexschool.io/api/colpp61109/cart";this.status.loadingItem=t;const l={product_id:t,qty:1};this.$http.post(e,{data:l}).then((t=>{this.getCart(),this.$pushMessage(t,"加入購物車")}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/colpp61109/cart";this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success&&(this.cart=t.data.data,console.log(t),this.isLoading=!1)}))},deleteCart(t){const e=`https://vue3-course-api.hexschool.io/api/colpp61109/cart/${t}`;this.status.loadingItem=t,this.$http.delete(e).then((t=>{console.log(t),this.getCart(),this.$pushMessage(t,"刪除")}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/colpp61109/cart/${t.id}`,l={product_id:t.id,qty:t.qty};this.$http.put(e,{data:l}).then((t=>{this.getCart(),console.log(t)}))},checkCode(){const t="https://vue3-course-api.hexschool.io/api/colpp61109/coupon",e={code:this.code};this.$http.post(t,{data:e}).then((t=>{console.log(t),this.$pushMessage(t,"套用優惠券"),this.getCart(),this.code=""}))},addOrder(){const t="https://vue3-course-api.hexschool.io/api/colpp61109/order",e=this.form;this.$http.post(t,{data:e}).then((t=>{console.log(t),this.tempOrderId=t.data.orderId,this.$router.push(`/user/checkout/${this.tempOrderId}`)}))}},created(){this.getProducts(),this.getCart()}},T=l(89);const X=(0,T.Z)(R,[["render",Q]]);var tt=X}}]);
//# sourceMappingURL=391.54033ce7.js.map