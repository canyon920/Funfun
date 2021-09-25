<template>
  <v-container>
    <div class="background">
      <v-row class="text-center">
        <v-col class="mb-4">
          <br/><br/><br/><br/><br/>

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

          <br/><br/><br/><br/><br/>


          <h1 class="display-2 font-weight-bold mb-16">
            내정보
          </h1>

          <div class="top_profile">

            <v-avatar
                color="grey"
                size="80"
                style="">
            </v-avatar>

            <span class="profile">김명훈님</span>
          </div>

          <br/><br/><br/><br/><br/><br/>
          <div class="link-div2"><router-link style="color: black" class="router-link" to="/">
            <h2 class="display-1 font-weight-bold mb-2">
              나의 펀딩 리스트 찾기
            </h2></router-link></div>


          <div class="link-div2"><router-link style="color: black" class="router-link" to="/">
            <h2 class="display-1 font-weight-bold mb-2">
              친구 리스트 찾기
            </h2></router-link></div>

          <div class="link-div2"><router-link style="color: black" class="router-link" to="/">
            <h2 class="display-1 font-weight-bold mb-2">
              내가 찜한 리스트
            </h2></router-link></div>

          <div class="link-div2"><router-link style="color: black" class="router-link" to="/">
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
        </v-col>


      </v-row>
    </div>
  </v-container>

</template>

<script>


export default {
  name: 'menulist',
  props: ['name', 'logoImg', 'navLinks'],
  methods: {},
  mounted() {},
  components: {
  },
  data(){
    return{alert: true,
    }
  }
}

</script>
<style>
.background {margin-bottom:300px;}
.v-btn.v-size--default {font-size:25px;}
.v-card-actions { float:right;}
.display-1 { margin-top:25px; }
.profile {font-size:30px;  }
.top_profile {float:left; margin-left:200px;}

</style>