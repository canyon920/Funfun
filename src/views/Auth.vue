<template>
  <div></div>
</template>

<script>

import axios from "axios";
import {bringMemberLoginDataFromServer, OauthSendServerData} from "@/service/member-login";

// const kakaoHeader = {
//   'Authorization': `5d4291f082b3ce17a2c2e98f4a57f404`,
//   'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
// }
// const getKakaoToken = async (code) =>{
//   console.log('loginWithKakao')
//   try{
//     const data = {
//       grant_type: 'authorization_code',
//       client_id: '08cab2069b3bd09e1d21ad0b6746e4d9',
//       redirect_uri: 'http://localhost:8080/login',
//       code: code,
//     }
//     const queryString = Object.keys(data)
//         .map(k=>encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
//         .join('&')
//     const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader})
//     console.log('카카오 토큰', result)
//     //엑세스 토큰만 받아서 기존에 카카오토큰 저장하는거와 함꼐 쓰자
//     return result
//   } catch (e){
//     console.log(e)
//     return e
//   }
// }
// const getKakaoUserInfo = async () => {
//   let data = ''
//   await window.Kakao.API.request({
//     url: "/v2/user/me",
//     success: function (response){
//       data.response
//     },
//     fail: function (error){
//       console.log(error)
//     }
//   })
//   console.log('카카오 계정 정보', data)
//   return data
// }


export default {
  methods: {
    name:"Auth",
    data(){
      return{
        access_code: "",
        access_token: "",
        refresh_token: ""
      }
    },
    getAcessCode(){
      this.access_code = window.location.search.split('=')[1].split('&')[0]
      console.log(this.access_code)
      return this.access_code
    },
    async getAccessToken() {
      const kakaoHeader = {
        'Authorization': `5d4291f082b3ce17a2c2e98f4a57f404`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      }
      // const data = {
      //   grant_type: 'authorization_code',
      //   client_id: '08cab2069b3bd09e1d21ad0b6746e4d9',
      //   redirect_uri: 'http://localhost:8080/login',
      //   code: this.access_code,
      // }
      await axios.post("https://kauth.kakao.com/oauth/token?" +
          "grant_type=authorization_code&" +
          "client_id=08cab2069b3bd09e1d21ad0b6746e4d9&" +
          "redirect_uri=http://localhost:8080/login&" +
          `code=${this.access_code}`, {headers:kakaoHeader})
        .then(res=>{
          console.log(res.access_token)
          console.log(res.refresh_token)
          this.access_token = res.access_token
          this.refresh_token = res.refresh_token
          window.Kakao.Auth.setAccessToken(res.access_token)
          window.localStorage.setItem("kakao_refresh_token", res.refresh_token)

          window.Kakao.API.request({
            url: '/v2/user/me',
            success: res => {
              OauthSendServerData.sendMemberEmail = res.kakao_account.email
              OauthSendServerData.sendMemberNicname = res.properties.nickname
              OauthSendServerData.sendMemberApi = "Kakao"
              OauthSendServerData.sendMemberProfile = res.properties.profile_image
              bringMemberLoginDataFromServer()
            },
            fail: function(error) {
              console.log(
                  'login success, but failed to request user information: ' +
                  JSON.stringify(error)
              )
            },
          })

        })
    },
    // kakaoLogin(){
    //   console.log("#카카오로그인메소드")
    //   window.Kakao.Auth.login({
    //     scope: 'account_email, profile_image, profile_nickname',
    //     success: function(authObj) {
    //       console.log(authObj);
    //       window.Kakao.API.request({
    //         url: '/v2/user/me',
    //         success: res => {
    //           const kakao_account = res.kakao_account;
    //           console.log(kakao_account);
    //         },
    //         fail: function(error) {
    //           console.log(
    //               'login success, but failed to request user information: ' +
    //               JSON.stringify(error)
    //           )
    //         },
    //       })
    //     },
    //     fail: function(err) {
    //       console.log("##2",JSON.stringify(err))
    //     },
    //   })
    //
    // },
    //
    // getCookie (name){
    //   console.log("네임",name)
    //   const value = "; " + document.cookie;
    //   alert( document.cookie );
    //   const parts = value.split("; " + name + "=");
    //   console.log("밸류",value);
    //   console.log("ㄴㅇㄹㄴㅇㄹ",parts);
    //   if (parts.length === 2) return parts.pop().split(";").shift();
    // },
  },
  mounted() {
    this.getAcessCode()
    this.getAccessToken()
  }


};
</script>

