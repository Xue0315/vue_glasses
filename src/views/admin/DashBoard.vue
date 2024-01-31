<template>
  <div class="container-fluid">
    <div class="position-relative">
      <AdminNavbar/>
      <router-view/>
      <ToastMessage/>
    </div>
  </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue'
import emitter from '@/methods/emitter'
import ToastMessage from '@/components/ToastMessage.vue'

export default {
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api).then(res => {
      if (!res.data.success) {
        this.$router.push('/')
      }
    }).catch((err) => {
      this.$pushMessage(err.response)
    })
  },
  components: { AdminNavbar, ToastMessage }
}
</script>

<style>

</style>
