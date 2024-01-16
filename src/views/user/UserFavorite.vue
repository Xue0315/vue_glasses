<template>
  <router-view/>
  <div class="bg-light">
    <div class="favorite-banner position-relative mb-5">
      <div class="favorite-title bg-dark bg-opacity-50 w-100 position-absolute bottom-0 d-flex align-items-center h-100">
        <h1 class="text-white fw-bold mx-auto ">收藏商品</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <ul class="col-12 d-flex flex-wrap control-center">
          <li v-for="item in favorite" :key="item.id" class="list-unstyled col-md-6 col-lg-4 col-xl-3 my-2">
            <div class="card h-100 m-2">
              <a href="#" class="stretched-link" @click.prevent="productDetail(item.id)">
                <div class="control-img overflow-hidden ">
                  <button type="button" class="btn bg-dark bg-opacity-25 position-absolute text-white fs-3 fw-bold">查看更多</button>
                  <img :src="item.imageUrl" class="card-img-top favorite-img" :alt="item.title">
                </div>
              </a>
              <div class="card-body text-center">
                <span class="fa-solid text-end z-2 fa-heart" :class="{'favorite': isFavorite}" @click.stop="favoriteBtn(item)"></span>
                <span class="card-title fw-bold">{{ item.title }}</span>
                <p class="card-text fw-bold">NT${{ $filter.currency(item.price) }}</p>
                <div class="text-start">
                  <button type="button" class="btn btn-primary text-white position-relative z-2 addbtn"  @click="addCart(item.id)">
                    <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true" v-if="status.loadingItem === item.id"></span>
                    <span class="visually-hidden" v-if="status.loadingItem === item.id">Loading...</span>加入購物車
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="nothing text-center w-100 my-5 d-flex flex-column justify-content-center align-items-center" v-if="!favoriteNum">
        <img src="https://www.svgrepo.com//show/533045/cart-xmark.svg" alt="xmark" width="80" height="80">
        <p class="fw-bold fs-2 text-info  ">目前沒有收藏商品</p>
        <button type="button" class="btn btn-outline-info fw-bold my-3 p-2 fs-4" @click="proceedPage">前往商品頁面</button>
      </div>
      <div class="saleTitle text-center" data-aos="fade-right" data-aos-duration="2000">
        <ProductOnsale/>
      </div>
    </div>
  <Section></Section>
  <Footer></Footer>
  <SocialMedia/>
</div>

</template>

<script>
import LocalStorage from '@/utils/localStorage.js'
import Footer from '@/components/Footer.vue'
import ProductOnsale from '@/components/ProductOnsale.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Section from '@/components/Section.vue'
export default {
  data () {
    return {
      favorite: [],
      favoriteNum: 0,
      isFavorite: true,
      status: {
        loadingItem: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getFavorite () {
      this.favorite = LocalStorage.get('favorite') || []
      this.favoriteNum = (LocalStorage.get('favorite') || []).length
    },
    favoriteBtn (item) {
      const id = item.id
      const hasFavorite = this.favorite.some((item) => item.id === id)
      if (hasFavorite) {
        const delFavorite = this.favorite.find(item => item.id === id)
        this.favorite.splice(this.favorite.indexOf(delFavorite), 1)
        LocalStorage.set('favorite', this.favorite)
        this.$pushMessage(true, '移除收藏')
      }
      this.getFavorite()
      this.emitter.emit('update-favorite')
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
        console.log(err)
      })
    },
    productDetail (id) {
      this.$router.push(`/products/${id}`)
    },
    proceedPage () {
      this.$router.push('/products')
    }
  },
  mounted () {
    this.getFavorite()
  },
  components: { ProductOnsale, Footer, SocialMedia, Section }
}
</script>

<style lang="scss" scoped>
.favorite-banner{
  height: 300px;
  background-image: url('https://images.unsplash.com/photo-1581022295087-35e593704911?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  .favorite-title{
    h1{
      position: relative;
      top: 40px;
    }
  }
}
.control-center{
  @media (max-width: 768px) {
    justify-content: center;
  }
}
.card{
  width: 19.5rem;
  @media (max-width: 1400px) {
    width: 16.5rem;
  }
  @media (max-width: 1200px) {
    width: 18.5rem;
  }
  @media (max-width: 1000px) {
    width: 21rem;
  }
  cursor: pointer;
  &:hover{
    .btn.bg-dark{
      opacity: 1;
      width: 100%;
      height: 300px;
    }
    img{
      transform: scale(1.1);
      transition: .5s;
    }
  }
  .favorite-img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
  }
  .btn.bg-dark{
    opacity: 0;
    z-index: 1;
  }
  .card-body{
    .addbtn{
      width: 85%;
    }
    height: 120px;
      .card-title{
        font-size: 20px;
        @media (max-width: 1400px) {
          font-size: 16px;
        }
      }
    .fa-heart{
      font-size: 30px;
      color: #ccc;
      position:absolute;
      bottom: 15px;
      right: 12px;
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
