<template>
  <div class = "Purchase-first">
    <div class = "Purchase-second">
      <NormalListComponent :bringProductList="purchaselistS" :bringscript="purchasetitle"/>
    </div>
  </div>
</template>
<script>
import NormalListComponent from "@/components/NormalListComponent";

export default {
  name:"PurchaseList",
  components: {NormalListComponent},
  data(){
    return{
      purchaselistS: [
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
      purchasetitle:
        '구매목록 리스트'
      ,
    }
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