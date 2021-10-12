<template>
  <!--          여기 동적 처리   상품 , 펀딩 , 펀딩작성     -->
  <div class="detail-right">
    <div class="right-content">
      <div class="content-top">
        <div class="title-box">
          {{ bringRightInfo.productTitle }}
        </div>
        <div class="subtitle-box">
          <div class="brand-box">
            {{ bringRightInfo.productBrand }}
          </div>

          <div class="fundingcount-box">
            <div style="text-align: end">
              참여한 펀딩 금액은 공개되지 않습니다.
            </div>
            20% 달성 시 참여 인원 수 공개 / 만료되는 날 참여 인원 공개
          </div>
        </div>
      </div>
      <div class="price-box" style="font-size: 40px">
        <span style="font-size: 30px">목표</span> {{ bringRightInfo.productPrice }}
        <span style="font-size: 30px">원 /</span>
        {{ bringRightInfo.remainingPeriod }}
        <span style="font-size: 30px">일  남음</span>
      </div>





      <div class="content-center">

        <div class="progressBar-div">
          <div class="progressBar" :style="{width : bringRightInfo.progressBarPercent +'%'}">
            <!--            프로그래스 바            -->
          </div>
        </div>

        <div class="reaminpercent-div" style="font-size: 35px">
          {{ bringRightInfo.remainSuccessPercent }} <span style="font-size: 20px; font-weight: 700">% 달성</span>
        </div>

        <div class="assemble-price">
          <div class="price-div" style="font-size: 35px">
            {{ bringRightInfo.assemblePrice }} <span style="font-size: 20px; font-weight: 700">원 달성</span>
          </div>
        </div>

        <div class="join-support-div" >

          <div class="support-div" style="font-size: 35px">
            <span v-show="!fundingJoinCount">{{ bringRightInfo.joinSupporter }}</span> <span v-show="fundingJoinCount">?</span> <span style="font-size: 20px; font-weight: 700">명의 서포터</span>
          </div>



        </div>

      </div>



      <div class="content-bottom">
        <div v-show="completed" class="funding-button-div">
          <div class="my-2">
            <v-btn
                color="error"
                dark
                x-large
                class="giveme-button"
                style="width: 300px; margin-bottom: 50px"
                @click="completedFunding"
            >
              😘 지급받기
            </v-btn>
          </div>
        </div>
        <div v-show="!completed" class="funding-button-div">
          <div class="my-2">
            <v-btn
                color="error"
                dark
                x-large
                class="giveme-button"
                style="width: 300px"
                @click="$emit('payFunding')"
            >
              😍 참여하기
            </v-btn>
          </div>
        </div>
        <div class="bottom-button">

          <div v-show="!completed" class="button-box funding-box">
            <div class="my-2">
              <v-btn
                  color="error"
                  dark
                  x-large
                  @click="dialog2 = true"
                  class="funding-button-confirm"
                  style="width: 300px"
              >
                📢 주변에 조르기
             </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>


    <v-dialog
        v-model="dialog2"
        max-width="500px"
    >
      <v-card>
        <v-card-title>
          공유하기
        </v-card-title>
        <v-card-text>
<!--          카카오톡 공유하기 버튼은 카카오 로그인 사용자만 사용할 수 있도록 하자         -->
          <v-btn
              color="rgb(229, 114, 0)"
              dark
              @click="share"
              v-show="isKakaoUser"
          >
            카카오톡 공유하기
          </v-btn>
          <v-text-field
              class="text--disabled"
              v-bind:value="thisUrl"
              style="font-size: 20px"
              id="fundingThisPageUrl"
          >
            <v-icon
                slot="append"
                color="rgb(229, 114, 0)"
                @click="copyUrl"
                v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
            >
            </v-icon>
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
              color="rgb(229, 114, 0)"
              text
              @click="dialog2 = false"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>

