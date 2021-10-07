<template>
  <!--검색바-->
  <v-container class="container_list">

    <v-text-field
        dense
        outlined
        rounded
        label="상품 검색"
        v-model="SearchName" >
      <template v-slot:prepend-inner>
        <v-icon>mdi-magnify</v-icon>
      </template>
      <template v-slot:append>
        <v-progress-circular
            v-if="loading"
            size="24"
            color="rgb(229, 114, 0)"
            indeterminate />
      </template>
    </v-text-field>

    <carousel :autoplay="true" :nav="false" :items="8" :dots="false" :responsive="{
      1600:{
        items:10
      },
      1000:{
        items:8
      },
      758:{
        items:6,
      },
      450:{
        items:4,
      },
      200:{
        items:3,
      }

    }">
      <!--    <template slot="prev"><span class="prev" >prev</span></template>-->
      <a v-for="(img,pkey) in category" :key="pkey">
        <router-link :to="{name: 'Shop' ,params:{categoryId: img.id}}" style="text-decoration: none">
          <div style="display: flex; flex-direction: column; align-items: center">
            <div class="img-div" style="">
              <img :src="img.categorySrc" style="border-radius: 20px; height: 100px; width: 100px">
            </div>
            <div class="category-title" style="color: black">
              {{img.title}}
            </div>
          </div>
        </router-link>
      </a>

    </carousel>


    <div class="option-div" >
      <div class="options">
        <div class="option01">
          <v-col
              class="d-flex"
              cols="12"
              sm="6"
          >
            <v-select
                v-model="selected1"
                :items="items1"
                :label="selected1"
                solo
                error
            ></v-select>
          </v-col>
        </div>

        <div class="option02">
          <v-col
              class="d-flex"
              cols="12"
              sm="6"
          >
            <v-select
                v-model="selected2"
                :items="items2"
                :label="selected2"
                solo
                error
            ></v-select>
          </v-col>
        </div>
      </div>

    </div>

    <NormalListComponent  :bringProductList="products" bringscript="producttitle"/>

  </v-container>
</template>

<script>
import axios from "axios";
import carousel from 'vue-owl-carousel'
import NormalListComponent from "@/components/NormalListComponent";

export default {
  name: 'Shop',
  components: {NormalListComponent, carousel },
  data: () => {
    return {

      loading:false,


      items1: ['인기순', '추천순', '높은가격순', '낮은가격순'],
      selected1 : '인기순',
      items2: ['1만원대 이상', '2만원대 이상', '5만원대 이상', '10만원대 이상'],
      selected2 : '가격대',

      SearchName:'',

      category: [
        {
          id:1,
          categorySrc: require("@/assets/category/1.jpg"),
          title: '생일'
        },
        {
          id:2,
          categorySrc: require("@/assets/category/2.jpg"),
          title: '명절선물'
        },
        {
          id:3,
          categorySrc: require("@/assets/category/3.png"),
          title: '상품권선물'
        },
        {
          id:4,
          categorySrc: require("@/assets/category/4.jpg"),
          title: '건강/회복'
        },
        {
          id:5,
          categorySrc: require("@/assets/category/5.jpg"),
          title: '가벼운선물'
        },
        {
          id:6,
          categorySrc: require("@/assets/category/6.jpg"),
          title: '툭!백화점'
        },
        {
          id:7,
          categorySrc: require("@/assets/category/7.jpg"),
          title: '스몰럭셔리'
        },
        {
          id:8,
          categorySrc: require("@/assets/category/8.jpg"),
          title: '명품선물'
        },
        {
          id:9,
          categorySrc: require("@/assets/category/9.jpg"),
          title: '어른선물'
        },
        {
          id:10,
          categorySrc: require("@/assets/category/10.jpg"),
          title: '출산/백일돌'
        },
        {
          id:11,
          categorySrc: require("@/assets/category/11.jpg"),
          title: '쓸모없는선물'
        },{
          id:12,
          categorySrc: require("@/assets/category/12.jpg"),
          title: '배달선물'
        },
      ],
      // people: [],
      products: [
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
      producttitle:{},

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
    }

  },
  mounted(){
  }
}
</script>




<style scoped>

.option-div {
  display: flex ;
  flex-direction: row;
  justify-content: end;
}
.option-div .options {
  margin-left: 100px;
  display: flex;
  flex-direction: row;
}
.option-div .options .option01 {
  width: 150px;
}
.option-div .options .option02 {
  margin-left: 20px;
  width: 200px;
}

.container_list {
  max-width: 1400px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;

}
.v-application .d-flex {
  display: inline !important;

}

</style>




