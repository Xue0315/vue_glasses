<template>
  <div class="homeBanner position-relative w-100 bg-light bg-opacity-25">
    <h1 class="position-absolute w-100 d-flex justify-content-center align-items-center h-100 text-white z-1 fw-bold">XUE OPTICAL 老薛眼鏡館</h1>
    <div class="position-absolute h-100 w-100 d-flex align-items-center bg-dark bg-opacity-25">
      <p class="text-center fw-bold mx-auto text-white">戴來一份亮麗精彩，帶出一片光明未來。</p>
    </div>
    <div class="readmore text-center w-100" v-if= "height < 10" >
      <i class="fa fa-angle-double-down fs-1 text-primary" aria-hidden="true"></i>
      <h6 class="my-3 fw-bold text-primary">往下閱讀更多</h6>
    </div>
  </div>
  <div class="bg-light">
    <Draw></Draw>
    <div class="container recommend text-center bg-light" data-aos="fade-right" data-aos-duration="2000">
      <div class="title py-5 align-middle">
        <h1 class="fw-bold my-5">老薛為您推薦</h1>
      </div>
      <RecommendProduct/>
    </div>
    <div class="container py-5">
      <ProductOnsale  data-aos="fade-right"  data-aos-duration="2000"/>
    </div>
    <CouponBanner :info="couponBanner" />
    <News/>
    <div class="problem container my-5" data-aos="zoom-in" data-aos-duration="2000">
      <h1 class="text-center my-5 fw-bold">常見問題</h1>
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="accordion justify-content-center" id="accordionExample">
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span>鏡片有防紫外線嗎?</span>
                  </button>
                </h3>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <small class="fw-medium">鏡片有防潑水、抗紫外線及防反光的功能。</small>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    太陽眼鏡可以配度數嗎?
                  </button>
                </h3>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <small class="fw-medium">一般鏡框可選用色彩色鏡片，製作成有度數墨鏡使用。部分墨鏡亦可製作成有度數墨鏡。</small>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="headingfour">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                  請問有兒童用眼鏡嗎?
                </button>
              </h3>
              <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <small class="fw-medium">有販售兒童用鏡框，使用TR-90材質，減輕鏡框重量，適合兒童配戴。</small>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="headingfive">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                  眼鏡配好可以宅配到府嗎?
                </button>
              </h3>
              <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <small class="fw-medium">如不方便現場等候或不方便再前往門市取件，可提供付費宅配服務。</small>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="headingsix">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                  請問可以單購買鏡框嗎?
                </button>
              </h3>
              <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <small class="fw-medium">單鏡框購買價格為鏡框金額再扣除500元費用。</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SocialMedia></SocialMedia>
    <ScrollTop></ScrollTop>
    <Section></Section>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import ScrollTop from '@/components/ScrollTop.vue'
import ProductOnsale from '@/components/ProductOnsale.vue'
import RecommendProduct from '@/components/RecommendProduct.vue'
import News from '@/components/News.vue'
import CouponBanner from '@/components/CopuonBanner.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Section from '@/components/Section.vue'
import Draw from '@/components/Draw.vue'
export default {
  data () {
    return {
      height: 0,
      isLoading: false,
      couponBanner: {
        bgImg: 'url(https://raw.githubusercontent.com/xouoe/Pic/main/z-sale.jpg)',
        title: '光棍節優惠券',
        text: '因為價格的問題讓您猶豫不決嗎？快來領取您專屬的優惠券吧！',
        attachment: true,
        btnText: '領取優惠券'
      }
    }
  },
  methods: {
    scroll () {
      this.height = document.body.scrollTop || document.documentElement.scrollTop
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scroll)
  },
  components: { CouponBanner, ProductOnsale, RecommendProduct, News, Footer, ScrollTop, SocialMedia, Section, Draw }
}
</script>

<style lang="scss" scoped>
.homeBanner{
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1534844978-b859e5a09ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  p{
    color:#55312b;
    width: 100%;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 8s steps(32);
    @media(max-width:576px){
      font-size: 12px;;
    }
  }
  h1{
    transform: translateY(-60px);
  }
}
.readmore{
  position: absolute;
  bottom: 5px;
  i{
    animation: slideDown 1.5s infinite;
  }
  h6{
    color:#4DA0B0;
  }
}
@keyframes slideDown{
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0px);
  }
}
@keyframes typing{
    0%{
    width:0;
    }
}
.problem{
  height: 420px;
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
    @media(max-width:1919px){
      &::after{
        display: none;
      }
    }
  }
}
.recommend{
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
    @media(max-width:1919px){
      &::after{
        display: none;
      }
    }
  }
}
</style>
