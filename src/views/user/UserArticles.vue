<template>
  <router-view></router-view>
  <PageLoading :active="isLoading"/>
  <div class="articles-banner position-relative mb-5">
    <div class="articles-title bg-dark bg-opacity-50 w-100 position-absolute bottom-0 d-flex align-items-center h-100">
      <h1 class="text-white fw-bold mx-auto ">最新消息</h1>
    </div>
  </div>
<div class="bg-light">
  <div class="articles-Purpose mx-auto w-75 "  data-aos="fade-up" data-aos-duration="2000">
    <a href="#" v-for="item in Articles" :key="item.id" class="text-decoration-none" @click.prevent="articleDetail(item.id)">
      <div class="row align-items-center border-bottom mb-5">
        <div class="col-md-4 ">
            <h3 class="rwd-fs my-3 fw-bold">{{ item.title }}</h3>
        </div>
        <div class="col-md-8 ">
          <div class="d-flex justify-content-between">
            <h5 class="w-50 mx-auto rwd-fs">{{ item.description }}</h5>
            <span class="align-items-end d-flex date">{{ $filter.date(item.create_at) }}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
  <Section></Section>
  <Footer></Footer>
  <SocialMedia/>
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Section from '@/components/Section.vue'
export default {
  data () {
    return {
      Articles: [],
      isLoading: true,
      id: ''
    }
  },
  methods: {
    getArticles (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.Articles = res.data.articles
        this.isLoading = false
      })
        .catch(() => {

        })
    },
    articleDetail (id) {
      this.$router.push(`/articles/${id}`)
    }
  },
  components: { Footer, SocialMedia, Section },
  created () {
    this.getArticles()
  }
}
</script>

<style lang="scss" scoped>
.articles-banner{
  background-image: url('https://images.unsplash.com/photo-1560177112-fbfd5fde9566?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  .articles-title{
    h1{
      position: relative;
      top: 40px;
    }
  }
  .articles-Purpose{
    .btn{
      padding: 0px;
    }
  }
}
.rwd-fs{
  @media (max-width:1650px) {
    font-size: 16px;
  }
  @media (max-width:992px) {
    font-size: 12px;
  }
}
</style>
