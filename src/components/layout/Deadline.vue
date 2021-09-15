<template>
  <div class = "deadline">
    <div class="fonttext">
      <h2>마감예정인 상품</h2>
    </div>
  <carousel :autoplay="true" :nav="false" >
<!--    <template slot="prev"><span class="prev" >prev</span></template>-->

    <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">
    <v-card
        class="mx-auto"
        max-width="300px"


    >

      <img
          class="white--text align-end"
          height="200px"
          v-bind:src="bringmainDeadline.presdeadimgUrl01" @click="$emit('bringdeadimg01Click')" alt="#"
      >


      <v-card-title>{{bringmainDeadline.fundingTitle01}}</v-card-title>

      <v-card-subtitle class="pb-0">
        {{bringmainDeadline.fundinging01}}
      </v-card-subtitle>
        <div class="progressBar-div">
          <div class="progressBar" :style="{width : bringmainDeadline.progressBarPercent01 +'%'}">
          <!--            프로그래스 바            -->
          </div>
        </div>


      <v-card-text class="text--primary">
        <div class ="fundingname">{{bringmainDeadline.fundingname01}}님의 펀딩 상품</div>

        <div class="fundingmoeny">{{bringmainDeadline.fundingMoney01}}원 펀딩</div>
      </v-card-text>

    </v-card>
    </div>
<!--    두번쨰 사진-->
    <v-card
        class="mx-auto"
        max-width="300"

    >
      <img
          class="white--text align-end"
          height="200px"
          v-bind:src="bringmainDeadline.presdeadimgUrl02" @click="$emit('bringdeadimg02Click')" alt="#"
      >
        <v-card-title>{{bringmainDeadline.fundingTitle02}}</v-card-title>


      <v-card-subtitle class="pb-0">
        {{bringmainDeadline.fundinging02}}
      </v-card-subtitle>
      <div class="progressBar-div">
        <div class="progressBar" :style="{width : bringmainDeadline.progressBarPercent02 +'%'}">
          <!--            프로그래스 바            -->
        </div>
      </div>


      <v-card-text class="text--primary">
        <div class ="fundingname">{{bringmainDeadline.fundingname02}}님의 펀딩 상품</div>

        <div class="fundingmoeny"> {{bringmainDeadline. fundingMoney02}} 원 펀딩</div>
      </v-card-text>

    </v-card>
<!--    세번쨰 사진-->

    <v-card
        class="mx-auto"
        max-width="300"

    >
      <img
          class="white--text align-end"
          height="200px"
          v-bind:src="bringmainDeadline.presdeadimgUrl03" @click="$emit('bringdeadimg03Click')" alt="#"
      >
        <v-card-title>{{bringmainDeadline.fundingTitle03}}</v-card-title>


      <v-card-subtitle class="pb-0">
       {{bringmainDeadline.fundinging03}}
      </v-card-subtitle>
      <div class="progressBar-div">
        <div class="progressBar" :style="{width : bringmainDeadline.progressBarPercent03 +'%'}">
          <!--            프로그래스 바            -->
        </div>
      </div>


      <v-card-text class="text--primary">
        <div class ="fundingname">{{bringmainDeadline.fundingname03}}님의 펀딩 상품</div>

        <div class="fundingmoeny">{{bringmainDeadline.fundingMoney03}} 원 펀딩</div>
      </v-card-text>

    </v-card>
<!--    네번째 사진-->

    <v-card
        class="mx-auto"
        max-width="300"

    >
      <img
          class="white--text align-end"
          height="200px"
          v-bind:src="bringmainDeadline.presdeadimgUrl04" @click="$emit('bringdeadimg04Click')" alt="#"
      >
        <v-card-title>{{bringmainDeadline.fundingTitle04}}</v-card-title>


      <v-card-subtitle class="pb-0">
        {{bringmainDeadline.fundinging04}}
      </v-card-subtitle>
      <div class="progressBar-div">
        <div class="progressBar" :style="{width : bringmainDeadline.progressBarPercent04 +'%'}">
          <!--            프로그래스 바            -->
        </div>
      </div>


      <v-card-text class="text--primary">
        <div class ="fundingname">{{bringmainDeadline.fundingname04}}님의 펀딩 상품</div>

        <div class="fundingmoeny">{{bringmainDeadline.fundingMoney04}} 원 펀딩</div>
      </v-card-text>

    </v-card>
<!--    <template slot="next"><span class="next">next</span></template>-->
  </carousel>
  </div>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  name: 'Deadline',

  components: { carousel },
  props: {
    bringmainDeadline : {
      type: Object
    }
  },
  emits:[
      'bringdeadimg01Click','bringdeadimg02Click','bringdeadimg03Click','bringdeadimg04Click'

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
.deadline {
  margin-top: 100px;
  margin-bottom: 90px;
}
.fonttext{
  margin-bottom: 20px;
}
.fundingmoeny{ color:darkblue;}

.pb-0{
  position: relative;
}


.progressBar-div {
  position: relative;
  display: block;
  height: 8px;
  width: 70%;
  background-color: rgba(229, 114, 0, .2);
  left: 70px;
  bottom: 15px;

}
.progressBar-div .progressBar {
  height: 8px;
  background-color: rgb(229, 114, 0);
  /*width: 30%;*/
}
.fundingname {

  font-size: 20px;
}
</style>