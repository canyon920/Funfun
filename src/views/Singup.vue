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

        <Phone :bring-hint="'*아이디 및 비밀번호 찾기에 활용됩니다.'" @birngMethodPhoneIn="phoneInputDataVal"/>



        <div class="bottom-content">
          <router-link to="/login" style="text-decoration: none">
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
                @click="startJoinProcess"
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

import Phone from "@/components/login/Phone";
import axios from "axios";
import {bringFunTokens, memberObj} from "@/service/member-login";

export default {
  name: "Singup",
  components: {Phone},
  data(){
    return{
      email:'',
      nicname:'',
      prePassword:'',
      checkPassword:'',
      submitPhoneNumber:'',



      errorEmailCheck1: false,
      errorEmailCheck2: false,
      errorPasswordCheck1: false,
      errorPasswordCheck2: false,
      errorPhoneNumberCheck: false,
      errorMustCheck1: false,
      errorMustCheck2: false,
      errorMustCheck3: false,
      errorMustCheck4: false,


      select: '@kakao.com',
      items: [
        '@kakao.com',
        '@gamil.com',
        '@naver.com',
        '직접입력'
      ],
      show1:false,


    }
  },
  methods:{
    // 폰 넘버 인증하면 여기서 폰넘버 담게됨
    phoneInputDataVal(val) {
      console.log("아래서 받은 폰넘버값 : ",val)
      this.submitPhoneNumber = val
      console.log("제출할 폰넘버 : ",this.submitPhoneNumber)
    },

    // 멤버 회원가입 요청
    async saveJoinMemberInfo() {
      var form = new FormData()
      form.append("email",this.email+this.select)
      form.append("nicname",this.nicname)
      form.append("password",this.checkPassword)
      if (this.submitPhoneNumber) {
        form.append("phone",this.submitPhoneNumber);
      }
      await axios.post("http://localhost:9090/api/join/save/member",form)
          .then(res=>{
            console.log(res)
            memberObj.memberId = res.data.id
            memberObj.memberEmail = res.data.email
            memberObj.memberNicname = res.data.nic_name
            memberObj.memberApi = res.data.login_api
            memberObj.memberRole = res.data.role
            memberObj.memberProfile = res.data.profileImg
            let login_member = JSON.stringify(memberObj)
            window.localStorage.setItem('login_member', login_member)
            bringFunTokens()
          })
          .catch(error=>{
            console.log(error)
          })
    },
    // 멤버 회원가입 트렌젝션
    startJoinProcess() {
      if (this.submitJoin()) {
        this.checkJoinEmail()
      }
    },

    // 이메일 가능한지 체크
    async checkJoinEmail() {
      //  axios 로 이메일 중복 체크해서 errorEmailCheck true or false
      var form = new FormData()
      form.append("email", this.email+this.select)
      await axios.post("http://localhost:9090/api/join/email/check",form)
      .then(res=>{
        console.log(res)
        this.errorEmailCheck1 = false
        this.submitJoin2()

      })
      .catch(error=>{
        console.log(error)
        this.errorEmailCheck1 = true
      })
    },

    // 에러 떠있는게 없는지 체크 조건2
    submitJoin2() {
      if (!this.errorEmailCheck1 && !this.errorEmailCheck2 &&
          !this.errorPasswordCheck1 && !this.errorPasswordCheck2) {
        this.saveJoinMemberInfo();
      } else {
        return false
      }
    },

    // 에러 떠있는게 없는지 체크 조건1
    submitJoin() {
      if (!this.email) {
        this.errorMustCheck1 = true
      }else {
        this.errorMustCheck1 = false
      }
      if (!this.nicname) {
        this.errorMustCheck2 = true
      } else {
        this.errorMustCheck2 = false
      }
      if (!this.prePassword) {
        this.errorMustCheck3 = true
      } else {
        this.errorMustCheck3 = false
      }
      if (!this.checkPassword) {
        this.errorMustCheck4 = true;
      } else {
        this.errorMustCheck4 = false
      }
      if (this.email && this.nicname && this.prePassword && this.checkPassword) {
        this.errorMustCheck1 = false;
        this.errorMustCheck2 = false;
        this.errorMustCheck3 = false;
        this.errorMustCheck4 = false;
        return true
      }
    }
  },
  computed:{
  },
  watch:{
    email() {
      if (this.email.match(/[@]/)) {
        console.log("이메일 끝 빼주세요")
        this.errorEmailCheck2 = true
      } else {
        this.errorEmailCheck2 = false
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

  }
}
</script>

<style scoped>

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
  max-width: 100%;

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
  height: 650px;
}
.signup .content-signup .form-signup-content .join-email {
  display: flex;
  flex-direction: row;
  max-width: 450px;
  height: 50px;
}
.signup .content-signup .form-signup-content .join-email .join-email-left {
  width: 60%;
}
.signup .content-signup .form-signup-content .join-email .join-email-right {
  max-width: 180px;
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

@media screen and (max-width: 800px){
  .signup .content-signup .form-signup-content .join-email .join-email-right{
    max-width: 160px !important;
  }

}
</style>