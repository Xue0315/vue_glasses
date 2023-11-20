<template>
  <router-view></router-view>
  <PageLoading :active="isLoading" />
  <div class="checkout-page container position-relative w-100">
    <TimeLine :order="order"></TimeLine>
    <div class="checkout-purpose container" v-if="!order.is_paid">
        <div class="checkout-title text-center mb-4">
            <h3>訂單明細</h3>
            <hr class="w-50 mx-auto">
            <div class="accordion accordion-flush w-50 mx-auto" id="accordionFlushExample">
                <div class="accordion-item container">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        商品資訊
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse show " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="row">
                            <div class="col">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td class="text-start" style="width:400px;">商品名稱</td>
                                            <td style="width:300px;">數量</td>
                                            <td style="width:200px;">單價</td>
                                        </tr>
                                        <tr v-for="item in order.products" :key="item.id">
                                            <td class="text-start">{{item.product.title}}</td>
                                            <td>{{item.qty}} / {{ item.product.unit }}</td>
                                            <td class="text-end">${{$filter.currency(item.product.price)}}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="width: 400px;" class="text-end">總金額</td>
                                            <td class="text-end">NT${{$filter.currency(order.total)}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <table class="table container w-50 mb-3 aa">
                <tbody v-if="order.user">
                    <tr>
                        <th>訂單編號</th>
                        <td>{{ order.id }}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                        <th>收件人姓名</th>
                        <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                        <th>收件人電話</th>
                        <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                        <th>收件人地址</th>
                        <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                        <th>備註</th>
                        <td>{{ order.message}}</td>
                    </tr>
                    <tr>
                        <th>付款狀態</th>
                        <td v-if="order.ispaid" class="text-warning">已付款</td>
                        <td v-else>尚未付款</td>
                    </tr>
                </tbody>
        </table>
        <div class="pay text-center">
            <button type="button" class="btn btn-outline-primary w-50" @click="pay">付款去</button>
        </div>
        
    </div>
    <div class="success-message text-center" v-if="order.is_paid">
        <i class="fa-solid fa-circle-check fa-2xl fs-1 text-primary mb-5"></i>
        <h2 class="mb-5">付款成功</h2>
        <p class="fs-5">感謝您的訂購</p>
        <p class="fs-5">商品預計於三個工作天內寄送（不含週休及國定例假日）再請留意簡訊通知</p>
        <p>訂單建立於<strong class="fs-3">{{$filter.date(order.create_at)}}</strong></p>
        <button class="btn btn-outline-primary mt-3 w-25" @click="proceedPage">繼續購物</button>
    </div>
  </div>
<Footer></Footer>
<SocialMedia/>
</template>

<script>
import TimeLine from '@/components/TimeLine.vue'
import Footer from '@/components/Footer.vue'
import SocialMedia from '@/components/SocialMedia.vue'
export default {
    data(){
        return {
            id:'',
            order:{},
            isLoading:false
        }
    },
    methods:{
        getOrder(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.id}`;
            this.isLoading = true;
            this.$http.get(api).then(res=>{
                console.log(res);
                this.order = res.data.order;
                this.isLoading = false;
            })
        },
        pay(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.id}`;
            this.isLoading = true;
            this.$http.post(api).then(res=>{
                    if(res.data.success){
                        this.getOrder();
                        console.log(res);
                        this.isLoading = false;
                    }
            })
        },
        proceedPage(){
                this.$router.push('/products')
        },
    },
    components:{TimeLine,Footer,SocialMedia},
    mounted(){
        this.id = this.$route.params.orderId;
        this.getOrder();
    }
}
</script>

<style lang="scss" scoped>

.checkout-purpose{
    height: 1000px;
}
.success-message{
    padding: 115px;
}
.accordion-item,.aa{
    @media (max-width:1400px) {
        font-size: 12px;;
    }
    @media (max-width:1200px) {
        font-size: 10px;;
    }
    @media (max-width:1000px) {
        font-size: 6px;;
    }
}
</style>