<template>
  <div class="parent-box-login">
    <transition name="selectLogin-fade">
    <v-card
        class="mx-auto mt-10 mb-16 pb-16"
        max-width="400"
        outlined
        :class="{active : funlogintransform, deactive : !funlogintransform}"
    >
      <div class="login">
        <div class="pl-5 pr-5 pt-6">
          <v-list-item>
            <v-list-item-content>
              <div class="pb-7">
                <div class="kakao login">
                  <login-kakao></login-kakao>
                </div>
              </div>
              <v-list-item-subtitle class="text-center">----------------------------------- or
                -----------------------------------
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="pt-5">
            <div class="login_option" style="width: 326px">
              <v-btn class="mx-5" block large color="rgba(229, 114, 0)" @click="funloginShowMethod"
                     style="color: white;"><strong>Funfun해줘 Email</strong></v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
    </transition>
    <transition name="funlogin-fade">
      <LoginFunfun v-show="funloginShow" class="funlogin"/>
    </transition>
  </div>
</template>
<script>


import LoginKakao from "./LoginKakao";
import LoginFunfun from "@/components/login/LoginFunfun";

export default {
  name: 'Login',
  data(){
    return{
      funloginShow: false,
      funlogintransform: false
    }
  },
  components:{
    LoginKakao,
    LoginFunfun
  },
  methods:{
    funloginShowMethod() {
      this.funloginShow = !this.funloginShow
      this.funlogintransform = !this.funlogintransform
    }
  }
}


</script>
<style scoped>
.mx-auto.mt-10.mb-16.pb-8.funlogin.v-card.v-sheet.v-sheet--outlined.theme--light {
  margin-left: 0px !important;
}

.parent-box-login {
  margin-top: 5%;
  margin-bottom: 15%;
  display: flex;
  flex-direction: row;
}
.login {

}
.login_option{
  font-size: 15px;
  display: flex;
}


.active {
  transition: .8s;
  transform: translateX(100px);
}
.deactive {
  transition: .8s;
}


.funlogin-fade-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.funlogin-fade-enter-active,
.funlogin-fade-leave-active {
  transition: all .8s ease-out;
}
.funlogin-fade-leave-to {
  transform: translateX(-100px);
}

</style>
