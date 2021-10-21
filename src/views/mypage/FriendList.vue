<template>
  <div class = "first-container">
    <div class = "second">
      <div class ="list">
        친구 리스트 찾기
      </div>
      <div class ="search-second">
        <div class="title-div" style="display: flex; flex-direction: row; align-items: center; margin-bottom: 10px">
          <img :src="require('@/assets/logo/img-normal.jpg')" style="height: 50px; width: 50px; border-radius: 15px; margin-right: 10px;">
          <div style="font-weight: 700; font-size: 25px">
            친구를 검색해 주세요.
          </div>
        </div>
        <v-text-field
            @click=reset
            outlined
            rounded
            label="친구찾기"
            v-model="friendName">
          <template v-slot:prepend-inner>
            <v-icon>mdi-magnify</v-icon>
          </template>
          <template v-slot:append>
            <v-progress-circular
                v-show="loading"
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
              v-for="item in friends"
              :key="item.friendId"
              link
              @click="searchClickF(item.username, item.memberid)"
          >
            <v-list-item-icon>
              <img :src="item.profileImg" style="border-radius: 20%; width: 25px; height: 25px">
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.username }}</v-list-item-title>
              <v-list-item-title>{{ item.email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
<!--      <div class ="datalist">-->
<!--        <div v-if="funding.fundinglist.length == 0" style="text-align: center; color: rgb(229,114,0)">-->
<!--          펀딩중인 상품이 없어요.-->
<!--        </div>-->
<!--        <div class = "product" v-else>-->
          <MainSearch :class="{active : funding.username, transy:searchStart}" :hidden="!funding.username" :bringmainsearch="funding" />
<!--        </div>-->
<!--      </div>-->

    </div>
    <div class = "second-bottom">
      <!--      <Fundingsecondlist />-->
      <Mainevent :bringmainEvent="friendEvent" />
    </div>
  </div>
</template>
<script>

import Mainevent from '@/components/layout/main/Main-event';
import axios from "axios";
import MainSearch from "@/components/layout/main/Main-search";
import {getHeaders} from "@/service/header";
import {reServerSend} from "@/service/refreshForAccessToken";



export default {
  name: 'FriendList',
  components: {Mainevent, MainSearch},
  data() {
    return {
      loading: false,
      searchStart: false,
      friendListCard:{lists:[]},
      countTry: 0,

      friendtitle: {
        Title: "",
      },

      friendEvent: [
        {
          presimgUrl: require("@/assets/event/main/light.png"),
          eventTitle: '"8월에 태어난 친구에게", "친구야" 넌 꽃처럼 아름다워!',
          eventId: 2
        },
        {
          presimgUrl: require("@/assets/event/main/aveda.jpg"),
          eventTitle: "명품 같은 스몰럭셔리 상품, 꼭 비싸야만 명품인가?",
          eventId: 3
        },
        {
          presimgUrl: require("@/assets/event/main/alchole.jpg"),
          eventTitle: "어떡해?!, 한 잔 하고 가실텐가?",
          eventId: 1
        },
        {
          presimgUrl: require("@/assets/event/main/food.jpg"),
          eventTitle: '고급지게 맛있는 치킨, "치킨!" 넌 쵝오야!',
          eventId: 4
        },
        {
          presimgUrl: require("@/assets/event/main/bag.png"),
          eventTitle: '난 이 GaBang 을 가졌지, 이제 아무것도 부럽지 않아!, "브랜드 GaBang"',
          eventId: 5
        },

      ],

      friends: [
        // {profileImg: require("@/assets/logo/img-normal.jpg"), username: '춘식이', friendId:1},
        // {profileImg: require("@/assets/logo/img-normal.jpg"), username: '라이언', friendId:2},
        // {profileImg: require("@/assets/logo/img-normal.jpg"), username: '티코', friendId:3},
        // {profileImg: require("@/assets/logo/img-normal.jpg"), username: '라둥이', friendId:4},
      ],
      friendName: '',

      funding: {
        username: "",
        friendId: 0,
        fundinglist: [
        ]
      },

    }
  },
  methods: {
    reset(){
      this.friendName=''
    },
    searchClickF(username, memberid) {
      this.loading = false;
      this.searchStart = false;
      this.funding.username = username;
      axios.get("http://127.0.0.1:9090/mainPage/friend/"+memberid, getHeaders())
          .then(res => {
            let jdata =  JSON.stringify(res.data);
            this.funding.fundinglist = JSON.parse(jdata);
            console.log(this.funding.fundinglist)
          }).catch(error => {
        console.log(error.messages)
        if (error.response.status===403) {
          this.countTry++
          if (this.countTry == 1) {
            reServerSend();
          }
          console.log("다시 오류인것 확인 로그")
        }
      })
    }
  },

  watch: {
    friendName() {
      if (!this.friendName) {
        this.loading = false
        this.searchStart = false
        this.funding.fundinglist = []
        this.funding.username = ''
        return  false
      }
      var MemberId = this.$route.params.memberId
      this.loading = true
      this.searchStart = true
      //axios 로 친구리스트가져오기
      this.friendName = this.friendName.trim();
      this.friendName = this.friendName.replace(/\s/gi, "")
      if(this.friendName.length>0){
        axios.get("http://127.0.0.1:9090/mainPage/"+MemberId+"/"+this.friendName) //1-> member_id
            .then(response => {
              let jdata =  JSON.stringify(response.data);
              this.friends = JSON.parse(jdata);
            }).catch(error => {
          console.log(error.messages)
        })
      }
    }
  },
  beforeCreate() {
    if (!window.localStorage.getItem('login_member')) {
      this.$router.push("/login")
    }
  },
}


</script>
<style scoped>
.first-container{

}
.first-container .list{
  margin-top: 70px;
  font-size:30px
}
.second-bottom{
  max-width:1100px;
  left:0; right:0; margin-left:auto; margin-right:auto;
  margin-bottom: 70px;
}
.active {
  animation-name: searchin;
  animation-duration: 1s;
}
.transy {
  animation-name: transyin;
  animation-duration: .5s;
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