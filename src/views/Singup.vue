<template>
  <div class="signup">
    <div class="content-signup">
      <div class="img-signup">
        <div class="loginimg-join">
          <v-img max-height="60"
                 max-width="140" src="@/assets/login/signup.png"></v-img>
        </div>
      </div>

      <div class="form-signup-content">
        <div class="for.content">
          <div class="join-email">
            <div class="join-email-left">
              <v-text-field
                  label="Your email"
                  v-model="email"
                  persistent-hint
                  :suffix="select"
              ></v-text-field>
            </div>
            <div class="join-email-right">
              <v-col cols="12">
                <v-combobox
                    v-model="select"
                    :items="items"
                    label="Select Your Email-Site"
                    outlined
                ></v-combobox>
              </v-col>
            </div>
          </div>

          <div v-show="errorEmailCheck1" class="error-font-color error-email-box">
            이미 가입되어 있는 이메일 입니다.
          </div>
          <div v-show="errorEmailCheck2" class="error-font-color error-email-box">
            이메일 양식이 아닙니다.
          </div>
          <div v-show="errorMustCheck1" class="error-font-color error-must-div">
            필수 항목 입니다.
          </div>

          <div class="join-nicname">
            <v-text-field
                label="Your Nick-Name"
                hint="ex) 폭풍간지"
                v-model="nicname"
                persistent-hint
            ></v-text-field>
          </div>
          <div v-show="errorMustCheck2" class="error-font-color error-must-div">
            필수 항목 입니다.
          </div>
          <div class="password-pre">
            <v-text-field
                v-model="prePassword"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                counter
                @click:append="show1 = !show1"
            ></v-text-field>
          </div>
          <div v-show="errorMustCheck3" class="error-font-color error-must-div">
            필수 항목 입니다.
          </div>
          <div class="password-check">
            <v-text-field
                v-model="checkPassword"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
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
          <div v-show="errorMustCheck4" class="error-font-color error-must-div">
            필수 항목 입니다.
          </div>
        </div>
        <div class="join-phonenumber">
          <div class="phone-left">
            <v-text-field
                label="ex)1077778888"
                hint="*아이디 및 비밀번호 찾기에 활용됩니다."
                v-model="phoneNumber"
                persistent-hint
                prefix="+82)"
            ></v-text-field>
          </div>
          <div class="phone-right">
            <v-btn
                outlined
                rounded
                small
                class="giveme-button"
                @click="startTimer"
            >
              인증번호받기
            </v-btn>
          </div>
        </div>
        <div v-show="errorPhoneNumberCheck" class="error-font-color error-phone-number">
          전화번호 입력예시를 확인해주세요
        </div>

        <div class="check-num-div" v-show="timerDiv">
          <div class="count-down-check-div">
            <div class="number-check-left">
              <v-text-field
                  :label="computedTotalTIme"
                  v-model="phoneNumber"
                  persistent-hint
                  prefix="+82)"
              ></v-text-field>
            </div>
            <div class="count-down-right-div">
              <v-btn
                  outlined
                  rounded
                  small
                  class="giveme-button"

              >
                확인
              </v-btn>
            </div>
          </div>
        </div>
        <div v-show="errorReturnNumberCheck" class="error-font-color error-verify-number">
          유효하지 않은 인증번호 입니다.
        </div>

        <div class="bottom-content">
          <router-link to="/funlogin" style="text-decoration: none">
            <div class="submit-button">
              <v-btn
                  color="error"
                  x-large
                  class="giveme-button"
              >
                뒤로가기
              </v-btn>
            </div>
          </router-link>

          <div class="submit-cancel">
            <v-btn
                color="error"
                x-large
                class="giveme-button"
                @click="submitJoin"
            >
              가입하기
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Singup",
  data(){
    return{
      email:'',
      nicname:'',
      prePassword:'',
      checkPassword:'',
      phoneNumber:'',


      errorEmailCheck1: false,
      errorEmailCheck2: false,
      errorPasswordCheck1: false,
      errorPasswordCheck2: false,
      errorPhoneNumberCheck: false,
      errorMustCheck1: false,
      errorMustCheck2: false,
      errorMustCheck3: false,
      errorMustCheck4: false,
      timerDiv:false,
      errorReturnNumberCheck:false,

      select: '@example.com',
      items: [
        '@kakao.com',
        '@gamil.com',
        '@naver.com',
        '직접입력'
      ],
      show1:false,

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

    checkJoinEmail() {
      //  axios 로 이메일 중복 체크해서 errorEmailCheck true or false
    },
    submitJoin() {
      if (!this.email) {
        this.errorMustCheck1 = true
      }else if (!this.nicname) {
        this.errorMustCheck2 = true
      }else if (!this.prePassword) {
        this.errorMustCheck3 = true
      }else if (!this.checkPassword) {
        this.errorMustCheck4 = true;
      } else {
        this.errorMustCheck1 = false
        this.errorMustCheck2 = false
        this.errorMustCheck3 = false
        this.errorMustCheck4 = false
      }
    }
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
  watch:{
    computedTotalTIme() {
      if (this.computedTotalTIme === "00:00") {
        this.errorReturnNumberCheck = true;
      } else {
        this.errorReturnNumberCheck = false
      }
    },
    select() {
      if (this.select === '직접입력') {
        this.select = ''
      }
      if (this.select.match(/^@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i)) {
        this.errorEmailCheck2 = false
      } else {
        this.errorEmailCheck2 = true
      }
    },
    prePassword() {
      if (this.prePassword.match(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/)) {
        this.errorPasswordCheck2 = false
      } else {
        this.errorPasswordCheck2 = true
      }
      if (this.checkPassword===this.prePassword) {
        this.errorPasswordCheck1 = false
      } else {
        this.errorPasswordCheck1 = true
      }
    },
    checkPassword() {
      if (this.checkPassword===this.prePassword) {
        this.errorPasswordCheck1 = false
      } else {
        this.errorPasswordCheck1 = true
      }
    },
    phoneNumber() {
      if (this.phoneNumber.includes("-") || this.phoneNumber.length !== 11) {
        this.errorPhoneNumberCheck = true
      } else {
        this.errorPhoneNumberCheck = false
      }
    }
  }
}
</script>

<style scoped>
.error-font-color.error-verify-number {
  text-align: end;
  margin-top: 10px;
}
.error-font-color {
  color: red;
  font-size: 10px;
}
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup .content-signup {
  margin-top: 25px;
  margin-bottom: 50px;

}
.signup .content-signup .img-signup {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.signup .content-signup .form-signup-content {
  border: 0.5px solid rgb(229, 114, 0);
  padding: 20px;
  margin: 20px;
  height: 600px;
}
.signup .content-signup .form-signup-content .join-email {
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 50px;
}
.signup .content-signup .form-signup-content .join-email .join-email-left {
  width: 60%;
}
.signup .content-signup .form-signup-content .join-email .join-email-right {
  width: 40%;
}

.signup .content-signup .form-signup-content .join-phonenumber {
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 50px;
}
.signup .content-signup .form-signup-content .join-phonenumber .phone-left {
  width: 60%;
}
.signup .content-signup .form-signup-content .join-phonenumber .phone-right {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  margin-top: 25px;
}
.signup .content-signup .form-signup-content .check-num-div {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 15px;
}
.signup .content-signup .form-signup-content .check-num-div .count-down-check-div {
  display: flex;
  flex-direction: row;
  width: 250px;
  height: 50px;
  justify-content: end;

}
.signup .content-signup .form-signup-content .check-num-div .count-down-check-div .number-check-left {
  width: 70%;
}
.signup .content-signup .form-signup-content .check-num-div .count-down-check-div .count-down-right-div {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  margin-top: 25px;
}
.signup .content-signup .form-signup-content .bottom-content {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-top: 50px;
}
.signup .content-signup .form-signup-content .submit-cancel {
  margin-left: 25px;
}
</style>