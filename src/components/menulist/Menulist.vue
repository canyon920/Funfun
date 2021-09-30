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
              <img class="profile-img" :src="imgNormal">
            </div>

            <span class="profile">김명훈님</span>
          </div>


          <div class="menu-list">

          <div class="link-div2"><router-link style="color: black" class="router-link" :to="{name: 'FundingList', params: {memberId: 1}}">
            <h2 class="display-1 font-weight-bold mb-2">
              나의 펀딩 리스트
            </h2></router-link></div>


          <div class="link-div2"><router-link style="color: black" class="router-link" :to="{name:'FriendList', params: {memberId: 1}}">
            <h2 class="display-1 font-weight-bold mb-2">
              친구 리스트 찾기
            </h2></router-link></div>

          <div class="link-div2"><router-link style="color: black" class="router-link" :to="{name:'MywishList', params: {memberId: 1}}">
            <h2 class="display-1 font-weight-bold mb-2">
              내가 찜한 리스트
            </h2></router-link></div>

          <div class="link-div2"><router-link style="color: black" class="router-link" :to="{name:'JoinedList', params: {memberId: 1}}">
            <h2 class="display-1 font-weight-bold mb-2">
              내가 참여한 펀딩 리스트
            </h2></router-link></div>

          <div class="link-div2"><router-link style="color: black" class="router-link" to="/">
            <h2 class="display-1 font-weight-bold mb-2">
              구매목록
            </h2>
          </router-link></div>

          <div class="link-div2"><router-link style="color: black" class="router-link" to="/">
            <h2 class="display-1 font-weight-bold mb-2">
              회원 정보 설정
            </h2>
          </router-link></div>

          <div class="link-div2"><router-link style="color: black" class="router-link" to="/">
            <h2 class="display-1 font-weight-bold mb-2">
              나의 비밀번호 설정
            </h2>
          </router-link></div>


          <div class="link-div2"><router-link style="color: black" class="router-link" to="/">
            <h2 class="display-1 font-weight-bold mb-2">
              로그아웃</h2></router-link></div>

          </div>
        </v-col>


      </v-row>
    </div>
  </v-container>

</template>

<script>


export default {
  name: 'menulist',
  props: ['name', 'logoImg', 'navLinks'],
  methods: {
    hideHeader(){
      document.getElementById('nav').hidden = true;
    },
    displayHeader() {
      document.getElementById('nav').hidden = false;
    }
  },
  mounted() {
    this.hideHeader()
  },
  beforeDestroy() {
    this.displayHeader()
  },
  components: {
  },
  data(){
    return{
      alert: true,
      imgNormal : require('@/assets/logo/img-normal.jpg')
    }
  },
}

</script>
<style>
.img-div .profile-img {
  border-radius: 50%;
  height: 70px;
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