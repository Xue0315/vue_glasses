"use strict";(self["webpackChunkvue_glasses"]=self["webpackChunkvue_glasses"]||[]).push([[0],{6769:function(t,e,l){l.d(e,{Z:function(){return k}});var o=l(3396),a=l(7139);const s={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},d={class:"modal-dialog"},i={class:"modal-content"},n={class:"modal-header bg-danger text-white"},r={class:"modal-title"},c=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},p={key:0},m={class:"text-danger"},g={key:1},h={class:"text-danger"},b={class:"modal-footer"},_=(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function P(t,e,l,P,y,f){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("div",n,[(0,o._)("h5",r,[(0,o._)("span",null,"刪除 "+(0,a.zw)(l.product.title),1)]),c]),(0,o._)("div",u,[l.product.title?((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Uk)("是否刪除 "),(0,o._)("strong",m,(0,a.zw)(l.product.title),1),(0,o.Uk)(" (刪除後將無法恢復)。")])):((0,o.wg)(),(0,o.iD)("div",g,[(0,o.Uk)("是否刪除 "),(0,o._)("strong",h,(0,a.zw)(l.product.id),1),(0,o.Uk)(" (刪除後將無法恢復)。")]))]),(0,o._)("div",b,[_,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=e=>t.$emit("delete-product",l.product.id))},"確定")])])])],512)}var y=l(1933),f={data(){return{modal:{}}},props:{product:{}},mixins:[y.Z]},v=l(89);const w=(0,v.Z)(f,[["render",P]]);var k=w},2534:function(t,e,l){l.d(e,{Z:function(){return m}});var o=l(3396),a=l(7139),s=l(9242);const d={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},n=["onClick"];function r(t,e,l,r,c,u){return(0,o.wg)(),(0,o.iD)("nav",d,[(0,o._)("ul",i,[(0,o._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,o._)("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=(0,s.iM)((t=>u.updatePage(l.pages.current_page-1)),["prevent"]))},"Previous")],2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.pages.total_pages,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:e,class:"page-item"},[(0,o._)("a",{class:(0,a.C_)(["page-link",{disabled:t===l.pages.current_page}]),href:"#",onClick:(0,s.iM)((e=>u.updatePage(t)),["prevent"])},(0,a.zw)(t),11,n)])))),128)),(0,o._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,o._)("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=(0,s.iM)((t=>u.updatePage(l.pages.current_page+1)),["prevent"]))},"Next")],2)])])}var c={name:"ThePagination",props:["pages"],methods:{updatePage(t){this.$emit("update-page",t)}}},u=l(89);const p=(0,u.Z)(c,[["render",r]]);var m=p},5e3:function(t,e,l){l.r(e),l.d(e,{default:function(){return pt}});var o=l(3396),a=l(7139);const s={class:"row"},d={class:"col"},i={class:"text-end mt-4"},n={class:"table mt-4"},r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"120"},"是否啟用"),(0,o._)("th",{width:"120"},"編輯")])],-1),c={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],g=["onClick"];function h(t,e,l,h,b,_){const P=(0,o.up)("Loading"),y=(0,o.up)("Pagination"),f=(0,o.up)("ProductModel"),v=(0,o.up)("DelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(P,{active:b.isLoading},null,8,["active"]),(0,o._)("div",s,[(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e[0]||(e[0]=t=>_.openProductModal(!0))},"新增產品")]),(0,o._)("table",n,[r,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.products,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,a.zw)(e.category),1),(0,o._)("td",null,(0,a.zw)(e.title),1),(0,o._)("td",null,(0,a.zw)(t.$filter.currency(e.origin_price)),1),(0,o._)("td",null,(0,a.zw)(t.$filter.currency(e.price)),1),e.is_enabled?((0,o.wg)(),(0,o.iD)("td",c,"啟用")):((0,o.wg)(),(0,o.iD)("td",u,"未啟用")),(0,o._)("td",null,[(0,o._)("div",p,[(0,o._)("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:t=>_.openProductModal(!1,e)},"編輯",8,m),(0,o._)("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:t=>_.openDelProductModal(e)},"刪除",8,g)])])])))),128))])])])]),(0,o.Wm)(y,{pages:b.pagination,onUpdatePage:_.getProducts},null,8,["pages","onUpdatePage"]),(0,o.Wm)(f,{product:b.tempProduct,ref:"productmodal",onUpdateProduct:_.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.Wm)(v,{product:b.tempProduct,ref:"delmodal",onDeleteProduct:_.deleteProduct},null,8,["product","onDeleteProduct"])],64)}l(7658);var b=l(9242);const _={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog modal-xl"},y={class:"modal-content"},f=(0,o._)("div",{class:"modal-header bg-dark text-white"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},"新增產品"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},w={class:"row"},k={class:"col-md-4"},U={class:"mb-3"},x=(0,o._)("label",{for:"img"},"輸入圖片網址",-1),D={class:"mb-3"},C=(0,o._)("label",{for:"imgUrl"},"或上傳圖片",-1),M=["alt","src"],$={key:0,class:"mt-4"},L=(0,o._)("span",{class:"form-label mb-1"},"多圖新增",-1),V=["onUpdate:modelValue"],Z=["onClick"],z=["src"],I={class:"col-md-8"},F={class:"mb-3"},H=(0,o._)("label",{for:"titel"},"標題",-1),N={class:"row gx-2"},W={class:"col-md-6 mb-3"},Y=(0,o._)("label",{for:"category"},"分類",-1),j={class:"col-md-6 mb-3"},K=(0,o._)("label",{for:"unit"},"單位",-1),A={class:"row gx-2"},q={class:"col-md-6 mb-3"},B=(0,o._)("label",{for:"origin_price"},"原價",-1),E={class:"col-md-6 mb-3"},O=(0,o._)("label",{for:"price"},"售價",-1),T=(0,o._)("hr",null,null,-1),G={class:"mb-3"},J=(0,o._)("label",{for:"description"},"產品描述",-1),Q={class:"mb-3"},R=(0,o._)("label",{for:"content"},"說明內容",-1),S={class:"mb-3"},X={class:"modal-footer"},tt=(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function et(t,e,l,a,s,d){return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",P,[(0,o._)("div",y,[f,(0,o._)("div",v,[(0,o._)("div",w,[(0,o._)("div",k,[(0,o._)("div",U,[x,(0,o.wy)((0,o._)("input",{type:"text",id:"img",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t)},null,512),[[b.nr,s.tempProduct.imageUrl]])]),(0,o._)("div",D,[C,(0,o._)("input",{type:"file",id:"imgUrl",class:"form-control",onChange:e[1]||(e[1]=(...t)=>d.uploadFile&&d.uploadFile(...t)),ref:"fileInput"},null,544)]),(0,o._)("img",{class:"img-fluid",alt:s.tempProduct.imagesUrl,src:s.tempProduct.imageUrl},null,8,M)]),Array.isArray(s.tempProduct.imagesUrl)&&0!==s.tempProduct.imagesUrl.length?((0,o.wg)(),(0,o.iD)("div",$,[L,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.tempProduct.imagesUrl,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"input-group mb-3",key:t},[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t=>s.tempProduct.imagesUrl[e]=t},null,8,V),[[b.nr,s.tempProduct.imagesUrl[e]]]),(0,o._)("button",{class:"btn btn-outline-danger",type:"button",onClick:t=>s.tempProduct.imagesUrl.splice(e,1)},"刪除",8,Z),(0,o._)("img",{class:"img-fluid mt-2",src:t},null,8,z)])))),128)),(0,o._)("div",null,[s.tempProduct.imagesUrl.length<=4&&s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:e[2]||(e[2]=t=>s.tempProduct.imagesUrl.push(""))},"新增圖片")):(0,o.kq)("",!0)])])):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"btn btn-outline-primary btn-sm d-block w-100 mt-3",type:"button",onClick:e[3]||(e[3]=(...t)=>d.createImages&&d.createImages(...t))}," 新增多圖 ")),(0,o._)("div",I,[(0,o._)("div",F,[H,(0,o.wy)((0,o._)("input",{type:"text",id:"title",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.title=t)},null,512),[[b.nr,s.tempProduct.title]])]),(0,o._)("div",N,[(0,o._)("div",W,[Y,(0,o.wy)((0,o._)("input",{type:"text",id:"category",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.category=t)},null,512),[[b.nr,s.tempProduct.category]])]),(0,o._)("div",j,[K,(0,o.wy)((0,o._)("input",{type:"text",id:"unit",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.unit=t)},null,512),[[b.nr,s.tempProduct.unit]])])]),(0,o._)("div",A,[(0,o._)("div",q,[B,(0,o.wy)((0,o._)("input",{type:"number",id:"origin_price",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.origin_price=t)},null,512),[[b.nr,s.tempProduct.origin_price]])]),(0,o._)("div",E,[O,(0,o.wy)((0,o._)("input",{type:"number",id:"price",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.price=t)},null,512),[[b.nr,s.tempProduct.price]])])]),T,(0,o._)("div",G,[J,(0,o.wy)((0,o._)("textarea",{type:"text",id:"description",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.description=t)},null,512),[[b.nr,s.tempProduct.description]])]),(0,o._)("div",Q,[R,(0,o.wy)((0,o._)("textarea",{type:"text",id:"content",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.content=t)},null,512),[[b.nr,s.tempProduct.content]])]),(0,o._)("div",S,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[11]||(e[11]=t=>s.tempProduct.is_enabled=t)},null,512),[[b.e8,s.tempProduct.is_enabled]]),(0,o.Uk)(" 是否啟用 ")])])])]),(0,o._)("div",X,[tt,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[12]||(e[12]=e=>t.$emit("update-product",s.tempProduct))},"確認")])])])],512)}var lt=l(7972),ot=l.n(lt),at={data(){return{modal:{},tempProduct:{}}},props:{product:{type:Object,default(){return{}}}},mounted(){this.modal=new(ot())(this.$refs.modal)},watch:{product(){this.tempProduct=this.product}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},uploadFile(){const t=this.$refs.fileInput.files[0],e=this.$refs.fileInput.id,l=new FormData;l.append("file-to-upload",t);const o="https://vue3-course-api.hexschool.io/api/colpp61109/admin/upload";this.axios.post(o,l).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl,document.getElementById(e).value="")})).catch((()=>{}))},createImages(){this.tempProduct.imagesUrl=[""]}}},st=l(89);const dt=(0,st.Z)(at,[["render",et]]);var it=dt,nt=l(2534),rt=l(6769),ct={data(){return{products:[],tempProduct:{},pagination:{},isNew:!1,isLoading:!1}},components:{ProductModel:it,Pagination:nt.Z,DelModal:rt.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1})).catch((()=>{}))},openProductModal(t,e){const l=this.$refs.productmodal;this.isNew=t,this.tempProduct=t?{}:{...e},l.showModal()},openDelProductModal(t){const e=this.$refs.delmodal;this.tempProduct={...t},e.showModal()},updateProduct(t){this.tempProduct=t;const e=this.$refs.productmodal;let l="https://vue3-course-api.hexschool.io/api/colpp61109/admin/product",o="post";this.isNew||(o="put",l=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/product/${t.id}`),this.isLoading=!0,e.hideModal(),this.$http[o](l,{data:this.tempProduct}).then((t=>{t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗"}),this.isLoading=!1})).catch((()=>{}))},deleteProduct(t){const e=this.$refs.delmodal,l=`https://vue3-course-api.hexschool.io/api/colpp61109/admin/product/${t}`;this.isLoading=!0,this.$http.delete(l).then((t=>{t.data.success&&(e.hideModal(),this.getProducts())})).catch((()=>{})),this.isLoading=!1}},created(){this.getProducts()}};const ut=(0,st.Z)(ct,[["render",h]]);var pt=ut}}]);
//# sourceMappingURL=0.da71eb7a.js.map