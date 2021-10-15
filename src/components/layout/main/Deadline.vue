<template>
  <div class = "deadline">

    <carousel id="shop-carousel" :autoplay="bringOuto" :nav="false" :responsive="{
              1024:{
                items:3,
              },
              758:{
                items:3,
              },
              250:{
                items:1,
              }
            }">

      <div v-for="(value,vkey) in bringmainDeadline" :key="vkey">
        <router-link :to="{name: 'DetailFundingPage' ,params: {fundingId: value.fundingId}}" style="text-decoration: none">
          <div class="card-div" style="border: 0.5px solid rgba(0,0,0,0);">

            <v-card
                id="v-card-custom"
                class="mx-auto"
                max-width="275px" >
              <img
                  id="card-img"
                  class="white--text align-end"
                  v-bind:src="value.preFundingImgUrl">

              <v-card-title style="text-align: center">{{value.fundingTitle}}</v-card-title>

              <div class="progress-bar-total-div">

                <div class="progress-bar-img">
                  <div class="progressBar-div">
                    <div class="progressBar" :style="{width : value.progressBarPercent +'%'}">
                      <!--            프로그래스 바            -->
                    </div>
                  </div>
                </div>

                <v-card-subtitle class="pb-0">
                  <div id="progress-bar-text">
                    {{value.progressBarPercent}}% 달성
                  </div>
                  <div class="slush">
                    /
                  </div>
                  <div id="expire-date-text">
                    만료일: {{value.expireDate}}
                  </div>
                </v-card-subtitle>

              </div>

              <v-card-text id="card-text" class="text--primary">
                <div class ="fundingname">{{value.fundingname}}님의 펀딩 상품</div>

                <div class="fundingmoeny">{{value.fundingMoney}}원 달성</div>
              </v-card-text>

            </v-card>

          </div>
        </router-link>
      </div>

    </carousel>
  </div>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  name: 'Deadline',

  components: { carousel },
  props: {
    bringmainDeadline : {
      type: Array
    },
    bringOuto:{
      type:Boolean
    }
  },
  emits:[
    'bringdeadimg01Click','bringdeadimg02Click','bringdeadimg03Click','bringdeadimg04Click'

  ],
}


</script>
<style scoped>
#card-text {
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.deadline {
  margin-top: 100px;
  margin-bottom: 90px;
}

.fundingmoeny{ color: rgb(229, 114, 0);}

.pb-0{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#v-card-custom {
  position: relative;
  max-height: 815px;
  border-bottom: 0.5px solid rgba(0,0,0,.2);
}
#v-card-custom #card-img {
  height: 275px;
  width: 275px;

}
#v-card-custom .progress-bar-total-div {


}
#v-card-custom .progress-bar-total-div .progressBar-div {
  position: absolute;
  display: block;
  height: 8px;
  /*margin: 0px 10px;*/
  width: 90%;
  left: 5%;
  background-color: rgba(229, 114, 0, .2);
  bottom: 22%;

}
#v-card-custom .progress-bar-total-div .progressBar-div .progressBar {
  height: 8px;
  background-color: rgb(229, 114, 0);
  /*width: 30%;*/
}

.fundingname {

  font-size: 20px;
}
.card-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}


@media screen and (min-width: 415px) and (max-width: 1300px){
  #v-card-custom {
    max-width: 200px !important;
  }
  #v-card-custom div {
    font-size: 15px !important;
    line-height: 20px !important;

  }
  #card-img {
    height: 200px !important;
    width: 200px !important;
  }
  #shop-carousel {
    max-width: 800px !important;
  }

  #v-card-custom div #progress-bar-text,
  #v-card-custom div div.slush,
  #v-card-custom div #expire-date-text {
    font-size: 12px !important;
    line-height: 25px !important;

  }

}

@media screen and (max-width: 415px){
  #v-card-custom {
    max-width: 215px !important;
  }
  #v-card-custom div {
    font-size: 15px !important;
    line-height: 20px !important;
  }
  #card-img {
    height: 215px !important;
    width: 215px !important;
  }
  #shop-carousel {
    max-width: 350px !important;
  }

  #v-card-custom div #progress-bar-text,
  #v-card-custom div div.slush,
  #v-card-custom div #expire-date-text {
    font-size: 12px !important;
    line-height: 25px !important;

  }

}

</style>