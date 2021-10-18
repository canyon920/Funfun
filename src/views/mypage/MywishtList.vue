<template>
  <div class = "first-container">
    <div class = "second">

      <NormalListComponent :bringProductList="Mywish" :bringscript="MywishTitle"/>


    </div>
    <div class = "second-bottom">
      <!--      <Fundingsecondlist />-->
      <Mainevent :bringmainEvent="wishEvent" />
    </div>
  </div>
</template>
<script>

import Mainevent from '../../components/layout/main/Main-event';
import NormalListComponent from "@/components/NormalListComponent";
import axios from "axios";
import {getHeaders} from "@/service/header";
import {reServerSend} from "@/service/refreshForAccessToken";


export default {
  name: 'MywishList',
  components: {NormalListComponent, Mainevent},
  data(){
    return{
      Mywish:[],
      countTry:0,
      MywishTitle:"내가 찜한 리스트",

      wishEvent: [
        {
          presimgUrl:require("@/assets/event/main/light.png"),
          eventTitle:'"8월에 태어난 친구에게", "친구야" 넌 꽃처럼 아름다워!',
          eventId:2
        },
        {  presimgUrl:require("@/assets/event/main/aveda.jpg"),
          eventTitle:"명품 같은 스몰럭셔리 상품, 꼭 비싸야만 명품인가?",
          eventId:1
        },
        {  presimgUrl:require("@/assets/event/main/alchole.jpg"),
          eventTitle:"어떡해?!, 한 잔 하고 가실텐가?",
          eventId:3
        },
        {  presimgUrl:require("@/assets/event/main/food.jpg"),
          eventTitle:'고급지게 맛있는 치킨, "치킨!" 넌 쵝오야!',
          eventId:4
        },
        {  presimgUrl:require("@/assets/event/main/bag.png"),
          eventTitle:'난 이 GaBang 을 가졌지, 이제 아무것도 부럽지 않아!, "브랜드 GaBang"',
          eventId:5
        },
      ],
    }
  },
  methods:{
    async setProductList(){
      var MemberId=this.$route.params.memberId
      axios.get("http://127.0.0.1:9090/WishListPage/"+MemberId, getHeaders())
          .then(res => {
            this.Mywish =[]
            let jdata = JSON.stringify(res.data)
            this.Mywish = JSON.parse(jdata)
          }).catch(error => {
        console.log(error.message)
        if (error.response.status===403) {
          this.countTry++
          if (this.countTry == 1) {
            reServerSend();
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
.layout.row.wrap {
  margin-top: 50px;
  margin-bottom: 50px;
}
.first-container{
  max-width: 1400px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;
  animation-name: fadeIn;
  animation-duration: 1s;

}

.second-bottom{
  max-width:1100px;
  left:0; right:0; margin-left:auto; margin-right:auto;
  margin-bottom: 70px;
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