<template>
  <div class="user-container">
  <Table :bring-data="userData"/>

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
  name: "User",
  components: {Table},
  data(){
    return{
      page:1,
      totalLength:5,
      visualTotalNum:10,

      userData:{
        total:0,
        title:'User',
        column:[
          {
            col1:'사용자ID',
            col2:'사용자',
            col3:'역할',
            col4:'펀딩수',
            // col8:'삭제',
          }
        ],
        list:[
          {
            data1:1,
            data2:'나루토1',
            data3:'USER',
            data4:5,
            // data8:'delete'
          },
        ]
      }
    }
  },
  watch:{
    page() {
      console.log(this.page)
    }
  }
}
</script>

<style scoped>

</style>