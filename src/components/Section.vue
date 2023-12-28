<template>
  <div class="bg-section mt-5">
    <div class="container">
      <div class="d-block section d-md-flex p-5">
        <div class="d-flex item d-md-block d-lg-flex w-100 ">
          <div class="logo">
            <i class="fa-solid fa-truck text-white fs-2 pt-2"></i>
          </div>
          <div class="text text-white fw-bold mx-2">
            <span>免費送府</span>
            <p>配完眼鏡隔天請專人送上府</p>
          </div>
        </div>
        <div class="d-flex item d-md-block d-lg-flex w-100 ">
          <div class="logo">
            <i class="fa-solid fa-gift text-white fs-2 pt-2"></i>
          </div>
          <div class="text text-white fw-bold mx-2">
            <span>加碼送</span>
            <p>花費$8000再送一副太陽眼鏡</p>
          </div>
        </div>
        <div class="d-flex item d-md-block d-lg-flex w-100 ">
          <div class="logo">
            <i class="fa-solid fa-hand-holding-dollar text-white fs-2 pt-2"></i>
          </div>
          <div class="text text-white fw-bold mx-2">
            <span>紅利點數</span>
            <p>1點可折抵消費金1元</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TheSection'
}
</script>

<style lang="scss" scoped>
.bg-section{
  background-color: #6D6027;
}
.section{
  justify-content: center;
  span{
    font-size: 22px;
  }
  @media (max-width: 992px) {
    span{
      font-size: 18px;
    }
    p{
      font-size: 14px;
    }
    text-align: center;
  }
  .item{
    justify-content: center;
    @media (max-width: 768px) {
      justify-content: start;
      text-align: left;
      margin-top: 40px;;
    }
  }
}
</style>