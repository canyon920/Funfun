<template>
  <div class="googleLogin">
    <div id="google-signin-button" style="display: none"></div>
    <div id="googleIdLogin_loginButton" href="#" style="color: black">
      <v-btn class="mx-5" fab large color="white" @click="handleGoogleLogin">
        <strong style="font-size: large">G</strong></v-btn>
    </div>
<!--    <v-btn @click="signout">signout</v-btn>-->
  </div>
<!--  <v-btn class="mx-5" fab large color="white"><strong style="font-size: large ">G</strong></v-btn>-->

</template>

<script>
import {OauthSendServerData} from "@/service/member-login";
import {bringMemberLoginDataFromServer} from "@/service/member-login";

export default {
  mounted() {
    window.gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })
  },
  methods:{
    onSignIn(googleUser){
      const profile = googleUser.getBasicProfile();
      OauthSendServerData.sendMemberEmail = profile.getEmail()
      OauthSendServerData.sendMemberNicname = profile.getName()
      OauthSendServerData.sendMemberApi = "Google"
      OauthSendServerData.sendMemberProfile = profile.getImageUrl()
      bringMemberLoginDataFromServer()
    },
    handleGoogleLogin(){
      if(document && document?.querySelector("#google-signin-button")?.firstChild &&
          window !== undefined
      ){
        const loginButton =  document.getElementById("google-signin-button")?.firstChild;
        loginButton.click();
      }
    },
    // signout(){
    //   const authInst = window.gapi.auth2.getAuthInstance();
    //   authInst.signOut().then(() => {
    //     console.log("User Signed Out!")
    //   });
    // }
  }
}
</script>

