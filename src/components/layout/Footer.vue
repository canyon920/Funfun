<template>
  <div class="footer">
    <v-footer color="#e6e6e6" padless>
        <div class="footer_logo">
          <v-img class="ml-lg-16" max-height="80"
                 max-width="180" src="@/assets/footerlogo2.png"></v-img>
        </div>
      <v-spacer></v-spacer>
        <div class="footer_btn">
          <v-btn to="/" text rounded plain color="grey">Home</v-btn>
          <v-btn x-small plain disabled color="black">|</v-btn>
          <v-btn text rounded plain color="grey" @click="onClickRedirect1">Trello</v-btn>
          <v-btn x-small plain disabled color="black">|</v-btn>
          <v-btn text rounded plain color="grey" @click="onClickRedirect2">GitHub</v-btn>
        </div>

      <v-container fluid class="footer_content">
          <v-col class="pb-0 text-left grey--text" >
            (TEAM) LEADER: 김명훈 MEMBER: 김규민, 김동원, 신대현, 신혜림, 이지연
          </v-col>
          <v-col class="pb-0 pt-0 text-left grey--text" >
            (주소) 가산디지털 2로 123
          </v-col>
          <v-col class="pb-0 pt-0 text-left grey--text" >
            (EMAIL) funfun@gmail.com (CS) 1544-0000 평일 09:00~19:00
          </v-col>
          <v-col class="pl-0 py-4 text-center grey--text"  cols="12">
            {{ new Date().getFullYear() }} — <strong>FunfunHaeJwo Team. All right reserved</strong>
          </v-col>
      </v-container>
    </v-footer>
  </div>
</template>
<script>
export default {
  data: () => ({

  }),
  methods:{
    onClickRedirect1(){
      window.open("https://trello.com/b/0LoAcpB0/funfun%ED%95%B4%EC%A4%98", "_blank");
    },
    onClickRedirect2(){
      window.open("https://trello.com/b/0LoAcpB0/funfun%ED%95%B4%EC%A4%98", "_blank");
    }
  }
}
</script>
<style>

.footer_btn{
  padding-right: 80px;
  padding-top: 20px;
}
.footer_content{
  padding-left: 70px;
}
@media screen and (max-width: 1300px ) {
  .footer_btn{
    padding-right: 20px;
    padding-top: 22px;
  }
  .footer_content{
    padding-left: 5px;
  }
}

</style>

