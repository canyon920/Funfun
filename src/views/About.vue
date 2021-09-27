<template>
  <div class="about">
    <h1>
      <button @click="getToken">Detail Page</button> |
    </h1>
    <!--라우터 쿼리 / 파람 예시-->
    <h1>
      <router-link @click="getToken" :to="{name: 'detail_page_Q', query:{productId: memberPwd}}">쿼리로 받기</router-link>
    </h1>

    <h1>
      <router-link :to="{name:'detail_page_P', params:{productId: memberPwd}}">파람으로 받기</router-link>
    </h1>
    <!--라우터 쿼리 / 파람 예시 여기까지-->

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
