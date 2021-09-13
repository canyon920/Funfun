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
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <!-- 사이즈 조정 디브  -->
      <div class = "second">
        <div class = "search">
          친구를 검색해 주세요.
          <div>
            <v-text-field
                outlined
                label="친구찾기"
                prepend-inner-icon="mdi-map-marker">

            </v-text-field>
          </div>

          <div class = wishlist>OO님의 위시리스트</div>
          <div class = no-merchandise>펀딩중인 상품이 없어요
          </div>
          <p>더보기 </p>

          <div class="text-center">
          <v-btn  depressed elevation="2">♡친구에게 보여주기</v-btn>
          </div>
        </div>
        <div class = "menu">
          메뉴 문구
          <div>
            <div class="container">
              <div class="inner-container">
                <div class= "item-box">
                  <div class = "item-box-item item-box-inner1">
                    <div class= "item img1"></div>
                    가벼운선물
                  </div>
                  <div class = "item-box-item item-box-inner2">
                    <div class= "item img2"></div>
                    럭셔리선물
                  </div>
                  <div class = "item-box-item item-box-inner3">
                    <div class= "item"></div>
                    시원한선물
                  </div>
                  <div class = "item-box-item item-box-inner4">
                    <div class= "item"></div>
                    럭셔리선물
                  </div>
                  <div class = "item-box-item item-box-inner5">
                    <div class= "item"></div>
                    어른선물
                  </div>
                  <div class = "item-box-item item-box-inner6">
                    <div class= "item"></div>
                    출산선물
                  </div>
                  <div class = "item-box-item item-box-inner7">
                    <div class= "item"></div>
                    명품선물
                  </div>
                  <div class = "item-box-item item-box-inner8">
                    <div class= "item"></div>
                    결혼/집들이
                  </div>
                  <div class = "item-box-item item-box-inner9">
                    <div class= "item"></div>
                    럭셔리선물
                  </div>
                  <div class = "item-box-item item-box-inner10">
                    <div class= "item"></div>
                    쓸모없는선물
                  </div>
                  <div class = "item-box-item item-box-inner11">
                    <div class= "item"></div>
                    배달선물
                  </div>
                  <div class = "item-box-item item-box-inner12">
                    <div class= "item"></div>
                    남다른선물
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class = "event">
          이벤트 상품
          <div class="event-second-div">
            <div class="event-main">
              <div class = "event-img event-1">
              </div>
              <div class = "event-sub-title">
                8월에태어난 어쩌구
              </div>
              <div class = "event-sub">
                내용ㅇㅇㅇㅇ
              </div>
            </div>
            <div class="event-main">
              <div class = "event-img event-2">
              </div>
              <div class = "event-sub-title">
                10월에태어난 어쩌구
              </div>
              <div class = "event-sub">
                내용 ㅇㅇㅇㅇ
              </div>
            </div>
          </div>
        </div>
      <v-container>
        <div class = "deadline">
          마감예정인 상품
        </div>
      </v-container>
        <div class = "join">
          내가 참여한 선물
        </div>
        <div class = "giboo">
          나눔을 전하세요

        </div>
      </div>

    </v-container>
  </div>
</template>
<script>




import Deadline from "@/components/layout/Deadline";

export default {
  name: 'Main',

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
        '광고',
        '광고',
        '광고',
        '광고',
        '광고',
      ],
    }
  },
  components: {
    Deadline,



  },
}


</script>
<style>

.second{
  max-width: 1100px;
}
.search{

}
.search .no-merchandise{
  height: 200px;



}
.search .text-center{
 text-align: center;
}
.search .wishlist{
  text-align: center;
}
.search .no-merchandise{
  text-align: center;
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
.event{

}
.event .event-second-div{

}
.event .event-second-div .event-main{
 float: left;
  width: 50%;
}
.event .event-second-div .event-main .event-img{
  width : 200px;
  height : 200px;

}
.event .event-second-div .event-main .event-1{
  background-image: url(https://img.allurekorea.com/allure/2019/08/style_5d43859e4640d.jpg);
  background-size: 200px 200px;
}
.event .event-second-div .event-main .event-2{
  background-image: url(https://img.allurekorea.com/allure/2019/08/style_5d43859e4640d.jpg);
  background-size: 200px 200px;
}
.event .event-second-div .event-main .event-sub-title{
  font-weight: bold;
}
.event .event-second-div .event-main .event-sub{

}




</style>