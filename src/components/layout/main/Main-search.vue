<template>
  <div class = "search">

    <div class =line style=" box-shadow: 0.5px 0.5px 5px rgba(229, 114, 0, 0.4)">
      <div class = "wishlist" style="font-weight: 700"><span style="color: rgb(229, 114, 0)">{{ bringmainsearch.username}}</span>님의 위시리스트</div>
      <div class="moreandmore" ><router-link to="/wishlist" style="text-decoration: none; color: rgb(229, 114, 0)">더보기</router-link> </div>
      <div class = no-merchandise>
        <div class ="datalist">
          <div v-if="mainSearch.length == 0">
            펀딩중인 상품이 없어요.
          </div>
          <div class = "product" v-else style="width:1000px;" >


            <carousel id="shop-carousel" :autoplay="true" :nav="false" :responsive="{
              1000:{
                items:3,
              },
              400:{
                items:2,
              },
              280:{
                items:1,
              }
            }">
<!--              <carousel id="shop-carousel" :autoplay="true" :nav="false" >-->
              <!--    <template slot="prev"><span class="prev" >prev</span></template>-->
              <a v-for="(merchan, idx) in mainSearch" :key="idx">
                <router-link :to="{name: 'detail_page_P' ,params: {productId: merchan.productId}}" style="text-decoration: none">
                  <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">

                    <v-card
                        id="v-card-custom"
                        class="mx-auto"
                        max-width="275px" >
                      <img
                          id="card-img"
                          class="white--text align-end"
                          v-bind:src="merchan.presdeadimgUrl">

                      <v-card-title>{{ merchan.productTitle}}</v-card-title>

                      <v-card-subtitle class="pb-0" style="font-size: 25px; display: flex; flex-direction: row; justify-content: space-between; margin: 10px 0px">
                        <div id="card-brand" style="font-size: 20px;">
                        {{merchan.productBrand}}
                        </div>
                        <div id="card-price" style="font-size: 25px; color: rgb(229, 114, 0)">
                        {{ merchan.productsubPrice}}
                        </div>
                      </v-card-subtitle>

                      <v-card-text></v-card-text>


                    </v-card>
                  </div>
                </router-link>
              </a>

              <!--    <template slot="next"><span class="next">next</span></template>-->
            </carousel>


          </div>

        </div>
        <div class="text-center">
          <v-btn id="btn-txt" depressed elevation="2" style="font-size: 20px"><router-link to="/showfriend" style="text-decoration: none; color: rgb(229, 114, 0)">♡친구에게 보여주기</router-link></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  name: 'Main-search',
  data(){
    return{
      mainSearch:[
        {productTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,productBrand: '카카오프렌즈' ,productsubPrice: '36900 원',presdeadimgUrl: require("@/assets/example-img/chunsicthum.png")},
        {productTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,productBrand: '카카오프렌즈' ,productsubPrice: '36900 원',presdeadimgUrl: require("@/assets/example-img/chunsicsub1.png")},
        {productTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,productBrand: '카카오프렌즈' ,productsubPrice: '36900 원',presdeadimgUrl: require("@/assets/example-img/chunsicsub2.png")},
        {productTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,productBrand: '카카오프렌즈' ,productsubPrice: '36900 원',presdeadimgUrl: require("@/assets/example-img/chunsicsub3.png")},
        {productTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,productBrand: '카카오프렌즈' ,productsubPrice: '36900 원',presdeadimgUrl: require("@/assets/example-img/chunsicthum.png")},
        {productTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,productBrand: '카카오프렌즈' ,productsubPrice: '36900 원',presdeadimgUrl: require("@/assets/example-img/chunsicsub1.png")},


      ],
    }
  },
  components: { carousel},
  props: {
    bringmainsearch: {
      type: Object
    },
  }


}
</script>
<style scoped>

.search{
  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
  margin-top: 60px;


}
.search .no-merchandise{

}
.line{

  border: 1px solid rgb(229, 114, 0);
  border-radius: 20px;
  padding: 20px;


}
.no-merchandise .datalist{
  align: center;
  display: flex;

}


.search .text-center{
  text-align: center;
}
.search .wishlist{
  text-align: left;
  font-size: 25px;
}
.search .no-merchandise{
  position: relative;
  padding-top: 60px;
  text-align: center;
  color: #e57200;

}
.moreandmore{

  text-align: right;
  margin-top: 10px;

}
.product{
  padding: 10px;

}


#v-card-custom {
  border-bottom: 0.5px solid rgba(0,0,0,.2);
}
#card-img {
  height: 275px;
  width: 275px;
}
#shop-carousel {
}
@media screen and (min-width: 850px) and (max-width: 1300px){
  #v-card-custom {
    max-width: 200px !important;
  }
  #v-card-custom div {
    font-size: 15px !important;
  }
  #card-img {
    height: 200px;
    width: 200px;
  }
  #shop-carousel {
    max-width: 800px !important;
  }
  #v-card-custom div#card-price {
    font-size: 20px !important;
  }
}
@media screen and (min-width: 415px) and (max-width: 850px){
  #v-card-custom {
    max-width: 100px !important;
  }
  #v-card-custom div {
    font-size: 10px !important;
    line-height: 15px;
  }
  #card-img {
    height: 100px;
    width: 100px;
  }
  #shop-carousel {
    max-width: 550px !important;
  }
  #v-card-custom div#card-price {
    font-size: 15px !important;
  }
  .v-card__title {
    padding: 0px !important;
    padding-top: 5px !important;
  }
  .v-card__subtitle.pb-0 {
    padding: 5px !important;
  }
  #v-card-custom div#card-brand {
    font-size: 10px !important;

  }
}
@media screen and (max-width: 415px){
  #v-card-custom {
    max-width: 100px !important;
  }
  #v-card-custom div {
    font-size: 5px !important;
    line-height: 15px;
  }
  #card-img {
    height: 100px;
    width: 100px;
  }
  #shop-carousel {
    max-width: 350px !important;
  }
  #v-card-custom div#card-price {
    font-size: 15px !important;
  }
  .v-card__title {
    padding: 0px !important;
    padding-top: 5px !important;
  }
  .v-card__subtitle.pb-0 {
    padding: 5px !important;
  }
  #v-card-custom div#card-brand {
    font-size: 10px !important;

  }
}
@media screen and (max-width: 300px){
  #v-card-custom {
    max-width: 75px !important;
  }
  #v-card-custom div {
    font-size: 5px !important;
    line-height: 15px;
  }
  #card-img {
    height: 75px;
    width: 75px;
  }
  #shop-carousel {
    max-width: 200px !important;
  }
  #v-card-custom div#card-price {
    font-size: 15px !important;
  }
  .v-card__title {
    padding: 0px !important;
    padding-top: 5px !important;
  }
  .v-card__subtitle.pb-0 {
  }
  #v-card-custom div#card-brand {
    font-size: 5px !important;

  }
  .wishlist {
    font-size: 20px !important;
  }
  #btn-txt {
    font-size: 15px !important;

  }

}
</style>