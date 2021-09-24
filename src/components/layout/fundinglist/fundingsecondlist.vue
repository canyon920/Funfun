<template>
<div class = "secondinner">
<carousel :autoplay="false" :nav="true">
<!--  <template slot="prev"><span class="prev"></span></template>-->
  <a v-for="(event,fkey) in bringfundinglist" :key="fkey">
    <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">
  <v-card
      class="mx-auto"
      width="300px"
  >
    <img
        class="white--text align-end"
        height="200px"
        v-bind:src="event.presdeadimgUrl">

      <v-card-title>{{event.eventTitle}}</v-card-title>


    <v-card-subtitle class="pb-0">

    </v-card-subtitle>



    <v-card-text class="text--primary">


      <div>{{event.subTitle}}</div>
    </v-card-text>
  </v-card>

    </div>
  </a>
</carousel>

</div>
</template>
<script>

import carousel from "vue-owl-carousel";

export  default {
  name: 'Fundingsecondlist',
  components: {carousel},
  props:{
    bringfundinglist:{
      type: Array
    }

  },
  data(){
    return{


    }
  }
}
</script>

<style>
.secondinner{
max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
padding-top: 100px;
padding-bottom: 100px;
}
</style>