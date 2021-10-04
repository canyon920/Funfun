<template>
  <div id="nav">
  <nav class="navbar">
    <div class="navbar-logo" style="max-width: 250px">
      <div class="logo-img-div" style="max-width: 250px">
        <a href="/">
          <img class="logo-img" style="max-width: 250px" src="@/assets//logo/logo1.jpg"/>
        </a>
      </div>
    </div>
    <div class="navbar-menu1" :class="{active : booleanMenu1}">
      <div class="link-div" @click="toggleDown"><router-link style="color: black" class="router-link" to="/">Home</router-link></div>
      <div class="link-div" @click="toggleDown"><router-link style="color: black" class="router-link" to="/shop">Shop</router-link></div>
<!--      <div class="link-div" @click="toggleDown"><router-link style="color: black" class="router-link" to="/funding">Funding</router-link></div>-->
      <div class="link-div" @click="toggleDown"><router-link style="color: black" class="router-link" to="/aboutpage">About</router-link></div>

    </div>
    <v-spacer></v-spacer>
    <div class="navbar-menu2" :class="{active : booleanMenu2}">
      <div class="link-div" id="kakao-div" @click="Klogout()" hidden>Logout</div>
      <div class="link-div" id="email-div" @click="Flogout()" hidden>Logout</div>
      <div class="link-div" id="login-div" @click="toggleDown"><router-link style="color: black" class="router-link" to="/login" >Login</router-link></div>
      <div class="link-div" id="join-div" @click="toggleDown"><router-link style="color: black" class="router-link" to="/join" >Join</router-link></div>
      <!--      <router-link to="#" v-on:click.native="unlink()"> Kakao Unlink</router-link>-->
    </div>



    <div class="nav_toggle" @click="toggleDown">
      <v-btn icon >
        <v-icon style="font-size: 35px">mdi-dots-vertical</v-icon>
      </v-btn>
    </div>
    <router-link id="header-go-mypage" style="color: black" class="router-link" to="/mypage-list">
      <div class="logininfo" id="login-info-div" style="display: none">
        <div class="memberdetail"><img id="loginUserImgSrc" :src="normalImg" style="border-radius: 20%; width: 20px; height: 20px; margin-right: 5px"></div>
        <div class="name pr-2" style="font-size: 14px; font-weight: 700" id="name-div"></div>
      </div>
    </router-link>
  </nav>
  </div>
</template>

<script>
// import router from "@/router";
export default {
  name:"Header",
  data()  {
    return{
      normalImg:require("@/assets/logo/img-normal.jpg"),
      SearchName:'',
      memberInfo:{
        memberNicname : '',
        memberApi : '',
        memberRole : '',
        memberProfile:'',

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
      let router = this.$router
      const authInst = window.gapi.auth2.getAuthInstance();
      authInst.signOut().then(() => {
        console.log("User Signed Out!")
        window.localStorage.clear()
        window.sessionStorage.clear()
        router.go(0)
      })
    },
    isLogin() {
      if (localStorage.getItem('login_member') !== null) {
        this.memberInfo = JSON.parse(localStorage.getItem('login_member'))
        if (this.memberInfo.memberProfile) {
          this.normalImg = this.memberInfo.memberProfile;
          document.getElementById('loginUserImgSrc').src = this.normalImg;
        }
        document.getElementById("join-div").hidden = true;
        document.getElementById("login-div").hidden = true
        if (this.memberInfo.memberNicname) {
          document.getElementById("login-info-div").style.display = 'flex';
          document.getElementById("name-div").innerText = `${this.memberInfo.memberNicname}님 안녕하세요.`
        }
        if (this.memberInfo.memberApi === 'Kakao') {
          document.getElementById("kakao-div").hidden = false
        } else if (this.memberInfo.memberApi === 'Email') {
          document.getElementById("email-div").hidden = false
        }
      } else if (localStorage.getItem('login_member') === null) {
        document.getElementById("join-div").hidden = false
        document.getElementById("login-div").hidden = false
        document.getElementById("login-info-div").style.display = 'none';
        document.getElementById("kakao-div").hidden = true
        document.getElementById("email-div").hidden = true
      }
    }
  },

  mounted() {
    this.isLogin()

  }
};
</script>

<style scoped>
#nav {
}
body{
  margin: 0;
}
.router-link {
  text-decoration: none;
}
.link-div {
  margin: 0px 5px;
  cursor: pointer;
  font-size: 20px;
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
  border-bottom: 0.5px solid rgba(229, 114, 0, 0.1);
}
.navbar-logo{
  /*padding-right: unset;*/
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
}
.nav_toggle{
  position: absolute;
  right: 22px;
  top: 25px;
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

.active {
  animation: activeY 1s;
}

@keyframes activeY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 758px ) {
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
  .mr-lg-16 {
    display: none !important;
  }
}
</style>