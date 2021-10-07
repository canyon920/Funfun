<template>
  <div class="product-container">
  <Table :bring-data="productData"/>

    <div class="paginataion-div">
      <v-pagination
          v-model="page"
          class="my-4"
          :length="totalLength"
          :total-visible="visualTotalNum"
      ></v-pagination>
    </div>

  </div>
</template>

<script>
import Table from "@/components/admin/component/Table";

export default {
  name: "Product",
  components: {Table},
  data(){
    return{
      page:1,
      totalLength:5,
      visualTotalNum:10,

      productData:{
        total:0,
        title:'Product',
        column:[
          {
            col1:'상품ID',
            col2:'상품명',
            col3:'좋아요수',
            col4:'펀딩수',
            col8:'삭제',
          }
        ],
        list:[
          {
            data1:1,
            data2:'춘식이와 라이언의 사랑이야기',
            data3: 555,
            data4:555,
            data8:'delete',
          },
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>