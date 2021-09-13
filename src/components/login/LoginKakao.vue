<template>
  <v-btn block large outlined @click="loginWithKakao"><strong>카카오계정으로 로그인</strong></v-btn>
</template>

<script>

export default {
  name: "LoginKakao",
  methods: {
    loginWithKakao:function () {
      window.Kakao.Auth.authorize({
        redirectUri:"http://localhost:8080/auth",
      });
      console.log('카카오 인증 코드', this.$route.query.code);

     /* window.Kakao.Auth.login({
        scope:'profile_nickname,profile_image,account_email',
        success:function (authObj){
          console.log(authObj);
          window.Kakao.API.request({
            url:'v2/user/me',
            success:res =>{
              const kakao_account = res.kakao_account;
              console.log(kakao_account);
          }
          });
        }
      });*/


      /*const params = {
        redirectUri: "http://localhost:8080/login",
      };
      window.Kakao.Auth.authorize(params);
      console.log(params);*/
    },
  },
};


</script>

<style>

</style>