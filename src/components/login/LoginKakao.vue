<template>
  <div >
<!--  <v-btn block large outlined @click="kakaoLogin"><strong>카카오계정으로 로그인</strong></v-btn>-->
  <v-img style="cursor:pointer;" class="kakao_btn" src="@/assets/login/kakao_login.png" @click="loginWithKakao"></v-img>
  </div>
</template>

<script>
import {OauthSendServerData} from "@/service/member-login";
import {bringMemberLoginDataFromServer} from "@/service/member-login";





export default {
  name: "LoginKakao",
  data(){
    return{

    }
  },
  methods: {
    // loginWithKakao:function () {
    //   window.Kakao.Auth.authorize({
    //     redirectUri:"http://localhost:8080/auth",
    //   });
    //   console.log('카카오 인증 코드', this.$route.query.code);
    // },
    loginWithKakao() {
      const params = {
        redirectUri: "http://localhost:8080/auth"
      }
      window.Kakao.Auth.authorize(params)
    },

     kakaoLogin(){
      window.Kakao.Auth.login({
        scope: 'account_email, profile_image, profile_nickname',
        success: function(authObj) {

          // 카카오톡에 토큰 할당 ( 카카오에 따로 할당하는 것으로 봐선 추후에 엑세스토큰 알아서 가져다 쓰는듯 아니라면 우리가 로컬에저장후 쓰자 )
          window.Kakao.Auth.setAccessToken(authObj.access_token)
          //세션스토리지에 -> 카카오 리프레시 토큰 저장
          window.localStorage.setItem("kakao_refresh_token", authObj.refresh_token)

          window.Kakao.API.request({
            url: '/v2/user/me',
            success: res => {
              OauthSendServerData.sendMemberEmail = res.kakao_account.email
              OauthSendServerData.sendMemberNicname = res.properties.nickname
              OauthSendServerData.sendMemberApi = "Kakao"
              OauthSendServerData.sendMemberProfile = res.properties.profile_image
              bringMemberLoginDataFromServer()
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