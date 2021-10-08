<template>
  <div class = "first">
    <div class = "second">
      <div  v-if="give" class ="second-first" :class="{active:showModify, deactive:!showModify}">
        <div class = "second inner">
          <v-text-field
              label="이름"
              outlined
              dense
          ></v-text-field>
          <v-text-field
              label="계좌번호"
              outlined
              dense
          ></v-text-field>
          <v-btn
              class="ma-2"
              outlined
              style="color:rgb(229 114 0)"
          >
            확인
          </v-btn>
        </div>
      </div>
      <div  v-else-if="givepresent" class ="second-second" :class="{active:!showModify, deactive:showModify}">
        <v-text-field
            label="이름"
            outlined
            dense
        ></v-text-field>

        <v-text-field
            v-model.trim="submitAddress1"
            label="주소"
            outlined
            dense
        ></v-text-field>
        <!--            <div v-show="errorAddress1Check" class="error-text address1-error">-->
        <!--              주소를 입력해 주세요.-->
        <!--            </div>-->

        <div class="2">
          <v-text-field
              label="상세주소"
              v-model.trim="submitAddress2"
              outlined
              dense
          ></v-text-field>

        </div>
        <div v-show="checkAddress2" class="error-address2" style="color: red;font-size: 10px">
          상세 주소를 입력해 주세요.
        </div>
        <!--            <div v-show="errorAddress2Check" class="error-text address2-error">-->
        <!--              상세주소를 입력해 주세요.-->
        <!--            </div>-->

        <div class="div-3">
          <v-text-field
              label="우편주소"
              v-model.trim="submitAddress3"
              outlined
              dense
          >
          </v-text-field>
          <v-btn
              outlined
              rounded
              small
              @click="findAddr"
          >
            주소검색
          </v-btn>
        </div>

        <div class="phone-check-div">



          <Phone style="width: 100%; margin-bottom: 40px" :bring-hint="'수정을 원하시면 입력해 주세요.'" @birngMethodPhoneIn="phoneInputDataVal"/>



        </div>

        <v-btn
            class="ma-2"
            outlined
            style="color:rgb(229 114 0)"
        >
          확인
        </v-btn>
      </div>

      <div v-else class = "choose-button" :class="{deactive:showDeInputId}">
        <div class = "titlename" style=" font-size: 27px; font-weight: 700;">
          상품 수령방법 결정하기
        </div>
        <v-btn @click="onClickButton1()"
               class="ma-2"
               outlined
               style="color:rgb(229 114 0)"
        >
          계좌로 받기
        </v-btn>
        <v-btn @click="onClickButton2()"
               class="ma-2"
               outlined
               style="color:rgb(229 114 0)"
        >
          상품으로받기
        </v-btn>
      </div>
    </div>
    <div class="second-bottom">

    </div>
  </div>
</template>
<script>
import Phone from "@/components/login/Phone";


export default {
  name: 'Choose',
  components:{
    Phone
  },
  data(){
    return{
      give:false,
      givepresent:false,
      showDeInputId:false,
      showModify:false,
    }
  },
  methods:{
    onClickButton1(){
      this.give = true
      this.showDeInputId=true
      this.showModify = true
    },
    onClickButton2(){
      this.givepresent = true
      this.showDeInputId=true
      this.showModify = false
    }
  },


}

</script>

<style scoped>
.first{
  max-width:1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.first .second{
}
.second-second {
}
.titlename{
  margin-top: 50px;
  padding-bottom:30px;
}
.ma-2{
  border: 2px solid rgb(229 114 0);

}

.active {
  animation: show 1s;
  visibility: visible;
}
@keyframes show {
  from {
    transform: translateX(200px);
  }
  to {
    display: none;
  }
}
.deactive {
  animation: deShow 1s;
  visibility: hidden;
}
@keyframes deShow {
  from {
  }
  to {
    transform: translateX(-200px);
    opacity: 0;

  }
}
</style>