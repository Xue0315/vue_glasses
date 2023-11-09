<template>
   <div class="checkoutstatus-image my-5 position-relative">
        <ul class="list-unstyled d-flex justify-content-around">
            <li class="fs-2 rounded-circle text-white px-3 default">1</li>
            <li class="fs-2 rounded-circle text-white px-3" :class="order?.id ? 'active' : ''">2</li>
            <li class="fs-2 rounded-circle text-white px-3" :class="order?.is_paid ? 'active' : ''">3</li>
        </ul>
        <ul class="checkoutstatus-title list-unstyled w-100 justify-content-around d-flex">
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

<style lang="scss">
.checkoutstatus-image{
    top: 50px;
    height:150px;
    .rounded-circle{
        background-color:#ccc;
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
    li+li{
        &::before{
            content: '';
            position: absolute;
            width: 360px;
            height: 3px;
            background-color: #ccc;
            top: -100px;
            bottom: 0;
            margin: auto;
            transform: translateX(-375px);
        }
        &.active{
            background-color:#ff4d4d;
            &::before{
                content: '';
                position: absolute;
                width: 385px;
                height: 3px;
                background-color: #ff4d4d;
                top: -100px;
                z-index: 1;
                bottom: 0;
                margin: auto;
                transform: translateX(-400px);
            }
        }
    }
}
    
</style>