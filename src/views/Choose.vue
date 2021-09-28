<template>
<div class = "first">
  <div class = "second">
    <div  v-if="give" class ="second-first">
    <div class = "second inner">
      <v-text-field
          label="이름"
          outlined
          dense
      ></v-text-field>
      <v-text-field
          label="계좌번호"
          outlined
          dense
      ></v-text-field>
      <v-btn
          class="ma-2"
          outlined
          color="indigo"
      >
        확인
      </v-btn>
    </div>
    </div>
    <div  v-else-if="givepresent" class ="second-second">
      <v-text-field
          label="이름"
          outlined
          dense
      ></v-text-field>
      <v-text-field
          label="주소"
          outlined
          dense
      ></v-text-field>
      <v-text-field
          label="전화번호"
          outlined
          dense
      ></v-text-field>
      <v-btn
          class="ma-2"
          outlined
          color="indigo"
      >
        확인
      </v-btn>
    </div>

    <div v-else class = "choose-button">
    <v-btn @click="onClickButton1()"
        class="ma-2"
        outlined
        color="indigo"
    >
      계좌로 받기
    </v-btn>
    <v-btn @click="onClickButton2()"
        class="ma-2"
        outlined
        color="indigo"
    >
      상품으로받기
    </v-btn>
    </div>
  </div>
  <div class="second-bottom">

  </div>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: 'Choose',
  data(){
    return{
       give:false,
      givepresent:false,
    }
  },
  methods:{
    onClickButton1(){

      this.give = true
    },
    onClickButton2(){
      this.givepresent = true
    }
  },

}

</script>

<style>
.first{
  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
  padding-top: 100px;
  padding-bottom: 100px;}
.first .second{
  align: center;
}
</style>