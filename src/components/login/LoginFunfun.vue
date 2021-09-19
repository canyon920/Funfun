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
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                counter
                @click:append="show1 = !show1"
            ></v-text-field>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <div class="loginbtn" @click="tryLogin">
          <v-btn block large color ="rgba(229, 114, 0)"><strong style="color: white">Login</strong></v-btn>
        </div>
      </div>
      <div class="joinmember">
        <p style="padding-right: 5px">Not a member?</p>
        <router-link style="color: orange" class="router-link" to="/join">Signup Now</router-link>
      </div>
      <!--      <div>-->
      <!--        <button @click="bringEmailLoginMemberInfo">요청</button>-->
      <!--      </div>-->

    </div>
  </v-card>
</template>
<script>
import axios from "axios";
import {funTokens, memberObj} from "@/service/member-login";
import Header from "@/components/layout/Header";

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
            funTokens.access_token = res.data.access_token
            funTokens.refresh_token = res.data.refresh_token
            //세션스토리지에 -> 엑세스토큰저장
            window.sessionStorage.setItem('access_token',funTokens.access_token)
            //로컬스토리지에 -> 리프레시토큰저장
            window.localStorage.setItem('refresh_token',funTokens.refresh_token)

            this.bringEmailLoginMemberInfo()

          })
          .catch(e=>{
            console.log(e)
            alert("로그인 할 수 없습니다.")
            this.$router.push("/",Header.methods.isLogin())
          })
    },
    async bringEmailLoginMemberInfo() {
      let form = new FormData()
      form.append('email', this.email)
      let access_token = window.sessionStorage.getItem('access_token')
      let cofig = {
        headers:{
          Authorization : `Bearer ${access_token}`
        }
      }
      await axios.post("http://localhost:9090/api/fun/get/memberInfo",form,cofig).then(res => {
        memberObj.memberId = res.data.id
        memberObj.memberEmail = res.data.email
        memberObj.memberNicname = res.data.nic_name
        memberObj.memberApi = res.data.login_api
        memberObj.memberRole = res.data.role
        memberObj.memberProfile = res.data.profileImg

        let login_member = JSON.stringify(memberObj)
        window.localStorage.setItem('login_member', login_member)

        this.$router.push("/",Header.methods.isLogin())

      }).catch(e=>{
            console.log(e)
            alert("로그인 할 수 없습니다.")
            this.$router.push("/",Header.methods.isLogin())
          }
      )
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