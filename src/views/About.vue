<template>
  <div class="about">
    <h1>
      <button @click="getToken">Detail Page</button> |
    </h1>

    <h1>
      <router-link @click="getToken" :to="{name: 'detail_page_Q', query:{memberId: memberPwd}}">쿼리로 받기</router-link>
    </h1>

    <h1>
      <router-link :to="{name:'detail_page_P', params:{memberId: memberPwd}}">파람으로 받기</router-link>
    </h1>

    <div>
      <a href="https://Kauth.kakao.com/oauth/authorize?client_id=c567ff70b09b303d37db90e3edcc4f37&redirect_uri=http://localhost:8080&response_type=code&state=state&prompt=login">
        <h1>카카오 코드인가 (로그인창띄움) 받기</h1>
      </a>
    </div>
    <div>
      <a href="https://Kauth.kakao.com/oauth/authorize?client_id=c567ff70b09b303d37db90e3edcc4f37&redirect_uri=http://localhost:8080&response_type=code">
        <h1>카카오 그냥 인가코드받기</h1>
      </a>
    </div>
    <div>
      <a href="https://Kauth.kakao.com/oauth/authorize?client_id=c567ff70b09b303d37db90e3edcc4f37&redirect_uri=http://localhost:8080&response_type=code&scope=account_email&state=state">
        <h1>카카오톡 스콥 코드인가 받기(스콥은 왜쓰는거지... 이것은 추가동의를 위함)</h1>
      </a>
    </div>

  </div>
</template>

<script>


export default{
  name: "about",
  data(){
    return{
      memberEmail:'kmh1@naver.com',
      memberPwd: '1234',
    }
  },
  computed:{
    getMemberId(){
      return this.$store.state.member.memberId
    }
  },
  methods:{
    async getToken () {
      console.log("메소드 실행")
      this.$store.dispatch('member/normalLogin', {
        memberEmail: this.memberEmail,
        memberPwd: this.memberPwd
      }).then(
          this.$router.push("/detail-page")
      )



      // if (this.accessToken.length) {
      //   console.log("로그인 성공 이동해야한다")
      //   this.$router.push("/detail-page")
      // }
    }
  },

}

</script>
