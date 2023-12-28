<template>
    <div class="toast bg-light" role="alert" aria-live="assertive" aria-atomic="true" ref="toastmsg">
      <div class="toast-header">
        <span class="border border-primary border border-4 p-1 rounded-circle"><i class="fa-solid fa-check fa-beat fa fs-4"></i></span>
        <strong class="me-auto fs-6 text-primary">{{ msg.title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" v-if="msg.content">
        <span class="text-primary fs-6 fw-bold">{{ msg.content }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import Toast from 'bootstrap/js/dist/toast'
  export default {
    name:'TheToast',
    props:['msg'],
    mounted(){
      const Toastel = this.$refs.toastmsg;
      const toast = new Toast(Toastel,{
          delay:5000  
      });
      toast.show();
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .toast-header{
    i{
      color: #4DA0B0;
    }
    .me-auto{
      margin-left: 20px;
    }
  }
  </style>