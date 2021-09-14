<template>

  <carousel :autoplay="true" :nav="false">
    <template slot="prev"><span class="prev" >prev</span></template>

    <v-card
        class="mx-auto"
        max-width="300"
    >
      <img
          class="white--text align-end"
          height="200px"
          src="bringmainDeadline.presdeadimgUrl01" @click="$emit('bringdeadimg01Click')" alt="#"
      >


      <v-card-title>{{bringmainDeadline.fundingTitle01}}</v-card-title>


      <v-card-subtitle class="pb-0">
        {{bringmainDeadline.fundinging01}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{bringmainDeadline.fundingname01}}</div>

        <div>{{bringmainDeadline.fundingMoney01}}</div>
      </v-card-text>

    </v-card>
<!--    두번쨰 사진-->
    <v-card
        class="mx-auto"
        max-width="300"
    >
      <img
          class="white--text align-end"
          height="200px"
          src="bringmainDeadline.presdeadimgUrl02" @click="$emit('bringdeadimg02Click')" alt="#"
      >
        <v-card-title>{{bringmainDeadline.fundingTitle02}}</v-card-title>


      <v-card-subtitle class="pb-0">
        {{bringmainDeadline.fundinging02}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{bringmainDeadline.fundingname02}}</div>

        <div> {{bringmainDeadline. fundingMoney02}}</div>
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
          src="bringmainDeadline.presdeadimgUrl03" @click="$emit('bringdeadimg03Click')" alt="#"
      >
        <v-card-title>{{bringmainDeadline.fundingTitle03}}</v-card-title>


      <v-card-subtitle class="pb-0">
       {{bringmainDeadline.fundinging03}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{bringmainDeadline.fundingname03}}</div>

        <div>{{bringmainDeadline.fundingMoney03}}</div>
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
          src="bringmainDeadline.presdeadimgUrl04" @click="$emit('bringdeadimg04Click')" alt="#"
      >
        <v-card-title>{{bringmainDeadline.fundingTitle04}}</v-card-title>


      <v-card-subtitle class="pb-0">
        {{bringmainDeadline.fundinging04}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{bringmainDeadline.fundingname04}}</div>

        <div> {{bringmainDeadline.fundingMoney04}} 원 펀딩</div>
      </v-card-text>

    </v-card>
    <template slot="next"><span class="next">next</span></template>
  </carousel>
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
</style>