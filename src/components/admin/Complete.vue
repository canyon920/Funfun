<template>
  <div class="complete-container">
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
  name: "Complete",
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
        title:'Complete Funding',
        column:[
          {
            col1:'펀딩ID',
            col2:'펀딩명',
            col3:'회원이메일',
            col4:'상품ID',
            col5:'모인금액',
            col6:'만료일',
            col7:'상태',// 펀딩 만료후 확인중(사용자 정보 입력전) 인경우 => 대기중 (관리자 확인전) -> 처리중( 관리자확인 ) -> 입금완료/배송중 (입금완료되고 배송중인것) / 배송중( 배송중인것) / 완료(모든것이완료)
            col8:'삭제',// 삭제 =>
          }
        ],
        list:[
          {
            data1:1,
            data2:'이것 좀 사주라',
            data3:'kmh1@naver.com',
            data4:3,
            data5: 35000,
            data6:'2021-10-05',
            data7:'확인중',
            data8:'delete',
          },
        ]
      }
    }
  },
  methods:{
    conform1(){
    }
  }

}
</script>

<style scoped>

</style>