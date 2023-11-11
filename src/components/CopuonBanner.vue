<template>
   <div :style="{'background-image':info.bgImg} " class="bg-img" :class="{'bg-attachment':info.attachment}">
        <div class="bg-opacity-50 bg-black mx-auto h-100 my-5">
            <div class="d-flex align-items-center h-100">   
                <h2 class="h2 text-white mx-auto text-center fw-bold">{{ info.title }}
                    <p class="my-4 text-white mx-auto">{{ info.text }}</p>
                    <button class="btn btn-outline-primary text-white p-2 z-2 fw-bold border-white" @click.stop="copyCoupon">領取優惠券</button>
                </h2>
            </div>
        </div>
        
   </div>
    
</template>

<script>
export default {
    props:['info'],
    methods:{
        copyCoupon () {
        if (navigator.clipboard) {
          navigator.clipboard.writeText('1111&89%off')
          this.$pushMessage(true, '複製優惠碼')
        }
      }
    }
}
</script>

<style lang="scss" scoped>
    .bg-img{
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        p{
            font-size: 24px;
            @media (max-width:768px) {
                font-size: 13px;
            }
        }
    }
    .bg-attachment{
        background-attachment: fixed;
    }
   
</style>