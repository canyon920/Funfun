<template>
  <v-container>
    <div class="background">
      <router-link to="/">
      <div class="xbox">
        <v-btn
            color="blue darken-1"
            class="v-card-actions"
            text
            @click="dialog = false"
        >
          X
        </v-btn>
      </div>
      </router-link>
      <v-row class="text-center">
        <v-col class="mb-4">

          <h1 class="display-2 font-weight-bold mb-16" style="margin-top: 20px">
            내정보
          </h1>

          <div class="top_profile">

            <div class="img-div">
              <img id="imgDiv" class="profile-img" :src="loginMember.memberProfile">
            </div>

            <span class="profile">{{ loginMember.memberNicname }}님</span>
          </div>


          <div class="menu-list">

          <div class="link-div2"><router-link style="color: black; text-decoration: none" class="router-link" :to="{name: 'FundingList', params: {memberId: loginMember.memberId}}">
            <h2 class="display-1 font-weight-bold mb-2">
              나의 펀딩 리스트
            </h2></router-link></div>


          <div class="link-div2"><router-link style="color: black; text-decoration: none" class="router-link" :to="{name: 'FriendList', params: {memberId: loginMember.memberId}}">
            <h2 class="display-1 font-weight-bold mb-2">
              친구 리스트 찾기
            </h2></router-link></div>

          <div class="link-div2"><router-link style="color: black; text-decoration: none" class="router-link" :to="{name: 'MywishList', params: {memberId: loginMember.memberId}}">
            <h2 class="display-1 font-weight-bold mb-2">
              내가 찜한 리스트
            </h2></router-link></div>

          <div class="link-div2"><router-link style="color: black; text-decoration: none" class="router-link" :to="{name: 'JoinedList', params: {memberId: loginMember.memberId}}">
            <h2 class="display-1 font-weight-bold mb-2">
              내가 만든 펀딩 리스트
            </h2></router-link></div>

          <div class="link-div2"><router-link style="color: black; text-decoration: none" class="router-link" :to="{name: 'PurchaseList', params:{memberId: loginMember.memberId}}">
            <h2 class="display-1 font-weight-bold mb-2">
              구매목록
            </h2>
          </router-link></div>

          <div class="link-div2"><router-link style="color: black; text-decoration: none" class="router-link" :to="{name:'Editpage', params: {memberId: loginMember.memberId}}">
            <h2 class="display-1 font-weight-bold mb-2">
              회원 정보 설정
            </h2>
          </router-link></div>

          <div class="link-div2"><router-link style="color: black; text-decoration: none" class="router-link" to="/find/password">
            <h2 class="display-1 font-weight-bold mb-2">
              나의 비밀번호 설정
            </h2>
          </router-link></div>


          <div class="link-div2" @click="logOut" style="cursor: pointer">
            <h2 class="display-1 font-weight-bold mb-2">
              로그아웃</h2></div>

          </div>
        </v-col>


      </v-row>
    </div>
  </v-container>

</template>

<script>


export default {
  name: 'menulist',
  methods: {
    hideHeader(){
      document.getElementById('nav').hidden = true;
    },
    displayHeader() {
      document.getElementById('nav').hidden = false;
    },
    loginInfoMatch() {
      this.loginMember = JSON.parse(window.localStorage.getItem('login_member'))
      if (!this.loginMember.memberProfile) {
        this.loginMember.memberProfile = require('@/assets/logo/img-normal.jpg')
      }
    },
    Flogout(){
      window.localStorage.clear()
      window.sessionStorage.clear()
      this.$router.go(0)
    },
    Klogout() { // 카카오 로그아웃
      let router = this.$router
      window.Kakao.Auth.logout(function () {
        window.localStorage.clear()
        window.sessionStorage.clear()
        router.go(0)
      })
    },
    logOut() {
      if (this.loginMember.memberApi === "Kakao") {
        this.Klogout()
      } else {
        this.Flogout()
      }
    }
  },
  mounted() {
    this.hideHeader()
    this.loginInfoMatch()
  },
  beforeDestroy() {
    this.displayHeader()
  },
  components: {
  },
  data(){
    return{
      alert: true,
      loginMember : {
        memberId : 1,
        memberEmail : '',
        memberNicname : '춘식이-현재 서버없이 예시만 출력됩니다.',
        memberApi : '',
        memberRole : '',
        memberProfile : require('@/assets/logo/img-normal.jpg'),
      },
    }
  },
}

</script>
<style scoped>
span.profile {
  margin-left: 10px;
}
.img-div .profile-img {
  border-radius: 50%;
  height: 70px;
  width: 70px;
}

.background {
  margin-top: 60px;
  margin-bottom:300px;
}
.v-btn.v-size--default {font-size:25px;}
.v-card-actions { float:right;}
.profile {font-size:30px;}
.top_profile {
  float:left;
  margin-left:30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.menu-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
}
.link-div2 {
  margin-top: 25px;
}
.v-application .mb-16 {
  margin-bottom: 15px !important;
}

</style>