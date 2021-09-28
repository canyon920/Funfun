<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    kakaoLogin(){
      console.log("#카카오로그인메소드")
      window.Kakao.Auth.login({
        scope: 'account_email, profile_image, profile_nickname',
        success: function(authObj) {
          console.log(authObj);
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: res => {
                const kakao_account = res.kakao_account;
                console.log(kakao_account);
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
          console.log("##2",JSON.stringify(err))
        },
      })

    },

    getCookie (name){
      console.log("네임",name)
      const value = "; " + document.cookie;
      alert( document.cookie );
      const parts = value.split("; " + name + "=");
      console.log("밸류",value);
      console.log("ㄴㅇㄹㄴㅇㄹ",parts);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
  },


};
</script>

