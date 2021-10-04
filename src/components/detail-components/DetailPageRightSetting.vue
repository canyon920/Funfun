<template>
  <!--          여기 동적 처리   상품 , 펀딩 , 펀딩작성     -->
  <div class="detail-right">
    <div class="right-content">
      <div class="content-top">
        <div class="title-revise">
          펀딩 제목을 입력해주세요
        </div>
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
        <!--      제목 입력기 여기까지 -->

<!--        이것들이 false 여야 등록가능하도록 로직 짜자       -->
        <div v-show="checkNullTitle" class="titleMaxCount" style="color: red">제목은 필수입니다.</div>
        <div v-show="checkAfterTitle" class="titleMaxCount" style="color: red">제목의 최대 글자수 45자를 넘었습니다.</div>
        <div v-show="checkDate" class="titleMaxCount" style="color: red">종료일이 시작일보다 빠를 수 없습니다.</div>
        <div v-show="checkDateEqual" class="titleMaxCount" style="color: red">펀딩을 할 수 있는 기간은 1일 이상입니다.</div>
        <div v-show="checkDateStartDay" class="titleMaxCount" style="color: red">펀딩 시작일은 오늘 이전일 수 없습니다.</div>
        <!--        false 여야 하는 것들 여기까지      -->

<!--    펀딩하기 클릭시    상품 id , 멤버 id , 제목 , 시작일 , 만료일 , 펀딩타입 넘기자 -->


      </div>
      <div class="price-box" style="font-size: 45px; text-align: end">
        {{ bringRightInfo.productPrice }} 원
      </div>
<!--    데이트 피커      -->
      <Date-picker @bringCheckNot="checkNotDateMethod" @bringCheckOk="checkOkDateMethod" @bringCheckEqual="checkEqualDateMethod"
                  @bringCheckStartDate="checkStartDateMethod" @bringRegistWork="registDateAsEmit"/>

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
          <div class="button-box funding-box" @click="workRegisterFunding">
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
    },
  },
  emits: [
    'rightEvent','changeD' , 'likeChange' , 'rightEventBack' , 'registFunding'
  ],

  data () {
    return{
      checkNullTitle: false,
      checkAfterTitle: false,
      checkDate: false,
      checkDateEqual: true,
      checkDateStartDay: false,
      //제목
      setTitle:{
        value: this.bringRightInfo.productTitle,
      },

    //  날짜
      dateSetting:{
        funding_create_time: "",
        funding_expired_time: ""
      },

    //  펀딩 등록을 위해 부모에게 넘겨줄 객체
      dataForFunding:{
        funding_title:'',
        funding_create_time:'',
        funding_expired_time:'',
        funding_target_money:''
      }
    }
  },
  methods:{
    //전송할 날짜 여기에 조건 이 충족되었다면 여기에 넣고 변화 시켜보자
    registDateAsEmit(dateAllOb) {
      console.log("일단 실행은된다")
      if (this.checkNullTitle === false && this.checkAfterTitle === false && this.checkDate === false &&
          this.checkDateEqual === false && this.checkDateStartDay === false) {
        this.dateSetting.funding_create_time = dateAllOb.startD.replaceAll("-","")
        this.dateSetting.funding_expired_time = dateAllOb.expireD.replaceAll("-", "")
        console.log("넘어온 시작날 : ", dateAllOb.startD)
        console.log("넘어온 종료날 : ", dateAllOb.expireD)
        console.log("담은 시작날 : ",this.dateSetting.funding_create_time)
        console.log("담은 종료날 : ",this.dateSetting.funding_expired_time)
      }
    },

    //펀딩 등록할 값들 넘겨 주기 위함
    workRegisterFunding() {
      if (this.checkNullTitle === false && this.checkAfterTitle === false && this.checkDate === false &&
          this.checkDateEqual === false && this.checkDateStartDay === false) {
        this.dataForFunding.funding_title = this.setTitle.value
        this.dataForFunding.funding_create_time = this.dateSetting.funding_create_time
        this.dataForFunding.funding_expired_time = this.dateSetting.funding_expired_time
        this.dataForFunding.funding_target_money = this.bringRightInfo.productPrice;
        this.$emit('registFunding', this.dataForFunding)
      }
    },


    //조건들 충족되었는지 확인
    checkNotDateMethod() {
      this.checkDateStartDay = false
      this.checkDateEqual = false
      this.checkDate = true
    },
    checkOkDateMethod() {
      this.checkDateStartDay = false
      this.checkDateEqual = false
      this.checkDate = false
    },
    checkEqualDateMethod() {
      this.checkDateStartDay = false
      this.checkDate = false
      this.checkDateEqual = true
    },
    checkStartDateMethod() {
      this.checkDate = false
      this.checkDateEqual = false
      this.checkDateStartDay = true
    }

  },
  computed:{
    //계산된 감시 붙임
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
    //계산된 감시를 감시
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
.inner .container-content .content-head {
 height: 580px;
}
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
  font-size: 15px;
  color: rgba(28, 27, 27, 0.6);
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
  border: 2px solid rgb(229, 114, 0);
  border-radius: 4px;
  padding: 15px 15px;
  cursor: pointer;
  margin-top: 50px;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-center .category-box:hover {
  background-color: rgba(229, 114, 0, .1);
  transition: .5s;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom .bottom-button .button-box {
  margin: 15px;
}



@media screen and (max-width: 800px){
  .inner .container-content .content-head {
    height: inherit;
  }
  .inner .container-content .content-head .head-detail .detail-right {
    width: 90vw;
  }
  .inner .container-content .content-head .head-detail .detail-right .right-content .content-bottom {
    position: inherit;
  }

}
</style>