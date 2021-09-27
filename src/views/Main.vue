<template>
  <div class="first">
    <!-- 툴바 -->
    <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        style="width: 100vw"
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
      >
        <v-sheet
            :color="colors[i]"
            height="100%"
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2">
              {{ slide }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <!-- 사이즈 조정 디브  -->
      <div class = "second">
        <div class ="search">

          <div class ="search-second">
            <div class="title-div" style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px">
              <img :src="require('@/assets/logo/img-normal.jpg')" style="height: 50px; width: 50px; border-radius: 15px; margin-right: 10px;">
              <div style="font-weight: 700; font-size: 25px">
              친구를 검색해 주세요.
            </div>
            </div>
            <v-text-field
                outlined
                rounded
                label="친구찾기"
                v-model="friendName" >
              <template v-slot:prepend-inner>
                <v-icon>mdi-magnify</v-icon>
              </template>
              <template v-slot:append>
                <v-progress-circular
                    v-if="loading"
                    size="24"
                    color="rgb(229, 114, 0)"
                    indeterminate />
              </template>
            </v-text-field>

<!--            여기 해주자!!!!!!!!!!!!!           -->
<!--            <ul>-->
<!--              &lt;!&ndash; eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if &ndash;&gt;-->
<!--              <div v-for="(friend, fkey) in friends" :key="fkey" v-if="friend.name.includes(friendName)">-->
<!--                {{friend.name}}-->
<!--              </div>-->
<!--            </ul>-->

          </div>
          <MainSearch :bringmainsearch="mainSearch" />

        </div>
        <div class = "menu">

        <Mainmenu />
        </div>
        <div class = "coverevent">

          <Mainevent :bringmainEvent="mainEvent" />

        </div>

        <div class = "deadline">

          <Deadline :bringmainDeadline="mainDeadline" />
        </div>

        <div class = "join">

          <JoinGift :bringmainJoin="mainJoin" />
        </div>
        <div class = "giboo">

          <Gibooline/>

        </div>
      </div>
    </v-container>
    </div>
</template>
<script>



import Deadline from '../components/layout/main/Deadline'
import Gibooline from '../components/layout/main/Gibooline'
import JoinGift from '../components/layout/main/Joingift'
import Mainmenu from '../components/layout/main/Main-menu'
import Mainevent from '../components/layout/main/Main-event'
import MainSearch from "../components/layout/main/Main-search";
export default {
  name: 'Main',
  components: {

    Mainmenu,MainSearch,Mainevent,Deadline, JoinGift,Gibooline,

  },

  data () {
    return {
      loading:false,
      model: 0,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        '광고1',
        '광고2',
        '광고',
        '광고',
        '광고',
      ],
      mainSearch:{
        username:"춘식",
        fundinglist:"펀딩중인 상품이 없어요",
      },
      friends: [
            {name: '춘식이'},
            {name: '라이언'},
            {name: '티코'},
            {name: '라둥이'},
          ],
          friend: {
            name: '',
          },
          friendName: '',

      mainEvent: [
          {
            presimgUrl:"http://127.0.0.1:8887/chunsicsub1.png",
            eventTitle:"8월에 태어난 친구에게 추천선물",subTitle:"부연설명"},
          {  presimgUrl:"http://127.0.0.1:8887/chunsicsub1.png",
          eventTitle:"10월에 태어난 ",subTitle:"부연설명"},
      ],
      preforchangeventUrl:'',


      mainDeadline:[
          {
            presdeadimgUrl: require("@/assets/example-img/chunsicsub2.png"),
            fundingTitle:'천원은 해줄 수 있잖어',fundinging: '진행중',
            progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 1000,
            fundingId:1
          },
        {
          presdeadimgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'월급 탄 거 안다 도와주라',fundinging: '진행중', progressBarPercent: 20,
          fundingname: '코코',fundingMoney: 25000,
          fundingId:2
        },
        {
          presdeadimgUrl:require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'"우리 아이"가 정말 갖고 싶어 해요',fundinging: '진행중',
          progressBarPercent: 50, fundingname: '곽두팔',fundingMoney: 3000,
          fundingId:3
        },
        {
          presdeadimgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'일단 고마워',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
          fundingId:4
        },

      ],

      mainJoin:[
        {
          presJoinUrl:require("@/assets/example-img/chunsicsub3.png"),
          funding_title:'우리 친구 맞지?',fundinging: '진행중',
          progressBarPercent: 20, fundingname: '두팔',fundingMoney: 3000,
          fundingId:1
        },
        {
          presJoinUrl:require("@/assets/example-img/chunsicsub1.png"),
          funding_title:'너의 마음을 보여줘',fundinging: '진행중',
          progressBarPercent: 20, fundingname: '춘식',fundingMoney: 3000,
          fundingId:2
        },
        {
          presJoinUrl:require("@/assets/example-img/chunsicsub3.png"),
          funding_title:'생일이양',fundinging: '진행중',
          progressBarPercent: 50, fundingname: '라둥',fundingMoney: 3000,
          fundingId:3
        },
        {
          presJoinUrl:require("@/assets/example-img/chunsicsub2.png"),
          funding_title:'나 이거이거',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '라이언',fundingMoney: 3000,
          fundingId:4
        },

      ],
      methods: {


      }

    }
  },

}


</script>
<style>

.second{

  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;

}

.v-window v-item-group theme--dark v-carousel{
  height: 250px;
}
.menu{
   text-align: center;
}
.search-second{
  margin-top:50px;
}
.search-second h2{
  padding-bottom: 30px;
}

</style>