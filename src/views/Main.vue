<template>
  <div class="first">
    <!-- 툴바 -->
    <v-carousel
        id="v-carousel-item-top-event-banner"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        style="width: 100vw"
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slide.imgSrc"
          style="height: 100vw"
      >
        <!--        <v-sheet-->
        <!--            :color="colors[i]"-->
        <!--            height="100%"-->
        <!--        >-->
        <!--          <v-row-->
        <!--              class="fill-height"-->
        <!--              align="center"-->
        <!--              justify="center"-->
        <!--          >-->
        <!--            <div class="text-h2">-->
        <!--              {{ slide }}-->
        <!--            </div>-->
        <!--          </v-row>-->
        <!--        </v-sheet>-->
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
                v-model="friendName">
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


            <v-list
                dense
                nav
                v-show="searchStart"
            >
              <v-list-item
                  v-for="(item,fkey) in friends"
                  :key="fkey"
                  link
                  @click="searchFriendSelect(item.username)"
              >
                <v-list-item-icon>
                  <img :src="item.profileImg" style="border-radius: 20%">
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.username }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <!--            여기 해주자!!!!!!!!!!!!!           -->
            <!--            <ul>-->
            <!--              &lt;!&ndash; eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if &ndash;&gt;-->
            <!--              <div v-for="(friend, fkey) in friends" :key="fkey" v-if="friend.name.includes(friendName)">-->
            <!--                {{friend.name}}-->
            <!--              </div>-->
            <!--            </ul>-->

          </div>
          <MainSearch v-show="mainSearch" :bringmainsearch="mainSearch" />

        </div>
        <div class = "menu">

          <Mainmenu />
        </div>
        <div class = "coverevent">

          <v-divider
          ></v-divider>
          <Mainevent :bringmainEvent="mainEvent" />
          <v-divider
          ></v-divider>

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
      loading:true,
      searchStart : true,
      model: 0,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        {imgSrc: require("@/assets/event/main1.jpg")},
        {imgSrc: require("@/assets/event/banner/bagEvent.png")},
        {imgSrc: "https://funfunbucket.s3.ap-northeast-2.amazonaws.com/finfinbucket-static/first/first2.jpg"},
        '광고',

        '광고',
      ],
      mainSearch:
      // null,
          {
            username:"춘식",
            fundinglist:"펀딩중인 상품이 없어요",
          },
      friends: [
        {profileImg: require("@/assets/logo/img-normal.jpg"), username: '춘식이'},
        {profileImg: require("@/assets/logo/img-normal.jpg"), username: '라이언'},
        {profileImg: require("@/assets/logo/img-normal.jpg"), username: '티코'},
        {profileImg: require("@/assets/logo/img-normal.jpg"), username: '라둥이'},
      ],
      friend: {
        name: '',
      },
      friendName: '',

      mainEvent: [
        {
          presimgUrl:require("@/assets/event/main2.png"),
          eventTitle:'"8월에 태어난 친구에게" "친구야" 꽃처럼 아름다워!',
          eventId:2
        },
        {  presimgUrl:require("@/assets/event/main1.jpg"),
          eventTitle:"명품같은 스몰럭셔리 상품 꼭 비싸야만 명품인가?",
          eventId:1
        },
        {  presimgUrl:require("@/assets/event/main3.jpg"),
          eventTitle:"명품같은 스몰럭셔리 상품 꼭 비싸야만 명품인가?",
          eventId:3
        },
        {  presimgUrl:require("@/assets/event/main4.jpg"),
          eventTitle:"명품같은 스몰럭셔리 상품 꼭 비싸야만 명품인가?",
          eventId:4
        },
        {  presimgUrl:require("@/assets/event/main5.png"),
          eventTitle:"명품같은 스몰럭셔리 상품 꼭 비싸야만 명품인가?",
          eventId:5
        },

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
          funding_title:'"우리" 친구 맞지?^^',fundinging: '진행중',
          progressBarPercent: 20, fundingname: '두팔',fundingMoney: 3000,
          fundingId:1
        },
        {
          presJoinUrl:require("@/assets/example-img/chunsicsub1.png"),
          funding_title:'너의 마음을 보여줘! 제발~',fundinging: '진행중',
          progressBarPercent: 20, fundingname: '춘식',fundingMoney: 3000,
          fundingId:2
        },
        {
          presJoinUrl:require("@/assets/example-img/chunsicsub3.png"),
          funding_title:'"생일이양"',fundinging: '진행중',
          progressBarPercent: 50, fundingname: '라둥',fundingMoney: 3000,
          fundingId:3
        },
        {
          presJoinUrl:require("@/assets/example-img/chunsicsub2.png"),
          funding_title:'나! 이거이거',fundinging: '진행중',
          progressBarPercent: 80, fundingname: '라이언',fundingMoney: 3000,
          fundingId:4
        },

      ],
    }
  },
  methods: {
    searchFriendSelect(username) {
      this.mainSearch.username = username
    }

  }
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

@media screen and (max-width: 415px){
  #v-carousel-item-top-event-banner {
    display: none;
  }
}

</style>