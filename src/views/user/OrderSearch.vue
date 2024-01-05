<template>
  <PageLoading :active="isLoading"/>
  <div class="ordersearch-Banner position-relative">
    <div class="ordersearch-title bg-dark bg-opacity-50 w-100 position-absolute bottom-0 d-flex align-items-center h-100">
      <h1 class="text-white fw-bold mx-auto">訂單查詢</h1>
    </div>
  </div>
  <div class="bg-light container mt-5">
    <div class="search-title text-center">
      <h2>請輸入您的訂單編號</h2>
    </div>
    <div class="input-group mb-3 d-flex w-75 mx-auto my-5">
      <input type="text" class="form-control " placeholder="請輸入您的訂單編號" v-model="orderCode">
      <button class="btn btn-outline-secondary" @click="getOrder">搜尋</button>
    </div>
    <div class="accordion accordion-flush w-75 mx-auto" id="accordionFlushExample" v-if="orders.id">
      <div class="accordion-item container">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            訂單資訊
        </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="row">
            <div class="col">
              <table class="table container w-75 mt-3" v-if="!mobileMode">
                <tbody v-if="orders.user">
                  <tr>
                    <th>訂單編號</th>
                    <td>{{ orders.id }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ orders.user.email }}</td>
                  </tr>
                  <tr>
                    <th>收件人姓名</th>
                    <td>{{ orders.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ orders.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{ orders.user.address }}</td>
                  </tr>
                  <tr>
                    <th>備註</th>
                    <td>{{ orders.message}}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td v-if="orders.is_paid" class="text-warning">已付款</td>
                    <td v-else>尚未付款</td>
                  </tr>
                </tbody>
              </table>
              <table class="table container w-75 mt-3" v-if="mobileMode">
                <tbody v-if="orders.user">
                  <tr>
                    <th colspan="4">訂單編號</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan="2">{{ orders.id }}</td>
                  </tr>
                  <tr>
                    <th colspan="4">Email</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan="2">{{ orders.user.email }}</td>
                  </tr>
                  <tr>
                    <th colspan="4">收件人姓名</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan="2">{{ orders.user.name }}</td>
                  </tr>
                  <tr>
                    <th colspan="4">收件人電話</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan="2">{{ orders.user.tel }}</td>
                  </tr>
                  <tr>
                    <th colspan="4">收件人地址</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan="2">{{ orders.user.address }}</td>
                  </tr>
                  <tr>
                    <th colspan="4">備註</th>
                  </tr>
                  <tr v-if="orders.message">
                    <td colspan="2">{{ orders.message}}</td>
                  </tr>
                  <tr>
                    <th colspan="4">付款狀態</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan="2" v-if="orders.is_paid" class="text-warning">已付款</td>
                    <td colspan="2" v-else>尚未付款</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="saleTitle text-center container my-5 py-2" data-aos="fade-right" data-aos-duration="2000">
      <ProductOnsale/>
    </div>
  </div>
  <Section></Section>
  <Footer></Footer>
  <SocialMedia/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import ProductOnsale from '@/components/ProductOnsale.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Section from '@/components/Section.vue'
export default {
  data () {
    return {
      orders: [],
      orderCode: '',
      isLoading: false,
      screenWidth: 0,
      mobileMode: false
    }
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderCode}`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.orders = res.data.order
        this.isLoading = false
      })
        .catch(() => {

        })
    }
  },
  watch: {
    screenWidth: {
      handler (val) {
        if (val < 576) {
          this.mobileMode = true
        } else {
          this.mobileMode = false
        }
      }
    }
  },
  components: { ProductOnsale, Footer, SocialMedia, Section },
  mounted () {
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  }
}
</script>

<style lang="scss" scoped>
.ordersearch-Banner{
  background-image: url('https://images.unsplash.com/photo-1529003600303-bd51f39627fb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center ;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  .ordersearch-title{
    h1{
      position: relative;
      top: 40px;
    }
  }
}
.accordion{
  @media (max-width: 768px) {
    font-size: 12px;;
  }
  @media (max-width: 500px) {
    font-size: 8px;;
  }
}
</style>
