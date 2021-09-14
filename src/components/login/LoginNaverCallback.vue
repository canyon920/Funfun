<script src="../../router/index.js"></script>
<template>
  <div id="naver_id_login" style="display: none"></div>
</template>

<script>
export default {
  mounted() {
    const naver_id_login = new window.naver_id_login("JQ9euvEXzku2NPp27QzO", "http://localhost:8080/loginnaver");

    naver_id_login.init_naver_id_login();

    /*window.addEventListener('load',function (){
      naver_id_login.getLoginStatus(function (status){
        if(status){
          var email = naver_id_login.naver.getProfileData('email');
          console.log(email);
          console.log(naver_id_login.user);
          if(email == undefined || email == null){
            alert("이메일은 필수정보입니다. 정보제공을 동의해주세요");
            naver_id_login.reprompt();
            return;
          }
        }else{
          console.log("callback처리에 실패했습니다.");
        }
      });
    });*/

    // naver_id_login.get_naver_userprofile("naverSignInCallback()");
  },
  beforeMount() {
    window.addEventListener('load',function (){
      naver_id_login.getLoginStatus(function (status){
        if(status){
          var email = naver_id_login.naver.getProfileData('email');
          console.log(email);
          console.log(naver_id_login.user);
          if(email == undefined || email == null){
            alert("이메일은 필수정보입니다. 정보제공을 동의해주세요");
            naver_id_login.reprompt();
            return;
          }
        }else{
          console.log("callback처리에 실패했습니다.");
        }
      });
    });
  },
  methods:{
    naverSignInCallback(){
      alert(naver_id_login.getProfileData('email'));
      alert(naver_id_login.getProfileData('nickname'));
    }
  }
}
  /*mounted() {

    const naver_id_login = new window.naver_id_login("JQ9euvEXzku2NPp27QzO", "http://localhost:8080/loginnaver");
    //console.log("access token", naver_id_login.getAccessToken()); // 정상적 로그인이 된 경우 access token값 출력
    naver_id_login.init_naver_id_login();

    console.log("access token",naver_id_login.oauthParams.access_token);

    naver_id_login.get_naver_userprofile("naverSignInCallback()");
    //console.log("#",naver_id_login.get_naver_userprofile);

    console.log("1",naver_id_login.getProfileData('email'));
    console.log("2",naver_id_login.getProfileData('nickname'));
    /!*window.addEventListener('load',function (){
      naverLogin.getLoginStatus(function (status){
        if(status){
          var email = naverLogin.getProfileData('email');
          console.log(email);
          console.log(naverLogin.user);
          if(email == undefined || email == null){
            alert("이메일은 필수정보입니다. 정보제공을 동의해주세요");
            naverLogin.reprompt();
            return;
          }
        }else{
          console.log("callback처리에 실패했습니다.");
        }
      });
    });*!/
  },
  /!*methods:{
    naverSignInCallback(){
      alert(this.naver_id_login.getProfileData('email'));
      alert(this.naver_id_login.getProfileData('nickname'));
      alert(this.naver_id_login.getProfileData('age'));
    }
  }*!/
};*/
</script>