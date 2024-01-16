<template>
  <div class="bg-light">
    <PageLoading :active="isLoading"/>
    <router-view/>
    <div class="container py-5">
      <div class="row position-relative">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb d-none d-md-flex text-start">
            <router-link to="/" class="breadcrumb-item text-primary">首頁</router-link>
            <router-link to="/products" class="breadcrumb-item">產品列表</router-link>
            <li class="breadcrumb-item active" aria-current="page">
              <strong>{{ tempProduct.title }}</strong>
            </li>
          </ol>
        </nav>
        <div class="col-xl-6 product-image">
          <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel" ref="Carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#carouselIndicators" :data-bs-slide-to="i" v-for="i in tempProduct.imagesUrl?.length" :key="i"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div>
                  <div class="product-img w-100" style="background-size:cover; background-position: center;"
                    :style="{backgroundImage: `url(${productImg})`}">
                  </div>
                </div>
              </div>
              <div class="carousel-item" v-for="item in tempProduct.imagesUrl" :key="item">
                <div class="product-img w-100" style="background-size:cover; background-position: center;"
                  :style="{backgroundImage: `url(${item})`}">
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="product-caption h-100">
            <div class="product-title mb-5 d-flex">
              <span class="title-name fw-bold ">{{ tempProduct.title }}</span>
              <div>
                <button type="button" class="fa-solid z-2 fa-heart fs-3 border-0 bg-light" :class="isFavorite(tempProduct.id) ? 'favorite' : ''" @click.stop="favoriteBtn(tempProduct)">已收藏</button>
              </div>
            </div>
            <div class="product-price mb-5 d-flex">
              <span><strong class="fs-5">{{ $filter.currency(tempProduct.price) }} </strong> 元  / {{ tempProduct.unit }}</span>
            </div>
            <div class="product-content mb-5">
              <p class="text-secondary">{{ tempProduct.content }}{{ tempProduct.description }}</p>
            </div>
            <div class="product-category mb-5">
              <span class="text-secondary">#{{ tempProduct.category }}</span>
            </div>
            <hr class="mt-5 w-100">
            <div class="row">
              <div class="col-5">
                <div class="control">
                  <button type="button" class="btn ms-auto" :disabled="qty === 1"><i class="fa-solid fa-minus" @click="changeAmount(-1)"></i></button>
                  <span class="mx-3">{{ qty }}</span>
                  <button type="button" class="btn"><i class="fa-solid fa-plus" @click="changeAmount(1)"></i></button>
                </div>
              </div>
              <div class="col-7">
                <div class="text-end">
                  <button type="button" class="btn btn-primary text-white fw-bold " @click="addCart">
                    <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true" v-if="status.loadingItem === tempProduct.id"></span>
                    <span class="visually-hidden" v-if="status.loadingItem === tempProduct.id">Loading...</span>加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="saleTitle text-center container my-5 py-5">
      <ProductOnsale/>
    </div>
    <Footer/>
    <SocialMedia/>
  </div>
</template>
<script>
import LocalStorage from '@/utils/localStorage.js'
import ProductOnsale from '@/components/ProductOnsale.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Footer from '@/components/Footer.vue'
import Carousel from 'bootstrap/js/dist/carousel'

export default {
  data () {
    return {
      qty: 1,
      isLoading: false,
      tempProduct: {},
      productTitle: '',
      productImg: '',
      status: {
        loadingItem: ''
      },
      favorite: [],
      favoriteIds: []
    }
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const id = this.$route.params.productId
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          this.tempProduct = res.data.product
          this.productImg = res.data.product.imageUrl
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    addCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = this.tempProduct.id
      this.status.loadingItem = this.tempProduct.id
      const product = {
        product_id: this.tempProduct.id,
        qty: this.qty
      }
      this.$http.post(api, { data: product }).then(res => {
        this.$pushMessage(res, '加入購物車')
        this.emitter.emit('update-cart')
        this.status.loadingItem = ''
      }).catch((err) => {
        console.log(err)
      })
    },
    getFavorite () {
      this.favorite = LocalStorage.get('favorite') || []
      this.favoriteIds = []
      this.favorite.forEach((item) => { this.favoriteIds.push(item.id) })
    },
    isFavorite (id) {
      return this.favoriteIds.some((item) => item === id)
    },
    favoriteBtn () {
      const id = this.tempProduct.id
      const hasFavorite = this.favorite.some((item) => item.id === id)
      if (!hasFavorite) {
        this.favorite.push(this.tempProduct)
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
    },
    changeAmount (num) {
      if (num > 0) {
        this.qty += 1
      } else {
        this.qty -= 1
        if (this.qty < 1) {
          this.qty = 1
        }
      }
    }
  },
  watch: {
    $route () {
      this.getProduct()
    }
  },
  mounted () {
    this.getProduct()
    this.getFavorite()
    this.carousel = new Carousel(this.$refs.Carousel)
  },
  components: { ProductOnsale, Footer, SocialMedia },
  inject: ['emitter']
}
</script>

<style lang="scss" scoped>
.product-caption{
  position: relative;
  top: 120px;
  @media (max-width: 1200px) {
    margin-top: 30px;
  }
  hr{
    position: relative;
    top: 80px;
  }
  .product-content{
    width: 480px;
    @media (max-width: 1200px) {
      margin: auto;
    }
    @media (max-width: 768px) {
      padding: 0 20px;
      width: 400px;
    }
    @media (max-width: 391px) {
      width: 310px;
    }
  }
  .product-category{
    @media (max-width:1200px) {
      display: none;
    }
  }
}
.product-detail{
  top: 150px;
}
.product-img{
  height: 600px;
  @media (max-width: 768px) {
      height: 400px;
  }
}
.product-image{
  position: relative;
  top: 120px;
}
.breadcrumb{
  position: absolute;
  top: 55px;
}
.product-title{
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
  .title-name{
    font-size: 26px;
    @media (max-width: 992px) {
      font-size: 22px;;
    }
    @media (max-width: 500px) {
      font-size: 20px;;
    }
  }
  .fa-heart{
    color: #ccc;
    &.favorite,&:hover{
      color: #ff4d4d;
    }
  }
}
button:disabled{
  background-color: #ccc;
  border: none;
}
.product-price{
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
}
</style>
