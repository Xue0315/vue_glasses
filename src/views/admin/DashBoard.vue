  <template>
    <div class="container-fluid">
      <div class="position-relative"> 
        <AdminNavbar></AdminNavbar>
        <router-view></router-view>
        <ToastMessage></ToastMessage>
      </div>
    </div>
  </template>
  
  <script>
  import AdminNavbar from '@/components/AdminNavbar.vue'
  import emitter from '@/methods/emitter'
  import ToastMessage from '@/components/ToastMessage.vue'
  export default {
    components:{AdminNavbar,ToastMessage},
    provide(){
      return {
        emitter
      }
    },
    created(){
      const token = document.cookie.replace( /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1")
      this.$http.defaults.headers.common['Authorization'] = token
      const api = `${process.env.VUE_APP_API}api/user/check`
      this.$http.post(api)
          .then(res=>{
              console.log(res.data);
              if(!res.data.success){
                  this.$router.push('/')
              }
          })
    },
    
  }
  </script>
  
  <style>
  
  </style>