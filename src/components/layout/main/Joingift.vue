<template>
  <div class = "join">

  <carousel :autoplay="true" :nav="false" :responsive="{
              1024:{
                items:3,
              },
              758:{
                items:3,
              },
              250:{
                items:1,
              }
            }">
<!--    <template slot="prev"><span class="prev">prev</span></template>-->
    <div v-for="(join, jkey) in bringmainJoin" :key="jkey">
      <router-link :to="{name: 'DetailFundingPage' ,params: {fundingId: join.fundingId}}" style="text-decoration: none">
      <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">
    <v-card
        id="v-card-custom"
        class="mx-auto"
        max-width="300"
    >

      <img
          id="card-img"
          class="white--text align-end"
          height="200px"
          v-bind:src="join.presJoinUrl"
      >

      <v-card-title style="text-align: center">{{join.funding_title}}</v-card-title>


      <v-card-subtitle class="pb-0">
        {{join.fundinging}}
      </v-card-subtitle>
      <div class="progressBar-div">
        <div class="progressBar" :style="{width : join.progressBarPercent +'%'}">
          <!--            프로그래스 바            -->
        </div>
      </div>

      <v-card-text class="text--primary">
        <div class="fundingname">{{join.fundingname}}님의 펀딩 상품</div>

        <div class="fundingmoeny">{{join.fundingMoney}}원 펀딩</div>
      </v-card-text>

    </v-card>
    </div>
      </router-link>
    </div>
    <!--    두번쨰 사진-->


<!--    <template slot="next"><span class="next">next</span></template>-->
  </carousel>
  </div>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  name: 'Joingift',

  components: { carousel },
  props: {
    bringmainJoin : {
      type: Array
    }
  },
  emits:[


  ],
}

</script>
<style scoped>
.prev{
  display: none;
}
.next{
  display: none;
}
.join{
  margin-bottom: 80px;
}

.fundingmoeny{ color:darkblue;}
.fundingname {

  font-size: 20px;
}


@media screen and (min-width: 415px) and (max-width: 1300px){
  #v-card-custom {
    max-width: 200px !important;
  }
  #v-card-custom div {
    font-size: 15px !important;
    line-height: 20px !important;

  }
  #card-img {
    height: 200px !important;
    width: 200px !important;
  }
  #shop-carousel {
    max-width: 800px !important;
  }

  #v-card-custom div #progress-bar-text {
    font-size: 12px !important;
    line-height: 25px !important;

  }

}

@media screen and (max-width: 415px){
  #v-card-custom {
    max-width: 215px !important;
  }
  #v-card-custom div {
    font-size: 15px !important;
    line-height: 20px !important;
  }
  #card-img {
    height: 215px !important;
    width: 215px !important;
  }
  #shop-carousel {
    max-width: 350px !important;
  }

  #v-card-custom div #progress-bar-text {
    font-size: 12px !important;
    line-height: 25px !important;

  }

}

</style>