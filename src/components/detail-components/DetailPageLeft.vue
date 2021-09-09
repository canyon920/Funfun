<template>

  <div class="detail-left">
    <div class="thumb-box left-img">
      <img class="thumb-img" src="../../assets/example-img/chunsicthum.png" alt="#">
    </div>
    <div class="left-box">
      <!--              <div class="box-img" v-for="(subImg, index) in subImgs" :key="index">      -->
      <div class="box-img" >
        <div class="sub-box box-img-first">
          <img class="sub-img" src="../../assets/example-img/chunsicsub1.png" alt="#">
        </div>
        <div class="sub-box box-img-second">
          <img class="sub-img" src="../../assets/example-img/chunsicsub2.png" alt="#">
        </div>
        <div class="sub-box box-img-third">
          <img class="sub-img" src="../../assets/example-img/chunsicsub3.png" alt="#">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailPageLeft"
}
</script>

<style scoped>

/*top - left*/
.inner .container-content .content-head .head-detail .detail-left {
  width: 45%;
}
.inner .container-content .content-head .head-detail .detail-left .left-img {

}
.inner .container-content .content-head .head-detail .detail-left .left-img .thumb-img{
  width: 100%;

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
  height: 70px;
  cursor: pointer;

}

</style>