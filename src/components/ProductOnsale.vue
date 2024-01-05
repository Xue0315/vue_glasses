<template>
 <div class="row product-list justify-content-center py-5">
  <h1 class="my-5 fw-bold text-center w-100">促銷商品</h1>
    <div class="col-lg-12 product d-flex flex-wrap justify-content-center">
      <template v-for="product in products" :key="product.id">
        <div class="card mx-2 mb-3" >
          <div class="control-img overflow-hidden">
            <a href="#" class="stretched-link" @click.prevent="productDetail(product.id)">
              <button type="button" class="btn bg-dark bg-opacity-25 position-absolute start-0 w-100 text-white fs-3 fw-bold">查看更多</button>
              <div style=" height: 200px ;background-size: cover; background-repeat: no-repeat; background-position: center;"
              :style="{backgroundImage:`url(${product.imageUrl})`}" class="product-img"></div>
              <span class="discount position-absolute d-flex justify-content-center align-items-center text-white fw-bold"
              v-if="product.price !== product.origin_price"> {{ ((1-(product.price/product.origin_price).toFixed(2)).toFixed(2))*100 }}%OFF</span>
            </a>
          </div>
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">{{ product.title }}</h5>
            <div class="product-price d-flex justify-content-center">
              <div class="card-text fw-bold"><h5 class="mx-2">NT${{ $filter.currency(product.price) }}</h5></div>
              <del class="card-text fw-bold"><small >NT${{ $filter.currency(product.origin_price) }}</small></del>
            </div>
            <button type="button" class="btn btn-primary text-white w-75 position-relative z-2"  @click="addCart(product.id)">
              <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true" v-if="status.loadingItem === product.id"></span>
              <span class="visually-hidden" v-if="status.loadingItem === product.id">Loading...</span>加入購物車
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          title: '光子可換鏡片式太陽眼鏡',
          imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/colpp61109/1704269247008.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pz1J7PeIRvS9JPhyJcl%2BSmkBHAlZyYyEsmQ5HDrfJZACWY80WNQSASpWXA2Ovv0MWSKKk8fUkFggowoGY4WBla54eYxyyW1L8Vq5HkQ0j5q9in7llEskyw1yoMXZv18XyVPZQpAbzpX9T2KETLnos8njV%2BJoEBfb0I9EU1IeMqhl3s%2B%2F6yaShJpq4vSsw02VtwAD5tbukCZSrQPRMTvhVVP8YbZHyH5VV8kYK4j7WtTAG0nMaXvtPAw8UizNpVWa4rY8cWZvM1UHioystUn3aKWF%2FHdZYa3RFQryevgMi9QTwvhJi%2BVqYDg1nB8HyXMxh7P%2FphLtnfOXx3sU6M5uoA%3D%3D',
          price: 3650,
          origin_price: 4000,
          id: '-NhVQcI9PH4V7yacTg7l'
        },
        {
          title: '雷朋飛行員太陽眼鏡 金屬框',
          imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/colpp61109/1704269219308.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fBVeNWOmOlrl3knOGyPa1dvFT6bppht85IRhsJEHpGxd9GXMYLJJK6AJCjMR6PR%2FKxXnoqQgCgLRiiDQmN1LW3g5wwm9cLnMCQpOLL%2FRPg3hDNjfXsxbPT4qTpEslHNw%2FFJuvVlb6zh9th45X0y4J0ZN1%2FMePj4%2BWNOAMgKUTzNmpny9eG%2FZ4YM0N4jJ20iCuyO%2F%2FfTO%2FIeday8QmDWEZ8T47jU%2FdDpD3QAbrkDk%2FVXKMOP%2F5SGtfLPG6XHb0rkUNeM0rHSBE7SYSr%2BBm%2BoRkIbQz98Y6vt9pioP%2BxB%2BSTX%2FIW9O%2BYABRPzyRyesJ0JD003dUTCyLUybVwH5OV4EjA%3D%3D',
          price: 3450,
          origin_price: 4200,
          id: '-NhVNwR__QnXc0G6Aerx'
        },
        {
          title: '好學生必備 文青風 眼鏡框',
          imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/colpp61109/1704270704003.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BEQgSDoIM3ZcSCCe2AJ1oC75AWQo8pX3%2FPZXLwcxs9AHt6F%2Fd1csLlHeSS2l7VlmaetkLLnYBZhgpHJLoxzsbsV0li8LhNkMsS98jcXOagmetagEN7lSDfGJ1ggIGfx7QX7ZbKFu34YywJFeKjefr0n6KIbzz3knJY%2FHPwlDHG50t4x%2FmcO%2BkfYlb%2FeYaqBS%2FmeMvI%2FJCKpBDdnV6rRddJoOo2auMCsoWyCC6PTWH33he0bvqPp58xwpb0DYXyHlE2nND%2By%2FpIi%2FlQFnWrEvwgQP4AW7d4InrwoMs3doctmYdw6eGJ27mAwdqF%2FlADCP1FpIDzlSoNDEtjvLMi8gsA%3D%3D',
          price: 2000,
          origin_price: 2450,
          id: '-NhV9g5cQquFLSB-Rg51'
        },
        {
          title: '兒童專用矽膠彈性橢圓框',
          imageUrl: 'https://raw.githubusercontent.com/xouoe/Pic/main/z-1.jpg',
          price: 2550,
          origin_price: 3000,
          id: '-NhV2MDVx_E2pTkZKx6x'
        }
      ],
      tempProduct: {},
      productImg: '',
      status: {
        loadingItem: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
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
      })
        .catch(() => {

        })
    },
    productDetail (id) {
      this.$router.push(`/products/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  cursor: pointer;
  width: 18rem;
  .btn.bg-dark{
    opacity: 0;
    z-index: 1;
  }
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
}
.discount{
  top: 0;
  right: 0;
  width: 80px;
  height: 30px;
  background-color: #ff4d4d;
}
.product-list{
  h1 {
    position: relative;
    &::after{
      content:'';
      position: absolute;
      display: inline-block;
      width: 350px;
      border-bottom: 3px solid #000;
      bottom: 0;
      top: 60px;
      left: 36.5%;
    }
  }
  @media(max-width:1919px){
    h1{
      &::after{
        display: none;
      }
    }
  }
}
.product{
  @media (max-width: 1400px){
    width: 800px;
    .card{
      width: 23rem;
      &:hover{
        .btn.bg-dark{
          opacity: 1;
          height: 200px;
        }
      }
    }
  }
  @media (max-width: 990px) {
    .card{
      width: 28rem;
        &:hover{
        .btn.bg-dark{
          opacity: 1;
          height: 200px;
        }
      }
    }
  }
}
</style>
