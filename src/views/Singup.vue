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

      <div class="join-nicname">
        <v-text-field
            label="Your Nick-Name"
            hint="ex) 폭풍간지"
            v-model="nicname"
            persistent-hint
        ></v-text-field>
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
    </div>

    <div class="bottom-content">
      <div class="submit-button">
        <div class="my-2">
          <v-btn
              color="error"
              dark
              x-large
              class="giveme-button"
          >
            뒤로가기
          </v-btn>
        </div>
      </div>

      <div class="submit-cancel">
        <v-btn
            color="error"
            dark
            x-large
            class="giveme-button"
        >
          가입하기기
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

      errorEmailCheck1: false,
      errorEmailCheck2: false,
      errorPasswordCheck1: false,
      errorPasswordCheck2: false,

      select: '@example.com',
      items: [
        '@kakao.com',
        '@gamil.com',
        '@naver.com',
          '직접입력'
      ],

      show1:false,
      rules:{
        emailMatch:() =>('The email and Password you entered do not match'),
      },
    }
  },
  methods:{
    checkJoinEmail() {
    //  axios 로 이메일 중복 체크해서 errorEmailCheck true or false
    },
  },
  computed:{

  },
  watch:{
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
}
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup .content-signup {
  margin: 50px;

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
  height: 450px;
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