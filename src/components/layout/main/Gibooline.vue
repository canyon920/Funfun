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
        <router-link :to="{name: 'DetailFundingPage', params:{ fundingId: 61 }}">
          <div style="width: 100%; height: 100%; cursor: pointer"></div>
        </router-link>
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
          src: null,
          fundingId:1
        },
      ],
    }
  },
  methods:{
    bottomdonation() {
      var wmm = window.matchMedia("screen and (max-width: 500px)");
      if (wmm.matches) {
        this.items[0].src = require("@/assets/donate/ｄｏｎａｔｅ4.png");
      } else {
        this.items[0].src = require("@/assets/donate/ｄｏｎａｔｅ５.png");
      }
    }
  },
  beforeMount() {
    this.bottomdonation()
  }

}
</script>
<style scoped>
.giboo{
  margin-bottom: 100px;

}
.giboo .gibootext{
  margin-bottom: 30px;
}
</style>