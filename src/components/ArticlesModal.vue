<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">新增文章</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="img">輸入圖片網址</label>
              <input type="text" id="img" class="form-control" placeholder="請輸入圖片連結" v-model="tempArticle.imageUrl" >
            </div>
            <div class="mb-3">
              <label for="imgUrl">或上傳圖片</label>
              <input type="file" id="imgUrl" class="form-control" @change="uploadFile" ref="fileInput"  >
            </div>
            <img class="img-fluid" alt="上傳的圖片" :src="tempArticle.imageUrl">
          </div>
          <div class="col-md-8">
              <div class="row gx-2 mb-3">
                <div class="col-md-6 mb-3">
                  <label for="titel">標題</label>
                  <input type="text" id="title" class="form-control" placeholder="請輸入標題" v-model="tempArticle.title">
                </div>
                <div class="col-md-6 mb-3">
                  <label for="create_at">建立時間</label>
                  <input type="date" id="create_at" class="form-control" v-model="create_at">
                </div>
              </div>
              <div class="row gx-2">
                <div class="col-md-6 mb-3">
                  <label for="tag">標籤</label>
                  <input type="text" id="tag" class="form-control" placeholder="請輸入標籤" v-model="tempArticle.tag">
                </div>
                <div class="col-md-6 mb-3">
                  <label for="author">作者</label>
                  <input type="text" id="author" class="form-control" placeholder="請輸入作者" v-model="tempArticle.author">
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <label for="description">摘要</label>
                <textarea type="text" id="description" class="form-control" placeholder="請輸入摘要" v-model="tempArticle.description"></textarea>
              </div>
              <div class="mb-3">
                <label for="content">內容</label>
                <textarea type="text" id="content" class="form-control" placeholder="請輸入內容" v-model="tempArticle.content"></textarea>
              </div>
              <div class="mb-3">
                <input type="checkbox" class="form-check-input" v-model="tempArticle.isPublic"> 是否公開
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('update-article',tempArticle)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MixinModal from '@/methods/MixinModal.js'

export default {
  data () {
    return {
      modal: {},
      tempArticle: {},
      create_at: ''
    }
  },
  props: {
    article: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    article () {
      this.tempArticle = this.article
      const dateAndTime = new Date(this.tempArticle.create_at * 1000).toISOString().split('T');
      [this.create_at] = dateAndTime
    },
    create_at () {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  methods: {
    uploadFile () {
      const fileInput = this.$refs.fileInput.files[0]
      const select = this.$refs.fileInput.id
      const formdata = new FormData()
      formdata.append('file-to-upload', fileInput)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.axios.post(url, formdata).then((res) => {
        if (res.data.success) {
          this.tempArticle.imageUrl = res.data.imageUrl
          document.getElementById(select).value = ''
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mixins: [MixinModal]
}
</script>

<style>

</style>
