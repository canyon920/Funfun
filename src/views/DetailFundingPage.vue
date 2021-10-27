<template>

  <div class="inner">
    <div class="container-content">
      <div class="content-head">
        <div class="head-detail">
          {{$store.state.member.memberId}}

          <!--          여기 썸네일과 서브 이미지 넘겨줘야함 총 4개     -->
          <Detail-funding-page-left  :bringLeftInfo="leftInfo"  @bringsub01Click="sub01Click" @bringsub02Click="sub02Click" @bringsub03Click="sub03Click"  @bringsub04Click="sub04Click"
                                     @bringError1="errorImg1"/>

          <!--          여기 동적 처리   상품 내용 보여줌     -->
          <Detail-funding-page-right :bringRightInfo="rightInfo" @likeChange="likeWork" @payFunding="joinFunding"/>

        </div>
      </div>
      <!--      여기 동적 처리 바디 이미지 바디 상세이미지 넘겨줘야함-->
      <Detail-funding-page-body :bringBodyInfo="bodyInfo"/>
    </div>

<!--    <Loder-->
<!--    :size="3"-->
<!--    :z-index="9"-->
<!--    :fixed="true"/>-->

  </div>


</template>

<script>
import DetailFundingPageLeft from "@/components/detail-funding-components/DetailFundingPageLeft";
import DetailFundingPageRight from "@/components/detail-funding-components/DetailFundingPageRight";
import DetailFundingPageBody from "@/components/detail-funding-components/DetailFundingPageBody";
import axios from "axios";
import {fundingObj} from "../service/FundingObj";
import Header from "../components/layout/Header";
// import {reServerSend} from "../service/refreshForAccessToken";
// import Header from "../components/layout/Header";

