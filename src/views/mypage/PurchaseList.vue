<template>
  <div class = "Purchase-first">
    <div class = "Purchase-second">
      <NormalListComponent :bringProductList="purchaselistS" :bringscript="purchasetitle"/>
    </div>
  </div>
</template>
<script>
import NormalListComponent from "@/components/NormalListComponent";
import axios from "axios";
import {getHeaders} from "@/service/header";
import {reServerSend} from "@/service/refreshForAccessToken";

export default {
  name:"PurchaseList",
  components: {NormalListComponent},
  data(){
    return{
      purchaselistS: [],
      purchasetitle:
        '구매목록 리스트'
      ,
    }
  },
  methods:{
    async setProductList(){
      var MemberId=this.$route.params.memberId
      axios.get("http://127.0.0.1:9090/OrderListPage/"+MemberId, getHeaders())
      .then(res => {
        this.purchaselistS =[]
        let jdata = JSON.stringify(res.data)
        this.purchaselistS = JSON.parse(jdata)
      }).catch(error => {
        console.log(error.message)
        if (error.response.status===403) {
          this.countTry++
          if (this.countTry == 1) {
            reServerSend();
            this.setJoin()
          }
          console.log("다시 오류인것 확인 로그")
        }
      })
    }
  },
  beforeMount() {
    this.setProductList()
  }
}
</script>
<style scoped>
.Purchase-first{
  max-width: 1400px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-name: fadeIn;
  animation-duration: 1s;

}
.Purchase-second{
  padding-bottom: 80px;
}

@keyframes fadeIn {
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}
</style>