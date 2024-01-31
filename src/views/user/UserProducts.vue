<template>
  <div class="bg-light">
    <PageLoading :active="isLoading"/>
    <router-view/>
    <div class="products-banner position-relative">
      <div class="products-title position-absolute bg-opacity-50  bg-black w-100 d-flex align-items-center h-100">
        <h1 class="text-white mx-auto h1 fw-bold">產品列表</h1>
      </div>
    </div>
    <div class="bg-light">
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-3 my-2">
            <div class="col-sm-12 d-flex justify-content-center align-items-center">
              <ul class="list-unstyled w-100 product-category">
                <li>
                  <a href="#" class="d-block list text-decoration-none fs-5 py-2 " @click.prevent="category = ''" :class="{'active' :category === ''}">
                  <i class="fa fa-bolt px-2" aria-hidden="true"></i>所有產品</a>
                </li>
                <li>
                  <a href="#" class="d-block list text-decoration-none fs-5 py-2" @click.prevent="category = '一般眼鏡'" :class="{'active':category === '一般眼鏡'}">
                  <i class="fa fa-tint px-2" aria-hidden="true"></i>一般眼鏡</a>
                </li>
                <li>
                  <a href="#" class="d-block list text-decoration-none fs-5 py-2" @click.prevent="category = '兒童眼鏡'" :class="{'active':category === '兒童眼鏡'}">
                  <i class="fa-solid fa-child-reaching px-2"></i>兒童眼鏡</a>
                </li>
                <li>
                  <a href="#" class="d-block list text-decoration-none fs-5 py-2" @click.prevent="category = '太陽眼鏡'" :class="{'active':category === '太陽眼鏡'}">
                  <i class="fa fa-fire px-2" aria-hidden="true"></i>太陽眼鏡</a>
                </li>
              </ul>
            </div>
          </div>
          <ul class="col-lg-9 d-flex product-list flex-wrap justify-content-center">
            <li v-for="product in filterProducts" :key="product.id" class="list-unstyled my-2">
              <div class="card h-100 m-1">
                <a href="#" class="stretched-link " @click.prevent="productDetail(product.id)">
                  <div class="card-img overflow-hidden">
                      <button type="button" class="btn bg-dark bg-opacity-25 position-absolute text-white fs-3 w-100 fw-bold">查看更多</button>
                      <img :src="product.imageUrl" class="card-img-top product-img position-relative" :alt="product.title">
                      <span class="discount position-absolute d-flex justify-content-center align-items-center text-white fw-bold"
                      v-if="product.price !== product.origin_price">{{ ((1-(product.price/product.origin_price).toFixed(2)).toFixed(2))*100 }}%OFF</span>
                  </div>
                </a>
                <div class="card-body text-center">
                  <span class="fa-solid text-end z-2 fa-heart fs-2" :class="{'favorite': isFavorite(product.id)}" @click.stop="favoriteBtn(product)"></span>
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  <span class="card-text h5 fw-bold"> NT${{ $filter.currency(product.price) }} </span>
                  <del class="card-text h6 fw-bold" v-if="product.origin_price !== product.price"> NT${{ $filter.currency(product.origin_price) }}</del>
                  <div class="text-start">
                    <button type="button" class="btn btn-primary text-white position-relative z-2 mt-2 addbtn"  @click="addCart(product.id)">
                      <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true" v-if="status.loadingItem === product.id"></span>
                      <span class="visually-hidden" v-if="status.loadingItem === product.id">Loading...</span>加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  <ScrollTop/>
  <SocialMedia/>
  <Section/>
  <Footer/>
  </div>
</template>

<script>
import LocalStorage from '@/utils/localStorage.js'
import Footer from '@/components/Footer.vue'
import ScrollTop from '@/components/ScrollTop.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Section from '@/components/Section.vue'

export default {
  data () {
    return {
      products: [],
      isLoading: false,
      status: {
        loadingItem: ''
      },
      category: '',
      favorite: [],
      favoriteIds: []
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.products = res.data.products
        this.isLoading = false
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
      this.emitter.emit('update-cart')
    },
    getFavorite () {
      this.favorite = LocalStorage.get('favorite')
      this.favoriteIds = []
      this.favorite.forEach((item) => {
        this.favoriteIds.push(item.id)
      })
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const product = {
        product_id: id,
        qty: 1
      }
      this.$http.post(api, { data: product }).then(res => {
        this.$pushMessage(res, '加入購物車')
        this.emitter.emit('update-cart')
        this.status.loadingItem = ''
      }).catch((err) => {
        this.$pushMessage(err.response)
      })
    },
    productDetail (id) {
      this.$router.push(`/products/${id}`)
    },
    isFavorite (id) {
      return this.favoriteIds.some((item) => item === id)
    },
    favoriteBtn (item) {
      const id = item.id
      const hasFavorite = this.favorite.some((item) => item.id === id)
      if (!hasFavorite) {
        this.favorite.push(item)
        LocalStorage.set('favorite', this.favorite)
        this.$pushMessage(true, '加入收藏')
      } else {
        const delFavorite = this.favorite.find(item => item.id === id)
        this.favorite.splice(this.favorite.indexOf(delFavorite), 1)
        LocalStorage.set('favorite', this.favorite)
        this.$pushMessage(true, '移除收藏')
      }
      this.getFavorite()
      this.emitter.emit('update-favorite')
    }
  },
  computed: {
    filterProducts () {
      return this.products.filter(item => item.category.match(this.category))
    }
  },
  components: { Footer, ScrollTop, SocialMedia, Section },
  mounted () {
    this.getProducts()
    this.getFavorite()
  }
}
</script>

<style lang="scss" scoped>
.products-banner{
  height: 300px;
  background-image: url('https://raw.githubusercontent.com/xouoe/Pic/main/glasses-products.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .products-title{
    h1{
      position: relative;
      top: 40px;
    }
  }
}
.product-category{
  li{
    border-bottom: 1px solid #ccc;
    &:hover{
      background-color: #ccc;
    }
  }
  .list{
    &.active{
        background-color: #ccc;
    }
  }
}
.card{
  width: 19.5rem;
  cursor: pointer;
  &:hover{
    .btn.bg-dark{
      opacity: 1;
      height: 300px;
    }
    img{
      transform: scale(1.1);
      transition: .5s;
    }
  }
  .btn.bg-dark{
    opacity: 0;
    z-index: 1;
  }
  .product-img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
  }
  .card-body{
    height: 120px;
    .addbtn{
      width: 225px;
    }
    .fa-heart{
      color: #ccc;
      position:absolute;
      bottom: 10px;
      right: 20px;
      &:hover,&.favorite{
          color: #ff4d4d;
      }
    }
  }
}
.input-group{
  button{
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
