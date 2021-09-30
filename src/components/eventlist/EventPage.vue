<template>

    <!--검색바-->

    <v-container class="container_list">
      
      <div class="event-main-img-div">
        <img id="event-main-img" :src="eventPageImg">
      </div>

      <div class="divider">

      </div>

      <NormalListComponent :bringProductList="products"/>
      

  </v-container>
</template>

<script>
import axios from "axios";
import NormalListComponent from "@/components/NormalListComponent";

export default{
  name:'EventPage',
  components: {NormalListComponent},
  data: () => {
    return {
      eventPageImg: '',
      // people: [],
      products: [
      ],

    };
  },

  methods: {
    async testBringObjt(){
      await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=160f05c35f34aef167fabe796efb2a8e`)
          .then(res => {
            this.products = res.data.results
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
    },
    normalProducts() {
      this.products = [

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
      ]
    },
    dataMapping() {
      if (this.$route.params.eventId  === 1) {
        this.eventPageImg = require("@/assets/event/page/alchole.png")
        // this.products = this.products
      } else if (this.$route.params.eventId === 2) {
        this.eventPageImg = require("@/assets/event/page/light.png")
        // this.products = this.products
      } else if (this.$route.params.eventId === 3) {
        this.eventPageImg = require("@/assets/event/page/aveda.jpg")
        // this.products = this.products
      } else if (this.$route.params.eventId === 4) {
        this.eventPageImg = require("@/assets/event/page/food.jpg")
        // this.products = this.products
      } else if (this.$route.params.eventId === 5) {
        this.eventPageImg = require("@/assets/event/page/bag.png");
        // this.products = this.products
      } else {
        this.eventPageImg = require("@/assets/event/page/light.png")
        this.normalProducts()
      }
    },
    dataSmallMapping() {
      if (this.$route.params.eventId  === 1) {
        this.eventPageImg = require("@/assets/event/page/alchole.png")
        // this.products = this.products
      } else if (this.$route.params.eventId === 2) {
        this.eventPageImg = require("@/assets/event/page/light.png")
        // this.products = this.products
      } else if (this.$route.params.eventId === 3) {
        this.eventPageImg = require("@/assets/event/page/aveda.jpg")
        // this.products = this.products
      } else if (this.$route.params.eventId === 4) {
        this.eventPageImg = require("@/assets/event/page/food.jpg")
        // this.products = this.products
      } else if (this.$route.params.eventId === 5) {
        this.eventPageImg = require("@/assets/event/page/bag.png");
        // this.products = this.products
      } else {
        this.eventPageImg = require("@/assets/event/page/light.png")
        this.normalProducts()
      }
    },
    responsiveEventPageMain6() {
      var wmm1 = window.matchMedia("screen and (max-width: 500px)");
      if (wmm1.matches) {

        if (this.$route.params.eventId  === 1) {
          this.eventPageImg = require("@/assets/event/page/alchole.png")
          // this.products = this.products
        } else if (this.$route.params.eventId === 2) {
          this.eventPageImg = require("@/assets/event/page/light.png")
          // this.products = this.products
        } else if (this.$route.params.eventId === 3) {
          this.eventPageImg = require("@/assets/event/page/aveda.jpg")
          // this.products = this.products
        } else if (this.$route.params.eventId === 4) {
          this.eventPageImg = require("@/assets/event/page/food.jpg")
          // this.products = this.products
        } else if (this.$route.params.eventId === 5) {
          this.eventPageImg = require("@/assets/event/page/bag.png");
          // this.products = this.products
        } else {
          this.eventPageImg = require("@/assets/event/page/light.png")
        }

        this.slides[0].imgSrc = require("@/assets/event/banner/ａｖｅｄａＥｖｅｎｔｖｅｒ２.png")
        this.slides[1].imgSrc = require("@/assets/event/banner/bagEventｖｅｒ２.png")
        this.slides[2].imgSrc = require("@/assets/event/banner/ｆｏｏｄEｖｅｎｔｖｅｒ２.png")
        this.slides[3].imgSrc = require("@/assets/event/banner/ｌｉｇｈｔＥｖｅｎｔｖｅｒ２.png")
        this.slides[4].imgSrc = require("@/assets/event/banner/ａｌｃｈｏｌｅＥｖｅｎｔｖｅｒ２.png")
      } else{
        this.slides[0].imgSrc = require("@/assets/event/banner/ａｖｅｄａＥｖｅｎｔ.png")
        this.slides[1].imgSrc = require("@/assets/event/banner/bagEvent.png")
        this.slides[2].imgSrc = require("@/assets/event/banner/ｆｏｏｄEｖｅｎｔ.png")
        this.slides[3].imgSrc = require("@/assets/event/banner/ｌｉｇｈｔＥｖｅｎｔ.png")
        this.slides[4].imgSrc = require("@/assets/event/banner/ａｌｃｈｏｌｅＥｖｅｎｔ.png")
      }
    },
  },
  mounted(){
    this.dataMapping()
  }
}
</script>




<style scoped>
.container_list {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-main-img-div {
  margin: 10px 20px;
}
#event-main-img {

}
.divider {
  height: 2px;
  width: inherit;
  background-color: rgb(229, 114, 0);
  margin: 10% 10px 10%;

}


</style>




