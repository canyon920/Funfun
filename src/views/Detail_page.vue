<template>
  <div class="inner">
    <div class="container-content">
      <div class="content-head">
        <div class="head-detail">
          <div class="detail-left">
            <div class="thumb-box left-img">
              <img class="thumb-img" src="../assets/example-img/chunsicthum.png" alt="#">
            </div>
            <div class="left-box">
<!--              <div class="box-img" v-for="(subImg, index) in subImgs" :key="index">      -->
              <div class="box-img" >
                <div class="sub-box box-img-first">
                  <img class="sub-img" src="../assets/example-img/chunsicsub1.png" alt="#">
                </div>
                <div class="sub-box box-img-second">
                  <img class="sub-img" src="../assets/example-img/chunsicsub2.png" alt="#">
                </div>
                <div class="sub-box box-img-third">
                  <img class="sub-img" src="../assets/example-img/chunsicsub3.png" alt="#">
                </div>
              </div>
            </div>
          </div>
<!--          여기 동적 처리        -->
          <div class="detail-right">
            <div class="right-content">
              <div class="content-top">
                <div class="title-box">
                  "언텍트 맞춤선물" 카카오프렌즈 골드라인 그란데 머그 2종 택일
                </div>
                <div class="subtitle-box">
                  <div class="brand-box"></div>
                  <div class="fundingcount-box"></div>
                </div>

              </div>
              <div class="content-bottom">
                <div class="bottom-button">
                  <div class="like-box">
                    <button class="like-button">

                    </button>
                  </div>
                  <div class="giveme-box">
                    <button class="giveme-button">

                    </button>
                  </div>
                  <div class="funding-box">
                    <button class="funding-button">

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="content-body">
        <div class="body-detail">
          <div class="detail-menu">
            <div class="menu-main">
              <div class="main-box menu-first" @click="changeImg1">상품설명</div>
              <div class="main-box menu-second" @click="changeImg3">상세정보</div>
            </div>
          </div>
<!--          여기 동적 처리          -->
          <div class="detail-img">
            <img src="../assets/example-img/chunsic.png" alt="#">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "detail_page",
  data () {
    return{
      selectContent : '',
      bodyImg: "",
      thumbImg: "",
      subImgs:[]
    }
  },
  methods:{
    changeImg1(){
      this.bodyImg = ""
    },
    changeImg2(){
      this.bodyImg = ""
    },
    changeImg3(){
      this.bodyImg = ""
    }
  }
}
</script>

<style scoped>
.inner {
  width: 1100px;
}

/*body*/
.inner .container-content .content-body .body-detail {
  border: 1px solid rgb(229 114 0);
  margin-top: 30px;

}
.inner .container-content .content-body .body-detail .detail-menu {
  margin: 5px 10%;

}
.inner .container-content .content-body .body-detail .detail-menu .menu-main {
  display: flex;
  justify-content: center;

}
.inner .container-content .content-body .body-detail .detail-menu .menu-main .main-box {
  padding-left: 10%;
  padding-right: 10%;
  cursor: pointer;
}
.inner .container-content .content-body .body-detail .detail-menu .menu-main .menu-first {
  border-right: 2px solid rgb(229 114 0);
}
.inner .container-content .content-body .body-detail .detail-img {
  border-top: 1px solid rgb(229 114 0);
}

/*top - left*/
.inner .container-content .content-head .head-detail .detail-left {
  width: 50%;
}
.inner .container-content .content-head .head-detail .detail-left .left-img {

}
.inner .container-content .content-head .head-detail .detail-left .left-img .thumb-img{
 height: 500px;

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

}



</style>