<template>
  <v-app id="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-link to="/about">Login Page</router-link>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',

  data (){
    return{
      memberEmail:'kmh1@naver.com',
      memberPwd: '1234',
      accessToken: '',
      refreshToken: ''
    }
  },

  methods:{
    async getToken () {
      console.log(this.memberEmail)
      console.log(this.memberPwd)
      let form = new FormData();
      form.append("username", this.memberEmail)
      form.append("password", this.memberPwd)
      await axios.post("http://localhost:9090/api/login",form,
          //     {
          //   headers:{
          //     "Content-Type": "application/x-www-form-urlencoded"
          // }
          //     }
          //     {
          //   params:{
          //     username:this.memberEmail,
          //     password:this.memberPwd
          //   }
          // }
      ).then(res => {
        console.log("응답: "+ res.data.access_token)
        console.log("응답: "+ res.data.refresh_token)
        this.accessToken = res.data.access_token
        this.refreshToken = res.data.refresh_token
      }).catch(console.log("잘못된 요청입니다."))
      console.log(this.accessToken)
      console.log(this.refreshToken)
    }
    },

  mounted() {
    this.getToken()
  }
};
</script>

<style>
#app {
  /*구글폰트*/
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  align-items: center;
}
</style>
