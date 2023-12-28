<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{'disabled':!pages.has_pre}">
        <a class="page-link" href="#" @click.prevent="updatePage(pages.current_page-1)">Previous</a>
      </li>
      <li v-for="(page,key) in pages.total_pages" :key="key" class="page-item">
        <a class="page-link" :class="{'disabled': page === pages.current_page}" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{'disabled':!pages.has_next}">
        <a class="page-link" href="#" @click.prevent="updatePage(pages.current_page+1)">Next</a>
      </li>
    </ul>
  </nav>
</template>
    
<script>
export default {
  name:'ThePagination',
  props:['pages'],
  methods:{
    updatePage(page){
        this.$emit('update-page',page)
    }
  }
}
</script>

<style>

</style>