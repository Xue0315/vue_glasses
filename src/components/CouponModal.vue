<template>
    <div class="modal fade" id="exampleModal"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">優惠券</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
              <label for="title">標題</label>
              <input type="text" id="title" class="form-control" placeholder="請輸入標題" v-model="tempCoupon.title">
          </div>
          <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <input type="text" id="coupon_code" class="form-control" placeholder="請輸入優惠碼" v-model="tempCoupon.code">
          </div>
          <div class="mb-3">
              <label for="due_date">到期日</label>
              <input type="date" id="due_date" class="form-control"  v-model="due_date"> 
          </div>
          <div class="mb-3">
              <label for="price">折扣百分比</label>
              <input type="number" id="price" class="form-control" placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
          </div>
          <div class="mb-3">
              <input type="checkbox" class="form-check-input" id="is_enabled" v-model="tempCoupon.is_enabled"  
                      :true-value="1"
                      :false-value="0"> 
              <label class="form-check-label" for="is_enabled"> 
                  是否啟用</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('update-coupon',tempCoupon)">確認</button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import MixinModal from '@/methods/MixinModal';
  export default {
      data(){
          return {
              modal:{},
              tempCoupon:{},
              due_date:''
          }
      },
      props:{
          coupon:{}
      },
      watch: {
        coupon() {
          this.tempCoupon = this.coupon;
          console.log(this.tempCoupon.due_date);
          const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T');
          [this.due_date] = dateAndTime;
        },
        due_date() {
          this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
        }
      },
      mixins:[MixinModal]
  }
  </script>
  
  <style>
  
  </style>