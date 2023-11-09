<template>
  <div class="news container w-100" data-aos="flip-left" data-aos-duration="2000">
        <h2 class="text-center my-5 fw-bold" >最新消息</h2>
        <div class="row">
          <div class="col-6">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" ref="Carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div style="height:400px; width: 100%; background-size:cover; background-position: center;" 
                        :style="{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664475764570-c7e67c1dbb91?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}"></div>
                  </div>
                  <div class="carousel-item">
                    <div style="height:400px; width: 100%; background-size:cover; background-position: center;" 
                        :style="{backgroundImage: `url('https://images.unsplash.com/photo-1543837173-6c26bc89937b?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}"></div>
                  </div>
                  <div class="carousel-item">
                    <div style="height:400px; width: 100%; background-size:cover; background-position: center;" 
                        :style="{backgroundImage: `url('https://images.unsplash.com/photo-1602846555964-639a430df77a?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}"></div>
                  </div>
                  <div class="carousel-item">
                    <div style="height:400px; width: 100%; background-size:cover; background-position: center;" 
                        :style="{backgroundImage: `url('https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=2148&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}"></div>
                  </div>
                  <div class="carousel-item">
                    <div style="height:400px; width: 100%; background-size:cover; background-position: center;" 
                        :style="{backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682535210542-21dceae4530c?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}"></div>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-6 ">
            <ul class="list-group" v-for="item in articles.slice(0,5)" :key="item.id">
              <li class="list-group-item my-1 bg-light p-4 border-top-0 border-start-0 border-end-0" aria-current="true"><a href="#" class="text-decoration-none" @click.prevent="articleDetail(item.id)">{{ item.title}}</a></li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel';
export default {
    data(){
        return{
            carousel:{},
            articles:[],
            id:''
        }
    },
    methods:{
      getArticles(page=1){
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${page}`
        this.$http.get(api).then(res=>{
          this.articles = res.data.articles;
          console.log(res);
        })
      },
      articleDetail(id){
          this.$router.push(`/articles/${id}`)
      }
    },
    mounted(){
        this.carousel = new Carousel(this.$refs.Carousel,{
        interval: 6000,
        });

        this.getArticles();
    },
}
</script>

<style lang="scss" scoped>
 .news{
    h2 {
      position: relative;
      &::after{
        content:''; 
        position: absolute;
        display: inline-block;
        width: 350px;
        border-bottom: 3px solid #000;
        bottom: 0;
        top: 60px;
        left: 36.5%;
      }
    }
    .carousel{
      .carousel-item{
        height: 400px;
        background-image:url('https://images.unsplash.com/photo-1531923220864-78b6e621129a?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
  }
 }
 
</style>