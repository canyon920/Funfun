<template>
  <div class = "first-container">
     <div class = "second">
       <FundingListComponent :bringmainDeadline="fundinglistS" :bringwishscript="fundingtitle"/>
     </div>


    <v-divider
    ></v-divider>
    <div class = "second-bottom">
<!--      <Fundingsecondlist />-->
      <Mainevent :bringmainEvent="fundingEvent" />
    </div>

  </div>
</template>
<script>

import Mainevent from '../../components/layout/main/Main-event';
import FundingListComponent from "@/components/FundingListComponent";
import {reServerSend} from "@/service/refreshForAccessToken";
import Header from "@/components/layout/Header";
import axios from "axios";
import {isLoginMemberCheck} from "@/service/member-login";

export default {
  name: 'FundingList',
  components: {FundingListComponent, Mainevent},

  data(){
    return{
      pagemodel: true,

      fundinglistS: [

        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기',
          fundingname: '카카오프렌즈',
          fundingMoney: 17000,
          expireDate: '2021-12-30',
          progressBarPercent: 25,
          fundingId:2
        },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub2.png"),
          fundingTitle:'아직 끝나지 않았당 그러므로 가보자하하',
          fundingname: '카카오프렌즈',
          fundingMoney: 26000,
          expireDate: '2021-12-30',
          progressBarPercent: 130,
          fundingId:3
        },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'"언텍트시대" 가보자하하',
          fundingname: '카카오프렌즈',
          fundingMoney: 25600,
          expireDate: '2021-12-30',
          progressBarPercent: 56,
          fundingId:4
        },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub2.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당',
          fundingname: '카카오프렌즈',
          fundingMoney: 19000,
          expireDate: '2021-12-30',
          progressBarPercent: 90,
          fundingId:5
        },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이',
          fundingname: '카카오프렌즈',
          fundingMoney: 300000,
          expireDate: '2021-12-30',
          progressBarPercent: 10,
          fundingId:6
        },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicthum.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',
          fundingname: '카카오프렌즈',
          fundingMoney: 350000,
          expireDate: '2021-12-30',
          progressBarPercent: 0,
          fundingId:7
        },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'"언텍트시대"',
          fundingname: '카카오프렌즈',
          fundingMoney: 20000,
          expireDate: '2021-12-30',
          progressBarPercent: 50,
          fundingId:8
        },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicthum.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기',
          fundingname: '카카오프렌즈',
          fundingMoney: 50000,
          expireDate: '2021-12-30',
          progressBarPercent: 20,
          fundingId:9
        },
      ],
      fundingtitle:"내가 만든 펀딩리스트",

      fundingEvent: [
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
    async bringMyFundingList(){
      let mdata = JSON.parse(localStorage.getItem('login_member'));
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          Authorization : `Bearer ${access_token}`,
        }
      }
      await axios.get("http://localhost:9090/myFunding/"+mdata.memberId,config)
          .then(res =>{
            console.log("##res",res)
            var thumbImg =""
            this.fundinglistS=[]
            for(var i in res.data){
              // console.log("##test",res.data[i])
              var list = res.data[i].fundingImg
              for(var key in list){
                if(list[key].includes('thumb')){
                  thumbImg = list[key]
                }
              }
              const splitResultByLimit1 = res.data[i].funding_expired_time.substring(0,10)
              // console.log("ex",splitResultByLimit1)
              const percentOfFunding = (res.data[i].funding_collected_money/res.data[i].funding_target_money)*100

              this.fundinglistS.push({
                preFundingImgUrl:thumbImg,
                fundingId:res.data[i].funding_id,
                fundingTitle:res.data[i].funding_title,
                fundingMoney:res.data[i].funding_collected_money,
                expireDate:splitResultByLimit1,
                progressBarPercent: percentOfFunding,
                fundingname:res.data[i].member_nicname}
              )}

          }).catch(e => {
            console.log("에러에러",e)
            console.log("에러에러",e.response)
            if (e.response.status===403) {
              reServerSend();
              this.bringMyLikeList()
            }
            console.log("세션이 모두 만료되었습니다. 로그인을 다시 해 주세요")
            this.$router.push("/login",Header.methods.isLogin)
          })
    },

  },
  mounted() {
    isLoginMemberCheck
    this.bringMyFundingList()
  }





}
</script>
<style scoped>
.first-container{
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
.second{
  padding-bottom: 80px;


}

.second-bottom{
  max-width:1100px;
  left:0; right:0; margin-left:auto; margin-right:auto;
  margin-bottom: 70px;
  padding-top:50px;

}
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;
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