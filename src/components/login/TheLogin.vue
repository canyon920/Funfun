<template>
  <div class="parent-box-login">
  <v-card
      class="mx-auto mt-10 mb-16 pb-16"
      max-width="400"
      outlined
  >
    <div class="login">
      <div class="pl-5 pr-5 pt-6">
        <v-list-item >
          <v-list-item-content>
            <div class="pb-7">
              <div class="kakao login">
                <login-kakao></login-kakao>
              </div>
            </div>
            <v-list-item-subtitle class="text-center">-----------------------------------  or  -----------------------------------</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div class="pt-5">
          <div class="login_option">
            <login-naver></login-naver>
            <login-google></login-google>
<!--            <login-funfun></login-funfun>-->
            <v-btn class="mx-5" fab large color ="rgba(229, 114, 0)" to="funlogin"><strong>F</strong></v-btn>

          </div>
        </div>
      </div>
    </div>
  </v-card>
  </div>
</template>
<script>


import LoginKakao from "./LoginKakao";
import LoginNaver from "./LoginNaver";
import LoginGoogle from "./LoginGoogle";

export default {
  name: 'Login',
  components:{
    LoginGoogle,
    LoginNaver,
    LoginKakao

  },
}


</script>
<style>
.parent-box-login {
  /*margin-bottom: 25vh;*/
}
.login {
  margin-top: 2%;
  margin-bottom: 12%;
}
.login_option{
  font-size: 15px;
  display: flex;
}
</style>
