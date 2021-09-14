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
    displayToken() {
      console.log("디스플레이토큰실행")
      const token = this.getCookie('authorize-access-token')
      console.log("이프전 ",token)
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
  mounted() {
    // this.displayToken()
    // this.kakaoLogin()
  },

};
</script>


<!--<script>
export default {
  methods: {
    getParameterByName: function (name) {
      name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null
          ? ""
          : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  },
  beforeMount() {
    const code = this.getParameterByName("code");
    alert(code);
    var details = {
      grant_type: "authorization_code",
      client_id: "08cab2069b3bd09e1d21ad0b6746e4d9",
      redirect_uri: "http://localhost:8080/auth",
      code: code,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: formBody,
    })
        .then((response) => response.json())
        .then((data) => {
          console.log(JSON.stringify(data));
          alert(JSON.stringify(data));
          window.Kakao.Auth.setAccessToken(data.access_token);
          // test : Token
          alert(window.Kakao.Auth.getAccessToken());
          location.href = "/"
        });
  },
};
</script>-->
