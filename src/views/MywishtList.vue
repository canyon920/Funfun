<template>
  <div class = "first-container">
    <div class = "second">

      <FundingListComponent :bringmainDeadline="Mywish" :bringwishscript="MywishTitle"/>

    </div>
    <div class = "second-bottom">
      <!--      <Fundingsecondlist />-->
      <Mainevent :bringmainEvent="wishEvent" />
    </div>
  </div>
</template>
<script>

import Mainevent from '../components/layout/main/Main-event';
import FundingListComponent from "@/components/FundingListComponent";



export default {
  name: 'MywishList',
  components: {FundingListComponent, Mainevent},
  data(){
    return{
      Mywish:[
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub2.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',fundinging: '진행중',
          progressBarPercent: 20, fundingname: 'ㅇㅇdsadasd asd as dsa dasdas das',fundingMoney: 1000,
          expireDate: '2021-11-30',
          fundingId:1
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'월급 탄 거 안다 도와주라',fundinging: '진행중', progressBarPercent: 20,
          fundingname: '코코',fundingMoney: 25000, expireDate: '2021-12-30',
          fundingId:2
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'"우리 아이"가 정말 갖고 싶어 해요',fundinging: '진행중',
          progressBarPercent: 50, fundingname: '곽두팔',fundingMoney: 3000,
          expireDate: '2021-12-03',
          fundingId:3
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'일단 고마워',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
          expireDate: '2022-01-30',
          fundingId:4
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'일단 고마워',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
          expireDate: '2022-01-30',
          fundingId:5
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'일단 고마워',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
          expireDate: '2022-01-30',
          fundingId:6
        },

      ],
      MywishTitle:{
        Title: "내가 찜한 리스트"
      },

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
  }
}
</script>
<style>
.first-container{
  max-width: 1400px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;
  animation-name: fadeIn;
  animation-duration: 3s;

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