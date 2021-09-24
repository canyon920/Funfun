<template>
  <div class = "deadline">
    <div class="fonttext">
      <h2>마감예정인 상품</h2>
    </div>

  <carousel :autoplay="true" :nav="false" >
 <template slot="prev"><span class="prev" >prev</span></template>
    <a v-for="value in bringmainDeadline" :key="value">
    <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">

      <v-card
        class="mx-auto"
        max-width="300px" >

      <img
          class="white--text align-end"
          height="200px"
          v-bind:src="value.presdeadimgUrl">

      <v-card-title>{{value.fundingTitle}}</v-card-title>

      <v-card-subtitle class="pb-0">
        {{value.fundinging}}
      </v-card-subtitle>
        <div class="progressBar-div">
          <div class="progressBar" :style="{width : value.progressBarPercent +'%'}">
          <!--            프로그래스 바            -->
          </div>
        </div>

      <v-card-text class="text--primary">
        <div class ="fundingname">{{value.fundingname}}님의 펀딩 상품</div>

        <div class="fundingmoeny">{{value.fundingMoney}}원 펀딩</div>
      </v-card-text>

    </v-card>

    </div>
    </a>

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