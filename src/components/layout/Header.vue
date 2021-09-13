<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <div class="ml-lg-16">
        <v-img class="ml-lg-4" max-height="60"
               max-width="200" src="@/assets/logo1.jpg"></v-img>
      </div>
    </div>
    <div class="navbar-menu1">
      <div class="link-div"><router-link style="color: black" class="router-link" to="/">Home</router-link></div>
      <div class="link-div">Shop</div>
      <div class="link-div"><router-link style="color: black" class="router-link" to="/about">About</router-link></div>

    </div>
    <v-spacer></v-spacer>
    <div class="navbar-menu2">
      <div class="link-div"><router-link style="color: black" class="router-link" to="/memberdetail" v-if="accessToken != null"><v-icon>mdi-account-circle</v-icon></router-link></div>
      <div v-if="accessToken != null">UserName</div>
      <div class="link-div"><router-link style="color: black" class="router-link" to="#" v-if="accessToken != null" v-on:click.native="logout()">Logout</router-link></div>
      <div class="link-div"><router-link style="color: black" class="router-link" to="/login" v-if="accessToken==null">Login</router-link></div>
      <div class="link-div"><router-link style="color: black" class="router-link" to="/join" v-if="accessToken==null">Join</router-link></div>
      <router-link to="#" v-show="accessToken" v-on:click.native="unlink()"> | Kakao Unlink</router-link>
      <div class="link-div">Help</div>
      </div>
      <div class="mr-lg-16">
        <div class="navbar-search">
          <v-btn x-small fab plain><v-icon>mdi-magnify</v-icon></v-btn>
          <v-text-field class="mt-lg-5 mt-md-5"
                        placeholder="친구검색"
                        rounded
                        filled="#ffcc99"
                        dense
          ></v-text-field>
        </div>
      </div>
      <div class="nav_toggle">
        <v-btn icon >
          <v-icon @click="toggleDown" >mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
  </nav>
</template>

<script>

import router from "../../router";

export default {
  name:"header",
  data()  {
    return{
      accessToken: window.Kakao.Auth.getAccessToken(),
      reloadPage:true
    }
  },
  methods:{
    toggleDown(){
      const nav_toggle = document.querySelector('.nav_toggle');
      const menu1 = document.querySelector('.navbar-menu1');
      const menu2 = document.querySelector('.navbar-menu2');

      nav_toggle.addEventListener('click',()=>{
        menu1.classList.toggle('active');
        menu2.classList.toggle('active');
      });
    },
    logout(type) { // 카카오 로그아웃
      window.Kakao.Auth.logout(function () {
        if (type) { // "unlink"
          alert("Unlinked Kakao Account!");
        } else {
          alert("Logout Account!");
        }
        // router.push("login");
        // this.$nextTick( router.push("login"));
        router.go(router.currentRoute)


      });
    },
    unlink() {  // 카카오 계정 연결끊기
      let logout = this.logout;
      window.Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (response) {
          console.log(response);
          logout("unlink");
        },
        fail: function (error) {
          console.log(error);
          alert(error);
          return;
        },
      });
    },
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


}



</style>