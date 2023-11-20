<template>
   <div class="checkoutstatus-image my-5">
        <ul class="list-unstyled d-flex justify-content-around align-middle">
            <li class="fs-5 rounded-circle text-white default"><span class="position-relative z-5">1</span></li>
            <li class="fs-5 rounded-circle text-white " :class="order?.id ? 'active' : ''"><span>2</span></li>
            <li class="fs-5 rounded-circle text-white" :class="order?.is_paid ? 'active' : ''"><span>3</span></li>
        </ul>
        <ul class="checkoutstatus-title list-unstyled justify-content-around d-flex">
            <li class="defaultstatus"><span>填寫資訊</span></li>
            <li :class="order?.id ? 'confirm' : ''"><span>確認訂單</span></li>
            <li :class="order?.is_paid ? 'confirm' : ''"><span>完成訂單</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['order']
}
</script>

<style lang="scss" scoped>
.checkoutstatus-image{
    position: relative;
    top: 50px;
    .rounded-circle{
        background-color:#ccc;
        padding: 1% 2% 1% 2%;
        &.default{
            background-color: #ff4d4d;
        }
    }

    .defaultstatus{ 
        span{
            color:#ff4d4d;
        }
    }
    li{
      
        &.confirm{
            span{
                color: #ff4d4d;
            }
        }
    }
    .rounded-circle:nth-child(2),
    .rounded-circle:nth-child(3) {
        &::after {
            content: '';
            position: absolute;
            top: 25%;
            transform: translateX(-110%);
            width: 28.5%;
            height: 2px;
            background-color: #ccc;
            z-index: 0;
        }
        &.active {
                background-color: #ff4d4d;
            &::after {
                background-color: #ff4d4d;
                z-index: 0;
            }
        }
    }
}
    
</style>