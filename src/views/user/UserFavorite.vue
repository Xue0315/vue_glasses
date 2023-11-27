<template>
  <router-view></router-view>
<div class="bg-light">
    <div class="favorite-banner position-relative mb-5">
        <div class="favorite-title bg-dark bg-opacity-50 w-100 position-absolute bottom-0 d-flex align-items-center h-100">
            <h1 class="text-white fw-bold mx-auto ">收藏商品</h1>
        </div>
    </div>  
    <div class="container">
        <div class="row w-100">
            <div class="col-sm-12 d-flex flex-wrap justify-content-center">
                <ul v-for="item in favorite" :key="item.id" class="list-unstyled ">
                    <li>
                        <div class="card h-100 ms-3 " style="width: 21rem;" >
                            <a href="#" class="stretched-link" @click.prevent="productDetail(item.id)">
                                <div class="control-img overflow-hidden ">
                                    <button type="button" class="btn bg-dark bg-opacity-25 position-absolute text-white fs-3 fw-bold">
                                        查看更多</button>
                                    <img :src="item.imageUrl" class="card-img-top favorite-img">
                                </div>
                                </a>
                            
                            <div class="card-body text-center">
                                <span class="fa-solid text-end z-2 fa-heart fs-3" :class="{'favorite': isFavorite}" @click.stop="favoriteBtn(item)"></span>
                                <h5 class="card-title ">{{ item.title }}</h5>
                                <p class="card-text ">NT${{ $filter.currency(item.price) }}</p>
                                <button type="button" class="btn btn-primary text-light w-75 position-relative z-2"  @click="addCart(item.id)">加入購物車</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nothing text-center w-100 my-5 d-flex flex-column justify-content-center align-items-center" v-if="!favoriteNum">
            <img src="https://www.svgrepo.com//show/533045/cart-xmark.svg" alt="xmark" width="80" height="80">
            <p class="fw-bold fs-2 text-info  ">目前沒有收藏商品</p>
            <button class="btn btn-outline-info fw-bold my-3 p-2 fs-4" @click="proceedPage">前往商品頁面</button>
        </div>
        <div class="saleTitle text-center" data-aos="fade-right" data-aos-duration="2000">
            <ProductOnsale/>
        </div>
    </div>
    <Footer></Footer>
    <SocialMedia/>
</div>
 
</template>

<script>
import Footer from '@/components/Footer.vue'
import ProductOnsale from '@/components/ProductOnsale.vue'
import SocialMedia from '@/components/SocialMedia.vue'
export default {
    data(){
        return {
            favorite:[],
            favoriteNum:0,
            isFavorite:true,
        }
    },
    inject:['emitter'],
    methods:{
        getFavorite(){
                this.favorite = JSON.parse(localStorage.getItem('favorite')) || [];
                this.favoriteNum = (JSON.parse(localStorage.getItem('favorite')) || []).length; 
        },
        favoriteBtn(item){
                const id = item.id;
                const hasFavorite = this.favorite.some((item) => item.id === id)
                if(hasFavorite){
                    const delFavorite = this.favorite.find(item=> item.id === id);
                    this.favorite.splice(this.favorite.indexOf(delFavorite), 1)
                    localStorage.setItem('favorite',JSON.stringify(this.favorite));
                    this.$pushMessage(true,'移除收藏');
                }
                this.getFavorite(); 
                this.emitter.emit('update-favorite');
        },
        productDetail(id){
            this.$router.push(`/products/${id}`)
        },
        proceedPage(){
            this.$router.push('/products')
        }
    },
    mounted(){
        this.getFavorite();
    },
    components:{ProductOnsale,Footer,SocialMedia}
}
</script>

<style lang="scss" scoped>
    .favorite-banner{
        height: 300px;
        background-image: url('https://images.unsplash.com/photo-1581022295087-35e593704911?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        background-repeat: no-repeat;
        background-size: cover;
        background-position:center ;

        .favorite-title{
            h1{
                position: relative;
                top: 40px;
            }
        }
    }
    .card{
        cursor: pointer;
        &:hover{
            .btn.bg-dark{
                opacity: 1;
                width: 100%;
                height: 350px;
            }
            img{
                transform: scale(1.1);
                transition: .5s;
            }
        }
        .favorite-img{
                width: 100%;
                height: 350px;
                object-fit: cover;
                position: relative;
        }
        .btn.bg-dark{
                opacity: 0;
                z-index: 1;
        }
        .card-body{
            .fa-heart{
                color: #ccc;
                position:absolute;
                bottom: 15px;
                right: 10px;
                &.favorite{
                    color: #ff4d4d;
                }
                &:hover{
                    color: #ccc;
                }
            }
        }
    }
    .nothing{
        height: 500px;
    }
    
</style>