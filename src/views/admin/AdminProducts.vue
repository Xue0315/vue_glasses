<template>
<Loading :active="isLoading"></Loading>
    <div class="row">
        <div class="col">
            <div class="text-end mt-4">
                    <button type="button" class="btn btn-outline-primary" @click="openProductModal(true)">新增產品</button>
            </div>
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th width=120>分類</th>
                        <th>產品名稱</th>
                        <th width=120>原價</th>
                        <th width=120>售價</th>
                        <th width=120>是否啟用</th>
                        <th width=120>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id">
                        <td>{{ item.category }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ $filter.currency(item.origin_price) }}</td>
                        <td>{{ $filter.currency(item.price) }}</td>
                        <td v-if="item.is_enabled" class="text-success" >啟用</td>
                        <td v-else class="text-muted">未啟用</td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-primary" @click="openProductModal(false,item)">編輯</button>
                                <button type="button" class="btn btn-sm btn-outline-danger" @click="openDelProductModal(item)">刪除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Pagination :pages="pagination" @update-page="getProducts"></Pagination>
    <ProductModel :product="tempProduct" ref="productmodal" @update-product="updateProduct"></ProductModel>
    <DelModal :product="tempProduct" ref="delmodal" @delete-product="deleteProduct"></DelModal>
</template>

<script>
import ProductModel from '@/components/ProductModal.vue';
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';
export default {
        data(){
            return {
                products:[],
                tempProduct:{},
                pagination:{},
                isNew:false,
                isLoading:false
            }
        },
        components:{ProductModel,Pagination,DelModal},
        inject:['emitter'],
        methods:{
            getProducts(page=1){
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
                this.isLoading = true;
                this.$http.get(api)
                    .then(res=>{
                        console.log(res.data);
                        this.products = res.data.products;
                        this.pagination = res.data.pagination;
                        this.isLoading = false;
                    })
            },
            openProductModal(isNew,item){
                const productModal = this.$refs.productmodal;
                this.isNew = isNew;
                if(isNew){
                    this.tempProduct = {}
                }else{
                    this.tempProduct = {...item}
                }
                productModal.showModal()
            },
            openDelProductModal(item){
                const DelModal = this.$refs.delmodal;
                this.tempProduct = {...item}
                DelModal.showModal();
            },
            updateProduct(item){
                this.tempProduct = item;
                const productModal = this.$refs.productmodal;
                let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
                let httpmethod = 'post'
                if(!this.isNew){
                    httpmethod = 'put'
                    api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
                }
                this.isLoading = true;
                productModal.hideModal();
                this.$http[httpmethod](api,{data:this.tempProduct})
                    .then(res=>{
                        if(res.data.success){
                            this.getProducts();
                            this.emitter.emit('push-message',{
                                style:'success',
                                title:'更新成功'
                            })
                        }else{
                            this.emitter.emit('push-message',{
                                style:'danger',
                                title:'更新失敗'
                            })
                        }
                            console.log(res.data);
                            this.isLoading = false;
                    })
            },
            deleteProduct(id){
                const DelModal = this.$refs.delmodal;
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
                this.isLoading = true;
                this.$http.delete(api)
                    .then(res=>{
                        if(res.data.success){
                            console.log(res.data);
                            DelModal.hideModal();
                            this.getProducts();
                        }
                    })
                this.isLoading = false;
            }
        },
        created(){
            this.getProducts();
        }
}
</script>

<style>

</style>