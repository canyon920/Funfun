<template>
  <div class="funding-container">
    <v-text-field @keyup.enter="getSearchName"
                  @click="clear"
                  dense
                  outlined
                  rounded
                  label="펀딩 검색"
                  v-model="SearchName"
                  ref="blur">
      <template v-slot:prepend-inner>
        <v-icon>mdi-magnify</v-icon>
      </template>
<!--      <template v-slot:append>-->
<!--        <v-progress-circular-->
<!--            v-if="loading"-->
<!--            size="24"-->
<!--            color="rgb(229, 114, 0)"-->
<!--            indeterminate />-->
<!--      </template>-->
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
import {reServerSend} from "@/service/refreshForAccessToken";
import {getHeaders} from "@/service/header";
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
      SearchName:'',
      countTry:0,

      productData:{
        total:0,
        title:'Funding',
        column:[
          {
            col1:'펀딩ID',
            col2:'펀딩명',
            col3:'회원이메일',
            col4:'펀딩참여수',
            col5:'시작일',
            col6:'종료일',
            col9:'상품이미지'
          }
        ],
        list:[
        ]
      }
    }
  },
  methods:{
    async getList(){
      axios.get("http://127.0.0.1:9090/admin/fundinglist",getHeaders())
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
    async getSearchName(){
      this.$refs.blur.blur()
      this.SearchName = this.SearchName.trim()
      this.SearchName = this.SearchName.replace(/\s/gi, "")
      if(this.SearchName.length>0){
        axios.get(`http://127.0.0.1:9090/admin/fundinglist/search/${this.SearchName}`,getHeaders() )
            .then(res => {
              this.productData.list = []
              this.productData.list = res.data
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
      }
    },
    clear(){
      this.SearchName=''
      return this.getList()
    }
  },
  beforeMount() {
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