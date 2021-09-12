<template>

  <div class="inner">
    <div class="container-content">
      <div class="content-head">
        <div class="head-detail">
          <!--          여기 썸네일과 서브 이미지 넘겨줘야함 총 4개     -->
          <Detail-funding-page-left  :bringLeftInfo="leftInfo"  @bringsub01Click="sub01Click" @bringsub02Click="sub02Click" @bringsub03Click="sub03Click"/>

          <!--          여기 동적 처리   상품 내용 보여줌     -->
          <Detail-funding-page-right :bringRightInfo="rightInfo" @likeChange="likeWork"/>

        </div>
      </div>
      <!--      여기 동적 처리 바디 이미지 바디 상세이미지 넘겨줘야함-->
      <Detail-funding-page-body :bringBodyInfo="bodyInfo" @bringmainChangeImg1="mainChangeImg1" @bringmainChangeImg2="mainChangeImg2"/>
    </div>
  </div>

</template>

<script>
import DetailFundingPageLeft from "@/components/detail-funding-components/DetailFundingPageLeft";
import DetailFundingPageRight from "@/components/detail-funding-components/DetailFundingPageRight";
import DetailFundingPageBody from "@/components/detail-funding-components/DetailFundingPageBody";
import axios from "axios";

export default {
  name: "DetailFundingPage",
  components:{ DetailFundingPageLeft , DetailFundingPageRight , DetailFundingPageBody },
  data(){
    return {

      leftInfo:{
        preforchangUrl:'',
        prethumbUrl:"http://127.0.0.1:8887/chunsicthum.png",
        presubUrl01:"http://127.0.0.1:8887/chunsicsub1.png",
        presubUrl02:"http://127.0.0.1:8887/chunsicsub2.png",
        presubUrl03:"http://127.0.0.1:8887/chunsicsub3.png",
      },

      rightInfo: {
        likeIcon: false,
        likeCount: 5,
        beforeLikeCount: 5,
        productTitle: '""언텍트 시대" 춘식이와 라이언의 사랑이야기 일단 사십오자 넘는것을 봐보자어디까지',
        productBrand: '카카오프렌즈',
        remainingPeriod: 21,
        remainSuccessPercent: 51,
        productPrice: 36900,
        assemblePrice: 21000,
        //백에서 달성률 20%가 되지않으면 0으로 받기
        joinSupporter: 3,
        progressBarPercent: 30

      },

      bodyInfo:{
        preforchangMainUrl:"",
        premainImgUrl: "http://127.0.0.1:8887/chunsic.png",
        predetailImgUrl:"http://127.0.0.1:8887/chunsicdetail.png"
      },

    }
  },
  methods: {

    // leftMethods
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

    // bodyMethods
    mainChangeImg1() {
      this.bodyInfo.preforchangMainUrl = this.bodyInfo.premainImgUrl
    },
    mainChangeImg2() {
      this.bodyInfo.preforchangMainUrl = this.bodyInfo.predetailImgUrl
    },

    // 좋아요 전송 axios ( 좋아요 수 넘어나는 것은 확인 store 에서 토큰꺼내 보내는 작업 필요
    // 생각해보니 수로 넘기면 사용자간 충돌 일어날 수 있으니 tru false로 넘겨서 백에서 true 면은  증가시키는게 좋을듯
    async transmitLike() {
      if (this.rightInfo.beforeLikeCount < this.rightInfo.likeCount) {
        console.log("라이크 수 : ", this.rightInfo.likeCount, typeof this.rightInfo.likeCount);
        let form = new FormData()
        form.append("like_up", true)
        await axios.post("http://localhost:9090/api/like/update", form)
            .then(res => {
              console.log(res)
            })
      }
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
  },
  // 페이지 사라지기전 라이크수 전송
  beforeDestroy() {
    this.transmitLike()
  }
}
</script>

<style scoped>


.inner {
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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