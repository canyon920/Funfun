<template>
  <div class = "first-container">
<Fundingsearch :bringfundingsearch="fundingS"/>
    <div class = "second-bottom">
<Fundingsecondlist :bringfundinglist="fundingList"/>
    </div>
  </div>
</template>
<script>

import Fundingsearch from "../components/layout/fundinglist/fundingsearch";
import Fundingsecondlist from "../components/layout/fundinglist/fundingsecondlist";

export default {
  name: 'FundingList',
  components: {Fundingsearch, Fundingsecondlist},
  data(){
    return{
  /*    fundingS: [
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
        {
          presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",
          fundingTitle:'펀딩타이틀5',fundinging: '진행중',
          progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
        },

      ],*/
      fundingList:[
        {presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",eventTitle:"크리스마스 선물 추천",subTitle:"부연"},
        {presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",eventTitle:"8월",subTitle:"부연"},
        {presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",eventTitle:"8월",subTitle:"부연"},
        {presdeadimgUrl:"http://127.0.0.1:8887/cake.jpg",eventTitle:"8월",subTitle:"부연"},
      ]


    }
  }
}
</script>
<style>
.first-container{

}

</style>