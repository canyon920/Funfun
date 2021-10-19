<template>
  <div class = "secondinner">

    <carousel :autoplay="false" :nav="true">
      <template slot="prev"><span class="prev"></span></template>


      <v-card
          class="mx-auto"
          max-width="300"
      >
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          Number 10
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </v-card>


      <img src="https://placeimg.com/200/200/any?2">

      <img src="https://placeimg.com/200/200/any?3">

      <img src="https://placeimg.com/200/200/any?4">
      <template slot="next"><span class="next"></span></template>


    </carousel>

  </div>
</template>
<script>


import carousel from "vue-owl-carousel";

export  default {
  name: 'Fundingsecondlist',
  components: { carousel,},
  props:{
    bringfundinglist:{
      type:Array
    }

  },
  data(){
    return{



    }
  }
}
</script>

<style scoped>
.secondinner{
  max-width:1100px;
  left:0; right:0; margin-left:auto; margin-right:auto;
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>