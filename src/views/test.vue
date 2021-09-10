<template>
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import 'swiper/css';

  export default {
   name: "Test",
    components: {
         Swiper,
         SwiperSlide,
       },
       setup() {
         const onSwiper = (swiper) => {
           console.log(swiper);
         };
         const onSlideChange = () => {
           console.log('slide change');
         };
         return {
           onSwiper,
           onSlideChange,
         };
       },
    }

</script>
<style>
.swiper {
  width: 600px;
  height: 300px;
}
</style>