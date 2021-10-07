<template>
  <div class="first">
    <!-- 툴바 -->
    <v-carousel
        id="v-carousel-item-top-event-banner"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slide.imgSrc"
      >
        <router-link :to="{name: 'EventPage', params:{ eventId: slide.eventId }}">
          <div style="width: 100%; height: 100%; cursor: pointer"></div>
        </router-link>
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

        <div class ="search" v-show="mainFriendSearchBar">

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
                    :class="{active: searchStart}"
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
                :class="{active: searchStart, deactive: !searchStart}"
            >
              <v-list-item
                  v-for="(item,fkey) in friends"
                  :key="fkey"
                  link
                  @click="searchFriendSelect(item.username,item.friendId)"
              >
                <v-list-item-icon>
                  <img :src="item.profileImg" style="border-radius: 20%; width: 25px; height: 25px">
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

          <MainSearch :class="{active : mainSearch.username, transy:searchStart}" :hidden="!mainSearch.username" :bringmainsearch="mainSearch" />

        </div>
        </transition>

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
          <div class="fonttext">
            <h2>마감예정인 펀딩</h2>
          </div>
          <Deadline :bringmainDeadline="mainDeadline" />
        </div>

        <v-divider
        ></v-divider>

        <div class ="search" v-show="mainFriendSearchBar">
        <div class = "join">
          <div class="textline">
            <h2>내가 참여한 선물</h2>
          </div>
          <Deadline :bringmainDeadline="mainJoin" />
        </div>
        </div>

        <v-divider
        ></v-divider>

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
import Mainmenu from '../components/layout/main/Main-menu'
import Mainevent from '../components/layout/main/Main-event'
import MainSearch from "../components/layout/main/Main-search";
import axios from "axios";
export default {
  name: 'Main',
  components: {

    Mainmenu,MainSearch,Mainevent,Deadline,Gibooline,

  },

  data () {
    return {
      mainFriendSearchBar: true,
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
        {
          imgSrc: require("@/assets/event/banner/ａｖｅｄａＥｖｅｎｔ.png"),
          eventId: 3,
        },
        {
          imgSrc: require("@/assets/event/banner/bagEvent.png"),
          eventId: 5,
        },
        {
          imgSrc: require("@/assets/event/banner/ｆｏｏｄEｖｅｎｔ.png"),
          eventId: 4,
        },
        {
          imgSrc: require("@/assets/event/banner/ｌｉｇｈｔＥｖｅｎｔ.png"),
          eventId: 2,
        },
        {
          imgSrc: require("@/assets/event/banner/ａｌｃｈｏｌｅＥｖｅｎｔ.png"),
          eventId: 1,
        },

      ],
      mainSearch:
      // null,
          {
            username:"",
            friendId: -1,
            fundinglist:[
              ],
          },
      friends: [
        // {profileImg: require("@/assets/logo/img-normal.jpg"), username: '춘식이', friendId: 2},
        // {profileImg: require("@/assets/logo/img-normal.jpg"), username: '라이언', friendId: 3},
        // {profileImg: require("@/assets/logo/img-normal.jpg"), username: '티코', friendId: 4},
        // {profileImg: require("@/assets/logo/img-normal.jpg"), username: '라둥이', friendId: 5},
      ],
      friendName: '',

      mainEvent: [
        {
          presimgUrl:require("@/assets/event/main/light.png"),
          eventTitle:'"8월에 태어난 친구에게", "친구야" 넌 꽃처럼 아름다워!',
          eventId:2
        },
        {  presimgUrl:require("@/assets/event/main/aveda.jpg"),
          eventTitle:"명품 같은 스몰럭셔리 상품, 꼭 비싸야만 명품인가?",
          eventId:3
        },
        {  presimgUrl:require("@/assets/event/main/alchole.jpg"),
          eventTitle:"어떡해?!, 한 잔 하고 가실텐가?",
          eventId:1
        },
        {  presimgUrl:require("@/assets/event/main/food.jpg"),
          eventTitle:'고급지게 맛있는 치킨, "치킨!" 넌 쵝오야!',
          eventId:4
        },
        {  presimgUrl:require("@/assets/event/main/bag.png"),
          eventTitle:'난 이 GaBang 을 가졌지, 이제 아무것도 부럽지 않아!, "브랜드 GaBang"',
          eventId:5
        },

      ],
      preforchangeventUrl:'',


      mainDeadline:[
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub2.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',
          progressBarPercent: 20, fundingname: 'ㅇㅇdsadasd asd as dsa dasdas das',fundingMoney: 1000,
          expireDate: '2021-11-30',
          fundingId:1
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'월급 탄 거 안다 도와주라', progressBarPercent: 20,
          fundingname: '코코',fundingMoney: 25000, expireDate: '2021-12-30',
          fundingId:2
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'"우리 아이"가 정말 갖고 싶어 해요',
          progressBarPercent: 50, fundingname: '곽두팔',fundingMoney: 3000,
          expireDate: '2021-12-03',
          fundingId:3
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'일단 고마워',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
          expireDate: '2022-01-30',
          fundingId:4
        },

      ],

      mainJoin:[
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'"우리" 친구 맞지?^^',
          progressBarPercent: 20, fundingname: '두팔',fundingMoney: 3000,
          expireDate: '2021-10-30',
          fundingId:1
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'너의 마음을 보여줘! 제발~',
          progressBarPercent: 20, fundingname: '춘식',fundingMoney: 3000,
          expireDate: '2021-09-30',
          fundingId:2
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'"생일이양"',
          progressBarPercent: 50, fundingname: '라둥',fundingMoney: 3000,
          expireDate: '2021-07-30',
          fundingId:3
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub2.png"),
          fundingTitle:'나! 이거이거',
          progressBarPercent: 80, fundingname: '라이언',fundingMoney: 3000,
          expireDate: '2021-06-30',
          fundingId:4
        },
      ],
    }
  },
  methods: {
    searchFriendSelect(username, friendId) {
      this.loading = false;
      this.searchStart = false;
      this.mainSearch.username = username;
      //여기에 axios 추가해 this.mainSearch.fundinglist 수정해줘야함
      // this.mainSearch.fundinglist = [
      //   {fundingId:1 ,funndingTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,funndingBrand: '카카오프렌즈' ,fundingTartgetMoney: '36900 원',fundingUrl: require("@/assets/example-img/chunsicthum.png")},
      //   {fundingId:2 ,funndingTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,funndingBrand: '카카오프렌즈' ,fundingTartgetMoney: '36900 원',fundingUrl: require("@/assets/example-img/chunsicsub1.png")},
      //   {fundingId:3 ,funndingTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,funndingBrand: '카카오프렌즈' ,fundingTartgetMoney: '36900 원',fundingUrl: require("@/assets/example-img/chunsicsub2.png")},
      //   {fundingId:4 ,funndingTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,funndingBrand: '카카오프렌즈' ,fundingTartgetMoney: '36900 원',fundingUrl: require("@/assets/example-img/chunsicsub3.png")},
      //   {fundingId:5 ,funndingTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,funndingBrand: '카카오프렌즈' ,fundingTartgetMoney: '36900 원',fundingUrl: require("@/assets/example-img/chunsicthum.png")},
      //   {fundingId:6 ,funndingTitle:'"언텍트 시대" 춘식이와 라이언의 사랑이야기' ,funndingBrand: '카카오프렌즈' ,fundingTartgetMoney: '36900 원',fundingUrl: require("@/assets/example-img/chunsicsub1.png")},
      // ]
      axios.get("http://127.0.0.1:9090/mainPage/friend/"+friendId)
      .then(res => {
        let jdata =  JSON.stringify(res.data);
        this.mainSearch.fundinglist = JSON.parse(jdata);
        console.log("#this.mainSearch.fundinglist",this.mainSearch.fundinglist);
      }).catch(error => {
        alert("error",error);
      })

    },
    topEventImg() {
      var wmm1 = window.matchMedia("screen and (max-width: 500px)");
      if (wmm1.matches) {
        this.slides[0].imgSrc = require("@/assets/event/banner/ａｖｅｄａＥｖｅｎｔｖｅｒ２.png")
        this.slides[1].imgSrc = require("@/assets/event/banner/bagEventｖｅｒ２.png")
        this.slides[2].imgSrc = require("@/assets/event/banner/ｆｏｏｄEｖｅｎｔｖｅｒ２.png")
        this.slides[3].imgSrc = require("@/assets/event/banner/ｌｉｇｈｔＥｖｅｎｔｖｅｒ２.png")
        this.slides[4].imgSrc = require("@/assets/event/banner/ａｌｃｈｏｌｅＥｖｅｎｔｖｅｒ２.png")
      } else{
        this.slides[0].imgSrc = require("@/assets/event/banner/ａｖｅｄａＥｖｅｎｔ.png")
        this.slides[1].imgSrc = require("@/assets/event/banner/bagEvent.png")
        this.slides[2].imgSrc = require("@/assets/event/banner/ｆｏｏｄEｖｅｎｔ.png")
        this.slides[3].imgSrc = require("@/assets/event/banner/ｌｉｇｈｔＥｖｅｎｔ.png")
        this.slides[4].imgSrc = require("@/assets/event/banner/ａｌｃｈｏｌｅＥｖｅｎｔ.png")
      }
    },
    isLoginMain() {
      if (window.localStorage.getItem('login_member')) {
        this.mainFriendSearchBar = true
      } else {
        this.mainFriendSearchBar = false
      }
    }

  },
  watch:{
    friendName(){
      this.loading = true
      this.searchStart = true
      //axios 로 친구리스트가져오기
      this.friendName = this.friendName.trim();
      if(this.friendName.length>0){
        axios.get("http://127.0.0.1:9090/mainPage/"+"1"+"/"+this.friendName) //1-> member_id
        .then(response => {
          let jdata =  JSON.stringify(response.data);
          this.friends = JSON.parse(jdata);
        }).catch(error => {
          alert("에러",error);
        })
      }

    }
  },
  beforeMount() {
    this.topEventImg()
    //this.isLoginMain()
  }
}


</script>
<style scoped>

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

.fonttext{
  margin-top: 30px;
}
.textline{
  margin-top: 30px;
}

.giboo {
  margin-top: 30px;
}

/*@media screen and (max-width: 800px){*/
/*  #v-carousel-item-top-event-banner {*/
/*    display: none;*/
/*  }*/
/*}*/

.active {
  animation-name: searchin;
  animation-duration: 1s;
}
.deactive {
}
.transy {
  animation-name: transyin;
  animation-duration: .8s;
}
@keyframes searchin {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}


@keyframes transyin {
  from{
    transform: translateY(-200px);
  }
  to{
  }
}

</style>