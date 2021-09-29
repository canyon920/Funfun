<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div></div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->

<!--&lt;!&ndash;import axios from "axios";&ndash;&gt;-->
<!--&lt;!&ndash;import {bringMemberLoginDataFromServer, OauthSendServerData} from "@/service/member-login";&ndash;&gt;-->

<!--&lt;!&ndash;// const kakaoHeader = {&ndash;&gt;-->
<!--&lt;!&ndash;//   'Authorization': `5d4291f082b3ce17a2c2e98f4a57f404`,&ndash;&gt;-->
<!--&lt;!&ndash;//   'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',&ndash;&gt;-->
<!--&lt;!&ndash;// }&ndash;&gt;-->
<!--&lt;!&ndash;// const getKakaoToken = async (code) =>{&ndash;&gt;-->
<!--&lt;!&ndash;//   console.log('loginWithKakao')&ndash;&gt;-->
<!--&lt;!&ndash;//   try{&ndash;&gt;-->
<!--&lt;!&ndash;//     const data = {&ndash;&gt;-->
<!--&lt;!&ndash;//       grant_type: 'authorization_code',&ndash;&gt;-->
<!--&lt;!&ndash;//       client_id: '08cab2069b3bd09e1d21ad0b6746e4d9',&ndash;&gt;-->
<!--&lt;!&ndash;//       redirect_uri: 'http://localhost:8080/login',&ndash;&gt;-->
<!--&lt;!&ndash;//       code: code,&ndash;&gt;-->
<!--&lt;!&ndash;//     }&ndash;&gt;-->
<!--&lt;!&ndash;//     const queryString = Object.keys(data)&ndash;&gt;-->
<!--&lt;!&ndash;//         .map(k=>encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))&ndash;&gt;-->
<!--&lt;!&ndash;//         .join('&')&ndash;&gt;-->
<!--&lt;!&ndash;//     const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader})&ndash;&gt;-->
<!--&lt;!&ndash;//     console.log('카카오 토큰', result)&ndash;&gt;-->
<!--&lt;!&ndash;//     //엑세스 토큰만 받아서 기존에 카카오토큰 저장하는거와 함꼐 쓰자&ndash;&gt;-->
<!--&lt;!&ndash;//     return result&ndash;&gt;-->
<!--&lt;!&ndash;//   } catch (e){&ndash;&gt;-->
<!--&lt;!&ndash;//     console.log(e)&ndash;&gt;-->
<!--&lt;!&ndash;//     return e&ndash;&gt;-->
<!--&lt;!&ndash;//   }&ndash;&gt;-->
<!--&lt;!&ndash;// }&ndash;&gt;-->
<!--&lt;!&ndash;// const getKakaoUserInfo = async () => {&ndash;&gt;-->
<!--&lt;!&ndash;//   let data = ''&ndash;&gt;-->
<!--&lt;!&ndash;//   await window.Kakao.API.request({&ndash;&gt;-->
<!--&lt;!&ndash;//     url: "/v2/user/me",&ndash;&gt;-->
<!--&lt;!&ndash;//     success: function (response){&ndash;&gt;-->
<!--&lt;!&ndash;//       data.response&ndash;&gt;-->
<!--&lt;!&ndash;//     },&ndash;&gt;-->
<!--&lt;!&ndash;//     fail: function (error){&ndash;&gt;-->
<!--&lt;!&ndash;//       console.log(error)&ndash;&gt;-->
<!--&lt;!&ndash;//     }&ndash;&gt;-->
<!--&lt;!&ndash;//   })&ndash;&gt;-->
<!--&lt;!&ndash;//   console.log('카카오 계정 정보', data)&ndash;&gt;-->
<!--&lt;!&ndash;//   return data&ndash;&gt;-->
<!--&lt;!&ndash;// }&ndash;&gt;-->


