<template>
  <p>친구를 검색해 주세요</p>
       <h1>ㅇㅇ 님의 위시리스트 </h1> <p> 더보기 </p>
  <v-btn elevation="2">하트 친구에게 보여주기</v-btn>
  <p>문구</p>
   <p>이벤트상품</p>
   <img src="https://ditoday.com/wp-content/uploads/2020/12/digital-insight-class-101-news-01-648x364.png"
   class = "photo-img">
   <img src="http://cdnimage.ebn.co.kr/news/202007/news_1596164427_1444994_m_1.png"
      class = "photo-img">
      <p>마감예정인 상품</p>
      <p>내가 참여한 상품</p>
      <p>나눔을 전하세요</p>

         <v-footer
                dark
                padless
              >
                <v-card
                  flat
                  tile
                  class="indigo lighten-1 white--text text-center"
                >
                  <v-card-text>
                    <v-btn
                      v-for="icon in icons"
                      :key="icon"
                      class="mx-4 white--text"
                      icon
                    >
                      <v-icon size="24px">
                        {{ icon }}
                      </v-icon>
                    </v-btn>
                  </v-card-text>

                  <v-card-text class="white--text pt-0">
              r vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                  </v-card-text>
                </v-card>
              </v-footer>
</template>
<script>
export default{
}
</script>