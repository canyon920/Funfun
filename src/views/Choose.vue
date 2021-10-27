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
              v-model="account"
          ></v-text-field>
          <div v-show="errorFullInput" class="error-email-code" style="color: red; font-size: 12px">
            양식을 모두 채워주세요.
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
              @click="postaccount"
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
          <div v-show="errorInputPhone" style="color: red; font-size: 15px;margin: 5px">
          인증을 완료해 주세요.
        </div>
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
              v-model="account"
          ></v-text-field>
        </div>

        <div v-show="errorFullInput" class="error-email-code" style="color: red; font-size: 12px">
          양식을 모두 채워주세요.
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
            @click="deliveryInfoSubmit"
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


        <div class="email-check-div">
          <div class="email-header-div">
            <div class="text">
              ID 이메일로 인증해주세요.
            </div>
            <v-btn
                @click="startEmail"
                class="ma-2"
                outlined
                style="color:rgb(229 114 0)"
            >
              인증코드 전송
            </v-btn>
            <v-progress-circular
                v-if="isSendMail"
                size="24"
                color="rgb(229, 114, 0)"
                indeterminate />
          </div>
          <div class="email-body-div">
            <v-text-field
                v-model="eVerifyCode"
                label="인증코드"
            ></v-text-field>
            <v-btn
                @click="submitVerifyCode"
                class="ma-2"
                outlined
                style="color:rgb(229 114 0)"
            >
              확인
            </v-btn>
          </div>
          <div v-show="errorEmailCode" class="error-email-code" style="color: red; font-size: 12px">
            인증코드가 맞지 않습니다.
          </div>
        </div>


        <v-btn @click="onClickButton1()"
               class="ma-2"
               outlined
               :disabled="isNoaccount"
               style="color:rgb(229 114 0)"
        >
          계좌로 받기
        </v-btn>
        <v-btn @click="onClickButton2()"
               class="ma-2"
               outlined
               :disabled="isNoProduct"
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
import {getHeaders} from "@/service/header";


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
      //계좌번호
      account:'',
      // 이름과 계좌번호 입력안하면 에러
      errorFullInput : false,

      //주소
      submitAddress1: '',
      submitAddress2: '',
      submitAddress3: '',

      checkAddress2 : false,

      //초과된 금액 조회
      extraPrice:0,
      //이메일 인증이 되어야 열리며, 금액을 못채우면 상품으로는 받을 수 없도록 상품받기
      isNoProduct:true,
      // 이메일 인증이 되어야 열리는 계좌받기
      isNoaccount: true,
      serverEVerifyCode:'',
      eVerifyCode:'',
      // 메일 전송 버튼
      isSendMail: false,
      // 인증코드 에러
      errorEmailCode : false,

      //전화번호 인증 완료해야함
      errorInputPhone : false,

      // 상품으로 받을시 변수가 많아 객체로 넘기자
      transObjectPayment:{
        funding_id:0,
        excess_cost:0,
        account: '',
        phone_number: '',
        real_name: '',
        city: '',
        street: '',
        zipcode: ''
      },
      countTry:0,
    }
  },
  methods:{
    // computeExtraPrice() {
    //   this.extraPrice = this.$route.params.assemblePrice-this.$route.params.productPrice
    //   if (this.extraPrice < 0) {
    //     this.isNoProduct = true
    //   }
    // },
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
      // console.log("아래서 받은 폰넘버값 : ",val)
      this.submitPhoneNumber = val
      // console.log("제출할 폰넘버 : ",this.submitPhoneNumber)
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
      if (!this.name || !this.submitAddress1 || !this.submitAddress2 || !this.submitAddress3 || !this.submitPhoneNumber) {
        this.errorFullInput = true
        return false
      }
      if (this.submitAddress1) {
        if (!this.submitAddress2) {
          this.checkAddress2 = true
          return false
        } else {
          this.checkAddress2 = false
        }
      }

      if (!this.submitPhoneNumber) {
        this.errorInputPhone = true
        return false
      } else {
        this.errorInputPhone = false
      }

      if (this.extraPrice) {
        if (this.name.trim().toString().length == 0 || this.account.trim().toString().length == 0) {
          this.errorFullInput = true;
          return false;
        } else {
          this.errorFullInput = false;
        }
        this.transObjectPayment.excess_cost = this.extraPrice
        this.transObjectPayment.real_name = this.name
        this.transObjectPayment.account = this.account
      }

      this.transObjectPayment.funding_id = this.$route.params.fundingId
      this.transObjectPayment.phone_number = this.submitPhoneNumber
      this.transObjectPayment.city = this.submitAddress1
      this.transObjectPayment.street = this.submitAddress2
      this.transObjectPayment.zipcode = this.submitAddress3

      let form = JSON.stringify(this.transObjectPayment)
      let config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization : `Bearer ${window.sessionStorage.getItem("access_token")}`,
        }
      }
      await axios.post("http://192.168.0.165:9090/post/payment/delivery", form, config)
          .then(res=>{
            this.countTry=0
            if (res.data === true) {
              this.$router.push(`/purchaselist/${JSON.parse(window.localStorage.getItem("login_member")).memberId}`);
            } else {
              console.log("이미 펀딩은 지급과정 중입니다.")
            }
          })
          .catch(error=>{
            console.log(error.message)
            // 여기 엑세스 만료시 세션으로 요청 로직 넣어주자@!!!!
            if (error.response.status===403) {
              this.countTry++
              if (this.countTry == 1) {
                reServerSend();
                this.deliveryInfoSubmit()
              }
              console.log("다시 오류인것 확인 로그")
            } else if (error.response.status === 408) {
              console.log("이미 펀딩은 지급과정 중입니다.")
            }
          })
    },
    async startEmail() {
      this.isSendMail = true
      let member = JSON.parse(window.localStorage.getItem("login_member"))
      this.loading = true
      var form = new FormData()
      form.append("email", member.memberEmail)
      await axios.post("http://192.168.0.165:9090/api/message/email/send", form)
          .then(res=>{
            this.countTry = 0
            this.isSendMail = false
            console.log(res)
            this.serverEVerifyCode = res.data
            console.log("받은 코드 : ",this.serverEVerifyCode)
          })
          .catch(error=>{
            this.isSendMail = false
            console.log(error)
            if (error.response.status===403) {
              this.countTry++
              if (this.countTry == 1) {
                reServerSend();
                this.startEmail()
              }
              console.log("다시 오류인것 확인 로그")
            }
            return false
          })
    },
    async submitVerifyCode() {
      if (!this.eVerifyCode.trim()) {
        return false
      }
      var form = new FormData();
      form.append("issuerCode", this.serverEVerifyCode)
      form.append("inputCode",this.eVerifyCode)
      await axios.post("http://192.168.0.165:9090/api/message/verify/code",form)
          .then(res=>{
            console.log(res)
            if (res.data === true) {
              this.countTry = 0
              this.errorEmailCode = false

              this.showModify = true
              this.extraPrice = this.$route.params.assemblePrice-this.$route.params.productPrice
              if (this.extraPrice < 0) {
                this.isNoProduct = true;
              } else {
                this.isNoProduct = false;
              }
              this.isNoaccount = false;
            }
          })
          .catch(error=>{
            console.log(error)
            if (error.response.status === 403) {
              this.countTry++;
              if (this.countTry == 1) {
                reServerSend();
                this.submitVerifyCode()
              }
              console.log("다시 오류인것 확인 로그");
            } else {
              this.errorEmailCode = true;
            }
          })
    },
    async postaccount() {
      if (this.name.trim().toString().length == 0 || this.account.trim().toString().length == 0) {
        this.errorFullInput = true
        return false
      }
      let form = new FormData();
      form.append("funding_id",this.$route.params.fundingId)
      form.append("real_name", this.name)
      form.append("acount", this.account)
      await axios.post("http://192.168.0.165:9090/post/payment/account",form,getHeaders())
      .then(res=>{
        this.countTry = 0;
        console.log(res.data)
        if (res.data == true) {
          this.$router.push(`/purchaselist/${JSON.parse(window.localStorage.getItem("login_member")).memberId}`)
        }

      })
      .catch(error=>{
        console.log(error)
        if (error.response.status === 403) {
          this.countTry++;
          if (this.countTry == 1) {
            reServerSend();
            this.postaccount()
          }
          console.log("다시 오류인것 확인 로그");
        }else if (error.response.status === 408) {
            console.log("이미 펀딩은 지급과정 중입니다.")
        }
      })
    }
  },
  mounted() {
    isLoginMemberCheck()
    // this.computeExtraPrice()
  }


}

</script>

<style scoped>
.email-body-div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.email-header-div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
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