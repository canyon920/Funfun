<template>
  <v-card
      class="mx-auto mt-10 mb-16 pb-16"
      max-width="400"
      outlined
  >
    <div class="login">
      <div class="pl-5 pr-5 pt-2">
        <v-list-item >
          <v-list-item-content>
            <div class="kakao login">
              <login-kakao></login-kakao>
            </div>
            <v-list-item-subtitle class="text-center">-------------------or-------------------</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div class="pt-5">
          <div class="login_option">
<!--            <v-btn class="mx-5 ml-10" fab large color ="light-green"><strong>N</strong></v-btn>-->
            <login-naver></login-naver>
            <login-google></login-google>
            <v-btn class="mx-5" fab large color ="rgba(229, 114, 0)"><strong>H</strong></v-btn>

          </div>
        </div>
      </div>
    </div>
  </v-card>
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
.login_option{
  font-size: 15px;
}
</style>
