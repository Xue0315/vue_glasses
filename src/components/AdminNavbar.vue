<template>
  <nav class="navbar navbar-expand-lg navbar-light p-0 bg-white top-0 w-100">
    <a class="navbar-brand p-0" href="#">
      <img src="@/assets/images/glasses.png" width="80" height="80">
      <img src="@/assets/images/glasses-logo.png" width="120" height="80">    
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse w-100" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/dashboard/adminproducts" class="nav-link ">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/admincoupons" class="nav-link ">優惠券</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/adminorders" class="nav-link ">訂單</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/admincart" class="nav-link ">購物車</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/adminarticles" class="nav-link ">文章列表</router-link>
        </li>
      </ul>
    </div>
    <div class="text-end">
      <a class="nav-link fw-bold" href="#"><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i></a>
    </div>
  </nav>
</template>
    
<script>
export default {

}
</script>
  
<style lang="scss" scoped>
a{
  position: relative;
}
.nav-item{
  position: relative;
  a{
    margin-left: 10px;
  }
  &::after{
    content:'';
    height: 2px;
    left: 50%;
    right: 50%;
    bottom: 0;
    position: absolute;
    transition: .7s;
  }
  &:active, &:hover{
    &::after{
      left: 0%;
      right: 0%;
      border-bottom: 1px solid #000;
      margin-left: 10px;
    }
  }
}
.text-end {
  a{
    margin-right: 55px;
  }
}
nav{
  border-bottom: 4px solid #1D4350;
}
</style>