<template>
  <div class="first-container">
    <div class="second2">
      <Shop :bringlist="listS"/>
    </div>
    <div class="second-bottom2">

      <Mainevent :bringmainEvent="fundingEvent"/>
    </div>
  </div>
</template>
<script>

import Shop from "../components/shoplist/Shop";
import Mainevent from '../components/layout/main/Main-event'


export default {
  name: 'MywishList',
  components: {Shop, Mainevent},
  data() {
    return {

      listS:{
        Title: "나의 위시 리스트",
        showcarousel: false,

      },

      fundingEvent: [
        {
          presimgUrl: require("@/assets/event/main/light.png"),
          eventTitle: '"8월에 태어난 친구에게", "친구야" 넌 꽃처럼 아름다워!',
          eventId: 2
        },
        {
          presimgUrl: require("@/assets/event/main/aveda.jpg"),
          eventTitle: "명품 같은 스몰럭셔리 상품, 꼭 비싸야만 명품인가?",
          eventId: 1
        },
        {
          presimgUrl: require("@/assets/event/main/alchole.jpg"),
          eventTitle: "어떡해?!, 한 잔 하고 가실텐가?",
          eventId: 3
        },
        {
          presimgUrl: require("@/assets/event/main/food.jpg"),
          eventTitle: '고급지게 맛있는 치킨, "치킨!" 넌 쵝오야!',
          eventId: 4
        },
        {
          presimgUrl: require("@/assets/event/main/bag.png"),
          eventTitle: '난 이 GaBang 을 가졌지, 이제 아무것도 부럽지 않아!, "브랜드 GaBang"',
          eventId: 5
        },

      ],
      Joinlist: {
        title: '위시 펀딩 리스트',
      }


    }
  }
}
</script>
<style>
.first-container {

}



.second-bottom2 {
  max-width: 1100px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;
}

</style>