export default {
  name: "DetailFundingPage",
  components:{ DetailFundingPageLeft , DetailFundingPageRight , DetailFundingPageBody },
  data(){
    return {

      leftInfo:{
        preforchangUrl:'',
        prethumbUrl:require("@/assets/example-img/chunsicthum.png"),
        subImg:[
          require("@/assets/example-img/chunsicsub1.png"),
          require("@/assets/example-img/chunsicsub2.png"),
          require("@/assets/example-img/chunsicsub3.png")
        ],
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
        joinSupporter: 3,
        progressBarPercent: 10

      },

      bodyInfo:{
        preforchangMainUrl:"",
        premainImgUrl: [require("@/assets/example-img/chunsic.png")],
      },

    }
  },
  methods: {

    // leftMethods
    sub01Click() {
      this.leftInfo.preforchangUrl = this.leftInfo.prethumbUrl
      this.leftInfo.prethumbUrl = this.leftInfo.subImg[0]
      this.leftInfo.subImg[0] = this.leftInfo.preforchangUrl
    },
    sub02Click() {
      this.leftInfo.preforchangUrl = this.leftInfo.prethumbUrl
      this.leftInfo.prethumbUrl = this.leftInfo.subImg[1]
      this.leftInfo.subImg[1] = this.leftInfo.preforchangUrl
    },
    sub03Click() {
      this.leftInfo.preforchangUrl = this.leftInfo.prethumbUrl
      this.leftInfo.prethumbUrl = this.leftInfo.subImg[2]
      this.leftInfo.subImg[2] = this.leftInfo.preforchangUrl
    },
    sub04Click() {
      this.leftInfo.preforchangUrl = this.leftInfo.prethumbUrl
      this.leftInfo.prethumbUrl = this.leftInfo.subImg[3]
      this.leftInfo.subImg[3] = this.leftInfo.preforchangUrl
    },
    errorImg1() {
      // console.log("썸네일에러")
      this.leftInfo.prethumbUrl = require("@/assets/example-img/chunsicthum.png")
      this.leftInfo.subImg[0] = require("@/assets/example-img/chunsicsub1.png")
      this.leftInfo.subImg[1] = require("@/assets/example-img/chunsicsub2.png")
      this.leftInfo.subImg[2] = require("@/assets/example-img/chunsicsub3.png")
      this.bodyInfo.premainImgUrl = []
      this.bodyInfo.premainImgUrl[0] = require("@/assets/example-img/chunsic.png")
    },

    // bodyMethods
    // mainChangeImg1() {
    //   this.bodyInfo.preforchangMainUrl = this.bodyInfo.premainImgUrl
    // },
    // mainChangeImg2() {
    //   this.bodyInfo.preforchangMainUrl = this.bodyInfo.predetailImgUrl
    // },

    // 좋아요 전송 axios ( 좋아요 수 넘어나는 것은 확인 store 에서 토큰꺼내 보내는 작업 필요
    // 생각해보니 수로 넘기면 사용자간 충돌 일어날 수 있으니 tru false로 넘겨서 백에서 true 면은  증가시키는게 좋을듯
    /*async transmitLike() {
      if (this.rightInfo.beforeLikeCount < this.rightInfo.likeCount) {
        console.log("라이크 수 : ", this.rightInfo.likeCount, typeof this.rightInfo.likeCount);
        let form = new FormData()
        form.append("like_up", true)
        await axios.post("http://192.168.0.165:9090/api/like/update", form)
            .then(res => {
              console.log(res)
            })
      }
    },*/
    async bringFundingDetail(){
      var bringRouteFundingId = this.$route.params.fundingId
      // console.log("bringRouteFundingId",bringRouteFundingId)
      let form = new FormData();
      form.append('funding_id',bringRouteFundingId)
      /*let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          Authorization : `Bearer ${access_token}`
        }
      }*/
      await axios.post("http://192.168.0.165:9090/funding/fundingDetail",form)
      .then(res =>{
        this.leftInfo.subImg=[]

        fundingObj.fundingId=res.data.funding_id
        fundingObj.fundingName = res.data.funding_title
        fundingObj.fundingCreateTime = res.data.funding_create_time
        fundingObj.fundingExpiredTime = res.data.funding_expired_time
        fundingObj.fundingTargetMoney = res.data.funding_target_money
        fundingObj.fundingImg = res.data.fundingImg
        fundingObj.memberId = res.data.member_id
        fundingObj.productId = res.data.product_id
        fundingObj.fundingCollectedMoney = res.data.funding_collected_money
        fundingObj.fundingPeopleCount = res.data.funding_people_count
        fundingObj.fundingProductBrand = res.data.funding_product_brand
        fundingObj.fundingBetweenTime = res.data.funding_beetweenTime
        fundingObj.fundingIsStart = res.data.funding_isStart
        fundingObj.fundingBeforeStartDays = res.data.funding_beforeStartDays

        let funding_detail = JSON.stringify(fundingObj)
        // console.log("#res1",res)
        window.sessionStorage.setItem('funding_detail',funding_detail)

        this.postFunding()
      }).catch(error=> {
        console.log(error.message)
        console.log(error.message)
        // reServerSend()

      })

    },
    postFunding(){
      let data = JSON.parse(sessionStorage.getItem("funding_detail"));
      // console.log("data",data)

      this.rightInfo.productTitle = data.fundingName
      this.rightInfo.joinSupporter = data.fundingPeopleCount
      this.rightInfo.remainSuccessPercent =Math.floor((data.fundingCollectedMoney /data.fundingTargetMoney ) *100)
      this.rightInfo.productPrice = data.fundingTargetMoney
      this.rightInfo.assemblePrice = data.fundingCollectedMoney
      this.rightInfo.progressBarPercent = Math.floor((data.fundingCollectedMoney /data.fundingTargetMoney ) *100)
      this.rightInfo.productBrand = data.fundingProductBrand
      this.rightInfo.remainingPeriod = data.fundingBetweenTime+1

      var list = data.fundingImg
      // console.log("flist:",list)
      this.leftInfo.subImg=[]
      this.bodyInfo.premainImgUrl=[]

      for(var key in list){
        // console.log(`${key} : ${list[key]}`)
        if(list[key].includes('sub')){
          // console.log("sub",list[key])
          this.leftInfo.subImg.push(list[key])
          delete this.leftInfo.subImg[0]
        } else if (list[key].includes('thumb')) {
          this.leftInfo.prethumbUrl = list[key]
        }  else if (list[key].includes('main')) {
          this.bodyInfo.premainImgUrl.push(list[key])
        }
      }
      /*if(data.fundingIsStart == false){
        alert(data.fundingBeforeStartDays+1+"일 후에 펀딩이 시작됩니다")
      }*/
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
    joinFunding(){
      let mdata = JSON.parse(localStorage.getItem('login_member'));
      if(mdata == null){
        alert("로그인이 필요한 서비스입니다.")
        this.$router.push("/login",Header.methods.isLogin)
      }else{
        this.checkIfStartFunding()
      }
    },
    checkIfStartFunding(){
      let data = JSON.parse(sessionStorage.getItem("funding_detail"));
      if(data.fundingIsStart == false){
        alert(data.fundingBeforeStartDays+1+"일 후에 펀딩이 시작됩니다")
      }else{
        this.$router.push({name: 'FundingPayment', params:{fundingId: data.fundingId}})
      }
    },

  },
  // 페이지 사라지기전 세션에 저장한 펀딩 지우기
  beforeDestroy() {
    // this.transmitLike()
    window.sessionStorage.removeItem("funding_detail")
  },
  mounted() {
    this.bringFundingDetail()
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

@media screen and (max-width: 800px){
  .inner .container-content .content-head .head-detail {
    flex-direction: column;
  }
}


</style>