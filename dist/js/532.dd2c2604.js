"use strict";(self["webpackChunkvue_glasses"]=self["webpackChunkvue_glasses"]||[]).push([[532],{3718:function(t,e,o){o.d(e,{Z:function(){return x}});var l=o(3396),a=o(7139);const d={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},s={class:"modal-dialog"},i={class:"modal-content"},n={class:"modal-header bg-danger text-white"},c={class:"modal-title"},r=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},p={key:0},m={class:"text-danger"},h={key:1},g={class:"text-danger"},_={class:"modal-footer"},b=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function f(t,e,o,f,v,P){return(0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",s,[(0,l._)("div",i,[(0,l._)("div",n,[(0,l._)("h5",c,[(0,l._)("span",null,"刪除 "+(0,a.zw)(o.product.title),1)]),r]),(0,l._)("div",u,[o.product.title?((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Uk)("是否刪除 "),(0,l._)("strong",m,(0,a.zw)(o.product.title),1),(0,l.Uk)(" (刪除後將無法恢復)。")])):((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Uk)("是否刪除 "),(0,l._)("strong",g,(0,a.zw)(o.product.id),1),(0,l.Uk)(" (刪除後將無法恢復)。")]))]),(0,l._)("div",_,[b,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=e=>t.$emit("delete-product",o.product.id))},"確定")])])])],512)}var v=o(1933),P={data(){return{modal:{}}},props:{product:{}},mixins:[v.Z]},y=o(89);const w=(0,y.Z)(P,[["render",f]]);var x=w},2614:function(t,e,o){o.d(e,{Z:function(){return m}});var l=o(3396),a=o(7139),d=o(9242);const s={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},n=["onClick"];function c(t,e,o,c,r,u){return(0,l.wg)(),(0,l.iD)("nav",s,[(0,l._)("ul",i,[(0,l._)("li",{class:(0,a.C_)(["page-item",{disabled:!o.pages.has_pre}])},[(0,l._)("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=(0,d.iM)((t=>u.updatePage(o.pages.current_page-1)),["prevent"]))},"Previous")],2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.pages.total_pages,((t,e)=>((0,l.wg)(),(0,l.iD)("li",{key:e,class:"page-item"},[(0,l._)("a",{class:(0,a.C_)(["page-link",{disabled:t===o.pages.current_page}]),href:"#",onClick:(0,d.iM)((e=>u.updatePage(t)),["prevent"])},(0,a.zw)(t),11,n)])))),128)),(0,l._)("li",{class:(0,a.C_)(["page-item",{disabled:!o.pages.has_next}])},[(0,l._)("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=(0,d.iM)((t=>u.updatePage(o.pages.current_page+1)),["prevent"]))},"Next")],2)])])}var r={props:["pages"],methods:{updatePage(t){this.$emit("update-page",t)}}},u=o(89);const p=(0,u.Z)(r,[["render",c]]);var m=p},2532:function(t,e,o){o.r(e),o.d(e,{default:function(){return it}});var l=o(3396),a=o(7139);const d={class:"row"},s={class:"col"},i={class:"text-end mt-4"},n={class:"table mt-4"},c=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"120"},"是否啟用"),(0,l._)("th",{width:"120"},"編輯")])],-1),r={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],h=["onClick"];function g(t,e,o,g,_,b){const f=(0,l.up)("Loading"),v=(0,l.up)("Pagination"),P=(0,l.up)("ProductModel"),y=(0,l.up)("DelModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(f,{active:_.isLoading},null,8,["active"]),(0,l._)("div",d,[(0,l._)("div",s,[(0,l._)("div",i,[(0,l._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e[0]||(e[0]=t=>b.openProductModal(!0))},"新增產品")]),(0,l._)("table",n,[c,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,a.zw)(e.category),1),(0,l._)("td",null,(0,a.zw)(e.title),1),(0,l._)("td",null,(0,a.zw)(t.$filter.currency(e.origin_price)),1),(0,l._)("td",null,(0,a.zw)(t.$filter.currency(e.price)),1),e.is_enabled?((0,l.wg)(),(0,l.iD)("td",r,"啟用")):((0,l.wg)(),(0,l.iD)("td",u,"未啟用")),(0,l._)("td",null,[(0,l._)("div",p,[(0,l._)("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:t=>b.openProductModal(!1,e)},"編輯",8,m),(0,l._)("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:t=>b.openDelProductModal(e)},"刪除",8,h)])])])))),128))])])])]),(0,l.Wm)(v,{pages:_.pagination,onUpdatePage:b.getProducts},null,8,["pages","onUpdatePage"]),(0,l.Wm)(P,{product:_.tempProduct,ref:"productmodal",onUpdateProduct:b.updateProduct},null,8,["product","onUpdateProduct"]),(0,l.Wm)(y,{product:_.tempProduct,ref:"delmodal",onDeleteProduct:b.deleteProduct},null,8,["product","onDeleteProduct"])],64)}var _=o(9242);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl"},v={class:"modal-content"},P=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"新增產品"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},w={class:"row"},x={class:"col-md-4"},k={class:"mb-3"},U=(0,l._)("label",{for:"img"},"輸入圖片網址",-1),M={class:"mb-3"},C=(0,l._)("label",{for:"imgUrl"},"或上傳圖片",-1),D=["src"],$={class:"col-md-8"},L={class:"mb-3"},V=(0,l._)("label",{for:"titel"},"標題",-1),Z={class:"row gx-2"},z={class:"col-md-6 mb-3"},F=(0,l._)("label",{for:"category"},"分類",-1),I={class:"col-md-6 mb-3"},N=(0,l._)("label",{for:"unit"},"單位",-1),W={class:"row gx-2"},j={class:"col-md-6 mb-3"},H=(0,l._)("label",{for:"origin_price"},"原價",-1),Y={class:"col-md-6 mb-3"},K=(0,l._)("label",{for:"price"},"售價",-1),B=(0,l._)("hr",null,null,-1),E={class:"mb-3"},O=(0,l._)("label",{for:"description"},"產品描述",-1),q={class:"mb-3"},A=(0,l._)("label",{for:"content"},"說明內容",-1),G={class:"mb-3"},J={class:"modal-footer"},Q=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function R(t,e,o,a,d,s){return(0,l.wg)(),(0,l.iD)("div",b,[(0,l._)("div",f,[(0,l._)("div",v,[P,(0,l._)("div",y,[(0,l._)("div",w,[(0,l._)("div",x,[(0,l._)("div",k,[U,(0,l.wy)((0,l._)("input",{type:"text",id:"img",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>d.tempProduct.imageUrl=t)},null,512),[[_.nr,d.tempProduct.imageUrl]])]),(0,l._)("div",M,[C,(0,l._)("input",{type:"file",id:"imgUrl",class:"form-control",onChange:e[1]||(e[1]=(...t)=>s.uploadFile&&s.uploadFile(...t)),ref:"fileInput"},null,544)]),(0,l._)("img",{class:"img-fluid",alt:"",src:d.tempProduct.imageUrl},null,8,D)]),(0,l._)("div",$,[(0,l._)("div",L,[V,(0,l.wy)((0,l._)("input",{type:"text",id:"title",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=t=>d.tempProduct.title=t)},null,512),[[_.nr,d.tempProduct.title]])]),(0,l._)("div",Z,[(0,l._)("div",z,[F,(0,l.wy)((0,l._)("input",{type:"text",id:"category",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[3]||(e[3]=t=>d.tempProduct.category=t)},null,512),[[_.nr,d.tempProduct.category]])]),(0,l._)("div",I,[N,(0,l.wy)((0,l._)("input",{type:"text",id:"unit",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[4]||(e[4]=t=>d.tempProduct.unit=t)},null,512),[[_.nr,d.tempProduct.unit]])])]),(0,l._)("div",W,[(0,l._)("div",j,[H,(0,l.wy)((0,l._)("input",{type:"number",id:"origin_price",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[5]||(e[5]=t=>d.tempProduct.origin_price=t)},null,512),[[_.nr,d.tempProduct.origin_price]])]),(0,l._)("div",Y,[K,(0,l.wy)((0,l._)("input",{type:"number",id:"price",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[6]||(e[6]=t=>d.tempProduct.price=t)},null,512),[[_.nr,d.tempProduct.price]])])]),B,(0,l._)("div",E,[O,(0,l.wy)((0,l._)("textarea",{type:"text",id:"description",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[7]||(e[7]=t=>d.tempProduct.description=t)},null,512),[[_.nr,d.tempProduct.description]])]),(0,l._)("div",q,[A,(0,l.wy)((0,l._)("textarea",{type:"text",id:"content",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[8]||(e[8]=t=>d.tempProduct.content=t)},null,512),[[_.nr,d.tempProduct.content]])]),(0,l._)("div",G,[(0,l.wy)((0,l._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[9]||(e[9]=t=>d.tempProduct.is_enabled=t)},null,512),[[_.e8,d.tempProduct.is_enabled]]),(0,l.Uk)(" 是否啟用 ")])])])]),(0,l._)("div",J,[Q,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=e=>t.$emit("update-product",d.tempProduct))},"確認")])])])],512)}var S=o(7972),T=o.n(S),X={data(){return{modal:{},tempProduct:{}}},props:{product:{type:Object,default(){return{}}}},mounted(){this.modal=new(T())(this.$refs.modal)},watch:{product(){this.tempProduct=this.product}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},uploadFile(){const t=this.$refs.fileInput.files[0],e=this.$refs.fileInput.id,o=new FormData;o.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/colpp61109/admin/upload";this.axios.post(l,o).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl,document.getElementById(e).value="",console.log(t.data))}))}}},tt=o(89);const et=(0,tt.Z)(X,[["render",R]]);var ot=et,lt=o(2614),at=o(3718),dt={data(){return{products:[],tempProduct:{},pagination:{},isNew:!1,isLoading:!1}},components:{ProductModel:ot,Pagination:lt.Z,DelModal:at.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1}))},openProductModal(t,e){const o=this.$refs.productmodal;this.isNew=t,this.tempProduct=t?{}:{...e},o.showModal()},openDelProductModal(t){const e=this.$refs.delmodal;this.tempProduct={...t},e.showModal()},updateProduct(t){this.tempProduct=t;const e=this.$refs.productmodal;let o="https://vue3-course-api.hexschool.io/api/colpp61109/admin/product",l="post";this.isNew||(l="put",o=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/product/${t.id}`),this.isLoading=!0,e.hideModal(),this.$http[l](o,{data:this.tempProduct}).then((t=>{t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗"}),console.log(t.data),this.isLoading=!1}))},deleteProduct(t){const e=this.$refs.delmodal,o=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/product/${t}`;this.isLoading=!0,this.$http.delete(o).then((t=>{t.data.success&&(console.log(t.data),e.hideModal(),this.getProducts())})),this.isLoading=!1}},created(){this.getProducts()}};const st=(0,tt.Z)(dt,[["render",g]]);var it=st}}]);
//# sourceMappingURL=532.dd2c2604.js.map