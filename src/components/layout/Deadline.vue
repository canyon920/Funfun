<template>

  <carousel :autoplay="true" :nav="false">
    <template slot="prev"><span class="prev">prev</span></template>
    <img src="https://placeimg.com/200/200/any?1">

    <img src="https://placeimg.com/200/200/any?2">

    <img src="https://placeimg.com/200/200/any?3">

    <img src="https://placeimg.com/200/200/any?4">
    <template slot="next"><span class="next">next</span></template>
  </carousel>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
}

</script>