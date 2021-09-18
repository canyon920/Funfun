<template>
  <v-card
      class="mx-auto mt-10 mb-16 pb-8"
      width="400"
      outlined
  >
    <div class="loginimg">
      <v-img max-height="60"
             max-width="140" src="@/assets/login/login.png"></v-img>
    </div>
    <div class="pl-5 pr-5 pt-3">
      <div class="pb-5">
          <div class="loginform">
            <div class="email">
              <v-text-field
                  label="Your email"
                  hint="xxx@example.com"
                  v-model="email"
                  persistent-hint
              ></v-text-field>
            </div>
            <div class="password">
              <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  hint="At least 8 characters"
                  label="Password"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>
            </div>
          </div>
      </div>
      <div class="pb-5">
        <div class="loginbtn">
          <v-btn block large color ="rgba(229, 114, 0)"><strong style="color: white">Login</strong></v-btn>
        </div>
      </div>
      <div class="joinmember">
        <p style="padding-right: 5px">Not a member?</p>
        <router-link style="color: orange" class="router-link" to="/join">Signup Now</router-link>
      </div>

    </div>
  </v-card>
</template>
<script>
import axios from "axios";
import {funTokens} from "@/service/member-login";

export default {
  data(){
    return{
      show1:false,
      email:'',
      password:'',
      rules:{
        required: value => !!value || 'Required.',
        min: v => v.length>=8 || 'Min 8 characters',
        emailMatch:() =>('The email and Password you entered do not match'),
      },
    }
  },
  methods:{
    async tryLogin() {
      let form = new FormData()
      form.append('username', this.email)
      form.append('password', this.password)
      await axios.post("http://localhost:9090/api/login",form)
      .then(res=>{
        console.log("응답 : ", res)
        funTokens.access_token = res.data.access_token
        funTokens.refresh_token = res.data.refresh_token
        //세션스토리지에 -> 엑세스토큰저장
        window.sessionStorage.setItem('access_token',funTokens.access_token)
        //로컬스토리지에 -> 리프레시토큰저장
        window.localStorage.setItem('refresh_token',funTokens.refresh_token)
      }).catch(e=>{
        console.log(e)
      })
    },
    /**
     * 여기서부터 이메일로그인시 멤버정보들 가져오도록 작성하자( 헤더에 위에서 받은 엑세스토큰받아서 날릴수 있도록 작성 후 실제 적용해 보자 )
     * */
    async bringEmailLoginMemberInfo() {
      let form = new FormData()
      form.append('email', this.email)
    }
  },
  mounted() {
  }
}
</script>
<style>
.loginimg{
  padding-left: 130px;
  padding-top: 20px;
}
.joinmember{
  display: flex;
  padding-left: 70px;
}
</style>