<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">新增產品</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="img">輸入圖片網址</label>
              <input type="text" id="img" class="form-control" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl" >
            </div>
            <div class="mb-3">
              <label for="imgUrl">或上傳圖片</label>
              <input type="file" id="imgUrl" class="form-control" @change="uploadFile" ref="fileInput"  >
            </div>
            <img class="img-fluid" alt="" :src="tempProduct.imageUrl">
          </div>
          <div class="col-md-8">
              <div class="mb-3">
                <label for="titel">標題</label>
                <input type="text" id="title" class="form-control" placeholder="請輸入標題" v-model="tempProduct.title">
              </div>
              <div class="row gx-2">
                <div class="col-md-6 mb-3">
                  <label for="category">分類</label>
                  <input type="text" id="category" class="form-control" placeholder="請輸入分類" v-model="tempProduct.category">
                </div>
                <div class="col-md-6 mb-3">
                  <label for="unit">單位</label>
                  <input type="text" id="unit" class="form-control" placeholder="請輸入單位" v-model="tempProduct.unit">
                </div>
              </div>
              <div class="row gx-2">
                <div class="col-md-6 mb-3">
                  <label for="origin_price">原價</label>
                  <input type="number" id="origin_price" class="form-control" placeholder="請輸入原價" v-model="tempProduct.origin_price">
                </div>
                <div class="col-md-6 mb-3">
                  <label for="price">售價</label>
                  <input type="number" id="price" class="form-control" placeholder="請輸入售價"  v-model="tempProduct.price">
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <label for="description">產品描述</label>
                <textarea type="text" id="description" class="form-control" placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
              </div>
              <div class="mb-3">
                <label for="content">說明內容</label>
                <textarea type="text" id="content" class="form-control" placeholder="請輸入說明內容" v-model="tempProduct.content"></textarea>
              </div>
              <div class="mb-3">
                <input type="checkbox" class="form-check-input" v-model="tempProduct.is_enabled"> 是否啟用
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('update-product',tempProduct)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import  Modal  from 'bootstrap/js/dist/modal';
export default {
    data(){
      return {
        modal:{},
        tempProduct:{}
      }
    },
    props:{
      product:{
        type:Object,
        default(){return{};}
      }
    },
    mounted(){
      this.modal = new Modal(this.$refs.modal)
    },
    watch:{
      product(){
        this.tempProduct = this.product
      }
    },
  methods:{
    showModal(){
      this.modal.show();
    },
    hideModal(){
      this.modal.hide();
    },
    uploadFile(){
      const fileInput = this.$refs.fileInput.files[0]
      const select =  this.$refs.fileInput.id
      const formdata = new FormData();  
      formdata.append('file-to-upload',fileInput);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.axios.post(url,formdata).then((res)=>{
        if(res.data.success){
        this.tempProduct.imageUrl = res.data.imageUrl;
        document.getElementById(select).value = '';
        console.log(res.data);
        }
      })
    }
  }
}
</script>

<style>

</style>