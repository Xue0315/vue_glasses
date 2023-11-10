<template>
    <UserNavbar/>
    <div class="position-relative">
        <router-view></router-view>
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import UserNavbar from '@/components/UserNavbar.vue';
export default {
   
    provide(){
      return {
        emitter
      }
    },
    
    components:{UserNavbar}
}
</script>

<style lang="scss" scoped>

</style>