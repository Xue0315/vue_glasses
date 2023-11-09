<template>
  <router-view></router-view>
  <PageLoading :active="isLoading"/>
  <div class="bg-light article-purpose">
    <div class="article-title container">
      <h3 class="mb-3">{{ tempArticle.title }}</h3>
    </div>
    <div class="container position-relative article-item">
        <img :src="articleImage" class="article-img mb-3">
        <div class="article-content">
          <p class="lh-lg text-secondary">{{ tempArticle.content }}</p>
        </div>
    </div>
    <Footer class="position-relative end-0 bottom-0"></Footer>
  </div>
  <SocialMedia/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import SocialMedia from '@/components/SocialMedia.vue';
export default {
  data(){
    return{
        tempArticle:{},
        articleImage:'',
        isLoading:false,
        id:''
    }
  },
  methods:{
    getArticle(){
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.id}`
      this.isLoading = true;
      this.$http.get(api).then(res=>{
        this.tempArticle = res.data.article;
        this.articleImage = res.data.article.imageUrl;
        this.isLoading = false;
        console.log(res);
      })
    }
  },
  components:{Footer,SocialMedia},
  mounted(){
    this.id = this.$route.params.articleId;
    this.getArticle();
  }
}
</script>

<style lang="scss">
.article-purpose{
  position: relative;
  top: 150px;
  
  .article-item{
    .article-img{
    width: 100%;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .article-content{
      width: 470px;
    }
  }
}
 
</style>