<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  methods: {&ndash;&gt;-->
<!--&lt;!&ndash;    name:"Auth",&ndash;&gt;-->
<!--&lt;!&ndash;    data(){&ndash;&gt;-->
<!--&lt;!&ndash;      return{&ndash;&gt;-->
<!--&lt;!&ndash;        access_code: "",&ndash;&gt;-->
<!--&lt;!&ndash;        access_token: "",&ndash;&gt;-->
<!--&lt;!&ndash;        refresh_token: ""&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    getAcessCode(){&ndash;&gt;-->
<!--&lt;!&ndash;      this.access_code = window.location.search.split('=')[1].split('&')[0]&ndash;&gt;-->
<!--&lt;!&ndash;      console.log(this.access_code)&ndash;&gt;-->
<!--&lt;!&ndash;      return this.access_code&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    async getAccessToken() {&ndash;&gt;-->
<!--&lt;!&ndash;      const kakaoHeader = {&ndash;&gt;-->
<!--&lt;!&ndash;        'Authorization': `5d4291f082b3ce17a2c2e98f4a57f404`,&ndash;&gt;-->
<!--&lt;!&ndash;        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',&ndash;&gt;-->
<!--&lt;!&ndash;      }&ndash;&gt;-->
<!--&lt;!&ndash;      // const data = {&ndash;&gt;-->
<!--&lt;!&ndash;      //   grant_type: 'authorization_code',&ndash;&gt;-->
<!--&lt;!&ndash;      //   client_id: '08cab2069b3bd09e1d21ad0b6746e4d9',&ndash;&gt;-->
<!--&lt;!&ndash;      //   redirect_uri: 'http://localhost:8080/login',&ndash;&gt;-->
<!--&lt;!&ndash;      //   code: this.access_code,&ndash;&gt;-->
<!--&lt;!&ndash;      // }&ndash;&gt;-->
<!--&lt;!&ndash;      await axios.post("https://kauth.kakao.com/oauth/token?" +&ndash;&gt;-->
<!--&lt;!&ndash;          "grant_type=authorization_code&" +&ndash;&gt;-->
<!--&lt;!&ndash;          "client_id=08cab2069b3bd09e1d21ad0b6746e4d9&" +&ndash;&gt;-->
<!--&lt;!&ndash;          "redirect_uri=http://localhost:8080/login&" +&ndash;&gt;-->
<!--&lt;!&ndash;          `code=${this.access_code}`, {headers:kakaoHeader})&ndash;&gt;-->
<!--&lt;!&ndash;        .then(res=>{&ndash;&gt;-->
<!--&lt;!&ndash;          console.log(res.access_token)&ndash;&gt;-->
<!--&lt;!&ndash;          console.log(res.refresh_token)&ndash;&gt;-->
<!--&lt;!&ndash;          this.access_token = res.access_token&ndash;&gt;-->
<!--&lt;!&ndash;          this.refresh_token = res.refresh_token&ndash;&gt;-->
<!--&lt;!&ndash;          window.Kakao.Auth.setAccessToken(res.access_token)&ndash;&gt;-->
<!--&lt;!&ndash;          window.localStorage.setItem("kakao_refresh_token", res.refresh_token)&ndash;&gt;-->

<!--&lt;!&ndash;          window.Kakao.API.request({&ndash;&gt;-->
<!--&lt;!&ndash;            url: '/v2/user/me',&ndash;&gt;-->
<!--&lt;!&ndash;            success: res => {&ndash;&gt;-->
<!--&lt;!&ndash;              OauthSendServerData.sendMemberEmail = res.kakao_account.email&ndash;&gt;-->
<!--&lt;!&ndash;              OauthSendServerData.sendMemberNicname = res.properties.nickname&ndash;&gt;-->
<!--&lt;!&ndash;              OauthSendServerData.sendMemberApi = "Kakao"&ndash;&gt;-->
<!--&lt;!&ndash;              OauthSendServerData.sendMemberProfile = res.properties.profile_image&ndash;&gt;-->
<!--&lt;!&ndash;              bringMemberLoginDataFromServer()&ndash;&gt;-->
<!--&lt;!&ndash;            },&ndash;&gt;-->
<!--&lt;!&ndash;            fail: function(error) {&ndash;&gt;-->
<!--&lt;!&ndash;              console.log(&ndash;&gt;-->
<!--&lt;!&ndash;                  'login success, but failed to request user information: ' +&ndash;&gt;-->
<!--&lt;!&ndash;                  JSON.stringify(error)&ndash;&gt;-->
<!--&lt;!&ndash;              )&ndash;&gt;-->
<!--&lt;!&ndash;            },&ndash;&gt;-->
<!--&lt;!&ndash;          })&ndash;&gt;-->

<!--&lt;!&ndash;        }).catch(error=>{&ndash;&gt;-->
<!--&lt;!&ndash;          console.error(error)&ndash;&gt;-->
<!--&lt;!&ndash;          console.error(error.error_description)&ndash;&gt;-->

<!--&lt;!&ndash;          })&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    // kakaoLogin(){&ndash;&gt;-->
<!--&lt;!&ndash;    //   console.log("#카카오로그인메소드")&ndash;&gt;-->
<!--&lt;!&ndash;    //   window.Kakao.Auth.login({&ndash;&gt;-->
<!--&lt;!&ndash;    //     scope: 'account_email, profile_image, profile_nickname',&ndash;&gt;-->
<!--&lt;!&ndash;    //     success: function(authObj) {&ndash;&gt;-->
<!--&lt;!&ndash;    //       console.log(authObj);&ndash;&gt;-->
<!--&lt;!&ndash;    //       window.Kakao.API.request({&ndash;&gt;-->
<!--&lt;!&ndash;    //         url: '/v2/user/me',&ndash;&gt;-->
<!--&lt;!&ndash;    //         success: res => {&ndash;&gt;-->
<!--&lt;!&ndash;    //           const kakao_account = res.kakao_account;&ndash;&gt;-->
<!--&lt;!&ndash;    //           console.log(kakao_account);&ndash;&gt;-->
<!--&lt;!&ndash;    //         },&ndash;&gt;-->
<!--&lt;!&ndash;    //         fail: function(error) {&ndash;&gt;-->
<!--&lt;!&ndash;    //           console.log(&ndash;&gt;-->
<!--&lt;!&ndash;    //               'login success, but failed to request user information: ' +&ndash;&gt;-->
<!--&lt;!&ndash;    //               JSON.stringify(error)&ndash;&gt;-->
<!--&lt;!&ndash;    //           )&ndash;&gt;-->
<!--&lt;!&ndash;    //         },&ndash;&gt;-->
<!--&lt;!&ndash;    //       })&ndash;&gt;-->
<!--&lt;!&ndash;    //     },&ndash;&gt;-->
<!--&lt;!&ndash;    //     fail: function(err) {&ndash;&gt;-->
<!--&lt;!&ndash;    //       console.log("##2",JSON.stringify(err))&ndash;&gt;-->
<!--&lt;!&ndash;    //     },&ndash;&gt;-->
<!--&lt;!&ndash;    //   })&ndash;&gt;-->
<!--&lt;!&ndash;    //&ndash;&gt;-->
<!--&lt;!&ndash;    // },&ndash;&gt;-->
<!--&lt;!&ndash;    //&ndash;&gt;-->
<!--&lt;!&ndash;    // getCookie (name){&ndash;&gt;-->
<!--&lt;!&ndash;    //   console.log("네임",name)&ndash;&gt;-->
<!--&lt;!&ndash;    //   const value = "; " + document.cookie;&ndash;&gt;-->
<!--&lt;!&ndash;    //   alert( document.cookie );&ndash;&gt;-->
<!--&lt;!&ndash;    //   const parts = value.split("; " + name + "=");&ndash;&gt;-->
<!--&lt;!&ndash;    //   console.log("밸류",value);&ndash;&gt;-->
<!--&lt;!&ndash;    //   console.log("ㄴㅇㄹㄴㅇㄹ",parts);&ndash;&gt;-->
<!--&lt;!&ndash;    //   if (parts.length === 2) return parts.pop().split(";").shift();&ndash;&gt;-->
<!--&lt;!&ndash;    // },&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  mounted() {&ndash;&gt;-->
<!--&lt;!&ndash;    this.getAcessCode()&ndash;&gt;-->
<!--&lt;!&ndash;    this.getAccessToken()&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->


<!--&lt;!&ndash;};&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->
<!--<template>-->
<!--  <div>-->
<!--    <div id="naverIdLogin" style="display: none"></div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {getKakaoToken, getKakaoUserInfo} from "@/service/login";-->
<!--export default {-->
<!--  name: 'Auth',-->
<!--  created() {-->
<!--    if (this.$route.query.code) {-->
<!--      this.setKakaoToken();-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--  },-->
<!--  methods: {-->
<!--    async setKakaoToken () {-->
<!--      console.log('카카오 인증 코드', this.$route.query.code);-->
<!--      const { data } = await getKakaoToken(this.$route.query.code);-->
<!--      if (data.error) {-->
<!--        alert('카카오톡 로그인 오류입니다.');-->
<!--        this.$router.replace('/login');-->
<!--        return;-->
<!--      }-->
<!--      window.Kakao.Auth.setAccessToken(data.access_token);-->
<!--      this.$cookies.set('access-token', data.access_token, '1d');-->
<!--      this.$cookies.set('refresh-token', data.refresh_token, '1d');-->
<!--      await this.setUserInfo();-->
<!--      this.$router.replace('/');-->
<!--    },-->
<!--    async setUserInfo () {-->
<!--      const res = await getKakaoUserInfo();-->
<!--      const userInfo = {-->
<!--        name: res.kakao_account.profile.nickname,-->
<!--        platform: 'kakao',-->
<!--      };-->
<!--      this.$store.commit('setUser', userInfo);-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->
