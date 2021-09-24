<template>
<div class ="first-container">
  <div class ="second-up">
      <div class ="list">
        나의 펀딩 리스트
      </div>
    <div class = "box">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="6"
          >
            <div class = "title">
              내가 올린 펀딩리스트
            </div>

          </v-col>
          <v-col cols="12"
                 sm="6">

            <div class="navbar-search">

              <v-btn x-small fab plain><v-icon>mdi-magnify</v-icon></v-btn>
              <v-text-field class="mt-lg-5 mt-md-5"


                            rounded
                            filled="#ffcc99"
                            dense
                            v-model="search"></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <div class ="moreandmore"><router-link to="/wishlist">더보기</router-link></div>

    <div class ="merchandise">

      <div v-if="fundingS.length == 0">
        펀딩중인 상품이 없어요.
      </div>
      <div class = "funding" v-else style="width:1000px;" >

        <carousel :autoplay="true" :nav="false" >
<!--          <template slot="prev"><span class="prev" >prev</span></template>-->
          <div v-for="(row, idx) in fundingS" :key="idx">

            <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">

              <v-card
                  class="mx-auto"
                  width="250"
                  height="250"
              >
                <img
                    class="white--text align-end"
                    height="100px"
                    width="200px"
                    v-bind:src="row.presdeadimgUrl">



                <v-card-title>{{row.fundingTitle}}</v-card-title>

                <v-card-subtitle class="pb-0">
                  {{row.fundinging}}
                </v-card-subtitle>
                  <div class="progressBar-div">
                    <div class="progressBar" :style="{width :row.progressBarPercent +'%'}">
                      <!--            프로그래스 바            -->
                    </div>
                  </div>

                  <v-card-text class="text--primary">
                    <div class ="fundingname">{{row.fundingname}}님의 펀딩 상품</div>

                    <div class="fundingmoeny">{{row.fundingMoney}}원 펀딩</div>
                  </v-card-text>

              </v-card>
            </div>

            <!--    <template slot="next"><span class="next">next</span></template>-->
          </div>
        </carousel>

      </div>
      </div>

      <div class="text-center">
        <v-btn  depressed elevation="2"><router-link to="/showfriend">♡친구에게 보여주기</router-link></v-btn>
      </div>

    </div>

    </div>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";

export  default {
  name: 'Fundingsearch',
  components:{carousel},
  props:{
    bringfundingsearch:{
      type: Array
    }


  },
  data(){
    return {
      search:'',

      fundingS:[
        {
          presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
          fundingTitle:'펀딩타이틀1',fundinging: '진행중',
          progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
        },
        {
          presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
          fundingTitle:'펀딩타이틀1',fundinging: '진행중',
          progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
        },
        {
          presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
          fundingTitle:'펀딩타이틀1',fundinging: '진행중',
          progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
        },
        {
          presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
          fundingTitle:'펀딩타이틀1',fundinging: '진행중',
          progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
        },

      ],


    }
  },
}
</script>

<style>

.first-container .second-up{
max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
margin-top: 100px;

}
.first-container .second-up .list{
padding-bottom: 50px;
font-size:30px;
}
.box{
border: 3px solid rgb(229, 114, 0);
border-radius: 30px;
font-size:20px;


}
.title{
padding-top: 50px;
padding-left: 70px;
}
.navbar-search{
  display: flex;
padding-top: 20px;
padding-right: 30px;
align-items: center;


}
.merchandise{
padding: 50px;
align: center;
position: relative;
}

.text-center{

padding-top: 50px;
padding-bottom: 30px;
}
.moreandmore{
  text-align: right;
  padding-right: 30px;
}
.card-div{
  display: flex;
}
.funding{

}

.progressBar-div {
  position: relative;
  display: block;
  height: 8px;
  width: 70%;
  background-color: rgba(229, 114, 0, .2);
  left: 70px;
  bottom: 15px;

}
.progressBar-div .progressBar {
  height: 8px;
  background-color: rgb(229, 114, 0);
  /*width: 30%;*/
}

</style>