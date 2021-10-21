<template>
  <div class = "search">

    <div class =line style=" box-shadow: 0.5px 0.5px 5px rgba(229, 114, 0, 0.4)">
      <div class = "wishlist" style="font-weight: 700"><span style="color: rgb(229, 114, 0)">{{ bringmainsearch.username}}</span>님의 위시리스트</div>
<!--      <div class="moreandmore" >-->
<!--        <router-link to="/wishlist" style="text-decoration: none; color: rgb(229, 114, 0)">더보기</router-link>-->
<!--      </div>-->
      <div class = no-merchandise>
        <div class ="datalist">
          <div v-if="bringmainsearch.fundinglist.length === 0" >
            펀딩중인 상품이 없어요.
          </div>
          <div class = "product" v-else>


            <carousel id="shop-carousel" :autoplay="true" :nav="false" :responsive="{
              // 1440:{
              //   items:4,
              // },
              1024:{
                items:3,
              },
              758:{
                items:3,
              },
              450:{
                items:2,
              },
              200:{
                items:1,
              }
            }">
              <!--              <carousel id="shop-carousel" :autoplay="true" :nav="false" >-->
              <!--    <template slot="prev"><span class="prev" >prev</span></template>-->
              <div v-for="(merchan, idx) in bringmainsearch.fundinglist" :key="idx">
                <router-link :to="{name: 'DetailFundingPage' ,params: {fundingId: merchan.fundingId}}" style="text-decoration: none">
                  <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">

                    <v-card
                        id="v-card-custom"
                        class="mx-auto"
                        max-width="275px" >
                      <img
                          id="card-img"
                          class="white--text align-end"
                          v-bind:src="merchan.fundingUrl">

                      <v-card-title>{{ merchan.fundingTitle}}</v-card-title>

                      <v-card-subtitle class="pb-0" id="v-card-subtitle-custom">
                        <div id="card-brand" style="font-size: 20px;">
                          {{merchan.fundingBrand}}
                        </div>
                        <div id="card-price" style="font-size: 25px; color: rgb(229, 114, 0)">
                          {{ merchan.fundingTargetMoney}} 원
                        </div>
                      </v-card-subtitle>

                      <v-card-text></v-card-text>


                    </v-card>
                  </div>
                </router-link>
              </div>

              <!--    <template slot="next"><span class="next">next</span></template>-->
            </carousel>


          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  name: "MainSearch",
  data(){
    return{
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
  max-width:1100px;
  left:0; right:0; margin-left:auto; margin-right:auto;
  margin-top: 60px;


}
.search .no-merchandise{
  display: flex;
  flex-direction: column;
  align-items: center;

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
  text-align: center;
  color: #e57200;

}
.moreandmore{

  text-align: right;
  margin-top: 10px;

}
.product{
  max-width: 1000px;
  padding: 10px;

}


#v-card-custom {
  border-bottom: 0.5px solid rgba(0,0,0,.2);
}
#card-img {
  height: 275px;
  width: 275px;
}
#v-card-subtitle-custom {
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
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
    height: 200px !important;
    width: 200px !important;
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
    max-width: 175px !important;
  }
  #v-card-custom div {
    font-size: 10px !important;
    line-height: 15px !important;
  }
  #card-img {
    height: 175px !important;
    width: 175px !important;
  }
  #shop-carousel {
    max-width: 500px !important;
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
@media screen and (min-width: 300px) and (max-width: 415px){
  #v-card-custom {
    max-width: 175px !important;
  }
  #v-card-custom div {
    font-size: 15px !important;
    line-height: 20px !important;
  }
  #card-img {
    height: 175px !important;
    width: 175px !important;
  }
  #shop-carousel {
    max-width: 350px !important;
  }
  #v-card-custom div#card-price {
    font-size: 20px !important;
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
  #v-card-subtitle-custom {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }
}
@media screen and (max-width: 300px){
  #v-card-custom {
    max-width: 100px !important;
  }
  #v-card-custom div {
    font-size: 5px !important;
    line-height: 15px !important;
  }
  #card-img {
    height: 100px !important;
    width: 100px !important;
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
  #v-card-subtitle-custom {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

}
</style>