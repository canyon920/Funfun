<template>
  <div class="phone-div">
  <div class="join-phonenumber">
    <div class="phone-left">
      <v-text-field
          label="Phone: ex)01077778888"
          hint="*아이디 및 비밀번호 찾기에 활용됩니다."
          v-model="phoneNumber"
          persistent-hint
      ></v-text-field>
    </div>
    <div class="phone-right">
      <v-btn
          outlined
          rounded
          small
          class="giveme-button"
          @click="startPhoneVerify"
      >
        인증번호받기
      </v-btn>
    </div>
  </div>
  <div v-show="errorPhoneNumberCheck" class="error-font-color error-phone-number" style="margin-top: 22px">
    전화번호 입력예시를 확인해주세요
  </div>
  <div v-show="errorSendMsgToServer" class="error-font-color error-phone-number" style="margin-top: 22px">
    전화번호 인증서비스를 이용할 수 없습니다.
  </div>


  <div class="check-num-div" v-show="timerDiv">
    <div class="count-down-check-div">
      <div class="number-check-left">
        <v-text-field
            :label="computedTotalTIme"
            v-model="verifyNumber"
            persistent-hint
        ></v-text-field>
      </div>
      <div class="count-down-right-div">
        <v-btn
            outlined
            rounded
            small
            class="giveme-button"
            @click="checkVerifyNum"
        >
          확인
        </v-btn>
      </div>
    </div>
  </div>
  <div v-show="errorReturnNumberCheck" class="error-font-color error-verify-number">
    유효 시간이 경과되었습니다.
  </div>
  <div v-show="errorReturnNotVerify" class="error-font-color error-verify-number">
    유효하지 않은 인증번호 입니다.
  </div>
  <div v-show="phoneNumberSaveToServer" class="error-font-color error-verify-number">
    인증되었습니다.
  </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Phone",
  emit:[
      'birngMethodPhoneIn'
  ],
  data() {
    return{
      phoneNumber:'',
      //입력받은 넘버
      verifyNumber:'',
      //입력받아야하는 넘버
      verifyCode:'',

      timerDiv:false,
      errorPhoneNumberCheck:false,
      errorReturnNumberCheck:false,
      errorReturnNotVerify: false,
      errorSendMsgToServer: false,

      // 전화번호 인증 완료 된 경우 true ===> true 면 저장 false 면 null 로 저장
      phoneNumberSaveToServer: false,

      timer:null,
      totalTime:null,
    }
  },
  methods:{
      startTimer() {
        this.timerDiv = true
        this.totalTime = (1*60)
        this.timer = setInterval(() => {
          this.countdown()
        },1000)
      },
      countdown() {
        if (this.totalTime >= 1) {
          this.totalTime--
        } else {
          this.totalTime = 0
        }
      },
      padTime(time) {
        return (time < 10 ? '0' : '') + time
      },
      async startPhoneVerify() {
        console.log("그냥",this.phoneNumber)
        console.log("그냥",this.phoneNumber.toString().trim())
        console.log(this.verifyNumber.toString().trim())
        console.log(this.verifyCode.toString().trim())
        if (this.errorPhoneNumberCheck === false && this.phoneNumber.toString().trim().length !== 0) {
          this.errorPhoneNumberCheck = false
          this.verifyCode = Math.floor(((Math.random() * 10) * 9999));
          console.log("생성된 인증번호", this.verifyCode);
          let form = new FormData();
          form.append('phoneNum', this.phoneNumber);
          form.append('verifyNum', this.verifyCode);
          await axios.post("http://localhost:9090/api/message/phone/verify", form)
              .then(res => {
                console.log(res)
                this.errorSendMsgToServer = false
                this.startTimer()
              })
              .catch(error => {
                console.log(error)
                this.phoneNumberSaveToServer = false
                this.errorSendMsgToServer = true
                this.verifyCode = ''
                console.log("유효코드 초기화",this.verifyCode)
                return false
              });
        }
      },
      checkVerifyNum() {
        console.log("사용자가 입력한 인증번호 : ", this.verifyNumber)
        console.log("사용자에게 발급한 인증번호 : ", this.verifyCode)
        if (this.verifyNumber.toString().trim() === this.verifyCode.toString().trim()) {
          this.phoneNumberSaveToServer = true
          this.errorReturnNotVerify = false
          console.log("인증번호 비교 결과 통과되면 false",this.errorReturnNotVerify)
        } else {
          this.phoneNumberSaveToServer = false
          this.errorReturnNotVerify = true
          console.log("인증번호 비교 결과 실패하면 true",this.errorReturnNotVerify)
        }
      },
  },
  computed:{
    minutes() {
      let minutes = Math.floor(this.totalTime / 60)
      return this.padTime(minutes)
    },
    seconds() {
      let seconds = this.totalTime - (this.minutes * 60)
      return this.padTime(seconds)
    },
    computedTotalTIme() {
      return `${this.minutes}:${this.seconds}`
    },
  },
  watch: {
    computedTotalTIme() {
      if (this.computedTotalTIme === "00:00") {
        this.verifyCode = ''
        console.log("유효코드 초기화", this.verifyCode)
        if (this.phoneNumberSaveToServer === true) {
          return false
        }
        this.errorReturnNumberCheck = true;
      } else {
        this.errorReturnNumberCheck = false
      }
    },
    phoneNumber() {
      this.errorSendMsgToServer = false
      if (this.phoneNumber.includes("-") || this.phoneNumber.length !== 11 || this.phoneNumber.match(/^01(?:0|1|[6-9])(\\d{3}|\\d{4})(\\d{4})$/)) {
        this.errorPhoneNumberCheck = true
      }
      else {
        this.errorPhoneNumberCheck = false
      }
      if (this.phoneNumber.toString().trim().length === 0) {
        this.errorPhoneNumberCheck = false
        this.errorSendMsgToServer = false
      }
    },
    phoneNumberSaveToServer() {
      if (this.phoneNumberSaveToServer === true) {
        this.$emit('birngMethodPhoneIn',this.phoneNumber)
      }
      else if (this.phoneNumberSaveToServer === false) {
        this.$emit('birngMethodPhoneIn', null)
      }
    }
  }
}
</script>

<style scoped>
.error-font-color {
  color: red;
  font-size: 10px;
}
.error-font-color.error-verify-number {
  text-align: end;
  margin-top: 10px;
}
.join-phonenumber {
  display: flex;
  flex-direction: row;
  max-width: 450px;
  height: 50px;
}
.join-phonenumber .phone-left {
  width: 60%;
}
.join-phonenumber .phone-right {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  margin-top: 25px;
}
.check-num-div {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 15px;
}
.count-down-check-div {
  display: flex;
  flex-direction: row;
  max-width: 250px;
  height: 50px;
  justify-content: end;

}
.number-check-left {
  width: 70%;
}
.count-down-right-div {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  margin-top: 25px;
}
@media screen and (max-width: 800px){
  .error-font-color.error-phone-number {
    margin-top: 35px !important;
  }

}
</style>