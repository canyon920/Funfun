<template>
  <div >
<!--  <v-btn block large outlined @click="kakaoLogin"><strong>카카오계정으로 로그인</strong></v-btn>-->
  <v-img style="cursor:pointer;" class="kakao_btn" src="@/assets/login/kakao_login.png" @click="kakaoLogin"></v-img>
  </div>
</template>

<script>
import {OauthSendServerData} from "@/service/kakao-login";
import {bringMemberLoginDatafromSerber} from "@/service/kakao-login";
// import router from "../../router";

export default {
  name: "LoginKakao",
  data(){
    return{
      // sendServerData:{
      //   sendMemberEmail : "dkskak",
      //   sendMemberNicname : '',
      //   sendMemberApi : '',
      //   sendMemberProfile : '',
      // }
    }
  },
  methods: {
     kakaoLogin(){
      window.Kakao.Auth.login({
        scope: 'account_email, profile_image, profile_nickname',
        success: function(authObj) {

          // 카카오톡에 토큰 할당
          window.Kakao.Auth.setAccessToken(authObj.access_token)
          // 카카오톡 리프레시 토큰 세션에 저장
          window.sessionStorage.setItem("kakao_refresh_token", authObj.refresh_token)

          console.log("카카오에 할당한 토큰 : ",window.Kakao.Auth.getAccessToken())
          console.log("세션에 저장한 토큰 : ",window.sessionStorage.getItem("kakao_refresh_token"))

          window.Kakao.API.request({
            url: '/v2/user/me',
            success: res => {
              // const kakao_account = res.kakao_account;
              OauthSendServerData.sendMemberEmail = res.kakao_account.email
              OauthSendServerData.sendMemberNicname = res.properties.nickname
              OauthSendServerData.sendMemberApi = "Kakao"
              OauthSendServerData.sendMemberProfile = res.properties.profile_image
              console.log(OauthSendServerData.sendMemberEmail)
              bringMemberLoginDatafromSerber()
            },
            fail: function(error) {
              console.log(
                  'login success, but failed to request user information: ' +
                  JSON.stringify(error)
              )
            },
          })
        },
        fail: function(err) {
          console.log(JSON.stringify(err))
        },
      })
    },

  }

};


</script>

<style>

</style>