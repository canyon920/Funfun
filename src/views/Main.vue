<template>
  <div class="first">
    <!-- 툴바 -->
    <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
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
            <h2>친구를 검색해 주세요.</h2>
            <v-text-field
                outlined
                label="친구찾기"
                prepend-inner-icon="mdi-map-marker" v-model="friendName" >
              <v-icon>fas fa-search</v-icon>
            </v-text-field>
            <ul>
              <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
              <div v-for="friend in friends" :key="friend" v-if="friend.name.includes(friendName)">
                {{friend.name}}
              </div>
            </ul>
          </div>
          <MainSearch :bringmainsearch="mainSearch" />

        </div>
        <div class = "menu">

        <Mainmenu />
        </div>
        <div class = "coverevent">

          <Mainevent :bringmainEvent="mainEvent" @bringsimg01Click="img01Click"  @bringsimg02Click="img02Click"/>

        </div>

        <div class = "deadline">

          <Deadline :bringmainDeadline="mainDeadline" @bringdeadimg01Click="deadimg01Click"
                    @bringdeadimg02Click="deadimg02Click" @bringdeadimg03Click="deadimg03Click"
                    @bringdeadimg04Click="deadimg04Click"/>
        </div>

        <div class = "join">

          <JoinGift :bringmainJoin="mainJoin" @bringJoinimg01Click="deadimg01Click"
                    @bringJoinimg02Click="Joinimg02Click" @bringJoinimg03Click="Joinimg03Click"
                    @bringJoinimg04Click="Joinimg04Click" />
        </div>
        <div class = "giboo">

          <Gibooline/>

        </div>
      </div>
    </v-container>
    </div>
</template>
<script>



import Deadline from '../components/layout/Deadline'
import Gibooline from '../components/layout/Gibooline'
import JoinGift from '../components/layout/Joingift'
import Mainmenu from '../components/layout/Main-menu'
import Mainevent from '../components/layout/Main-event'
import MainSearch from "../components/layout/Main-search";
export default {
  name: 'Main',
  components: {

    Mainmenu,MainSearch,Mainevent,Deadline, JoinGift,Gibooline,

  },

  data () {
    return {
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
            presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png",
            fundingTitle:'펀딩타이틀1',fundinging: '진행중',
            progressBarPercent: 20, fundingname: 'ㅇㅇ',fundingMoney: 3000,
          },
        {
          presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png",
          fundingTitle:'펀딩타이틀2',fundinging: '진행중', progressBarPercent: 20,
          fundingname: '코코',fundingMoney: 3000,
        },
        {
          presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png",
          fundingTitle:'펀딩타이틀3',fundinging: '진행중',
          progressBarPercent: 50, fundingname: '곽두팔',fundingMoney: 3000,
        },
        {
          presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png",
          fundingTitle:'펀딩타이틀4',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 3000,
        },

      ],

      mainJoin:[
        {
          presJoinUrl:"http://127.0.0.1:8887/chunsicsub1.png",
          funding_title:'펀딩타이틀1',fundinging: '진행중',
          progressBarPercent: 20, fundingname: '두팔',fundingMoney: 3000,
        },
        {
          presJoinUrl:"http://127.0.0.1:8887/chunsicsub1.png",
          funding_title:'펀딩타이틀2',fundinging: '진행중', progressBarPercent: 20,
          fundingname: '춘식',fundingMoney: 3000,
        },
        {
          presJoinUrl:"http://127.0.0.1:8887/chunsicsub1.png",
          funding_title:'펀딩타이틀3',fundinging: '진행중',
          progressBarPercent: 50, fundingname: '라둥',fundingMoney: 3000,
        },
        {
          presJoinUrl:"http://127.0.0.1:8887/chunsicsub1.png",
          funding_title:'펀딩타이틀4',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '라이언',fundingMoney: 3000,
        },

      ],
      methods: {
        img01Click(){
          this.preforchangeventUrl=this.mainEvent.presimgUrl01
          this.mainEvent.presimgUrl01 = this.mainEvent.presimgUrl02
          this.mainEvent.presimgUrl02 =  this.preforchangeventUrl
        },
        img02Click(){
          this.preforchangeventUrl=this.mainEvent.presimgUrl01
          this.mainEvent.presimgUrl01 = this.mainEvent.presimgUrl02
          this.mainEvent.presimgUrl02 = this.mainEvent.presimgUrl01
        },

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