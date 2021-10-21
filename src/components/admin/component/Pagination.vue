<template>
  <div class="page-container">
  <div class="paginataion-div">
    <v-pagination
        v-model="bringPageData.page"
        class="my-4"
        :length="bringPageData.totalLength"
        :total-visible="bringPageData.visualTotalNum"
    ></v-pagination>


  </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:{
    bringPageData:{
      type:Object
    }
  }
}
</script>

<style scoped>


</style>