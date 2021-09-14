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
          <MainSearch/>
        </div>
        <div class = "menu">
          메뉴 문구
        <Mainmenu />
        </div>
        <div class = "coverevent">
          이벤트 상품
          <Mainevent :bringmainEvent="mainEvent" @bringsimg01Click="img01Click"  @bringsimg02Click="img02Click"/>

        </div>

        <div class = "deadline">
          마감예정인 상품
          <Deadline :bringmainDeadline="mainDeadline" @bringdeadimg01Click="deadimg01Click"
                    @bringdeadimg02Click="deadimg02Click" @bringdeadimg03Click="deadimg03Click"
                    @bringdeadimg04Click="deadimg04Click"/>
        </div>

        <div class = "join">
          내가 참여한 선물
          <JoinGift :bringmainJoin="mainJoin" @bringJoinimg01Click="deadimg01Click"
                    @bringJoinimg02Click="Joinimg02Click" @bringJoinimg03Click="Joinimg03Click"
                    @bringJoinimg04Click="Joinimg04Click" />
        </div>
        <div class = "giboo">
          나눔을 전하세요
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
      mainEvent: {
        preforchangeventUrl:'',
        presimgUrl01:"http://127.0.0.1:8887/cake.jpg",
        presimgUrl02:"http://127.0.0.1:8887/cake.jpg",

      },
      mainDeadline:{
        preforchandeadUrl:'',
        fundingTitle01: '펀딩타이틀1',
        fundinging01: '진행중',
        fundingname01: '신혜림',
        fundingMoney01: 3000,

        fundingTitle02: '펀딩타이틀2',
        fundinging02: '진행중',
        fundingname02: '신혜림',
        fundingMoney02: 3000,

        fundingTitle03: '펀딩타이틀3',
        fundinging03: '진행중',
        fundingname03: '신혜림',
        fundingMoney03: 3000,

        fundingTitle04: '펀딩타이틀4',
        fundinging04: '진행중',
        fundingname04: '신혜림',
        fundingMoney04: 3000,
        presdeadimgUrl01:"http://127.0.0.1:8887/cake.jpg",
        presdeadimgUrl02:"http://127.0.0.1:8887/cake.jpg",
        presdeadimgUrl03:"http://127.0.0.1:8887/cake.jpg",
        presdeadimgUrl04:"http://127.0.0.1:8887/cake.jpg",

      },
      mainJoin:{
        presJoinUrl01:"http://127.0.0.1:8887/cake.jpg",

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
.menu .container{}
.menu .container .inner-container{
  display: flex;


}
.menu .container .inner-container .item-box{
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 20px;
}
.menu .container .inner-container .item-box .item-box-item {
  flex: 1 1 15%;
  padding:20px;
}
.menu .container .inner-container .item-box .item {
  flex: 1;
  border: 1px solid black;
  width: 70px;
  height: 70px;
  border-radius: 50%;



}
.menu .container .inner-container .item-box .img1{
  background-image: url(https://img.allurekorea.com/allure/2019/08/style_5d43859e4640d.jpg);
  background-size:70px 70px;
}
.menu .container .inner-container .item-box .img2{
  background-image: url(https://img.allurekorea.com/allure/2019/08/style_5d43859e4640d.jpg);
  background-size:70px 70px;
}





</style>