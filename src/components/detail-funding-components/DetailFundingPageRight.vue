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
            20% 달성 시 참여 인원 수 공개 / 마지막 날 참여 인원 공개
          </div>
        </div>
      </div>
      <div class="price-box" style="font-size: 40px">
        {{ bringRightInfo.remainingPeriod }}일  남음
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
            {{ bringRightInfo.assemblePrice }} <span style="font-size: 20px; font-weight: 700">원 펀딩</span>
          </div>
        </div>

        <div class="join-support-div" >
          <div class="support-div" style="font-size: 35px" v-if="bringRightInfo.joinSupporter">
            {{ bringRightInfo.joinSupporter }} <span style="font-size: 20px; font-weight: 700">명의 서포터</span>
          </div>
          <div class="support-div" style="font-size: 35px" v-if="!bringRightInfo.joinSupporter">
            ? <span style="font-size: 20px; font-weight: 700">명의 서포터</span>
          </div>

          <div class="funding-button-div">
            <div class="my-2">
              <v-btn
                  color="error"
                  dark
                  x-large
                  class="giveme-button"
                  style="width: 300px"
              >
                😍 참여하기
              </v-btn>
            </div>
          </div>

        </div>

      </div>



      <div class="content-bottom">
        <div class="bottom-button">
          <div class="button-box like-box" >
            <!--                    이버튼에 클릭하면 icon 사라지도록                    -->
            <v-btn
                color="error"
                elevation="2"
                :icon="bringRightInfo.likeIcon"
                fab
                large
                tile
                class="like-button"
                @click="$emit('likeChange')"
            >
              <div class="like-button-box">
                <div class="like-love" style="font-size: 25px">
                  ❤
                </div>
                <div class="like-count" style="font-size: 10px">
                  {{ bringRightInfo.likeCount }}
                </div>
              </div>


            </v-btn>

          </div>


          <div class="button-box funding-box">
            <div class="my-2">
              <v-btn
                  color="error"
                  dark
                  x-large
                  @click="dialog2 = true"
                  class="funding-button"
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
          <v-btn
              color="rgb(229, 114, 0)"
              dark
              @click="dialog3 = !dialog3"
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
    'likeChange'
  ],

  data () {
    return{
      dialog2: false,
      isEditing: false,
      thisUrl: window.location.href,
    }
  },
  methods:{
    copyUrl() {
      this.isEditing = !this.isEditing
      let selectUrl = document.getElementById("fundingThisPageUrl")
      selectUrl.select()
      document.execCommand("copy");
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

/*top - right*/
.inner .container-content .content-head .head-detail .detail-right {
  width: 50%;
  position: relative;
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
  margin-top: 4%;

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
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .funding-button-div {
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
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button .button-box {
  margin: 15px;
}

</style>