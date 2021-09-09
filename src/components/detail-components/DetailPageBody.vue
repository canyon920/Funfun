<template>

  <div class="content-body">
    <div class="body-detail">
      <div class="detail-menu">
        <div class="menu-main">
          <div class="main-box menu-first" @click="mainChangeImg1">상품설명</div>
          <div class="main-box menu-second" @click="mainChangeImg2">상세정보</div>
        </div>
      </div>
      <!--          여기 동적 처리          -->
      <div class="detail-img">
        <img class="img-main" v-bind:src="forchangMainUrl" alt="#">
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "DetailPageBody",
  data(){
      return{
        forchangMainUrl:"",
        mainImgUrl: require("../../assets/example-img/chunsic.png"),
        detailImgUrl:require("../../assets/example-img/chunsicdetail.png")
      }
  },
  methods:{
    mainChangeImg1(){
      this.forchangMainUrl = this.mainImgUrl
    },
    mainChangeImg2() {
      this.forchangMainUrl = this.detailImgUrl
    }
  },
  mounted() {
    this.mainChangeImg1()
  }
}
</script>

<style scoped>

/*body*/
.inner .container-content .content-body .body-detail {

  border: 2px solid rgb(229 114 0);
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
  text-align: center;
  border-top: 1px solid rgb(229 114 0);
}
.inner .container-content .content-body .body-detail .detail-img .img-main {
  width: 1080px;
}

</style>