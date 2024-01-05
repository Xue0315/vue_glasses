<template>
  <div class="footer justify-content-center d-flex align-items-center flex-column w-100">
    <span class="text-white">Copyright &copy; 2023 ZhongXun XUE</span>
    <span class="text-white">非商業用途，素材來源：unsplash，參考資料來源：<a class="text-white text-decoration-none" href="#">JAPAN QUALITY</a>，<a class="text-white text-decoration-none" href="#">PINKOI</a></span>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer{
  background-color: #4DA0B0;
  height: 100px;
  span {
    @media (max-width:768px) {
      font-size: 12px;
    }
    @media (max-width:576px) {
      font-size: 7px;
    }
  }
}
</style>
