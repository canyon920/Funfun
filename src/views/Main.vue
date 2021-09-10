<template>
<div id="first">
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
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>

</div>


<p>OO님의 위시리스트</p>
<p>펀딩중인 상품이 없어요</p>
<v-btn  depressed elevation="2">♡친구에게 보여주기</v-btn>
</div>
<div class = "menu">
메뉴 문구
<div>
<div class="container">
<div class="inner-container">
<div class= "item"></div>
<div class= "item">가벼운선물</div>
<div class= "item">럭셔리선물</div>
<div class= "item">시원한선물</div>
<div class= "item">럭셔리선물</div>
<div class= "item">어른선물</div>


<div class= "item">출산선물</div>
<div class= "item">명품선물</div>
<div class= "item">결혼/집들이</div>
<div class= "item">럭셔리선물</div>
<div class= "item">럭셔리선물</div>
<div class= "item">럭셔리선물</div>
</div>
</div>
</div>
</div>
<div class = "event">
이벤트 상품
</div>
<div class = "deadline">
마감예정인 상품
</div>
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


    },
  }


</script>
<style>
.second{
 width: 1100px;
}
.v-window v-item-group theme--dark v-carousel{
height:250;
}
.inner-container{
 display: flex;


}

.item {
	flex: 1 1 15%;
	border: 1px solid black;
    width: 100px;
    height: 70px;
    border-radius: 50%;
}

</style>