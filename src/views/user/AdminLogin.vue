<template>
<Loading :active="isLoading"></Loading>
<div class="bg-light vh-100">
  <div class="container h-100">
    <form class="row justify-content-center h-100 align-items-center" @submit.prevent="signin">
        <div class="col-md-12">
                    <h1 class="h1 text-center">
                        管理員登入
                    </h1>
            <div class="mx-auto col-10 col-sm-8 col-md-6 col-xl-5 mt-3">
                    <div class="form-floating">
                        <input type="email" id="floatingEmail" class="form-control" placeholder="Email address" v-model="user.username"/>
                        <label for="floatingEmail">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" id="floatingPassword" class="form-control" required placeholder="Password" v-model="user.password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="text-end mt-2">
                        <button type="submit" class="btn btn-primary w-100 fs-4 text-white">登入</button>
                    </div>
            </div>
        </div>
    </form>
  </div>
</div>
<Footer></Footer>
<SocialMedia/>
</template>

<script>
import Footer from '@/components/Footer.vue' 
import SocialMedia from '@/components/SocialMedia.vue' 
export default {
    data(){
        return{
           user:{
                username:'',
                password:'',
           },
           isLoading:false
        }
    },
    methods:{
        signin(){
            const api = `${process.env.VUE_APP_API}admin/signin`;
            this.isLoading = true
            this.axios.post(api,this.user).then(res=>{
                    this.isLoading = false;
                    const {token,expired} = res.data
					console.log(token,expired);
					document.cookie = `hexToken=${token}; expires=${new Date(expired)} `
                    this.$router.push('/dashboard/adminproducts')
                })
        }
    },
    components:{Footer,SocialMedia}
}
</script>

<style>

</style>