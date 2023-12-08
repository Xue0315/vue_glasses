<template>
<div class="bg-light">
  <pageLoading :active="isLoading"/>
  <div class="cartBanner position-relative" v-if="!checkOutstatus">
        <div class="cart-title bg-dark bg-opacity-50 w-100 position-absolute bottom-0 d-flex align-items-center h-100">
            <h1 class="text-white fw-bold mx-auto">購物車</h1>
        </div>
  </div>
  
  <div class="checkout-page container position-relative w-100" v-if="checkOutstatus">
    <TimeLine></TimeLine>
    <div class="row">
        <div class="col-xl-6 mb-5 checklist">
            <div class="text-center">
                <span class="mb-5 fs-3">清單明細</span>
            </div>
            <hr>
            <table class="table  table-borderless">
                <thead>
                    <th class="text-center" width="1000">商品</th>
                    <th class="text-center d-none d-sm-table-ceil" width="120">單價</th>
                    <th class="text-center" width="100">數量</th>
                    <th width="200" class="text-end">總計</th>   
                </thead>
                <tbody>
                    <tr v-for="cart in carts.carts" :key="cart.id" class="align-middle">
                        <td class="d-flex align-items-center">
                            <div class="d-none d-xxl-flex" style="height:120px; width: 100px; background-size:cover; background-position: center;" 
                                :style="{backgroundImage: `url(${cart.product.imageUrl})`}">
                            </div>
                            <span class="text-center mx-3 ">{{ cart.product.title }}</span>
                        </td>
                            <td class="text-center d-none d-sm-table-ceil"><span>${{ $filter.currency(cart.product.price) }}</span></td>
                        <td class="text-center">
                            <span >{{ cart.qty }}</span>
                        </td>
                        <td class="text-end" v-if="!cart.coupon"><span >${{ $filter.currency(cart.total) }}</span></td>
                        <td class="text-end" v-if="cart.coupon"><span class="text-warning">NT${{ $filter.currency(cart.final_total) }}</span></td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-borderless">
                <tr>
                    <td colspan="3"  class="text-start fs-5">總金額</td>
                    <td class="text-end" v-if="carts.final_total !== carts.total"><span class="text-warning fs-6">NT${{ $filter.currency(carts.final_total) }}</span></td>
                    <td class="text-end" v-else><span class="fs-6">NT${{ $filter.currency(carts.final_total) }}</span></td>
                </tr>
            </table>
        </div>
        <Form class="col-xl-6 mb-5 customer-data" v-slot="{ errors }" @submit="addOrder">
            <div class="text-center">
                <span class="mb-5 fs-3">顧客資訊</span>
            </div>
            <hr>
            <div class="mb-3">
                <div class="mb-1">
                    <label for="email" class="form-label">Email</label>
                </div>
                <Field type="email" id="email" name="email"  class="form-control" placeholder="請輸入Email" rules="email|required" 
                :class="{ 'is-invalid': errors['email'] }" v-model="form.user.email"></Field>
                <ErrorMessage name="email" class="invalid-feedback" ></ErrorMessage>
            </div>
            <div class="mb-3">
                <div class="mb-1">
                    <label for="name" class="form-label">收件人姓名</label>
                </div>
                <Field type="text" id="name" name="姓名"  class="form-control" placeholder="請輸入姓名" rules="required"
                :class="{ 'is-invalid': errors['姓名'] }" v-model="form.user.name"></Field>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
                <div class="mb-1">
                    <label for="tel" class="form-label">收件人電話</label>
                </div>
                <Field type="text" id="tel" name="電話" class="form-control" placeholder="請輸入電話" rules="required"
                :class="{ 'is-invalid': errors['電話'] }" v-model="form.user.tel"></Field>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
                <div class="mb-1">
                    <label for="address" class="form-label">收件人地址</label>
                </div>
                <Field type="text" id="address" name="地址"  class="form-control" placeholder="請輸入地址" rules="required"
                :class="{ 'is-invalid': errors['地址'] }" v-model="form.user.address"></Field>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
                <div class="mb-1">
                    <label for="message">備註</label>
                </div>
                <textarea type="text" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-end mt-3">
                <button class="btn btn-info" @click.stop="addOrder">送出訂單</button>
            </div>
        </Form>
    </div>
  </div>
  <div class="container cart-list" v-if="!checkOutstatus" >
    <h3 class="fw-bold text-center my-5" v-if="cartNum>=1">購物清單</h3>
    <div class="row w-100" v-if="cartNum>=1">
        <div class="col-lg-12 bg-light mx-auto">
            <table class="table table-light table-borderless align-middle ">
                <thead>
                    <th class="text-center" width="60">刪除</th>
                    <th class="text-center">商品</th>
                    <th class="text-center d-none d-lg-table-cell">單價</th>
                    <th class="text-center" width="20">數量</th>
                    <th class="text-end px-0 d-none d-sm-table-cell" width="120">總計</th>   
                </thead>
                <tbody>
                    <tr v-for="cart in carts.carts" :key="cart.id">
                        <td><button type="button" class="btn btn-outline-danger" @click="deleteCart(cart.id)"><i class="fa-solid fa-trash"></i></button></td>
                        <td class="d-xl-flex align-items-center px-0">
                            <div class="product-img" style="height:100px; width: 100px; background-size:cover; background-position: center;" 
                                :style="{backgroundImage: `url(${cart.product.imageUrl})`}">
                            </div>
                            <span class="product-title text-center align-items-center">{{ cart.product.title }}</span>
                        </td>
                            <td class="d-none d-lg-table-cell text-center "><span>${{ $filter.currency(cart.product.price) }}</span></td>
                        <td>
                            <div class="d-flex align-items-center">
                                <button class="btn " @click="changeAmount(cart,-1)"><i class="fa-solid fa-minus"></i></button>
                                <span>{{ cart.qty }}</span>
                                <button class="btn " @click="changeAmount(cart,1)"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </td>
                        <td class="text-end d-none d-sm-table-cell"  v-if="!cart.coupon"><span>${{ $filter.currency(cart.total) }}</span></td>
                        <td class="text-end d-none d-sm-table-cell"  v-if="cart.coupon"><span class="text-warning">${{ $filter.currency(cart.final_total) }}</span></td>
                    </tr>
                   
                </tbody>
            </table>
            <table class="table table-light table-borderless ">
                <thead>
                    <tr>
                        <th class="text-start fs-6">總金額</th>
                            <th class="text-end px-2" v-if="carts.final_total !== carts.total"><span class="text-warning fs-6">NT${{ $filter.currency(carts.final_total) }}</span></th>
                            <th class="text-end px-2" v-else><span class="fs-6">NT${{ $filter.currency(carts.final_total) }}</span></th>
                        
                    </tr>
                </thead>
            </table>
            <div class="d-flex">
                <div class="clean-all">
                    <button class="btn btn-outline-danger d-none d-sm-block" @click="deleteAllCart">清空購物車</button>
                </div>
                <div class="input-group mb-3 ms-auto ">
                        <input type="text" class="form-control ms-auto" placeholder="請輸入您的優惠碼" v-model="code" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="checkCode">套用優惠碼</button>
                </div>
            </div>
            <div class="checkout w-100 text-end">
                <button type="button" class="btn btn-secondary" @click="changeStatus">結帳</button>
            </div>
        </div>
    </div>
    <div class="nothing text-center w-100 my-5 d-flex flex-column justify-content-center align-items-center" v-if="!cartNum">
        
        <img src="https://www.svgrepo.com//show/533045/cart-xmark.svg" alt="xmark" width="80" height="80">
        <p class="fw-bold fs-2 text-info ">購物車無商品</p>
        <button class="btn btn-outline-info fw-bold my-3 p-2 fs-4" @click="proceedPage">前往商品頁面</button>
    </div>
   
  </div>

