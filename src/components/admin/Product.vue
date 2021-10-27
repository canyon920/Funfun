<template>
  <div class="product-container">
    <v-text-field @keyup.enter="getSearchName"
                  @click="clear"
                  dense
                  outlined
                  rounded
                  label="상품 검색"
                  v-model="SearchName"
                  ref="blur">
      <template v-slot:prepend-inner>
        <v-icon>mdi-magnify</v-icon>
      </template>
    </v-text-field>
  <Table :bring-data="productData"/>

<!--    <div class="paginataion-div">-->
<!--      <v-pagination-->
<!--          v-model="page"-->
<!--          class="my-4"-->
<!--          :length="totalLength"-->
<!--          :total-visible="visualTotalNum"-->
<!--      ></v-pagination>-->
<!--    </div>-->

  </div>
</template>

<script>
import Table from "@/components/admin/component/Table";
import axios from "axios";
import {getHeaders} from "../../service/header";
import {reServerSend} from "../../service/refreshForAccessToken";


export default {
  name: "Product",
  components: {Table},
  data(){
    return{
      countTry:0,
      SearchName:'',
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
        ]
      }
    }
  },
  methods:{
    async setProductList(){
      axios.get("http://192.168.0.165:9090/admin/product", getHeaders())
          .then(res => {
            this.productData.list = []
            this.productData.list = res.data
            this.productData.total = this.productData.list.length
            // console.log(this.productData.list)
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
    async getSearchName(){
      axios.get("http://192.168.0.165:9090/admin/product/"+this.SearchName, getHeaders())
          .then(res => {
            this.productData.list = []
            this.productData.list = res.data
            this.productData.total = this.productData.list.length
            // console.log(this.productData.list)
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
    clear(){
      this.SearchName=''
      return this.setProductList()
    }
  },
  beforeMount() {
    if (JSON.parse(window.localStorage.getItem('login_member')).memberRole !== "ROLE_ADMIN") {
      alert("관리자가 아닙니다.")
      this.$router.push("/")
    }
     this.setProductList()
  }
}
</script>

<style scoped>

</style>