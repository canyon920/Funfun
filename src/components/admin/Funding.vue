<template>
  <div class="funding-container">
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
  name: "Funding",
  components:{
    Table
  },
  data(){
    return{
      page:1,
      totalLength:5,
      visualTotalNum:10,

      productData:{
        total:0,
        title:'Funding',
        column:[
          {
            col1:'펀딩ID',
            col2:'펀딩명',
            col3:'회원이메일',
            col4:'상품ID',
            col5:'좋아요수',
            col6:'펀딩수',
          }
        ],
        list:[
          {
            data1:1,
            data2:'이것 좀 사주라',
            data3:'kmh1@naver.com',
            data4:3,
            data5: 555,
            data6:555,
          },
        ]
      }
    }
  }

}
</script>

<style scoped>

</style>