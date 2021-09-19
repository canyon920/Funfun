<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <div class="ml-lg-16">
        <router-link to="/">
          <v-img class="ml-lg-4" max-height="60"
                 max-width="200" src="@/assets//logo/logo1.jpg"></v-img>
        </router-link>
      </div>
    </div>
    <div class="navbar-menu1" :class="{active : booleanMenu1}">
      <div class="link-div"><router-link style="color: black" class="router-link" to="/">Home</router-link></div>
      <div class="link-div"><router-link style="color: black" class="router-link" to="/shop">Shop</router-link></div>
      <div class="link-div"><router-link style="color: black" class="router-link" to="/about">About</router-link></div>

    </div>
    <v-spacer></v-spacer>
    <div class="navbar-menu2" :class="{active : booleanMenu2}">
      <div class="link-div" id="kakao-div" @click="Klogout()" hidden>KLogout</div>
      <div class="link-div" id="google-div" @click="Glogout()" hidden>GLogout</div>
      <div class="link-div" id="naver-div" @click="Nlogout()" hidden>NLogout</div>
      <div class="link-div" id="email-div" @click="Flogout()" hidden>FLogout</div>
      <div class="link-div" id="login-div"><router-link style="color: black" class="router-link" to="/login" >Login</router-link></div>
      <div class="link-div" id="join-div"><router-link style="color: black" class="router-link" to="/join" >Join</router-link></div>
      <!--      <router-link to="#" v-on:click.native="unlink()"> Kakao Unlink</router-link>-->


      <div class="link-div"><router-link style="color: black" class="router-link" to="/help">Help</router-link></div>
    </div>
    <div class="mr-lg-16">
      <div class="navbar-search">
        <v-btn x-small fab plain><v-icon>mdi-magnify</v-icon></v-btn>
        <v-text-field class="mt-lg-5 mt-md-5"
                      placeholder="친구검색"
                      rounded
                      filled
                      dense
        ></v-text-field>
      </div>
    </div>
    <div class="nav_toggle" @click="toggleDown">
      <v-btn icon >
        <v-icon  >mdi-dots-vertical</v-icon>
      </v-btn>
    </div>
    <router-link id="header-go-mypage" style="color: black" class="router-link" to="/memberdetail">
      <div class="logininfo" id="login-info-div" style="display: none">
        <div class="memberdetail"><v-icon>mdi-account-circle</v-icon></div>
        <div class="name pr-2" style="font-size: 5px" id="name-div"></div>
      </div>
    </router-link>
  </nav>
</template>

<script>
// import router from "@/router";

export default {
  name:"Header",
  data()  {
    return{
      memberInfo:{
        memberNicname : '',
        memberApi : '',
        memberRole : '',
      },
      // reloadPage:true,
      booleanMenu1: false,
      booleanMenu2: false,
    }
  },
  methods: {
    toggleDown() {
      this.booleanMenu1 = !this.booleanMenu1
      this.booleanMenu2 = !this.booleanMenu2
    },
    Flogout(){
      window.localStorage.clear()
      window.sessionStorage.clear()
      this.$router.go(0)
    },
    Klogout() { // 카카오 로그아웃
      let router = this.$router
      window.Kakao.Auth.logout(function () {
        window.localStorage.clear()
        window.sessionStorage.clear()
        router.go(0)
      })
    },
    unlink() {  // 카카오 계정 연결끊기
      let logout = this.logout;
      window.Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (response) {
          console.log(response)
          logout()
        },
        fail: function (error) {
          console.log(error)
          alert(error)
          return
        },
      });
    },
    Glogout() {
      const authInst = window.gapi.auth2.getAuthInstance();
      authInst.signOut().then(() => {
        console.log("User Signed Out!")
        window.localStorage.clear()
        window.sessionStorage.clear()
        this.memberInfo = JSON.parse(localStorage.getItem('login_member'))
      })
    },
    isLogin() {
      if (localStorage.getItem('login_member') !== null) {
        this.memberInfo = JSON.parse(localStorage.getItem('login_member'))
        document.getElementById("join-div").hidden = true
        document.getElementById("login-div").hidden = true
        if (this.memberInfo.memberNicname) {
          document.getElementById("login-info-div").style.display = 'flex';
          document.getElementById("name-div").innerText = `${this.memberInfo.memberNicname}님 안녕하세요.`
        }
        if (this.memberInfo.memberApi === 'Kakao') {
          document.getElementById("kakao-div").hidden = false
        }else if (this.memberInfo.memberApi === 'Naver') {
          document.getElementById("naver-div").hidden = false
        }else if (this.memberInfo.memberApi === 'Google') {
          document.getElementById("google-div").hidden = false
        }else if (this.memberInfo.memberApi === 'Email') {
          document.getElementById("email-div").hidden = false
        }
      } else if (localStorage.getItem('login_member') === null) {
        document.getElementById("join-div").hidden = false
        document.getElementById("login-div").hidden = false
        document.getElementById("login-info-div").style.display = 'none';
        document.getElementById("kakao-div").hidden = true
        document.getElementById("naver-div").hidden = true
        document.getElementById("google-div").hidden = true
        document.getElementById("email-div").hidden = true

      }
    }

  },
  // computed:{
  //   statusModify(){
  //     if (localStorage.getItem('login_member') !== null) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //
  // },
  // watch:{
  //   statusModify() {
  //     if (localStorage.getItem('login_member') !== null) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // },
  mounted() {
    this.isLogin()
    //     console.log("access toeken : ",funTokens.access_token)
    // // function authInst () {
    // //   console.log("sss",window.gapi.auth2.getAuthInstance());
    // // }
  }
};
</script>

<style>
body{
  margin: 0;
}
.router-link {
  text-decoration: none;

}
.link-div {
  margin: 0px 5px;
  cursor: pointer;

}
.link-div:hover {
  background-color: rgba(229, 114, 0, 0.3);
  border-radius: 5px;
  transition: .5s;

}

.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  height: 65px;
}
.navbar-logo{
  padding-right: unset;
}
.navbar-menu1{
  display: flex;
  flex-direction: row;
  padding-left: 0;
  padding: 2px 16px;
}
.navbar-menu2{
  display: flex;
  flex-direction: row;
  padding-left: 0;
  padding: 2px 16px;
}
.navbar-search{
  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-top: 7px;
}
.nav_toggle{
  position: absolute;
  right: 22px;
  top: 15px;
  display: none;
}
.memberdetail{

  /*position: absolute;*/
  /*right: 25px;*/
  /*top:10px*/
}
.name{
  /*position: absolute;*/
  /*right: 40px;*/
  /*top: 10px;*/
  /*display: none;*/
}
.logininfo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#header-go-mypage {
  margin-right: 4%;
}

@media screen and (max-width: 1000px ) {
  .navbar{
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 1px;
    height: auto;
  }
  .navbar-menu1{
    display: none;
    flex-direction: column;
    align-items: center;
    width:100%;
  }
  .navbar-menu2{
    display: none;
    flex-direction: column;
    align-items: center;
    width:100%;
  }
  .navbar-search{
    display: none;
  }
  .nav_toggle{
    display: block;
  }
  .navbar-menu1.active,
  .navbar-menu2.active{
    display: flex;
  }
  .logininfo {
    display: none !important;
  }



}



</style>