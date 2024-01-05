<template>
  <nav class="navbar navbar-expand-lg navbar-light p-0 bg-white position-fixed top-0 w-100">
    <a class="navbar-brand p-0" href="#">
      <img src="@/assets/images/glasses.png" width="80" height="80" alt="眼鏡行">
      <img src="@/assets/images/glasses-logo.png" width="120" height="80" alt="老薛眼鏡館">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link  fw-normal" aria-current="page" href="#">首頁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">產品列表</a>
        </li>
      </ul>
    </div>
    <div class="text-end d-flex">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="fa fa-heart fs-4" aria-hidden="true"></i></a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="fa fa-shopping-cart fs-4" aria-hidden="true"></i></a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="fa fa-users fs-4" aria-hidden="true"></i></a>
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
    margin-right: 35px;
  }
}

</style>
