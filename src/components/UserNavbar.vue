<template>
  <nav class="navbar navbar-expand-lg navbar-light p-0 bg-light position-fixed top-0 w-100 z-3 px-2">
    <a class="navbar-brand p-0" href="#">
      <img src="@/assets/images/glasses.png" width="80" height="80">
      <img src="@/assets/images/glasses-brand.png" width="120" height="80">    
    </a>
    <button class="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" ref="navbartoggler"
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item d-lg-none">
          <router-link to="/products" class="nav-link px-4 py-3" @click="navbarToggler">產品列表</router-link>
        </li>
        <li class="nav-item d-lg-none">
          <router-link to="/articles" class="nav-link px-4 py-3" @click="navbarToggler">最新消息</router-link>
        </li>
        <li class="nav-item d-lg-none">
          <router-link to="/ordersearch" class="nav-link px-4 py-3" @click="navbarToggler">訂單查詢</router-link>
        </li>
        <li class="d-block nav-item d-lg-none">
          <router-link to="/favorite" class="nav-link px-4 py-3 d-flex justify-content-between" @click="navbarToggler">收藏產品<span v-if="favoriteNum">{{ favoriteNum }}</span></router-link>
        </li>
        <li class="d-block nav-item d-lg-none">
          <router-link to="/cart" class="nav-link px-4 py-3 d-flex justify-content-between" @click="navbarToggler">購物車<span v-if="cartNum">{{ cartNum }}</span></router-link>
        </li>
      </ul>
      <ul class="navbar-nav iconimg">
        <li class="nav-item">
          <router-link to="/products" class="nav-link px-4 py-3">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/articles" class="nav-link px-4 py-3" >最新消息</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ordersearch" class="nav-link px-4 py-3" >訂單查詢</router-link>
        </li>
      </ul>
      <ul class="navbar-nav iconimg ms-auto">
        <li class="nav-item">
          <span class="position-absolute favorite text-white" v-if="favoriteNum" >{{ favoriteNum }}</span>
          <router-link to="/favorite" class="nav-link px-4 py-3 position-relative"><i class="fa fa-heart fs-4" aria-hidden="true"></i></router-link>
        </li>
        <li class="nav-item">
            <span class="position-absolute cart text-white" v-if="cartNum">{{ cartNum }}</span>
          <router-link to="/cart" class="nav-link px-4 py-3"><i class="fa fa-shopping-cart fs-4" aria-hidden="true"></i></router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/login" class="nav-link px-4 py-3"><i class="fa fa-users fs-4" aria-hidden="true"></i></router-link>
        </li> -->
      </ul>
    </div>
  </nav>
  <ToastMessage></ToastMessage>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue'
export default {
  data(){
    return{
      favoriteNum:0,
      cartNum:0,
      status:'',
    }
  },
  methods:{
    getFavorite(){
      this.favoriteNum = (JSON.parse(localStorage.getItem('favorite')) || []).length; 
    },
    getCart(){
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then(res=>{
        this.carts = res.data.data;
        this.cartNum = res.data.data.carts.length;
      })
    },
    navbarToggler(){
      this.$refs.navbartoggler.click();
    }
  },
  mounted(){
    this.getCart();
    emitter.on('update-favorite',()=>{
      this.getFavorite();
    }),
    emitter.on('update-cart',()=>{
      this.getCart();
    })
  },
  created(){
    this.getCart();
    this.getFavorite(); 
  },
  components:{ToastMessage}
}
</script>

<style lang="scss" scoped>
.navbar{
  z-index: 2;
  border-bottom: 1px solid #ccc;
}
.navbar-nav .nav-item .nav-link {
  position: relative;
  &::after{
    content:'';
    left: 50%;
    right: 50%;
    border-bottom: 3px solid #4DA0B0;
    bottom: 0;
    position: absolute;
    transition: .7s;
  }
  span{
    border-radius: 50%;
    padding: 0px 5px;
    color: #fff;
    background-color: #ff4d4d;
  }
  &.active,&:hover{
    font-weight: bold;
    &::after{
      left: 20%;
      right: 20%;
      border-bottom: 3px solid #4DA0B0;
    }
  }
  @media (max-width: 992px) {
    &.active,&:hover{
      background-color: #4DA0B0;
    }
  }
}
.iconimg{
  .nav-link,.favorite,.cart{
    @media (max-width: 992px) {
      display: none;
    }
  }
}
.favorite{
  right: 95px;
  background-color: #ff4d4d;
  padding: 0px 5px 0px 5px;
  border-radius: 50px;
  z-index: 2;
}
.cart{
  right: 20px;
  background-color: #ff4d4d;
  padding: 0px 5px 0px 5px;
  border-radius: 50px;
  z-index: 2;
}
</style>