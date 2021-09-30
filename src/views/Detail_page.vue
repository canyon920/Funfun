<template>
  <div class="inner">
    <div class="container-content">
      <div class="content-head">
        <div class="head-detail">
          <h1>{{ $store.state.member.memberId }}</h1>

          <!--          여기 썸네일과 서브 이미지 넘겨줘야함 총 4개        -->
          <Detail-page-left :bringLeftInfo="leftInfo" @bringsub01Click="sub01Click" @bringsub02Click="sub02Click"
                            @bringsub03Click="sub03Click"/>

          <!--          여기 동적 처리   상품 내용 보여줌        -->
          <Detail-page-right v-show="productView" @rightEvent="changeRight" @likeChange="likeWork"
                             :bringRightInfo="rightInfo"/>


          <!--          여기 펀딩 등록 위한 것들 보여줌          -->
          <Detail-page-right-setting v-show="settingView" @rightEvent="changeRight" @rightEventBack="changeRightBack"
                                     @likeChange="likeWork" @registFunding="transmitFundingRegist"
                                     :bringRightInfo="rightInfo"/>

        </div>
      </div>
      <!--      여기 동적 처리 바디 이미지 바디 상세이미지 넘겨줘야함      -->
        <Detail-page-body :bringBodyInfo="bodyInfo" @bringmainChangeImg1="mainChangeImg1"
                          @bringmainChangeImg2="mainChangeImg2"/>
    </div>
  </div>
</template>

<script>
import DetailPageRight from "@/components/detail-components/DetailPageRight";
import DetailPageLeft from "@/components/detail-components/DetailPageLeft";
import DetailPageBody from "@/components/detail-components/DetailPageBody";
import DetailPageRightSetting from "@/components/detail-components/DetailPageRightSetting";
import axios from "axios";

export default {
  name: "detail_page",
  components: {DetailPageBody, DetailPageLeft, DetailPageRight, DetailPageRightSetting},

  data() {
    return {
      detailData: '',
      productView: true,
      settingView: false,

      leftInfo: {
        preforchangUrl: '',
        prethumbUrl:require("@/assets/example-img/chunsicthum.png"),
        presubUrl01:require("@/assets/example-img/chunsicsub1.png"),
        presubUrl02:require("@/assets/example-img/chunsicsub2.png"),
        presubUrl03:require("@/assets/example-img/chunsicsub3.png"),
      },

      rightInfo: {
        likeIcon: false,
        likeCount: 5,
        beforeLikeCount: 5,
        productTitle: '"언텍트 시대" 춘식이와 라이언의 사랑이야기',
        productBrand: '카카오프렌즈',
        productPrice: 36900,
        fundingCount: 3333
      },

      bodyInfo: {
        preforchangMainUrl: "",
        premainImgUrl: require("@/assets/example-img/chunsic.png"),
        predetailImgUrl: require("@/assets/example-img/chunsicdetail.png")
      },

      transeDataForFunding: {
        member_id: '',
        product_id: '',
        funding_title: '',
        funding_create_time: '',
        funding_expired_time: '',
        funding_target_money: '',
      }
    }
  },

  methods: {
    // 상품 id , 이미지-메인/서브/메인/상세, 상품 타이틀/가격/좋아요수/펀딩수/브랜드 , 멤버 id ,   store 시도 methods 만들어야함 Store 만들어야함
    async getData() {
      this.$store.dispatch('member/getTokens')
    },

    // 상단 오른쪽 부분 바뀌도록 하는 메소드들
    changeRight() {
      this.productView = false
      this.settingView = true
    },
    changeRightBack() {
      this.settingView = false
      this.productView = true
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

    // 펀딩하기 누르면 전송될 값들 axios <!-- 상품 id(상위 컴포넌트서 받아야함) , 멤버 id(store 에서 꺼내자) , 제목 , 시작일 , 만료일 , 목표금액 , 펀딩타입(이거는 컨트롤러서?) 넘기자 -->
// ---> 리스펀스로 저장이되었다면 펀딩 아이디를 받아서 라우터 파람으로 다음페이지 넘어가도록 해야할듯
    async transmitFundingRegist(data) {
      console.log("하위 컴포넌트로 넘어온 값 : ", data)
      console.log("값 주워담기 전 : ", this.transeDataForFunding)
      this.transeDataForFunding.member_id = 2
      this.transeDataForFunding.product_id = 2
      this.transeDataForFunding.funding_title = data.funding_title
      this.transeDataForFunding.funding_create_time = data.funding_create_time
      this.transeDataForFunding.funding_expired_time = data.funding_expired_time
      this.transeDataForFunding.funding_target_money = this.rightInfo.productPrice
      let form = new FormData()

      form.append("member_id", this.transeDataForFunding.member_id)
      form.append("product_id", this.transeDataForFunding.product_id)
      form.append("funding_title", this.transeDataForFunding.funding_title)
      form.append("funding_create_time", this.transeDataForFunding.funding_create_time)
      form.append("funding_expired_time", this.transeDataForFunding.funding_expired_time)
      form.append("funding_target_money", this.transeDataForFunding.funding_target_money)

      // form.append("fundingDataForRegist",`${this.transeDataForFunding}`)
      // form.append("fundingDataForRegist",JSON.stringify(this.transeDataForFunding))
      await axios.post("http://localhost:9090/api/fundingregist", form
          // ,
          //  {headers: {
          // // Overwrite Axios's automatically set Content-Type
          // 'Content-Type': 'application/json'
          // 'Content-Type': 'X-Requested-With'
          // //       'Content-type': 'multipart/form-data; charset=utf-8'
          //   }}
      )
          .then(res => {
            if (res.status === 200) {
              // 응답 코드가 OK 이면 이동할 곳 ( 펀딩 상세페이지로 )
              this.$router.push("/funding-detail-page")
            }
          })
    }
  },

  // 페이지 사라지기전 라이크수 전송
  beforeDestroy() {
    this.transmitLike()
  }
};

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