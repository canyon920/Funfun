<template>
  <div class = "first">
    <div class = "second">
      <div  v-if="give" class ="second-first" :class="{active:showModify, deactive:!showModify}">
        <div class = "second inner">
          <v-text-field
              label="이름"
              outlined
              dense
              v-model="name"
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
              @click="backURL"
          >
            뒤로가기
          </v-btn>
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
            v-model="name"
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
        <div v-show="checkAddress2" class="error-address2" style="color: red;font-size: 10px;margin-bottom: 10px">
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

        <div v-show="extraPrice" class = "second inner">
          <div style="color: red; font-size: 15px;margin: 5px">
            초과된 금액이 존재합니다.{{extraPrice}} 원
          </div>
          <v-text-field
              label="이름"
              outlined
              dense
              v-model="name"
          ></v-text-field>
          <v-text-field
              label="계좌번호"
              outlined
              dense
          ></v-text-field>
        </div>

        <v-btn
            class="ma-2"
            outlined
            style="color:rgb(229 114 0)"
            @click="backURL"
        >
          뒤로가기
        </v-btn>

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
import {isLoginMemberCheck} from "@/service/member-login";
import axios from "axios";
import {reServerSend} from "@/service/refreshForAccessToken";


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

      //전화번호
      submitPhoneNumber: '',

      //이름
      name:'',

      //주소
      submitAddress1: '',
      submitAddress2: '',
      submitAddress3: '',

      checkAddress2 : false,

      //초과된 금액 조회
      extraPrice:0
    }
  },
  methods:{
    computeExtraPrice() {
      this.extraPrice = this.$route.params.assemblePrice-this.$route.params.productPrice
      if (this.extraPrice <= 0) {
        this.extraPrice = 0;
      }
    },
    onClickButton1(){
      this.give = true
      this.showDeInputId=true
      this.showModify = true
    },
    onClickButton2(){
      this.givepresent = true
      this.showDeInputId=true
      this.showModify = false
    },
    backURL() {
      this.$router.go(0)
    },
    phoneInputDataVal(val) {
      console.log("아래서 받은 폰넘버값 : ",val)
      this.submitPhoneNumber = val
      console.log("제출할 폰넘버 : ",this.submitPhoneNumber)
    },
    findAddr() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          console.log(data)
          this.submitAddress1 = data.roadAddress
          this.submitAddress3 = data.zonecode
        }
      }).open()
    },
    async deliveryInfoSubmit() {
      if (this.submitAddress1) {
        if (!this.submitAddress2) {
          this.checkAddress2 = true
          return false
        }
      }
      let checkedPhone = this.savedPhoneNumber
      let checkedAddress1 = this.address
      let checkedAddress2 = this.address2
      let checkedAddress3 = this.address3
      if (this.submitPhoneNumber) {
        checkedPhone = this.submitPhoneNumber;
      }
      if (this.submitAddress1 && this.submitAddress2) {
        checkedAddress1 = this.submitAddress1
        checkedAddress2 = this.submitAddress2
        checkedAddress3 = this.submitAddress3
      }
      console.log(this.submitPhoneNumber);
      console.log(this.submitAddress1)
      console.log(this.submitAddress2)
      console.log(this.submitAddress3)
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization : `Bearer ${access_token}`,
        }
      }
      const submitEditMember={
        "member_id": this.memberId,
        "product_id": this.product_id,
        "productPaymentStatus" : "CHECKING",
        "nic_name" : this.name,
        "phone_number": checkedPhone,
        "city" : checkedAddress1,
        "street" : checkedAddress2,
        "zipcode" : checkedAddress3
      }
      await axios.post("http://localhost:9090/bring/member/edit/save", submitEditMember, config)
          .then(res=>{
            console.log(res.data)
            this.countTry=0
            if (res.data === true) {
              this.$router.push()
            }
          })
          .catch(error=>{
            console.log(error)
            // 여기 엑세스 만료시 세션으로 요청 로직 넣어주자@!!!!
            if (error.response.status===403) {
              this.countTry++
              if (this.countTry == 1) {
                reServerSend();
                this.memberInfoMapping()
              }
              console.log("다시 오류인것 확인 로그")
            }
          })




    }
  },
  mounted() {
    isLoginMemberCheck()
    this.computeExtraPrice()
  }


}

</script>

<style scoped>
.first{
  max-width:1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 10%;
}
.first .second{
}
.second-first {
  width: 600px;
}
.second-second {
  width: 600px;
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
@media screen and (max-width: 800px){
  .second-first {
    width: 300px;
  }
  .second-second {
    width: 300px;
  }
}
</style>