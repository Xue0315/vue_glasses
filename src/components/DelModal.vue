<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
              <span>刪除 {{ product.title }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="product.title">是否刪除 <strong class="text-danger">{{ product.title }}</strong> (刪除後將無法恢復)。</div>
          <div v-else>是否刪除 <strong class="text-danger">{{ product.id }}</strong> (刪除後將無法恢復)。</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('delete-product',product.id)">確定</button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import MixinModal from '../methods/MixinModal';
  export default {
    data(){
      return{
        modal:{}
      }
    },
    props:{
        product:{},
    },
    mixins:[MixinModal]
  }
  </script>
  
  <style>
  
  </style>