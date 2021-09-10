<template>
  <!--          여기 동적 처리   상품 , 펀딩 , 펀딩작성     -->
  <div class="detail-right">
    <div class="right-content">
      <div class="content-top">
        <!--      제목 입력기        -->
        <v-container fluid >
        <v-textarea
            clearable
            counter
            :rules="setTitle.rules"
            :value="setTitle.value"
            v-model="setTitle.value"
            auto-grow
            style="font-size: 26px;"
        >
        </v-textarea>
        </v-container>
        <div v-if="checkNullTitle" class="titleMaxCount" style="color: red">제목은 필수입니다.</div>
        <div v-if="checkAfterTitle" class="titleMaxCount" style="color: red">제목의 최대 글자수 45자를 넘었습니다.</div>
        <div v-if="checkDate" class="titleMaxCount" style="color: red">종료일이 시작일보다 빠를 수 없습니다.</div>
        <div v-if="checkDateEqual" class="titleMaxCount" style="color: red">펀딩을 할 수 있는 기간은 1일 이상입니다.</div>
        <!--      제목 입력기 여기까지 -->

      </div>
      <div class="price-box" style="font-size: 45px; text-align: end">
        {{ bringRightInfo.productPrice }} 원
      </div>

      <DatePicker :bringDateData="checkDate" @bringCheckNot="checkNotDateMethod" @bringCheckOk="checkOkDateMethod" @bringCheckEqual="checkEqualDateMethod"/>

      <div class="content-bottom">
        <div class="bottom-button">
          <div class="button-box giveme-box" @click="$emit('rightEventBack')">
            <div class="my-2">
              <v-btn
                  color="error"
                  dark
                  x-large
                  class="giveme-button"
              >
                취소하기
              </v-btn>
            </div>
          </div>
          <div class="button-box funding-box" @click="checkValandStartFunding">
            <div class="my-2">
              <v-btn
                  color="error"
                  dark
                  x-large
                  class="funding-button"
              >
                🎁펀딩하기
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DatePicker from "@/components/detail-components/DatePicker";
export default {
  name: "DetailPageRightSetting",
  components: {DatePicker},
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
    'rightEvent','changeD' , 'likeChange' , 'rightEventBack'
  ],

  data () {
    return{
      checkNullTitle: false,
      checkAfterTitle: false,
      checkDate: false,
      checkDateEqual: true,
      //제목
      setTitle:{
        value: this.bringRightInfo.productTitle,
      },

    //  날짜
      dateSetting:{
        startDate: '',
        expireDate: ''
      },
    }
  },
  methods:{

    async transmitLike() {
      await axios.post("http://localhost:9090/api/like/update",{
        params:{
          product_like_count: this.likeCount
        },
        // headers:{
        //   `Bearer `
        // }
      })
    },
    checkValandStartFunding() {
      // console.log(this.setTitle.value.length)
      // if (this.setTitle.value.length > 45 || (this.dateSetting.expireDate - this.dateSetting.startDate) < 0) {
      //   this.checkBeforeFunding = true
      //   return
      // }
    },
    checkNotDateMethod() {
      this.checkDateEqual = false
      this.checkDate = true
    },
    checkOkDateMethod() {
      this.checkDateEqual = false
      this.checkDate = false
    },
    checkEqualDateMethod() {
      this.checkDate = false
      this.checkDateEqual = true
    }

  },
  computed:{
    checkval(){
      try{
        return this.setTitle.value.length
      }catch (e){
        console.log(e.message)
        return false
      }
    }
  },
  watch:{
    checkval(){
      try{
        if (this.setTitle.value.length === 0) {
          this.checkAfterTitle = false;
          this.checkNullTitle = true
        }
        if (this.setTitle.value.length >= 1) {
          this.checkNullTitle = false;
          this.checkAfterTitle = false;
        }
        if (this.setTitle.value.length > 45) {
          this.checkAfterTitle = true;
        }
      }catch (e){
        this.checkAfterTitle = false;
        this.checkNullTitle = true
        console.log(e.message)
      }

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
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .brand-box {
  font-size: 12px;
  color: rgba(28, 27, 27, 0.6);
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .fundingcount-box {
  font-size: 15px;
  color: rgba(28, 27, 27, 0.6);
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-top .subtitle-box {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center {
  margin-top: 20px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 auto;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .category-box {
  font-size: 20px;
  text-align: center;
  border: 2px solid rgb(229 114 0);
  border-radius: 4px;
  padding: 15px 15px;
  cursor: pointer;
  margin-top: 50px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .category-box:hover {
  background-color: rgba(229, 114, 0, .1);
  transition: .2s;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button .button-box {
  margin: 15px;
}

/*뷰티파이 제목 입력란*/
/*textarea#input-22 {*/
/*  margin-top: 20px*/
/*}*/
/*.content-top .v-textarea textarea {*/
/*  line-height: .1rem;*/
/*  margin-top: 20px;*/
/*}*/
/*.content-top .v-input .v-label {*/
/*  height: 50px;*/
/*  line-height: 42px;*/
/*  font-size: 20px;*/

/*}*/
/*.v-input__slot .v-text-field__slot element.style {*/
/*  height: 80px !important;*/
/*}*/

</style>