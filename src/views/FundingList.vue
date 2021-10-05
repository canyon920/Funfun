<template>
  <div class = "first-container">
     <div class = "second">
       <NormalListComponent :bringProductList="fundinglistS" :bringscript="fundingtitle"/>

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

import Mainevent from '../components/layout/main/Main-event';
import NormalListComponent from "@/components/NormalListComponent";



export default {
  name: 'FundingList',
  components: {NormalListComponent, Mainevent},
  methods: {


  },


  data(){
    return{

      fundinglistS: [
        {
          src: require("@/assets/example-img/chunsicthum.png"),
          title:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',
          brand: '카카오프렌즈',
          price: 30000,
          likeRate: 3.5,
          fundingCount: 100,
          productId:1
        },
        {
          src: require("@/assets/example-img/chunsicsub1.png"),
          title:'"언텍트시대" 춘식이와 라식이의 사랑이야기',
          brand: '카카오프렌즈',
          price: 17000,
          likeRate: 4,
          fundingCount: 25,
          productId:2
        },
        {
          src: require("@/assets/example-img/chunsicsub2.png"),
          title:'아직 끝나지 않았당 그러므로 가보자하하',
          brand: '카카오프렌즈',
          price: 26000,
          likeRate: 4.5,
          fundingCount: 105,
          productId:3
        },
        {
          src: require("@/assets/example-img/chunsicsub3.png"),
          title:'"언텍트시대" 가보자하하',
          brand: '카카오프렌즈',
          price: 25600,
          likeRate: 5,
          fundingCount: 56,
          productId:4
        },
        {
          src: require("@/assets/example-img/chunsicsub2.png"),
          title:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당',
          brand: '카카오프렌즈',
          price: 19000,
          likeRate: 3.5,
          fundingCount: 110,
          productId:5
        },
        {
          src: require("@/assets/example-img/chunsicsub3.png"),
          title:'"언텍트시대" 춘식이와 라식이',
          brand: '카카오프렌즈',
          price: 300000,
          likeRate: 2.5,
          fundingCount: 10,
          productId:6
        },
        {
          src: require("@/assets/example-img/chunsicthum.png"),
          title:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',
          brand: '카카오프렌즈',
          price: 350000,
          likeRate: 0,
          fundingCount: 0,
          productId:7
        },
        {
          src: require("@/assets/example-img/chunsicsub1.png"),
          title:'"언텍트시대"',
          brand: '카카오프렌즈',
          price: 20000,
          likeRate: 1,
          fundingCount: 5,
          productId:8
        },
        {
          src: require("@/assets/example-img/chunsicthum.png"),
          title:'"언텍트시대" 춘식이와 라식이의 사랑이야기',
          brand: '카카오프렌즈',
          price: 50000,
          likeRate: 3.5,
          fundingCount: 1,
          productId:9
        },
      ],
      fundingtitle:{
        Title: "나의 펀딩리스트",
      },

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
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 3s;
  animation-name: fadeIn;
  animation-duration: 3s;

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