<template>
  <div></div>
</template>
<script>


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
</script>

<!--
<script>
import { getKakaoToken, getKakaoUserInfo  } from "../service/login";
export default {
  name: 'Auth',
  created() {
    if (this.$route.query.code) {
      this.setKakaoToken();
    }
  },
  mounted() {

  },
  methods: {
    async setKakaoToken () {
      console.log('카카오 인증 코드', this.$route.query.code);
      const { data } = await getKakaoToken(this.$route.query.code);
      if (data.error) {
        alert('카카오톡 로그인 오류입니다.');
        this.$router.replace('/login');
        return;
      }
      window.Kakao.Auth.setAccessToken(data.access_token);
      this.$cookies.set('access-token', data.access_token, '1d');
      this.$cookies.set('refresh-token', data.refresh_token, '1d');
      await this.setUserInfo();
      this.$router.replace('/');
    },
    async setUserInfo () {
      const res = await getKakaoUserInfo();
      const userInfo = {
        name: res.kakao_account.profile.nickname,
        platform: 'kakao',
      };
      this.$store.commit('setUser', userInfo);
    },
  }
}
</script>-->
