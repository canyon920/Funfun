<template>
  <div class = "join">
    <div class="textline">
   <h2>내가 참여한 선물</h2>
   </div>
  <carousel :autoplay="true" :nav="false">
<!--    <template slot="prev"><span class="prev">prev</span></template>-->
    <a v-for="(join, jkey) in bringmainJoin" :key="jkey">
      <router-link :to="{name: 'DetailFundingPage' ,params: {fundingId: value.fundingId}}">
      <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">
    <v-card
        class="mx-auto"
        max-width="300"
    >

      <img
          class="white--text align-end"
          height="200px"
          v-bind:src="join.presJoinUrl"
      >

      <v-card-title>{{join.funding_title}}</v-card-title>


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
    </a>
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
<style>
.prev{
  display: none;
}
.next{
  display: none;
}
.join{
  margin-bottom: 80px;
}
.textline{
  margin-bottom: 20px;
}
.fundingmoeny{ color:darkblue;}
.fundingname {

  font-size: 20px;
}

</style>