export default {
  inheritAttrs: false,
  name: "DetailFundingPageRight",

  props:{
    showSelectData: {
      type: Boolean,
      default: false
    },
    bringRightInfo:{
      type: Object
    }
  },
  emits: [
    'likeChange','payFunding'
  ],

  data () {
    return{
      //펀딩 완료 여부
      completed: true,
      //
      fundingJoinCount:false,

      dialog2: false,
      isEditing: false,
      isKakaoUser: false,
      thisUrl: window.location.href,


    }
  },
  methods:{
    copyUrl() {
      this.isEditing = !this.isEditing
      let selectUrl = document.getElementById("fundingThisPageUrl")
      selectUrl.select()
      document.execCommand("copy");
    },
    isCompletedTrue() {
      if (this.bringRightInfo.remainingPeriod <= 0) {
        console.log("콘솔은 찍힌다.1")
        this.completed = true
      } else {
        this.completed = false
      }
    },
    isPercent20() {
      if (this.bringRightInfo.progressBarPercent <= 20) {
        console.log("콘솔은 찍힌다.2")
        this.fundingJoinCount = true
      } else {
        this.fundingJoinCount = false
      }
    },
    completedFunding(){
      this.$router.push("/choose")
    },
    // isFundingJoinMemberCount() {
    //   if (bringRightInfo.remainSuccessPercent >= 20) {
    //     this.fundingJoinCount =
    //   }
    // }
    checkKakao(){
      let mdata = JSON.parse(localStorage.getItem("login_member"))
      if (mdata === null) {
        return false;
      } else{
        if (mdata.memberApi == "Kakao") {
          // console.log("카카오로그인이다")
          this.isKakaoUser = true;
        } else {
          return false;
        }
      }
    },
    share(){
      let fdata = JSON.parse(sessionStorage.getItem("funding_detail"))
      console.log("fdata",fdata)
      var list = fdata.fundingImg
      for(var key in list){
        if(list[key].includes('thumb')){
          var imgUrl = list[key]
          console.log(imgUrl)
        }
      }

      window.Kakao.Link.sendDefault({

        objectType: 'feed',
        content: {
          title: fdata.fundingName,
          description: '목표금액 '+fdata.fundingTargetMoney+' '+(fdata.fundingBetweenTime+1)+'일 남았습니다',
          imageUrl: 'https://funfunbucket.s3.ap-northeast-2.amazonaws.com/finfinbucket-static/product/111/thumbnail1.jpg',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        /*social: {
          likeCount: 286,
          subscriberCount:fdata.fundingPeopleCount,
          sharedCount: 845,
        },*/
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },

        ],
      })
    }
  },
  mounted() {
    console.log("콘솔은 찍힌다.3")
    this.checkKakao()
    console.log("콘솔은 찍힌다.4")
    this.isCompletedTrue()
    console.log("콘솔은 찍힌다.5")
    this.isPercent20()
  },
}
</script>

<style scoped>

/*top - right*/
.inner .container-content .content-head .head-detail .detail-right {
  width: 50%;
  position: relative;
  max-width: 532px;

}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .title-box {
  font-size: 35px;
}

.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .subtitle-box {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .subtitle-box .brand-box {
  font-size: 12px;
  color: rgba(28, 27, 27, 0.6);
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .subtitle-box .fundingcount-box {
  align-items: start;
  font-size: 15px;
  color: rgba(28, 27, 27, 0.6);
  margin-top: 2%;

}

.inner .container-content .content-head .head-detail .detail-right .right-content .content-center {
  margin-top: 20px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .progressBar-div {
  display: block;
  height: 8px;
  width: 100%;
  background-color: rgba(229, 114, 0, .2);
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .progressBar-div .progressBar {
  height: 8px;
  background-color: rgb(229, 114, 0);
  /*width: 30%;*/
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .reaminpercent-div {
  margin-top: 20px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .assemble-price {
  margin-top: 20px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .join-support-div {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}


.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 auto;
}

.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .funding-button-confirm {


}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button .button-box {
  margin-bottom: 40px;
}

@media screen and (max-width: 800px){
  .inner .container-content .content-head .head-detail .detail-right {
    width: 90vw;
  }
  .inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom {
    position: inherit;
  }

}

</style>