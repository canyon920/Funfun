<template>
  <div class="find-password-div">
    <div :class="{deactive:showDeInputId}" class="input-id">
      <div class="text">
        아이디(이메일)를 입력해 주세요 :
      </div>
      <div class="input-field">
        <v-text-field
            v-model="submitId"
        ></v-text-field>
      </div>
      <div class="submit-id" @click="submitInfoId">
        확인
      </div>
    </div>
    <div :class="{active:showChoose, deactive:!showChoose}" class="choose">
      <div class="phone-select" @click="startPhone">
        전화번호로 인증
      </div>
      <div class="email-select" @click="startEmail">
        이메일로 인증
      </div>
      <v-progress-circular
          v-if="loading"
          size="24"
          color="rgb(229, 114, 0)"
          indeterminate />
    </div>
    <div :class="{active:showPhone, deactive:!showPhone}" class="phone-div">
      <Phone id="phone-container" :bring-hint="'*저장한 전화번호로 인증해 주세요.'" @birngMethodPhoneIn="phoneInputDataVal"/>
      <div class="phone-check-success-div" @click="passwordConfigStart">
        확인
      </div>
    </div>

    <div :class="{active:showEmail, deactive:!showEmail}" class="email-div">
      <div class="text">
        이메일로 받은 인증 코드를 입력해 주세요 :
      </div>
      <v-text-field
      v-model="eVerifyCode"
      ></v-text-field>
      <div class="submit-code" @click="submitVerifyCode">
        확인
      </div>
    </div>


    <div class="modify-div" :class="{active:showModify, deactive:!showModify}">
      <div class="password-pre">
        <v-text-field
            v-model="prePassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>
      </div>
      <div v-show="errorMustCheck1" class="error-font-color error-must-div">
        필수 항목 입니다.
      </div>
      <div class="password-check">
        <v-text-field
            v-model="checkPassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="Password-Check"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>
      </div>
      <div v-show="errorPasswordCheck1" class="error-font-color error-password-box">
        비밀번호가 같지 않습니다.
      </div>
      <div v-show="errorPasswordCheck2" class="error-font-color error-password-box">
        비밀번호는 영문 , 숫자 조합 8~12자 여야 합니다.
      </div>
      <div v-show="errorMustCheck2" class="error-font-color error-must-div">
        필수 항목 입니다.
      </div>
      <div class="submit-button-div" @click="submitFinal">
        변경하기
      </div>
    </div>
  </div>
</template>

