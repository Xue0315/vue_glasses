<template>
 <div class="d-flex product-list flex-nowrap justify-content-around" data-aos="fade-left"  data-aos-duration="2000">
    <ul v-for="product in products" :key="product.id">
        <li class="list-unstyled">
            <div class="card h-100 " style="width: 18rem;">
                <div class="control-img overflow-hidden ">
                    <a href="#" class="stretched-link" @click.prevent="productDetail(product.id)">
                        <button type="button" class="btn bg-dark bg-opacity-25 position-absolute start-0 text-white fs-3 fw-bold">查看更多</button>
                        <div style=" height: 200px ;background-size: cover; background-repeat: no-repeat; background-position: center;"
                        :style="{backgroundImage:`url(${product.imageUrl})`}" class="product-img"></div>
                        <span class="discount position-absolute d-flex justify-content-center align-items-center text-white fw-bold" 
                        v-if="product.price !== product.origin_price"> {{((1-(product.price/product.origin_price).toFixed(2)).toFixed(2))*100}}%OFF</span>
                    </a>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">{{ product.title }}</h5>
                    <div class="product-price d-flex justify-content-center">
                        <div class="card-text fw-bold"><h5 class="mx-2">NT${{ $filter.currency(product.price) }}</h5></div>
                        <del class="card-text fw-bold"><small >NT${{ $filter.currency(product.origin_price) }}</small></del>
                    </div>
                    
                    <button type="button" class="btn btn-primary text-light w-75 position-relative z-2"  @click="addCart(product.id)">
                        <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true" v-if="status.loadingItem === product.id"></span>
                        <span class="visually-hidden" v-if="status.loadingItem === product.id">Loading...</span>加入購物車
                    </button>
                </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            products:[
                {
                    title:'光子可換鏡片式太陽眼鏡',
                    imageUrl:'https://images.unsplash.com/photo-1594528866208-faefdb1b2e42?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    price:3650,
                    origin_price:4000,
                    id:'-NhVQcI9PH4V7yacTg7l'
                },
                {
                    title:'雷朋飛行員太陽眼鏡 金屬框',
                    imageUrl:'https://images.unsplash.com/photo-1555181126-6a405b667aab?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    price:3450,
                    origin_price:4200,
                    id:'-NhVNwR__QnXc0G6Aerx'
                },
                {
                    title:'好學生必備 文青風 眼鏡框',
                    imageUrl:'https://images.unsplash.com/photo-1580067644090-a03da9d1e360?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    price:2000,
                    origin_price:2450,
                    id:'-NhV9g5cQquFLSB-Rg51'
                },
                {
                    title:'兒童專用矽膠彈性橢圓框',
                    imageUrl:'https://images.unsplash.com/photo-1593194777536-e155e6d100b2?auto=format&fit=crop&q=80&w=2016&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    price:2550,
                    origin_price:3000,
                    id:'-NhV2MDVx_E2pTkZKx6x'
                },
            ],
            tempProduct:{},
            productImg:'',
            status:{
                loadingItem:''
            }
        }
    },
    inject:['emitter'],
    methods:{
        addCart(id){
                const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
                this.status.loadingItem = id
                const product = {
                    product_id:id,
                    qty:1
                };
                this.$http.post(api,{data:product}).then(res=>{
                    this.$pushMessage(res,'加入購物車')
                    this.emitter.emit('update-cart')
                    this.status.loadingItem = '';
                })
        },
        productDetail(id){
                this.$router.push(`/products/${id}`);
        },
    }
}
</script>

<style lang="scss" scoped>
 .card{
        cursor: pointer;
            &:hover{
                .btn.bg-dark{
                    opacity: 1;
                    width: 286px;
                    height: 200px;
                }
                .product-img{
                    transform: scale(1.1);
                    transition: .5s;
                }
            }
            max-width: 286px;

        .btn.bg-dark{
            opacity: 0;
            z-index: 1;
        }   
    }
    .discount{
        top: 0;
        right: 0;
        width: 80px;
        height: 30px;
        background-color: #ff4d4d;
    }
</style>