<template>
<!--  <v-btn class="mx-5 ml-10" fab large color ="light-green"><strong>N</strong></v-btn>-->
  <div>
    <div id="naverLogin" style="display: none"></div>
<!--    <div class="naverlogin" @click="document.getElementById('naver_id_login_anchor').click()">
      <v-btn class="mx-5 ml-10" fab large color ="light-green"><strong style="font-size: large ">N</strong></v-btn>
    </div>-->
    <div id="naverIdLogin_loginButton" href="#" style="color: black">
      <v-btn class="mx-5 ml-10" fab large color ="light-green" @click="handleNaverLogin">
        <div class="buttonCss"><strong style="font-size: large ">N</strong></div>
      </v-btn>
    </div>
  </div>

</template>

<script>
import {naverService} from "../../service/login";

export default {
  mounted() {
    naverService().setNaver();
  },
  /*mounted(){
    const naver_id_login = new window.naver_id_login("JQ9euvEXzku2NPp27QzO", "http://192.168.0.165:8080/loginnaver");
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 1,60); // 버튼 설정
    naver_id_login.setState(state);
    // naver_id_login.setPopup(); // popup 설정을 위한 코드
    naver_id_login.init_naver_id_login();
  },*/
  methods:{
    handleNaverLogin(){
      if(document && document?.querySelector("#naverLogin")?.firstChild &&
      window !== undefined
      ){
        const loginButton =  document.getElementById("naverLogin")?.firstChild;
        loginButton.click();
      }
    },
  }

}
</script>
<style scoped>
.buttonCss{
  color: white;
}
/*.naver img{
  height:0.9rem;
  margin-right: 0.7em;
  margin-left: 0.2em;
}*/
</style>