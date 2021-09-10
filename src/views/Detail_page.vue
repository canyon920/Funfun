<template>
  <div class="inner">
    <div class="container-content">
      <div class="content-head">
        <div class="head-detail">
          <!--          여기 썸네일과 서브 이미지 넘겨줘야함 총 4개     -->
          <Detail-page-left  :bringLeftInfo="leftInfo" @bringsub01Click="sub01Click" @bringsub02Click="sub02Click" @bringsub03Click="sub03Click"/>

          <!--          여기 동적 처리   상품 , 펀딩 , 펀딩작성     -->
          <Detail-page-right v-show="productView" @rightEvent="changeRight" @likeChange="likeWork" :bringRightInfo="rightInfo"/>

          <DetailPageRightSetting v-show="settingView" @rightEvent="changeRight" @rightEventBack="changeRightBack" @likeChange="likeWork" :bringRightInfo="rightInfo"/>

        </div>
      </div>
      <!--      여기 동적 처리 바디 이미지 바디 상세이미지 넘겨줘야함-->
      <DetailPageBody :bringBodyInfo="bodyInfo" @bringmainChangeImg1="mainChangeImg1" @bringmainChangeImg2="mainChangeImg2"/>
    </div>
  </div>
</template>

<script>
import DetailPageRight from "@/components/detail-components/DetailPageRight";
import DetailPageLeft from "@/components/detail-components/DetailPageLeft";
import DetailPageBody from "@/components/detail-components/DetailPageBody";
import DetailPageRightSetting from "@/components/detail-components/DetailPageRightSetting";

export default {
  name: "detail_page",
  components: {DetailPageBody, DetailPageLeft, DetailPageRight, DetailPageRightSetting},
  data () {
    return{
      detailData:'',
      productView: true,
      settingView: false,

      leftInfo:{
        preforchangUrl:'',
        prethumbUrl:"http://127.0.0.1:8887/chunsicthum.png",
        presubUrl01:"http://127.0.0.1:8887/chunsicsub1.png",
        presubUrl02:"http://127.0.0.1:8887/chunsicsub2.png",
        presubUrl03:"http://127.0.0.1:8887/chunsicsub3.png",
      },

      rightInfo:{
        likeIcon : false,
        likeCount: 5,
        productTitle: '"언텍트 시대" 춘식이와 라이언의 사랑이야기',
        productBrand: '카카오프렌즈',
        productPrice: 36900,
        fundingCount: 3333
      },

      bodyInfo:{
        preforchangMainUrl:"",
        premainImgUrl: "http://127.0.0.1:8887/chunsic.png",
        predetailImgUrl:"http://127.0.0.1:8887/chunsicdetail.png"
      }
    }
  },
  methods:{
    // RightMethods
    async getData() {
      this.$store.dispatch('member/getTokens')
    },
    changeRight() {
      this.productView = false
      this.settingView = true
    },
    changeRightBack() {
      this.settingView = false
      this.productView = true
    //  여기에 채운것들도 초기화하는것
    },
    likeWork() {
      if (this.rightInfo.likeIcon == false) {
        this.rightInfo.likeCount++
        this.rightInfo.likeIcon = true
      } else {
        this.rightInfo.likeCount--
        this.rightInfo.likeIcon = false
      }
    },

  //  leftMethods
    sub01Click() {
      this.leftInfo.preforchangUrl = this.leftInfo.prethumbUrl
      this.leftInfo.prethumbUrl = this.leftInfo.presubUrl01
      this.leftInfo.presubUrl01 = this.leftInfo.preforchangUrl
    },
    sub02Click() {
      this.leftInfo.preforchangUrl = this.leftInfo.prethumbUrl
      this.leftInfo.prethumbUrl = this.leftInfo.presubUrl02
      this.leftInfo.presubUrl02 = this.leftInfo.preforchangUrl
    },
    sub03Click() {
      this.leftInfo.preforchangUrl = this.leftInfo.prethumbUrl
      this.leftInfo.prethumbUrl = this.leftInfo.presubUrl03
      this.leftInfo.presubUrl03 = this.leftInfo.preforchangUrl
    },

  //  bodyMethods
    mainChangeImg1(){
      this.bodyInfo.preforchangMainUrl = this.bodyInfo.premainImgUrl
    },
    mainChangeImg2() {
      this.bodyInfo.preforchangMainUrl = this.bodyInfo.predetailImgUrl
    }
  }
}

// //콤보박스
// export default {
//   data () {
//     return {
//
//     }
//   },
// }
</script>

<style scoped>

.inner {
  width: 1100px;
}

.inner .container-content .content-head .head-detail {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  justify-content: space-between;

}

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
  border-top: 1px solid rgb(229 114 0);
}


</style>