<template>
  <div>
    <p></p>
  </div>
</template>

<script>
export default {
  mounted() {
    const naver_id_login = new window.naver_id_login("Client Id", "callback URL");
    //console.log("access token", naver_id_login.getAccessToken()); // 정상적 로그인이 된 경우 access token값 출력


    console.log("access token",naver_id_login.oauthParams.access_token);

    naver_id_login.get_naver_userprofile("naverSignInCallback()");
    console.log("#",naver_id_login.get_naver_userprofile);

    console.log(naver_id_login.getProfileData('email'));
    console.log(naver_id_login.getProfileData('nickname'));




    //this.naverSignInCallback();


  },
  /*methods:{
    naverSignInCallback(){
      alert(this.naver_id_login.getProfileData('email'));
      alert(this.naver_id_login.getProfileData('nickname'));
      alert(this.naver_id_login.getProfileData('age'));
    }
  }*/
};
</script>