<template>
  <div class ="first-container">
    <div class ="second-up">

      <div class = "box" style=" box-shadow: 0.5px 0.5px 5px rgba(229, 114, 0, 0.4)">
        <v-container>
          <v-row>
            <v-col
                cols="12"
                sm="6"
            >
              <div class = "fundingtitle" style=" font-size: 25px; font-weight: 700;">
               {{bringjoin.title}}
              </div>

            </v-col>
<!--            <v-col cols="12"-->
<!--                   sm="6">-->
<!--              <div class="navbar-search">-->
<!--                <v-btn x-small fab plain><v-icon>mdi-magnify</v-icon></v-btn>-->
<!--                <v-text-field class="mt-lg-5 mt-md-5"-->
<!--                              placeholder="친구검색"-->
<!--                              rounded-->
<!--                              filled="#ffcc99"-->
<!--                              dense-->
<!--                ></v-text-field>-->
<!--              </div>-->
<!--            </v-col>-->
          </v-row>
        </v-container>

        <div class ="moreandmore1"><router-link to="/wishlist" style="text-decoration: none; color: rgb(229, 114, 0)">더보기</router-link></div>
         <div class = "nofunding" style="color: #e57200;">
          <div v-if="findline.length ==0" class ="merchandise">
            펀딩중인 상품이 없어요
          </div>
          <div class = "existfunding" v-else>
            <Deadline :bringmainDeadline="findline" />
          </div>
         </div>
          <div class="text-center">
            <v-btn  depressed elevation="2"><router-link to="/showfriend" style="text-decoration: none; color: rgb(229, 114, 0); font-size: 15px">♡친구에게 보여주기</router-link></v-btn>
          </div>


      </div>
    </div>
  </div>
</template>
<script>
import Deadline from '../main/Deadline';

export  default {
  name: 'Fundingsearch',
  props:{
    bringfundingsearch:{
      type:Array
    },
  bringjoin:{
     type: String,
  }
  },
  components:{Deadline},
  data(){
    return{
      Join:' 내가 올린 펀딩리스트',
      findline:[
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub2.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',fundinging: '진행중',
          progressBarPercent: 20, fundingname: 'ㅇㅇdsadasd asd as dsa dasdas das',fundingMoney: 1000,
          fundingId:1
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'월급 탄 거 안다 도와주라',fundinging: '진행중', progressBarPercent: 20,
          fundingname: '코코',fundingMoney: 25000,
          fundingId:2
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'"우리 아이"가 정말 갖고 싶어 해요',fundinging: '진행중',
          progressBarPercent: 50, fundingname: '곽두팔',fundingMoney: 3000,
          fundingId:3
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'일단 고마워',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
          fundingId:4
        },

      ],

    }
  }
}
</script>

<style>

.first-container .second-up{
  max-width:1100px;
  left:0; right:0; margin-left:auto; margin-right:auto;
  margin-top: 100px;

}

.box{
  border: 1px solid rgb(229, 114, 0);
  border-radius: 20px;
  margin-top: -70px;
  margin-bottom: 50px;
}
.fundingtitle{
  padding-top: 50px;
  font-size: 25px;
}
.existfunding{
  position: relative;
  text-align: center;
  text-color: #e57200;
}
.navbar-search{
  display: flex;
  padding-top: 20px;
  padding-right: 30px;
  align-items: center;


}
.merchandise{
  position: relative;
  padding-top: -20px;
  text-align: center;
}
.text-center{
  padding-bottom: 30px;
}
.moreandmore1{
  text-align: right;
  margin-top: -40px;
  padding-right: 50px;
}
.existfunding{
  margin-bottom: 40px;
  margin-top: -50px;
}

</style>