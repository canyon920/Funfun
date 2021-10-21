<template>
  <div class="inner">
    <div class="container-content">
      <div class="content-head">
        <div class="head-detail">
          <!--          여기 썸네일과 서브 이미지 넘겨줘야함 총 4개        -->
          <Detail-page-left  :bringLeftInfo="leftInfo" @bringsub01Click="sub01Click" @bringsub02Click="sub02Click" @bringsub03Click="sub03Click" @bringsub04Click="sub04Click"
                             @bringError1="errorImg1"/>
          <!--          여기 동적 처리   상품 내용 보여줌        -->
          <Detail-page-right v-show="productView" @rightEvent="changeRight" @likeChange="likeWork"  @presentMyself="goPresent" :bringRightInfo="rightInfo" :class="{active:productView}"/>
          <!--          여기 펀딩 등록 위한 것들 보여줌          -->
          <Detail-page-right-setting v-if="settingView"  @rightEvent="changeRight" @rightEventBack="changeRightBack" @likeChange="likeWork" @registFunding="transmitFundingRegist" :bringRightInfo="rightInfo" :class="{active:settingView}"/>
        </div>
      </div>
      <!--      여기 동적 처리 바디 이미지 바디 상세이미지 넘겨줘야함      -->
      <Detail-page-body :bringBodyInfo="bodyInfo"/>
    </div>
  </div>
</template>

<script>
import DetailPageRight from "@/components/detail-components/DetailPageRight";
import DetailPageLeft from "@/components/detail-components/DetailPageLeft";
import DetailPageBody from "@/components/detail-components/DetailPageBody";
import DetailPageRightSetting from "@/components/detail-components/DetailPageRightSetting";
import axios from "axios";
import {productObj} from "../service/product";
import {reServerSend} from "../service/refreshForAccessToken";
import Header from "../components/layout/Header";

