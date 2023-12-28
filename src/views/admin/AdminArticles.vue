<template>
  <div class="row">
    <div class="col">
      <div class="text-end mt-4">
        <button type="button" class="btn btn-outline-primary"  @click="openArticlesModal(true)">新增文章</button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width=120>建立時間</th>
            <th width="240">標題</th>
            <th width=120>作者</th>
            <th width=120>標籤</th>
            <th width=120>是否公開</th>
            <th width=120>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in articles" :key="item.id">
            <td>{{ $filter.date(item.create_at) }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.tag}}</td>
            <td v-if="item.isPublic" class="text-success" >公開</td>
            <td v-else class="text-muted">未公開</td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-primary" @click="openArticlesModal(false,item)">編輯</button>
                <button type="button" class="btn btn-sm btn-outline-danger" @click="deleteArticle(item.id)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<ArticlesModal :article="tempArticle" ref="articlemodal" @update-article="updateArticle"/>
</template>

<script>
import ArticlesModal from '@/components/ArticlesModal.vue';
export default {
  data(){
    return {
      articles:[],
      tempArticle:{},
      isNew:false,
      id:'',
    }
  },
  inject:['emitter'],
  methods:{
    getArticles(page=1){
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.$http.get(api).then(res=>{
        this.articles = res.data.articles;
      })
      .catch(()=>{

      })
    },
    openArticlesModal(isNew,item){
      const articleModal = this.$refs.articlemodal;
      this.isNew = isNew;
      if(isNew){
        this.tempArticle={
        create_at: new Date().getTime() / 1000
      }
      }else{
        this.tempArticle = {...item}
      }
      articleModal.showModal()
    },
    updateArticle(item){
      this.tempArticle = item;
      const articleModal = this.$refs.articlemodal;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`;
      let httpmethod = 'post'
      if(!this.isNew){
        httpmethod = 'put'
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`;
      }
      articleModal.hideModal();
      this.$http[httpmethod](api,{data:this.tempArticle}).then(res=>{
        if(res.data.success){
          this.getArticles();
          this.emitter.emit('push-message',{
              style:'success',
              title:'更新成功'
          })
        }else{
          this.emitter.emit('push-message',{
            style:'danger',
            title:'更新失敗'
          })
        }
      })
      .catch(()=>{

      })
    },
    deleteArticle(id){
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      const articleModal = this.$refs.articlemodal;
      articleModal.hideModal();
      this.$http.delete(api).then(()=>{
        this.getArticles();
      })
    },
  },
  mounted(){
    this.getArticles();
    this.id = this.$route.params.articleId;
  },
  components:{ArticlesModal}
}
</script>

<style>

</style>