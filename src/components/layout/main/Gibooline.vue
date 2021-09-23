<template>
  <div class = "giboo">
    <div class="gibootext">
      <h2>나눔을 전하세요</h2>
    </div>
    <v-carousel hide-delimiters   height="300">
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      >

      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: 'Gibooline',
  data () {
    return {
      items: [
        {
          src: 'https://happybean-phinf.pstatic.net/20210914_239/1631582579816Keldv_JPEG/PC___2280x600_1.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>
<style>
.giboo{

}
.giboo .gibootext{
  margin-bottom: 20px;
}
</style>