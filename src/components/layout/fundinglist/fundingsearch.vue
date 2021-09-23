<template>
<div class ="first-container">
  <div class ="second-up">
      <div class ="list">
        나의 펀딩 리스트
      </div>
    <div class = "box">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="6"
          >
            <div class = "fundingtitle">
              내가 올린 펀딩리스트
            </div>

          </v-col>
          <v-col cols="12"
                 sm="6">
            <div class="navbar-search">
              <v-btn x-small fab plain><v-icon>mdi-magnify</v-icon></v-btn>
              <v-text-field class="mt-lg-5 mt-md-5"
                            placeholder="친구검색"
                            rounded
                            filled="#ffcc99"
                            dense
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <div class ="moreandmore"><router-link to="/wishlist">더보기</router-link></div>

    <div class ="merchandise">
      펀딩중인 상품이 없어요
      <div class="text-center">
        <v-btn  depressed elevation="2"><router-link to="/showfriend">♡친구에게 보여주기</router-link></v-btn>
      </div>
    </div>

    </div>
  </div>
</div>
</template>
<script>
export  default {
  name: 'Fundingsearch',
  props:{

  },
}
</script>

<style>

.first-container .second-up{
max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
margin-top: 100px;

}
.first-container .second-up .list{
padding-bottom: 50px;
font-size:30px
}
.box{
border: 3px solid darkgray;
border-radius: 30px;
font-size:20px
}
.fundingtitle{
padding-top: 50px;
padding-left: 70px;
}
.navbar-search{
display: flex;
padding-top: 20px;
padding-right: 30px;
align-items: center;


}
.merchandise{
position: relative;
padding: 50px;
text-align: center;
}
.text-center{

padding-top: 50px;
padding-bottom: 30px;
}
.moreandmore{
  text-align: right;
  padding-right: 30px;
}

</style>