</div>
<ScrollTop/>
<SocialMedia/>
<Section></Section>
<Footer></Footer>
    


</template>

<script>
import Footer from '@/components/Footer.vue'
import ScrollTop from '@/components/ScrollTop.vue' 
import TimeLine from '@/components/TimeLine.vue'
import SocialMedia from '@/components/SocialMedia.vue';
import Section from '@/components/Section.vue';
export default {
    data(){
        return {
            carts:[],
            cartNum:0,
            checkOutstatus:false,
            status:{
                loadingItem:''
            },
            form:{
                user:{
                    email:'',
                    name:'',
                    tel:'',
                    address:''
                },
                message:''
            },
            isLoading:false,
            code:'',
            codeStatus:false,
            tempOrderId:''
        }
    },
    inject:['emitter'],
    methods:{
        getCart(){
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
                this.isLoading = true;
                this.$http.get(api).then(res=>{
                    this.carts = res.data.data;
                    this.cartNum = res.data.data.carts.length;
                    this.isLoading = false;
                })
        },
        updateCart(item){
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
                const product = {
                    product_id:item.id,
                    qty:item.qty
                }
                this.$http.put(api,{data:product}).then(res=>{
                    console.log(res);
                    this.getCart();
                })
        },
        deleteCart(id){
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
                this.status.loadingItem = id;
                this.$http.delete(api)
                    .then(res=>{
                        this.getCart();
                        this.$pushMessage(res,'刪除產品');
                        this.emitter.emit('update-cart');
                })
        },
        deleteAllCart(){
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
                this.$http.delete(api)
                        .then(res=>{
                            if(res.success){
                                console.log(res);
                                this.getCart();
                                this.$pushMessage(res,'全部產品刪除');
                            }else{
                                this.getCart();
                                this.$pushMessage(res,'刪除');
                            }
                            this.emitter.emit('update-cart');
                        })
        },
        proceedPage(){
                this.$router.push('/products')
        },
        changeStatus(){
                this.checkOutstatus = true;
        },
        changeAmount(item,num){
                if(num > 0){
                    item.qty += 1
                }else{
                    item.qty -= 1
                }
                this.updateCart(item);
        },
        checkCode(){
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
                const coupon_code ={
                    code:this.code
                }
                this.$http.post(api,{data:coupon_code})
                    .then(res=>{
                        if(res.data.success){
                            this.$pushMessage(res,'套用優惠券')
                            this.code = '';
                            this.codeStatus = true;
                            this.getCart();
                        }else{
                            this.$pushMessage(res,'套用優惠券')
                        }
                    }
                )
        },
        addOrder(){
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
                const order = this.form
                this.isLoading = true;
                this.$http.post(api,{data:order}).then(res=>{
                    if(res.data.success){
                        this.tempOrderId = res.data.orderId;
                        this.emitter.emit('update-cart');
                        this.$router.push(`/order/${this.tempOrderId}`);
                        this.isLoading = false;
                    }else{
                        this.isLoading = false;
                    }
                })
        }
    },
    components:{TimeLine,Footer,ScrollTop,SocialMedia,Section},
    mounted(){
        this.getCart();
    },
}
</script>

<style lang="scss" scoped>
.cartBanner{
    background-image: url('https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;

    .cart-title{
        h1{
            position: relative;
            top: 40px;
        }
    }
}
.checkout {
    .btn{
        padding: 5px 36px;
    }
}
.total{
    &.active{
        color: #20bb72;
    }
}
.cart-list{
    padding: 100px 0 100px 0;
    .product-title{
        @media(max-width:405px){
            font-size: 12px;
        }
    }
    .input-group{
        
        width: 50%;
        @media (max-width:992px) {
           width: 75%;
        }
    }
}
.product-img{
    @media (max-width:1200px) {
        display: none;
    }
}
.checklist{
    @media (max-width: 576px) {
        font-size: 12px;
    }
}
.checklist,.customer-data{
    margin: 5% 0;
}
</style>