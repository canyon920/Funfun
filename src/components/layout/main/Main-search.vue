<template>
  <div class = "search">

    <div class =line>
      <div class = wishlist>{{ bringmainsearch.username}}님의 위시리스트</div>
      <div class="moreandmore" ><router-link to="/wishlist">더보기</router-link> </div>
      <div class = no-merchandise>
        <div class ="datalist">
          <div v-if="mainSearch.length == 0">
            펀딩중인 상품이 없어요.
          </div>
          <div class = "funding" v-else style="width:1000px;" >

            <carousel :autoplay="true" :nav="false" >
              <template slot="prev"><span class="prev" >prev</span></template>
              <a v-for="(merchan, idx) in mainSearch" :key="idx">

                <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">

                  <v-card
                      class="mx-auto"
                      width="200"
                      height="200"
                  >
                    <img
                        class="white--text align-end"
                        height="100px"
                        width="200px"
                        v-bind:src="merchan.presdeadimgUrl">
                    <v-card-text>
                      <p class="text-h5 text--primary">
                        {{ merchan.fundingTitle}}
                      </p>

                      <div class="text--primary">
                        {{ merchan.fundingsubTitle}}.<br>

                      </div>
                    </v-card-text>

                  </v-card>
                </div>

                <!--    <template slot="next"><span class="next">next</span></template>-->
              </a>
            </carousel>

          </div>

        </div>
        <div class="text-center">
          <v-btn  depressed elevation="2"><router-link to="/showfriend">♡친구에게 보여주기</router-link></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  name: 'Main-search',
  data(){
    return{
      mainSearch:[
        {fundingTitle:'펀딩제목',fundingsubTitle: '설명',presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png"},
        {fundingTitle:'b',fundingsubTitle: '설명1',presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png"},
        {fundingTitle:'b',fundingsubTitle: '설명3',presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png"},
        {fundingTitle:'b',fundingsubTitle: '설명4',presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png"},
        {fundingTitle:'b',fundingsubTitle: '설명5',presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png"},
        {fundingTitle:'b',fundingsubTitle: '설명6',presdeadimgUrl:"http://127.0.0.1:8887/chunsicsub1.png"},


      ],
    }
  },
  components: { carousel},
  props: {
    bringmainsearch: {
      type: Object
    },
  }


}
</script>
<style>
.search{
  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
  margin-top: 60px;


}
.search .no-merchandise{

}
.line{

  border: 1px solid rgb(229, 114, 0);
  border-radius: 20px;
  padding: 20px;


}
.no-merchandise .datalist{
  align: center;
  display: flex;

}


.search .text-center{
  text-align: center;
}
.search .wishlist{
  text-align: left;
  font-size: 25px;
}
.search .no-merchandise{
  position: relative;
  padding-top: 60px;
  text-align: center;
  color: #e57200;

}
.moreandmore{

  text-align: right;
  margin-top: 10px;

}
.funding{
  padding: 10px;

}
</style>