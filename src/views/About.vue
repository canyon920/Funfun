<template>
  <div class="about">
    <h1>
      <button @click="getToken">Detail Page</button> |
    </h1>

  </div>
</template>

<script>

import axios from "axios";

export default{
  name: "about",
  data(){
    return{
      memberEmail:'kmh1@naver.com',
      memberPwd: '1234',
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
      ).then(res => {
        console.log("About 응답: "+ res.data.access_token)
        console.log("About 응답: "+ res.data.refresh_token)
        this.accessToken = res.data.access_token
        this.refreshToken = res.data.refresh_token
      }).catch(e=>{
        console.log(e)
      })
      if (this.accessToken.length) {
        console.log("로그인 성공 이동해야한다")
        this.$router.push("/detail-page")
      }
    }
  },

}

</script>
