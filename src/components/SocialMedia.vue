<template>
  <div class=" position-absolute position-fixed me-auto ig-btn z-2"><a href="https://www.instagram.com/" target="_blank"><img src="@/assets/images/ig_logo.png" alt="instagram"></a></div>
  <div class=" position-absolute position-fixed me-auto fb-btn z-2"><a href="https://www.facebook.com/" target="_blank"><img src="@/assets/images/fb_logo.png" alt="facebook"></a></div>
  <div class=" position-absolute position-fixed me-auto gh-btn z-2"><a href="https://github.com/xouoe" target="_blank"><img src="@/assets/images/gh_logo.png" alt="github"></a></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ig-btn{
  bottom: 42%;
  right: -17%;
  width: 20%;
  img{
    width: 10%;
  }
}
.fb-btn{
  bottom: 48%;
  right: -17%;
  width: 20%;
  img{
    width: 10%;
  }
}
.gh-btn{
  bottom: 54%;
  right: -17%;
  width: 20%;
  img{
    width: 10%;
  }
}
@media (max-width:1200px) {
  .gh-btn,.fb-btn,.ig-btn{
    display: none;
  }
}
</style>