<script>
import Phone from "@/components/login/Phone";
import axios from "axios";
export default {
  name: "FindPassword",
  components: {Phone},
  data() {
    return{
      showDeInputId: false,
      showChoose:false,
      showPhone:false,
      showModify:false,
      showEmail:false,


      submitPhoneNumber: '',
      submitId:'',
      prePassword:'',
      checkPassword:'',
      serverEVerifyCode:'',
      eVerifyCode:'',

      errorMustCheck1: false,
      errorMustCheck2: false,
      errorPasswordCheck1: false,
      errorPasswordCheck2: false,

      loading: false,
      show1:false,
    }
  },
  methods:{
    phoneInputDataVal(val) {
      // console.log("아래서 받은 폰넘버값 : ",val)
      this.submitPhoneNumber = val
      // console.log("제출할 폰넘버 : ",this.submitPhoneNumber)
    },
    async submitInfoId() {
      //아이디 인증 성공여부 로직 온뒤
      if (!this.submitId.trim()) {
        return false;
      }
      var form = new FormData()
      form.append("email",this.submitId)
      await axios.post("http://localhost:9090/api/find/id/from/email",form)
      .then(res=>{
        // console.log(res.data)
        if (this.submitId === res.data) {
          this.showDeInputId = true;
          this.showChoose = true;
        } else {
          return false
        }
      })
      .catch(error=>{
        console.log(error.message)
      })

    },
    startPhone() {
      this.showChoose = false
      this.showPhone = true
    },
    async startEmail() {
      if (!this.submitId.trim()) {
        return false
      }
      this.loading = true
      var form = new FormData()
      form.append("email", this.submitId)
      await axios.post("http://localhost:9090/api/message/email/send", form)
      .then(res=>{
        // console.log(res)
        this.serverEVerifyCode = res.data
        // console.log("받은 코드 : ",this.serverEVerifyCode)
        this.loading = false
        this.showChoose = false;
        this.showEmail = true
      })
      .catch(error=>{
        this.loading = false
        console.log(error.message)
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
      await axios.post("http://localhost:9090/api/message/verify/code",form)
          .then(res=>{
            // console.log(res)
            if (res.data === true) {
              this.showEmail = false
              this.showModify = true
            }
          })
          .catch(error=>{
            console.log(error.message)
          })
    },
    async passwordConfigStart() {
      if (!this.submitPhoneNumber.trim()) {
        return false;
      }
      var form = new FormData()
      form.append("email", this.submitId)
      form.append("phone", this.submitPhoneNumber)
      await axios.post("http://localhost:9090/api/find/id/from/emailandphone",form)
      .then(res=>{
        // console.log(res.data)
        if (res.data === true) {
          this.showPhone = false;
          this.showModify =true
        }
      })
      .catch(error=>{
        console.log(error.message)
      })
    },
    async submitFinal() {
      if (
          this.errorMustCheck1 === true &&
          this.errorMustCheck2 === true &&
          this.errorPasswordCheck1 === true &&
          this.errorPasswordCheck2 === true
      ) {
        return false;
      }
      var form = new FormData()
      form.append("email", this.submitId)
      form.append("password", this.checkPassword)
      await axios.post("http://localhost:9090/api/find/password/change", form)
      .then(()=>{
            this.$router.push("/login")

          }
      )
    }
  },
  watch:{
    prePassword() {
      if (this.prePassword) {
        this.errorMustCheck1 = false
      } else {
        this.errorMustCheck1 = true
      }
      if (this.prePassword.match(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/)) {
        this.errorPasswordCheck2 = false;
      } else {
        this.errorPasswordCheck2 = true;
      }
      if (this.checkPassword===this.prePassword) {
        this.errorPasswordCheck1 = false
      } else {
        this.errorPasswordCheck1 = true
      }
    },
    checkPassword() {
      if (this.checkPassword) {
        this.errorMustCheck2 = false
      }else {
        this.errorMustCheck2 = true
      }
      if (this.checkPassword===this.prePassword) {
        this.errorPasswordCheck1 = false
      } else {
        this.errorPasswordCheck1 = true
      }
    },
  }
}
</script>

<style scoped>

.error-font-color {
  color: red;
  font-size: 10px;
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

.email-div .text,
.find-password-div .input-id .text {
  font-weight: 700;
}
.submit-button-div,
.phone-div .phone-check-success-div {
  margin-top: 25px;
}
.email-div .submit-code,
.phone-div .phone-check-success-div,
.modify-div .submit-button-div,
.find-password-div .input-id .submit-id {
  text-align: center;
  border: 0.5px solid rgb(299,114,0);
  border-radius: 20px;
  cursor: pointer;
}

#phone-container {
  width: 350px;
}
.find-password-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 30%;
}
.find-password-div .choose {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.find-password-div .choose .phone-select,
.find-password-div .choose .email-select {
  border: 0.5px solid rgb(229,114,0);
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
}
.phone-select {
  margin-right: 10px;
}
.email-div .submit-code:hover,
.phone-div .phone-check-success-div:hover,
.modify-div .submit-button-div:hover,
.find-password-div .input-id .submit-id:hover,
.find-password-div .choose .phone-select:hover,
.find-password-div .choose .email-select:hover {
  background-color: rgba(229,114,0,.2);
  transition: .5s;
}

</style>