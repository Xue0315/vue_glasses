<template>
  <button type="button" class="d-block btn btn-info position-relative position-fixed ms-auto gotop-btn p-2" ref="gotopbtn" 
  @click.stop="gotoTopScroll" :class="height < 200 ? 'd-none' : ''"><i class="fa-regular fa-circle-up fs-2"></i></button>
</template>

<script>
export default {
  data(){
    return {
      height:''
    }
  },
  methods:{
    scroll(){
      this.height = document.body.scrollTop || document.documentElement.scrollTop;
    },
    gotoTopScroll(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scroll)
  }
}
</script>

<style lang="scss" scoped>
.gotop-btn{
  bottom: 1%;
  right: 1%;
  border-radius: 50%;
  background-color: rgba(0,0,0,.6);
}
</style>