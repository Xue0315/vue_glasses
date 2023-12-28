<template>
  <div class="container my-5">
    <div class="draw">
      <div class="row">
          <div class="col-md-6 adjust">
            <div class="content d-flex justify-content-center align-items-center flex-column h-100 my-2 ">
              <div class="title text-left w-100">
                <h2 class="fw-bold ">戴眼鏡能讓度數減少嗎？</h2>
              </div>
              <p class="lh-lg paragraph" style="color: #5f5858;">如果孩子近視後，不及時矯正，還會增加孩子的視疲勞程度，可能進一步加深近視度數。
              <strong class="fw-bold">❞所以配戴一副合適的眼鏡❞</strong>，使孩子得到正確的視覺刺激，達到矯正視力的效果，
              但也只能穩定現有度數不至於增加，但不代表度數會減少。</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="image" style="width: 100%; height: 100%;">
              <img src="@/assets/images/test.jpg" alt="檢查視力" style="width: 100%; max-height: 100%;max-width: 100%;height: 100%; object-fit: cover;">
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-sm-12 col-md-6 d-flex align-items-center">
            <div class="image" style="width: 100%;">
              <img src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="矯正眼睛" style="max-height: 100%;max-width: 100%;height: auto;" >
            </div>
          </div>
          <div class="col-md-6">
            <div class="content d-flex justify-content-center align-items-center flex-column h-100 my-2">
              <div class="title text-left w-100">
                <h2 class="fw-bold ">走向戶外開啟新「視」界</h2>
              </div>
              <p class="lh-lg" style="color: #5f5858;">世衛組織將每年10月第二個星期四訂為「世界視覺日」，我們將全世界的注意力集中在工作場所的眼睛照顧的重要性。
              第一步是優先考慮自己的眼睛健康，下一步是激勵世界上的老闆為他們的員工提供高品質的眼科護理。希望各位可以找個一天，不管是工作日或假日，請放下手邊的工作，
                  請到本館讓我們好好地替您的眼睛做一個完善的檢查，睛彩視界，從啟明出發。
              </p>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-sm-12 col-lg-6 d-flex flex-wrap newpost">
            <div class="col-12 col-sm-6 col-md-6 ">
              <div class="image overflow-hidden" style="width: 100%;">
                <img :style="{backgroundImage:`url(${'https://images.unsplash.com/photo-1543984613-f55ca6a1ba35?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`}"
                style=" max-height: 100%;max-width: 100%;height: 220px; background-position: center; background-size: cover; background-repeat: no-repeat;" alt="" @click="proceedPage">
              </div>
            </div>
          <div class="col-12 col-sm-6 col-md-6 px-2">
            <div class="tag newtag">
              <span class="px-1 fw-bold">全新推出</span>
            </div>
            <div class="product">
              <div class="title py-2 w-100">
                <h5 class="fw-bold text-left">濾藍光0度眼鏡黑框</h5>
              </div>
              <div class="content">
                <p style="color: #5f5858;">大多是半自動或手工製作，其外觀和塑膠材質很像，板料質地較紮實且光澤，顏色多樣化且不退色。</p>
                <button type="button" class="btn btn-outline-info" @click="proceedPage">選購去</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 px-2 product-detail">
            <div class="tag py-1">
              <span class="px-1 fw-bold">高評價</span>
            </div>
            <div class="product">
              <div class="title py-2 w-100">
                <h5 class="fw-bold text-left">無螺絲矽膠彈性圓框</h5>
              </div>
              <div class="content">
                <p style="color: #5f5858;">專為兒童設計的輕量材質眼鏡，優質彈性鏡架，一體成形舒適鼻托，不用擔心孩子在玩樂時因為碰撞而受傷。</p>
                <button type="button" class="btn btn-outline-info" @click="proceedPage">選購去</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6">
            <div class="image overflow-hidden product-image" >
              <img :style="{backgroundImage:`url(${' https://plus.unsplash.com/premium_photo-1661288449344-0f5fd8c1e88b?auto=format&fit=crop&q=80&w=1942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`}"
              style=" max-height: 100%;max-width: 100%;height: 220px; background-position: center; background-size: cover; background-repeat: no-repeat;" alt="" @click="proceedPage">
            </div>
          </div>
        </div>
        <div class="d-none col-sm-12 col-md-6 d-lg-flex">
          <div class="image">
            <img src="https://images.unsplash.com/photo-1599243439680-1af420953c23?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            style="width:100%;height: 100%;background-position: center; background-size: cover; background-repeat: no-repeat;object-fit: cover;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TheDraw',
  data(){
    return{
    }
  },
  methods:{
    proceedPage(){
      this.$router.push('/products')
    },
  }
}
</script>

<style lang="scss" scoped>
.content{
  p{
    @media (max-width: 1200px) {
      font-size: 14px;
    }
  }
}
.tag{
  span{
    border:solid 3px #ff4d4d;
    border-radius: 200px;
    background-color: #ff4d4d;
    color: #fff;
  }
}
.adjust{
  @media (max-width: 768px) {
    order: 2;
  }
}
.newpost{
  .image{
    &:hover{
      cursor: pointer;
    }
    img{
      width: 100%;
      height: 100%;
      background-size: cover;
      &:hover{
        transform: scale(1.1);
        transition: .4s;
      } 
    }
  }
  .product{
    @media (max-width:992px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .product-detail{
    @media (max-width: 576px) {
      order: 1;
    }
  }
  .product-image{
    @media (max-width: 576px) {
      order: 2;
      margin-top: 60px;
    }
  }
  .newtag{
    margin-top: 5px;
  }
}
</style>