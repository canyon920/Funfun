<template>
  <v-btn block large outlined @click="kakaoLogin"><strong>카카오계정으로 로그인</strong></v-btn>
</template>

<script>

import router from "../../router";

export default {
  name: "LoginKakao",
  methods: {
    loginWithKakao:function () {
      window.Kakao.Auth.authorize({
        redirectUri:"http://localhost:8080/auth",
      });
      console.log('카카오 인증 코드', this.$route.query.code);


    },
    kakaoLogin(){
      console.log("#카카오로그인메소드")
      window.Kakao.Auth.login({
        scope: 'account_email, profile_image, profile_nickname',
        success: function(authObj) {
          console.log("#1",authObj);
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: res => {
              const kakao_account = res.kakao_account;
              // const kakaoNicname = res.properties.nickname

              console.log(kakao_account);
              router.go("/")
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
    displayToken() {
      console.log("디스플레이토큰실행")
      const token = this.getCookie('authorize-access-token')
      if(token) {
        window.Kakao.Auth.setAccessToken(token)
        window.Kakao.Auth.getStatusInfo(({ status }) => {
          if(status === 'connected') {
            console.log(token)
            document.getElementById('token-result').innerText = 'login success. token: ' + window.Kakao.Auth.getAccessToken()
          } else {
            window.Kakao.Auth.setAccessToken(null)
          }
        })
      }
    },
    getCookie:function (name){
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
  },
  // mounted() {
  //   this.kakaoLogin();
  // }

};


</script>

<style>

</style>