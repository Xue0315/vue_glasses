"use strict";(self["webpackChunkvue_glasses"]=self["webpackChunkvue_glasses"]||[]).push([[754],{3718:function(e,t,o){o.d(t,{Z:function(){return k}});var a=o(3396),l=o(7139);const n={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},s={class:"modal-dialog"},d={class:"modal-content"},i={class:"modal-header bg-danger text-white"},p={class:"modal-title"},u=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),c={class:"modal-body"},r={key:0},m={class:"text-danger"},_={key:1},h={class:"text-danger"},g={class:"modal-footer"},b=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function v(e,t,o,v,C,f){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("div",d,[(0,a._)("div",i,[(0,a._)("h5",p,[(0,a._)("span",null,"刪除 "+(0,l.zw)(o.product.title),1)]),u]),(0,a._)("div",c,[o.product.title?((0,a.wg)(),(0,a.iD)("div",r,[(0,a.Uk)("是否刪除 "),(0,a._)("strong",m,(0,l.zw)(o.product.title),1),(0,a.Uk)(" (刪除後將無法恢復)。")])):((0,a.wg)(),(0,a.iD)("div",_,[(0,a.Uk)("是否刪除 "),(0,a._)("strong",h,(0,l.zw)(o.product.id),1),(0,a.Uk)(" (刪除後將無法恢復)。")]))]),(0,a._)("div",g,[b,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=t=>e.$emit("delete-product",o.product.id))},"確定")])])])],512)}var C=o(1933),f={data(){return{modal:{}}},props:{product:{}},mixins:[C.Z]},w=o(89);const y=(0,w.Z)(f,[["render",v]]);var k=y},2614:function(e,t,o){o.d(t,{Z:function(){return m}});var a=o(3396),l=o(7139),n=o(9242);const s={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},i=["onClick"];function p(e,t,o,p,u,c){return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("ul",d,[(0,a._)("li",{class:(0,l.C_)(["page-item",{disabled:!o.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#",onClick:t[0]||(t[0]=(0,n.iM)((e=>c.updatePage(o.pages.current_page-1)),["prevent"]))},"Previous")],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.pages.total_pages,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,class:"page-item"},[(0,a._)("a",{class:(0,l.C_)(["page-link",{disabled:e===o.pages.current_page}]),href:"#",onClick:(0,n.iM)((t=>c.updatePage(e)),["prevent"])},(0,l.zw)(e),11,i)])))),128)),(0,a._)("li",{class:(0,l.C_)(["page-item",{disabled:!o.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=(0,n.iM)((e=>c.updatePage(o.pages.current_page+1)),["prevent"]))},"Next")],2)])])}var u={props:["pages"],methods:{updatePage(e){this.$emit("update-page",e)}}},c=o(89);const r=(0,c.Z)(u,[["render",p]]);var m=r},4754:function(e,t,o){o.r(t),o.d(t,{default:function(){return q}});var a=o(3396),l=o(7139);const n={class:"row"},s={class:"col"},d={class:"text-end mt-4"},i={class:"table mt-4"},p=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{style:{width:"400px"}},"名稱"),(0,a._)("th",{style:{width:"400px"}},"折扣百分比"),(0,a._)("th",{style:{width:"400px"}},"到期日"),(0,a._)("th",{style:{width:"400px"}},"是否啟用"),(0,a._)("th",null,"編輯")])],-1),u={key:0,class:"text-success"},c={key:1,class:"text-muted"},r={class:"btn-group btn-group-sm"},m=["onClick"],_=["onClick"];function h(e,t,o,h,g,b){const v=(0,a.up)("Loading"),C=(0,a.up)("CouponModal"),f=(0,a.up)("DelModal"),w=(0,a.up)("Pagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(v,{active:g.isLoading},null,8,["active"]),(0,a._)("div",n,[(0,a._)("div",s,[(0,a._)("div",d,[(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=e=>b.openModal(!0))},"建立新的優惠券")]),(0,a._)("table",i,[p,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.coupons,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,l.zw)(t.title),1),(0,a._)("td",null,(0,l.zw)(t.percent)+"%",1),(0,a._)("td",null,(0,l.zw)(e.$filter.date(t.due_date)),1),(0,a._)("td",null,[t.is_enabled?((0,a.wg)(),(0,a.iD)("div",u,"已啟用")):((0,a.wg)(),(0,a.iD)("div",c,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",r,[(0,a._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e=>b.openModal(!1,t)},"編輯",8,m),(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>b.openDelModel(t)},"刪除",8,_)])])])))),128))])])])]),(0,a.Wm)(C,{ref:"couponmodal",coupon:g.tempCoupons,onUpdateCoupon:b.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,a.Wm)(f,{product:g.tempCoupons,ref:"delmodal",onDeleteProduct:b.deleteCoupon},null,8,["product","onDeleteProduct"]),(0,a.Wm)(w,{pages:g.pages,onUpdatePage:b.getCoupons},null,8,["pages","onUpdatePage"])],64)}var g=o(9242);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},v={class:"modal-dialog"},C={class:"modal-content"},f=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},y={class:"mb-3"},k=(0,a._)("label",{for:"title"},"標題",-1),x={class:"mb-3"},M=(0,a._)("label",{for:"coupon_code"},"優惠碼",-1),D={class:"mb-3"},$=(0,a._)("label",{for:"due_date"},"到期日",-1),U={class:"mb-3"},L=(0,a._)("label",{for:"price"},"折扣百分比",-1),P={class:"mb-3"},Z=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用",-1),z={class:"modal-footer"},V=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function N(e,t,o,l,n,s){return(0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",v,[(0,a._)("div",C,[f,(0,a._)("div",w,[(0,a._)("div",y,[k,(0,a.wy)((0,a._)("input",{type:"text",id:"title",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[0]||(t[0]=e=>n.tempCoupon.title=e)},null,512),[[g.nr,n.tempCoupon.title]])]),(0,a._)("div",x,[M,(0,a.wy)((0,a._)("input",{type:"text",id:"coupon_code",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[1]||(t[1]=e=>n.tempCoupon.code=e)},null,512),[[g.nr,n.tempCoupon.code]])]),(0,a._)("div",D,[$,(0,a.wy)((0,a._)("input",{type:"date",id:"due_date",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>n.due_date=e)},null,512),[[g.nr,n.due_date]])]),(0,a._)("div",U,[L,(0,a.wy)((0,a._)("input",{type:"number",id:"price",class:"form-control",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[3]||(t[3]=e=>n.tempCoupon.percent=e)},null,512),[[g.nr,n.tempCoupon.percent]])]),(0,a._)("div",P,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"form-check-input",id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=e=>n.tempCoupon.is_enabled=e),"true-value":1,"false-value":0},null,512),[[g.e8,n.tempCoupon.is_enabled]]),Z])]),(0,a._)("div",z,[V,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",n.tempCoupon))},"確認")])])])],512)}var W=o(1933),H={data(){return{modal:{},tempCoupon:{},due_date:""}},props:{coupon:{}},watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date);const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[W.Z]},Y=o(89);const K=(0,Y.Z)(H,[["render",N]]);var S=K,T=o(3718),j=o(2614),I={components:{CouponModal:S,DelModal:T.Z,Pagination:j.Z},data(){return{isNew:!1,coupons:[],tempCoupons:{title:"",is_enabled:1,percent:80,code:""},isLoading:!1,pages:{}}},methods:{openModal(e,t){const o=this.$refs.couponmodal;this.isNew=e,this.tempCoupons=e?{due_date:(new Date).getTime()/1e3}:{...t},o.showModal()},openDelModel(e){const t=this.$refs.delmodal;this.tempCoupons={...e},t.showModal()},getCoupons(e=1){const t=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/coupons?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{this.coupons=e.data.coupons,this.pages=e.data.pagination,console.log(e),this.isLoading=!1}))},updateCoupon(e){let t="https://vue3-course-api.hexschool.io/api/colpp61109/admin/coupon",o="post";this.isLoading=!0;const a=this.$refs.couponmodal;this.isNew||(o="put",t=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/coupon/${e.id}`),a.hideModal(),this.$http[o](t,{data:e}).then((e=>{e.data.success&&("put"===o?this.$pushMessage(e,"優惠券更新"):this.$pushMessage(e,"優惠券建立"),this.isLoading=!1,this.getCoupons(),console.log(e))}))},deleteCoupon(e){const t=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/coupon/${e}`,o=this.$refs.delmodal;this.isLoading=!0,o.hideModal(),this.$http.delete(t).then((e=>{this.isLoading=!1,this.getCoupons(),console.log(e)}))}},created(){this.getCoupons()}};const O=(0,Y.Z)(I,[["render",h]]);var q=O}}]);
//# sourceMappingURL=754.117bc7c1.js.map