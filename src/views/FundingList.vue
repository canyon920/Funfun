<template>
  <div class = "first-container">
     <div class = "second">
       <div class ="list">
         나의 펀딩 리스트
       </div>
      <Fundingsearch :bringfundingsearch="fundingS" :bringjoin="Joinlist"/>
     </div>
    <div class = "second-bottom">
<!--      <Fundingsecondlist />-->
      <Mainevent :bringmainEvent="fundingEvent" />
    </div>
  </div>
</template>
<script>

import Fundingsearch from "../components/layout/fundinglist/fundingsearch";
import Mainevent from '../components/layout/main/Main-event'


export default {
  name: 'FundingList',
  components: {Fundingsearch, Mainevent},
  data(){
    return{


      /*    fundingS: [
            {
              presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
              fundingTitle:'펀딩타이틀1',fundinging: '진행중',
              progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
            },
            {
              presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
              fundingTitle:'펀딩타이틀1',fundinging: '진행중',
              progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
            },
            {
              presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
              fundingTitle:'펀딩타이틀1',fundinging: '진행중',
              progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
            },
            {
              presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
              fundingTitle:'펀딩타이틀1',fundinging: '진행중',
              progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
            },
            {
              presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
              fundingTitle:'펀딩타이틀5',fundinging: '진행중',
              progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
            },

          ],*/
      fundingEvent: [
        {
          presimgUrl:require("@/assets/event/main2.png"),
          eventTitle:'"8월에 태어난 친구에게", "친구야" 넌 꽃처럼 아름다워!',
          eventId:2
        },
        {  presimgUrl:require("@/assets/event/main1.jpg"),
          eventTitle:"명품 같은 스몰럭셔리 상품, 꼭 비싸야만 명품인가?",
          eventId:1
        },
        {  presimgUrl:require("@/assets/event/main3.jpg"),
          eventTitle:"어떡해?!, 한 잔 하고 가실텐가?",
          eventId:3
        },
        {  presimgUrl:require("@/assets/event/main4.jpg"),
          eventTitle:'고급지게 맛있는 치킨, "치킨!" 넌 쵝오야!',
          eventId:4
        },
        {  presimgUrl:require("@/assets/event/main5.png"),
          eventTitle:'난 이 GaBang 을 가졌지, 이제 아무것도 부럽지 않아!, "브랜드 GaBang"',
          eventId:5
        },

      ],
      Joinlist:{
        title:'나의 펀딩 리스트',
      }



    }
  }
}
</script>
<style>
.first-container{

}
.first-container .list{
  margin-top: 70px;
  font-size:30px
}
.second-bottom{
  max-width:1100px;
  left:0; right:0; margin-left:auto; margin-right:auto;
  margin-bottom: 70px;
}

</style>