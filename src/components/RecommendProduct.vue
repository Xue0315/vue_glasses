<template>
    <swiper
      :spaceBetween="30"
      :slides-per-view="3"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :modules="modules"
      class="mySwiper">
    <template v-for="product in products" :key="product.id">
      <swiper-slide>
        <a href="#" class="product-rd d-block d-flex justify-content-center align-items-center mb-5 fw-bold"
          :style="{ backgroundImage: `url(${product.imageUrl})`}" @click.prevent="productDetail(product.id)">
          <div class="product-title bg-dark bg-opacity-25 w-100 h-100 d-flex justify-content-center align-items-center">
            <span>{{ product.title }}</span>
          </div>
        </a>
      </swiper-slide>
    </template>
    </swiper>
  </template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Autoplay, Pagination],
      products: [
        {
          title: '鈴蘭的雲煙星空 漸層金框墨鏡',
          id: '-Nhk0mZYBbLg4YAM7P9j',
          imageUrl: 'https://raw.githubusercontent.com/xouoe/Pic/main/sunglasses-a5.jpg',
          price: 1600,
          origin_price: 1600
        },
        {
          title: '多邊框濾藍光眼鏡 黑色經典',
          id: '-NhjxQPXluh22l0eaA4K',
          imageUrl: 'https://raw.githubusercontent.com/xouoe/Pic/main/glasses-a2.jpg',
          price: 2499,
          origin_price: 2499
        },
        {
          title: '雷朋飛行員太陽眼鏡 金屬框',
          id: '-NhVNwR__QnXc0G6Aerx',
          imageUrl: 'https://raw.githubusercontent.com/xouoe/Pic/main/sunglasses-2.jpg',
          price: 3450,
          origin_price: 4200
        },
        {
          title: '晨光淺焙 經典霧黑偏光墨鏡',
          id: '-NhjyxwseqZ3QX3Dlkn8',
          imageUrl: 'https://raw.githubusercontent.com/xouoe/Pic/main/sunglasses-a2.jpg',
          price: 1200,
          origin_price: 1200
        },
        {
          title: '光子可換鏡片式太陽眼鏡',
          id: '-NhVQcI9PH4V7yacTg7l',
          imageUrl: 'https://raw.githubusercontent.com/xouoe/Pic/main/sunglasses-a4.jpg',
          price: 3650,
          origin_price: 4000
        }
      ]
    }
  },
  methods: {
    productDetail (id) {
      this.$router.push(`/products/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-pagination {
  position: relative;
  margin-top: 20px;
}
.swiper-pagination-bullet-active{
  padding:0 8px;
  border-radius: 6px;
  transition:0.3s ;
}
.product-rd{
  height:350px;
  font-size: 22px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-decoration: none;
  border-radius: 50%;
  color: #fff;
    &:hover{
      .product-title{
        opacity: 0;
      }
    }
  @media (max-width: 1220px) {
    height:300px;
    border-radius: 50%;
  }
  @media (max-width: 992px) {
    font-size: 11px;
    height:200px;
    border-radius: 50%;
  }
  @media (max-width: 576px) {
    height:150px;
    border-radius: 75%;
    .product-title{
      span{
        display: none;
      }
    }
  }
}
.product-title{
  border-radius: 50%;
  @media (max-width: 1220px) {
    border-radius: 50%;
  }
}
</style>
