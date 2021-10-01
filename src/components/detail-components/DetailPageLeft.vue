<template>

  <div class="detail-left">
    <div class="thumb-box left-img">
<!--      <img class="thumb-img" src="../../assets/example-img/chunsicthum.png" alt="#">-->
      <img class="thumb-img" v-bind:src="bringLeftInfo.prethumbUrl" alt="#">
    </div>
    <div class="left-box">
      <!--              <div class="box-img" v-for="(subImg, index) in subImgs" :key="index">      -->
      <div class="box-img" >
<!--        <div v-for="(sub, bkey) in bringLeftInfo" class="sub-box box-img-first" :key="bkey">-->
<!--          &lt;!&ndash;          <img class="sub-img" src="../../assets/example-img/chunsicsub1.png" alt="#">&ndash;&gt;-->
<!--          <img class="sub-img" v-bind:src="sub.subImg[bkey]" @click="$emit('bringsub01Click')" alt="#">-->
<!--        </div>-->
        <div v-show="bringLeftInfo.subImg[0]" class="sub-box box-img-first">
<!--          <img class="sub-img" src="../../assets/example-img/chunsicsub1.png" alt="#">-->
          <img class="sub-img" :src="bringLeftInfo.subImg[0]" @click="$emit('bringsub01Click')" alt="#">
        </div>
        <div v-show="bringLeftInfo.subImg[1]" class="sub-box box-img-second">
<!--          <img class="sub-img" src="../../assets/example-img/chunsicsub2.png" alt="#">-->
          <img class="sub-img" :src="bringLeftInfo.subImg[1]" @click="$emit('bringsub02Click')" alt="#">
        </div>
        <div v-show="bringLeftInfo.subImg[2]" class="sub-box box-img-third">
<!--          <img class="sub-img" src="../../assets/example-img/chunsicsub3.png" alt="#">-->
          <img class="sub-img" :src="bringLeftInfo.subImg[2]" @click="$emit('bringsub03Click')" alt="#">
        </div>
        <div v-show="bringLeftInfo.subImg[3]" class="sub-box box-img-four">
          <!--          <img class="sub-img" src="../../assets/example-img/chunsicsub3.png" alt="#">-->
          <img class="sub-img" :src="bringLeftInfo.subImg[3]" @click="$emit('bringsub04Click')" alt="#">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailPageLeft",
  props:{
    bringLeftInfo:{
      type:Object
    }
  },
  emits:[
      'bringsub01Click', 'bringsub02Click', 'bringsub03Click', 'bringsub04Click'
  ],
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>

/*top - left*/
.inner .container-content .content-head .head-detail .detail-left {
  width: 45%;
}
.inner .container-content .content-head .head-detail .detail-left .left-img {

}
.inner .container-content .content-head .head-detail .detail-left .left-img .thumb-img {
  width: 486px;
  height: 486px;

}
.inner .container-content .content-head .head-detail .detail-left .left-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.inner .container-content .content-head .head-detail .detail-left .left-box .box-img{


}
.inner .container-content .content-head .head-detail .detail-left .left-box .box-img .sub-box {
  display: inline;


}
.inner .container-content .content-head .head-detail .detail-left .left-box .box-img .sub-box .sub-img {
  margin: 5px;
  height: 60px;
  width: 60px;
  cursor: pointer;

}

@media screen and (max-width: 800px){
  .inner .container-content .content-head .head-detail .detail-left .left-img .thumb-img {
    width: 325px;
    height: 325px;
  }
  .inner .container-content .content-head .head-detail .detail-left .left-box {
    max-width: 100vw;
    display: block;

  }
  .inner .container-content .content-head .head-detail .detail-left {
    width: 100vw;
  }

}

</style>