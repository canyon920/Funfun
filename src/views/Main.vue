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
          <MainSearch :bringmainsearch="mainSearch"/>
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
      mainEvent: {
        preforchangeventUrl:'',
        presimgUrl01:"http://127.0.0.1:8887/cake.jpg",
        presimgUrl02:"http://127.0.0.1:8887/cake.jpg",

      },
      mainDeadline:{
        preforchandeadUrl:'',
        fundingTitle01: '펀딩타이틀1',
        fundinging01: '진행률',
        progressBarPercent01:10,
        fundingname01: '신가비',
        fundingMoney01: 3000,

        fundingTitle02: '펀딩타이틀2',
        fundinging02: '진행중',
        progressBarPercent02:30,
        fundingname02: '피넛',
        fundingMoney02: 3000,

        fundingTitle03: '펀딩타이틀3',
        fundinging03: '진행중',
        progressBarPercent03:20,
        fundingname03: '요니제이',
        fundingMoney03: 3000,

        fundingTitle04: '펀딩타이틀4',
        fundinging04: '진행중',
        progressBarPercent04:50,
        fundingname04: '허니제이',
        fundingMoney04: 3000,
        presdeadimgUrl01:"http://127.0.0.1:8887/cake.jpg",
        presdeadimgUrl02:"http://127.0.0.1:8887/cake.jpg",
        presdeadimgUrl03:"http://127.0.0.1:8887/cake.jpg",
        presdeadimgUrl04:"http://127.0.0.1:8887/cake.jpg",

      },
      mainJoin:{
        presJoinUrl01:"http://127.0.0.1:8887/cake.jpg",
        presJoinUrl02:"http://127.0.0.1:8887/cake.jpg",
        presJoinUrl03:"http://127.0.0.1:8887/cake.jpg",
        presJoinUrl04:"http://127.0.0.1:8887/cake.jpg",
        funding_title01:'농식품 펀딩 전용관',
        fundinging01:'진행중',
        progressBarPercent01:30,
        fundingname01:'김춘식',
        fundingMoney01:'3500',

        funding_title02:'b',
        fundinging02:'진행중',
        progressBarPercent02:50,
        fundingname02:'라이언',
        fundingMoney02:'555',

        funding_title03:'c',
        fundinging03:'진행중',
        progressBarPercent03:40,
        fundingname03:'라둥이',
        fundingMoney03:'66600',

        funding_title04:'d',
        fundinging04:'진행중',
        progressBarPercent04:80,
        fundingname04:'김삼식',
        fundingMoney04:'20000',


      },
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


</style>