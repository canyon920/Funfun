
<template>
  <div class="MyPage">

    <h1 style="margin: 30px 0px; text-align: center">회원정보 설정</h1>

    <div id="app">

      <v-app id="inspire">
        <div class="border-div">
          <div id="input-submit">
            <v-text-field
                v-model="nickname"
                label=" 닉네임: "
            >
            </v-text-field>
            <div v-show="errorNicNameCheck" class="error-text nic-error">
              닉네임은 필수 입니다.
            </div>

            <v-text-field
                v-model.trim="email"
                label=" 이메일: "
                readonly
            ></v-text-field>

            <div class="phone-div" style="margin-bottom: 10px">
              <v-text-field
                  v-model.trim="phoneNumber"
                  label=" 휴대전화 번호: "
                  hint="아이디/비밀번호 찾기에 활용됩니다."
                  persistent-hint
              ></v-text-field>

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
            <div v-show="errorPhoneNumberCheck" class="error-text error-font-color error-phone-number">
              전화번호 입력예시를 확인해주세요
            </div>
            <div v-show="errorSendMsgToServer" class="error-text error-font-color error-phone-number">
              전화번호 인증서비스를 이용할 수 없습니다.
            </div>

            <div class="verify-div">
              <v-text-field
                  :label="computedTotalTIme"
                  v-model="verifyNumber"
                  persistent-hint
              ></v-text-field>
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
            <div v-show="errorReturnNumberCheck" class="error-text error-font-color error-verify-number">
              유효 시간이 경과되었습니다.
            </div>
            <div v-show="errorReturnNotVerify" class="error-text error-font-color error-verify-number">
              유효하지 않은 인증번호 입니다.
            </div>
            <div v-show="phoneNumberSaveToServer" class="error-text error-font-color error-verify-number">
              인증되었습니다.
            </div>


            <v-text-field
                v-model.trim="address"
                label=" 주소: "
            ></v-text-field>

            <div class="2">
              <v-text-field label=" 상세주소 "
                            v-model.trim="address2"
              ></v-text-field>

            </div>

            <div class="div-3">
              <v-text-field label=" 우편번호 "
                            v-model.trim="postNumber"
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
          </div>
        </div>

        <v-btn color="error">수정</v-btn>
        <br/>
        <v-btn color="error">완료</v-btn>

      </v-app>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name:'Editpage',
  data (){
    return{
      message1:'',
      nickname:'',
      email:'',
      phoneNumber:'',
      address:'',
      address2:'',
      postNumber:'',
      submit:'',
      clear:'',

      //  error
      errorNicNameCheck:true,
      errorPhoneNumberCheck:true,
      errorSendMsgToServer:true,
      errorReturnNumberCheck: true,
      errorReturnNotVerify: true,
      phoneNumberSaveToServer:true,

      //  phone 관련
      verifyNumber: '',
    }
  },
  methods: {
    async edit() {
      await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=160f05c35f34aef167fabe796efb2a8e`)
          .then(res => {
            console.log("res : ",res)
            this.message1 = res.data.results[0].title
            this.nickname = res.data.results[8].title
            this.email = res.data.results[1].title
            this.address = res.data.results[2].title
            this.address2 = res.data.results[3].title
            this.phoneNumber = res.data.results[4].title
            this.postNumber = res.data.results[5].title
            this.submit = res.data.results[6].title
            this.clear = res.data.results[7].title
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
    },
    findAddr() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          console.log(data)
          this.address = data.roadAddress
          this.postNumber = data.zonecode
        }
      }).open()
    },
  },

  mounted() {
    console.log("마운티드 실행")
    this.edit()
  }

}
</script>

<style scoped>

.error-text {
  color: red;
  font-size: 10px;
  margin-bottom: 10px;
}
.MyPage {
  max-width:1100px;
  margin:auto;
}
.div-3 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.phone-div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.verify-div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 50%;
  margin-left: 50%;
}
.border-div {
  border: 0.5px solid rgb(229,114,0);
  margin-bottom: 30px;
}
#input-submit {
  width: 500px;
  margin: 10px;
}
@media screen and (max-width: 800px){
  #input-submit {
    width: 300px;
  }

}

</style>