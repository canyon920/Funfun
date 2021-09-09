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
        console.log("응답: "+ res.data.access_token)
        console.log("응답: "+ res.data.refresh_token)
        this.accessToken = res.data.access_token
        this.refreshToken = res.data.refresh_token
      }).catch(console.log("잘못된 요청입니다."))
      console.log(this.accessToken)
      console.log(this.refreshToken)
      if (this.accessToken != null) {
        window.location("/detail-page")
      }
    }
  },

}

</script>