export default {
  name: "detail_page",
  components: {DetailPageBody, DetailPageLeft, DetailPageRight, DetailPageRightSetting},

  data() {
    return {
      detailData: '',
      productView: true,
      settingView: false,
      productId:'',

      leftInfo: {
        preforchangUrl:'',
        imgUrlList:[],
        prethumbUrl:require("@/assets/example-img/chunsicthum.png"),
        subImg:[
          require("@/assets/example-img/chunsicsub1.png"),
          require("@/assets/example-img/chunsicsub2.png"),
          require("@/assets/example-img/chunsicsub3.png")
        ],
        item:null,
      },

      // leftInfo:{
      //   // prethumbUrl:require("@/assets/example-img/chunsicthum.png"),
      //   // presubUrl01:require("@/assets/example-img/chunsicsub1.png"),
      //   // presubUrl02:require("@/assets/example-img/chunsicsub2.png"),
      //   // presubUrl03:require("@/assets/example-img/chunsicsub3.png"),
      //   // presubUrl04:require("@/assets/example-img/chunsicsub4.png"),
      // },

      rightInfo: {
        likeIcon: false,
        likeCount: 5,
        beforeLikeCount: 5,
        productTitle: '"언텍트 시대" 춘식이와 라이언의 사랑이야기',
        productBrand: '카카오프렌즈',
        productPrice: 36900,
        fundingCount: 3333,
        categoryId: 1,
      },

      bodyInfo: {
        preforchangMainUrl: "",
        premainImgUrl: [require("@/assets/example-img/chunsic.png")],

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

    async bringProductDetailInfo(){
      var bringRouteProductId = this.$route.params.productId
      let form = new FormData();
      form.append('product_id',bringRouteProductId)
      /*let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          Authorization : `Bearer ${access_token}`
        }
      }*/
      axios.post("http://localhost:9090/product/productDetail",form)

          .then(res =>{

            this.leftInfo.subImg = []

            productObj.productId = res.data.product_id
            productObj.productName = res.data.product_name
            productObj.productBrand = res.data.product_brand
            productObj.productPrice = res.data.product_price
            productObj.productFundingCount = res.data.funding_count
            productObj.productLikeCount = res.data.product_like_count
            productObj.productImg = res.data.productImg
            productObj.productCategory = res.data.product_categoryId
            productObj.productLikeList = res.data.product_like_list



            let product_detail = JSON.stringify(productObj)
            console.log('#res',res)
            window.sessionStorage.setItem('product_detail',product_detail)

            this.postDetail()
            this.handleLike()

          }).catch(e=>{
        // console.log("Status 코드 : ",e.response.status)
        console.log(e)
        // reServerSend()
        this.postDetail()
      })

    },
    handleLike(){
      let datas = JSON.parse(sessionStorage.getItem("product_detail"));
      // console.log("datas",datas)
      let mdata = JSON.parse(localStorage.getItem("login_member"));
      // console.log("mdata",mdata)
      var likelist = datas.productLikeList
      console.log("likelist",likelist)

      for(var key in likelist){
        if(likelist[key].includes(mdata.memberEmail)){
          console.log("나다",mdata.memberEmail)
          this.rightInfo.likeIcon = true
        }
      }
    },
    handleLike2(){
      let datas = JSON.parse(sessionStorage.getItem("product_detail"));
      // console.log("datas",datas)
      let mdata = JSON.parse(localStorage.getItem("login_member"));
      // console.log("mdata",mdata)
      var likelist = datas.productLikeList
      console.log("likelist",likelist)

      for(var key in likelist){
        if(likelist[key].includes(mdata.memberEmail)){
          var index = likelist.indexOf(mdata.memberEmail);
          likelist.splice(index, 1);
          this.rightInfo.likeIcon = false
        }
      }
    },
    postDetail(){
      let datas = JSON.parse(sessionStorage.getItem("product_detail"));
      // console.log("datas",datas)

      this.rightInfo.productTitle = datas.productName
      this.rightInfo.productId =datas.productId
      this.rightInfo.productBrand = datas.productBrand
      this.rightInfo.productPrice = datas.productPrice
      this.rightInfo.fundingCount = datas.productFundingCount
      this.rightInfo.beforeLikeCount = datas.productLikeCount
      this.rightInfo.likeCount = datas.productLikeCount
      this.rightInfo.categoryId = datas.productCategory

      // console.log('#img',res.data.productImg[1])

      var list = datas.productImg
      console.log("list",list)
      console.log("list[0]",list[0])
      this.leftInfo.subImg = []
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
      console.log("sub",this.leftInfo.subImg)
      console.log("main",this.bodyInfo.premainImgUrl)

    },
    goPresent(){
      console.log("클릭함")
      let pdata = JSON.parse(sessionStorage.getItem("product_detail"));
      console.log("#pdata",pdata);
      this.$router.push({name: 'BuyPayment', params:{productId: pdata.productId}})
    },

    // 상단 오른쪽 부분 바뀌도록 하는 메소드들
    changeRight() {
      const data = JSON.parse(localStorage.getItem('login_member'));
      if(data != null){
        this.productView = false
        this.settingView = true
      }else{
        alert("로그인이 필요한 서비스입니다.")
        this.$router.push("/login",Header.methods.isLogin)
      }
    },
    changeRightBack() {
      this.settingView = false
      this.productView = true
    },
    likeWork() {
      const data = JSON.parse(localStorage.getItem('login_member'));
      if(data != null) {
        if (this.rightInfo.likeIcon == false) {
          this.rightInfo.likeCount++
          this.rightInfo.likeIcon = true
        } else {
          this.rightInfo.likeCount--
          this.rightInfo.likeIcon = false
        }
      }else{
        alert("로그인이 필요한 서비스입니다.")
        this.$router.push("/login",Header.methods.isLogin)
      }
    },

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

    // bodyMethods
    // mainChangeImg1() {
    //   this.bodyInfo.preforchangMainUrl = this.bodyInfo.premainImgUrl
    // },
    // mainChangeImg2() {
    //   this.bodyInfo.preforchangMainUrl = this.bodyInfo.predetailImgUrl
    // },

    // 좋아요 전송 axios ( 좋아요 수 넘어나는 것은 확인 store 에서 토큰꺼내 보내는 작업 필요
    // 생각해보니 수로 넘기면 사용자간 충돌 일어날 수 있으니 tru false로 넘겨서 백에서 true 면은  증가시키는게 좋을듯
    async transmitLike() {
      if (this.rightInfo.beforeLikeCount < this.rightInfo.likeCount) {
        console.log("라이크 수 : ", this.rightInfo.likeCount, typeof this.rightInfo.likeCount);
        this.rightInfo.likeIcon = true
        console.log("true",this.rightInfo.likeIcon)

      }else if(this.rightInfo.beforeLikeCount > this.rightInfo.likeCount){
        console.log("라이크 수 : ", this.rightInfo.likeCount, typeof this.rightInfo.likeCount);
        this.rightInfo.likeIcon = false
        console.log("false",this.rightInfo.likeIcon)
        this.handleLike2()
      }
      let access_token = window.sessionStorage.getItem('access_token')
        let config = {
          headers:{
            'Content-Type': 'application/json',
            Authorization : `Bearer ${access_token}`,
          }
        }
      let productIdFromStorage = JSON.parse(sessionStorage.getItem("product_detail"));
      const mdata = JSON.parse(localStorage.getItem("login_member"));
      if (!mdata) {
        return false
      }
        let memberIdFromStorage = mdata.memberId;

        let form = new FormData()

        form.append("like_up", this.rightInfo.likeIcon)
        form.append("member_id",memberIdFromStorage)
        form.append("product_id",productIdFromStorage.productId)
      console.log("아이디를 못담는건가?3?????"+productIdFromStorage.productId)

      await axios.post("http://localhost:9090/product/like/update",form,config)
            .then(res => {
              console.log(res)
            }).catch(e =>{
              console.log("s",e.response.status)
              console.log("e",e.response)
              if (e.response.status===403) {
                reServerSend();
                this.transmitLike();
              }
            })
    },

    // 펀딩하기 누르면 전송될 값들 axios <!-- 상품 id(상위 컴포넌트서 받아야함) , 멤버 id(store 에서 꺼내자) , 제목 , 시작일 , 만료일 , 목표금액 , 펀딩타입(이거는 컨트롤러서?) 넘기자 -->
// ---> 리스펀스로 저장이되었다면 펀딩 아이디를 받아서 라우터 파람으로 다음페이지 넘어가도록 해야할듯
    async transmitFundingRegist(data) {
      console.log("하위 컴포넌트로 넘어온 값 : ", data)
      console.log("값 주워담기 전 : ", this.transeDataForFunding)
      const mdata = JSON.parse(localStorage.getItem("login_member"));
      var bringRouteProductId = this.$route.params.productId
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization : `Bearer ${access_token}`,
        }
      }
      const funding = {
        "member_id": mdata.memberId,
        "product_id":  bringRouteProductId,
        "funding_title": data.funding_title,
        "funding_create_time": data.funding_create_time+" 00:00",
        "funding_expired_time": data.funding_expired_time+" 00:00",
        "funding_target_money": this.rightInfo.productPrice,
        "funding_type":"FUNDING",
        "funding_collected_money":0
      };

      await axios.post("http://localhost:9090/funding/create",funding,config)
          .then(res => {
            if (res.status === 200) {
              // 응답 코드가 OK 이면 이동할 곳 ( 펀딩 상세페이지로 )
              this.$router.push({name: 'DetailFundingPage', params:{fundingId: res.data}})
            }
          }).catch(error=>{
            console.log("error code",error.response.status)
            console.log("error res",error.response)
            if (error.response.status===403) {
                reServerSend();
                this.transmitFundingRegist(data)
            }
            console.log("세션이 모두 만료되었습니다. 로그인을 다시 해 주세요")
            this.$router.push("/login",Header.methods.isLogin)
          })
    },
    errorImg1() {
      console.log("썸네일에러")
      this.leftInfo.prethumbUrl = require("@/assets/example-img/chunsicthum.png")
      this.leftInfo.subImg[0] = require("@/assets/example-img/chunsicsub1.png")
      this.leftInfo.subImg[1] = require("@/assets/example-img/chunsicsub2.png")
      this.leftInfo.subImg[2] = require("@/assets/example-img/chunsicsub3.png")
      this.bodyInfo.premainImgUrl = []
      this.bodyInfo.premainImgUrl[0] = require("@/assets/example-img/chunsic.png")
    },
  },
  mounted() {
    this.bringProductDetailInfo()
  },

  // 페이지 사라지기전 라이크수 전송
  beforeDestroy() {
    this.transmitLike()
    window.sessionStorage.removeItem("product_detail")
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
.inner .container-content .content-head {
  height: 580px;
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
  flex-wrap: wrap;

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

.active {
  animation: activeY 1s;
}

@keyframes activeY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 800px){
  .inner .container-content .content-head {
    height: inherit;
  }
  .inner .container-content .content-head .head-detail {
    flex-direction: column;
  }
}


</style>