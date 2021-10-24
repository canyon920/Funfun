<template>
  <div class="complete-container">
  <Table :bring-data="productData"/>

    <div class="paginataion-div">
<!--      <v-pagination-->
<!--          v-model="page"-->
<!--          class="my-4"-->
<!--          :length="totalLength"-->
<!--          :total-visible="visualTotalNum"-->
<!--      ></v-pagination>-->
    </div>

  </div>
</template>

<script>
import Table from "@/components/admin/component/Table";
import axios from "axios";
import {reServerSend} from "@/service/refreshForAccessToken";
import {getHeaders} from "@/service/header";

export default {
  name: "Complete",
  components:{
    Table
  },
  data(){
    return{
      countTry:0,
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
            col9:'상품이미지',// 삭제 =>
          }
        ],
        list:[
        ]
      }
    }
  },
  methods:{
    async getList(){
      axios.get("http://127.0.0.1:9090/admin/expiredlist", getHeaders())
          .then(res => {
            this.productData.list = []
            this.productData.list = res.data
            this.productData.total = this.productData.list.length
            console.log(this.productData.list)
          }).catch(error => {
        console.log(error.messages)
        if (error.response.status===403) {
          this.countTry++
          if (this.countTry == 1) {
            reServerSend()
          }
          console.log("다시 오류인것 확인 로그")
        }
      })
    },
  },
  beforeMount() {
    if (JSON.parse(window.localStorage.getItem('login_member')).memberRole !== "ROLE_ADMIN") {
      alert("관리자가 아닙니다.")
      this.$router.push("/")
    }
    this.getList()
  },
  beforeCreate() {
    if (!window.localStorage.getItem('login_member')) {
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>