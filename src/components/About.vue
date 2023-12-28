<template>
<div class="about">
  <div class="title text-center">
    <h1 class="fw-bold my-5">關於我們</h1>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title{
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
      left: 40.5%;
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
</style>